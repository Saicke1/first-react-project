import React, { useContext } from "react";
import "./DeletingUser.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { authContext } from "../useContext/UserAuthContext";
import { favContext } from "../useContext/FavoriteContext";

const DeletingUser = () => {
  const { eraseUser } = useContext(authContext);
  const { removeAllFavorites } = useContext(favContext);
  const { user } = useContext(authContext);
  const userID = user.uid;

  const removeEverything = async () => {
    const success = await removeAllFavorites(userID);
    if (success) {
      /* eraseUser(); */
      console.log("All favorites are removed!");
    } else {
      console.log("Favorites haven't been removed or went false!");
    }
  };

  return (
    <div className="deleteContainer">
      <h1>"You can't be serious!"</h1>
      <img
        className="imageCartmanSize"
        src="./images/cartmanAngry.webp"
        alt="CartmanAngry"
      />
      <h5>
        "If you delete yourself now, you will never get access to this page
        again! Even worse, you will kill Kenny!"
      </h5>
      <Link to="/profile">
        <Button style={{ backgroundColor: "#0FA4EE" }}>
          Okay, bring me back.
        </Button>
      </Link>
      <Link to="/deleted">
        <Button
          style={{ backgroundColor: "#bd022c" }}
          onClick={removeEverything}
        >
          Please delete my Account
        </Button>
      </Link>
    </div>
  );
};

export default DeletingUser;
