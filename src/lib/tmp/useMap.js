import svg from '$lib/marker.svg';

export function setMap(mapElement, { latitude, longitude, zoom, posts }) {
	let map;

	(async () => {
		const { map: leafletMap, tileLayer } = await import('leaflet');
		await import('leaflet.markercluster');

		const map = leafletMap(mapElement).setView([latitude, longitude], zoom);
		tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution:
				'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);
		// let currentMarkersGroup = null;

		if (currentMarkersGroup) {
			map.removeLayer(currentMarkersGroup);
		}
		// var currentMarkersGroup = window.L.markerClusterGroup();
		var currentMarkersGroup = L.markerClusterGroup();
		for (var i = 0; i < posts.length; i++) {
			var a = posts[i];
			var id = a.id;
			var title = a.acf.projet.name;
			var arch = a.acf.architecte;
			var maitre = a.acf.maitre;
			var loca = a.acf.localisation;
			var annee = a.acf.annee;
			var img = a.acf.image0.sizes.thumbnail;
			var myIcon = L.icon({
				iconUrl: svg
			});
			var marker = L.marker(new L.LatLng(a.acf.lat, a.acf.lon), {
				title: title,
				arch: arch,
				maitre: maitre,
				loca: loca,
				annee: annee,
				img: img,
				icon: myIcon,
				id: id
			});
			marker
				.bindPopup(
					`<div class="sm">Projet</div>
					<div class="mb">
						${title}
					</div>
					<div class="sm">Architecte</div>
					<div class="mb">
						${arch}
					</div>
					<div class="sm">Maître d'ouvrage</div>
					<div class="mb">
						${maitre}
					</div>
					<div class="sm">Localisation</div>
					<div class="mb">
						${loca}
					</div>
					<div class="sm">Année</div>
					<div class="mb">
						${annee}
					</div>
					<div><a href=#${id}
						><img loading="lazy" width="300px" src=${img} alt=${title} /></a
					></div>`,
					{ maxWidth: 270 }
				)
				.openPopup();
			currentMarkersGroup.addLayer(marker);
		}

		map.addLayer(currentMarkersGroup);
	})();
	return {
		update(options) {
			if (currentMarkersGroup) {
				map.removeLayer(currentMarkersGroup);
			}
			var currentMarkersGroup = window.L.markerClusterGroup();
			for (var i = 0; i < posts.length; i++) {
				var a = posts[i];
				var id = a.id;
				var title = a.acf.projet.name;
				var arch = a.acf.architecte;
				var maitre = a.acf.maitre;
				var loca = a.acf.localisation;
				var annee = a.acf.annee;
				var img = a.acf.image0.sizes.thumbnail;
				var myIcon = L.icon({
					iconUrl: svg
				});
				var marker = L.marker(new L.LatLng(a.acf.lat, a.acf.lon), {
					title: title,
					arch: arch,
					maitre: maitre,
					loca: loca,
					annee: annee,
					img: img,
					icon: myIcon,
					id: id
				});
				marker
					.bindPopup(
						`<div class="sm">Projet</div>
						<div class="mb">
							${title}
						</div>
						<div class="sm">Architecte</div>
						<div class="mb">
							${arch}
						</div>
						<div class="sm">Maître d'ouvrage</div>
						<div class="mb">
							${maitre}
						</div>
						<div class="sm">Localisation</div>
						<div class="mb">
							${loca}
						</div>
						<div class="sm">Année</div>
						<div class="mb">
							${annee}
						</div>
						<div><a href=#${id}
							><img loading="lazy" width="300px" src=${img} alt=${title} /></a
						></div>`,
						{ maxWidth: 270 }
					)
					.openPopup();
				currentMarkersGroup.addLayer(marker);
			}

			map.addLayer(currentMarkersGroup);
		},
		destroy() {
			if (map) {
				map.remove();
			}
		}
	};
}
