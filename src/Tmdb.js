const API_BASE = 'https://api.themoviedb.org/3'
const KEY = 'cd9606b6fc1afcf96cd70f083dc2a6bd'

const getHomeList = async () => {
  return [
    {
      slug: 'originals',
      title: 'Originais da Netflix',
      items: await basicFetch(
        `/discover/tv?with_network=213&language=pt-BR&api_key=${KEY}`
      )
    },
    {
      slug: 'trending',
      title: 'Recomedados da Netflix',
      items: await basicFetch(
        `/trending/all/week?language=pt-BR&api_key=${KEY}`
      )
    },
    {
      slug: 'toprated',
      title: 'Em alta',
      items: await basicFetch(
        `/movie/top_rated?language=pt-BR&api_key=${KEY}`
      )
    },
    {
      slug: 'actions',
      title: 'Ação',
      items: await basicFetch(
        `/discover/movie?with_genres=28&language=pt-BR&api_key=${KEY}`
      )
    },
    {
      slug: 'comedy',
      title: 'Comédia',
      items: await basicFetch(
        `/discover/movie?with_genres=35&language=pt-BR&api_key=${KEY}`
      )
    },
    {
      slug: 'horror',
      title: 'Terror',
      items: await basicFetch(
        `/discover/movie?with_genres=27&language=pt-BR&api_key=${KEY}`
      )
    },
    {
      slug: 'romance',
      title: 'Romance',
      items: await basicFetch(
        `/discover/movie?with_genres=10749&language=pt-BR&api_key=${KEY}`
      )
    },
    {
      slug: 'documentary',
      title: 'Documentário',
      items: await basicFetch(
        `/discover/movie?with_genres=99&language=pt-BR&api_key=${KEY}`
      )
    }
  ]
}

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`)
  const json = await req.json()

  return json
}
export default getHomeList

