import svg from '$lib/marker.svg';

export function setMap(mapElement, { zoom, post }) {
	let map;
	(async () => {
		const { map: leafletMap, tileLayer, icon, marker } = await import('leaflet');

		const map = leafletMap(mapElement).setView([post.acf.lat, post.acf.lon], zoom);
		tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: ''
		}).addTo(map);
		var myIcon = icon({
			iconUrl: svg
		});
		marker([post.acf.lat, post.acf.lon], { icon: myIcon }).addTo(map).unbindPopup();
	})();
	return {
		destroy() {
			if (map) {
				map.remove();
			}
		}
	};
}
