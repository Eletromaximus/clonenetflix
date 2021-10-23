const API_BASE = 'https://api.themoviedb.org/3'

const getHomeList = async () => {
  return [
    {
      slug: 'originals',
      title: 'Originais da Netflix',
      items: await basicFetch(
        `/discover/tv?with_network=213&language=pt-BR&api_key=${process.env.REACT_APP_KEY_THEMOVIEDB}`
      )
    },
    {
      slug: 'trending',
      title: 'Recomedados da Netflix',
      items: await basicFetch(
        `/trending/all/week?language=pt-BR&api_key=${process.env.REACT_APP_KEY_THEMOVIEDB}`
      )
    },
    {
      slug: 'toprated',
      title: 'Em alta',
      items: await basicFetch(
        `/movie/top_rated?language=pt-BR&api_key=${process.env.REACT_APP_KEY_THEMOVIEDB}`
      )
    },
    {
      slug: 'actions',
      title: 'Ação',
      items: await basicFetch(
        `/discover/movie?with_genres=28&language=pt-BR&api_key=${process.env.REACT_APP_KEY_THEMOVIEDB}`
      )
    },
    {
      slug: 'comedy',
      title: 'Comédia',
      items: await basicFetch(
        `/discover/movie?with_genres=35&language=pt-BR&api_key=${process.env.REACT_APP_KEY_THEMOVIEDB}`
      )
    },
    {
      slug: 'horror',
      title: 'Terror',
      items: await basicFetch(
        `/discover/movie?with_genres=27&language=pt-BR&api_key=${process.env.REACT_APP_KEY_THEMOVIEDB}`
      )
    },
    {
      slug: 'romance',
      title: 'Romance',
      items: await basicFetch(
        `/discover/movie?with_genres=10749&language=pt-BR&api_key=${process.env.REACT_APP_KEY_THEMOVIEDB}`
      )
    },
    {
      slug: 'documentary',
      title: 'Documentário',
      items: await basicFetch(
        `/discover/movie?with_genres=99&language=pt-BR&api_key=${process.env.REACT_APP_KEY_THEMOVIEDB}`
      )
    }
  ]
}

 const getMovieInfo =  async(movieId, type ) => {
  let info = {}

  if(movieId) {
    
    switch(type) {
      case 'movie':
        info = await basicFetch(
          `/movie/${movieId}?language=pt-BR&api_key=${process.env.REACT_APP_KEY_THEMOVIEDB}`
        );
      break;

      case 'tv':
        info = await basicFetch(
          `/tv/${movieId}?language=pt-BR&api_key=${process.env.REACT_APP_KEY_THEMOVIEDB}`
        );
      break;

      default:
        info = null
      break

    }
  }
return info
  
}



const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`)
  const json = await req.json()

  return json
}
export {getHomeList, getMovieInfo}

