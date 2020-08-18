import React, { Component } from "react";
import Helmet from "react-helmet";
import NavBar from "../navbar/nav-bar";
import FooterNav from "../footer-nav/footer-nav";
import SocialMediaNav from "../social-media-nav/social-media-nav";
import CV from "../../data/Gideon Miles Oluku - cv6.pdf";


class ContactMe extends Component {
	state = {};
	render() {
		return (
			<>
				<Helmet>
					<title>Portfolio - Contact</title>
					<meta
						name="description"
						content="About me page, highlighting resume achievements and channels to contact me"
					/>
				</Helmet>
				<div className="page-wrapper">
					<div className="page-width">
						<header>
							<NavBar />
						</header>
						<main className="main-wrapper">
							<h1>Contact</h1>
							<h2>Additional Contact:</h2>
							<SocialMediaNav />
							<h2>Email:</h2>
							<p>Milesoluku@gmail.com</p>
							<h2>Enquiries:</h2>
							<form className="enquiries-form">
								<label>
									Name:
									<input type="text" />
								</label>
								<label>
									Subject:
									<select>
										<option>Option 1</option>
										<option>Option 2</option>
										<option>Option 3</option>
									</select>
								</label>
								<label>
									Message:
									<input type="text" />
								</label>
							</form>
							<a className="download" href={CV} target="#">
								<button>View CV</button>
							</a>{" "}
						</main>
						<footer>
							<FooterNav />
						</footer>
					</div>
				</div>
			</>
		);
	}
}

export default ContactMe;
