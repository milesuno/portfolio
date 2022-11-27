import React, { Component } from "react";
import Helmet from "react-helmet";

import NavBar from "../../elements/navbar/nav-bar";
import FooterNav from "../../elements/footer-nav/footer-nav";
import SocialMediaNav from "../../elements/social-media-nav/social-media-nav";
import ContactForm from "../../elements/contact-form/contact-form";

import CV from "./../../../data/Gideon Miles Oluku - cv7.pdf";
import "./contact-me.css";

class ContactMe extends Component {
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
