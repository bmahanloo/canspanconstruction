import "./Navbar.css";

import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="nav">
      <Link to="/" className="nav-logo">
        Canspan Construction
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Past Projects</Link>
        </li>
        <li>
          <Link to="/aboutpage">About</Link>
        </li>
        <li className="nav-contact">
          <Link to="/contactpage">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
