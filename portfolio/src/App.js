import React from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import UXDesigns from './components/ux-designs/UXDesigns';
import Projects from './components/projects/Projects';
import AboutMe from './components/about-me/AboutMe';

function App() {
  return (
    <div>
      <NavBar />
      <h1>Gideon Miles Oluku Portfolio</h1>
      <UXDesigns />
      <Projects />
      <AboutMe />
    </div>
  );
}

export default App;
