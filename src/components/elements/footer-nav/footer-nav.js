import React, { Component } from "react";
import { Link } from "react-router-dom";
import projectData from "../../../data/project-data";
import uxData from "../../../data/ux-data";
import CourseData from "../../../data/course-data.json";
// import aboutMeData from "../../data/about-me-data.json";
import developeIcon from "./../../../data/page-btns/icons8-developer-50.png";

import "./footer-nav.css";
import "./../navbar/nav-bar.css";

import SocialMediaNav from "../social-media-nav/social-media-nav";

class FooterNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer>
        <div className="footer-wrapper">
			{/* TODO: Add Site Map: About: subpages, Blog: subpages */}
          <div className="footer-contact-info">
            <p>Milesoluku@gmail.com</p>
            <SocialMediaNav isFooter={this.props.isFooter} />
            {/* <p>07783180169</p> */}
          </div>
          <div className="footer-signature">
            <img src={developeIcon} />
          </div>
        </div>
        <small>
          &copy; Copyright {new Date().getFullYear()}, Gideon Miles Oluku. All
          Rights Reserved.
        </small>
      </footer>
    );
  }
}

export default FooterNav;
