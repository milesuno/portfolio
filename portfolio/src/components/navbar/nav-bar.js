import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./nav-bar.css";
import courseData from "../../data/course-data.json";
import projectData from "../../data/project-data.json";
import uxData from "../../data/ux-data.json";
import socialMediaData from "../../data/social-media-data.json";
import menu from "../../landing-video/icons8-menu-squared-96.png";
import closeMenu from "../../landing-video/icons8-close-window-96.png";

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

		navBtns.forEach((navBtn) => {
			console.dir(navBtn);
			navBtn.addEventListener("mouseenter", this.handleMouseEnter);
			navBtn.addEventListener("mouseleave", this.handleMouseLeave);
		});
	}

	handleMouseEnter = (e, clickEvent = false) => {
		console.log("Enter", e.target);
		if (!e.target.children[0].name) return;
		const nav = document.querySelector(".nav");
		const navBtns = document.querySelectorAll("li.nav-item");
		const allDropdownList = document.querySelectorAll(`.dropdown-list`);
		const dropdownList = document.querySelector(
			`.dropdown-list.${e.target.children[0].name}`
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
		if (!e.target.children[0].name) return;
		console.log("Leave", e.target);
		const navBtns = document.querySelectorAll("li.nav-item");

		const dropdownList = document.querySelector(
			`.dropdown-list.${e.target.children[0].name}`
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
		console.log({ dropdownList });
		// dropdownList.style.flexDirection = "column";
	};

	handleMouseClick = (e) => {
		//use target to set display of li.items
		e.preventDefault();
		console.log("Click Event", e.target);

		const dropdownList = document.querySelector(
			`.dropdown-list.${e.target.name}`
		);

		console.log({ dropdownList });

		if (!this.state.menuToggle) {
			console.log("Display: flex");
			dropdownList.style.setProperty("display", "flex");
			dropdownList.style.setProperty("flex-direction", "column");
		} else {
			console.log("Display: none");
			dropdownList.style.setProperty("display", "none");
		}

		this.setState({ menuToggle: !this.state.menuToggle });
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
		const collaspedMenuBtn = document.querySelector(".collasped-menu-btn");
		const linkBtns = document.querySelectorAll(".link");
		// const menuBtnLinks = document.querySelectorAll("a.link.lg-display");
		// menuBtnLinks.forEach((menuBtn) => (menuBtn.href = ""));

		// console.log({ shortMenuCoords, menuBtnLinks });

		console.log({
			collaspedMenuBtn,
			navBtns,
			navContent,
			linkBtns,
			dropdownLists,
		});

		linkBtns.forEach((btn) => (btn.href = ""));
		if (this.state.menuToggle) {
			collaspedMenuBtn.style.setProperty("display", "flex");
			navContent.style.setProperty("display", "flex");
			navContent.style.setProperty("flex-direction", "column");
			navContent.style.setProperty("position", "absolute");
			navContent.style.setProperty("transform", "translate(0, 0%)");
			navContent.style.setProperty("width", "100%");
			navContent.style.setProperty("top", "60px");
			navContent.style.setProperty("opacity", 1);
			// navContent.style.setProperty("top", `${shortMenuCoords.bottom}px`);

			dropdownLists.forEach((dropdownList) => {
				dropdownList.style.setProperty("background", "white");
				dropdownList.style.setProperty("width", "100%");
				dropdownList.style.setProperty("margin", "0px");
			});

			navBtns.forEach((navBtn) => {
				console.log("NAVBTN");
				let button = navBtn.firstChild;
				button.style.setProperty("width", "100%");
				button.style.setProperty("padding", "10px");
				navBtn.removeEventListener("mouseenter", this.handleMouseEnter);
				navBtn.removeEventListener("mouseleave", this.handleMouseLeave);

				navBtn.addEventListener("click", this.handleMouseClick);
				console.log({ button });
			});
			this.setState({ menuToggle: false });
		} else {
			collaspedMenuBtn.style.setProperty("display", "flex");
			navContent.style.setProperty("display", "none");

			// navContent.style.setProperty("flex-direction", "row");
			// navContent.style.setProperty("position", "relative");

			// navContent.style.setProperty("transform", "translate(0, 0%)");

			dropdownLists.forEach((dropdownList) => {
				dropdownList.style.setProperty("background", "");
				dropdownList.style.setProperty("width", "125px");
				dropdownList.style.setProperty("margin", "10px");
			});

			this.setState({ menuToggle: true });
		}
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
					<ul className="nav-content">
						<Link className="link lg-display" to="/projects">
							<li className="nav-item project">
								<a className="button" name="project">
									PROJECTS
								</a>
								<ul className="dropdown-list project">
									<li className="short-nav-all-items">
										<Link to={`/projects`}>
											All Projects
										</Link>
									</li>
									{
										/*Loop through all projects and render a list of these items as <li>*/
										projectData.map((project) => {
											// console.log(project);
											return (
												<li className="dropdown-item">
													<Link
														to={`/projects/${project.id}`}
													>
														{project.name}
													</Link>
												</li>
											);
										})
									}
								</ul>
							</li>
						</Link>
						<Link className="link lg-display" to="/uxdesigns">
							<li className="nav-item ux">
								<a className="button" name="ux">
									UX/UI DESIGNS
								</a>
								<ul className="dropdown-list ux">
									<li className="short-nav-all-items">
										<Link to={`/uxdesigns`}>
											All UX designs
										</Link>
									</li>
									{
										/*Loop through all projects and render a list of these items as <li>*/
										uxData.map((ux) => {
											// console.log(ux);
											return (
												<li className="dropdown-item">
													<Link
														to={`/uxdesigns/${ux.id}`}
													>
														{ux.name}
													</Link>
												</li>
											);
										})
									}
								</ul>
							</li>
						</Link>
						<Link className="link lg-display" to="/courses">
							<li className="nav-item courses">
								<a className="button" name="courses">
									COURSES
								</a>
								<ul className="dropdown-list courses">
									<li className="dropdown-item">
										<Link to={`/courses`}>All Courses</Link>
									</li>
									{
										/*Loop through all projects and render a list of these items as <li>*/
										courseData.map((course) => {
											// console.log(course);
											return (
												<li className="dropdown-item">
													<Link
														to={`/courses/${course.id}`}
													>
														{course.name}
													</Link>
												</li>
											);
										})
									}
								</ul>
							</li>
						</Link>
						<Link className="link lg-display" to="/aboutme">
							<li className="nav-item about-me">
								<a className="button" name="about-me">
									ABOUT ME
								</a>
								<ul className="dropdown-list about-me">
									{socialMediaData.map((media) => {
										// console.log(course);
										return (
											<li className="dropdown-item">
												<a>{media.medium}</a>
											</li>
										);
									})}
								</ul>
							</li>
						</Link>
					</ul>
				</div>
			</nav>
		);
	}
}

export default NavBar;
