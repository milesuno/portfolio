import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/landing-page/landing-page";
import UXDesigns from "./components/ux-designs/ux-designs";
import Projects from "./components/projects/Projects";
import Courses from "./components/courses/courses";
import AboutMe from "./components/about-me/about-me";
import "./App.css";
import SinglePageItem from "./components/single-page-item/SinglePageItem";

function App() {
	return (
		<Router className={'app'}>
			<Switch>
				<Route path="/" exact component={LandingPage} />
				<Route path="/projects" exact component={Projects} />
				<Route path="/uxdesigns" exact component={UXDesigns} />
				<Route path="/courses" exact component={Courses} />
				<Route path="/aboutme" exact component={AboutMe} />
				<Route path="/projects/:id" exact component={SinglePageItem} />

			</Switch>
		</Router>
	);
}

export default App;
