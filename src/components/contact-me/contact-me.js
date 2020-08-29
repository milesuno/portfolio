import React, { Component } from "react";
import Helmet from "react-helmet";
import NavBar from "../navbar/nav-bar";
import FooterNav from "../footer-nav/footer-nav";
import SocialMediaNav from "../social-media-nav/social-media-nav";
import CV from "../../data/Gideon Miles Oluku - cv6.pdf";
import "./contact-me.css";
import ContactForm from "../contact-form/contact-form";

class ContactMe extends Component {

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
								<ContactForm />
							</div>
						</main>
						<footer>
							<FooterNav isFooter={true}/>
						</footer>
					</div>
				</div>
			</>
		);
	}
}

export default ContactMe;
