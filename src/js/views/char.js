import { Link, useParams } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

export const Char = () => {
  const params = useParams();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getPerson(params.id);
  }, [params.id, actions]);

  const person = store.person;

  return (
    <div style={{color: "orange"}}>
      {/* Muestra el nombre del personaje */}
      {person ? (
        <>
          <h2>{person.properties.name}</h2>
          <ul>
            <li><strong>Height:</strong> {person.properties.height} cm</li>
            <li><strong>Mass:</strong> {person.properties.mass} kg</li>
            <li><strong>Hair Color:</strong> {person.properties.hair_color}</li>
            <li><strong>Skin Color:</strong> {person.properties.skin_color}</li>
            <li><strong>Eye Color:</strong> {person.properties.eye_color}</li>
            <li><strong>Birth Year:</strong> {person.properties.birth_year}</li>
            <li><strong>Gender:</strong> {person.properties.gender}</li>
            <li><strong>Description:</strong>{person.description}</li>
          </ul>
        </>
      ) : (
        <p>Loading...</p>  // Muestra un mensaje mientras se cargan los datos
      )}
    </div>
  );
};
