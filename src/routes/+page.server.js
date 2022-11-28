import arraySort from 'array-sort';

export const prerender = true

export const load = async () => {
  const fetchPosts = async () => {
      const res = await fetch(`https://pp.maop.fr/wp-json/wp/v2/posts?_embed&per_page=100`)
      const data = await res.json()
      var result = arraySort(data, ['acf.annee', 'acf.localisation', 'acf.projet.name','acf.maitre', 'acf.architecte']);
      // console.log(result)
 
    //   data.sort((a,b) => 
    // (a.acf.annee - b.acf.annee) || 
    // (a.acf.localisation - b.acf.localisation) || 
    // (a.acf.maitre - b.acf.maitre));
      // let sortBy = [{
      //   prop:{acf:'annee'},
      //   direction: 1
      // },{
      //   prop:'id',
      //   direction: 1
      // }];
      // data.sort(function(a,b){
      //   let i = 0, result = 0;
      //   while(i < sortBy.length && result === 0) {
      //     result = sortBy[i].direction*(a[ sortBy[i].prop ].toString() < b[ sortBy[i].prop ].toString() ? -1 : (a[ sortBy[i].prop ].toString() > b[ sortBy[i].prop ].toString() ? 1 : 0));
      //     i++;
      //   }
      //   return result;
      // })
      return result
  }
  return {
      posts: fetchPosts(),
      // years: fetchYears(),
      // types: fetchTypes()
  }
}

//   const fetchYears = async () => {
//     let categoryPosts = data.reduce(function (prev, post) {
//       return [...prev, post.acf.annee];
//     }, []);
//     const years = [...new Set(categoryPosts)].sort();
//     return years
// }
// const fetchTypes = async () => {
//   const res = await fetch(`https://pp.maop.fr/wp-json/wp/v2/posts?_embed&per_page=100`)
//   const data = await res.json()
//   let categoryPosts = data.reduce(function (prev, post) {
// 		return [...prev, post.acf.type];
// 	}, []);
// 	const types = [...new Set(categoryPosts)].sort();
//   return types
// }