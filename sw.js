self.addEventListener('install',(e)=>{
    console.log('service worker installed',e)
    e.waitUntil(caches.open('static').then((cache)=>{
        cache.addAll([
            '/',
            '/index.html',
            '/App.js',
            'Covid.js',
            'UI.js',
            '/bootstrap.min (5).css',
            '/bootstrap.min.css',
            '/india.svg',
            '/style.css',
            'https://use.fontawesome.com/releases/v5.13.0/js/all.js'
        ])
    }))
    
})
self.addEventListener('activate',(e)=>{
    console.log('[serviceWorker]service worker activated',e);
})

self.addEventListener('fetch',(e)=>{
    // console.log('fetching something...',e)
    e.respondWith(
        caches.match(e.request).then((cached)=>{
            if(cached){
                return cached;
            }
            else{
                return(fetch(e.request))
                // .then((cachedx)=>{
                //     return caches.open('dynamic').then((cache)=>{
                //         cache.put(e.request.url,cachedx.clone());
                //         return cachedx;
                //     })
                // });
            }
        })
    );
})