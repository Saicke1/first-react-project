import React, { useEffect, useState, useContext } from "react";
import "./UsersFavList.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
import { authContext } from "../useContext/UserAuthContext";
import Button from "react-bootstrap/Button";
import { favContext } from "../useContext/FavoriteContext";

const UsersFavList = () => {
  const { user } = useContext(authContext);
  const { removeFavorite } = useContext(favContext);
  const [favorites, setFavorites] = useState([]);
  const userID = user.uid;

  const checkFavorites = async () => {
    const allFavorites = await getDocs(
      collection(db, "users", userID, "Favorites")
    );
    const array = [];
    allFavorites.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      array.push(doc.data());
    });
    const sortedArray = array.sort(
      (objA, objB) => Number(objA.id) - Number(objB.id)
    );
    setFavorites(sortedArray);
  };

  useEffect(() => {
    checkFavorites();
  }, []);

  const removing = async (id) => {
    await removeFavorite(userID, id);
    checkFavorites();
  };

  return (
    <div className="favListContainer">
      <h1>This is the Favorite-List.</h1>
      <div>
        {favorites &&
          favorites.map((each, index) => (
            <div key={index}>
              {console.log("each", each)}
              <p>Episode: {each.episodeName}</p>
              <p>
                Season: {each.season} / Episode: {each.episode}
              </p>
              <Button variant="primary" onClick={() => removing(each.id)}>
                Remove from list
              </Button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UsersFavList;
