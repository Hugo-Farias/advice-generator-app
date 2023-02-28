import "./Card.scss";
import divDesk from "../assets/pattern-divider-desktop.svg";
import iconDice from "../assets/icon-dice.svg";
import React from "react";

interface props {
  id: number;
  advice: string;
  onClick: () => void;
}

const Card: React.FC<props> = function (props) {
  const clickHandler = function () {
    props.onClick();
  };

  return (
    <div className="card">
      {props.id ? <h1>Advice #{props.id}</h1> : ""}
      <h2>{props.advice}</h2>
      <div className="divider">
        <img src={divDesk} alt="divider" />
      </div>
      <button className="dice" onClick={clickHandler}>
        <img src={iconDice} alt="roll button" />
      </button>
    </div>
  );
};

export default Card;
