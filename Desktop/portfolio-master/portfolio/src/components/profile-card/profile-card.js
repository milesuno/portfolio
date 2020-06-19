import React, { Component } from "react";
import SocialMediaNav from "../social-media-nav/social-media-nav";
import img from "../../data/git-profile-img.png";
import "./profile-card.css";

class ProfileCard extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="profile-card">
				<img className="about-me-img" src={img} />
				<h1>Gideon Miles Oluku</h1>
				<SocialMediaNav />
			</div>
		);
	}
}

export default ProfileCard;
