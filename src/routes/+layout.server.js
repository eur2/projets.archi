export const prerender = true;

export const load = async () => {
	const fetchPosts = async () => {
		const res = await fetch(`https://pp.maop.fr/wp-json/wp/v2/pages/69`);
		const data = await res.json();
		return data;
	};
	const fetchHeader = async () => {
		const res = await fetch(`https://pp.maop.fr/wp-json/wp/v2/pages/190`);
		const data = await res.json();
		return data;
	};

	return {
		footer: fetchPosts(),
		header: fetchHeader()
	};
};
