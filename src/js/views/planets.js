import React, { useContext, useEffect } from "react";
import "../../styles/planets.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import planetImg from "../../img/planet-img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

export const Planetas = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getPlanet();
  }, []);

  return (
    <div className="allCards-wrapper">
      <div className="allCardsP">
        {store.planets.map((planet) => {
          const isFavorite = store.favorites.some(
            (fav) => fav.type === "planet" && fav.uid === planet.uid
          );

          return (
            <div
              className="card bg-dark position-relative"
              key={planet.uid}
              style={{ width: "13rem" }}
            >
              <img src={planetImg} className="card-img-top" alt={planet.name} />
              <div className="card-body">
                <h5 className="card-title">{planet.name}</h5>
                <ul className="cardlist"></ul>
                <Link to={`/planet/${planet.uid}`}>
                  <span className="navbar-brand mb-0 h1">Info</span>
                </Link>

               
                <FontAwesomeIcon
                  icon={isFavorite ? solidStar : regularStar}
                  className="favorite-icon"
                  onClick={() => actions.toggleFavorite("planet", planet)}
                  style={{ color: isFavorite ? "darkorange" : "white", cursor: "pointer" }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};