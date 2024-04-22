import React from "react";
import heart from "../images/heart.png";
import like from "../images/like.png";
import "../style.css";
import SupplierProps from "./SupplierProps";

const FruitProps = (props) => {
  return (
    <div className="fruit-card">
      <h2>New Post</h2>
      <img src={props.fruit} alt="fruit" className="custom-img" />
      <div className="icons">
        <img src={heart} alt="heart" className="custom-img-icon" />
        <span>{props.heart}</span>
      </div>
      <div className="icons">
        <img src={like} alt="like" className="custom-img-icon" />
        <span>{props.word}</span>
      </div>
      <div className="icons">
          <p>{props.desc} |</p>
          <span>${props.price}</span>
      </div>
      <SupplierProps id={1} name={"日日好濃"} address="abc Road" tel="66666777" />
    </div>
  );
};

export default FruitProps;
