import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Character from '../fetchingDataChara/Character'
import './DetailsScreen.css'

const DetailsScreen = () => {
  const charaIds = [];
  let germanDate
  const {id} = useParams()
/*   console.log('id', id) */
  const url = `https://spapi.dev/api/episodes/${id}`;
  const [detailEpisode, setDetailEpisode] = useState();

  useEffect(() => {
    const fetchData = async() => {
      const response = await fetch(url);
      const result = await response.json();
      setDetailEpisode(result.data);
    } 
    fetchData();
  }, [id]);

  if(detailEpisode){
  const date = new Date(detailEpisode.air_date)
  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date)
  const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(date)
  const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date)
  
  germanDate = `${da}.${mo}.${ye}`}

  if(detailEpisode){
    detailEpisode.characters.map((each) =>{
      /* console.log('each', each) */
      const Id = Number(each.substring(each.lastIndexOf('/')+1));
      charaIds.push(Id);
      /* console.log('charaIds', charaIds) */
    })
  }

  return (
    <div className='detailContainer'>
      {/* <h1>{detailEpisode?.name ?? "Not loaded yet"}</h1> */}
      {detailEpisode ? 
        <>
        <h1>{detailEpisode.name}</h1>
        <h2>Season: {detailEpisode.season} / Episode: {detailEpisode.episode}</h2>
        <br></br>
        <h4>Description</h4>
        <p>{detailEpisode.description}</p>
        <p>Released: {germanDate}</p>
        </>
        : "Not loaded yet"
      }
      <Character ids={charaIds}/>
      {/* {console.log("infinite?")} */}
    </div>
  )
}

export default DetailsScreen
