import React, { useEffect, useState } from "react";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";
import image4 from "../../assets/images/image4.jpg";
import image5 from "../../assets/images/image5.jpg";
import image6 from "../../assets/images/image6.jpg";
import image7 from "../../assets/images/image7.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const SlideshowImages = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const slides = [image1, image2, image3, image4, image5, image6, image7];
  const currentSlide = (n) => {
    let newSlideIndex = currentSlideIndex + n;
    if (newSlideIndex >= slides.length) {
      newSlideIndex = 0;
    }
    if (newSlideIndex < 0) {
      newSlideIndex = slides.length - 1;
    }
    setCurrentSlideIndex(newSlideIndex);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      currentSlide(1);
    }, 7000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [currentSlideIndex]);

  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);

  return (
    <div className="slideshow-images-container" data-aos="fade-in">
      {slides.map((slide, index) => (
        <img
          className={`carousel-img ${index === currentSlideIndex ? "active" : ""}`}
          src={slide}
          key={index}
        />
      ))}
    </div>
  );
};

export default SlideshowImages;
