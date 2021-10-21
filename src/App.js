import { useEffect, useState } from 'react';
import './App.css';
import  MovieRow from './components/MovieRow';
import {getHomeList, getMovieInfo} from './Tmdb'
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header'

function App() {
  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)
  const [blackHeader, setBlackHeader ] = useState(false)

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

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener)
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  })

  return (
    <div className="page">
      
      <Header black={blackHeader} />

      {featuredData &&
        <FeaturedMovie item={featuredData}
      />}

      <section className='lists'>
        {movieList?.map((item, key) => (
          <MovieRow movie={item.items} key={key} title={item.title} />
        ))}
      </section>

      <section>
        <footer>
          Feito com <span role='img' aria-label='coração'>💛</span> <br/>
          Desenvolvido por Max Milliano, inspirado no Projeto de <a target='_blank' rel='noreferrer' href='https://www.youtube.com/watch?v=tBweoUiMsDg&t=3066s'>Bonieky Lacerda</a> <br/>
          Direitos de imagem para Netflix
          Dados pegos do site Themoviedb.org
        </footer>

        {movieList.length === 0 && 
          <div className='loading'>
              <img
                src='https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif'
                alt='Carregando'
              >
            </img>
          </div>
        }
      </section>
    </div>
  );
}

export default App;
