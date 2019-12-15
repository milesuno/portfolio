import React, { Component } from "react";
import "./thumbnail.css";
/*
React will apply props object with data passed to from the parent passing it props. 
In this instance ThumbNail as data passed to it from 2 different parents, 
but I do not need to specify or use [square] syntax to access the data passed  
*/
class ThumbNail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			imgIndex: 0,
			selected: 0,
			autoPlay:'',
			name: this.props.name,
			img: this.props.img,
			desc: this.props.desc,
			role: this.props.role,
			challenge: this.props.challenge,
			solution: this.props.solution,
			source: this.props.source
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
		console.log('Stop Image');
		clearInterval(this.state.autoPlay);

	};

	handleAutoForward = () => {
		console.log('Auto Forward Image');
		clearInterval(this.state.autoPlay);

		let autoPlay = setInterval(() => {
			console.log('Next Pic');
			this.handleIncrementCarousel()
		}, 1500)
		this.setState({ autoPlay })
	};

	handleAutoBackward = () => {
		console.log('Auto Backward Image');
		clearInterval(this.state.autoPlay);

		let autoPlay = setInterval(() => {
			console.log('Last Pic');
			this.handleDecrementCarousel()
		}, 1500)
		this.setState({ autoPlay })
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
		const { name, desc, img } = this.props;
		const { imgIndex } = this.state;
		console.log('props in thumbnail', this.props)
		return (
			<template className="thumbnail-page-wrapper">
				<div
					className="thumbnail-wrapper"
					onClick={this.thumbNailSwitch}
				>
					<img src={img[imgIndex]} className={"thumbnail-img"} />
					<h2 className="thumbnail-title">{name}</h2>
					{/* <p>{desc}</p> */}
				</div>
				<div className={"button-container"}>
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
					<button onClick={this.handleAutoForward}>
						{">>"}
					</button>
				</div>
			</template>
		);
	}
}

export default ThumbNail;
