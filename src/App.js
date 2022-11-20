import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./views/Home"
import Movie from "./views/Movie"
import Information from "./views/Information"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/information" element={<Information />} />
            <Route path="/movie/:id" element={<Movie />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
