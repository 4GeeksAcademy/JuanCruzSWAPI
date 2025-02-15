import React, { useContext } from "react";
import "../../styles/demo.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import planetImg from "../../img/planet-img.jpg";

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
                  src={item.type === "character"
                    ? `https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/${item.uid}.jpg`
                    : planetImg
                  }
                  className="card-img-top"
                  alt={item.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name || "Nombre no disponible"}</h5>
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