import React from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

export const CardList = (props) => (
  <div className="card-list">
    {props.stars.map((star, index) => (
      <Card key={index} id={index} star={star} />
    ))}
  </div>
);
