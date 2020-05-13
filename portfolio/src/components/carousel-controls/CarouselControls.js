import React, { Component } from "react";
import "./CarouselControls.css";

class CarouselControls extends Component {
	constructor(props) {
		super(props);
		this.state = {
			imgIndex: 0,
			selected: 0,
			autoPlay: "",
			img: this.props.img,
		}
	};

	handleIncrementCarousel = () => {
		let imgIndex = this.state.imgIndex;
		imgIndex++;
		if (imgIndex >= this.state.img.length) {
			imgIndex = 0;
			this.setState({ imgIndex });
		}

		this.setState({ imgIndex });
		this.props.getData({ imgIndex });
	};

	handleDecrementCarousel = () => {
		let imgIndex = this.state.imgIndex;
		imgIndex--;
		if (imgIndex < 0) {
			imgIndex = this.state.img.length - 1;
			this.setState({ imgIndex });
		}
		this.setState({ imgIndex });
		console.log("decrement img", imgIndex);
		this.props.getData({ imgIndex });
	};

	handleStopImageChange = () => {
		console.log("Stop Image");
		clearInterval(this.state.autoPlay);
	};

	handleAutoForward = () => {
		console.log("Auto Forward Image");
		clearInterval(this.state.autoPlay);

		let autoPlay = setInterval(() => {
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

	render() {
		return (
			<div className={"button-container"}>
				<button onClick={this.handleAutoBackward}>
					<img src="https://img.icons8.com/metro/26/000000/rewind.png" />
				</button>
				<button onClick={this.handleDecrementCarousel}>
					<img src="https://img.icons8.com/metro/26/000000/sort-left.png" />
				</button>
				<button onClick={this.handleStopImageChange}>
					<img src="https://img.icons8.com/metro/26/000000/stop.png" />
				</button>
				<button onClick={this.handleIncrementCarousel}>
					<img src="https://img.icons8.com/metro/26/000000/sort-right.png" />
				</button>
				<button onClick={this.handleAutoForward}>
					<img src="https://img.icons8.com/metro/26/000000/fast-forward.png" />
				</button>
			</div>
		);
	}
}

export default CarouselControls;
