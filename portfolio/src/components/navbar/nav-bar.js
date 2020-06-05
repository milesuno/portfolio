import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./nav-bar.css";
import courseData from "../../data/course-data.json";
import projectData from "../../data/project-data.json";
import uxData from "../../data/ux-data.json";
import socialMediaData from "../../data/social-media-data.json";
import menu from "../../landing-video/icons8-menu-squared-96.png";
import closeMenu from "../../landing-video/icons8-close-window-96.png";
import NavbarMenu from "../navbar-menu/navbar-menu";

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			course: courseData,
			project: projectData,
			ux: uxData,
			socialMedia: socialMediaData,
			menuToggle: true,
		};
	}
	//Dropdown list should be render below 450px
	//List items should be renders but set to display: none
	//Onhover the display should be set to display block
	//Width of ul wrapping all li should be used to set dropdown bg
	//offSet postioning should be used to set the x axis for dropdownBackground

	//FIX: display menu above 736px -> display: flex; flex-direction: row;
	componentDidMount() {
		const navBtns = document.querySelectorAll("li.nav-item");
		// const correctLeave = document.querySelectorAll("li.nav-item");

		navBtns.forEach((navBtn) => {
			console.dir(navBtn)
			navBtn.addEventListener("mouseenter", this.handleMouseEnter, true);
			navBtn.addEventListener("mouseleave", this.handleMouseLeave, true);
		});
	}

	handleMouseEnter = (e, clickEvent = false) => {
		console.log("Enter", e.target);
		if (!e.target.name) return;
		const nav = document.querySelector(".nav");
		const navBtns = document.querySelectorAll("li.nav-item");
		const allDropdownList = document.querySelectorAll(`.dropdown-list`);
		const dropdownList = document.querySelector(
			`.dropdown-list.${e.target.name}`
		);
		const dropdownBackground = document.querySelector(
			".dropdownBackground"
		);

		//Make dropdown visible on enter
		dropdownList.style.setProperty("display", "flex");
		dropdownList.style.setProperty("flex-direction", "column");

		//coords can't be access till it is displayed
		let dropdownCoords = dropdownList.getBoundingClientRect();
		let navCoords = nav.getBoundingClientRect();

		//Adjust dropdown BG to match dropdown list measurements
		dropdownBackground.style.setProperty(
			"height",
			`${dropdownCoords.height}px`
		);
		dropdownBackground.style.setProperty(
			"width",
			`${dropdownCoords.width}px`
		);
		dropdownBackground.style.setProperty(
			"top",
			`${dropdownCoords.y - navCoords.y}px`
		);
		dropdownBackground.style.setProperty(
			"left",
			`${dropdownCoords.x - navCoords.x}px`
		);
		dropdownBackground.style.setProperty("opacity", 1);

		// Move dropdown BG to match dropdown list

		if (clickEvent) {
			//identify nav-item in array with classname and event target name
			dropdownBackground.style.setProperty("display", "none");

			let btnFilter = [...navBtns].filter(
				(navBtn) => navBtn.className === `nav-item ${e.target.name}`
			);
			let correctBtn = btnFilter[0];
			correctBtn.removeEventListener("click", this.handleMouseEnter);
			correctBtn.addEventListener("click", (e) =>
				this.handleMouseLeave(e, true)
			);
		}

		console.log({
			dropdownList,
			allDropdownList,
			dropdownCoords,
			dropdownBackground,
		});
	};

	handleMouseLeave = (e, clickEvent = false) => {
		if (!e.target.name) return;
		console.log("Leave", e.target);
		const navBtns = document.querySelectorAll("li.nav-item");

		const dropdownList = document.querySelector(
			`.dropdown-list.${e.target.name}`
		);
		const dropdownBackground = document.querySelector(
			".dropdownBackground"
		);

		dropdownList.style.setProperty("display", "none");
		dropdownBackground.style.setProperty("opacity", 0);

		if (clickEvent) {
			let btnFilter = [...navBtns].filter(
				(navBtn) => navBtn.className === `nav-item ${e.target.name}`
			);
			let correctBtn = btnFilter[0];
			correctBtn.removeEventListener("click", this.handleMouseLeave);
			correctBtn.addEventListener("click", (e) =>
				this.handleMouseEnter(e, true)
			);
		}
		console.log({dropdownList})
		// dropdownList.style.flexDirection = "column";
	};

	showMenuButtons = () => {
		//FIX: changing the navBtns to a dropdown list should also change the mouseOver events to onClick event
		//SOLUTION: Work out which element is triggering the event so make e.target the same OR use element through quertselector
		const navContent = document.querySelector(".nav-content");
		const navBtns = document.querySelectorAll("li.nav-item");
		const dropdownLists = document.querySelectorAll(".dropdown-list");
		const shortMenuCoords = document
			.querySelector(".short-nav")
			.getBoundingClientRect();
		// const menuBtnLinks = document.querySelectorAll("a.link.lg-display");
		// menuBtnLinks.forEach((menuBtn) => (menuBtn.href = ""));

		// console.log({ shortMenuCoords, menuBtnLinks });

		console.log({
			// collaspedMenuBtn,
			navBtns,
			navContent,
			// navBar,
			dropdownLists,
		});

		if (this.state.menuToggle) {
			// navContent.style.setProperty("top", `${shortMenuCoords.bottom}px`);

			dropdownLists.forEach((dropdownList) => {
				dropdownList.style.setProperty("background", "white");
				dropdownList.style.setProperty("width", "100%");
				dropdownList.style.setProperty("margin", "0px");
			});

			navBtns.forEach((navBtn) => {
				console.log("NAVBTN");
				console.dir(navBtn);

				// let button = navBtn.firstChild;
				// button.style.setProperty("width", "100%");
				// button.style.setProperty("padding", "10px");
				navBtn.removeEventListener(
					"mouseenter",
					this.handleMouseEnter,
					true
				);
				navBtn.removeEventListener(
					"mouseleave",
					this.handleMouseLeave,
					true
				);

				navBtn.addEventListener("click", (e) =>
					this.handleMouseEnter(e, true)
				);
			});
			this.setState({ menuToggle: false });
		} else {
			dropdownLists.forEach((dropdownList) => {
				dropdownList.style.setProperty("background", "");
				dropdownList.style.setProperty("width", "125px");
				dropdownList.style.setProperty("margin", "10px");
			});

			navBtns.forEach((navBtn) => {
				console.log("Re add mouseenter", navBtn)
				navBtn.removeEventListener("click", (e) =>
					this.handleMouseEnter(e)
				);
				navBtn.removeEventListener("click", (e) =>
					this.handleMouseEnter(e)
				);

				navBtn.addEventListener(
					"mouseenter",
					this.handleMouseEnter,
					true
				);
				navBtn.addEventListener(
					"mouseleave",
					this.handleMouseEnter,
					true
				);
			});
			this.setState({ menuToggle: true });
		}

		// if (this.state.menuToggle) navContent.style.setProperty("opacity", "1");
	};

	render() {
		const { menuToggle } = this.state;
		return (
			<nav className="nav">
				{console.log({ menuToggle })}

				{/* {console.log("NAV Props", courseData, projectData, uxData)} */}
				<div className="dropdownBackground">
					<div className="arrow"></div>
				</div>
				<div className="short-nav">
					<div className="logo-container">
						<Link to="/">
							<img src="#" />
						</Link>
						<p>Gideon Miles Oluku</p>
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
					<NavbarMenu
						projectData={this.state.project}
						uxData={this.state.ux}
						courseData={this.state.course}
						socialMediaData={this.state.socialMedia}
						menuToggle={this.state.menuToggle}
					/>
				</div>
			</nav>
		);
	}
}

export default NavBar;
