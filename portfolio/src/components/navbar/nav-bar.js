import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./nav-bar.css";
import courseData from "../../data/course-data.json";
import projectData from "../../data/project-data";
import uxData from "../../data/ux-data";
import socialMediaData from "../../data/social-media-data.js";
import menu from "../../landing-video/icons8-menu-squared-96.png";
import closeMenu from "../../landing-video/icons8-close-window-96.png";
import scrollTopBtnIcon from "../../data/page-btns/icons8-slide-up-100.png";
<<<<<<< HEAD
=======
import LandingPage from "../landing-page/landing-page";
>>>>>>> parent of 4f9c2aef... Project restructured, Server created, Nodemailer Test

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			course: courseData,
			project: projectData,
			ux: uxData,
			socialMedia: socialMediaData,
			menuToggle: true,
			isLandingPage: this.props.isLandingPage || false,
		};
	}
<<<<<<< HEAD
	//ADD: Create eventlistener on nav for mouseleave, this should create a mouseclick event that will close the navbtns

	//FIX: display menu above 736px -> display: flex; flex-direction: row;
	componentDidMount() {
		if (this.props.isLandingPage) {
			this.setState({ isLandingPage: true });
			// console.log("isLandingPage", this.state.isLandingPage);
		}
		window.onscroll = this.toggleScrollTopBtn;

	}

	componentWillUnmount() {
		window.onscroll = "";
	}


	showMenuButtons = () => {
		const navContent = document.querySelector(".nav-content");
		const navBtns = document.querySelectorAll("li.nav-item");
		const dropdownLists = document.querySelectorAll(".dropdown-list");
		const shortMenuCoords = document
			.querySelector(".short-nav")
			.getBoundingClientRect();
		const collaspedMenuBtn = document.querySelector(".collasped-menu-btn");
		const linkBtns = document.querySelectorAll(".link.lg-display");
		linkBtns.forEach((btn) => (btn.href = ""));
		const shortNav = document.querySelector(".short-nav");
		const navOverlay = document.querySelector(".nav-overlay");

		console.log({
			collaspedMenuBtn,
			navBtns,
			navContent,
			linkBtns,
			dropdownLists,
		});

		//REFACTOR: Put this into a class
		//REFACTOR:  Can this block be single line if checks?

		if (this.state.menuToggle) {
			if (this.state.isLandingPage) {
				//REFACTOR: Put this into a class
				shortNav.style.setProperty("justify-content", "flex-end");
				navContent.style.setProperty("display", "flex");
				navContent.style.setProperty("flex-direction", "column");
				navContent.style.setProperty("position", "absolute");
				navContent.style.setProperty("transform", "translate(0, 0%)");
				navContent.style.setProperty("width", "200px");
				navContent.style.setProperty("top", "60px");
				navContent.style.setProperty("opacity", 1);
				// navContent.classList.add("landing-page-nav")
			} else {
				//REFACTOR: Put this into a class
				collaspedMenuBtn.style.setProperty("display", "flex");
				navContent.style.setProperty("display", "flex");
				navContent.style.setProperty("flex-direction", "column");
				navContent.style.setProperty("position", "absolute");
				navContent.style.setProperty("transform", "translate(0, 0%)");
				navContent.style.setProperty("width", "100%");
				navContent.style.setProperty("top", "60px");
				navContent.style.setProperty("opacity", 1);
				navContent.style.setProperty(
					"transition",
					"all 0.6s ease-in-out"
				);
			};



			navBtns.forEach((navBtn) => {
				console.log("NAVBTN");
				//REFACTOR: Put this into a class ?

				let button = navBtn.firstChild;
				let droplist = navBtn.lastChild;
				navBtn.style.setProperty("width", "100%");
				button.style.setProperty("width", "100%");
				button.style.setProperty("padding", "10px");
				console.log({ button, droplist });
			});
			this.setState({ menuToggle: false });

		} else {
			//REFACTOR: Put this into a class
			collaspedMenuBtn.style.setProperty("display", "flex");
			navContent.style.setProperty("position", "absolute");
			navContent.style.setProperty("transform", "translate(0, -300%)");
			navContent.style.setProperty("opacity", 0);

			dropdownLists.forEach((dropdownList) => {
				dropdownList.style.setProperty("background", "");
				dropdownList.style.setProperty("width", "125px");
				dropdownList.style.setProperty("margin", "10px");
			});

=======

	componentDidMount() {
		const navContent = document.querySelector(".nav-content");
		const collaspedMenuBtn = document.querySelector(".collasped-menu-btn");

		if (this.props.isLandingPage) {
			this.setState({ isLandingPage: true });
			collaspedMenuBtn.style.setProperty("display", "flex");
			navContent.classList.remove("full-menu");
			navContent.classList.add("short-menu");
			navContent.classList.add("landing-nav");
			return;
		}

		window.addEventListener("scroll", this.toggleScrollTopBtn);

		window.scrollTo({
			top: 0,
			left: 0,
		});
		this.setNavLayout();

		if (this.state.isLandingPage === false)
			window.addEventListener("resize", this.setNavLayout);
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.toggleScrollTopBtn);
		window.removeEventListener("resize", this.setNavLayout);
		this.setState({ isLandingPage: false });
	}

	setNavLayout = () => {
		const navContent = document.querySelector(".nav-content");
		const collaspedMenuBtn = document.querySelector(".collasped-menu-btn");
		if (window.innerWidth <= 736) {
			collaspedMenuBtn.style.setProperty("display", "flex");
			navContent.classList.remove("full-menu");
			navContent.classList.add("short-menu");
		} else {
			collaspedMenuBtn.style.setProperty("display", "none");
			navContent.classList.remove("short-menu");
			navContent.classList.add("full-menu");
		}
	};

	//FIX: Short menu toggle display bug when resized

	showMenuButtons = () => {
		const navContent = document.querySelector(".nav-content");
		const navOverlay = document.querySelector(".nav-overlay");
		if (this.state.menuToggle) {
			navContent.classList.remove("hide");
			navContent.classList.add("show");
			navOverlay.classList.add("visible");
			this.setState({ menuToggle: false });
		} else {
			navContent.classList.remove("show");
			navContent.classList.add("hide");
			navOverlay.classList.remove("visible");
>>>>>>> parent of 4f9c2aef... Project restructured, Server created, Nodemailer Test
			this.setState({ menuToggle: true });
		}
	};

<<<<<<< HEAD
	toggleScrollTopBtn = (e) => {
		console.dir(window.scrollY);
		const scrollTopBtn = document.querySelector("div.scroll-top-btn");
		if (window.scrollY > window.innerHeight * 0.66) {
			scrollTopBtn.style.setProperty("opacity", 0.6);
=======
	toggleScrollTopBtn = () => {
		console.dir(window.scrollY);
		const scrollTopBtn = document.querySelector("div.scroll-top-btn");
		if (window.scrollY > window.innerHeight * 0.66) {
			scrollTopBtn.classList.add("active");
>>>>>>> parent of 4f9c2aef... Project restructured, Server created, Nodemailer Test
			scrollTopBtn.style.setProperty("visibility", "visible");
			scrollTopBtn.style.setProperty(
				"top",
				`${window.innerHeight - 110}px`
			);
<<<<<<< HEAD
			scrollTopBtn.style.setProperty("right", "20px");
		} else {
			scrollTopBtn.style.setProperty("opacity", 0);
=======
		} else {
>>>>>>> parent of 4f9c2aef... Project restructured, Server created, Nodemailer Test
			scrollTopBtn.style.setProperty("visibility", "hidden");
		}
	};

<<<<<<< HEAD

=======
>>>>>>> parent of 4f9c2aef... Project restructured, Server created, Nodemailer Test
	render() {
		const { menuToggle } = this.state;
		return (
			<nav className="nav">
				{console.log({ menuToggle })}
<<<<<<< HEAD
				<div className="nav-overlay"></div>

				{/* {console.log("NAV Props", courseData, projectData, uxData)} */}
				{/* <div className="dropdownBackground">
					<div className="arrow"></div>
				</div> */}
=======
				<div className="nav-overlay" onClick={this.showMenuButtons} />
>>>>>>> parent of 4f9c2aef... Project restructured, Server created, Nodemailer Test
				<div className="short-nav">
					<div className="logo-container">
						<Link to="/">
							<p className="logo-signature">Gideon Miles Oluku</p>
						</Link>
					</div>
					<div
						className="collasped-menu-btn"
						onClick={this.showMenuButtons}
					>
						{this.state.menuToggle ? (
							<img src={menu} />
						) : (
							<img src={closeMenu} />
						)}
					</div>
					<ul className="nav-content">
						<Link className="link lg-display" to="/projects">
							<li className="nav-item project nav-li">
								<a className="button" name="project">
									PROJECTS
								</a>
							</li>
						</Link>
						<Link className="link lg-display" to="/courses">
							<li className="nav-item courses nav-li">
								<a className="button" name="courses">
									COURSES
								</a>
							</li>
						</Link>
						{/* <Link className="link lg-display" to="/development">
							<li className="nav-item development nav-li">
								<a className="button" name="development">
									DEVELOPMENT
								</a>
								<ul className="dropdown-list about-me"></ul>
							</li>
						</Link> */}
						<Link className="link lg-display" to="/aboutme">
							<li className="nav-item about-me nav-li">
								<a className="button" name="about-me">
									ABOUT ME
								</a>
							</li>
						</Link>
						<Link className="link lg-display" to="/contact">
							<li className="nav-item about-me nav-li">
								<a className="button" name="about-me">
									CONTACT
								</a>
							</li>
						</Link>
					</ul>
					<div
						className="scroll-top-btn"
						onClick={() =>
							window.scrollTo({
								top: 0,
								left: 0,
								behavior: "smooth",
							})
						}
					>
						<img src={scrollTopBtnIcon} />
					</div>
				</div>
			</nav>
		);
	}
}

export default NavBar;
