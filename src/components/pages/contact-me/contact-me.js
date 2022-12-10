import React, { Component } from "react";
import Helmet from "react-helmet";

import NavBar from "../../elements/navbar/nav-bar";
import FooterNav from "../../elements/footer-nav/footer-nav";
import SocialMediaNav from "../../elements/social-media-nav/social-media-nav";
import ContactForm from "../../elements/contact-form/contact-form";

import CV from "./../../../data/Gideon Miles Oluku - cv7.pdf";
import "./contact-me.css";

class ContactMe extends Component {
  componentDidMount() {
    // let data_hub = data_hub || {};
    window.data_hub = {
      page_type: "contact",
      page_name: "Portfolio - Contact",
      site_section: "contact",
      nav_selection: "contact",
      social_nav_selection: "",
      language: window.navigator.language,
      thumbnail_viewed: "",
      tool_clicked: "",
      education_selected: "",
      cv_view: false,
      form_first_name: "",
      form_last_name: "",
      form_email: "",
      form_subject: "",
      form_message: "",
      events: window.data_hub.events || [],
    };
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Portfolio - Contact</title>
          <meta
            name="description"
            content="About me page, highlighting resume achievements and channels to contact me"
          />
        </Helmet>
        <div className="page-wrapper">
          <div className="page-width">
            <header>
              <NavBar />
              <h1>Contact</h1>
            </header>
            <main className="main-wrapper">
              <div className="contact-me-wrapper">
                <div className="additional-contact-wrapper">
                  <div className="additional-contact-content">
                    <h2>Additional Contact:</h2>
                    <SocialMediaNav />
                    <h2>Email:</h2>
                    <p>Milesoluku@gmail.com</p>
                  </div>
                  <a className="download" href={CV} target="#">
                    <button className="button">View CV</button>
                  </a>
                </div>
                <ContactForm />
              </div>
            </main>
            <footer>
              <FooterNav isFooter={true} />
            </footer>
          </div>
        </div>
      </>
    );
  }
}

export default ContactMe;
