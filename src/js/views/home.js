import React, { useContext, useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    actions.getPeople();
  }, []);

  
  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <div className="allCards-wrapper">
    <div className="allCards">
      {store.people.map((character) => {
        return (
          <div
            className="card bg-dark"
            key={character.uid}
            style={{ width: "13rem" }}
          >
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{character.name}</h5>
              <ul className="cardlist"></ul>
              <Link to={`/character/${character.uid}`}>
        <span className="navbar-brand mb-0 h1">Info</span>
      </Link>
            </div>
          </div>
          
          );
      })}

      
      
    </div>
    </div>);

};
