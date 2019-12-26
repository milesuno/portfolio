import React, { Component } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import "./landing-page.css";

class LandingPage extends Component {
	constructor(props) {
		super(props);
	}
	//FIX: Tab Icon
	render() {
		return (
			<>
				<Helmet>
					<title>Gideon Miles Oluku - Portfolio</title>
					<meta name="description" content="Portfolio Landing page" />
				</Helmet>
				<div className="landing-page-wrapper">
					{/* Quotes can change every few seconds */}
					<main className="landing-main-wrapper">
						<Link to="/aboutme">
							<button className="landing-page-about-me">
								About Me
							</button>
						</Link>
						<h1 className="landing-page-h1">Genchi Genbutsu</h1>
						<img
							className="landing-page-img"
							src={
								"https://images.unsplash.com/photo-1544847558-3ccacb31ee7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
							}
						/>
						<Link to="/projects">
							<button className="landing-page-a">Enter</button>
						</Link>
					</main>
				</div>
			</>
		);
	}
}

export default LandingPage;
