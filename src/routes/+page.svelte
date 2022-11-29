<script>
	export let data;
	const { posts } = data;
	import Front from '$lib/Front.svelte';
	import Post from '$lib/Post.svelte';
	import Select from '$lib/Select.svelte';
	import SelectGroup from '$lib/SelectGroup.svelte';
	// import { cat } from '$lib/utils.js';
	let visible;
	function handleToggle() {
		visible = !visible;
	}

	let searchTerm = '';
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

	$: filteredPosts = posts
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
				  (selectPaysagiste === 'all' || post.acf.paysagiste.toLowerCase() === selectPaysagiste) &&
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

	// function categories(el) {
	// 	let categoryPosts = posts.reduce(function (prev, post) {
	// 		return [...prev, post.acf.annee];
	// 	}, []);
	// 	el = [...new Set(categoryPosts)].sort();
	// 	return el;
	// }
	// categories(annee);

	let categoryPosts = posts.reduce(function (prev, post) {
		return [...prev, post.acf.annee];
	}, []);
	const annee = [...new Set(categoryPosts)].sort();

	categoryPosts = posts.reduce(function (prev, post) {
		return [...prev, post.acf.type];
	}, []);
	const types = [...new Set(categoryPosts)].sort();

	categoryPosts = posts.reduce(function (prev, post) {
		return [...prev, post.acf.localisation];
	}, []);
	const localisations = [...new Set(categoryPosts)].sort();

	categoryPosts = posts.reduce(function (prev, post) {
		return [...prev, post.acf.structure];
	}, []);
	const structures = [...new Set(categoryPosts)].sort();

	categoryPosts = posts.reduce(function (prev, post) {
		return [...prev, post.acf.surface];
	}, []);
	const surfaces = [...new Set(categoryPosts)].sort();

	categoryPosts = posts.reduce(function (prev, post) {
		return [...prev, post.acf.budget];
	}, []);
	const budgets = [...new Set(categoryPosts)].sort();

	categoryPosts = posts.reduce(function (prev, post) {
		return [...prev, post.acf.architecte_associé];
	}, []);
	const architectes_as = [...new Set(categoryPosts)].sort().filter((n) => n);
	// console.log(architectes_as);

	categoryPosts = posts.reduce(function (prev, post) {
		return [...prev, post.acf.architecte];
	}, []);
	const architectes = [...new Set(categoryPosts)]
		.concat(architectes_as)
		.sort()
		.filter((n) => n);
	// console.log(architectes);

	categoryPosts = posts.reduce(function (prev, post) {
		return [...prev, post.acf.amenageur];
	}, []);
	const amenageur = [...new Set(categoryPosts)].sort().filter((n) => n);

	categoryPosts = posts.reduce(function (prev, post) {
		return [...prev, post.acf.maitre];
	}, []);
	const maitres = [...new Set(categoryPosts)].sort().filter((n) => n);

	categoryPosts = posts.reduce(function (prev, post) {
		return [...prev, post.acf.bet_general];
	}, []);
	const bet_general = [...new Set(categoryPosts)].sort().filter((n) => n);

	categoryPosts = posts.reduce(function (prev, post) {
		return [...prev, post.acf.bet_structure];
	}, []);
	const bet_structure = [...new Set(categoryPosts)].sort().filter((n) => n);

	categoryPosts = posts.reduce(function (prev, post) {
		return [...prev, post.acf.bet_thermique];
	}, []);
	const bet_thermique = [...new Set(categoryPosts)].sort().filter((n) => n);

	categoryPosts = posts.reduce(function (prev, post) {
		return [...prev, post.acf.bet_fluides];
	}, []);
	const bet_fluides = [...new Set(categoryPosts)].sort().filter((n) => n);

	categoryPosts = posts.reduce(function (prev, post) {
		return [...prev, post.acf.bet_environnement];
	}, []);
	const bet_environnement = [...new Set(categoryPosts)].sort().filter((n) => n);

	categoryPosts = posts.reduce(function (prev, post) {
		return [...prev, post.acf.economiste];
	}, []);
	const economiste = [...new Set(categoryPosts)].sort().filter((n) => n);

	categoryPosts = posts.reduce(function (prev, post) {
		return [...prev, post.acf.paysagiste];
	}, []);
	const paysagiste = [...new Set(categoryPosts)].sort().filter((n) => n);

	categoryPosts = posts.reduce(function (prev, post) {
		return [...prev, post.acf.acousticien];
	}, []);
	const acousticien = [...new Set(categoryPosts)].sort().filter((n) => n);
</script>

<Front {posts} />

<main id="index" class="relative bg-grey" style="margin-top:100vh;min-height:100vh;">
	<aside class="sticky t0 z2 sm">
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
				<Select id="annee" label="Année" values={annee} bind:value={selectAnnee} />
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
					values={paysagiste}
					bind:value={selectPaysagiste}
				/>
				<SelectGroup
					{bet_general}
					{bet_structure}
					{bet_environnement}
					{bet_fluides}
					{bet_thermique}
					{economiste}
					{acousticien}
					bind:value={selectBureauEtudes}
				/>

				<Select id="maitre" label="Maître d'ouvrage" values={maitres} bind:value={selectMaitre} />
				<Select id="amenageur" label="Aménageur" values={amenageur} bind:value={selectAmenageur} />
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
			</div>
		</div>
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
	</aside>
	{#if filteredPosts.length}
		{#each filteredPosts as post}
			<Post {post} />
		{/each}
	{:else}<div class="center bg-white p">Aucun résultat :(</div>{/if}
</main>
