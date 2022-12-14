import React, { useContext } from "react";
import "./ProfileLogout.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { authContext } from "../useContext/UserAuthContext";
import { BsBorderWidth } from "react-icons/bs";
import Accordion from "react-bootstrap/Accordion";

const ProfileLogout = () => {
  const { user, userName, logout } = useContext(authContext);

  console.log("The data of the user seen on the profile page.", user);

  const dummyName = "Douchebag";
  console.log("userName", userName);

  return (
    <div className="profileContainer">
      <div className="profilePicPosition">
        <img
          src="./images/ericCartman.png"
          alt="Avatar"
          className="profilePic"
        />
      </div>

      <Accordion defaultActiveKey="0" className="accordion">
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <BsBorderWidth className="optionBars" />
          </Accordion.Header>
          <Accordion.Body>
            <Link to="/change">
              <Button style={{ backgroundColor: "#ee590f" }}>
                Update Account
              </Button>
            </Link>
            <Link to="/favorites">
              <Button style={{ backgroundColor: "#0FA4EE" }}>
                Favoritelist
              </Button>
            </Link>
            <Link to="/erasing">
              <Button variant="primary" className="deleteBtn">
                Delete my Account
              </Button>
            </Link>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <h2 className="titlePosition">
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
      <img
        className="imgCartmanSize"
        src="./images/cartmantalk.webp"
        alt="cartmantalk"
      />
      <h5>"Well done, I'm proud of you."</h5>

      <div className="logoutDeleteBtn">
        <Link to="/login" className="logoutDeleteButtonsPosition">
          <Button style={{ backgroundColor: "#0FA4EE" }} onClick={logout}>
            Logout
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProfileLogout;
