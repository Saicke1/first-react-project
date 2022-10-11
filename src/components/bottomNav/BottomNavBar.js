import React, { useContext } from "react";
import "./BottomNavBar.css";
import { BsFillCaretLeftFill } from "react-icons/bs";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { BsFillChatRightDotsFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { userInfo } from "../useContext/UserContext";

const BottomNavBar = () => {
  const navigate = useNavigate();
  const [users] = useContext(userInfo);
  let leadLogin = false;

  {
    users &&
      users.map((each) => {
        if (each.state === true) {
          leadLogin = true;
        }
      });
  }

  return (
    <div className="navBar">
      <BsFillCaretLeftFill onClick={() => navigate(-1)} className="icons" />
      <Link to="/home">
        <BsFillHouseDoorFill className="icons" />
      </Link>

      {leadLogin ? (
        <Link to="/chat">
          <BsFillChatRightDotsFill className="icons" />
        </Link>
      ) : (
        <Link to="/login">
          <BsFillChatRightDotsFill className="icons" />
        </Link>
      )}

      {leadLogin ? (
        <Link to="/profile">
          <img
            className="imageKennyProfile"
            src="./images/kenny.png"
            alt="KennyProfile"
          />
        </Link>
      ) : (
        <Link to="/login">
          <img
            className="imageKennyProfile"
            src="./images/kenny.png"
            alt="KennyProfile"
          />
        </Link>
      )}
    </div>
  );
};

export default BottomNavBar;
