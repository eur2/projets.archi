import arraySort from "array-sort";
const prerender = true;
const load = async () => {
  const fetchPosts = async () => {
    const res = await fetch(`https://pp.maop.fr/wp-json/wp/v2/posts?per_page=100`);
    const rawdata = await res.json();
    var data = arraySort(
      rawdata,
      ["acf.annee", "acf.localisation", "acf.projet.name", "acf.maitre", "acf.architecte"],
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
  const localisations = posts.reduce(function(prev, post) {
    const loc = post.acf.localisation;
    const loc1 = post.acf.localisation1;
    return prev.concat(loc, loc1);
  }, []).filter((n) => n);
  const uniqueLocalisations = [...new Set(localisations)].sort();
  const architectes = posts.reduce(function(prev, post) {
    const architecte = post.acf.architecte;
    const architecteAssocie = post.acf.architecte_associé;
    return prev.concat(architecte, architecteAssocie);
  }, []).filter((n) => n);
  const uniqueArchitectes = [...new Set(architectes)].sort();
  const type_construction = [...new Set(posts.flatMap((post) => post.acf.type_construction || []))].filter((value, index, self) => value !== void 0 && self.indexOf(value) === index).sort();
  function extractAndSortField(posts2, field) {
    return [...new Set(posts2.map((post) => post.acf[field]))].filter(Boolean).sort();
  }
  function extractAndSortUniqueField(posts2, field) {
    return [
      ...new Set(
        posts2.reduce(function(prev, post) {
          return [...prev, ...post.acf[field]];
        }, []).filter((value) => value !== void 0)
      )
    ].sort();
  }
  return {
    posts: await fetchPosts(),
    footer: await fetchFooter(),
    header: await fetchHeader(),
    years: extractAndSortField(posts, "annee"),
    localisations: uniqueLocalisations,
    structures: extractAndSortField(posts, "structure"),
    surfaces: extractAndSortField(posts, "surface"),
    budgets: extractAndSortField(posts, "budget"),
    architectes: uniqueArchitectes,
    amenageurs: extractAndSortField(posts, "amenageur"),
    maitres: extractAndSortField(posts, "maitre"),
    bet_general: extractAndSortField(posts, "bet_general"),
    bet_structure: extractAndSortField(posts, "bet_structure"),
    bet_thermique: extractAndSortField(posts, "bet_thermique"),
    bet_fluide: extractAndSortField(posts, "bet_fluide"),
    bet_environnement: extractAndSortField(posts, "bet_environnement"),
    economistes: extractAndSortField(posts, "economiste"),
    paysagistes: extractAndSortField(posts, "paysagiste"),
    acousticiens: extractAndSortField(posts, "acousticien"),
    types: extractAndSortUniqueField(posts, "types"),
    type_construction
    // type_construction: [
    // 	...new Set(
    // 		posts.reduce(function (prev, post) {
    // 			return [...prev, post.acf.type_construction];
    // 		}, [])
    // 	)
    // ]
    // 	.flat()
    // 	.filter((value, index, self) => {
    // 		return value !== undefined && self.indexOf(value) === index;
    // 	})
    // 	.sort()
    // randomPost: posts[Math.floor(Math.random() * 20)],
  };
};
export {
  load,
  prerender
};
