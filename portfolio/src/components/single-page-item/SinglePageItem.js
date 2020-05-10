import React, { Component } from "react";
import CarouselControls from "../carousel-controls/CarouselControls";
import ThumbNail from "../thumbnail/thumbnail";
import LgThumbNail from "../lg-thumbnail/lg-thumbnail";
import NavBar from "../navbar/nav-bar";
import "../../style-sheets/portfolio.css";
import Helmet from "react-helmet";


//Single page need to be run on main page type and then display the data as a single page from the data sent from lg thumbnail.
//Check if all the data copied from Projects need for sinlge page to render

class SinglePageItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			imgIndex: 0,
			selected: 0,
			autoPlay: "",
			// name: this.props.dataFromPage.name,
            // img: this.props.state.img,
            // desc: this.props.state.desc,
            // role: this.props.state.role,
            // tech: this.props.state.tech,
            // challenge: this.props.state.challenge,
            // solution: this.props.state.solution,
            // source: this.props.state.   source,
            dataFromThumbnail: 0,
            thumbnailSelected: false
		};
	}

	getData = (data) => {
		//Gets data on specified Thumbnail and sends data to be rendered as Lg-Thumbnail
		const { imgIndex, autoPlay } = data;
		this.setState({ imgIndex, autoPlay });
	};

	render() {
		const { imgIndex, dataFromThumbnail,selected   } = this.state;
		const {
			name,
			img,
			desc,
			role,
			tech,
			challenge,
			solution,
			source,
        } = this.props;

        {console.log("SPI",this.props)}
		return (
			<>
				{console.log("SPI props",this.props)}
                //Pass this under each page type and get data to render this component elements
				<div className="single-page-content-wrapper">
					<br />
					<img src={img[imgIndex]} className={"lg-thumbnail-img"} />
					{img.length > 1 ? (
						<CarouselControls
							getData={this.getData}
							img={this.props.img}
						/>
					) : null}
					{desc ? (
						<p>
							<strong>Description:</strong> {desc}
						</p>
					) : null}
					{role ? (
						<p>
							<strong>Role:</strong> {role}
						</p>
					) : null}
					{tech ? (
						<p>
							<strong>Technologies:</strong> {tech}
						</p>
					) : null}
					{challenge ? (
						<p>
							<strong>Challenge:</strong> {challenge}
						</p>
					) : null}
					{solution ? (
						<p>
							<strong>Solution:</strong> {solution}
						</p>
					) : null}
					{source ? (
						<>
							<strong>Sources:</strong>
							{source.url ? (
								<p>
									URL: <a href={source.url}>{source.url}</a>
								</p>
							) : null}
							{source.github ? (
								<p>
									Github:{" "}
									<a href={source.github}>{source.github}</a>
								</p>
							) : null}
							{source.trello ? (
								<p>
									Trello:{" "}
									<a href={source.github}>{source.trello}</a>
								</p>
							) : null}
						</>
					) : null}
				</div>
			</>
		);
	}
}

export default SinglePageItem;
