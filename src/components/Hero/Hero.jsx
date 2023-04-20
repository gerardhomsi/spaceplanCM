import React, { useState } from 'react';
import './hero.css';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';


const images = [
  "https://via.placeholder.com/400x200?text=Image+1",
  "https://via.placeholder.com/400x200?text=Image+2",
  "https://via.placeholder.com/400x200?text=Image+3",
  "https://via.placeholder.com/400x200?text=Image+4",
];

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const previousImage = () => {
      setCurrentImageIndex(
        currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
      );
    };
  
    const nextImage = () => {
      setCurrentImageIndex(
        currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
      );
    };
  
    return (
      <>
        <div className='hero'>
          <div className="slider-container">
            <img
              className='slider-image'
              src={images[currentImageIndex]}
              alt='Slider'
            />
            <div className='slider-arrows'>
              <div className='slider-arrow-left' onClick={previousImage}>
                <FaArrowAltCircleLeft />
              </div>
              <div className='slider-arrow-right' onClick={nextImage}>
                <FaArrowAltCircleRight />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  export default Hero;
