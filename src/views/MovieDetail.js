import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"

const Movie = () => {
  const { id } = useParams()
  const searchString = `i=${id}`
  //console.log("Logging SearchString from MovieDetail component: " + searchString)
  const { data: movie, isPending, error } = useFetch(searchString)

  return (
    <div className="movie-page flex-box">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {movie && (
        <div className="wrap flex-box">
          <div className="movie-poster">
            <img src={movie.Poster} alt={movie.Title} />
          </div>
          <div className="movie-info flex-box">
            <h1>{movie.Title}</h1>
            <h2>{movie.Year}</h2>
            <div id="movie-details" className="wrap flex-box">
              <div id="runtime" className="flex-box">
                <p className="bold">Runtime: </p>
                <p>{movie.Runtime}</p>
              </div>
              <div id="genre" className="flex-box">
                <p className="bold">Genre: </p>
                <p>{movie.Genre}</p>
              </div>
              <div id="plot" className="flex-box">
                <p className="bold">Plot: </p>
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
