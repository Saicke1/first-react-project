import React, { useEffect, useState, useContext } from "react";
import "./UsersFavList.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
import { authContext } from "../useContext/UserAuthContext";
import Button from "react-bootstrap/Button";
import { favContext } from "../useContext/FavoriteContext";
import Toast from "react-bootstrap/Toast";
import { BsBookmarkDash } from "react-icons/bs";

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
      {/* {console.log("each", each)} */}
      <div className="titleBox">
        <h1 style={{ margin: 0 }}>My Favorites</h1>
      </div>
      <div className="allToastContainer">
        {favorites &&
          favorites.map((each, index) => (
            <div key={index}>
              <Toast className="toastBody">
                <Toast.Header>
                  <strong className="me-auto">{each.episodeName}</strong>
                  <BsBookmarkDash
                    className="removeIcon"
                    onClick={() => removing(each.id)}
                  />
                </Toast.Header>
                <div className="toastTextPosition">
                  <small className="smallFontStyle">
                    Season: {each.season} / Episode: {each.episode}
                  </small>
                  <Toast.Body>{each.description}</Toast.Body>
                </div>
              </Toast>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UsersFavList;
