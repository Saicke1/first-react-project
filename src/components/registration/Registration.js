import React, { useContext, useState } from "react";
import "./Registration.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
/* import { userInfo } from "../useContext/UserContext"; */
import { Link } from "react-router-dom";
/* import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase-config"; */
import { authContext } from "../useContext/UserAuthContext";

const Registration = () => {
  /* const [users, setUsers] = useContext(userInfo);
  let firstName;
  let lastName;
  let email;
  let finalPassword;

  function handleSubmit(e) {
    e.preventDefault();
  }

  const getFirstName = (event) => {
    firstName = event.target.value;
    return firstName;
  };

  const getLastName = (event) => {
    lastName = event.target.value;
    return lastName;
  };

  const getMail = (event) => {
    email = event.target.value;
    return email;
  };

  const getPassword = (event) => {
    finalPassword = event.target.value;
    return finalPassword;
  };

  const addUser = () => {
    setUsers([
      ...users,
      {
        userid: users.length + 1,
        firstname: firstName,
        lastname: lastName,
        mail: email,
        password: finalPassword,
        state: true,
      },
    ]);
    console.log("users", users);
  };
 */

  const { registerUser } = useContext(authContext);

  const [registerMail, setRegisterMail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  /*   const [getFirstName, setGetFirstName] = useState("");
  const [getLastName, setGetLastName] = useState(""); */

  function handleSubmit(e) {
    e.preventDefault();
  }

  const register = () => {
    registerUser(
      registerMail,
      registerPassword /* , getFirstName, getLastName */
    );
  };

  /* const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerMail,
        registerPassword
      );
      console.log(user);
      // auth.currentUser.displayName = getFirstName + " " + getLastName; <- das ist auch möglich 
      await updateProfile(auth.currentUser, {
        displayName: getFirstName + " " + getLastName,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
 */
  return (
    <div className="registrationContainer">
      <h1>Become a new douchebag!</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="mail"
            placeholder="Enter email"
            /* onChange={getMail} */
            onChange={(event) => {
              setRegisterMail(event.target.value);
            }}
          />
        </Form.Group>

        {/* <Form.Group className="mb-2" controlId="FirstName">
          <Form.Label>First and Last Name</Form.Label>
          <Form.Control
            type="firstname"
            placeholder="First name"
            onChange={(event) => {
              setGetFirstName(event.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="LastName">
          <Form.Control
            type="lastname"
            placeholder="Last name"
            onChange={(event) => {
              setGetLastName(event.target.value);
            }}
          />
        </Form.Group> */}

        <Form.Group className="mb-2" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="passwordRepeat">
          <Form.Control
            type="repeatPassword"
            placeholder="Repeat Password"
            /* onChange={getPassword} */
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
          <Button
            variant="primary"
            type="submit"
            /* onClick={addUser} */ onClick={register}
          >
            Create Account
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default Registration;
