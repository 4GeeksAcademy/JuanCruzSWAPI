import React, { useContext, useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/planets.css";
import { Context } from "../store/appContext";

export const Planetas = () => {
  const { store, actions } = useContext(Context);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    actions.getPlanet();
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
              <a
                href="#"
                className="btn btn-primary"
                onClick={() => openModal(planet)}
              >
                Get Info
              </a>
            </div>
          </div>
        );
      })}

      {/* Modal */}
      {isModalOpen && (
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
                  {modalContent ? modalContent.name : ""}
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
                {/* Aquí puedes agregar más detalles sobre el personaje o planeta */}
                <p>{modalContent ? modalContent.description : ""}</p>
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
