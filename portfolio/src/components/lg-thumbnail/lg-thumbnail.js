import React, { Component } from "react";
import "./lg-thumbnail.css";
import CarouselControls from "../carousel-controls/CarouselControls";

class LgThumbNail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			imgIndex: 0,
			autoPlay: "",
			img: this.props.img
		};
	}
	// <LgThumbnail /> should increment through img array passed from <Thumbnail />
	getData = data => {
		//Gets data on specified Thumbnail and sends data to be rendered as Lg-Thumbnail
		const { imgIndex, autoPlay } = data;
		this.setState({ imgIndex, autoPlay });
	};

	descCharLimit = () => {
		console.log("desc in limit", this.state.desc);
	};

	thumbNailSwitch = () => {
		console.log("onClick");
		let selected = this.state.selected;

		if (selected === 0) {
			selected++;
			this.props.getData(this.state);
			this.setState({ selected });
		} else if (selected === 1) {
			selected--;
			this.setState({ selected });
		}

		console.log("Selected", this.state.selected);
	};


	render() {
		const { imgIndex } = this.state;
		const {
			name,
			img,
			desc,
			role,
			challenge,
			solution,
			source
		} = this.props.dataFromThumbnail;

		return (
			<div className={"lg-thumbnail-page-wrapper"}>
				<button
					className={"lg-thumbnail-button"}
					onClick={() => this.props.closeLgThumbnail(0)}
				>
					{"x"}
				</button>
				<div className="lg-thumbnail-wrapper">
					<h1 className={"lg-thumbnail-title"}>{name}</h1>
					<img src={img[imgIndex]} className={"lg-thumbnail-img"} />
					{img.length > 1 ? (
						<CarouselControls
							getData={this.getData}
							img={this.props.img}
						/>
					) : (
						null
					)}
					{console.log('lg thumbnail', this.props)}
					{desc ? <p>Description: {desc}</p> : null}
					{role ? <p>Role: {role}</p> : null}
					{challenge ? <p>Challenge: {challenge}</p> : null}
					{solution ? <p>Solution: {solution}</p> : null}
					{source ? <a href={source}>Source: {source}</a> : null}
				</div>
			</div>
		);
	}
}

export default LgThumbNail;
