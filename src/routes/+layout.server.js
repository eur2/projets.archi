import arraySort from 'array-sort';

export const prerender = true;

export const load = async () => {
	// const fetchPosts = async () => {
	// 	const res = await fetch(`https://pp.maop.fr/wp-json/wp/v2/posts?_embed&per_page=100`);
	// 	const data = await res.json();
	// 	// console.log(data)
	// 	return data;
	// };
	const fetchPosts = async () => {
		const res = await fetch(`https://pp.maop.fr/wp-json/wp/v2/posts?_embed&per_page=100`);
		const rawdata = await res.json();
		var data = arraySort(
			rawdata,
			['acf.annee', 'acf.localisation', 'acf.projet.name', 'acf.maitre', 'acf.architecte'],
			{ reverse: true }
		);
		return data;
	};
	const fetchFooter = async () => {
		const res = await fetch(`https://pp.maop.fr/wp-json/wp/v2/pages/69`);
		const data = await res.json();
		return data;
	};
	const fetchHeader = async () => {
		const res = await fetch(`https://pp.maop.fr/wp-json/wp/v2/pages/190`);
		const data = await res.json();
		return data;
	};
	const posts = await fetchPosts();

	let categoryPosts = posts.reduce(function (prev, post) {
		return [...prev, post.acf.architecte_associé];
	}, []);
	const architectes_as = [...new Set(categoryPosts)].sort().filter((n) => n);

	categoryPosts = posts.reduce(function (prev, post) {
		return [...prev, post.acf.architecte];
	}, []);
	const architectesRaw = [...new Set(categoryPosts)]
		.concat(architectes_as)
		.sort()
		.filter((n) => n);

	return {
		posts: fetchPosts(),
		footer: fetchFooter(),
		header: fetchHeader(),
		years: [
			...new Set(
				posts.reduce(function (prev, post) {
					return [...prev, post.acf.annee];
				}, [])
			)
		].sort(),
		// types: [
		// 	...new Set(
		// 		posts.reduce(function (prev, post) {
		// 			return [...prev, post.acf.type];
		// 		}, [])
		// 	)
		// ].sort(),
		localisations: [
			...new Set(
				posts.reduce(function (prev, post) {
					return [...prev, post.acf.localisation];
				}, [])
			)
		].sort(),
		structures: [
			...new Set(
				posts.reduce(function (prev, post) {
					return [...prev, post.acf.structure];
				}, [])
			)
		].sort(),
		surfaces: [
			...new Set(
				posts.reduce(function (prev, post) {
					return [...prev, post.acf.surface];
				}, [])
			)
		].sort(),
		budgets: [
			...new Set(
				posts.reduce(function (prev, post) {
					return [...prev, post.acf.budget];
				}, [])
			)
		].sort(),
		architectes: [...new Set(architectesRaw)],
		amenageurs: [
			...new Set(
				posts.reduce(function (prev, post) {
					return [...prev, post.acf.amenageur];
				}, [])
			)
		]
			.sort()
			.filter((n) => n),
		maitres: [
			...new Set(
				posts.reduce(function (prev, post) {
					return [...prev, post.acf.maitre];
				}, [])
			)
		]
			.sort()
			.filter((n) => n),
		bet_general: [
			...new Set(
				posts.reduce(function (prev, post) {
					return [...prev, post.acf.bet_general];
				}, [])
			)
		]
			.sort()
			.filter((n) => n),
		bet_structure: [
			...new Set(
				posts.reduce(function (prev, post) {
					return [...prev, post.acf.bet_structure];
				}, [])
			)
		]
			.sort()
			.filter((n) => n),
		bet_thermique: [
			...new Set(
				posts.reduce(function (prev, post) {
					return [...prev, post.acf.bet_thermique];
				}, [])
			)
		]
			.sort()
			.filter((n) => n),
		bet_fluide: [
			...new Set(
				posts.reduce(function (prev, post) {
					return [...prev, post.acf.bet_fluide];
				}, [])
			)
		]
			.sort()
			.filter((n) => n),
		bet_environnement: [
			...new Set(
				posts.reduce(function (prev, post) {
					return [...prev, post.acf.bet_environnement];
				}, [])
			)
		]
			.sort()
			.filter((n) => n),
		economistes: [
			...new Set(
				posts.reduce(function (prev, post) {
					return [...prev, post.acf.economiste];
				}, [])
			)
		]
			.sort()
			.filter((n) => n),
		paysagistes: [
			...new Set(
				posts.reduce(function (prev, post) {
					return [...prev, post.acf.paysagiste];
				}, [])
			)
		]
			.sort()
			.filter((n) => n),
		acousticiens: [
			...new Set(
				posts.reduce(function (prev, post) {
					return [...prev, post.acf.acousticien];
				}, [])
			)
		]
			.sort()
			.filter((n) => n),
		types: [
			...new Set(
				posts.reduce(function (prev, post) {
					return [...prev, post.acf.types];
				}, [])
			)
		]
			.flat()
			.filter((value, index, self) => {
				return self.indexOf(value) === index;
			})
			.sort()
	};
};
