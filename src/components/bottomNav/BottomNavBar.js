import React from "react";
import "./BottomNavBar.css";
import { BsFillCaretLeftFill } from "react-icons/bs";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { BsFillChatRightDotsFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const BottomNavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="navBar">
      <BsFillCaretLeftFill onClick={() => navigate(-1)} className="icons" />
      <Link to="/home">
        <BsFillHouseDoorFill className="icons" />
      </Link>

      <BsFillChatRightDotsFill className="icons" />

      <Link to="/login">
        <img
          className="imageKennyProfile"
          src="./images/kenny.png"
          alt="KennyProfile"
        />
      </Link>
    </div>
  );
};

export default BottomNavBar;
