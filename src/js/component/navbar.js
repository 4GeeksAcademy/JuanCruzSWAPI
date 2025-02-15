import React, { useContext, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store } = useContext(Context);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const searchContainerRef = useRef(null);

  
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    if (value.trim() === "") {
      setFilteredResults([]);
      return;
    }

    const results = [
      ...store.people.map((person) => ({ ...person, type: "character" })), 
      ...store.planets.map((planet) => ({ ...planet, type: "planet" })) 
    ].filter((item) => item.name.toLowerCase().includes(value));

    setFilteredResults(results);
  };

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setFilteredResults([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar navbar-light bg-dark mb-3 custom-navbar">
      <Link to="/">
        <button className="btn btn-warning">Personajes</button>
      </Link>
      <div className="ml-auto">
        <Link to="/planets">
          <button className="btn btn-warning">Planetas</button>
        </Link>
      </div>
      <div className="ml-auto">
        <Link to="/demo">
          <button className="btn btn-warning">Favoritos</button>
        </Link>
      </div>

      
      <div className="search-container position-relative" ref={searchContainerRef}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Buscar..."
          aria-label="Buscar"
          value={searchTerm}
          onChange={handleSearch}
        />

        
        {filteredResults.length > 0 && (
          <ul className="autocomplete-results list-group position-absolute w-100">
            {filteredResults.map((item, index) => (
              <Link
                to={`/${item.type}/${item.uid}`}
                key={index}
                className="list-group-item list-group-item-action"
                onClick={() => setSearchTerm("")} 
              >
                {item.name} {item.type === "character" ? "🧑‍🚀" : "🪐"}
              </Link>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};