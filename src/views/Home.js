import { useState } from "react"
import MovieList from "../components/MovieList"

const Home = () => {
  const [title, setTitle] = useState("")
  const [year, setYear] = useState("")
  const [searchCode, setSearchCode] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchCode(`s="${title}"&y=${year}`)
    console.log(searchCode)
  }

  /*
  function generateYearRange() {
    var years = []
    years.push("")
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
      {searchCode && <MovieList searchCode={searchCode} />}
    </div>
  )
}

export default Home
