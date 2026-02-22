const CACHE_NAME = 'sidivote-v1';
const urlsToCache = [
  '/index.html',
  '/Pages/page.html',
  '/Styles/home.css',
  '/Styles/style.css',
  '/Scripts/home.js',
  '/Scripts/script.js',
  '/Scripts/theme.js',
  '/favicon.png',
  '/images/mon_logo.png',
  '/images/istockphoto-1498776269-612x612.jpg',
  '/images/pexels-element5-1550337.jpg',
  '/images/pexels-edmond-dantes-7103203.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
