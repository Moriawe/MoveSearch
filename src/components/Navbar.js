import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar flex-box">
      <Link to="/">
        <h1>Movie Search</h1>
      </Link>
      <div className="links">
        <Link to="/about">About</Link>
      </div>
    </nav>
  )
}

export default Navbar
