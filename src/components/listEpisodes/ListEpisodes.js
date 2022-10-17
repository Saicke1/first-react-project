import React, { useState } from "react";
import "./ListEpisodes.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import FavoriteIcon from "../favoriteIcon/FavoriteIcon";

const ListEpisodes = ({ epi }) => {
  /*   let display; */
  /*   console.log("epi", epi); */

  /* if (epi) {
    display = epi.map((each) => { */
  /* const splittedUrl = each.thumbnail_url.split('revision')[0];  */
  /* 
      return (
        <Card style={{ width: "18rem" }} key={each.id}>
          <Card.Img
            referrerPolicy="no-referrer"
            variant="top"
            src={each.thumbnail_url}
          />
          <Card.Body>
            <Card.Title>{each.name}</Card.Title>
            <p style={{ color: "red" }}>
              Season: {each.season} / Episode: {each.episode}
            </p>
            <Link to={`/episodes/${each.id}`}>
              <Button variant="primary">Show More!</Button>
            </Link>
          </Card.Body>
          <FavoriteIcon />
        </Card>
      );
    });
  } else {
    console.log("There is no data fetched.");
    alert("There is no data fetched.");
  }
 */
  if (epi) {
    return (
      <div className="orderList">
        {/* {display} */}
        {
          epi.map((each) => {
            return (
              <Card style={{ width: "18rem" }} key={each.id}>
                <Card.Img
                  referrerPolicy="no-referrer"
                  variant="top"
                  src={each.thumbnail_url}
                />
                <Card.Body>
                  <Card.Title>{each.name}</Card.Title>
                  <p style={{ color: "red" }}>
                    Season: {each.season} / Episode: {each.episode}
                  </p>
                  <Link to={`/episodes/${each.id}`}>
                    <Button variant="primary">Show More!</Button>
                  </Link>
                </Card.Body>
                <FavoriteIcon
                  id={each.id}
                  thumbnail={each.thumbnail_url}
                  episodeName={each.name}
                  season={each.season}
                  episode={each.episode}
                />
              </Card>
            );
          })
          /* ) : (
          <div>
            {console.log("There is no data fetched.")}
            alert("There is no data fetched.");
          </div>
        ) */
        }
      </div>
    );
  }
};

export default ListEpisodes;
