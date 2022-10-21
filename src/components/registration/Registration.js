import React, { useContext, useState } from "react";
import "./Registration.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { authContext } from "../useContext/UserAuthContext";

const Registration = () => {
  const { registerUser } = useContext(authContext);

  const [registerMail, setRegisterMail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  const register = () => {
    registerUser(registerMail, registerPassword);
  };

  return (
    <div className="registrationContainer">
      <h1>Become a new douchebag!</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="mail"
            placeholder="Enter email"
            onChange={(event) => {
              setRegisterMail(event.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="passwordRepeat">
          <Form.Control
            type="repeatPassword"
            placeholder="Repeat Password"
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
          />
          <Form.Text className="text-muted">
            Don't look at me like that, it's needed!
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check, so we can spam you!" />
        </Form.Group>
        <Link to="/profile">
          <Button variant="primary" type="submit" onClick={register}>
            Create Account
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default Registration;
