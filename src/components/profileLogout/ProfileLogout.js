import React, { useContext } from "react";
import { userInfo } from "../useContext/UserContext";
import "./ProfileLogout.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ProfileLogout = () => {
  const [users] = useContext(userInfo);
  console.log("users", users);

  function logoutUser() {
    users.map((user) => {
      if (user.state === true) {
        user.state = false;
        console.log("user", user);
      }
    });
  }

  return (
    <div className="profileContainer">
      {users.map((each) => {
        if (each.state === true) {
          return (
            <div key={each.userid}>
              <h1>You are logged in, douchebag!</h1>
              <h4>You are also known as:</h4>
              <p>
                {each.firstname} {each.lastname}
              </p>
              <Link to="/login">
                <Button variant="primary" onClick={() => logoutUser()}>
                  Logout
                </Button>
              </Link>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ProfileLogout;
