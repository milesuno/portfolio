import React, { Component } from "react";
import "./thumbnail.css";
import LgThumbNail from "../lg-thumbnail/lg-thumbnail";
import CarouselControls from "../carousel-controls/CarouselControls";
/*
React will apply props object with data passed to from the parent passing it props. 
In this instance ThumbNail as data passed to it from 2 different parents, 
but I do not need to specify or use [square] syntax to access the data passed  
*/
class ThumbNail extends Component {
	constructor(props) {
		super(props);
		//state is used to populate data in lg-thumbnail on thumbnail click
		this.state = {
			imgIndex: 0,
			selected: 0,
			autoPlay: "",
			name: this.props.name,
			img: this.props.img,
			desc: this.props.desc,
			role: this.props.role,
			tech: this.props.tech,
			challenge: this.props.challenge,
			solution: this.props.solution,
			source: this.props.source,
		};
	}

	getData = (data) => {
		//Gets data on specified Thumbnail and sends data to be rendered as Lg-Thumbnail
		const { imgIndex, autoPlay } = data;
		this.setState({ imgIndex, autoPlay });
	};

	handleCloseLgThumbnail = (update) => {
		console.log("from lg-thumbnail", update);
		const body = document.querySelector("body");

		body.style.setProperty("overflow", "");

		this.setState({ selected: update });
	};

	thumbNailSwitch = () => {
		console.log("onClick");
		let selected = this.state.selected;
		const body = document.querySelector("body");
		
		if (selected === 0) {
			selected++;
			this.setState({ selected });
			this.props.getData(this.state);
			body.style.setProperty("overflow", "hidden");
		} else if (selected === 1) {
			selected--;
			this.setState({ selected });
			this.props.getData(this.state);
			body.style.setProperty("overflow", "");
		}

		console.log("Selected", this.state.selected);
	};


	render() {
		const { name, img } = this.props;
		const { imgIndex } = this.state;
		console.log("props in thumbnail", this.props);
		console.log("state selected in thumbnail", this.state);

		return (
			<>
				{/* {this.state.selected === 0 ? ( */}
					<div className="thumbnail-page-wrapper">
						<div
							className="thumbnail-wrapper"
							onClick={this.thumbNailSwitch}
						>
							<img
								src={img[imgIndex]}
								className={"thumbnail-img"}
							/>
							<h2 className="thumbnail-title">{name}</h2>
						</div>
						{img.length > 1 ? (
							<CarouselControls
								getData={this.getData}
								img={this.props.img}
							/>
						) : null}
					</div>
				{/* ) : (
					// <section className="modal">
					// 	<div className="modal-content">
					// 		<LgThumbNail
					// 			dataFromThumbnail={this.state}
					// 			closeLgThumbnail={this.handleCloseLgThumbnail}
					// 		/>
					// 	</div>
					// </section>
					"Poop"
				)} */}
			</>
		);
	}
}

export default ThumbNail;
