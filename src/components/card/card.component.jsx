import React from "react";
import "./card.styles.css";

function Card(props) {
  return (
    <div className="card-container" key={props.star.name}>
      <img
        alt="star war"
        src={`https://robohash.org/${props.id}?set=set2&size=180x180`}
      />
      <h1>{props.star.name}</h1>
    </div>
  );
}

export default Card;
