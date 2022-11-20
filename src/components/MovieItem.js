import { Link } from "react-router-dom"

const MovieItem = ({ movie }) => {
  return (
    <div className="movie-link">
      <Link to={`/movie/${movie.imdbID}`}>
        <div className="poster">
          <img src={movie.Poster} alt={movie.Title} />
        </div>
        <div className="movie-info">
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
        </div>
      </Link>
    </div>
  )
}

export default MovieItem
