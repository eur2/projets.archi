const load = async ({ params }) => {
  const fetchPost = async () => {
    const res = await fetch(`https://pp.maop.fr/wp-json/wp/v2/posts/${params.id}`);
    const data = await res.json();
    return data;
  };
  return {
    post: fetchPost(params.id)
  };
};
const prerender = "auto";
const csr = false;
export {
  csr,
  load,
  prerender
};
