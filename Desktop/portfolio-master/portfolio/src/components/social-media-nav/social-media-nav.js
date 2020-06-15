import React, { Component } from "react";
import data from "../../data/social-media-data.json";
import "./social-media-nav.css";

class SocialMediaNav extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		console.log({ data });
		return (
			<nav>
				{/* <p>Social Media</p> */}
				<div className="social-nav-btns">
					<a href="mailto:milesoluku@gmail.com?subject=Enquires">
						<label>
							Email
							<img src="https://img.icons8.com/ios-glyphs/30/000000/gmail.png" />
						</label>
					</a>
					<a href="">
						<label>
							LinkedIn
							<img src="https://img.icons8.com/ios-glyphs/30/000000/linkedin.png" />
						</label>
					</a>
					<a href="">
						<label>
							YouTube
							<img src="https://img.icons8.com/ios-glyphs/30/000000/youtube-play.png" />
						</label>
					</a>
					<a href="https://github.com/milesuno">
						<label>
							Github
							<img src="https://img.icons8.com/ios-glyphs/30/000000/github.png" />
						</label>
					</a>
				</div>
			</nav>
		);
	}
}

export default SocialMediaNav;
