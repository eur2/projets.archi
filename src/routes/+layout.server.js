import arraySort from "array-sort";

export const prerender = true;

export const load = async () => {
  const rawPosts = await fetch(
    `https://pp.maop.fr/wp-json/wp/v2/posts?per_page=200&_fields=id,acf`,
  ).then((r) => r.json());

  const footer = await fetch(`https://pp.maop.fr/wp-json/wp/v2/pages/69`).then(
    (r) => r.json(),
  );
  const header = await fetch(`https://pp.maop.fr/wp-json/wp/v2/pages/190`).then(
    (r) => r.json(),
  );
  const posts = arraySort(
    rawPosts,
    [
      "acf.annee",
      "acf.localisation",
      "acf.projet.name",
      "acf.maitre",
      "acf.architecte",
    ],
    { reverse: true },
  );

  const localisations = posts
    .reduce(function (prev, post) {
      const loc = post.acf.localisation;
      const loc1 = post.acf.localisation1;
      return prev.concat(loc, loc1);
    }, [])
    .filter((n) => n);

  const uniqueLocalisations = [...new Set(localisations)].sort();
  // console.log(uniqueLocalisations);

  const architectes = posts
    .reduce(function (prev, post) {
      const architecte = post.acf.architecte;
      const architecteAssocie = post.acf.architecte_associé;
      return prev.concat(architecte, architecteAssocie);
    }, [])
    .filter((n) => n);

  const uniqueArchitectes = [...new Set(architectes)].sort();

  const type_construction = [
    ...new Set(posts.flatMap((post) => post.acf.type_construction || [])),
  ]
    .filter(
      (value, index, self) =>
        value !== undefined && self.indexOf(value) === index,
    )
    .sort();

  function extractAndSortField(posts, field) {
    return [...new Set(posts.map((post) => post.acf[field]))]
      .filter(Boolean)
      .sort();
  }
  function extractAndSortUniqueField(posts, field) {
    return [
      ...new Set(
        posts
          .reduce(function (prev, post) {
            return [...prev, ...post.acf[field]];
          }, [])
          .filter((value) => value !== undefined),
      ),
    ].sort();
  }
  return {
    posts: posts,
    footer: footer,
    header: header,
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
    type_construction: type_construction,
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
