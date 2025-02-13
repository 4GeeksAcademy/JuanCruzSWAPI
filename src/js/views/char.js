import { useParams } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const Char = () => {
  const params = useParams();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getPerson(params.id);
  }, [params.id]);

  const person = store.person;

  if (!person || !person.properties) {
    return <p style={{ color: "orange" }}>Loading...</p>; // Evita errores de acceso a undefined
  }

  return (
    <div style={{ color: "orange" }}>
      <div className="card mb-3 col-5">
        <img
          src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/${params.id}.jpg`}
          className="card-img-top"
          alt={person.properties.name}
        />

        <h2>{person.properties.name}</h2>
        <ul>
          <li>
            <strong>Height:</strong> {person.properties.height} cm
          </li>
          <li>
            <strong>Mass:</strong> {person.properties.mass} kg
          </li>
          <li>
            <strong>Hair Color:</strong> {person.properties.hair_color}
          </li>
          <li>
            <strong>Skin Color:</strong> {person.properties.skin_color}
          </li>
          <li>
            <strong>Eye Color:</strong> {person.properties.eye_color}
          </li>
          <li>
            <strong>Birth Year:</strong> {person.properties.birth_year}
          </li>
          <li>
            <strong>Gender:</strong> {person.properties.gender}
          </li>
          <li>
            <strong>Description:</strong> {person.description}
          </li>
        </ul>
      </div>
    </div>
  );
};