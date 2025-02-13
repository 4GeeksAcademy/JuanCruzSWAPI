import React, { useContext, useEffect, useState } from "react";
import "../../styles/planets.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import planetImg from "../../img/planet-img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

export const Planetas = () => {
  const { store, actions } = useContext(Context);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    actions.getPlanet();
  }, []);

  const toggleFavorite = (planet) => {
    if (favorites.includes(planet.uid)) {
      setFavorites(favorites.filter((fav) => fav !== planet.uid));
    } else {
      setFavorites([...favorites, planet.uid]);
    }
  };

  return (
    <div className="allCards-wrapper">
      <div className="allCardsP">
        {store.planets.map((planet) => {
          const isFavorite = favorites.includes(planet.uid);

          return (
            <div
              className="card bg-dark position-relative"
              key={planet.uid}
              style={{ width: "13rem" }}
            >
              <img src={planetImg} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{planet.name}</h5>
                <ul className="cardlist"></ul>
                <Link to={`/planet/${planet.uid}`}>
                  <span className="navbar-brand mb-0 h1">Info</span>
                </Link>

                {/* Icono de favorito en la esquina inferior derecha */}
                <button
                  className="btn position-absolute bottom-0 end-0 m-2"
                  onClick={() => toggleFavorite(planet)}
                >
                  <FontAwesomeIcon
                    icon={isFavorite ? solidStar : regularStar}
                    className="text-warning"
                  />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};