import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./views/Home"
import MovieDetail from "./views/MovieDetail"
import Information from "./views/Information"

function App() {
  return (
    <Router>
      <div className="App flex-box">
        <div className="media-box">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/information" element={<Information />} />
              <Route path="/movie/:id" element={<MovieDetail />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App

/*
Cinema
Projector
mohamed_hassan - Pixabay

Image by <a href="https://pixabay.com/users/pixaline-1569622/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1174228">Sabine Kroschel</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1174228">Pixabay</a>

Image by <a href="https://pixabay.com/users/geralt-9301/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4023278">Gerd Altmann</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4023278">Pixabay</a>
*/
