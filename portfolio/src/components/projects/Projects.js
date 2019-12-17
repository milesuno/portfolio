import React, { Component } from "react";
import ThumbNail from "../thumbnail/thumbnail";
import LgThumbNail from "../lg-thumbnail/lg-thumbnail";
import NavBar from "../navbar/nav-bar";

import "../../style-sheets/portfolio.css";

import data from "../../data/fake-data.json";

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {
			//State holds all UX the data for the <ThumbNail /> component. This is passed as a Prop.
			selected: 0,
			dataFromThumbnail: 0,
			projects: data
		};
	}

	getData = data => {
		//Gets data on specified Thumbnail and sends data to be rendered as Lg-Thumbnail
		this.setState({ selected: 1, dataFromThumbnail: data });
	};

	handleCloseLgThumbnail = update => {
		console.log("from lg-thumbnail", update);
		this.setState({ selected: update });
	};

	render() {
		const { projects, selected, dataFromThumbnail } = this.state;
		return (
			<div className={"page-wrapper"}>
				<div className="page-width">
					<header>
						<NavBar />
					</header>
					{selected ? (
						<LgThumbNail
							dataFromThumbnail={dataFromThumbnail}
							closeLgThumbnail={this.handleCloseLgThumbnail}
						/>
					) : (
						<main className={"main-wrapper"}>
							<h1>Projects</h1>
							<h3>2019</h3>
							<section className={"elements-wrapper"}>
								{projects.map(project => (
									//data is exported before reaching ThumbNail as ThumbNail will accept data from multiple sources - therefore must be generic.
									<ThumbNail
										key={project.id}
										img={project.img}
										name={project.name}
										desc={project.desc}
										role={project.role}
										challenge={project.challenge}
										solution={project.solution}
										source={project.source}
										getData={this.getData}
										getData={this.getData}
									/>
								))}
							</section>
							<h3>2018</h3>
							<section className={"elements-wrapper"}>
								{projects.map(project => (
									//data is exported before reaching ThumbNail as ThumbNail will accept data from multiple sources - therefore must be generic.
									<ThumbNail
										key={project.id}
										img={project.img}
										name={project.name}
										desc={project.desc}
										role={project.role}
										challenge={project.challenge}
										solution={project.solution}
										source={project.source}
										getData={this.getData}
									/>
								))}
							</section>
						</main>
					)}
					<footer>
						<label>Soon Footer</label>
					</footer>
				</div>
			</div>
		);
	}
}

export default Projects;
