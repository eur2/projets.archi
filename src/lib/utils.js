// 	export function cat(posts){
// 	let categoryPosts = posts.reduce(function (prev, post) {
// 		return [...prev, post.acf.annee];
// 	}, []);
// 	const years = [...new Set(categoryPosts)].sort();

// 	categoryPosts = posts.reduce(function (prev, post) {
// 		return [...prev, post.acf.type];
// 	}, []);
// 	const types = [...new Set(categoryPosts)].sort();

// 	categoryPosts = posts.reduce(function (prev, post) {
// 		return [...prev, post.acf.localisation];
// 	}, []);
// 	const localisations = [...new Set(categoryPosts)].sort();

// 	categoryPosts = posts.reduce(function (prev, post) {
// 		return [...prev, post.acf.structure];
// 	}, []);
// 	const structures = [...new Set(categoryPosts)].sort();

// 	categoryPosts = posts.reduce(function (prev, post) {
// 		return [...prev, post.acf.surface];
// 	}, []);
// 	const surfaces = [...new Set(categoryPosts)].sort();

// 	categoryPosts = posts.reduce(function (prev, post) {
// 		return [...prev, post.acf.budget];
// 	}, []);
// 	const budgets = [...new Set(categoryPosts)].sort();

// 	categoryPosts = posts.reduce(function (prev, post) {
// 		return [...prev, post.acf.architecte];
// 	}, []);
// 	const architectes = [...new Set(categoryPosts)].sort();

// 	categoryPosts = posts.reduce(function (prev, post) {
// 		return [...prev, post.acf.maitre];
// 	}, []);
// 	const maitres = [...new Set(categoryPosts)].sort();

// 	categoryPosts = posts.reduce(function (prev, post) {
// 		return [...prev, post.acf.bet_general];
// 	}, []);
// 	const bet_general = [...new Set(categoryPosts)].sort().filter((n) => n);
// 	console.log(bet_general);

// 	categoryPosts = posts.reduce(function (prev, post) {
// 		return [...prev, post.acf.bet_structure];
// 	}, []);
// 	const bet_structure = [...new Set(categoryPosts)].sort().filter((n) => n);

// 	categoryPosts = posts.reduce(function (prev, post) {
// 		return [...prev, post.acf.amenageur];
// 	}, []);
// 	const amenageur = [...new Set(categoryPosts)].sort();
// }