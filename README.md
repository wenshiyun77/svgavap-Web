# svgavap-Web
一站式社交App物料编辑器的客户端产品介绍和下载页

## 本地运行

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

## Cloudflare 部署

Workers & Pages 构建设置：

- Framework preset: None
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Root directory: `/`

Wrangler 会根据 `wrangler.toml` 将 `dist` 目录作为静态资源发布。

## 下载地址配置

页面默认使用 GitHub Release `V1.0.0` 的下载地址：

- `https://github.com/wenshiyun77/svgavap-Web/releases/download/V1.0.0/SVGA.VAP.Lab-0.1.17-mac-arm64.zip`
- `https://github.com/wenshiyun77/svgavap-Web/releases/download/V1.0.0/SVGA.VAP.Lab-0.1.17-mac-x64.zip`
- `https://github.com/wenshiyun77/svgavap-Web/releases/download/V1.0.0/SVGA.VAP.Lab-0.1.17-win-x64.exe`

也可以通过环境变量覆盖：

- `VITE_DOWNLOAD_MAC_ARM64`
- `VITE_DOWNLOAD_MAC_X64`
- `VITE_DOWNLOAD_WINDOWS_X64`
