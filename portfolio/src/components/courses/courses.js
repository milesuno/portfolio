import React, { Component } from "react";
import NavBar from "../navbar/nav-bar";
import ThumbNail from "../thumbnail/thumbnail";
import LgThumbNail from "../lg-thumbnail/lg-thumbnail";
import Helmet from "react-helmet";

import "../../style-sheets/portfolio.css";

import data from "../../data/fake-data2.json";

class Courses extends Component {
	constructor(props) {
		super(props);
		this.state = {
			imgIndex: 0,
			selected: 0,
			courses: data,
			dataFromThumbnail: ""
		};
	}
	//FIX: Add Courses completed Page: JS 30, FreeCodeCamp, SoloLearn, CYF Challenges
	getData = data => {
		//Gets data on specified Thumbnail and sends data to be rendered as Lg-Thumbnail
		this.setState({ selected: 1, dataFromThumbnail: data });
	};

	handleCloseLgThumbnail = update => {
		console.log("from lg-thumbnail", update);
		this.setState({ selected: update });
	};

	render() {
		const { selected, courses, dataFromThumbnail } = this.state;
		return (
			<>
				<Helmet>
					<title>Portfolio - Courses</title>
					<meta name="description" content="Course and Educational programmes completed" />
				</Helmet>
				<div className="page-wrapper">
					<div className="page-width">
						{selected ? (
							<LgThumbNail
								dataFromThumbnail={dataFromThumbnail}
								closeLgThumbnail={this.handleCloseLgThumbnail}
							/>
						) : (
							<>
								<header>
									<NavBar />
								</header>
								<main className="main-wrapper">
									<h1>Courses</h1>
									<section className={"elements-wrapper"}>
										{courses.map(course => (
											//data is exported before reaching ThumbNail as ThumbNail will accept data from multiple sources - therefore must be generic.
											<ThumbNail
												key={course.id}
												img={course.img}
												name={course.name}
												desc={course.desc}
												role={course.role}
												tech={course.tech}
												challenge={course.challenge}
												solution={course.solution}
												source={course.source}
												getData={this.getData}
											/>
										))}
									</section>
								</main>
								<footer>
									<label>Soon Footer</label>
								</footer>
							</>
						)}
					</div>
				</div>
			</>
		);
	}
}

export default Courses;
