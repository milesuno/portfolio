import React, { Component } from "react";
import data from "../../data/social-media-data.json";

class SocialMediaNav extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		console.log({data})
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
