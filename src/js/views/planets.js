import React, { useContext, useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/planets.css";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const Planetas = () => {
  const { store, actions } = useContext(Context);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    actions.getPlanet();
  }, []);

  

  return (
    <div className="allCards-wrapper">
    <div className="allCardsP">
      {store.planets.map((planet) => {
        return (
          <div
            className="card bg-dark"
            key={planet.uid}
            style={{ width: "13rem" }}
          >
            <img
              src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{planet.name}</h5>
              <ul className="cardlist"></ul>
              <Link to={`/planet/${planet.uid}`}>
                <span className="navbar-brand mb-0 h1">Info</span>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
    </div>);
};
