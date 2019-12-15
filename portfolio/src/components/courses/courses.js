import React, { Component } from "react";
import NavBar from "../navbar/nav-bar";

class Courses extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	//FIX: Add Courses completed Page: JS 30, FreeCodeCamp, SoloLearn, CYF Challenges

	render() {
		return (
			<>
				<NavBar />
				<h1>Courses</h1>
			</>
		);
	}
}

export default Courses;
