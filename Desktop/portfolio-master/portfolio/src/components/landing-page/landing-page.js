import React, { Component } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import vid from "../../landing-video/Pexels Videos 2699.mp4";
import "./landing-page.css";
import ProfileCard from "../profile-card/profile-card";
import "../profile-card/profile-card.css";

class LandingPage extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const video = document.querySelector(".landing-page-img");
		const hideScroll = document.querySelector("body");

		video.loop = true;
		video.play();
		hideScroll.style.setProperty("overflow", "hidden");
	}

	componentWillUnmount() {
		const hideScroll = document.querySelector("body");
		hideScroll.style.setProperty("overflow", "");
	}

	setScroll = (x, y) => {
		console.log("SCROLL");
		window.scroll(x, y);
	};

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
						<video
							className="landing-page-img"
							src={vid}
							muted
							autoPlay
							loop
						/>
						<ProfileCard />
						<Link to="/aboutme">
							<button className="landing-page-about-me">
								About Me
							</button>
						</Link>
						{/* <p className="landing-page-h1">Genchi Genbutsu</p> */}
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
