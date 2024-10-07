import React from "react";
import "../App.css";
const SlideshowImages = () => {
  return (
    <div className="slideshow-images-container">
      <div className="mySlides fade">
        <img src="./Images/image3.JPG" className="img-carousel"></img>
      </div>
      <div className="mySlides fade">
        <img src="./Images/image2.JPG" className="img-carousel"></img>
      </div>
      <div className="mySlides fade">
        <img src="./Images/image1.JPG" className="img-carousel"></img>
      </div>
      <div className="mySlides fade">
        <img src="./Images/image4.JPG" className="img-carousel"></img>
      </div>
      <div className="mySlides fade">
        <img src="./Images/image5.JPG" className="img-carousel"></img>
      </div>
      <div className="mySlides fade">
        <img src="./Images/image6.JPG" className="img-carousel"></img>
      </div>
    </div>
  );
};

export default SlideshowImages;
