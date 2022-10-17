import React, { createContext, useState, useEffect } from "react";
import { auth } from "../../firebase-config";
import {
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  deleteUser,
} from "firebase/auth";

export const authContext = createContext();

const UserAuthContext = (props) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        /* console.log("auth variable in useEffect", auth);
        console.log("user variable in useEffect", user); */
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user);
        setIsLoggedIn(true);
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  const update = (firstname, lastname) => {
    /* console.log("user name is deleted in update function", auth.currentUser); */
    updateProfile(auth.currentUser, {
      displayName: firstname + " " + lastname,
    })
      .then(() => {
        /* console.log("auth bei update function", auth);
        console.log("user bei update function", user); */
        setUser(user);
        setUserName(firstname + " " + lastname);
        // Profile updated!
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log("error.message", errorMessage);
      });
  };

  const registerUser = (email, password /* , firstname, lastname */) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        /* console.log("userCredential", userCredential); */
        // Signed in
        const user = userCredential.user;
        console.log("user after register in the function register", user);
        setUser(user);
        setIsLoggedIn(true);
        console.log("UserState after registration is set to loggedin", user);
        // ...
      })
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: "Douchebag" /* firstname + " " + lastname */,
        });
        setUserName("Douchebag");
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log("errorCode", errorCode);
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
        setUserName(user.displayName);
        console.log("Login was successful.");
        console.log(
          "This is the userCredential.user put in user when login",
          user
        );
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

  const eraseUser = () => {
    deleteUser(auth.currentUser)
      .then(() => {
        // User deleted.
        setUser(null);
        setIsLoggedIn(false);
      })
      .catch((error) => {
        // An error ocurred
        // ...
        console.log("error.message", error.message);
      });
  };

  return (
    <div>
      <authContext.Provider
        value={{
          user,
          isLoggedIn,
          userName,
          update,
          registerUser,
          signin,
          logout,
          eraseUser,
        }}
      >
        {props.children}
      </authContext.Provider>
    </div>
  );
};

export default UserAuthContext;
