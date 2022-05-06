import React from "react";
import "./card.css"
function Card({ name, image ,number,year, s}) {
  return (
    <div className="card">
      
      <img src={image} alt="logo" />
      <h4 className="text-color"> {name} #{number}</h4>
      <h5>launch year : <span>{year}</span></h5>
    </div>
  );
}

export default Card;
