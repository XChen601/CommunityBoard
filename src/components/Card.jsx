import React from "react";

const Card = (props) => {
  return (
    <div className="Card">
      <img src={props.image} alt="restaurant-image" />
      <h2>{props.name}</h2>
      <h3>{props.type}</h3>
      <a href={props.site}>
        <button>Visit Website</button>
      </a>

    </div>
  )
}

export default Card