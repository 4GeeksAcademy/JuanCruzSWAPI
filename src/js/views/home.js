import React, { useContext, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getPeople();
  }, []);
  console.log(store.people);
  return (
    <div>
      {store.people.map((character) => {
        return (
          <div
            className="card bg-dark"
            key={character.uid}
            style={{ width: "12rem" }}
          >
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{character.name}</h5>
              <ul className="cardlist">
                <li>Raza:</li>
                <li>Fuerza:</li>
                <li>Afiliacion:</li>
              </ul>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        );
      })}

      {store.planets.map((planet) => {
        return (
          <div
            className="card bg-dark"
            key={planet.uid}
            style={{ width: "12rem" }}
          >
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${planet.uid}.jpg`}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{planet.name}</h5>
              <ul className="cardlist"></ul>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};
