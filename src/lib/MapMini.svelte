<script>
	export let post;
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import svg from '$lib/marker.svg';
	let mapElement;
	let map;
	onMount(async () => {
		if (browser) {
			const L = await import('leaflet');
			var myIcon = L.icon({
				iconUrl: svg
			});
			map = L.map(mapElement).setView([post.acf.lat, post.acf.lon], 16);

			L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				attribution:
					'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			}).addTo(map);

			L.marker([post.acf.lat, post.acf.lon], { icon: myIcon }).addTo(map).unbindPopup();
		}
	});

	onDestroy(async () => {
		if (map) {
			// console.log('Unloading Leaflet map.');
			map.remove();
		}
	});
</script>

<div class="map z2" bind:this={mapElement} />

<style>
	@import 'leaflet/dist/leaflet.css';

	.map {
		height: 300px;
	}
</style>
