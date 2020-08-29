import React, { Component } from "react";
import Helmet from "react-helmet";
import NavBar from "../navbar/nav-bar";
import FooterNav from "../footer-nav/footer-nav";
import SocialMediaNav from "../social-media-nav/social-media-nav";
import CV from "../../data/Gideon Miles Oluku - cv6.pdf";
import "./contact-me.css";

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
							<div className="contact-me-wrapper">
								<div className="additional-contact-wrapper">
									<div className="additional-contact-content">
										<h2>Additional Contact:</h2>
										<SocialMediaNav />
										<h2>Email:</h2>
										<p>Milesoluku@gmail.com</p>
									</div>
									<a
										className="download"
										href={CV}
										target="#"
									>
										<button className="button">
											View CV
										</button>
									</a>
								</div>
								<div className="enquiries-wrapper">
									<form className="enquiries-form">
										<div className="enquiries-content">
											<h2>Enquiries:</h2>
											<span className="name-wrapper">
												<input
													type="text"
													placeholder="First Name"
													className="first"
												/>
												<input
													type="text"
													placeholder="Last Name"
													className="last"
												/>
											</span>
											<span className="subject-wrapper">
												<select className="subject">
													<option disabled>
														Select a subject
													</option>
													<option>Design</option>
													<option>
														Developement
													</option>
													<option>
														Prooject Management
													</option>
													<option>Service Enquiry</option>
													<option>Other</option>
												</select>
											</span>
											<span className="message-wrapper">
												<textarea
													cols="50"
													rows="10"
													type="text"
													className="message"
													placeholder="Enter message"
												/>
											</span>
										</div>
										<button className="button">
											Submit
										</button>
									</form>
								</div>
							</div>
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
