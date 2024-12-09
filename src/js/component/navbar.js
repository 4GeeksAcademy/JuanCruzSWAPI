import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-dark mb-3 custom-navbar">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">Inicio</span>
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
