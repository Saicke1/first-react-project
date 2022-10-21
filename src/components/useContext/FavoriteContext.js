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
  query,
  where,
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
      console.log("remove Fav was clicked.");
      const newId = await id.toString();
      await deleteDoc(doc(db, "users", userID, "Favorites", newId));
      return true;
    } catch (error) {
      console.log("error.message", error.message);
      return false;
    }
  };

  const removeAllFavorites = async (userID) => {
    try {
      console.log("Remove all Favs was clicked.");
      /* console.log("userID", userID); */

      /*  const docsSnap = await getDocs(
        collection(db, "users", userID, "Favorites")
      );

      docsSnap.forEach((each) => {
        console.log(each.data());
        deleteDoc(doc(each));
        console.log("Doc is deleted."); 
      });

      const otherSnap = await doc(db, "users", userID, "Favorites", "7");

      console.log("otherSnap", otherSnap); */

      return true;
    } catch (error) {
      console.log("error.message", error.message);
      return false;
    }
  };

  return (
    <div>
      <favContext.Provider
        value={{ addFavorite, removeFavorite, removeAllFavorites }}
      >
        {props.children}
      </favContext.Provider>
    </div>
  );
};

export default FavoriteContext;
