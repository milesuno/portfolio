import React, { Component } from "react";
import Helmet from "react-helmet";
import NavBar from "../../elements/navbar/nav-bar";
import FooterNav from "../../elements/footer-nav/footer-nav";
import "./dev-process.css";

class DevProcess extends Component {
	state = {};
	render() {
		return (
			<>
				<Helmet>
					<title>Portfolio - Development Process</title>
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
							<h1>Development Process</h1>
							<section className="discovery">
								<h2>Discovery</h2>
								<div className="discovery-content">
									<div className="discovery-img">
										<img src="#" />
									</div>
									<div className="discovery-text">
										<h3>Project Objectives</h3>
										<p>
											This stage is where I explore the
											needs of the client to determine
											what outcome they want from
											themselves or their customers. I
											also probe for information from a
											technical perceptive to guide
											non-technical clients.
										</p>
										<h3>Project Branding</h3>
										<p>
											This stage is where I explore the
											clients ideas of branding and theme
											of project. If the client does not
											have ideas I provide some examples.
										</p>
										<h3>Existing Examples</h3>
										<p>
											This is the stage where I collect
											any existing examples of design or
											functionality examples to be
											considered while developing the
											current project
										</p>
									</div>
								</div>
							</section>
							<section className="planning">
								<h2>Planning</h2>
								<div className="planning-content">
									<div className="planning-text">
										<h3>Mood Board</h3>
										<p>
											This documment is produced to
											capture all the projecet branding
											and examples provided by the client.
											This is then used to visualise
											design colors and themes.
										</p>
										<h3>Color Scheme</h3>
										<p>
											This document is created to visual
											the colour themes found throughout
											the discovery and mood boarding
											process.
										</p>
										<h3>Project Scoping</h3>
										<p>
											This document is produced to
											highlight all the work that the
											client wants produced
										</p>
									</div>
									<div className="planning-img">
										<img src="#" />
									</div>
								</div>
							</section>
							<section className="review">
								<h2>Plan Review</h2>
								<p>
									This stage is vital before beginning work to
									clarify the scope captures everything they
									want produced
								</p>
							</section>
							<section className="prototyping">
								<h2>Prototyping</h2>
								<div className="prototyping-content">
									<div className="prototyping-img">
										<img src="#" />
									</div>
									<div className="prototyping-text">
										<h3>Wireframing</h3>
										<p>MVP</p>
										<p>Project Timeline</p>
									</div>
								</div>
							</section>
							<section className="review">
								<h2>Prototype Review</h2>
							</section>
							<section className="development">
								<h2>Development</h2>
								<div className="development-content">
									<div className="development-text">
										<p>Sprints</p>
										<p>Unit testing</p>
									</div>
									<div className="development-img">
										<img src="#" />
									</div>
								</div>
							</section>
							<section className="review">
								<h2>Acceptance Review</h2>
							</section>
							<section className="deployment">
								<h2>Deployment</h2>
							</section>
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

export default DevProcess;
