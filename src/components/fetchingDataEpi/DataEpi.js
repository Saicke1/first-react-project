import React, { useState, useEffect, useContext } from "react";
import "./DataEpi.css";
import ListEpisodes from "../listEpisodes/ListEpisodes";
import PageTurn from "../pageTurn/PageTurn";
import { storedStates } from "../useContext/UseContext";

const DataEpi = () => {
  const [episodes, setEpisodes] = useState();
  const { page } = useContext(storedStates);
  const pageNumber = page[0];

  const url = `https://spapi.dev/api/episodes/?page=${pageNumber}`;

  /* console.log('Here is the final fetched data:', episodes)  */

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const result = await response.json();
      console.log(result);
      setEpisodes(result.data);
    };
    fetchData();
  }, [pageNumber]);

  return (
    <div className="listContainer">
      <h1 style={{ padding: 10 }}>List of full Episodes</h1>

      <PageTurn />

      {episodes && <ListEpisodes epi={episodes} />}

      <PageTurn />
    </div>
  );
};

export default DataEpi;
