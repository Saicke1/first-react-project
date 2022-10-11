import React, { useContext } from "react";
import "./PopUp.css";
import Button from "react-bootstrap/Button";
import audio from "./respect.mp3";
import { togglePopup } from "../useContext/PopUpContext";

const PopUp = () => {
  const [popUp, setPopUp] = useContext(togglePopup);

  console.log("setPopUp", setPopUp);

  function changeStatePopup() {
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
            changeStatePopup();
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
