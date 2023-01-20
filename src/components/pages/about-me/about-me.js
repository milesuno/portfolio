import React, { Component, useState, useEffect } from "react";
import Helmet from "react-helmet";
import NavBar from "../../elements/navbar/nav-bar";
import Thumbnail from "../../elements/thumbnail/thumbnail";
import ThumbnailMatrix from "../../elements/thumbnail-matrix/thumbnail-matrix";
// import LgThumbnail from "../../lg-thumbnail/lg-thumbnail";
import SocialMediaNav from "../../elements/social-media-nav/social-media-nav";

import img from "../../../data/git-profile-img.jpg";
import "../../../style-sheets/portfolio.css";
import "./about-me.css";
// import "../../"
import FooterNav from "../../elements/footer-nav/footer-nav";
import techStackData from "../../../data/skill-images";

import projectData from "../../../data/project-data";
import courseData from "../../../data/course-data.json";
import projects from "../../../data/project-data";
import ExperienceCard from "../../elements/experience-card/experience-card";
import TechBanner from "../../elements/tech-banner/tech-banner";
import LgThumbnail from "../../elements/lg-thumbnail/lg-thumbnail";
import { useHistory } from "react-router-dom";

function datalayerPush(eventName, scroll) {
  if (eventName === "virtual_page_view") {
    window.dataLayer.push({
      event: eventName,
      pageTitle: window.data_hub.site_section,
      section: window.data_hub.site_section,
      pageURL: window.location.href,
    });
  }

  if (eventName === "virtual_content_scroll") {
    window.dataLayer.push({
      event: eventName,
      content_name: "education",
      scroll_percentage: scroll,
      pageURL: window.location.href,
    });
  }
}
datalayerPush("virtual_page_view");

export default function AboutMe() {
  const [projects, setProjects] = useState([...projectData]);
  const [projectsScroll, setProjectsScroll] = useState(0);

  const [education, setEducation] = useState([...courseData]);
  const [educationScroll, setEducationScroll] = useState(0);

  const [techStack, setTechStack] = useState([...techStackData]);
  const [techStackScroll, setTechStackScroll] = useState(0);

  const [thumbnailSelected, setThumbnailSelected] = useState(false);
  const [thumbnailData, setThumbnailData] = useState(null);
  const history = useHistory();

  function getData(data) {
    //Gets data on specified Thumbnail and sends data to be rendered as Lg-Thumbnail
    setThumbnailSelected(!thumbnailSelected);
    setThumbnailData(data);
  }

  function handleCloseLgThumbnail(update) {
    console.log("from lg-thumbnail", update);
    const body = document.querySelector("body");

    body.style.setProperty("overflow", "");

    setThumbnailSelected(update);
  }

  function verticalScrollHandler(e) {
    let scroll_25 = e.target.scrollTopMax / 4,
      scroll_50 = e.target.scrollTopMax / 2,
      scroll_75 = (e.target.scrollTopMax / 4) * 3,
      scroll_100 = e.target.scrollTopMax;

    console.log({ scroll_25, scroll_50, scroll_75, scroll_100 });

    if (e.target.scrollTop >= scroll_25 && e.target.scrollTop <= scroll_50)
      setEducationScroll(25);

    if (e.target.scrollTop >= scroll_50 && e.target.scrollTop <= scroll_75)
      setEducationScroll(50);

    if (e.target.scrollTop >= scroll_75 && e.target.scrollTop <= scroll_100)
      setEducationScroll(75);

    if (e.target.scrollTop === scroll_100) setEducationScroll(100);
  }

  useEffect(() => {
    if (!thumbnailSelected) history.push(`/about`);

    window.data_hub = {
      page_type: "about",
      page_name: "Portfolio - About Me",
      site_section: "about",
      nav_selection: "about",
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

    if (educationScroll === 25)
      datalayerPush("virtual_content_scroll", educationScroll);

    if (educationScroll === 50)
      datalayerPush("virtual_content_scroll", educationScroll);

    if (educationScroll === 75)
      datalayerPush("virtual_content_scroll", educationScroll);

    if (educationScroll === 100)
      datalayerPush("virtual_content_scroll", educationScroll);
  }, [thumbnailSelected, educationScroll]);

  return (
    <>
      <Helmet>
        <title>Portfolio - About Me</title>
        <meta
          name="description"
          content="About me page, highlighting resume achievements and channels to contact me"
        />
      </Helmet>
      {thumbnailSelected === false ? (
        <div className="page-wrapper">
          <div className="about-me__page-wrapper">
            <div className="about-me__page-width">
              <header>
                <NavBar />
                <h1>About Me</h1> {/*Extract to background image banner*/}
              </header>
              <main className="main-wrapper">
                <div className="about-me__section">
                  <div className="about-me__contact-card">
                    <img className="about-me__img" src={img} />
                    <div className="about-me__social-media-nav">
                      <SocialMediaNav />
                      <a
                        className="download"
                        href="../../data/Gideon Miles Oluku - cv7.pdf"
                        target="#"
                      >
                        <button className="button">View CV</button>
                      </a>
                    </div>
                  </div>
                  <div className="about-me__bio">
                    <h2>Gideon Miles Oluku</h2>
                    <h5>Web Specialist - Web Analytics, Web Development.</h5>
                    <div className="about-me__bio__content">
                      <p>
                        I am a Web Developer with a background in Business
                        Studies, Agile development and Full Stack Development.
                      </p>
                      <p>
                        I have a passion for the creative process - planning,
                        designing and prototyping. I am also fasinated with the
                        underlaying Computer Science mechanics that drive the
                        development of digital products. This led to developing
                        my own projects{" "}
                        <a href="https://www.barteranything.com" target="#">
                          (BarterAnything)
                        </a>
                        , and recruiting 2 additional developers.
                      </p>
                      <p>
                        My passion for software development has led me to
                        volunteer and teach at{" "}
                        <a href="https://www.codeyourfuture.io" target="#">
                          Code Your Future
                        </a>
                        . I help to teach programming fundamentals on the
                        weekends for disadvantaged groups - this is can be
                        challenging but is very rewarding as students can often
                        ask questions that you have to think deeply about -
                        expanding both of our understanding of topic.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="projects-section">
                  <h2 className="section_title">Projects</h2>
                  {/* Import Project Component */}
                  {/* 
				
				// TODO: Manage thumbnails with rows and columns
				// if Total thumbnails is diviable by 3* equally -> then make full rows
				// if not -> then make as many rows of 3* as possible, then fill last row with remaining thumbnails 
				
				<ContentArea/>
				Loop: <ContentRow />
					Loop: <Thumbnail />

				*/}
                  <section className="project-section__thumbnail-carosel">
                    {/* <ThumbnailMatrix thumbnails={projects} /> */}
                    {projects.map((project) => (
                      //data is exported before reaching Thumbnail as Thumbnail will accept data from multiple sources - therefore must be generic.
                      <Thumbnail
                        key={project.key}
                        id={project.id}
                        type={project.type}
                        img={project.img}
                        name={project.name}
                        desc={project.desc}
                        short_desc={project.short_desc}
                        role={project.role}
                        tech={project.tech}
                        challenge={project.challenge}
                        solution={project.solution}
                        source={project.source}
                        getData={getData}
                      />
                    ))}
                  </section>
                </div>
                <div className="tech-stack__section">
                  <div className="tech-stack__section-wrapper">
                    <TechBanner techStack={techStack} />
                    <div className="tech-stack__overlay" />
                  </div>
                  {/* <div className="skills-wrapper">
                  <div className="skills">
                    <h2>Front End</h2>
                    <ul className="skill-list">
                      {console.log({ skillImages })}
                      <li className="tech">
                        <label for="html">HTML</label>
                        <img src={skillImages.html} id="html" />
                      </li>
                      <li className="tech">
                        <label for="css">CSS</label>
                        <img src={skillImages.css} id="css" />
                      </li>
                      <li className="tech">
                        <label for="js">JavaScript</label>
                        <img src={skillImages.js} id="js" />
                      </li>
                    </ul>
                  </div>
                  <div className="skills">
                    <h2>Back End</h2>
                    <ul className="skill-list">
                      <li className="tech">
                        <label for="nodejs">NodeJS</label>
                        <img src={skillImages.nodeJs} id="nodejs" />
                      </li>
                      <li className="tech">
                        <label for="mongodb">MongoDB</label>
                        <img src={skillImages.mongoDB} id="mongodb" />
                      </li>
                    </ul>
                  </div>
                  <div className="skills">
                    <h2>Libraries/Frameworks</h2>
                    <ul className="skill-list">
                      <li className="tech">
                        <label for="react">React</label>
                        <img src={skillImages.react} id="react" />
                      </li>
                    </ul>
                    <ul className="skill-list">
                      <li className="tech">
                        <label for="express">ExpressJS</label>
                        <img src={skillImages.express} id="express" />
                      </li>
                      <li className="tech">
                        <label for="reactn">React Native</label>
                        <img src={skillImages.reactNative} id="reactn" />
                      </li>
                    </ul>
                  </div>
                  <div className="skills">
                    <h2>Testing</h2>
                    <ul className="skill-list">
                      <li className="tech">
                        <label for="jest">Enzyme</label>
                        <img src={skillImages.jest} id="jest" />
                      </li>
                      <li className="tech">
                        <label for="jest">Jest</label>
                        <img src={skillImages.jest} id="jest" />
                      </li>
                    </ul>
                  </div>
                  <div className="skills">
                    <h2>Design</h2>
                    <ul className="skill-list">
                      <li className="tech">
                        <label for="photoshop">Photoshop</label>
                        <img src={skillImages.photoshop} id="photoshop" />
                      </li>
                      <li className="tech">
                        <label for="adobe">Adobe Illustrator</label>
                        <img src={skillImages.adobeIllistrator} id="adobe" />
                      </li>
                      <li className="tech">
                        <label for="figma">Figma</label>
                        <img src={skillImages.figma} id="figma" />
                      </li>
                      <li className="tech">
                        <label for="balsamiq">Balsamiq</label>
                        <img src={skillImages.balsamiq} id="balsamiq" />
                      </li>
                    </ul>
                  </div>
                  <div className="skills">
                    <h2>Methodology</h2>
                    <ul className="skill-list">
                      <li className="tech">
                        <label for="agile">Agile</label>
                        <img src={skillImages.agile} id="agile" />
                      </li>
                      <li className="tech">
                        <label for="lean">Lean Management</label>
                        <img src={skillImages.lean} id="lean" />
                      </li>
                      <li className="tech">
                        <label for="tdd">Test Driven Development</label>
                        <img src={skillImages.tdd} id="tdd" />
                      </li>
                    </ul>
                  </div>
                  <div className="skills">
                    <h2>Tools</h2>
                    <ul className="skill-list">
                      <li className="tech">
                        <label for="npm">NPM</label>
                        <img src={skillImages.npm} id="npm" />
                      </li>
                      <li className="tech">
                        <label for="postman">Postman</label>
                        <img src={skillImages.postman} id="postman" />
                      </li>
                      <li className="tech">
                        <label for="dev-tools">Dev Tools</label>
                        <img src={skillImages.devTools} id="dev-tools" />
                      </li>
                      <li className="tech">
                        <label for="git">Git</label>
                        <img src={skillImages.git} id="git" />
                      </li>
                      <li className="tech">
                        <label for="github">Github</label>
                        <img src={skillImages.github} id="github" />
                      </li>
                      <li className="tech">
                        <label for="trello">Trello</label>
                        <img src={skillImages.trello} id="trello" />
                      </li>
                      <li className="tech">
                        <label for="slack">Slack</label>
                        <img src={skillImages.slack} id="slack" />
                      </li>
                    </ul>
                  </div>
                </div> */}
                </div>
                <div
                  className="education__section"
                  name="Education"
                  onScroll={verticalScrollHandler}
                >
                  <h2 className="section_title">Education</h2>
                  <section className="education__section__experience-section">
                    {/* <ThumbnailMatrix thumbnails={projects} /> */}
                    <div className="experience-section__cards">
                      {education.map((exp) => (
                        //data is exported before reaching Thumbnail as Thumbnail will accept data from multiple sources - therefore must be generic.
                        <ExperienceCard
                          key={exp.key}
                          id={exp.id}
                          type={exp.type}
                          img={exp.img}
                          name={exp.name}
                          desc={exp.desc}
                          role={exp.role}
                          tech={exp.tech}
                          challenge={exp.challenge}
                          solution={exp.solution}
                          source={exp.source}
                          getData={getData}
                        />
                      ))}
                    </div>
                  </section>
                </div>
              </main>
              <FooterNav isFooter={true} />
            </div>
          </div>
        </div>
      ) : (
        <div className="page-wrapper">
          <div className="about-me__page-wrapper">
            <div className="about-me__page-width">
              <header>
                <NavBar />
                <h1>About Me</h1> {/*Extract to background image banner*/}
              </header>
              <main className="main-wrapper">
                <LgThumbnail
                  dataFromThumbnail={thumbnailData}
                  closeLgThumbnail={handleCloseLgThumbnail}
                />
                <div className="about-me__section">
                  <div className="about-me__contact-card">
                    <img className="about-me__img" src={img} />
                    <div className="about-me__social-media-nav">
                      <SocialMediaNav />
                      <a
                        className="download"
                        href="../../data/Gideon Miles Oluku - cv7.pdf"
                        target="#"
                      >
                        <button className="button">View CV</button>
                      </a>
                    </div>
                  </div>
                  <div className="about-me__bio">
                    <h2>Gideon Miles Oluku</h2>
                    <h5>Web Specialist - Web Analytics, Web Development.</h5>
                    <div className="about-me__bio__content">
                      <p>
                        I am a Web Developer with a background in Business
                        Studies, Agile development and Full Stack Development.
                      </p>
                      <p>
                        I have a passion for the creative process - planning,
                        designing and prototyping. I am also fasinated with the
                        underlaying Computer Science mechanics that drive the
                        development of digital products. This led to developing
                        my own projects{" "}
                        <a href="https://www.barteranything.com" target="#">
                          (BarterAnything)
                        </a>
                        , and recruiting 2 additional developers.
                      </p>
                      <p>
                        My passion for software development has led me to
                        volunteer and teach at{" "}
                        <a href="https://www.codeyourfuture.io" target="#">
                          Code Your Future
                        </a>
                        . I help to teach programming fundamentals on the
                        weekends for disadvantaged groups - this is can be
                        challenging but is very rewarding as students can often
                        ask questions that you have to think deeply about -
                        expanding both of our understanding of topic.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="projects-section">
                  <h2 className="section_title">Projects</h2>
                  {/* Import Project Component */}
                  {/* 
				
				// TODO: Manage thumbnails with rows and columns
				// if Total thumbnails is diviable by 3* equally -> then make full rows
				// if not -> then make as many rows of 3* as possible, then fill last row with remaining thumbnails 
				
				<ContentArea/>
				Loop: <ContentRow />
					Loop: <Thumbnail />

				*/}
                  <section className="project-section__thumbnail-carosel">
                    {/* <ThumbnailMatrix thumbnails={projects} /> */}
                    {projects.map((project) => (
                      //data is exported before reaching Thumbnail as Thumbnail will accept data from multiple sources - therefore must be generic.
                      <Thumbnail
                        key={project.key}
                        id={project.id}
                        type={project.type}
                        img={project.img}
                        name={project.name}
                        desc={project.desc}
                        short_desc={project.short_desc}
                        role={project.role}
                        tech={project.tech}
                        challenge={project.challenge}
                        solution={project.solution}
                        source={project.source}
                        getData={getData}
                      />
                    ))}
                  </section>
                </div>
                <div className="tech-stack__section">
                  <div className="tech-stack__section-wrapper">
                    <TechBanner techStack={techStack} />
                    <div className="tech-stack__overlay" />
                  </div>
                  {/* <div className="skills-wrapper">
                  <div className="skills">
                    <h2>Front End</h2>
                    <ul className="skill-list">
                      {console.log({ skillImages })}
                      <li className="tech">
                        <label for="html">HTML</label>
                        <img src={skillImages.html} id="html" />
                      </li>
                      <li className="tech">
                        <label for="css">CSS</label>
                        <img src={skillImages.css} id="css" />
                      </li>
                      <li className="tech">
                        <label for="js">JavaScript</label>
                        <img src={skillImages.js} id="js" />
                      </li>
                    </ul>
                  </div>
                  <div className="skills">
                    <h2>Back End</h2>
                    <ul className="skill-list">
                      <li className="tech">
                        <label for="nodejs">NodeJS</label>
                        <img src={skillImages.nodeJs} id="nodejs" />
                      </li>
                      <li className="tech">
                        <label for="mongodb">MongoDB</label>
                        <img src={skillImages.mongoDB} id="mongodb" />
                      </li>
                    </ul>
                  </div>
                  <div className="skills">
                    <h2>Libraries/Frameworks</h2>
                    <ul className="skill-list">
                      <li className="tech">
                        <label for="react">React</label>
                        <img src={skillImages.react} id="react" />
                      </li>
                    </ul>
                    <ul className="skill-list">
                      <li className="tech">
                        <label for="express">ExpressJS</label>
                        <img src={skillImages.express} id="express" />
                      </li>
                      <li className="tech">
                        <label for="reactn">React Native</label>
                        <img src={skillImages.reactNative} id="reactn" />
                      </li>
                    </ul>
                  </div>
                  <div className="skills">
                    <h2>Testing</h2>
                    <ul className="skill-list">
                      <li className="tech">
                        <label for="jest">Enzyme</label>
                        <img src={skillImages.jest} id="jest" />
                      </li>
                      <li className="tech">
                        <label for="jest">Jest</label>
                        <img src={skillImages.jest} id="jest" />
                      </li>
                    </ul>
                  </div>
                  <div className="skills">
                    <h2>Design</h2>
                    <ul className="skill-list">
                      <li className="tech">
                        <label for="photoshop">Photoshop</label>
                        <img src={skillImages.photoshop} id="photoshop" />
                      </li>
                      <li className="tech">
                        <label for="adobe">Adobe Illustrator</label>
                        <img src={skillImages.adobeIllistrator} id="adobe" />
                      </li>
                      <li className="tech">
                        <label for="figma">Figma</label>
                        <img src={skillImages.figma} id="figma" />
                      </li>
                      <li className="tech">
                        <label for="balsamiq">Balsamiq</label>
                        <img src={skillImages.balsamiq} id="balsamiq" />
                      </li>
                    </ul>
                  </div>
                  <div className="skills">
                    <h2>Methodology</h2>
                    <ul className="skill-list">
                      <li className="tech">
                        <label for="agile">Agile</label>
                        <img src={skillImages.agile} id="agile" />
                      </li>
                      <li className="tech">
                        <label for="lean">Lean Management</label>
                        <img src={skillImages.lean} id="lean" />
                      </li>
                      <li className="tech">
                        <label for="tdd">Test Driven Development</label>
                        <img src={skillImages.tdd} id="tdd" />
                      </li>
                    </ul>
                  </div>
                  <div className="skills">
                    <h2>Tools</h2>
                    <ul className="skill-list">
                      <li className="tech">
                        <label for="npm">NPM</label>
                        <img src={skillImages.npm} id="npm" />
                      </li>
                      <li className="tech">
                        <label for="postman">Postman</label>
                        <img src={skillImages.postman} id="postman" />
                      </li>
                      <li className="tech">
                        <label for="dev-tools">Dev Tools</label>
                        <img src={skillImages.devTools} id="dev-tools" />
                      </li>
                      <li className="tech">
                        <label for="git">Git</label>
                        <img src={skillImages.git} id="git" />
                      </li>
                      <li className="tech">
                        <label for="github">Github</label>
                        <img src={skillImages.github} id="github" />
                      </li>
                      <li className="tech">
                        <label for="trello">Trello</label>
                        <img src={skillImages.trello} id="trello" />
                      </li>
                      <li className="tech">
                        <label for="slack">Slack</label>
                        <img src={skillImages.slack} id="slack" />
                      </li>
                    </ul>
                  </div>
                </div> */}
                </div>
                <div className="education__section">
                  <h2 className="section_title">Education</h2>
                  <section className="education__section__experience-section">
                    {/* <ThumbnailMatrix thumbnails={projects} /> */}
                    <div className="experience-section__cards">
                      {education.map((exp) => (
                        //data is exported before reaching Thumbnail as Thumbnail will accept data from multiple sources - therefore must be generic.
                        <ExperienceCard
                          key={exp.key}
                          id={exp.id}
                          type={exp.type}
                          img={exp.img}
                          name={exp.name}
                          desc={exp.desc}
                          role={exp.role}
                          tech={exp.tech}
                          challenge={exp.challenge}
                          solution={exp.solution}
                          source={exp.source}
                          getData={getData}
                        />
                      ))}
                    </div>
                  </section>
                </div>
              </main>
              <FooterNav isFooter={true} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
