import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { useState } from 'react';
import './MovieRow.css'

export default function MoviewRow ({movie, title}) {
  const [scrollX, setScrollX] = useState(-400)

  function handleLeftArrow () {
    let x = scrollX + Math.round(window.innerWidth/2)
    if (x > 0) {
      x=0
    }
    setScrollX(x)
  }

  function handleRightArrow () {
    let x = scrollX - Math.round(window.innerWidth/2)
    const listw = movie.results.length * 150
    if ((window.innerWidth - listw) > x ) {
      x = (window.innerWidth - listw) - 60;
    }

    setScrollX(x)
  }

  return (
    <div className='movieRow'>
      <h2>{title}</h2>
      <div className='movieRow--left' onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{fontSize:50}}/>
      </div>
      <div className='movieRow--right' onClick={handleRightArrow}>
        <NavigateNextIcon style={{fontSize:50}}/>
      </div>

      <div className="movieRow--listarea">
        <div className="movieRow--list" style={{
          marginLeft: scrollX,
          width: movie.results.length * 150
        }}>
          {movie.results.length > 0 && movie.results.map((item, key) => (
            <div key={key} className='movieRow--item'>
              <img
                src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                alt={item.original_title}
                key={key}
              />
            </div>           
          ))}
        </div>
      </div>
    </div>
  )
}