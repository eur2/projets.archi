const e=location.pathname.split("/").slice(0,-1).join("/"),i=[e+"/_app/immutable/entry/app.6JmwwLIt.js",e+"/_app/immutable/nodes/0.TiFf7VIQ.js",e+"/_app/immutable/assets/0.hpi7pDPf.css",e+"/_app/immutable/nodes/1._dhCp_4B.js",e+"/_app/immutable/nodes/2.dy3BsKUJ.js",e+"/_app/immutable/assets/2.SkwtUcro.css",e+"/_app/immutable/nodes/3.jLI8WfVX.js",e+"/_app/immutable/nodes/4.0ZmUKh5B.js",e+"/_app/immutable/assets/4.-dow1luh.css",e+"/_app/immutable/nodes/5.lB4bQxCQ.js",e+"/_app/immutable/chunks/SelectGroup.QyTE0ktP.js",e+"/_app/immutable/chunks/_commonjsHelpers.5-cIlDoe.js",e+"/_app/immutable/chunks/index.5_Pvhs1g.js",e+"/_app/immutable/chunks/index.syzS8QXI.js",e+"/_app/immutable/chunks/leaflet-src.LA6CKaAk.js",e+"/_app/immutable/chunks/leaflet.markercluster-src.8J2pClfU.js",e+"/_app/immutable/chunks/preload-helper.0HuHagjb.js",e+"/_app/immutable/chunks/scheduler.Sga31Z68.js",e+"/_app/immutable/chunks/singletons.tx2v6ZCy.js",e+"/_app/immutable/entry/start.GpEpy5s6.js"],o=[e+"/android-chrome-192x192.png",e+"/android-chrome-256x256.png",e+"/android-chrome-512x512.png",e+"/apple-touch-icon.png",e+"/favicon.png",e+"/manifest.json",e+"/marker.svg",e+"/robots.txt",e+"/subset-SelfModern-Italic.woff",e+"/subset-SelfModern-Italic.woff2",e+"/subset-SelfModern-Regular.woff",e+"/subset-SelfModern-Regular.woff2"],u="1703081094864",p=`cache-${u}`,l=[...i,...o];self.addEventListener("install",s=>{async function a(){await(await caches.open(p)).addAll(l)}s.waitUntil(a())});self.addEventListener("activate",s=>{async function a(){for(const t of await caches.keys())t!==p&&await caches.delete(t)}s.waitUntil(a())});self.addEventListener("fetch",s=>{if(s.request.method!=="GET")return;async function a(){const t=new URL(s.request.url),n=await caches.open(p);if(l.includes(t.pathname))return n.match(s.request);try{const c=await fetch(s.request);return c.status===200&&n.put(s.request,c.clone()),c}catch{return n.match(s.request)}}s.respondWith(a())});
