import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./page-not-found.css";

class PageNotFound extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<>
				<div className="landing-page-wrapper">
                    <main className="landing-main-wrapper">

					<div className="pnf-wrapper">
						<div className="pnf-covering-block">
							<div className="cursor"></div>
						</div>
						<p className="pnf-message">Page Not Found</p>
					</div>
					<Link to="/">Return Home</Link>
                    </main>
				</div>
			</>
		);
	}
}

export default PageNotFound;
