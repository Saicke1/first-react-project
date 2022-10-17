import React, { useContext, useEffect, useState } from "react";
import "./ProfileLogout.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { authContext } from "../useContext/UserAuthContext";
import { auth } from "../../firebase-config";
import { updateCurrentUser } from "firebase/auth";

const ProfileLogout = () => {
  const { user, logout, eraseUser } = useContext(authContext);
  const [show, setShow] = useState(false);

  console.log("The data of the user seen on the profile page.", user);

  const dummyName = "Douchebag";
  /*   useEffect(() => {
    if (user?.displayName) {
      setShow(true);
    }
  }, [user]); */

  return (
    <div className="profileContainer">
      <h1>
        You are logged in,<br></br>
        {console.log("auth.currentUser", auth.currentUser)}
        {user ? user.displayName : dummyName}
        {/* {auth.currentUser === null ? dummyName : auth.currentUser.displayName} */}
        <br></br>
        {auth.currentUser && auth.currentUser.email}!
      </h1>
      <img
        className="imgCartmanSize"
        src="./images/cartmantalk.webp"
        alt="cartmantalk"
      />
      <h5>Well done, I'm proud of you.</h5>

      <Link to="/change">
        <Button variant="warning">Stop calling me that!</Button>
      </Link>
      <Link to="/login" className="logoutDeleteButtonsPosition">
        <Button variant="primary" onClick={logout}>
          Logout
        </Button>
      </Link>
      <Button variant="primary" onClick={eraseUser}>
        Delete my Account
      </Button>
    </div>
  );
};

export default ProfileLogout;
