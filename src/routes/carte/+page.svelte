<script>
	export let data;
	const { posts } = data;
	import MapLeaflet from '$lib/MapLeaflet.svelte';
	import Select from '$lib/Select.svelte';
	import SelectGroup from '$lib/SelectGroup.svelte';
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
				post.acf.bet_general.toLowerCase().indexOf(searchTerm) !== -1
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
				  (selectArchitecte === 'all' || post.acf.architecte.toLowerCase() === selectArchitecte) &&
				  (selectMaitre === 'all' || post.acf.maitre.toLowerCase() === selectMaitre) &&
				  (selectPaysagiste === 'all' || post.acf.paysagiste.toLowerCase() === selectPaysagiste) &&
				  (selectBureauEtudes === 'all' ||
						post.acf.bet_general.toLowerCase() === selectBureauEtudes ||
						post.acf.bet_structure.toLowerCase() === selectBureauEtudes ||
						post.acf.bet_thermique.toLowerCase() === selectBureauEtudes ||
						post.acf.bet_environnement.toLowerCase() === selectBureauEtudes ||
						post.acf.bet_fluides.toLowerCase() === selectBureauEtudes ||
						post.acf.economiste.toLowerCase() === selectBureauEtudes) &&
				  (checkLaureat === false || post.acf.laureat === checkLaureat)
		);

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
		return [...prev, post.acf.architecte];
	}, []);
	const architectes = [...new Set(categoryPosts)].sort();

	categoryPosts = posts.reduce(function (prev, post) {
		return [...prev, post.acf.amenageur];
	}, []);
	const amenageur = [...new Set(categoryPosts)].sort();

	categoryPosts = posts.reduce(function (prev, post) {
		return [...prev, post.acf.maitre];
	}, []);
	const maitres = [...new Set(categoryPosts)].sort();

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
</script>

<aside class="sticky t0 z5 none">
	<div class="flex jc-center sm-wrap">
		<div class="flex jc-center">
			<button class="p05 m025 bg-green border-radius" on:click={handleToggle}
				>{visible ? '×' : 'Filtres'}</button
			>
		</div>
		<div class="bg-green p251251 sm wrap {visible ? 'flex' : 'none'}">
			<form role="search" class="p025">
				<input
					type="text"
					name="search"
					aria-label="Search"
					placeholder="Recherche"
					bind:value={searchTerm}
				/>
			</form>
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
</aside>
<main>
	<!-- <Map {filteredPosts} /> -->
	<!-- <div id="map" /> -->

	<!-- <div id="map" bind:this={filteredPosts} /> -->
	<MapLeaflet {filteredPosts} />
</main>
