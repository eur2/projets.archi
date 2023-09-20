<script>
	export let filteredPosts;
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import svg from '$lib/marker.svg';
	let mapElement;
	let map;

	onMount(async () => {
		if (browser) {
			// const leaflet = await import('leaflet');
			// map = leaflet.map(mapElement).setView([51.505, -0.09], 13);
			// leaflet
			// 	.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			// 		attribution:
			// 			'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			// 	})
			// 	.addTo(map);
			// filteredPosts.map((x) =>
			// 	leaflet.marker([x.acf.lat, x.acf.lon]).addTo(map).bindPopup(x.acf.lat).openPopup()
			// );

			const L = await import('leaflet');
			await import('leaflet.markercluster');
			map = L.map(mapElement).setView([43.6506786, 1.4408547], 10);
			L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				attribution:
					'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			}).addTo(map);

			var markers = window.L.markerClusterGroup();
			for (var i = 0; i < filteredPosts.length; i++) {
				var a = filteredPosts[i];
				var id = a.id;
				var title = a.acf.projet.name;
				var arch = a.acf.architecte;
				var maitre = a.acf.maitre;
				var loca = a.acf.localisation;
				var annee = a.acf.annee;
				var img = a.acf.image0.sizes.medium;
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
						><img width="300px" src=${img} alt="alt" /></a
					></div>`,
						{ maxWidth: 270 }
					)
					.openPopup();
				markers.addLayer(marker);
			}

			// for (var i = 0; i < addressPoints.length; i++) {
			// 	var a = addressPoints[i];
			// 	var title = a[2];
			// 	var marker = L.marker(new L.LatLng(a[0], a[1]), {
			// 		title: title
			// 	});
			// 	marker.bindPopup(title);
			// 	markers.addLayer(marker);
			// }
			map.addLayer(markers);
		}
	});

	onDestroy(async () => {
		if (map) {
			// console.log('Unloading Leaflet map.');
			map.remove();
		}
	});
</script>

<div id="map" bind:this={mapElement} />

<style>
	@import 'leaflet/dist/leaflet.css';
	@import 'leaflet.markercluster/dist/MarkerCluster.css';
	@import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

	#map {
		/* height: 800px; */
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		height: 100%;
	}
</style>
