import { useState } from "react"
import MovieItem from "../components/MovieItem"
import SearchButton from "../components/ui/SearchButton"

const Home = () => {
  const title = "Welcome"

  const [movies, setMovies] = useState([
    {
      id: 1,
      name: "Black Panther - Long live the king",
      poster: "https://img.fruugo.com/product/5/37/131338375_max.jpg",
      year: 2017,
      recension:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint a enim, perferendis tenetur labore debitis inventore veritatis perspiciatis molestiae, rem laborum quam doloribus quo nulla. Nemo eligendi quasi earum eius!",
    },
    {
      id: 2,
      name: "Avengers",
      poster: "https://img.fruugo.com/product/5/37/131338375_max.jpg",
      year: 2016,
      recension:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint a enim, perferendis tenetur labore debitis inventore veritatis perspiciatis molestiae, rem laborum quam doloribus quo nulla. Nemo eligendi quasi earum eius!",
    },
    {
      id: 3,
      name: "Team Awesome",
      poster: "https://img.fruugo.com/product/5/37/131338375_max.jpg",
      year: 2022,
      recension:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint a enim, perferendis tenetur labore debitis inventore veritatis perspiciatis molestiae, rem laborum quam doloribus quo nulla. Nemo eligendi quasi earum eius!",
    },
  ])

  return (
    <div className="home">
      <h1>{title}</h1>
      <SearchButton />
      <div>
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default Home
