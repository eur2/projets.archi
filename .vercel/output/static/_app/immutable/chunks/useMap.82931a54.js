import{_ as g}from"./preload-helper.41c905a7.js";import{s as b}from"./marker.c27503a3.js";function A($,{latitude:y,longitude:_,zoom:w,posts:l}){let f;return(async()=>{const{map:u,tileLayer:e}=await g(()=>import("./leaflet-src.73ced07e.js").then(p=>p.l),["./leaflet-src.73ced07e.js","./_commonjsHelpers.725317a4.js"],import.meta.url);await g(()=>import("./leaflet.markercluster-src.5b44c77a.js").then(p=>p.l),["./leaflet.markercluster-src.5b44c77a.js","./_commonjsHelpers.725317a4.js"],import.meta.url);const i=u($).setView([y,_],w);e("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(i),a&&i.removeLayer(a);for(var a=L.markerClusterGroup(),s=0;s<l.length;s++){var r=l[s],v=r.id,t=r.acf.projet.name,d=r.acf.architecte,c=r.acf.maitre,o=r.acf.localisation,m=r.acf.annee,n=r.acf.image0.sizes.thumbnail,P=L.icon({iconUrl:b}),h=L.marker(new L.LatLng(r.acf.lat,r.acf.lon),{title:t,arch:d,maitre:c,loca:o,annee:m,img:n,icon:P,id:v});h.bindPopup(`<div class="sm">Projet</div>
					<div class="mb">
						${t}
					</div>
					<div class="sm">Architecte</div>
					<div class="mb">
						${d}
					</div>
					<div class="sm">Maître d'ouvrage</div>
					<div class="mb">
						${c}
					</div>
					<div class="sm">Localisation</div>
					<div class="mb">
						${o}
					</div>
					<div class="sm">Année</div>
					<div class="mb">
						${m}
					</div>
					<div><a href=#${v}
						><img loading="lazy" width="300px" src=${n} alt=${t} /></a
					></div>`,{maxWidth:270}).openPopup(),a.addLayer(h)}i.addLayer(a)})(),{update(u){e&&f.removeLayer(e);for(var e=window.L.markerClusterGroup(),i=0;i<l.length;i++){var a=l[i],s=a.id,r=a.acf.projet.name,v=a.acf.architecte,t=a.acf.maitre,d=a.acf.localisation,c=a.acf.annee,o=a.acf.image0.sizes.thumbnail,m=L.icon({iconUrl:b}),n=L.marker(new L.LatLng(a.acf.lat,a.acf.lon),{title:r,arch:v,maitre:t,loca:d,annee:c,img:o,icon:m,id:s});n.bindPopup(`<div class="sm">Projet</div>
						<div class="mb">
							${r}
						</div>
						<div class="sm">Architecte</div>
						<div class="mb">
							${v}
						</div>
						<div class="sm">Maître d'ouvrage</div>
						<div class="mb">
							${t}
						</div>
						<div class="sm">Localisation</div>
						<div class="mb">
							${d}
						</div>
						<div class="sm">Année</div>
						<div class="mb">
							${c}
						</div>
						<div><a href=#${s}
							><img loading="lazy" width="300px" src=${o} alt=${r} /></a
						></div>`,{maxWidth:270}).openPopup(),e.addLayer(n)}f.addLayer(e)},destroy(){}}}export{A as s};
