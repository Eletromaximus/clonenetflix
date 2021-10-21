import { useEffect, useState } from 'react';
import './App.css';
import  MovieRow from './components/MovieRow';
import {getHomeList, getMovieInfo} from './Tmdb'
import FeaturedMovie from './components/FeaturedMovie';

function App() {
  const [movieList, setMovieList] = useState()
  const [featuredData, setFeaturedData] = useState(null)

  const loadAll = async () => {
    const list = await getHomeList()
    setMovieList(list)

    const originals = list.filter(i => i.slug === 'originals')
    const randomChosen = Math.floor(
      Math.random()*(originals[0].items.results.length -1)
    )
    const chosen = originals[0].items.results[randomChosen]

    const chosenInfo = await getMovieInfo(chosen.id, 'tv')

    setFeaturedData(chosenInfo)
  }

  useEffect(() => {

    loadAll()
  }, [])

  return (
    <div className="page">
      
      {featuredData &&
        <FeaturedMovie item={featuredData}
      />}

      <section className='lists'>
        {movieList?.map((item, key) => (
          <MovieRow movie={item.items} key={key} title={item.title} />
        ))}
      </section>
    </div>
  );
}

export default App;
