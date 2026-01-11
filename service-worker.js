/* =========================================
   SMART MICROGRID – SERVICE WORKER
   Offline Support & Performance Optimization
========================================= */

const CACHE_NAME = "smart-microgrid-cache-v1";
const OFFLINE_FILES = [
    "./",
    "index.html",
    "style.css",
    "script.js",
    "data.js",
    "manifest.json"
];

/* ================= INSTALL ================= */
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(OFFLINE_FILES);
        })
    );
    self.skipWaiting();
});

/* ================= ACTIVATE ================= */
self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.map(key => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

/* ================= FETCH ================= */
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request).catch(() => {
                if (event.request.mode === "navigate") {
                    return caches.match("index.html");
                }
            });
        })
    );
});

