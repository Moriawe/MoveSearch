import { useParams } from "react-router-dom"

const Movie = (movie) => {
  const { id } = useParams()

  return (
    <div className="movie">
      <h1>
        {movie.Title} - {id}
      </h1>
      <div className="poster">
        <img src={movie.Poster} alt={movie.Title} />
      </div>
      <div className="details">
        <p>{movie.Year}</p>
        <p></p>
      </div>
    </div>
  )
}

export default Movie
