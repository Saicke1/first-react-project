import React from 'react';
import './Home.css';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const Home = () => {

  return (
      <div className='homeContainer'>
        <h1>Welcome to your Park!</h1>
        <img className='imageCartmanSizing' src='./images/ericCartman.png' alt='ericCartman' /> 
        <p>"I know, I know, you can't wait to get started.<br></br>
        But let me tell you this:<br></br>
        If you don't log in,<br></br>
        you will be demoted from douchebag to stupid douchebag.<br></br>
        No kidding!<br></br>
        That's even worse than killing Kenny.<br></br>
        All clear? Good! Now go!"
        </p>

        <Link to="/login">
        <Button variant="primary">Oh shit, I better log in!</Button>
        </Link>
        <Link to="/listEpisodes">
          <Button variant="primary">Don't care, show me the list of episodes!</Button>
        </Link>   
      </div>
  )
    
}

export default Home