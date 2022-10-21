import React, { useState } from "react";
import "./ListEpisodes.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import FavoriteIcon from "../favoriteIcon/FavoriteIcon";

const ListEpisodes = ({ epi }) => {
  if (epi) {
    return (
      <div className="orderList">
        {epi.map((each) => {
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
                description={each.description}
              />
            </Card>
          );
        })}
      </div>
    );
  }
};

export default ListEpisodes;
