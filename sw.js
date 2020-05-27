self.addEventListener('install',(e)=>{
    console.log('service worker installed',e)
})
self.addEventListener('activate',(e)=>{
    console.log('[serviceWorker]service worker activated',e);
})

self.addEventListener('fetch',(e)=>{
    console.log('fetching something...',e)
    e.respondWith(fetch(e.request));
})