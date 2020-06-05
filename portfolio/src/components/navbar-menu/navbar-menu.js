import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../navbar/nav-bar.css";

//SOULTION: Create a conditional render for if the value is large or short menu. Set CSS classes within navBarMenu to style the component depending on isShortMenu value
class NavbarMenu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menuToggle: this.props.menuToggle,
		};
	}

	componentDidMount() {}
	render() {
		const { menuToggle } = this.state;
		const { menuToggle2 = menuToggle } = this.props;
		return (
			<>
				{!this.props.menuToggle ? (
					<ul className="nav-content short-menu">
						{console.log({ menuToggle, menuToggle2 })}
						<li className="nav-item project">
							<a className="button" name="project">
								PROJECTS
							</a>
							<ul className="dropdown-list project">
								<li className="short-nav-all-items">
									<Link to={`/projects`}>All Projects</Link>
								</li>
								{
									/*Loop through all projects and render a list of these items as <li>*/
									this.props.projectData.map((project) => {
										// console.log(project);
										return (
											<li className="dropdown-item">
												<Link
													to={`/projects/${project.id}`}
												>
													{project.name}
												</Link>
											</li>
										);
									})
								}
							</ul>
						</li>
						<li className="nav-item ux">
							<a className="button" name="ux">
								UX/UI DESIGNS
							</a>
							<ul className="dropdown-list ux">
								<li className="short-nav-all-items">
									<Link to={`/uxdesigns`}>
										All UX designs
									</Link>
								</li>
								{
									/*Loop through all projects and render a list of these items as <li>*/
									this.props.uxData.map((ux) => {
										// console.log(ux);
										return (
											<li className="dropdown-item">
												<Link
													to={`/uxdesigns/${ux.id}`}
												>
													{ux.name}
												</Link>
											</li>
										);
									})
								}
							</ul>
						</li>
						<li className="nav-item courses">
							<a className="button" name="courses">
								COURSES
							</a>
							<ul className="dropdown-list courses">
								<li className="dropdown-item">
									<Link to={`/courses`}>All Courses</Link>
								</li>
								{
									/*Loop through all projects and render a list of these items as <li>*/
									this.props.courseData.map((course) => {
										// console.log(course);
										return (
											<li className="dropdown-item">
												<Link
													to={`/courses/${course.id}`}
												>
													{course.name}
												</Link>
											</li>
										);
									})
								}
							</ul>
						</li>
						<li className="nav-item about-me">
							<a className="button" name="about-me">
								ABOUT ME
							</a>
							<ul className="dropdown-list about-me">
								{this.props.socialMediaData.map((media) => {
									// console.log(course);
									return (
										<li className="dropdown-item">
											<a>{media.medium}</a>
										</li>
									);
								})}
							</ul>
						</li>
					</ul>
				) : (
					<ul className="nav-content full-menu">
						<Link className="link lg-display" to="/projects">
							<li className="nav-item project">
								<a className="button" name="project">
									PROJECTS
								</a>
								<ul className="dropdown-list project">
									<li className="short-nav-all-items">
										<Link to={`/projects`}>
											All Projects
										</Link>
									</li>
									{
										/*Loop through all projects and render a list of these items as <li>*/
										this.props.projectData.map(
											(project) => {
												// console.log(project);
												return (
													<li className="dropdown-item">
														<Link
															to={`/projects/${project.id}`}
														>
															{project.name}
														</Link>
													</li>
												);
											}
										)
									}
								</ul>
							</li>
						</Link>
						<Link className="link lg-display" to="/uxdesigns">
							<li className="nav-item ux">
								<a className="button" name="ux">
									UX/UI DESIGNS
								</a>
								<ul className="dropdown-list ux">
									<li className="short-nav-all-items">
										<Link to={`/uxdesigns`}>
											All UX designs
										</Link>
									</li>
									{
										/*Loop through all projects and render a list of these items as <li>*/
										this.props.uxData.map((ux) => {
											// console.log(ux);
											return (
												<li className="dropdown-item">
													<Link
														to={`/uxdesigns/${ux.id}`}
													>
														{ux.name}
													</Link>
												</li>
											);
										})
									}
								</ul>
							</li>
						</Link>
						<Link className="link lg-display" to="/courses">
							<li className="nav-item courses">
								<a className="button" name="courses">
									COURSES
								</a>
								<ul className="dropdown-list courses">
									<li className="dropdown-item">
										<Link to={`/courses`}>All Courses</Link>
									</li>
									{
										/*Loop through all projects and render a list of these items as <li>*/
										this.props.courseData.map((course) => {
											// console.log(course);
											return (
												<li className="dropdown-item">
													<Link
														to={`/courses/${course.id}`}
													>
														{course.name}
													</Link>
												</li>
											);
										})
									}
								</ul>
							</li>
						</Link>
						<Link className="link lg-display" to="/aboutme">
							<li className="nav-item about-me">
								<a className="button" name="about-me">
									ABOUT ME
								</a>
								<ul className="dropdown-list about-me">
									{this.props.socialMediaData.map((media) => {
										// console.log(course);
										return (
											<li className="dropdown-item">
												<a>{media.medium}</a>
											</li>
										);
									})}
								</ul>
							</li>
						</Link>
					</ul>
				)}
			</>
		);
	}
}

export default NavbarMenu;
