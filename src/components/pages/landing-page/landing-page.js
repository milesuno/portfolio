import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import vid from "../../../landing-video/Pexels Videos 2699.mp4";
import "./landing-page.css";
import "../../elements/profile-card/profile-card.css";
import NavBar from "../../elements/navbar/nav-bar";
import landingPageBG from "./../../../landing-video/landing-bg.png";
import AboutMe from "../about-me/about-me";
import ContactMe from "../contact-me/contact-me";

export default function LandingPage() {
  const [navSelection, setNavSelection] = useState("");

  function datalayerPush(eventType, title) {
    window.dataLayer.push({
      event: eventType,
      pageTitle: title,
      pageURL: window.location.href,
    });
  }

  useEffect(() => {
    window.data_hub = {
      page_type: "home",
      page_name: "Gideon Miles Oluku - Portfolio",
      site_section: "landing",
      nav_selection: "",
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

    datalayerPush("virtual_page_view", window.data_hub.site_section);
  }, []);

  return (
    <>
      <Helmet>
        <title>Gideon Miles Oluku - Portfolio</title>
        <meta name="description" content="Portfolio Landing page" />
      </Helmet>
      <div className="landing-page">
        {/* Quotes can change every few seconds */}
        <NavBar />
        <main className="landing-page__main-wrapper">
          {vid ? (
            <Link to="/about">
              <video
                className="landing-page__page-video"
                src={vid}
                muted
                autoPlay
                loop
              />
            </Link>
          ) : (
            <Link to="/about">
              <img className="landing-page__loader-img" src={landingPageBG} />
            </Link>
          )}
        </main>
      </div>
      {/* 
      
      TODO:
          - Selecting page nav button sets state
          - state sets page to scroll down to

          Animate:
          - Auto Scroll (landing page scoll width) 
          - Once scroll reaches top of scroll ---> unhide About Me/Contact page Nav

        */}
      {/* {navSelection === "about-me" ? (
        <AboutMe />
      ) : navSelection === "contact-me" ? (
        <ContactMe />
      ) : (
        <></>
      )} */}
    </>
  );
}
