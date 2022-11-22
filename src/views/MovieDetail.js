import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"

const Movie = () => {
  const { id } = useParams()

  const API_KEY = process.env.REACT_APP_API_KEY
  const url = "https://www.omdbapi.com/?"
  const endpoint = `${url}i=${id}&apikey=${API_KEY}`
  //console.log("Logging Endpoint from MovieDetail component: " + endpoint)
  const { data: movie, isPending, error } = useFetch(endpoint)

  return (
    <div className="movie">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {movie && (
        <div className="movie-details">
          <h1>
            {movie.Title} - {id}
          </h1>
          <div className="poster">
            <img src={movie.Poster} alt={movie.Title} />
          </div>
          <div className="details">
            <p>{movie.Year}</p>
            <p>{movie.Plot}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Movie
