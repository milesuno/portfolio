import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import LandingPage from "./components/landing-page/landing-page";
// import UXDesigns from "./components/ux-designs/ux-designs";
// import Projects from "./components/projects/Projects";
// import Courses from "./components/courses/courses";
// import AboutMe from "./components/about-me/about-me";
import "./App.css";
// import SinglePageItem from "./components/single-page-item/SinglePageItem";
import projects from "../src/data/project-data";

const LandingPage = lazy(() =>
	import("./components/landing-page/landing-page")
);
const UXDesigns = lazy(() => import("./components/ux-designs/ux-designs"));
const Projects = lazy(() => import("./components/projects/Projects"));
const Courses = lazy(() => import("./components/courses/courses"));
const AboutMe = lazy(() => import("./components/about-me/about-me"));
const SinglePageItem = lazy(() =>
	import("./components/single-page-item/SinglePageItem")
);

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
					{/* <Suspense fallback={<div>Loading...</div>}> */}
						<Route path="/" exact component={LandingPage} />
					{/* </Suspense> */}
					<Suspense
						fallback={
							<div>
								<div className={"page-wrapper"}>
									<div className="page-width">
										<header>
											<nav className="nav"></nav>
										</header>
										<main className={"main-wrapper"}>
											<h1 className="h1"></h1>
											<h3></h3>
											<section
												className={"elements-wrapper"}
											>
												{projects.map((project) => (
													<div className="thumbnail-page-wrapper"></div>
												))}
											</section>
										</main>
										<div className="footer-wrapper">
											footer
										</div>
									</div>
								</div>
							</div>
						}
					>
						<Route path="/projects" exact component={Projects} />
						<Route path="/uxdesigns" exact component={UXDesigns} />
						<Route path="/courses" exact component={Courses} />
						<Route path="/aboutme" exact component={AboutMe} />
						<Route
							path="/projects/:id"
							exact
							component={SinglePageItem}
						/>
						<Route
							path="/uxdesigns/:id"
							exact
							component={SinglePageItem}
						/>
						<Route
							path="/courses/:id"
							exact
							component={SinglePageItem}
						/>
					</Suspense>
				</Switch>
			</Router>
		);
	}
}

export default App;
