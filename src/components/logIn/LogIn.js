import React, { useContext, useState } from "react";
import "./LogIn.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { authContext } from "../useContext/UserAuthContext";
/* import { userInfo } from "../useContext/UserContext"; 
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config"; */

const LogIn = () => {
  /* const [users, setUsers] = useContext(userInfo);
  let mail;
  let password;

  function handleSubmit(e) {
    e.preventDefault();
  }

  const getMail = (event) => {
    console.log("get mail", event.target.value);
    mail = event.target.value;
    return mail;
  };

  const getPassword = (event) => {
    console.log("get password", event.target.value);
    password = event.target.value;
    return password;
  };

  const getValues = () => {
    console.log("mail", mail);
    console.log("password", password);
    users.map((each) => {
      if (mail === each.mail && password === each.password) {
        each.state = true;
        console.log("each", each);
      }
    });
  }; */

  const { signin } = useContext(authContext);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  const login = () => {
    signin(loginEmail, loginPassword);
  };

  /* const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  }; */

  return (
    <div className="loginContainer">
      <h1>Log in already, douchebag!</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            /* onChange={getMail} */
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            /* onChange={getPassword} */
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />
          <Form.Text className="text-muted">
            Never share your password, douchebag!
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Check to proof, that you aren't an enemy!"
          />
        </Form.Group>
        <Link to="/profile">
          <Button
            variant="primary"
            type="submit"
            /* onClick={getValues} */ onClick={login}
          >
            Log in
          </Button>
        </Link>
      </Form>

      <h6>
        No Account yet?<br></br>
        Then register to become a new douchebag!
      </h6>

      <Link to="/registration">
        <Button variant="primary">Registration</Button>
      </Link>
    </div>
  );
};

export default LogIn;
