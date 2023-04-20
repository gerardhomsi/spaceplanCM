import React, { useState, useEffect } from "react";
import logo from '../images/logo.png'
import './animation.css'

const Animation = ({ onAnimationComplete }) => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
      onAnimationComplete();
    }, 2800);

    return () => {
      clearTimeout(timer);
    };
  }, [onAnimationComplete]);

  return (
    <div className="animation-container">
      {showAnimation && (
        <>
          <img src={logo} alt="Logo" className="logo" />
          <p className="company-name">CONSTRUCTION AND MANAGEMENT LLC</p>
        </>
      )}
    </div>
  );
};

export default Animation;
