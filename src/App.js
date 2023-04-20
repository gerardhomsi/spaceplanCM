import React from "react";
import { useState } from "react";
import Animation from "./Animation/Animation";
import Home from "./pages/Home";

const App = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  }

  return (
    <>
      <Animation onAnimationComplete={handleAnimationComplete} />
      {animationComplete && (
        <>
          <Home />
        </>
      )}
    </>
  );
};

export default App;
