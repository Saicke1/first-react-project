import React, { useState, useContext } from "react";
import "./ChangeProfile.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { authContext } from "../useContext/UserAuthContext";

const ChangeProfile = () => {
  const { update } = useContext(authContext);
  const [getFirstName, setGetFirstName] = useState("");
  const [getLastName, setGetLastName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  const change = () => {
    update(getFirstName, getLastName);
  };

  return (
    <div className="changeContainer">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2" controlId="FirstName">
          <Form.Label>
            Are you sure you want to<br></br> change your name?
          </Form.Label>
          <Form.Control
            type="firstname"
            placeholder="Update First name"
            /* onChange={getFirstName} */
            onChange={(event) => {
              setGetFirstName(event.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="LastName">
          <Form.Control
            type="lastname"
            placeholder="Update Last name"
            /* onChange={getLastName} */
            onChange={(event) => {
              setGetLastName(event.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="profilePic">
          <Form.Label>
            If I'm you, I would keep<br></br> the current profile picture from
            me.
            <br></br>
            Just sayin....
          </Form.Label>
          <Form.Control
            type="firstname"
            placeholder="This is under construction work"
          />
        </Form.Group>

        <Link to="/profile">
          <Button variant="primary" type="submit" onClick={change}>
            Update Account
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default ChangeProfile;
