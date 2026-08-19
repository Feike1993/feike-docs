# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

本仓库用 **pnpm** 管理依赖，请不要使用 `npm` / `yarn`（也不要提交 `package-lock.json`）。可用 Corepack：`corepack enable`。

## Installation

```bash
pnpm install
```

## Local Development

```bash
pnpm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
pnpm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true pnpm deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> pnpm deploy
```

If you are using GitHub Pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
