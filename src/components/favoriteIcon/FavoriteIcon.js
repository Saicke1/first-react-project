import React, { useState } from "react";
import "./FavoriteIcon.css";
import { BsBookmarkHeart, BsBookmarkHeartFill } from "react-icons/bs";

const FavoriteIcon = (props) => {
  const [favorite, setfavorite] = useState(false);
  const { id, thumbnail, episodeName, season, episode } = props;

  const toggleFav = () => {
    setfavorite(!favorite);
  };

  return (
    <div>
      {favorite ? (
        <BsBookmarkHeartFill className="favIcon" onClick={toggleFav} />
      ) : (
        <BsBookmarkHeart className="favIcon" onClick={toggleFav} />
      )}
    </div>
  );
};

export default FavoriteIcon;
