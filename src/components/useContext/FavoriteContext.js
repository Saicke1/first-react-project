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
    episode
  ) => {
    const newId = await id.toString();
    const usersRef = await doc(db, "users", userID, "Favorites", newId);
    /* const usersRefID = doc(db, "users", userID); */
    const docSnap = await getDoc(usersRef);

    if (docSnap.exists()) {
      console.log("Document exist already:", docSnap.data());
    } else {
      /*   console.log("userID", userID);
      console.log("typeof userID", typeof userID);
      console.log("id", id);
      console.log("typeof id", typeof id); */

      setDoc(doc(db, "users", userID, "Favorites", newId), {
        id: { id },
        episodeName: { episodeName },
        thumbnail: { thumbnail },
        season: { season },
        episode: { episode },
      });
    }
  };

  const removeFavorite = async (userID, id) => {
    const newId = await id.toString();
    await deleteDoc(doc(db, "users", userID, "Favorites", newId));
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
