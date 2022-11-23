import { useState } from "react"
import MovieItem from "../components/MovieItem"

const Home = () => {
  const [title, setTitle] = useState("")
  const [year, setYear] = useState("")

  //const { data: movies, isPending, error } = useFetch(title, year)

  const API_KEY = process.env.REACT_APP_API_KEY
  const url = "https://www.omdbapi.com/?"

  const [movies, setMovies] = useState([])
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const endpoint = `${url}s="${title}"&y=${year}&apikey=${API_KEY}`
    setIsPending(true)

    fetch(endpoint)
      .then((response) => {
        //console.log(response)
        if (!response.ok) {
          throw Error("We are sorry, it seems we can't fetch the data")
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
      <p>
        Here you can search for movies by entering the whole or a part of the
        title and optionally the year it was released.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="search-form flex-box">
          <div className="search">
            <label>Title:</label>
            <input
              type="text"
              required
              id={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="search">
            <label>Year:</label>
            <input
              type="numbers"
              id={year}
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

      <div className="movie-list flex-box">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {movies &&
          movies.map((movie) => <MovieItem key={movie.imdbID} movie={movie} />)}
      </div>
    </div>
  )
}

export default Home
