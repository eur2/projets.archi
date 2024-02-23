export const load = async ({ params }) => {
	const fetchPost = async () => {
		// const res = await fetch(`https://pp.maop.fr/wp-json/wp/v2/posts?slug=${params.slug}`);
		const res = await fetch(`https://pp.maop.fr/wp-json/wp/v2/posts/${params.id}`);
		const data = await res.json();
		return data;
		// return data[0];
	};

	return {
		post: await fetchPost(params.id)
	};
};

export const prerender = 'auto';
export const csr = false;
