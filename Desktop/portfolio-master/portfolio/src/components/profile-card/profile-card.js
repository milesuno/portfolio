import React, { Component } from "react";
import SocialMediaNav from "../social-media-nav/social-media-nav";
import "./profile-card.css";

class ProfileCard extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="profile-card">
				<img
					className="about-me-img"
					src={
						"https://avatars2.githubusercontent.com/u/45498063?s=460&u=ccf1d781a20680c9787cdae4bdaba9a1f540b02f&v="
					}
				/>
				<h1>Gideon Miles Oluku</h1>
				<SocialMediaNav />
			</div>
		);
	}
}

export default ProfileCard;
