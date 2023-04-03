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
		types
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

	$: if (selectTypeMulti.length === 0) {
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
				// selectTypeMulti === [] &&
				checkLaureat === false &&
				selectAnnee === 'all' &&
				selectLocalisation === 'all' &&
				// selectType === 'all' &&
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
					  //   (selectType === 'all' || post.acf.type.toLowerCase() === selectType) &&
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
				(post) => post.acf.types && post.acf.types.some((value) => selectTypeMulti.includes(value))
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
				// selectType === 'all' &&
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
					  //   (selectType === 'all' || post.acf.type.toLowerCase() === selectType) &&
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
</script>

{#if $splashOpen}
	<Splash {posts} on:close={closeSplash}>
		{@html header.content.rendered}
	</Splash>
{/if}

<div class="fixed t0 l0 p025" style="max-width: 100px;">
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

<nav class="fixed b0 t0 r0 z4 sm bg-green p025 overflow-y">
	<div class="flex jc-center p025555">
		<button on:click={handleToggle} class={!visible ? 'close' : 'h-100vh flex'}
			>{!visible ? '×' : '☰'}</button
		>
	</div>
	<div class={!visible ? '' : 'none'} style="width: 150px;">
		<div>
			<div class="p025">
				<a href="/" data-sveltekit-preload-data="hover">☀ Index</a>
			</div>
			<div class="p025">
				<a href="/carte" data-sveltekit-preload-data="hover">☁ Carte</a>
			</div>
			<div class="p025">
				<a href="/info" data-sveltekit-preload-data="hover">☂ Info</a>
			</div>
			<form role="search" class="p025">
				<input
					style="padding: 0;"
					type="text"
					name="search"
					aria-label="Search"
					placeholder="☄  Recherche"
					bind:value={searchTerm}
				/>
			</form>
		</div>
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
				><input type="checkbox" id="laureat" name="laureat" bind:checked={checkLaureat} /> Lauréat</label
			><br />
			{#each types as value}
				<label for={value}
					><input type="checkbox" id={value} name={value} bind:group={selectTypeMulti} {value} />
					{value}</label
				>
			{/each}
		</div>
	</div>
</nav>
<main class="bg-grey {!visible ? 'mr-open' : 'mr-close'}">
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
				stroke-width="2"
				viewBox="0 0 24 24"
				stroke-linecap="round"
				stroke-linejoin="round"
				height="1em"
				width="1em"
				xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9" /></svg
			>
		</div>
	</div>
	{#if filteredPosts.length}
		{#each filteredPosts as post}
			<Post {post} />
		{/each}
	{:else}<div class="center bg-white p">:(</div>{/if}
</main>
<footer class="center eeeee bg-fbfbfb p sm {!visible ? 'mr-open' : 'mr-close'}">
	{@html footer.content.rendered}
</footer>
