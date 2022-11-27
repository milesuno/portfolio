import React, { Component } from "react";
import Helmet from "react-helmet";
import NavBar from "../../elements/navbar/nav-bar";
import ThumbNail from "../../elements/thumbnail/thumbnail";
import ThumbnailMatrix from "../../elements/thumbnail-matrix/thumbnail-matrix";
// import LgThumbNail from "../../lg-thumbnail/lg-thumbnail";
import SocialMediaNav from "../../elements/social-media-nav/social-media-nav";

import img from "../../../data/git-profile-img.jpg";
import "../../../style-sheets/portfolio.css";
import "./about-me.css";
// import "../../"
import FooterNav from "../../elements/footer-nav/footer-nav";
import techStack from "../../../data/skill-images";

import projectData from "../../../data/project-data";
import courseData from "../../../data/course-data.json";
import projects from "../../../data/project-data";
import ExperienceCard from "../../elements/experience-card/experience-card";
import TechBanner from "../../elements/tech-banner/tech-banner";
import LgThumbNail from "../../elements/lg-thumbnail/lg-thumbnail";

class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //State holds all UX the data for the <ThumbNail /> component. This is passed as a Prop.
      thumbnailSelected: false, // thumbnail selected
      dataFromThumbnail: null, //
      projects: [...projectData],
      techStack: [],
      education: [...courseData],
    };
  }

  getData = (data) => {
    //Gets data on specified Thumbnail and sends data to be rendered as Lg-Thumbnail
    this.setState({ thumbnailSelected: true, dataFromThumbnail: data });
  };

  handleCloseLgThumbnail = (update) => {
    console.log("from lg-thumbnail", update);
    const body = document.querySelector("body");

    body.style.setProperty("overflow", "");

    this.setState({ thumbnailSelected: update });
  };

  render() {
    return (
      <>
        {this.state.thumbnailSelected === false ? (
          <div className="page-wrapper">
            <Helmet>
              <title>Portfolio - About Me</title>
              <meta
                name="description"
                content="About me page, highlighting resume achievements and channels to contact me"
              />
            </Helmet>
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
                          designing and prototyping. I am also fasinated with
                          the underlaying Computer Science mechanics that drive
                          the development of digital products. This led to
                          developing my own projects{" "}
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
                          challenging but is very rewarding as students can
                          often ask questions that you have to think deeply
                          about - expanding both of our understanding of topic.
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
					Loop: <ThumbNail />

				*/}
                    <section className="project-section__thumbnail-carosel">
                      {/* <ThumbnailMatrix thumbnails={projects} /> */}
                      {this.state.projects.map((project) => (
                        //data is exported before reaching ThumbNail as ThumbNail will accept data from multiple sources - therefore must be generic.
                        <ThumbNail
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
                          getData={this.getData}
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
                        {this.state.education.map((exp) => (
                          //data is exported before reaching ThumbNail as ThumbNail will accept data from multiple sources - therefore must be generic.
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
                            getData={this.getData}
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
            <Helmet>
              <title>Portfolio - About Me</title>
              <meta
                name="description"
                content="About me page, highlighting resume achievements and channels to contact me"
              />
            </Helmet>
            <div className="about-me__page-wrapper">
              <div className="about-me__page-width">
                <header>
                  <NavBar />
                  <h1>About Me</h1> {/*Extract to background image banner*/}
                </header>
                <main className="main-wrapper">
                  <LgThumbNail
                    dataFromThumbnail={this.state.dataFromThumbnail}
                    closeLgThumbnail={this.handleCloseLgThumbnail}
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
                          designing and prototyping. I am also fasinated with
                          the underlaying Computer Science mechanics that drive
                          the development of digital products. This led to
                          developing my own projects{" "}
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
                          challenging but is very rewarding as students can
                          often ask questions that you have to think deeply
                          about - expanding both of our understanding of topic.
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
					Loop: <ThumbNail />

				*/}
                    <section className="project-section__thumbnail-carosel">
                      {/* <ThumbnailMatrix thumbnails={projects} /> */}
                      {this.state.projects.map((project) => (
                        //data is exported before reaching ThumbNail as ThumbNail will accept data from multiple sources - therefore must be generic.
                        <ThumbNail
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
                          getData={this.getData}
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
                        {this.state.education.map((exp) => (
                          //data is exported before reaching ThumbNail as ThumbNail will accept data from multiple sources - therefore must be generic.
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
                            getData={this.getData}
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
}

export default AboutMe;
