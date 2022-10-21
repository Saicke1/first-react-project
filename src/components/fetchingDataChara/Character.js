import React, { useEffect, useState } from "react";

const Character = (props) => {
  const [charaData, setCharaData] = useState([]);
  const array = props.ids;
  console.log("array", array);

  useEffect(() => {
    setCharaData([]);

    const fetchData = async (url) => {
      const response = await fetch(url);
      const result = await response.json();
      return result.data;
    };

    array.forEach(async (each) => {
      const url = `https://spapi.dev/api/characters/${each}`;
      const data = await fetchData(url);
      setCharaData((charaData) => [...charaData, data]);
    });
  }, [array]);

  console.log("charaData", charaData);

  return (
    <div>
      <h1>Participating Characters:</h1>

      {charaData.map((each) => {
        return (
          <React.Fragment key={each.id}>
            <p>{each.name}</p>
          </React.Fragment>
        );
      })}

      {console.log("Infinite?")}
    </div>
  );
};

export default Character;
