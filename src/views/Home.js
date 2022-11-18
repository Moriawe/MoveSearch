import { useState } from "react"
import MovieLink from "../components/MovieLink"
import SearchButton from "../components/ui/SearchButton"

const Home = () => {
  const title = "Welcome"

  const [movies, setMovies] = useState(null)

  return (
    <div className="home">
      <h1>{title}</h1>
      <SearchButton />
      <div>
        <MovieLink />
      </div>
    </div>
  )
}

export default Home
