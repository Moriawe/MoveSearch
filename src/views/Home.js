import { useState, useEffect } from "react"
//import useFetch from "../hooks/useFetch"
import MovieItem from "../components/MovieItem"

const Home = () => {
  const [title, setTitle] = useState("")
  const [year, setYear] = useState("")

  //**//  HANDLING THE API FETCH //**//
  const API_KEY = process.env.REACT_APP_API_KEY
  const url = "https://www.omdbapi.com/?"

  const [movies, setMovies] = useState([])
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  //const [searchCode, setSearchCode] = useState("")
  //const { data: movies, isPending, error } = useFetch(searchCode)

  const handleSubmit = (e) => {
    e.preventDefault()
    //setSearchCode(`s="${title}"&y=${year}`)
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

  useEffect(() => {
    const data = window.localStorage.getItem("my_movies")
    if (data !== null) setMovies(JSON.parse(data))
    console.log(data)
  }, [])

  useEffect(() => {
    window.localStorage.setItem("my_movies", JSON.stringify(movies))
  }, [movies])

  /*
  function generateYearRange() {
    var years = []

    for (var i = 2022; i >= 1895; i--) {
      years.push(i)
    }
    return years
  }

  var yearRange = generateYearRange()
*/

  return (
    <div className="home">
      <p>
        Search by entering the title or part of it. If you want you can also add
        what year it was released.
      </p>
      <p>The result shows a maximum of 10 movies.</p>

      <form onSubmit={handleSubmit}>
        <div className="search-form flex-box">
          <div className="search">
            <label>Title:</label>
            <input
              type="text"
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="search">
            <label>Year:</label>
            <input
              id="year"
              type="text"
              onChange={(e) => setYear(e.target.value)}
            />
            {/*
            <select id={year} onChange={(e) => setYear(e.target.value)}>
              {yearRange.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select> */}
          </div>
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
