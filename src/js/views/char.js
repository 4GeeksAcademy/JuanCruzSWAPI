import { Link, useParams } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

export const Char = () => {
  const params = useParams();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getPerson(params.id);
  }, []);

  console.log(params.result);

  return (
    <div>
      {store.params.map((char) => {
        <p style={{ color: "orange" }}>result: {char.result}</p>;
      })}
      <p style={{ color: "orange" }}>Character : {params.id}</p>
    </div>
  );
};
