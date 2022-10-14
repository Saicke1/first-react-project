import React, { useContext } from "react";
import "./ProfileLogout.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { authContext } from "../useContext/UserAuthContext";

const ProfileLogout = () => {
  const { user, logout } = useContext(authContext);

  /* console.log("user", user); */

  return (
    <div className="profileContainer">
      <h1>
        You are logged in,<br></br>
        {user?.displayName}!
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
      <Link to="/login">
        <Button variant="primary" onClick={logout}>
          Logout
        </Button>
      </Link>
    </div>
  );
};

export default ProfileLogout;
