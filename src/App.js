import React from "react";
import { useState } from "react";
import Animation from "./Animation/Animation";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Footer from "./components/Footer/Footer";

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
          <Services />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
