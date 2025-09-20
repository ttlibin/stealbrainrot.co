# GitHub + Cloudflare 子域名多语言配置指南

## 概述
本指南将帮助你配置GitHub Pages + Cloudflare的子域名多语言方案，完全免费且SEO效果最佳。

## ⚠️ 重要说明
**如果你的GitHub仓库是私有的**，GitHub Pages功能将被禁用。你有两个选择：
1. **将仓库设为公开**（推荐，完全免费）
2. **使用Cloudflare Pages**（支持私有仓库，也是免费的）

本指南会详细说明两种方案的配置步骤。

## 配置步骤

### 1. GitHub仓库结构
确保你的仓库有以下结构：
```
stealbrainrot.co/
├── index.html (英文版)
├── zh-cn/
│   └── index.html (中文版)
├── es/
│   └── index.html (西班牙语版)
├── ar/
│   └── index.html (阿拉伯语版)
├── ko/
│   └── index.html (韩语版)
├── ja/
│   └── index.html (日语版)
├── de/
│   └── index.html (德语版)
├── fr/
│   └── index.html (法语版)
├── languages.js
├── sitemap.xml
├── robots.txt
└── 其他静态文件...
```

### 2. GitHub Pages配置

**重要提示：** 由于您的仓库是私有的，GitHub Pages功能被禁用。您有以下两个选择：

#### 方案A：将仓库设为公开（推荐）
1. 进入你的GitHub仓库
2. 点击 `Settings` 标签
3. 滚动到页面底部，找到 `Danger Zone` 部分
4. 点击 `Change repository visibility`
5. 选择 `Make public`
6. 确认操作

然后继续以下步骤：
- 滚动到 `Pages` 部分
- 在 `Source` 下选择 `Deploy from a branch`
- 选择 `main` 分支和 `/ (root)` 文件夹
- 点击 `Save`

#### 方案B：使用Cloudflare Pages（推荐用于私有仓库）
如果不想公开仓库，可以直接使用Cloudflare Pages：

1. 登录Cloudflare Dashboard
2. 选择 `Pages` 服务
3. 点击 `Create a project`
4. 选择 `Connect to Git`
5. 授权GitHub并选择你的仓库
6. 配置构建设置：
   - Framework preset: `None`
   - Build command: 留空
   - Build output directory: `/`
7. 点击 `Save and Deploy`

#### 2.2 设置自定义域名
**如果使用GitHub Pages：**
1. 在 `Pages` 设置中，找到 `Custom domain`
2. 输入你的主域名：`stealbrainrot.co`
3. 勾选 `Enforce HTTPS`
4. 点击 `Save`

**如果使用Cloudflare Pages：**
1. 在Cloudflare Pages项目中，点击 `Custom domains`
2. 添加主域名：`stealbrainrot.co`
3. 按照提示完成DNS验证

### 3. Cloudflare配置

#### 3.1 添加域名到Cloudflare
1. 登录Cloudflare控制面板
2. 点击 `Add a Site`
3. 输入你的域名：`stealbrainrot.co`
4. 选择免费计划
5. 按照提示更新DNS服务器

**注意：** 如果你使用Cloudflare Pages（方案B），域名会自动添加到Cloudflare，可以跳过此步骤。

#### 3.2 配置DNS记录

##### 主域名记录：
```
Type: CNAME
Name: @
Target: yourusername.github.io
Proxy: Proxied (橙色云朵)
```

##### 子域名记录：
为每个语言添加CNAME记录：

```
Type: CNAME
Name: zh-cn
Target: yourusername.github.io
Proxy: Proxied (橙色云朵)

Type: CNAME
Name: es
Target: yourusername.github.io
Proxy: Proxied (橙色云朵)

Type: CNAME
Name: ar
Target: yourusername.github.io
Proxy: Proxied (橙色云朵)

Type: CNAME
Name: ko
Target: yourusername.github.io
Proxy: Proxied (橙色云朵)

Type: CNAME
Name: ja
Target: yourusername.github.io
Proxy: Proxied (橙色云朵)

Type: CNAME
Name: de
Target: yourusername.github.io
Proxy: Proxied (橙色云朵)

Type: CNAME
Name: fr
Target: yourusername.github.io
Proxy: Proxied (橙色云朵)
```

#### 3.3 配置页面规则（可选）
为了更好的SEO，可以配置页面规则：

1. 进入 `Rules` → `Page Rules`
2. 创建规则：
   - URL: `zh-cn.stealbrainrot.co/*`
   - 设置: `Cache Level: Cache Everything`
   - 设置: `Edge Cache TTL: 1 month`

为每个子域名重复此步骤。

### 4. 验证配置

#### 4.1 检查DNS传播
使用以下工具检查DNS是否已传播：
- https://dnschecker.org/
- https://whatsmydns.net/

#### 4.2 测试子域名访问
访问以下URL确认配置正确：
- https://stealbrainrot.co/ (英文)
- https://zh-cn.stealbrainrot.co/ (中文)
- https://es.stealbrainrot.co/ (西班牙语)
- https://ar.stealbrainrot.co/ (阿拉伯语)
- https://ko.stealbrainrot.co/ (韩语)
- https://ja.stealbrainrot.co/ (日语)
- https://de.stealbrainrot.co/ (德语)
- https://fr.stealbrainrot.co/ (法语)

#### 4.3 测试语言切换
1. 访问主域名
2. 点击语言选择器
3. 选择不同语言
4. 确认跳转到对应的子域名

### 5. SEO优化验证

#### 5.1 检查hreflang标签
使用以下工具验证hreflang标签：
- Google Search Console
- https://technicalseo.com/tools/hreflang/

#### 5.2 提交sitemap
1. 登录Google Search Console
2. 选择你的主域名
3. 进入 `Sitemaps`
4. 添加sitemap URL：`https://stealbrainrot.co/sitemap.xml`

#### 5.3 验证结构化数据
使用Google的Rich Results Test：
- https://search.google.com/test/rich-results

## 常见问题

### Q: 子域名显示404错误
**A:** 检查以下项目：
1. GitHub Pages是否已启用
2. DNS记录是否正确配置
3. 文件是否存在于正确的目录中

### Q: 语言切换不工作
**A:** 检查以下项目：
1. `languages.js` 文件是否正确加载
2. 浏览器控制台是否有JavaScript错误
3. 子域名是否可访问

### Q: SSL证书问题
**A:** Cloudflare会自动提供SSL证书，如果遇到问题：
1. 确保所有DNS记录都设置为"Proxied"
2. 等待24小时让SSL证书生效
3. 检查Cloudflare的SSL/TLS设置

### Q: 页面加载缓慢
**A:** 优化建议：
1. 启用Cloudflare的缓存
2. 压缩图片和CSS/JS文件
3. 使用CDN加速

## 维护建议

### 1. 定期检查
- 每月检查所有子域名是否正常访问
- 监控Google Search Console中的错误
- 检查hreflang标签的有效性

### 2. 内容更新
- 确保所有语言版本同步更新
- 定期检查翻译质量
- 更新sitemap.xml中的lastmod日期

### 3. 性能优化
- 监控页面加载速度
- 优化图片和资源文件
- 使用Cloudflare的缓存规则

## 预期效果

配置完成后，你将获得：
- ✅ 8个独立的语言子域名
- ✅ 自动SSL证书
- ✅ CDN加速
- ✅ 最佳SEO效果
- ✅ 完全免费

## 技术支持

如果遇到问题，可以：
1. 检查GitHub Pages的状态页面
2. 查看Cloudflare的文档
3. 使用浏览器开发者工具调试
4. 检查DNS传播状态

配置完成后，你的多语言网站将拥有最佳的SEO表现和用户体验！
