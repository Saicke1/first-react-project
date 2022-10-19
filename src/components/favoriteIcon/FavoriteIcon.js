import React, { useContext, useState, useEffect } from "react";
import "./FavoriteIcon.css";
import { BsBookmarkHeart, BsBookmarkHeartFill } from "react-icons/bs";
import { authContext } from "../useContext/UserAuthContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
import { favContext } from "../useContext/FavoriteContext";

const FavoriteIcon = (props) => {
  const { addFavorite, removeFavorite } = useContext(favContext);
  const [favorite, setFavorite] = useState(false);
  const [memoryFavs, setMemoryFavs] = useState([]);
  const { id, thumbnail, episodeName, season, episode } = props;
  const { user } = useContext(authContext);
  const userID = user.uid;

  /*   const toggleFav = () => {
    setFavorite(!favorite);
    console.log("favorite", favorite);
    if (favorite === true) {
      addFavorite(userID, id, thumbnail, episodeName, season, episode);
    } else {
      removeFavorite(userID, id);
    }
    checkFavorites();
  }; */

  const addFav = async () => {
    /* setFavorite(true); */
    await addFavorite(userID, id, thumbnail, episodeName, season, episode);
    checkFavorites();
  };

  const removeFav = async () => {
    /* setFavorite(false); */
    await removeFavorite(userID, id);
    checkFavorites();
  };

  const checkFavorites = async () => {
    const allFavorites = await getDocs(
      collection(db, "users", userID, "Favorites")
    );
    const array = [];
    allFavorites.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      const turnIntoNumber = +doc.id;
      /* console.log("turnIntoNumber", turnIntoNumber); */
      array.push(turnIntoNumber);
    });
    console.log("array", array);
    setMemoryFavs(array);
  };

  useEffect(() => {
    checkFavorites();
  }, []);

  return (
    <div>
      {memoryFavs &&
        memoryFavs.map((each) => {
          /* console.log("each", each); */
          if (each === id) {
            return (
              <BsBookmarkHeartFill className="favIcon" onClick={removeFav} />
            );
          } else {
            return <BsBookmarkHeart className="favIcon" onClick={addFav} />;
          }
        })}

      {/* {favorite ? (
        <BsBookmarkHeartFill className="favIcon" onClick={removeFav} />
      ) : (
        <BsBookmarkHeart className="favIcon" onClick={addFav} />
      )} */}
    </div>
  );
};

export default FavoriteIcon;
