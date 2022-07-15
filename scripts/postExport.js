const fs = require('fs');

const formatDate = require('./formatDate');
const getPathsObject = require('./getPathsObject');

const pathsObj = getPathsObject();

// ROBOTS.txt
const robotsTxt = `User-agent: *
Sitemap: https://merj.exchange/sitemap.xml
Disallow:`;

fs.writeFileSync('out/robots.txt', robotsTxt);

// Sitemap
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${Object.keys(pathsObj).map(
    (path) => `<url>
    <loc>https://merj.exchange${path}</loc>
    <lastmod>${formatDate(new Date(pathsObj[path].lastModified))}</lastmod>
  </url>`,
  )}
</urlset>`;

fs.writeFileSync('out/sitemap.xml', sitemapXml);
fs.copyFile('./appsettings.octopus.json', 'out/appsettings.json', function(){});