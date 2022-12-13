import svg from '$lib/marker.svg';

export function setMap(mapElement, { zoom, post }) {
	let map;
	(async () => {
		const { map: leafletMap, tileLayer } = await import('leaflet');

		const map = leafletMap(mapElement).setView([post.acf.lat, post.acf.lon], zoom);
		tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution:
				'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);
		var myIcon = L.icon({
			iconUrl: svg
		});
		L.marker([post.acf.lat, post.acf.lon], { icon: myIcon }).addTo(map).unbindPopup();
	})();
	return {
		destroy() {
			if (map) {
				map.remove();
			}
		}
	};
}
