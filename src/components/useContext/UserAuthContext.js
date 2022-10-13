import React, { createContext, useState } from "react";
import { auth } from "../../firebase-config";
import {
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { async } from "@firebase/util";

export const authContext = createContext();

const UserAuthContext = (props) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const registerUser = async (email, password, firstname, lastname) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("userCredential", userCredential);
        // Signed in
        const user = userCredential.user;
        console.log("user", user);
        setUser(user);
        setIsLoggedIn(true);
        // ...
      })
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: firstname + " " + lastname,
        });
        console.log("auth.currentUser", auth.currentUser);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error.message", errorMessage);
        // ..
      });
  };

  const signin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        setIsLoggedIn(true);
        console.log("Login was successful.");
        console.log("This is the userCredential.user put in user", user);
      })
      .catch((error) => {
        /* const errorCode = error.code; */
        const errorMessage = error.message;
        console.log("errorMessage", errorMessage);
      });
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    signOut(auth)
      .then(() => {
        console.log("Logout was successful.");
      })
      .catch((error) => {
        console.log("Logout was not successful.");
        console.log("error.message", error.message);
      });
  };

  return (
    <div>
      <authContext.Provider
        value={{ user, isLoggedIn, registerUser, signin, logout }}
      >
        {props.children}
      </authContext.Provider>
    </div>
  );
};

export default UserAuthContext;
