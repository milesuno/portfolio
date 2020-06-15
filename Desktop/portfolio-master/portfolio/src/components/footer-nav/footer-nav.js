import React, { Component } from "react";
import { Link } from "react-router-dom";
import projectData from "../../data/project-data.json";
import uxData from "../../data/ux-data.json";
import CourseData from "../../data/course-data.json";
// import aboutMeData from "../../data/about-me-data.json";
import "./footer-nav.css";

import SocialMediaNav from "../social-media-nav/social-media-nav";

class FooterNav extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		const scrollTopBtn = document.querySelector("div.scroll-top-btn");
		const footer = document.querySelector("footer");
		const footerCoords = footer.getBoundingClientRect();
		// scrollTopBtn.style.setProperty("top", `${window.innerHeight - 100}px`);
		// scrollTopBtn.style.setProperty("left", `${window.innerWidth - 100}px`);

		footer.style.setProperty(
			"top",
			`${window.innerHeight - footerCoords.height}px`
		);
		console.log({ footer, footerCoords });
	}
	render() {
		return (
			<footer>
				<div className="footer-wrapper">
					<div className="footer-contact-info">
						<p>Milesoluku@gmail.com</p>
						<p>07783180169</p>
						<SocialMediaNav isFooter={this.props.isFooter} />
					</div>
					<div className="footer-signature">
						<img src="#" />
					</div>
					<div className="footer-nav-menu">
						<ul className="footer-ul">
							<Link to="/projects">Projects:</Link>
							{projectData.map((data) => (
								<Link to={`/projects/${data.id}`}>
									<li>{data.name}</li>
								</Link>
							))}
						</ul>
						<ul className="footer-ul">
							<Link to="/uxdesigns">UX Designs:</Link>
							{uxData.map((data) => (
								<Link to={`/uxdesigns/${data.id}`}>
									<li>{data.name}</li>
								</Link>
							))}
						</ul>
						<ul className="footer-ul">
							<Link to="courses">Courses:</Link>
							{CourseData.map((data) => (
								<Link to={`/courses/${data.id}`}>
									<li>{data.name}</li>
								</Link>
							))}
						</ul>
					</div>
				</div>
			</footer>
		);
	}
}

export default FooterNav;
