import React, { useContext } from "react";
import "./Home.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { authContext } from "../useContext/UserAuthContext";

const Home = () => {
  const { isLoggedIn } = useContext(authContext);

  return (
    <div className="containerPosition">
      <div className="homeContainer">
        <h1>Welcome to your Park!</h1>
        <div className="imgTextPosition">
          <img
            className="imageCartmanSizing"
            src="./images/ericCartman.png"
            alt="ericCartman"
          />
          <div className="buttonTextPosition">
            <p>
              "I know, I know, you can't wait to get started. But let me tell
              you this: If you don't log in, you will be demoted from douchebag
              to stupid douchebag. No kidding! That's even worse than killing
              Kenny.<br></br>
              All clear? Good! Now go!"
            </p>
            {isLoggedIn ? (
              <></>
            ) : (
              <Link to="/login">
                <Button variant="primary">Oh shit, I better log in!</Button>
              </Link>
            )}

            <Link to="/listEpisodes">
              <Button variant="primary">
                Don't care, show me the list of episodes!
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
