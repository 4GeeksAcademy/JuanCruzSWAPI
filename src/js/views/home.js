import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getPeople();
  }, []);

  return (
    <div className="allCards-wrapper">
      <div className="allCards">
        {store.people.map((character) => {
          const isFavorite = store.favorites.some((fav) => fav.uid === character.uid);

          return (
            <div className="card bg-dark position-relative" key={character.uid} style={{ width: "13rem" }}>
              <img
                src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/${character.uid}.jpg`}
                className="card-img-top"
                alt={character.name}
              />
              <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <ul className="cardlist"></ul>
                <Link to={`/character/${character.uid}`}>
                  <span className="navbar-brand mb-0 h1">Info</span>
                </Link>
              </div>

              {/* Botón para agregar o quitar de favoritos */}
              <FontAwesomeIcon
                icon={isFavorite ? solidStar : regularStar}
                className="favorite-icon"
                onClick={() => actions.toggleFavorite({ uid: character.uid, name: character.name, type: "character" })}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};