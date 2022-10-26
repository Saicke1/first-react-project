import React, { useContext, useState } from "react";
import "./Registration.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { authContext } from "../useContext/UserAuthContext";
import Alert from "react-bootstrap/Alert";

const Registration = () => {
  const { registerUser } = useContext(authContext);
  const navigate = useNavigate();
  const [registerMail, setRegisterMail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
  }

  const register = async (e) => {
    e.preventDefault();
    if (registerPassword.length > 5) {
      await registerUser(registerMail, registerPassword);
      navigate("/profile");
    } else {
      setError(true);
    }
  };

  return (
    <div className="registrationContainer">
      <h1>Become a new douchebag!</h1>

      {error && (
        <Alert variant="danger">Your password isn't long enough!</Alert>
      )}

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
          <Form.Text className="text-muted">
            Password needs at least 6 characters!
          </Form.Text>
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
            "Don't look at me like that, it's needed!"
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check, so we can spam you!" />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={register}>
          Create Account
        </Button>
      </Form>
    </div>
  );
};

export default Registration;
