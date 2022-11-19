const MovieItem = ({ movie }) => {
  return (
    <div className="movie-link">
      <div className="poster">
        <img src={movie.Poster} alt={movie.Title} />
      </div>
      <div className="movieinfo">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
    </div>
  )
}

export default MovieItem
