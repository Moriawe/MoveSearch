import { Link } from "react-router-dom"

const MovieItem = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.imdbID}`}>
      <div id="movie-item" className="flex-box">
        <div id="big-poster">
          <img src={movie.Poster} alt={movie.Title} />
        </div>
        <div id="movie-title">
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
        </div>
      </div>
    </Link>
  )
}

export default MovieItem
