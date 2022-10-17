import React, { useContext } from "react";
import "./DeletingUser.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { authContext } from "../useContext/UserAuthContext";

const DeletingUser = () => {
  const { eraseUser } = useContext(authContext);

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
      <Link to="/home">
        <Button style={{ backgroundColor: "#bd022c" }} onClick={eraseUser}>
          Please delete my Account
        </Button>
      </Link>
    </div>
  );
};

export default DeletingUser;
