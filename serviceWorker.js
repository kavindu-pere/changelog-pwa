const staticChangeLog = "changelog-pwa-v1";
const assets = [
    "/",
    "/changelog.html",
    "/changelog.png",
    "/favicon.ico"
];

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticChangeLog).then(cache => {
            cache.addAll(assets);
        })
    );
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(cacheResponse => {
            return cacheResponse || fetch(fetchEvent.request);
        })
    );
});