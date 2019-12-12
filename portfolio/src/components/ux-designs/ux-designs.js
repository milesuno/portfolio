import React, { Component } from "react";
import ThumbNail from "../thumbnail/thumbnail";
import LgThumbNail from "../lg-thumbnail/lg-thumbnail";
import NavBar from "../navbar/nav-bar";
import data from "../../data/fake-data.json";
import "./ux-designs.css";

class UXDesigns extends Component {
	constructor(props) {
		super(props);
		this.state = {
			//State holds all UX the data for the <ThumbNail /> component. This is passed as a Prop.
			selected: 0,
			dataFromThumbnail: 0,
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
			<div className="ux-page-wrapper">
				<div className="page-width">
					<header>
						<NavBar />
					</header>
					{selected ? (
						<LgThumbNail
							name={dataFromThumbnail.name}
							desc={dataFromThumbnail.desc}
							img={dataFromThumbnail.img}
							closeLgThumbnail={this.handleCloseLgThumbnail}
						/>
					) : (
						<main className="ux-main-wrapper">
							<h1>UX/UI Designs</h1>
							<h3>2019</h3>
							<section className="ux-elements-wrapper">
								{ux.map(ux => (
									//data is exported before reaching ThumbNail as ThumbNail will accept data from multiple sources - therefore must be generic.
									<ThumbNail
										key={ux.id}
										img={ux.img}
										name={ux.name}
										desc={ux.desc}
										getData={this.getData}
									/>
								))}
							</section>
							<h3>2018</h3>
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

export default UXDesigns;
