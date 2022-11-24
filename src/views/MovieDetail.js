import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"

const Movie = () => {
  const { id } = useParams()
  const searchString = `i=${id}`
  const { data: movie, isPending, error } = useFetch(searchString)

  return (
    <div className="flex-box">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {movie && (
        <div id="movie-box" className="flex-box">
          <div id="movie-poster">
            <img src={movie.Poster} alt={movie.Title} />
          </div>
          <div id="movie-info" className="flex-box">
            <h1>{movie.Title}</h1>
            <h2>{movie.Year}</h2>
            <div id="movie-details" className="flex-box">
              <div id="runtime" className="flex-box">
                <p className="info-header">Runtime: </p>
                <p>{movie.Runtime}</p>
              </div>
              <div id="genre" className="flex-box">
                <p className="info-header">Genre: </p>
                <p>{movie.Genre}</p>
              </div>
              <div id="plot" className="wrap flex-box">
                <p className="info-header">Plot: </p>
                <p>{movie.Plot}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Movie
