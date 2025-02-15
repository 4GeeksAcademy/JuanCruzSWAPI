import React, { useContext } from "react";
import "../../styles/demo.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Demo = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="allCards-wrapper">
      <h1 className="text-center text-warning">⭐ Favoritos ⭐</h1>
      <div className="allCardsP">
        {store.favorites.length > 0 ? (
          store.favorites.map((item) => {
            return (
              <div className="card bg-dark" key={item.uid} style={{ width: "13rem" }}>
                <img
                  src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/${item.uid}.jpg`}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <ul className="cardlist"></ul>
                  <Link to={`/${item.type}/${item.uid}`}>
                    <span className="navbar-brand mb-0 h1">Info</span>
                  </Link>
                  <button className="fav-button" onClick={() => actions.toggleFavorite(item)}>
                    <FontAwesomeIcon icon={faTrash} className="text-warning" />
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-light">No tienes favoritos aún.</p>
        )}
      </div>
    </div>
  );
};