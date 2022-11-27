import { React, useState } from "react";
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
            <video
              className="landing-page__page-video"
              src={vid}
              muted
              autoPlay
              loop
            />
          ) : (
            <img className="landing-page__loader-img" src={landingPageBG} />
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
