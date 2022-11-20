import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Movie App</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/information">Information</Link>
      </div>
    </nav>
  )
}

export default Navbar
