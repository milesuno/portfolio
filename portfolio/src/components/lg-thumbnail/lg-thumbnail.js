import React, { Component } from "react";
import "./lg-thumbnail.css";

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
	handleIncrementCarousel = () => {
		let imgIndex = this.state.imgIndex;
		imgIndex++;

		if (imgIndex >= this.state.img.length) {
			imgIndex = 0;
			this.setState({ imgIndex });
		}
		this.setState({ imgIndex });
	};

	handleDecrementCarousel = () => {
		let imgIndex = this.state.imgIndex;
		imgIndex--;
		if (imgIndex < 0) {
			imgIndex = this.state.img.length - 1;
			this.setState({ imgIndex });
		}
		this.setState({ imgIndex });
	};

	handleStopImageChange = () => {
		console.log("Stop Image");
		clearInterval(this.state.autoPlay);
	};

	handleAutoForward = () => {
		console.log("Auto Forward Image");
		clearInterval(this.state.autoPlay);

		let autoPlay = setInterval(() => {
			console.log("Next Pic");
			this.handleIncrementCarousel();
		}, 1500);
		this.setState({ autoPlay });
	};

	handleAutoBackward = () => {
		console.log("Auto Backward Image");
		clearInterval(this.state.autoPlay);

		let autoPlay = setInterval(() => {
			console.log("Last Pic");
			this.handleDecrementCarousel();
		}, 1500);
		this.setState({ autoPlay });
	};

	//Closing window should change selected in parent to 0. This will change the view from <LgThumbnail /> to <Thumbnail />.

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
		} = this.props;

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
					<div className={"lg-thumbnail-button-container"}>
						<button onClick={this.handleAutoBackward}>
							{"<<"}
						</button>
						<button onClick={this.handleDecrementCarousel}>
							{"<"}
						</button>
						<button onClick={this.handleStopImageChange}>
							{"."}
						</button>
						<button onClick={this.handleIncrementCarousel}>
							{">"}
						</button>
						<button onClick={this.handleAutoForward}>{">>"}</button>
					</div>
					<p>Description: {desc}</p>
					<p>Role: {role}</p>
					<p>Challenge: {challenge}</p>
					<p>Solution: {solution}</p>
					<a href={source}>Source: {source}</a>
				</div>
			</div>
		);
	}
}

export default LgThumbNail;
