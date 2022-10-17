import React, { useContext, useEffect, useState } from "react";
import "./ProfileLogout.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { authContext } from "../useContext/UserAuthContext";
import { auth } from "../../firebase-config";

const ProfileLogout = () => {
  const { user, userName, logout } = useContext(authContext);
  /*   const [show, setShow] = useState(""); */

  console.log("The data of the user seen on the profile page.", user);

  const dummyName = "Douchebag";
  /*   useEffect(() => {
    if (user != null && user.displayName != null) {
      setShow(user.displayName);
    }
  }, [user]); */
  /* 
  const thisUser = auth.currentUser;

  if (thisUser !== null) {
    user.providerData.forEach((profile) => {
      console.log("Sign-in provider: " + profile.providerId);
      console.log("  Provider-specific UID: " + profile.uid);
      console.log("  Name: " + profile.displayName);
      console.log("  Email: " + profile.email);
      console.log("  Photo URL: " + profile.photoURL);
    });
  } */

  console.log("userName", userName);

  return (
    <div className="profileContainer">
      <h2>
        You are logged in,<br></br>
      </h2>
      <h2 className="nameBadgeStyle">{userName ? userName : dummyName}</h2>
      {userName !== "Douchebag" ? (
        <small style={{ marginTop: -15 }}>
          "You still will be an Douchebag for me."
        </small>
      ) : (
        <></>
      )}
      {/* <br></br>
      <h1>
        {user && user.email}!<br></br>
      </h1> */}
      <img
        className="imgCartmanSize"
        src="./images/cartmantalk.webp"
        alt="cartmantalk"
      />
      <h5>"Well done, I'm proud of you."</h5>

      <Link to="/change">
        <Button style={{ backgroundColor: "#ee590f" }}>Update Account</Button>
      </Link>
      <div className="logoutDeleteBtn">
        <Link to="/login" className="logoutDeleteButtonsPosition">
          <Button style={{ backgroundColor: "#0FA4EE" }} onClick={logout}>
            Logout
          </Button>
        </Link>
        <Link to="/erasing">
          <Button variant="primary" className="deleteBtn">
            Delete my Account
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProfileLogout;
