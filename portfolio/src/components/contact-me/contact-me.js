import React, { Component } from "react";
import Helmet from "react-helmet";
import NavBar from "../navbar/nav-bar";
import FooterNav from "../footer-nav/footer-nav";
import SocialMediaNav from "../social-media-nav/social-media-nav";
import CV from "../../data/Gideon Miles Oluku - cv6.pdf";
import "./contact-me.css";

class ContactMe extends Component {
<<<<<<< HEAD:portfolio/client/src/components/contact-me/contact-me.js
	state = {
		firstName: "",
		lastName: "",
		email: "",
		subject: "",
		text: "",
	};

	setFormData = (e) => {
		e.preventDefault();
		const form = document.querySelector(".enquiries-form");
		const firstName = document.querySelector(".first");
		const lastName = document.querySelector(".last");
		const email = document.querySelector(".email");
		const subject = document.querySelector(".subject");
		const text = document.querySelector(".text");

		console.log({ firstName, lastName, email, subject, text });

		const data = {
			firstName: firstName.value,
			lastName: lastName.value,
			email: email.value,
			subject: subject.value,
			text: text.value,
		};

		form.reset();
		this.submitForm(data);
	};

	submitForm = (data) => {
		const data2 = JSON.stringify(data);
		fetch("https://portfolio-api.glitch.me/contact/mail", {
			method: "POST",

			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("Success:", data);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
		// console.log( {data2} );
	};

=======
	state = {};
>>>>>>> parent of 4f9c2aef... Project restructured, Server created, Nodemailer Test:portfolio/src/components/contact-me/contact-me.js
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
