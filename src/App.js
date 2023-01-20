import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import LandingPage from "./components/pages/landing-page/landing-page";
import UXDesigns from "./components/pages/ux-designs/ux-designs";
import Projects from "./components/pages/projects/Projects";
import Courses from "./components/pages/courses/courses";
import AboutMe from "./components/pages/about-me/about-me";
import PageNotFound from "./components/pages/page-not-found/page-not-found";
import "./App.css";
import SinglePageItem from "./components/elements/single-page-item/SinglePageItem";
import projects from "../src/data/project-data";
import landingPageBG from "./landing-video/landing-bg.png";
import DevProcess from "./components/pages/dev-process/dev-process";
import ContactMe from "./components/pages/contact-me/contact-me";
import Blog from "./components/pages/blog/blog";
import WebAnalytics from "./components/pages/web-analytics/web-analytics";
import WebDev from "./components/pages/web-dev/web-dev";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: null,
    };
  }

  render() {
    return (
      <Router className={"app"}>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/about" exact component={AboutMe} />
          <Route path="/about/projects" exact component={Projects} />
          <Route path="/about/education" exact component={Courses} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/blog/web-analytics" exact component={WebAnalytics} />
          <Route path="/blog/web-dev" exact component={WebDev} />

          {/* <Route path="/uxdesigns" exact component={UXDesigns} /> */}
          {/* <Route path="/development" exact component={DevProcess} /> */}
          <Route path="/contact" exact component={ContactMe} />
          
          <Route path="/about/:id" exact component={AboutMe} />
          <Route path="/projects/:id" exact component={SinglePageItem} />
          <Route path="/uxdesigns/:id" exact component={SinglePageItem} />
          <Route path="/courses/:id" exact component={SinglePageItem} />
          <Route path="" component={PageNotFound} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
