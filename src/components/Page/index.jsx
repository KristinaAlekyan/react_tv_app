import React from "react";
import FeaturedTitleImage from "../../assets/images/FeaturedTitleImage.png";
import {calculateDuration} from "../../utils/calculateDuration"

import "./style.css";

const Page = ({ featured }) => {
  const duration = calculateDuration(featured?.Duration)

  return (
    <div className="mainPageContainer">
      <div className="infoBlock">
        <h3 color="red">{featured?.Category}</h3>

        <div>
          <img src={FeaturedTitleImage} alt="FeaturedTitleImage" />
        </div>

        <div className="movesData">
          <h4>{featured?.ReleaseYear}</h4>
          <h4>{featured?.MpaRating}</h4>
          <h4>{duration}</h4>
        </div>

        <p>{featured?.Description}</p>

        <div>
          <button className="playButtonMainPage"> Play </button>
          <button className="moreInfoButton"> More Info </button>
        </div>

      </div>
      <h3 className="trandingNow">Trending Now</h3>
      
    </div>
  );
};

export default Page;