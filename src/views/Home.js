import { useState } from "react"
import MovieItem from "../components/MovieItem"

const Home = () => {
  const API_KEY = process.env.REACT_APP_API_KEY
  const url = "https://www.omdbapi.com/?"

  const [movies, setMovies] = useState([])
  const [title, setTitle] = useState("")
  const [year, setYear] = useState("")

  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch(`${url}s="${title}"&y=${year}&apikey=${API_KEY}`)
      .then((response) => {
        console.log(response)
        if (!response.ok) {
          throw Error("Could not fetch data")
        }
        return response.json()
      })
      .then((data) => {
        //console.log(data.Search)
        setMovies(data.Search)
        setIsPending(false)
        setError(null)
      })
      .catch((error) => {
        //console.log(error.message)
        setError(error.message)
        setIsPending(false)
      })
  }

  return (
    <div className="home">
      <h1>Welcome</h1>
      <p>
        Here you can search for movies by entering the whole or a part of the
        title and optionally the year it was released.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="search-form">
          <div className="search">
            <label>Title:</label>
            <input
              id={title}
              type="text"
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="search">
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
          {/* Make it more obvious disabled */}
          <button id="search-btn" disabled={!title}>
            Search
          </button>
        </div>
      </form>

      <div className="movie-list">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {movies &&
          movies.map((movie) => <MovieItem key={movie.imdbID} movie={movie} />)}
      </div>
    </div>
  )
}

export default Home
