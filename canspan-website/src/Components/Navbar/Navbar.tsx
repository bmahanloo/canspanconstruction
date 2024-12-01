import "./Navbar.css";

import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const info =
    "North Vancouver, BC   *   (604) 805-6465   *   info@canspanconstruction.com";
  return (
    <div className="nav">
      <Link to="/" className="nav-logo">
        Canspan Construction
      </Link>
      <div>
        <span className="info">{info}</span>
        <div className="nav-options">
          <Link to="/">Home</Link>
          <Link to="/">Past Projects</Link>
          <Link to="/aboutpage">About</Link>
          <span className="nav-contact">
            <Link to="/contactpage">Contact</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
