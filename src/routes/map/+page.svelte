<script>
	import { onMount, onDestroy } from 'svelte';
	// import { browser } from '$app/environment';
	// import leaflet from 'leaflet';
	// import 'leaflet.markercluster';
	import svg from '$lib/marker.svg';

	export let data;
	// const { posts } = data;
	const {
		posts,
		header,
		years,
		types,
		localisations,
		structures,
		surfaces,
		budgets,
		architectes,
		amenageurs,
		maitres,
		bet_general,
		bet_structure,
		bet_thermique,
		bet_fluide,
		bet_environnement,
		economistes,
		paysagistes,
		acousticiens,
		test
	} = data;

	import Select from '$lib/Select.svelte';
	import SelectGroup from '$lib/SelectGroup.svelte';

	let visible;
	function handleToggle() {
		visible = !visible;
	}

	let searchTerm = '';
	let selectMulti = [];
	let checkLaureat = false;
	let selectLocalisation,
		selectAnnee,
		selectType,
		selectStructure,
		selectSurface,
		selectBudget,
		selectMaitre,
		selectArchitecte,
		selectAmenageur,
		selectPaysagiste,
		selectBureauEtudes = 'all';
	let filteredPosts = [];

	$: if (selectMulti.length === 0) {
		filteredPosts = posts
			.filter(
				(post) =>
					post.acf.projet.name.toLowerCase().indexOf(searchTerm) !== -1 ||
					post.acf.localisation.toLowerCase().indexOf(searchTerm) !== -1 ||
					post.acf.architecte.toLowerCase().indexOf(searchTerm) !== -1 ||
					post.acf.architecte_associé.toLowerCase().indexOf(searchTerm) !== -1 ||
					post.acf.amenageur.toLowerCase().indexOf(searchTerm) !== -1 ||
					post.acf.plus.toLowerCase().indexOf(searchTerm) !== -1 ||
					post.acf.maitre.toLowerCase().indexOf(searchTerm) !== -1 ||
					post.acf.paysagiste.toLowerCase().indexOf(searchTerm) !== -1 ||
					post.acf.bet_structure.toLowerCase().indexOf(searchTerm) !== -1 ||
					post.acf.bet_environnement.toLowerCase().indexOf(searchTerm) !== -1 ||
					post.acf.bet_thermique.toLowerCase().indexOf(searchTerm) !== -1 ||
					post.acf.bet_fluides.toLowerCase().indexOf(searchTerm) !== -1 ||
					post.acf.bet_general.toLowerCase().indexOf(searchTerm) !== -1 ||
					post.acf.acousticien.toLowerCase().indexOf(searchTerm) !== -1 ||
					post.acf.economiste.toLowerCase().indexOf(searchTerm) !== -1 ||
					post.acf.eclairagiste.toLowerCase().indexOf(searchTerm) !== -1
			)
			.filter((post) =>
				checkLaureat === false &&
				selectAnnee === 'all' &&
				selectLocalisation === 'all' &&
				selectType === 'all' &&
				selectStructure === 'all' &&
				selectSurface === 'all' &&
				selectBudget === 'all' &&
				selectArchitecte === 'all' &&
				selectAmenageur === 'all' &&
				selectMaitre === 'all' &&
				selectBureauEtudes === 'all' &&
				selectPaysagiste === 'all'
					? true
					: (selectAnnee === 'all' || post.acf.annee == selectAnnee) &&
					  (selectLocalisation === 'all' ||
							post.acf.localisation.toLowerCase() === selectLocalisation) &&
					  (selectType === 'all' || post.acf.type.toLowerCase() === selectType) &&
					  (selectStructure === 'all' || post.acf.structure.toLowerCase() === selectStructure) &&
					  (selectSurface === 'all' || post.acf.surface.toLowerCase() === selectSurface) &&
					  (selectBudget === 'all' || post.acf.budget.toLowerCase() === selectBudget) &&
					  (selectArchitecte === 'all' ||
							post.acf.architecte.toLowerCase() === selectArchitecte ||
							post.acf.architecte_associé.toLowerCase() === selectArchitecte) &&
					  (selectMaitre === 'all' || post.acf.maitre.toLowerCase() === selectMaitre) &&
					  (selectAmenageur === 'all' || post.acf.amenageur.toLowerCase() === selectAmenageur) &&
					  (selectPaysagiste === 'all' ||
							post.acf.paysagiste.toLowerCase() === selectPaysagiste) &&
					  (selectBureauEtudes === 'all' ||
							post.acf.acousticien.toLowerCase() === selectBureauEtudes ||
							post.acf.bet_general.toLowerCase() === selectBureauEtudes ||
							post.acf.bet_structure.toLowerCase() === selectBureauEtudes ||
							post.acf.bet_thermique.toLowerCase() === selectBureauEtudes ||
							post.acf.bet_environnement.toLowerCase() === selectBureauEtudes ||
							post.acf.bet_fluides.toLowerCase() === selectBureauEtudes ||
							post.acf.economiste.toLowerCase() === selectBureauEtudes) &&
					  (checkLaureat === false || post.acf.laureat === checkLaureat)
			);
	} else {
		filteredPosts = posts
			.filter((post) => post.acf.test && post.acf.test.some((value) => selectMulti.includes(value)))
			.filter(
				(post) =>
					post.acf.projet.name.toLowerCase().indexOf(searchTerm) !== -1 ||
					post.acf.localisation.toLowerCase().indexOf(searchTerm) !== -1 ||
					post.acf.architecte.toLowerCase().indexOf(searchTerm) !== -1 ||
					post.acf.architecte_associé.toLowerCase().indexOf(searchTerm) !== -1 ||
					post.acf.amenageur.toLowerCase().indexOf(searchTerm) !== -1 ||
					post.acf.plus.toLowerCase().indexOf(searchTerm) !== -1 ||
					post.acf.maitre.toLowerCase().indexOf(searchTerm) !== -1 ||
					post.acf.paysagiste.toLowerCase().indexOf(searchTerm) !== -1 ||
					post.acf.bet_structure.toLowerCase().indexOf(searchTerm) !== -1 ||
					post.acf.bet_environnement.toLowerCase().indexOf(searchTerm) !== -1 ||
					post.acf.bet_thermique.toLowerCase().indexOf(searchTerm) !== -1 ||
					post.acf.bet_fluides.toLowerCase().indexOf(searchTerm) !== -1 ||
					post.acf.bet_general.toLowerCase().indexOf(searchTerm) !== -1 ||
					post.acf.acousticien.toLowerCase().indexOf(searchTerm) !== -1 ||
					post.acf.economiste.toLowerCase().indexOf(searchTerm) !== -1 ||
					post.acf.eclairagiste.toLowerCase().indexOf(searchTerm) !== -1
			)
			.filter((post) =>
				checkLaureat === false &&
				selectAnnee === 'all' &&
				selectLocalisation === 'all' &&
				selectType === 'all' &&
				selectStructure === 'all' &&
				selectSurface === 'all' &&
				selectBudget === 'all' &&
				selectArchitecte === 'all' &&
				selectAmenageur === 'all' &&
				selectMaitre === 'all' &&
				selectBureauEtudes === 'all' &&
				selectPaysagiste === 'all'
					? true
					: (selectAnnee === 'all' || post.acf.annee == selectAnnee) &&
					  (selectLocalisation === 'all' ||
							post.acf.localisation.toLowerCase() === selectLocalisation) &&
					  (selectType === 'all' || post.acf.type.toLowerCase() === selectType) &&
					  (selectStructure === 'all' || post.acf.structure.toLowerCase() === selectStructure) &&
					  (selectSurface === 'all' || post.acf.surface.toLowerCase() === selectSurface) &&
					  (selectBudget === 'all' || post.acf.budget.toLowerCase() === selectBudget) &&
					  (selectArchitecte === 'all' ||
							post.acf.architecte.toLowerCase() === selectArchitecte ||
							post.acf.architecte_associé.toLowerCase() === selectArchitecte) &&
					  (selectMaitre === 'all' || post.acf.maitre.toLowerCase() === selectMaitre) &&
					  (selectAmenageur === 'all' || post.acf.amenageur.toLowerCase() === selectAmenageur) &&
					  (selectPaysagiste === 'all' ||
							post.acf.paysagiste.toLowerCase() === selectPaysagiste) &&
					  (selectBureauEtudes === 'all' ||
							post.acf.acousticien.toLowerCase() === selectBureauEtudes ||
							post.acf.bet_general.toLowerCase() === selectBureauEtudes ||
							post.acf.bet_structure.toLowerCase() === selectBureauEtudes ||
							post.acf.bet_thermique.toLowerCase() === selectBureauEtudes ||
							post.acf.bet_environnement.toLowerCase() === selectBureauEtudes ||
							post.acf.bet_fluides.toLowerCase() === selectBureauEtudes ||
							post.acf.economiste.toLowerCase() === selectBureauEtudes) &&
					  (checkLaureat === false || post.acf.laureat === checkLaureat)
			);
	}

	let mapElement;
	let map;
	let mounted = false;
	let currentMarkersGroup = null;

	// const removePoint = () => {
	// 	filteredPosts = filteredPosts.slice(0, -1);
	// };

	onMount(async () => {
		const L = await import('leaflet');
		const { MarkerClusterGroup } = await import('leaflet.markercluster');

		// await import('leaflet.markercluster');
		console.log(L);

		map = L.map(mapElement).setView([43.6506786, 1.4408547], 10);

		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);

		mounted = true;
	});

	onDestroy(async () => {
		if (map) {
			// console.log('Unloading Leaflet map.');
			map.remove();
		}
	});
	$: {
		// console.log(filteredPosts);
		// This makes sure we have run onMount already and initialized the map
		if (mounted) {
			// const L = window['L'];
			// If we already have a group, we need to clean it up before creating a new one
			if (currentMarkersGroup) {
				map.removeLayer(currentMarkersGroup);
			}

			// Create a new group
			currentMarkersGroup = L.markerClusterGroup();

			for (let i = 0; i < filteredPosts.length; i++) {
				const a = filteredPosts[i];
				const id = a.id;
				const title = a.acf.projet.name;
				const arch = a.acf.architecte;
				// const maitre = a.acf.maitre;
				// const loca = a.acf.localisation;
				// const annee = a.acf.annee;
				// const img = a.acf.image0.sizes.thumbnail;
				const myIcon = L.icon({
					iconUrl: svg
				});
				const marker = L.marker(new L.LatLng(a.acf.lat, a.acf.lon), {
					title: title,
					id: id,
					arch: arch,
					icon: myIcon
				});
				marker.bindPopup(arch);
				currentMarkersGroup.addLayer(marker);
			}

			map.addLayer(currentMarkersGroup);
		}
	}
</script>

<aside class="fixed t0 l0 r0 z2 sm">
	<div class="bg-green">
		<div class="flex jc-center p251251 w100">
			<button class="w150" on:click={handleToggle}>{!visible ? '× Filtres' : 'Filtres'}</button>
			<form role="search">
				<input
					class="center w150"
					type="text"
					name="search"
					aria-label="Search"
					placeholder="Recherche"
					bind:value={searchTerm}
				/>
			</form>
		</div>
		<div class="p251251 wrap {!visible ? 'flex' : 'none'}" style="padding-top: 0;">
			<Select id="annee" label="Année" values={years} bind:value={selectAnnee} />
			<Select
				id="localisation"
				label="Localisation"
				values={localisations}
				bind:value={selectLocalisation}
			/>
			<Select id="type" label="Type" values={types} bind:value={selectType} />
			<Select id="structure" label="Structure" values={structures} bind:value={selectStructure} />
			<Select id="surface" label="Surface" values={surfaces} bind:value={selectSurface} />
			<Select id="budget" label="Budget" values={budgets} bind:value={selectBudget} />

			<Select
				id="architecte"
				label="Architecte"
				values={architectes}
				bind:value={selectArchitecte}
			/>
			<Select
				id="paysagiste"
				label="Paysagiste"
				values={paysagistes}
				bind:value={selectPaysagiste}
			/>
			<SelectGroup
				{bet_general}
				{bet_structure}
				{bet_environnement}
				{bet_fluide}
				{bet_thermique}
				{economistes}
				{acousticiens}
				bind:value={selectBureauEtudes}
			/>

			<Select id="maitre" label="Maître d'ouvrage" values={maitres} bind:value={selectMaitre} />
			<Select id="amenageur" label="Aménageur" values={amenageurs} bind:value={selectAmenageur} />
			<div class="p025">
				<label for="laureat">Lauréat</label>
				<input
					type="checkbox"
					id="laureat"
					name="laureat"
					class="bg-green"
					bind:checked={checkLaureat}
				/>
			</div>
			<div>
				<label for="multi">Multi</label>
				<select name="multi" id="multi" multiple bind:value={selectMulti}>
					<option value="a">a</option>
					<option value="b">b</option>
					<option value="c">c</option>
				</select>
			</div>
		</div>
	</div>
</aside>
<main>
	<!-- <input type="button" value="Remove point" on:click={removePoint} /> -->
	<div bind:this={mapElement} />
</main>

<style>
	@import 'https://unpkg.com/leaflet@1.9.3/dist/leaflet.css';
	@import 'https://unpkg.com/leaflet.markercluster@1.5.3/dist/MarkerCluster.css';
	@import 'https://unpkg.com/leaflet.markercluster@1.5.3/dist/MarkerCluster.Default.css';
	main div {
		height: 800px;
		z-index: 1;
	}
</style>
