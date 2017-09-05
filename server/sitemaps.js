sitemaps.config('gzip', false); 

sitemaps.add('/sitemap.xml', function() {
  return [
    { page: '/', lastmod: "Tue Sep 05 2017 00:59:34 GMT-0600 (Mountain Daylight Time)", changefreq: 'monthly', priority: 0.8 },
    { page: '/find-your-service', lastmod: "Tue Sep 05 2017 00:59:34 GMT-0600 (Mountain Daylight Time)", changefreq: 'monthly', priority: 0.8 },
    { page: '/contact', lastmod: "Tue Sep 05 2017 00:59:34 GMT-0600 (Mountain Daylight Time)", changefreq: 'monthly', priority: 0.8 },
    { page: '/sales', lastmod: "Tue Sep 05 2017 00:59:34 GMT-0600 (Mountain Daylight Time)", changefreq: 'monthly', priority: 0.8 },
    { page: '/tools', lastmod: "Tue Sep 05 2017 00:59:34 GMT-0600 (Mountain Daylight Time)", changefreq: 'monthly', priority: 0.8 },
    { page: '/bundles', lastmod: "Tue Sep 05 2017 00:59:34 GMT-0600 (Mountain Daylight Time)", changefreq: 'monthly', priority: 0.8 }
  ];
});

