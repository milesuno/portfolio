import React, { Component } from "react";
import { Link } from "react-router-dom";
import projectData from "../../../data/project-data";
import uxData from "../../../data/ux-data";
import CourseData from "../../../data/course-data";
// import aboutMeData from "../../data/about-me-data.json";
import developeIcon from "./../../../data/page-btns/icons8-developer-50.png";
import CV from "../../../data/GMO-CV2026.pdf";

import "./footer-nav.css";
import "./../navbar/nav-bar.css";

import SocialMediaNav from "../social-media-nav/social-media-nav";
import ContactForm from "../contact-form/contact-form";

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
          <div className="contact-me-wrapper">
            <ContactForm />
            <div className="footer-contact-info">
              <h3>Contact Links:</h3>
              <div>
                {/* <p>Milesoluku@gmail.com</p> */}
                <SocialMediaNav isFooter={this.props.isFooter} />
                {/* <p>07783180169</p> */}
              </div>

              <a className="download" href={"../../data/GMO-CV2026.pdf"} target="#">
                <button className="button">View CV</button>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-signature">
          <img src={developeIcon} />
          <small>
            &copy; Copyright {new Date().getFullYear()}, Gideon Miles Oluku. All
            Rights Reserved.
          </small>
        </div>
      </footer>
    );
  }
}

export default FooterNav;
