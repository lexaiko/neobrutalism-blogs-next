// next-sitemap.config.js
module.exports = {
  siteUrl: 'https://blog.eikoalexandra.my.id', // ganti sama domain kamu
  generateRobotsTxt: true, // otomatis buat robots.txt juga
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/'], // misal ada halaman yang mau di-exclude
};
