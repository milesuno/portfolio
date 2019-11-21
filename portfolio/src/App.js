import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/landing-page/landing-page';
import NavBar from './components/navbar/nav-bar';
import UXDesigns from './components/ux-designs/ux-designs';
import Projects from './components/projects/Projects';
import AboutMe from './components/about-me/about-me';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={LandingPage}/>
        <Route path='/uxdesigns'exact component={UXDesigns}/>
        <Route path='/projects' exact component={Projects}/>
        <Route path='/aboutme' exact component={AboutMe}/>
      </Switch>
    </Router>
   
  );
}

export default App;
