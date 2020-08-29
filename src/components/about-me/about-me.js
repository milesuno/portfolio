import React, { Component } from "react";
import Helmet from "react-helmet";
import NavBar from "../navbar/nav-bar";
import CV from "../../data/Gideon Miles Oluku - cv6.pdf";
import img from "../../data/git-profile-img.png";
import "../../style-sheets/portfolio.css";
import "./about-me.css";
import FooterNav from "../footer-nav/footer-nav";
import skillImages from "../../data/skill-images";

class AboutMe extends Component {
	createDOMSkillFromMap = (value, key) => {
		console.log(value, key);
		return `<li className="tech">
				<label>
					{key}
					<img src={value} />
				</label>
			</li>`;
	};
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
										<button className="button">
											View CV
										</button>
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
												{console.log(skillImages.html)}
												<li className="tech">
													<label for="html">
														HTML
													</label>
													<img
														src={skillImages.html}
														id="html"
													/>
												</li>
												<li className="tech">
													<label for="css">CSS</label>
													<img
														src={skillImages.css}
														id="css"
													/>
												</li>
												<li className="tech">
													<label for="js">
														JavaScript
													</label>
													<img
														src={skillImages.js}
														id="js"
													/>
												</li>
											</ul>
										</div>
										<div className="skills">
											<h2>Back End</h2>
											<ul className="skill-list">
												<li className="tech">
													<label for="nodejs">
														NodeJS
													</label>
													<img
														src={skillImages.nodeJs}
														id="nodejs"
													/>
												</li>
												<li className="tech">
													<label for="mongodb">
														MongoDB
													</label>
													<img
														src={
															skillImages.mongoDB
														}
														id="mongodb"
													/>
												</li>
											</ul>
										</div>
										<div className="skills">
											<h2>Libraries/Frameworks</h2>
											<ul className="skill-list">
												<li className="tech">
													<label for="react">
														React
													</label>
													<img
														src={skillImages.react}
														id="react"
													/>
												</li>
											</ul>
											<ul className="skill-list">
												<li className="tech">
													<label for="express">
														ExpressJS
													</label>
													<img
														src={
															skillImages.express
														}
														id="express"
													/>
												</li>
												<li className="tech">
													<label for="reactn">
														React Native
													</label>
													<img
														src={
															skillImages.reactNative
														}
														id="reactn"
													/>
												</li>
											</ul>
										</div>
										<div className="skills">
											<h2>Testing</h2>
											<ul className="skill-list">
												<li className="tech">
													<label for="jest">
														Enzyme
													</label>
													<img
														src={skillImages.jest}
														id="jest"
													/>
												</li>
												<li className="tech">
													<label for="jest">
														Jest
													</label>
													<img
														src={skillImages.jest}
														id="jest"
													/>
												</li>
											</ul>
										</div>
										<div className="skills">
											<h2>Design</h2>
											<ul className="skill-list">
												<li className="tech">
													<label for="photoshop">
														Photoshop
													</label>
													<img
														src={
															skillImages.photoshop
														}
														id="photoshop"
													/>
												</li>
												<li className="tech">
													<label for="adobe">
														Adobe Illustrator
													</label>
													<img
														src={
															skillImages.adobeIllistrator
														}
														id="adobe"
													/>
												</li>
												<li className="tech">
													<label for="figma">
														Figma
													</label>
													<img
														src={skillImages.figma}
														id="figma"
													/>
												</li>
												<li className="tech">
													<label for="balsamiq">
														Balsamiq
													</label>
													<img
														src={
															skillImages.balsamiq
														}
														id="balsamiq"
													/>
												</li>
											</ul>
										</div>
										<div className="skills">
											<h2>Methodology</h2>
											<ul className="skill-list">
												<li className="tech">
													<label for="agile">
														Agile
													</label>
													<img
														src={skillImages.agile}
														id="agile"
													/>
												</li>
												<li className="tech">
													<label for="lean">
														Lean Management
													</label>
													<img
														src={skillImages.lean}
														id="lean"
													/>
												</li>
												<li className="tech">
													<label for="tdd">
														Test Driven Development
													</label>
													<img
														src={skillImages.tdd}
														id="tdd"
													/>
												</li>
											</ul>
										</div>
										<div className="skills">
											<h2>Tools</h2>
											<ul className="skill-list">
												<li className="tech">
													<label for="npm">NPM</label>
													<img
														src={skillImages.npm}
														id="npm"
													/>
												</li>
												<li className="tech">
													<label for="postman">
														Postman
													</label>
													<img
														src={
															skillImages.postman
														}
														id="postman"
													/>
												</li>
												<li className="tech">
													<label for="dev-tools">
														Dev Tools
													</label>
													<img
														src={
															skillImages.devTools
														}
														id="dev-tools"
													/>
												</li>
												<li className="tech">
													<label for="git">Git</label>
													<img
														src={skillImages.git}
														id="git"
													/>
												</li>
												<li className="tech">
													<label for="github">
														Github
													</label>
													<img
														src={skillImages.github}
														id="github"
													/>
												</li>
												<li className="tech">
													<label for="trello">
														Trello
													</label>
													<img
														src={skillImages.trello}
														id="trello"
													/>
												</li>
												<li className="tech">
													<label for="slack">
														Slack
													</label>
													<img
														src={skillImages.slack}
														id="slack"
													/>
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
