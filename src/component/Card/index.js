import React from "react";
import "./index.css";

const CardComponent = ({ user }) => {
  return (
    <div className="card-container">
      <div className="card-container__top">
        <img src={user.imageUrl} alt=""  />
      </div>

      <div className="card-container__bottom">
        <h2>{user.title}</h2>
        <p>{user.desc}</p>
      </div>
    </div>
  )
}
export default CardComponent
