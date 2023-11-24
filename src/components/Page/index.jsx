import React, { useState } from "react";
import FeaturedTitleImage from "../../assets/images/FeaturedTitleImage.png";
import {calculateDuration} from "../../utils/calculateDuration";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import ReactPlayer from 'react-player';

import "./style.css";

const Page = ({ featured, featuredData, current, setCurrent}) => {
  const [videoPlay, setVideoPlay] = useState(false);
  const getCurrentItem = (type) => {
    return (current === -1) ? featured?.[type] : featuredData[current]?.[type]
  }

  const duration = calculateDuration(getCurrentItem("Duration"))

  const slideLeft = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const onChangeCurrent = (currentId) =>{
    setCurrent(currentId);
    setVideoPlay(false)
  }
  const onVideoPlay = () =>{
    setVideoPlay(true)
  }
   
  return (
    <div className="mainPageContainer">
      <div className="infoBlock">
        <h3 color="red">{ getCurrentItem("Category")}</h3>

        <div >
          {!videoPlay
            ?
            <img src={current === -1 ? FeaturedTitleImage : `../../assets/images/${featuredData[current]?.CoverImage}`} alt="image" />
            :
            <ReactPlayer url='https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' controls={true} playing={true}/>
          }
        </div>
        <div className="movesData">
          <h4>{getCurrentItem("ReleaseYear")}</h4>
          <h4>{getCurrentItem("MpaRating")}</h4>
          <h4>{duration}</h4>
        </div>

        <p>{getCurrentItem("Description")}</p>

        <div>
          <button className="playButtonMainPage" onClick={onVideoPlay}> Play </button>
          <button className="moreInfoButton"> More Info </button>
        </div>

      </div>
      <div className="slider_container">
        <h3 className="trendingNow">Trending Now</h3>
        <div className='trending_container'>
          <MdChevronLeft className='trending_slider_left' onClick={slideLeft} size={40} />
          <div 
            id='slider'
            className='trending_img_container'
          >
            {featuredData?featuredData.map((item) => (
              <img key={item.Id} onClick={()=> onChangeCurrent(item.Id-1)}
                className='trending_img'
                src={`../../assets/images/${item.CoverImage}`}
                alt='/'
              />
            )):<></>}
          </div>
          <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
        </div>
        </div>
      </div>
  );
};

export default Page;