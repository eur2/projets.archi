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
					(post.acf.localisation &&
						post.acf.localisation.toLowerCase().indexOf(searchTerm) !== -1) ||
					(post.acf.localisation1 &&
						post.acf.localisation1.toLowerCase().indexOf(searchTerm) !== -1) ||
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
							(post.acf.localisation &&
								post.acf.localisation.toLowerCase() === selectLocalisation) ||
							(post.acf.localisation1 &&
								post.acf.localisation1.toLowerCase() === selectLocalisation)) &&
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
					(post.acf.localisation &&
						post.acf.localisation.toLowerCase().indexOf(searchTerm) !== -1) ||
					(post.acf.localisation1 &&
						post.acf.localisation1.toLowerCase().indexOf(searchTerm) !== -1) ||
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
							(post.acf.localisation &&
								post.acf.localisation.toLowerCase() === selectLocalisation) ||
							(post.acf.localisation1 &&
								post.acf.localisation1.toLowerCase() === selectLocalisation)) &&
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
<!-- <div class="z5 fixed t0 l0 p025 p05 logo" style="max-width: 100px;"></div> -->
<div class="z5 absolute t0 l0 p05 logo">
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
	<a href="/carte" class="p05 m025 bg-black border-radius" data-sveltekit-preload-data="hover"
		>Carte</a
	>
	<a href="/info" class="p05 m025 bg-black border-radius" data-sveltekit-preload-data="hover"
		>Info</a
	>
</nav>
<aside class="fixed b0 t0 r0 z4 sm bg-green p025 overflow-y {!visible ? 'open' : 'close'}">
	<!-- <button on:click={handleToggle} class="absolute t0 b0 r0 w100 z-1" style="padding: 0;"></button> -->
	<div
		aria-label="Filter menu"
		role="button"
		tabindex="0"
		on:click={handleToggle}
		on:keydown={handleToggle}
		class="pointer absolute t0 b0 r0 w100 z-1"
	/>
	<div class={!visible ? 'open-content' : 'close-content'}>
		<div class="fixed t0 r0 p025">
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
<footer class="center eeeee bg-fbfbfb mb p sm {!visible ? 'mr-open' : 'mr-close'}">
	{@html footer.content.rendered}<br />
	<!-- <div class="non">
		{#each posts as post}
			<a data-sveltekit-preload-data="hover" href="/{post.id}">{post.id}{post.slug}</a>
		{/each}
	</div> -->
</footer>
