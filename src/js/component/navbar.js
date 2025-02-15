import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store } = useContext(Context);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    if (value.trim() === "") {
      setFilteredResults([]);
      return;
    }

    const results = [...store.people, ...store.planets].filter((item) =>
      item.name.toLowerCase().includes(value)
    );

    setFilteredResults(results);
  };

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

      {/* Barra de búsqueda con autocompletar */}
      <div className="search-container position-relative">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Buscar..."
          aria-label="Buscar"
          value={searchTerm}
          onChange={handleSearch}
        />

        {/* Resultados de autocompletar */}
        {filteredResults.length > 0 && (
          <ul className="autocomplete-results list-group position-absolute">
            {filteredResults.map((item, index) => (
              <Link
                to={item.uid ? `/character/${item.uid}` : `/planet/${item.uid}`}
                key={index}
                className="list-group-item list-group-item-action"
                onClick={() => setSearchTerm("")} 
              >
                {item.name}
              </Link>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};