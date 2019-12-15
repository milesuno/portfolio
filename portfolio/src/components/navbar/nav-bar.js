import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./nav-bar.css";

class NavBar extends Component {
	constructor(props) {
		super(props);
	}
	//Dropdown list should be render below 450px

	render() {
		return (
			<nav className={"nav"}>
				<img src={"#"} />
				<ul className={"ul"}>
					<Link to="/uxdesigns">
						<li>UX/UI Designs</li>
					</Link>
					<Link to="/projects">
						<li>Projects</li>
					</Link>
					<Link to="/courses">
						<li>Courses</li>
					</Link>
					<Link to="/aboutme">
						<li>About Me</li>
					</Link>
				</ul>
			</nav>
		);
	}
}

export default NavBar;
