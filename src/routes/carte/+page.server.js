export const prerender = true

export const load = async () => {
  const fetchPosts = async () => {
      const res = await fetch(`https://pp.maop.fr/wp-json/wp/v2/posts?_embed&per_page=100`)
      const data = await res.json()
      // console.log(data)
      return data
  }

  return {
      posts: fetchPosts(),
      // years: fetchYears(),
      // types: fetchTypes()
  }
}
