import React, { Component } from "react";
import { Link } from "react-router-dom";

class PageNotFound extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<>
				Page Not Found
				<Link to="/">Return Home</Link>
			</>
		);
	}
}

export default PageNotFound;
