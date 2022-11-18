const MovieLink = () => {
  const movie = {
    name: "Black Panther - Long live the king",
    poster: "https://img.fruugo.com/product/5/37/131338375_max.jpg",
    year: 2017,
    recension:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint a enim, perferendis tenetur labore debitis inventore veritatis perspiciatis molestiae, rem laborum quam doloribus quo nulla. Nemo eligendi quasi earum eius!",
  }

  return (
    <div className="movielink">
      <div className="poster">
        <img src={movie.poster} alt={movie.name} />
      </div>
      <div className="movieinfo">
        <h3>{movie.name}</h3>
        <p>{movie.year}</p>
        {/* <p>{movie.recension}</p> */}
      </div>
    </div>
  )
}

export default MovieLink
