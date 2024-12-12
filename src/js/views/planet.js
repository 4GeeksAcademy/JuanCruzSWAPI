import { Link, useParams } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

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
      {/* Muestra el nombre del planeta */}
      {planeta ? (
        <>
          <div className="card mb-3 col-5">
            <img
              src={`https://starwars-visualguide.com/assets/img/planets/${planeta.uid}.jpg`}
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
                  {} People
                </li>
                <li>
                  <strong>Hair Color:</strong> {}
                </li>
                <li>
                  <strong>Skin Color:</strong> {}
                </li>
                <li>
                  <strong>Eye Color:</strong> {}
                </li>
                <li>
                  <strong>Birth Year:</strong> {}
                </li>
                <li>
                  <strong>Gender:</strong> {}
                </li>
                <li>
                  <strong>Description:</strong>
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
        <p>Loading...</p> // Muestra un mensaje mientras se cargan los datos
      )}
    </div>
  );
};
