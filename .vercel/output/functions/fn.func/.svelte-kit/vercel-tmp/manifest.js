export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","android-chrome-192x192.png","android-chrome-256x256.png","android-chrome-512x512.png","apple-touch-icon.png","favicon.png","manifest.json","marker.svg","robots.txt","subset-SelfModern-Italic.woff","subset-SelfModern-Italic.woff2","subset-SelfModern-Regular.woff","subset-SelfModern-Regular.woff2","service-worker.js"]),
	mimeTypes: {".png":"image/png",".json":"application/json",".svg":"image/svg+xml",".txt":"text/plain",".woff":"font/woff",".woff2":"font/woff2"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.2c95c72b.js","imports":["_app/immutable/entry/start.2c95c72b.js","_app/immutable/chunks/index.edbe74d4.js","_app/immutable/chunks/singletons.5f033691.js","_app/immutable/chunks/index.68f185f5.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.697ad0c2.js","imports":["_app/immutable/entry/app.697ad0c2.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.edbe74d4.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
