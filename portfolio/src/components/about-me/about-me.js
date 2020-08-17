import React, { Component } from "react";
import Helmet from "react-helmet";
import NavBar from "../navbar/nav-bar";
import CV from "../../data/Gideon Miles Oluku - cv6.pdf";
import img from "../../data/git-profile-img.png";
import "../../style-sheets/portfolio.css";
import "./about-me.css";
import FooterNav from "../footer-nav/footer-nav";

class AboutMe extends Component {
	render() {
		return (
			<>
				<Helmet>
					<title>Portfolio - About Me</title>
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
							<h1>About Me</h1>
							<div className="about-me-wrapper">
								<div className="about-me-profile-card-wrapper">
									<img className="about-me-img" src={img} />
									<a
										className="download"
										href={CV}
										target="#"
									>
										<button>View CV</button>
									</a>
									{/* <div className="social-nav-btns about-me">
										<SocialMediaNav />
									</div> */}
									{/* <ProfileCard /> */}
									<div className="about-me-bio">
										<p>
											I am a Web Developer with a
											background in Business Studies,
											Agile development and Full Stack
											Development.
										</p>
										<p>
											I have a passion for the creative
											process - planning, designing and
											prototyping. I am also fasinated
											with the underlaying Computer
											Science mechanics that drive the
											development of digital products.
											This led to developing my own
											projects{" "}
											<a
												href="https://www.barteranything.com"
												target="#"
											>
												(BarterAnything)
											</a>
											, and recruiting 2 additional
											developers.
										</p>
										<p>
											My passion for software development
											has led me to volunteer and teach at{" "}
											<a
												href="https://www.codeyourfuture.io"
												target="#"
											>
												Code Your Future
											</a>
											. I help to teach programming
											fundamentals on the weekends for
											disadvantaged groups - this is can
											be challenging but is very rewarding
											as students can often ask questions
											that you have to think deeply about
											- expanding both of our
											understanding of topic.
										</p>
									</div>
									{/* <div className="about-me-goals">
										<h2>Goals:</h2>
										<ul >
											<li className="goal">
												Join Productive Development Team
											</li>
											<li className="goal">Work as Tech Lead</li>
											<li className="goal">
												Combine my Business, Design and
												Technical Knowledge in products
											</li>
										</ul>
									</div> */}
									<div className="skills-wrapper">
										<div className="skills">
											<h2>Front End</h2>
											<ul className="skill-list">
												<li className="tech">
													<label>
														HTML
														<img src="#" />
													</label>
												</li>
												<li className="tech">
													<label>
														CSS
														<img src="#" />
													</label>
												</li>
												<li className="tech">
													<label>
														JavaScript
														<img src="#" />
													</label>
												</li>
											</ul>
										</div>
										<div className="skills">
											<h2>Back End</h2>
											<ul className="skill-list">
												<li className="tech">
													<label>
														NodeJS
														<img src="#" />
													</label>
												</li>
												<li className="tech">
													<label>
														MongoDB
														<img src="#" />
													</label>
												</li>
											</ul>
										</div>
										<div className="skills">
											<h2>Libraries</h2>
											<ul className="skill-list">
												<li className="tech">
													<label>
														React
														<img src="#" />
													</label>
												</li>
											</ul>
										</div>
										<div className="skills">
											<h2>Framework</h2>
											<ul className="skill-list">
												<li className="tech">
													<label>
														ExpressJS
														<img src="#" />
													</label>
												</li>
												<li className="tech">
													<label>
														React Native
														<img src="#" />
													</label>
												</li>
												<li className="tech">
													<label>
														Jest
														<img src="#" />
													</label>
												</li>
											</ul>
										</div>
										<div className="skills">
											<h2>Design</h2>
											<ul className="skill-list">
												<li className="tech">
													<label>
														Photoshop
														<img src="#" />
													</label>
												</li>
												<li className="tech">
													<label>
														Adobe Illustrator
														<img src="#" />
													</label>
												</li>
												<li className="tech">
													<label>
														Figma
														<img src="#" />
													</label>
												</li>
												<li className="tech">
													<label>
														Balsamiq
														<img src="#" />
													</label>
												</li>
											</ul>
										</div>
										<div className="skills">
											<h2>Methodology</h2>
											<ul className="skill-list">
												<li className="tech">
													<label>
														Agile
														<img src="#" />
													</label>
												</li>
												<li className="tech">
													<label>
														Lean Management
														<img src="#" />
													</label>
												</li>
												<li className="tech">
													<label>
														Test Driven Development
														<img src="#" />
													</label>{" "}
												</li>
											</ul>
										</div>
										<div className="skills">
											<h2>Tools</h2>
											<ul className="skill-list">
												<li className="tech">
													<label>
														Postman
														<img src="#" />
													</label>
												</li>
												<li className="tech">
													<label>
														Dev Tools
														<img src="#" />
													</label>
												</li>{" "}
												<li className="tech">
													<label>
														Git
														<img src="#" />
													</label>
												</li>
												<li className="tech">
													<label>
														Github
														<img src="#" />
													</label>
												</li>
												<li className="tech">
													<label>
														Trello
														<img src="#" />
													</label>
												</li>
												<li className="tech">
													<label>
														Slack
														<img src="#" />
													</label>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</main>
						<FooterNav isFooter={true} />
					</div>
				</div>
			</>
		);
	}
}

export default AboutMe;
