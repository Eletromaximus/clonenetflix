// import './MoviewRow.css'

export default function MoviewRow ({movie, title}) {
  return (
    <div>
      <h2>{title}</h2>
      <div className="movieRow--listarea">
        {movie.results.length > 0 && movie.results.map((item, key) => (
          <img
            src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
            alt={item.original_title}
            key={key}
          />
        ))}
      </div>
    </div>
  )
}