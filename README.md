# Sink

一个跑在 Cloudflare 上的短链接服务：简单、快、安全，自带访问统计。

> 官网：<https://sink.cool> · 文档：<https://docs.sink.cool> · API 参考：<https://sink.cool/_docs/scalar>

## 这是什么

把长 URL 变成 `sink.cool/abc` 这样的短链，同时记录每一次点击（时间、来源、设备、国家、UA），
并提供一个**很现代的仪表盘**让你实时看数据。整套服务**完全 serverless**，不养一台机器，
全部跑在 Cloudflare 上。

适合：

- 个人 / 博客主：需要给文章 / 项目页 / 临时活动页一个稳定、好看的短链
- 小团队：需要成员都能用，但又不想为这件事专门开账号、买服务、签合同
- 自托管爱好者：想要一个"开箱即用、但数据和代码都自己拿"的方案

如果你的需求是企业级（多租户、SLA、托管运维、计费），上游作者另有一个 **[S.EE](https://sink.cool/see)**。

## 功能特性

- 🔗 **短链生成**：把 URL 压到最短长度
- 📈 **访问统计**：每次点击都记录，全维度（来源、设备、国家、UA、Referer）
- ☁️ **零服务器**：纯 Cloudflare 栈（Workers + Pages），无传统后端
- 🎨 **自定义短码**：支持个性化短码、UTM 参数，可配置大小写敏感
- 🪄 **AI 助力**（可选）：用 Cloudflare Workers AI 根据页面内容自动生成短码和 OG 元数据
- ⏰ **链接管控**：过期时间、访问密码、"不安全链接"警告页
- 📱 **智能路由**：按设备或访问国家把访客导向不同目标
- 🖼️ **社交预览**：自定义分享卡的标题、描述、图片
- 📊 **近实时仪表盘**：3D 地球 + 事件流，**10 秒轮询 + 客户端事件回放**（不是 SSE / WebSocket）
- 🔲 **二维码**：一键为短链生成 QR 码
- 📦 **导入 / 导出**：JSON 转移链接、CSV 导出访问统计
- 🌍 **多语言**：仪表盘和跳转页都完整支持 i18n

## 在线演示

在 <https://sink.cool/dashboard> 体验。站点 Token：

```txt
SinkCool
```

> 这是公共演示站，请勿放真实业务数据。

## 技术栈

| 维度        | 选型                                                              |
| ----------- | ----------------------------------------------------------------- |
| 框架        | [Nuxt 4](https://nuxt.com/)                                       |
| 数据库      | [Cloudflare D1](https://developers.cloudflare.com/d1/)（权威存储） |
| 读缓存      | [Workers KV](https://developers.cloudflare.com/kv/)（写穿透）      |
| ORM         | [Drizzle ORM](https://orm.drizzle.team/)                          |
| 统计引擎    | [Analytics Engine](https://developers.cloudflare.com/analytics/)  |
| 对象存储    | [R2](https://developers.cloudflare.com/r2/)（可选 JSON 快照）     |
| AI          | [Workers AI](https://developers.cloudflare.com/workers-ai/)（可选）|
| UI          | [shadcn-vue](https://www.shadcn-vue.com/)                          |
| 样式        | [Tailwind CSS](https://tailwindcss.com/)                           |
| 部署        | Cloudflare                                                        |

## 部署

支持 [Cloudflare Workers](https://docs.sink.cool/deployment/workers)（推荐）
和 [Cloudflare Pages](https://docs.sink.cool/deployment/pages)（已弃用）两种方式。
视频教程：<https://www.youtube.com/watch?v=MkU23U2VE9E>

## 配置

详细配置项见 [配置文档](https://docs.sink.cool/configuration/)。

## API

- [API 文档](https://docs.sink.cool/api/)
- [公共演示实例的 Scalar 实时参考](https://sink.cool/_docs/scalar)

## 周边工具

### AI Skills

为编码助手安装 Sink AI Skills：

```bash
npx skills add miantiao-me/sink
```

### MCP

Sink 暂未原生提供 MCP Server，但项目自带 OpenAPI 文档，可以通过 `mcp-openapi-proxy` 接入：

```json
{
  "mcpServers": {
    "sink": {
      "command": "uvx",
      "args": ["mcp-openapi-proxy"],
      "env": {
        "OPENAPI_SPEC_URL": "https://sink.cool/_docs/openapi.json",
        "API_KEY": "SinkCool",
        "TOOL_WHITELIST": "/api/link"
      }
    }
  }
}
```

> `API_KEY` 跟实例环境变量里的 `NUXT_SITE_TOKEN` 是同一个值。

## FAQ

[docs.sink.cool/faqs](https://docs.sink.cool/faqs)

## 路线图（节选）

- [x] 浏览器扩展（Sink Tool / Sink Quick Shorten）
- [x] Raycast 扩展
- [x] Apple Shortcuts
- [x] iOS App
- [x] 改用 Cloudflare D1（替代 KV）
- [x] 多链接筛选 + 仪表盘无限滚动
- [x] API / 迁移 / 备份 / 跳转测试

## 致谢

Cloudflare · NuxtHub · Astroship · Tailark。

## 赞助

如果项目对你有用，欢迎[在 GitHub 赞助](https://github.com/sponsors/miantiao-me)上游作者。
