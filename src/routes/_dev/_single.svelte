<script>
	export let data;
	// console.log(data);
	const {
		footer,
		posts,
		header,
		years,
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
		types,
		type_construction
	} = data;
	import Splash from '$lib/Splash.svelte';
	import Post from '$lib/Post.svelte';
	import Select from '$lib/Select.svelte';
	import SelectGroup from '$lib/SelectGroup.svelte';
	import { splashOpen } from '$lib/store';
	const closeSplash = () => {
		splashOpen.set(false);
	};
	let visible;
	function handleToggle() {
		visible = !visible;
	}
	let mapVisible;
	function handleToggleMap() {
		mapVisible = !mapVisible;
	}
	let searchTerm = '';
	let selectTypeMulti = [];
	let checkLaureat = false;
	let selectLocalisation,
		selectAnnee,
		// selectType,
		selectStructure,
		selectSurface,
		selectBudget,
		selectMaitre,
		selectArchitecte,
		selectAmenageur,
		selectPaysagiste,
		selectBureauEtudes = 'all';
	let filteredPosts = [];
	// $: console.log(selectTypeMulti);
	$: if (selectTypeMulti.length === 0) {
		filteredPosts = posts
			.filter(
				(post) =>
					post.acf.types.some((value) => value.toLowerCase().indexOf(searchTerm) !== -1) ||
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
				// selectTypeMulti === [] &&
				checkLaureat === false &&
				selectAnnee === 'all' &&
				selectLocalisation === 'all' &&
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
			.filter(
				(post) =>
					(post.acf.types && post.acf.types.some((value) => selectTypeMulti.includes(value))) ||
					(post.acf.type_construction &&
						post.acf.type_construction.some((value) => selectTypeMulti.includes(value)))
			)
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
	// import { browser } from '$app/environment';
	// import leaflet from 'leaflet';
	// import 'leaflet.markercluster';
	import { onMount, onDestroy } from 'svelte';
	import svg from '$lib/marker.svg';
	let mapElement;
	let map;
	let mounted = false;
	let currentMarkersGroup = null;

	onMount(async () => {
		const L = await import('leaflet');
		const { MarkerClusterGroup } = await import('leaflet.markercluster');

		map = L.map(mapElement).setView([43.6506786, 1.4408547], 11);

		// L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		// 	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		// }).addTo(map);

		L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
			attribution: ''
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
		// This makes sure we have run onMount already and initialized the map
		if (mounted) {
			// If we already have a group, we need to clean it up before creating a new one
			if (currentMarkersGroup) {
				map.removeLayer(currentMarkersGroup);
			}

			// Create a new group
			currentMarkersGroup = L.markerClusterGroup();

			for (let i = 0; i < filteredPosts.length; i++) {
				const a = filteredPosts[i];
				const id = a.id;
				const slug = a.slug;
				const title = a.acf.projet.name;
				const arch = a.acf.architecte;
				const maitre = a.acf.maitre;
				const loca = a.acf.localisation;
				const annee = a.acf.annee;
				// const img = a.acf.image0.sizes.medium;
				const img = a.acf.image0.sizes.thumbnail;
				const myIcon = L.icon({
					iconUrl: svg
				});
				const marker = L.marker(new L.LatLng(a.acf.lat, a.acf.lon), {
					title: title,
					arch: arch,
					maitre: maitre,
					loca: loca,
					annee: annee,
					img: img,
					icon: myIcon,
					id: id,
					slug: slug
				});
				marker.bindPopup(
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
					<div><a target="_blank" href=${id} rel="noopener noreferrer nofollow"
						><img width="300" src=${img} alt=${title} /></a
					></div>`,
					{ maxWidth: 270 }
				);
				currentMarkersGroup.addLayer(marker);
			}

			map.addLayer(currentMarkersGroup);
		}
	}
</script>

{#if $splashOpen}
	<Splash {posts} on:close={closeSplash}>
		{@html header.content.rendered}
	</Splash>
{/if}

<div class="fixed t0 l0 p025 logo" style="max-width: 100px;">
	<a href="https://maop.fr/" target="_blank" rel="noreferrer">
		<svg
			data-name="Logo MAOP"
			xmlns="http://www.w3.org/2000/svg"
			width="70.56mm"
			height="70.6mm"
			viewBox="0 0 200 200.12"
		>
			<title>logo-maop</title>
			<path d="M106.51,5.93a6,6,0,0,1-12,0h0a6,6,0,0,1,12,0Z" />
			<path d="M63.56,31.38a6,6,0,0,1-12,0h0a6,6,0,0,1,12,0Z" />
			<path d="M149.22,31.38a6,6,0,0,1-12,0h0a6,6,0,0,1,12,0Z" />
			<path d="M174.29,57.47a6,6,0,0,1-12,0h0a6,6,0,0,1,12,0Z" />
			<path d="M200,99.79a6,6,0,0,1-12,0h0a6,6,0,0,1,12,0Z" />
			<path d="M173.68,142.29a6,6,0,0,1-12,0v0a6,6,0,0,1,12,0Z" />
			<path d="M149.21,167.61a6,6,0,0,1-12,0h0a6,6,0,0,1,12,0Z" />
			<path d="M105.52,194.21a6,6,0,0,1-12,0h0a6,6,0,0,1,12,0Z" />
			<path d="M63.17,167.61a6,6,0,0,1-12,0h0a6,6,0,0,1,12,0Z" />
			<path d="M39,142.3a6,6,0,0,1-12,0h0a6,6,0,0,1,12,0Z" />
			<path d="M12,99.93a6,6,0,0,1-6,5.91,6,6,0,0,1-6-5.92H0A6,6,0,0,1,6,94a6,6,0,0,1,6,5.92h0" />
			<path d="M38.67,57.54a6,6,0,0,1-12,0h0a6,6,0,0,1,12,0Z" />
		</svg>
	</a>
</div>
<nav class="fixed b0 l0 r0 z4 flex jc-center {!visible ? 'mr-open' : 'mr-close'}">
	<!-- <a href="/carte" class="p05 m025 bg-black border-radius" data-sveltekit-preload-data="hover"
		>Carte</a
	> -->
	<button on:click={handleToggleMap} class="p05 m025 bg-black border-radius"
		>{!mapVisible ? 'Carte' : 'Index'}</button
	>
	<a href="/info" class="p05 m025 bg-black border-radius" data-sveltekit-preload-data="hover"
		>Info</a
	>
</nav>
<aside class="fixed b0 t0 r0 z4 sm bg-green p025 overflow-y {!visible ? 'open' : 'close'}">
	<button on:click={handleToggle} class="absolute t0 b0 r0 w100 z-1" style="padding: 0;"></button>

	<div class={!visible ? 'open-content' : 'close-content'}>
		<div class="fixed t0 r0">
			<button on:click={handleToggle}>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1"
					stroke-linecap="round"
					stroke-linejoin="round"
					><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"
					></line></svg
				></button
			>
		</div>

		<form role="search" style="padding: .25em 0 .25em 0;">
			<input
				type="text"
				name="search"
				aria-label="Search"
				placeholder="Recherche"
				bind:value={searchTerm}
			/><br /><br />
		</form>
		<Select id="annee" label="Année" values={years} bind:value={selectAnnee} />
		<Select
			id="localisation"
			label="Localisation"
			values={localisations}
			bind:value={selectLocalisation}
		/>
		<!-- <Select id="type" label="Type" values={types} bind:value={selectType} /> -->
		<Select id="structure" label="Structure" values={structures} bind:value={selectStructure} />
		<Select id="surface" label="Surface" values={surfaces} bind:value={selectSurface} />
		<Select id="budget" label="Budget" values={budgets} bind:value={selectBudget} />

		<Select id="architecte" label="Architecte" values={architectes} bind:value={selectArchitecte} />
		<Select id="paysagiste" label="Paysagiste" values={paysagistes} bind:value={selectPaysagiste} />
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
		<div class="p025 flex column">
			<br />
			<label for="laureat"
				><input
					type="checkbox"
					id="laureat"
					name="laureat"
					bind:checked={checkLaureat}
					on:change={() => scrollTo(0, 0)}
				/> Lauréat</label
			><br />
			<div class="title-multi">Type d'utilisation</div>
			{#each types as value}
				<label for={value}
					><input
						type="checkbox"
						id={value}
						name={value}
						bind:group={selectTypeMulti}
						{value}
						on:change={() => scrollTo(0, 0)}
					/>
					{value}</label
				>
			{/each}<br />
			<div class="title-multi">Type de construction</div>
			{#each type_construction as value}
				<label for={value}
					><input
						type="checkbox"
						id={value}
						name={value}
						bind:group={selectTypeMulti}
						{value}
						on:change={() => scrollTo(0, 0)}
					/>
					{value}</label
				>
			{/each}<br />
		</div>
	</div>
</aside>
{#if mapVisible}
	<main>
		<div id="map" bind:this={mapElement} />
	</main>
{:else}
	<main class="bg-grey {!visible ? 'mr-open' : 'mr-close'} {!mapVisible ? 'block' : 'none'}">
		<div class="flex header bg-white" style="padding-bottom: 0;">
			<div class="flex1 sm p-r">Année</div>
			<div class="flex2 sm p-r">Localisation</div>
			<div class="flex5 sm p-r">Projet</div>
			<div class="flex2 sm p-r">Maître d'ouvrage</div>
			<div class="flex2 sm p-r">Architecte</div>
			<div style="visibility: hidden;">
				<svg
					class="w20"
					class:rotate={visible === true}
					stroke="currentColor"
					fill="none"
					stroke-width="1"
					viewBox="0 0 24 24"
					stroke-linecap="round"
					stroke-linejoin="round"
					height="1em"
					width="1em"
					xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9" /></svg
				>
			</div>
		</div>
		<div>
			{#if filteredPosts.length}
				{#each filteredPosts as post}
					<Post {post} />
				{/each}
			{:else}<div class="center bg-white p">Aucun résultat :(</div>{/if}
		</div>
	</main>
{/if}
<footer class="center eeeee bg-fbfbfb mb p sm {!visible ? 'mr-open' : 'mr-close'}">
	{@html footer.content.rendered}<br />
	<!-- <div class="non">
		{#each posts as post}
			<a data-sveltekit-preload-data="hover" href="/{post.id}">{post.id}{post.slug}</a>
		{/each}
	</div> -->
</footer>

<style>
	/* @import 'https://unpkg.com/leaflet@1.9.3/dist/leaflet.css';
	@import 'https://unpkg.com/leaflet.markercluster@1.5.3/dist/MarkerCluster.css';
	@import 'https://unpkg.com/leaflet.markercluster@1.5.3/dist/MarkerCluster.Default.css'; */
	@import 'leaflet/dist/leaflet.css';
	@import 'leaflet.markercluster/dist/MarkerCluster.css';
	@import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
	#map {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		height: 100%;
	}
</style>
