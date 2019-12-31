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
				<Link to="/">
					<img src={""} />
				</Link>
				<ul className={"ul"}>
					<Link to="/projects">
						<li>PROJECTS</li>
					</Link>
					<Link to="/uxdesigns">
						<li>UX/UI DESIGNS</li>
					</Link>
					<Link to="/courses">
						<li>COURSES</li>
					</Link>
					<Link to="/aboutme">
						<li>ABOUT ME</li>
					</Link>
				</ul>
			</nav>
		);
	}
}

export default NavBar;
