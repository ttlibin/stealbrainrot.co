// Cloudflare Pages Functions middleware
// 根据子域名将请求重写到对应语言子目录，保证整页内容为目标语言

export async function onRequest(context) {
  const url = new URL(context.request.url);
  const hostname = url.hostname;

  // 子域名到语言目录映射
  const subdomainToLangPath = {
    'zh-cn.stealbrainrot.co': '/zh-cn',
    'es.stealbrainrot.co': '/es',
    'ar.stealbrainrot.co': '/ar',
    'ko.stealbrainrot.co': '/ko',
    'ja.stealbrainrot.co': '/ja',
    'de.stealbrainrot.co': '/de',
    'fr.stealbrainrot.co': '/fr',
  };

  const langBasePath = subdomainToLangPath[hostname];

  if (langBasePath) {
    const rewrittenUrl = new URL(url.toString());
    const pathname = rewrittenUrl.pathname;

    // 1) 对静态资源放行：带扩展名(.js .css .png 等)或特定文件
    const isStatic = /\.[a-zA-Z0-9]{2,6}$/.test(pathname) ||
      /^\/(sw\.js|robots\.txt|sitemap\.xml|favicon\.ico|favicon\.svg)$/i.test(pathname);
    if (isStatic) {
      return context.next();
    }

    // 2) 移除已有语言前缀
    const stripped = pathname.replace(/^\/(en|zh-cn|es|ar|ko|ja|de|fr)(?=\/|$)/i, '');
    let normalized = stripped;
    if (normalized === '') normalized = '/';

    // 3) 目标路径 = 语言前缀 + 归一化路径
    const targetPath = `${langBasePath}${normalized}`;

    if (pathname !== targetPath) {
      rewrittenUrl.pathname = targetPath;
      return Response.redirect(rewrittenUrl.toString(), 302);
    }
    return context.next();
  }

  // 主域名或未匹配子域名，正常继续
  return context.next();
}


