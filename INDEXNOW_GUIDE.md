# IndexNow 自动通知配置指南

本文档说明如何使用 IndexNow 自动通知搜索引擎你的网站内容变化。

---

## 快速开始

### 1. 推送代码到 GitHub

```bash
git add .
git commit -m "Add IndexNow integration"
git push origin main
```

### 2. 在 GitHub 仓库启用 Actions

1. 进入你的 GitHub 仓库
2. 点击 **Settings** > **Actions** > **General**
3. 在 **Actions permissions** 中选择 **Allow all actions and reusable workflows**
4. 点击 **Save**

### 3. 完成！

每次推送到 `main` 或 `master` 分支时，GitHub Actions 会自动：
1. 检测变化的 HTML 文件
2. 通知搜索引擎（Bing、Google、Yandex）

---

## 使用方法

### 自动通知（推荐）

**推送到主分支后自动触发：**
```bash
git add index.html
git commit -m "Update homepage"
git push origin main
# → 自动通知变化的页面
```

### 手动通知

#### 通知单个页面
```bash
npm run indexnow https://stealbrainrot.co/new-page.html
```

#### 通知多个页面
```bash
npm run indexnow https://stealbrainrot.co/page1.html https://stealbrainrot.co/page2.html
```

#### 通知所有页面（从 sitemap.xml）
```bash
npm run indexnow:all
```

#### 自动检测并通知变化的页面
```bash
npm run indexnow:auto
```

---

## GitHub Actions 工作流

### 自动触发（推送）

每次推送到 `main` 或 `master` 分支时自动运行。

### 手动触发

1. 进入 GitHub 仓库
2. 点击 **Actions** 标签
3. 选择 **IndexNow Auto Notification** 工作流
4. 点击 **Run workflow**
5. 选择是否通知所有页面

---

## 验证配置

### 1. 检查验证文件

访问以下 URL，确保能正常访问：
```
https://stealbrainrot.co/ca9a891f04ce241bbd0bc01843ee0b9a.txt
```

### 2. 测试 IndexNow API

```bash
# 测试通知主页
npm run indexnow https://stealbrainrot.co/
```

预期输出：
```
🔔 Notifying IndexNow about 1 URL(s)...

  - https://stealbrainrot.co/

Results:

✅ www.bing.com
   Success (200)

✅ indexnow.google.com
   Success (200)

✅ yandex.com
   Success (200)

✨ Successfully notified all 3 search engines!
```

---

## 配置信息

| 项目 | 值 |
|------|------|
| **IndexNow 密钥** | `ca9a891f04ce241bbd0bc01843ee0b9a` |
| **验证文件** | `ca9a891f04ce241bbd0bc01843ee0b9a.txt` |
| **API 端点** | `https://stealbrainrot.co/functions/indexnow` |
| **支持的搜索引擎** | Bing、Google、Yandex |

---

## 常见问题

**Q: 通知后多久能被收录？**
A: 通常几小时到几天不等，取决于搜索引擎的爬取频率。

**Q: 通知频率有限制吗？**
A: 建议同一页面不要频繁通知，内容有变化时再通知即可。

**Q: 可以通知其他域名的 URL 吗？**
A: 不可以，只能通知属于 stealbrainrot.co 及其子域名的 URL。

---

## 相关文件

| 文件 | 说明 |
|------|------|
| [scripts/indexnow.js](scripts/indexnow.js) | IndexNow CLI 工具 |
| [scripts/notify-indexnow.js](scripts/notify-indexnow.js) | 自动检测变化的通知脚本 |
| [functions/indexnow.js](functions/indexnow.js) | Cloudflare Function API 端点 |
| [.github/workflows/indexnow.yml](.github/workflows/indexnow.yml) | GitHub Actions 工作流 |
