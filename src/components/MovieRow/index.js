import './MovieRow.css'

export default function MoviewRow ({movie, title}) {
  return (
    <div className='movieRow'>
      <h2>{title}</h2>
      <div className="movieRow--listarea">
        <div className="movieRow--list">
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