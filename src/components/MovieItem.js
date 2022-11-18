const MovieItem = ({ movie }) => {
  return (
    <div className="movie-link">
      <div className="poster">
        <img src={movie.poster} alt={movie.name} />
      </div>
      <div className="movieinfo">
        <h3>{movie.name}</h3>
        <p>{movie.year}</p>
      </div>
    </div>
  )
}

export default MovieItem
