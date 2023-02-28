import "./Card.scss";
import divDesk from "../assets/pattern-divider-desktop.svg";
import iconDice from "../assets/icon-dice.svg";
import React from "react";

interface props {
  advice?: {
    slip: {
      id: number;
      advice: string;
    };
  };
  onClick?: () => void;
  disabled?: boolean;
  hideButton: boolean;
}

const Card: React.FC<props> = function (props) {
  const clickHandler = function () {
    props.onClick();
  };

  console.log(props.advice.slip);

  const contentJSX = props.advice ? (
    <h1>Loading...</h1>
  ) : (
    props.advice?.slip.entries((v) => {
      console.log(props.advice?.slip);
      return (
        <>
          <h1>Advice #{v.id}</h1>
          <h2>{v.advice}</h2>
        </>
      );
    })
  );

  return (
    <div className="card">
      {contentJSX}
      {!props.hideButton ? (
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
