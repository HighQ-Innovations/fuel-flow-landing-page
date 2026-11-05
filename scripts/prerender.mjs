// Runs after the client and server builds. Writes the rendered page into
// dist/index.html so search engines and link previews read real content,
// and generates sitemap.xml and robots.txt from the site URL in .env.
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { loadEnv } from "vite";

const root = process.cwd();
const env = loadEnv("production", root, "VITE_");
const siteUrl = (env.VITE_SITE_URL || "https://www.yourdomain.com").replace(
  /\/$/,
  "",
);

const { render } = await import(
  pathToFileURL(path.join(root, "dist-ssr/entry-server.js")).href
);
const appHtml = render();

const indexPath = path.join(root, "dist/index.html");
const template = await readFile(indexPath, "utf8");
const placeholder = '<div id="root"></div>';
if (!template.includes(placeholder)) {
  throw new Error("Could not find the #root placeholder in dist/index.html");
}
await writeFile(
  indexPath,
  template.replace(placeholder, `<div id="root">${appHtml}</div>`),
);

const today = new Date().toISOString().slice(0, 10);
await writeFile(
  path.join(root, "dist/sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="en-NG" href="${siteUrl}/" />
  </url>
</urlset>
`,
);

await writeFile(
  path.join(root, "dist/robots.txt"),
  `User-agent: *\nAllow: /\nDisallow: /login\nDisallow: /admin\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
);

console.log(
  `Prerendered index.html, sitemap.xml and robots.txt for ${siteUrl}`,
);
