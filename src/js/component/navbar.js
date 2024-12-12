import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-dark mb-3 custom-navbar">
      <Link to="/">
      <button className="btn btn-warning">
            Characters
          </button>
      </Link>
      <div className="ml-auto">
        <Link to="/demo">
          <button className="btn btn-warning">
            Check the Context in action
          </button>
        </Link>
      </div>
      <div className="ml-auto">
        <Link to="/planets">
          <button className="btn btn-warning">
            Planetas
          </button>
        </Link>
      </div>
    </nav>
  );
};
