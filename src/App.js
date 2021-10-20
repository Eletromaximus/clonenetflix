import { useEffect, useState } from 'react';
import './App.css';
import  MovieRow from './components/MovieRow';
import getHomeList from './Tmdb'

function App() {
  const [movieList, setMovieList] = useState()

  const loadAll = async () => {
    const list = await getHomeList()
    setMovieList(list)
  }

  useEffect(() => {

    loadAll()
  }, [])

  return (
    <div className="App">
      <section className='lists'>
        {movieList?.map((item, key) => (
          <MovieRow movie={item.items} key={key} title={item.title} />
        ))}
      </section>
    </div>
  );
}

export default App;
