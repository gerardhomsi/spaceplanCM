import React from "react";
import { useState } from "react";
import Animation from "./Animation/Animation";
// import { Home, Projects, Services, About, Contact } from './pages/index.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Admin from "./pages/Admin";
import Gallery from "./pages/Gallery";

const App = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  }

  const routes = [
    { path: '/', element: <Home /> },
    { path: '/services', element: <Services /> },
    { path: '/projects', element: <Projects /> },
    { path: '/about', element: <About /> },
    { path: '/contact', element: <Contact /> },
    { path: '/gallery', element: <Gallery /> },
    { path: '/admin', element: <Admin /> },
  ]

  return (
    <BrowserRouter>
    <Animation onAnimationComplete={handleAnimationComplete} />
      {animationComplete && (
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default App;
