const CACHE_NAME = "tutorio-v1";

const urlsToCache = [

    "/",
    "/css/styles.css",
    "/js/scripts.js",
    "/images/home-bg.jpg",
    "/offline"
];


//when first installed this is run - stores files in url cache list
self.addEventListener("install", event => {

    event.waitUntil(

        caches.open(CACHE_NAME)
            .then(cache => {

                return cache.addAll(urlsToCache);
            })
    );
});

//every time the page requests something - network first strategy

self.addEventListener("fetch", event => {

    event.respondWith(

        fetch(event.request)
            .catch( () => {

                return caches.match(event.request)
                    .then(response => {
                        return response || caches.match("/offline");
                    });
            })
    );
});

// new service worker (deletes old cache)

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
});