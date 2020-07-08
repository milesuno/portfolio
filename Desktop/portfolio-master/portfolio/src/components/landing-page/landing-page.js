import React, { Component } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import vid from "../../landing-video/Pexels Videos 2699.mp4";
import "./landing-page.css";
import ProfileCard from "../profile-card/profile-card";
import "../profile-card/profile-card.css";

// ADD: track page width and if the width changes recalculate the middle
class LandingPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			windowWidth: window.innerWidth,
		};
	}

	componentDidMount() {
		const video = document.querySelector(".landing-page-img");
		const hideScroll = document.querySelector("body");
		const enterBtn = document.querySelector(".landing-page-a");
		const profileCard = document.querySelector(".profile-card");

		console.log(profileCard);
		
		window.onresize = () => {
			if (this.state.windowWidth <= 696) {
				profileCard.style.setProperty(
					"left",
					`${this.state.windowWidth / 2 - 125}px`
				);
			} else {
				profileCard.style.setProperty("left", "");
				profileCard.style.setProperty("right", `30px`);
			}
			this.setState({ windowWidth: window.innerWidth });
			console.log({ enterBtn });
			enterBtn.style.setProperty(
				"left",
				`${this.state.windowWidth / 2 - 50}px`
			);
			console.log(this.state.windowWidth);
		};
		video.loop = true;
		video.play();
		hideScroll.style.setProperty("overflow", "hidden");
	}

	componentDidUpdate(prevState) {
		if (prevState.windowWidth !== this.state.windowWidth) {
			console.log("change");
			// this.setState({windowWidth: this})
		}
	}
	componentWillUnmount() {
		const hideScroll = document.querySelector("body");
		hideScroll.style.setProperty("overflow", "");
		window.onresize = "";
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
						{/* <Link to="/aboutme">
							<button className="landing-page-about-me">
								About Me
							</button>
						</Link> */}
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
