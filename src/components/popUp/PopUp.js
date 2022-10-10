import React, { useContext } from "react";
import "./PopUp.css";
import Button from "react-bootstrap/Button";
import audio from "./respect.mp3";
import { storedStates } from "../useContext/UseContext";

const PopUp = () => {
  const { popping } = useContext(storedStates);
  const setPopUp = popping[1];

  function togglePopup() {
    setPopUp(false);
  }

  return (
    <div className="popUpCartman">
      <div className="popUpCartmanInner">
        <h1>Stop Douchebag!</h1>
        <img
          className="imageCartmanSize"
          src="./images/cartmanPolice.png"
          alt="Douchebag"
        />
        <h3>
          Here is nothing
          <br /> for you to see,
          <br /> so move your ass!
        </h3>
        <Button
          variant="primary"
          onClick={() => {
            togglePopup();
          }}
        >
          Move Ass
        </Button>
        <audio autoPlay src={audio}></audio>
      </div>
    </div>
  );
};

export default PopUp;
