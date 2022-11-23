import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./views/Home"
import MovieDetail from "./views/MovieDetail"
import About from "./views/About"

function App() {
  return (
    <Router>
      <div className="App flex-box">
        <div className="media-box">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/movie/:id" element={<MovieDetail />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
