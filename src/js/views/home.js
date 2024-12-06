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

      {/* Modal */}
      
      {isModalOpen && modalContent && (
        
        <div
          className="modal fade show"
          style={{ display: "block" }}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {modalContent.name}
                </h5>
                <button
                  type="button"
                  className="close"
                  onClick={closeModal}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
              {/* RELLENAR CON DATOS PERSON*/}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeModal}
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Add Favoritos
                </button>
              </div>
            </div>
          </div>
        </div>
        
      )}
    </div>
  );
};
