import React, { useContext, useState, useEffect } from "react";
import "./FavoriteIcon.css";
import { BsBookmarkHeart, BsBookmarkHeartFill } from "react-icons/bs";
import { authContext } from "../useContext/UserAuthContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
import { favContext } from "../useContext/FavoriteContext";

const FavoriteIcon = (props) => {
  const { addFavorite, removeFavorite } = useContext(favContext);
  const [memoryFavs, setMemoryFavs] = useState([]);
  const { id, thumbnail, episodeName, season, episode, description } = props;
  const { user } = useContext(authContext);
  const userID = user.uid;

  const addFav = async (id) => {
    await addFavorite(
      userID,
      id,
      thumbnail,
      episodeName,
      season,
      episode,
      description
    );
    checkFavorites();
  };

  const removeFav = async (id) => {
    const success = await removeFavorite(userID, id);
    if (success) {
      checkFavorites();
    } else {
      console.log("remove Fav was not synchron or a failure and false!");
    }
  };

  const checkFavorites = async () => {
    const allFavorites = await getDocs(
      collection(db, "users", userID, "Favorites")
    );
    const array = [];
    allFavorites.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      /* console.log(doc.id, " => ", doc.data()); */
      const turnIntoNumber = +doc.id;
      array.push(turnIntoNumber);
    });
    array.length && setMemoryFavs(array);
  };

  useEffect(() => {
    checkFavorites();
  }, []);

  console.log("memoryFavs", memoryFavs);
  return (
    <div>
      {memoryFavs.includes(id) ? (
        <BsBookmarkHeartFill
          className="favIcon"
          onClick={() => removeFav(id)}
        />
      ) : (
        <BsBookmarkHeart className="favIcon" onClick={() => addFav(id)} />
      )}
    </div>
  );
};

export default FavoriteIcon;
