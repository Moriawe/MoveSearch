import { useState, useEffect } from "react"
import useFetch from "../hooks/useFetch"
import MovieItem from "./MovieItem"

const MovieList = ({ searchCode }) => {
  const { data, isPending, error } = useFetch(searchCode)
  const [movies, setMovies] = useState([])

  useEffect(() => {
    setMovies(data.Search)
  }, [searchCode, data.Search])

  return (
    <div className="movie-list flex-box">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {movies &&
        movies.map((movie) => <MovieItem key={movie.imdbID} movie={movie} />)}
    </div>
  )
}

export default MovieList
