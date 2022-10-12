import React, { /* useContext  */ useState } from "react";
/* import { userInfo } from "../useContext/UserContext"; */
import "./ProfileLogout.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase-config";

const ProfileLogout = () => {
  /*   const [users] = useContext(userInfo);
  console.log("users", users);

  function logoutUser() {
    users.map((user) => {
      if (user.state === true) {
        user.state = false;
        console.log("user", user);
      }
    });
  } */

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    console.log("user", user);
  });

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="profileContainer">
      {/*    {users.map((each) => {
        if (each.state === true) {
          return (
            <div key={each.userid}> */}
      <h1>You are logged in, douchebag!</h1>
      <h4>You are also known as:</h4>
      {user?.email}
      <p>{/* {each.firstname} {each.lastname} */}</p>
      <Link to="/login">
        <Button
          variant="primary"
          /* onClick={() => logoutUser()} */ onClick={logout}
        >
          Logout
        </Button>
      </Link>
      {/*  </div> 
               );
     }
       })}  */}
    </div>
  );
};

export default ProfileLogout;
