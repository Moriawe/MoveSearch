import { Link } from "react-router-dom"

const MovieItem = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.imdbID}`}>
      <div className="movie-item flex-box">
        <div className="poster">
          <img src={movie.Poster} alt={movie.Title} />
        </div>
        <div className="movie-title">
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
        </div>
      </div>
    </Link>
  )
}

export default MovieItem
