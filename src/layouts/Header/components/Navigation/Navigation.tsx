import { Link } from "react-router-dom";

import "./Navigation.css";

export const Navigation = () => {
  return (
    <nav className="navigation-container">
      <Link to="/" className="menu-items">
        Home
      </Link>
      <Link to="/fundraisers" className="menu-items">
        Fundraisers
      </Link>
      <Link to="/marketplace" className="menu-items">
        Marketplace
      </Link>
      <Link to="/tracer" className="menu-items">
        Audio/Video Tracer
      </Link>
      <Link to="/about" className="menu-items">
        About
      </Link>
    </nav>
  );
};
