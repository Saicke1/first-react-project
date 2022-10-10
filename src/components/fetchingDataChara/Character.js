import React, { useEffect, useState } from 'react'

const Character = (props) => {
  /* const url = `https://spapi.dev/api/characters/${props.id[1]}`; */
  /* console.log('props.ids', props.ids) */
  /* console.log('props.id[1]', props.id[1]) */
  const [charaData, setCharaData] = useState([]);
  const array = props.ids
  console.log('array', array)


  useEffect(() => {

    setCharaData([]);

    const fetchData = async (url) => {
        /* console.log('url', url) */
        const response = await fetch(url);
        const result = await response.json();
        /* console.log('result', result)  */
        return result.data 
      } 

    array.forEach( async (each) => {
      const url = `https://spapi.dev/api/characters/${each}`; 
      const data = await fetchData(url);
      setCharaData((charaData) => [...charaData, data])
      /* console.log('charaData', charaData) */
    })

  }, [array]); 

  console.log('charaData', charaData)

  return (
    <div>
      <h1>Participating Characters:</h1>

      {charaData.map((each) =>  {
        /* console.log('each', each) */
        return (
          <React.Fragment key={each.id}>
            <p>{each.name}</p>
          </React.Fragment>
        )
      })}  

      {console.log("Infinite?")}
    </div>
  )
}

export default Character
