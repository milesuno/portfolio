import React, { Component } from "react";
import "./CarouselControls.css";

class CarouselControls extends Component {
	constructor(props) {
		super(props);
		this.state = {
			imgIndex: 0,
			selected: 0,
			autoPlay: "",
			img: this.props.img
		};
	}

	handleIncrementCarousel = () => {
		let imgIndex = this.state.imgIndex;
		imgIndex++;
		if (imgIndex >= this.state.img.length) {
			imgIndex = 0;
			this.setState({ imgIndex });
			console.log(imgIndex);
		}
		this.setState({ imgIndex });
		this.props.getData(this.state);
	};

	handleDecrementCarousel = () => {
		let imgIndex = this.state.imgIndex;
		imgIndex--;
		if (imgIndex < 0) {
			imgIndex = this.state.img.length - 1;
			this.setState({ imgIndex });
		}
		this.setState({ imgIndex });
		this.props.getData(this.state);
	};

	handleStopImageChange = () => {
		console.log("Stop Image");
		clearInterval(this.state.autoPlay);
		this.props.getData(this.state);
	};

	handleAutoForward = () => {
		console.log("Auto Forward Image");
		clearInterval(this.state.autoPlay);

		let autoPlay = setInterval(() => {
			console.log("Next Pic");
			this.handleIncrementCarousel();
		}, 1500);
		this.setState({ autoPlay });
		this.props.getData(this.state);
	};

	handleAutoBackward = () => {
		console.log("Auto Backward Image");
		clearInterval(this.state.autoPlay);

		let autoPlay = setInterval(() => {
			console.log("Last Pic");
			this.handleDecrementCarousel();
		}, 1500);
		this.setState({ autoPlay });
		this.props.getData(this.state);
	};

	render() {
		return (
			<div className={"button-container"}>
				<button onClick={this.handleAutoBackward}>{"<<"}</button>
				<button onClick={this.handleDecrementCarousel}>{"<"}</button>
				<button onClick={this.handleStopImageChange}>{"."}</button>
				<button onClick={this.handleIncrementCarousel}>{">"}</button>
				<button onClick={this.handleAutoForward}>{">>"}</button>
			</div>
		);
	}
}

export default CarouselControls;
