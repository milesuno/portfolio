import React, { Component } from "react";
import ThumbNail from "../thumbnail/thumbnail";
import LgThumbNail from "../lg-thumbnail/lg-thumbnail";
import NavBar from "../navbar/nav-bar";

import "../../style-sheets/portfolio.css";

import data from "../../data/fake-data.json";

class UXDesigns extends Component {
	constructor(props) {
		super(props);
		this.state = {
			//State holds all UX the data for the <ThumbNail /> component. This is passed as a Prop.
			selected: 0,
			dataFromThumbnail: '',
			ux: data
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
	// FIX: <lg-thumbnail /> element rendering issue
	render() {
		const { ux, selected, dataFromThumbnail } = this.state;
		return (
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
								{/* onClick={() => {this.setState({ selected: selected })}//FIX IT} */}
								<h1>UX/UI Designs</h1>
								<h3>2019</h3>
								<section className="elements-wrapper">
									{ux.map(ux => (
										//data is exported before reaching ThumbNail as ThumbNail will accept data from multiple sources - therefore must be generic.
										<ThumbNail
											key={ux.id}
											img={ux.img}
											name={ux.name}
											desc={ux.desc}
											role={ux.role}
											challenge={ux.challenge}
											solution={ux.solution}
											source={ux.source}
											getData={this.getData}
										/>
									))}
								</section>
								<h3>2018</h3>
								<section className="elements-wrapper">
									{ux.map(ux => (
										//data is exported before reaching ThumbNail as ThumbNail will accept data from multiple sources - therefore must be generic.
										<ThumbNail
											key={ux.id}
											img={ux.img}
											name={ux.name}
											desc={ux.desc}
											role={ux.role}
											challenge={ux.challenge}
											solution={ux.solution}
											source={ux.source}
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
		);
	}
}

export default UXDesigns;
