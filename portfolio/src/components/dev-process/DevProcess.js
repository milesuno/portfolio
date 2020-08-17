import React, { Component } from 'react';
import Helmet from "react-helmet";
import NavBar from "../navbar/nav-bar";
import FooterNav from '../footer-nav/footer-nav';

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
                            <h2>Discovery</h2>
                            <h2>Brain Storming</h2>
                            <h2>Plan Review</h2>
                            <h2>Prototyping</h2>
                            <h2>Prototype Review</h2>
                            <h2>Development</h2>
                            <h2>Acceptance Review</h2>
                            <h2>Deployment</h2>
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
