import React, { createContext, useState } from "react";
import { db } from "../../firebase-config";
import {
  setDoc,
  doc,
  getDoc,
  updateDoc,
  collection,
  getDocs,
  deleteDoc,
} from "firebase/firestore";

export const favContext = createContext();

const FavoriteContext = (props) => {
  const [favorite, setfavorite] = useState(false);
  const [favoriteList, setFavoriteList] = useState([]);

  const addFavorite = async (
    userID,
    id,
    thumbnail,
    episodeName,
    season,
    episode,
    description
  ) => {
    console.log("ADD Fav wurde geklickt.");
    const newId = await id.toString();
    const usersRef = await doc(db, "users", userID, "Favorites", newId);
    /* const usersRefID = doc(db, "users", userID); */
    const docSnap = await getDoc(usersRef);

    console.log("id", id);

    if (docSnap.exists()) {
      console.log("Document exist already:", docSnap.data());
    } else {
      /*   console.log("userID", userID);
      console.log("typeof userID", typeof userID);
      console.log("id", id);
      console.log("typeof id", typeof id); */

      await setDoc(doc(db, "users", userID, "Favorites", newId), {
        id: id,
        episodeName: episodeName,
        thumbnail: thumbnail,
        season: season,
        episode: episode,
        description: description,
      });
    }
  };

  const removeFavorite = async (userID, id) => {
    try {
      console.log("remove Fav wurde geklickt.");
      const newId = await id.toString();
      await deleteDoc(doc(db, "users", userID, "Favorites", newId));
      return true;
    } catch (error) {
      console.log("error.message", error.message);
      return false;
    }
  };

  return (
    <div>
      <favContext.Provider value={{ addFavorite, removeFavorite }}>
        {props.children}
      </favContext.Provider>
    </div>
  );
};

export default FavoriteContext;
