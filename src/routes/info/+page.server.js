export const prerender = true;

export const load = async () => {
	const fetchInfo = async () => {
		const res = await fetch(`https://pp.maop.fr/wp-json/wp/v2/pages/64`);
		const data = await res.json();
		return data;
	};
	const fetchLegal = async () => {
		const res = await fetch(`https://pp.maop.fr/wp-json/wp/v2/pages/179`);
		const data = await res.json();
		return data;
	};

	return {
		info: fetchInfo(),
		legal: fetchLegal()
	};
};
