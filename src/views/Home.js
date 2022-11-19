import { useState } from "react"
import MovieItem from "../components/MovieItem"
import SearchButton from "../components/ui/SearchButton"

const Home = () => {
  const API_KEY = process.env.REACT_APP_API_KEY
  const url = "https://www.omdbapi.com/?"
  //'https://www.omdbapi.com/?s="woman"&y=2017&apikey=XXXXXX'

  const [movies, setMovies] = useState([])
  const [title, setTitle] = useState("")
  const [year, setYear] = useState("")

  const handleSubmit = (e) => {
    fetch(`${url}s="${title}"&y=${year}&apikey=${API_KEY}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data.Search)
        setMovies(data.Search)
      })
  }

  return (
    <div className="home">
      <h1>Welcome</h1>
      <div className="search-form">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Movie Title:</label>
            <input
              id={title}
              type="text"
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label>Year:</label>
            <input
              id={year}
              type="numbers"
              onChange={(e) => setYear(e.target.value)}
            />
            {/* Scrollable list of years!
            <select>
              <option>1900-2022</option>
            </select>
            */}
          </div>
          <SearchButton btnName="Search" />
        </form>
      </div>
      <div>
        {movies.map((movie) => (
          <MovieItem key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default Home
