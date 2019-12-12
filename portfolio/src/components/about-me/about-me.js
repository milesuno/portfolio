import React, { Component } from "react";
import SocialMediaNav from "../social-media-nav/social-media-nav";
import NavBar from "../navbar/nav-bar";
import "./about-me.css";

class AboutMe extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="about-me-page-wrapper">
				<div className="page-width">
					<header>
						<NavBar />
					</header>
					<main className="about-me-wrapper">
						<h1>About Me</h1>
						<img
							className="about-me-img"
							src={
								"https://media.licdn.com/dms/image/C5603AQGIp06YBvaYaQ/profile-displayphoto-shrink_200_200/0?e=1577923200&v=beta&t=e_m9Y5UXjZr9h0NZ1YVOEPcgaX1wWuWfUZveoRbhpRA"
							}
						/>
						<p>
							"At vero eos et accusamus et iusto odio dignissimos
							ducimus qui blanditiis praesentium voluptatum
							deleniti atque corrupti quos dolores et quas
							molestias excepturi sint occaecati cupiditate non
							provident, similique sunt in culpa qui officia
							deserunt mollitia animi, id est laborum et dolorum
							fuga. Et harum quidem rerum facilis est et expedita
							distinctio. Nam libero tempore, cum soluta nobis est
							eligendi optio cumque nihil impedit quo minus id
							quod maxime placeat facere possimus, omnis voluptas
							assumenda est, omnis dolor repellendus. Temporibus
							autem quibusdam et aut officiis debitis aut rerum
							necessitatibus saepe eveniet ut et voluptates
							repudiandae sint et molestiae non recusandae. Itaque
							earum rerum hic tenetur a sapiente delectus, ut aut
							reiciendis voluptatibus maiores alias consequatur
							aut perferendis doloribus asperiores repellat."
						</p>
					</main>
					<footer>
						<SocialMediaNav />
					</footer>
				</div>
			</div>
		);
	}
}

export default AboutMe;
