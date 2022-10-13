import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="postionImg">
      <a href="https://spapi.dev/">
        <img
          className="imageBannerSize"
          src="./images/SPBanner.png"
          alt="SPBanner"
        />
      </a>
    </div>
  );
};

export default Banner;
