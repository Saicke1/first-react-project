import React, { useContext } from "react";
import "./DeletingUser.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { authContext } from "../useContext/UserAuthContext";

const DeletingUser = () => {
  const { eraseUser } = useContext(authContext);

  return (
    <div className="deleteContainer">
      Are you sure you want to logout?
      <Link to="/home">
        <Button variant="primary" onClick={eraseUser}>
          Yes, I'm sure.
        </Button>
      </Link>
    </div>
  );
};

export default DeletingUser;
