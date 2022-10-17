import React, { useContext /* , useState, useEffect */ } from "react";
import "./BottomNavBar.css";
import { BsFillCaretLeftFill } from "react-icons/bs";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { BsFillChatRightDotsFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { BsJustifyLeft } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
/* import { userInfo } from "../useContext/UserContext"; */
import { authContext } from "../useContext/UserAuthContext";

const BottomNavBar = () => {
  const { isLoggedIn } = useContext(authContext);
  const navigate = useNavigate();
  /*const [leadLogin, setLeadLogin] = useState(false);
  const [users] = useContext(userInfo); */

  /*   {
    users &&
      users.map((each) => {
        if (each.state === true) {
          leadLogin = true;
        }
      });
  } */

  /* console.log("isLoggedIn", isLoggedIn); */

  return (
    <div className="navBar">
      {console.log("infinite Loop?")}
      <BsFillCaretLeftFill onClick={() => navigate(-1)} className="icons" />

      <Link to="/listEpisodes">
        <BsJustifyLeft className="icons" />
      </Link>

      <Link to="/home">
        <BsFillHouseDoorFill className="houseIcon" />
      </Link>

      {isLoggedIn ? (
        <Link to="/chat">
          <BsFillChatRightDotsFill className="icons" />
        </Link>
      ) : (
        <Link to="/login">
          <BsFillChatRightDotsFill className="icons" />
        </Link>
      )}

      {isLoggedIn ? (
        <Link to="/profile">
          <img
            className="imageKennyProfile"
            src="./images/kenny.png"
            alt="KennyProfile"
          />
        </Link>
      ) : (
        <Link to="/login">
          <BsFillPersonFill className="icons" />
        </Link>
      )}
    </div>
  );
};

export default BottomNavBar;
