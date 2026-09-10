/**
 * 全站抽检：文档页正文没被换成首页，Archify iframe 指向的 HTML 也不是首页。
 *
 * 用法：
 *   pnpm serve --port 3000   # 另开终端
 *   pnpm check:pages
 *
 * 覆盖：sitemap 全部 loc + MDX 里每一处 ArchifyEmbed src。
 * 失败特征：*.html 被 301 到丢掉 baseUrl 的路径，最终落到 /feike-docs/ 首页。
 */
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const baseUrl = '/feike-docs';
const origin = (process.env.CHECK_ORIGIN || 'http://127.0.0.1:3000').replace(/\/$/, '');
const site = `${origin}${baseUrl}`;

const HOME_MARKERS = ['资深 Java 开发', '主导日处理 1 亿+'];
const ARCHIFY_MARK = 'name="generator" content="archify';

function walk(dir, ext, acc = []) {
  for (const name of fs.readdirSync(dir, {withFileTypes: true})) {
    const full = path.join(dir, name.name);
    if (name.isDirectory()) {
      walk(full, ext, acc);
    } else if (name.name.endsWith(ext)) {
      acc.push(full);
    }
  }
  return acc;
}

function listEmbeds() {
  const files = walk(path.join(root, 'docs'), '.mdx');
  const embeds = [];
  const srcRe = /<ArchifyEmbed[\s\S]*?src="(\/diagrams\/[^"]+\.html)"/g;
  for (const file of files) {
    const text = fs.readFileSync(file, 'utf8');
    let match;
    while ((match = srcRe.exec(text))) {
      embeds.push({
        mdx: path.relative(root, file),
        src: match[1],
      });
    }
  }
  return embeds;
}

function listSitemapPaths() {
  const sitemap = fs.readFileSync(path.join(root, 'build/sitemap.xml'), 'utf8');
  const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  return locs.map((loc) => {
    const url = new URL(loc);
    return url.pathname.replace(/\/$/, '') || '/';
  });
}

function looksLikeHome(html) {
  return HOME_MARKERS.every((mark) => html.includes(mark));
}

async function fetchFollow(url) {
  const hops = [];
  let current = url;
  for (let i = 0; i < 6; i++) {
    const res = await fetch(current, {redirect: 'manual'});
    hops.push({url: current, status: res.status, location: res.headers.get('location')});
    if (res.status >= 300 && res.status < 400 && res.headers.get('location')) {
      current = new URL(res.headers.get('location'), current).href;
      continue;
    }
    const html = await res.text();
    return {finalUrl: current, status: res.status, html, hops};
  }
  return {finalUrl: current, status: 0, html: '', hops};
}

function homePath(url) {
  const {pathname} = new URL(url);
  return pathname === `${baseUrl}/` || pathname === baseUrl || pathname === `${baseUrl}/index.html`;
}

async function main() {
  const embeds = listEmbeds();
  const pages = listSitemapPaths();
  const failures = [];

  console.log(`origin=${site}`);
  console.log(`pages=${pages.length} embeds=${embeds.length}`);

  for (const pagePath of pages) {
    const url = pagePath.startsWith(baseUrl) ? `${origin}${pagePath}` : `${origin}${pagePath}`;
    const isHome = pagePath === `${baseUrl}` || pagePath === `${baseUrl}/` || pagePath === '/';
    try {
      const got = await fetchFollow(url);
      if (got.status !== 200) {
        failures.push(`${pagePath} HTTP ${got.status}`);
        continue;
      }
      if (!isHome && looksLikeHome(got.html) && homePath(got.finalUrl)) {
        failures.push(`${pagePath} 最终落到首页 ${got.finalUrl}`);
        continue;
      }
      if (!isHome && looksLikeHome(got.html) && !got.html.includes('<article') && !got.html.includes('theme-doc-markdown')) {
        failures.push(`${pagePath} 正文像首页（缺少文档 article）`);
      }
      const iframeSrcs = [...got.html.matchAll(/<iframe[^>]*src="([^"]+)"/g)].map((m) => m[1]);
      for (const src of iframeSrcs) {
        if (!src.includes('/diagrams/')) {
          failures.push(`${pagePath} iframe src 不是 diagrams：${src}`);
        }
        if (src.endsWith('/') || src === `${baseUrl}/` || src.endsWith(baseUrl)) {
          failures.push(`${pagePath} iframe src 指向站点根：${src}`);
        }
      }
    } catch (err) {
      failures.push(`${pagePath} 请求失败：${err.message}`);
    }
  }

  const seen = new Set();
  for (const {mdx, src} of embeds) {
    const url = `${site}${src}`;
    if (seen.has(url)) {
      continue;
    }
    seen.add(url);
    const disk = path.join(root, 'build', src.replace(/^\//, ''));
    if (!fs.existsSync(disk)) {
      failures.push(`${mdx} 产物缺失 ${path.relative(root, disk)}`);
    }
    try {
      const got = await fetchFollow(url);
      const hop301 = got.hops.find(
        (h) => h.status === 301 && h.location && !h.location.includes(baseUrl),
      );
      if (hop301) {
        failures.push(`${src} 301 Location 丢掉 baseUrl → ${hop301.location}（${mdx}）`);
        continue;
      }
      if (homePath(got.finalUrl) || looksLikeHome(got.html)) {
        failures.push(`${src} 被换成首页 ${got.finalUrl}（${mdx}）`);
        continue;
      }
      if (got.status !== 200) {
        failures.push(`${src} HTTP ${got.status}（${mdx}）`);
        continue;
      }
      if (!got.html.includes(ARCHIFY_MARK)) {
        failures.push(`${src} 不是 Archify HTML（${mdx}）`);
      }
    } catch (err) {
      failures.push(`${src} 请求失败：${err.message}（${mdx}）`);
    }
  }

  if (failures.length) {
    console.error(`FAIL ${failures.length}`);
    for (const line of failures) {
      console.error(`  - ${line}`);
    }
    process.exit(1);
  }
  console.log(`OK pages=${pages.length} uniqueDiagrams=${seen.size}`);
}

main();
