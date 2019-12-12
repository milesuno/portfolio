import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./nav-bar.css";

class NavBar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<nav className={"nav"}>
				<img src={"#"} />
				<ul className={"ul"}>
					<Link to="/uxdesigns">
						<li>UX/UI Design</li>
					</Link>
					<Link to="/projects">
						<li>Project</li>
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
