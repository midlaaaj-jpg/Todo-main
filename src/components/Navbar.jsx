import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    
    <nav className="navbar">

      <h2 className="logo">TODO</h2>

      <div className="links">

        <Link to="/welcome">
        <button className="home">🏠</button></Link>

        <Link to="/login">
          <button className="login-btn">
            Login
          </button>
        </Link>

        <Link to="/signup">
          <button className="signup-btn">
            Signup
          </button>
        </Link>

        <Link to="/Logout">
        <button className="out-btn">
          ⏻
        </button>
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;