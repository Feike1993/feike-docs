/**
 * 本地预览 build：按 /feike-docs/ 剥路径，但对 *.html 关闭 cleanUrls。
 *
 * 官方 `docusaurus serve` 会把 *.html 301 成无扩展名路径，且 Location 不含 baseUrl，
 * Archify iframe 会落到首页。文档路由仍开 cleanUrls，/docs/.../overview 才能命中 html。
 *
 * @see https://github.com/facebook/docusaurus/issues/10078
 */
import http from 'node:http';
import path from 'node:path';
import {createRequire} from 'node:module';
import {fileURLToPath} from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const require = createRequire(
  path.join(root, 'node_modules/@docusaurus/core/lib/commands/serve.js'),
);
const serveHandler = require('serve-handler');

const baseUrl = '/feike-docs/';
const outDir = path.join(root, 'build');
const portFlag = process.argv.indexOf('--port');
const port = Number(
  (portFlag >= 0 && process.argv[portFlag + 1]) || process.env.PORT || 3000,
);

function redirect(res, location) {
  res.writeHead(302, {Location: location});
  res.end();
}

const server = http.createServer((req, res) => {
  if (!req.url?.startsWith(baseUrl)) {
    redirect(res, baseUrl);
    return;
  }
  req.url = req.url.replace(baseUrl, '/');
  // *.html 走 cleanUrls:false，避免 301 成无扩展名且 Location 丢掉 baseUrl。
  // 文档路由仍用 cleanUrls，这样 /docs/.../overview 能命中 overview.html。
  const wantsHtmlFile = /\.html(?:[?#]|$)/.test(req.url);
  serveHandler(req, res, {
    cleanUrls: !wantsHtmlFile,
    public: outDir,
    trailingSlash: false,
    directoryListing: false,
  });
});

server.listen(port, () => {
  process.stdout.write(`Serving build at http://localhost:${port}${baseUrl}\n`);
});
