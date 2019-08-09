import React from 'react';
import './App.css';
import LandingPage from './components/landing-page/landing-page';
import NavBar from './components/navbar/nav-bar';
import UXDesigns from './components/ux-designs/ux-designs';
import Projects from './components/projects/Projects';
import AboutMe from './components/about-me/about-me';

function App() {
  return (
    <div>
      <LandingPage />
      <NavBar />
      <h1>Gideon Miles Oluku Portfolio</h1>
      <UXDesigns />
      <Projects />
      <AboutMe />
    </div>
  );
}

export default App;
