import React from "react";
import "./DeletedUser.css";
import myGif from "../../shocked.gif";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import audio from "./killedKenny.mp3";

const DeletedUser = () => {
  return (
    <div className="deletedContainer">
      <h1>You are deleted!</h1>
      <h5>"OMG! You killed Kenny!"</h5>
      <h5>"You Bastards!"</h5>
      <img src={myGif} alt="shocked" className="gifSize" />
      <Link to="/home">
        <Button style={{ backgroundColor: "#0FA4EE" }}>
          Go back to Home Page
        </Button>
      </Link>
      <audio autoPlay src={audio}></audio>
    </div>
  );
};

export default DeletedUser;
