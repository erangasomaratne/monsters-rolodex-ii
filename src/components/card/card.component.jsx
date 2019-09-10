import React from "react";
import "./card.styles.css";

const Card = ({ monster }) => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/BE${monster.id}.png?set=set2&size=180x180`}
        alt={monster.username}
      />
      <h2>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  );
};

export default Card;
