import "./Card.scss";
import divDesk from "../assets/pattern-divider-desktop.svg";
import iconDice from "../assets/icon-dice.svg";
import React from "react";

interface props {
  id?: number;
  advice?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Card: React.FC<props> = function (props) {
  console.log(props);
  const clickHandler = function () {
    if (props.onClick) props.onClick();
  };

  return (
    <div className="card">
      {props.id ? <h1>Advice #{props.id}</h1> : ""}
      {props.id ? <h2>{props.advice}</h2> : <h1>Loading...</h1>}
      {props.id ? (
        <>
          <div className="divider">
            <img src={divDesk} alt="divider" />
          </div>

          <button
            className="dice"
            onClick={clickHandler}
            disabled={props.disabled}
          >
            <img src={iconDice} alt="roll button" />
          </button>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Card;
