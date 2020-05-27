import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./nav-bar.css";
import courseData from "../../data/course-data.json";
import projectData from "../../data/project-data.json";
import uxData from "../../data/ux-data.json";
import socialMediaData from "../../data/social-media-data.json";

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			course: courseData,
			project: projectData,
			ux: uxData,
			socialMedia: socialMediaData,
		};
	}
	//Dropdown list should be render below 450px
	//List items should be renders but set to display: none
	//Onhover the display should be set to display block
	//Width of ul wrapping all li should be used to set dropdown bg
	//offSet postioning should be used to set the x axis for dropdownBackground

	//FIX: why does nav buttons change when dropdown is revealed?
	componentDidMount() {
		const navBtns = document.querySelectorAll("li.nav-item");
		console.log({ navBtns });

		console.log({ navBtns });

		navBtns.forEach((navBtn) => {
			navBtn.addEventListener("mouseenter", this.handleMouseEnter);
			navBtn.addEventListener("mouseleave", this.handleMouseLeave);
		});
	}

	handleMouseEnter = (e) => {
		console.log("Enter");
		if (!e.target.children[0].name) return;
		const nav = document.querySelector(".nav");
		const dropdownList = document.querySelector(
			`.dropdown-list.${e.target.children[0].name}`
		);
		const dropdownBackground = document.querySelector(
			".dropdownBackground"
		);

		//Make dropdown visible on enter
		dropdownList.style.display = "flex";
		dropdownList.style.flexDirection = "column";

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

		console.log({ dropdownList, dropdownCoords, dropdownBackground });
		console.log(dropdownBackground.style.left);
	};

	handleMouseLeave = (e) => {
		console.log("Leave");
		if (!e.target.children[0].name) return;

		const dropdownList = document.querySelector(
			`.dropdown-list.${e.target.children[0].name}`
		);
		const dropdownBackground = document.querySelector(
			".dropdownBackground"
		);
		dropdownList.style.display = "none";
		dropdownBackground.style.setProperty("opacity", 0);

		// dropdownList.style.flexDirection = "column";
	};

	refreshPage = () => {};
	render() {
		return (
			<nav className="nav">
				{/* {console.log("NAV Props", courseData, projectData, uxData)} */}
				<div className="dropdownBackground">
					<div className="arrow"></div>
				</div>
				<div className="logo-container">
					<Link to="/">
						<img src="#" />
					</Link>
					<p>Gideon Miles Oluku</p>
				</div>
				<ul className="nav-content">
					<Link to="/projects">
						<li className="nav-item">
							<a className="button" name="project">
								PROJECTS
							</a>
							<ul className="dropdown-list project">
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
					<Link to="/uxdesigns">
						<li className="nav-item">
							<a className="button" name="ux">
								UX/UI DESIGNS
							</a>
							<ul className="dropdown-list ux">
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
					<Link to="/courses">
						<li className="nav-item">
							<a className="button" name="courses">
								COURSES
							</a>
							<ul className="dropdown-list courses">
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
					<Link to="/aboutme">
						<li className="nav-item">
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
			</nav>
		);
	}
}

export default NavBar;
