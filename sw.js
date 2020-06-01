self.addEventListener('install',(e)=>{
    console.log('service worker installed',e)
    e.waitUntil(caches.open('staticv4').then((cache)=>{
        cache.addAll([
            '/',
            '/index.html',
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

        fetch(e.request)
        .catch((err)=>{
            console.log('couild not get it from server :/', err)
             return caches.match(e.request);
        })
        
    );
})