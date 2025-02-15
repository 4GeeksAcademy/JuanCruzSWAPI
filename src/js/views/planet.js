import { Link, useParams } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import planetImg from "../../img/planet-img.jpg"

export const Planet = () => {
  const params = useParams();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getPlanetInd(params.id);
  }, [params.id, actions]);

  const planeta = store.planet;
  console.log(planeta);

  return (
    <div style={{ color: "orange" }}>
      
      {planeta ? (
        <>
          <div className="card mb-3 col-5">
            <img
              //src={`https://starwars-visualguide.com/assets/img/planets/${planeta.uid}.jpg`}
              src={planetImg}
              className="card-img-top"
              alt="..."
            />

            <div className="card-body">
              <h5 className="card-title"></h5>
              <ul>
                <li>
                  <strong>Diameter: {planeta.properties.diameter}</strong> {} km
                </li>
                <li>
                  <strong>Population: {planeta.properties.population}</strong>{" "}
                  
                </li>
                <li>
                  <strong>Climate: {planeta.properties.climate}</strong> {}
                </li>
                <li>
                  <strong>Gravity: {planeta.properties.gravity}</strong> {}
                </li>
                <li>
                  <strong>Rotation Period: {planeta.properties.rotation_period}</strong> 
                </li>
                <li>
                  <strong>Terrain: {planeta.properties.terrain}</strong> {}
                </li>
                <li>
                  <strong>Description: {planeta.description}</strong>
                  {}
                </li>
              </ul>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p> // Mensaje de carga
      )}
    </div>
  );
};
