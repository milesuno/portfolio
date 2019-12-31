import React, { Component } from "react";

class SocialMediaNav extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<nav>
				<p>Social Media</p>
				<label>
					Email
					<img src={"#"} />
				</label>
				<label>
					LinkedIn
					<img src={"#"} />
				</label>
				<label>
					YouTube
					<img src={"#"} />
				</label>
			</nav>
		);
	}
}

export default SocialMediaNav;
