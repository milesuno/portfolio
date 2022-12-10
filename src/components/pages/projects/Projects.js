import React, { useEffect, useState } from "react";
import ThumbNail from "../../elements/thumbnail/thumbnail";

import LgThumbNail from "../../elements/lg-thumbnail/lg-thumbnail";
import NavBar from "../../../components/elements/navbar/nav-bar";
import "./project.css";
import Helmet from "react-helmet";

import FooterNav from "../../elements/footer-nav/footer-nav";
import data from "../../../data/project-data";
import ThumbnailMatrix from "../../elements/thumbnail-matrix/thumbnail-matrix";
import { Container, Row, Col } from "react-bootstrap";

export default function Projects() {
  const [selected, setSelected] = useState(false);
  const [thumbnailData, setThumbnailData] = useState(null);
  const [projects, setProjects] = useState([...data]);

  function getData(data) {
    //Gets data on specified Thumbnail and sends data to be rendered as Lg-Thumbnail
    setSelected(true);
    setThumbnailData(data);
  }

  function handleCloseLgThumbnail(update) {
    console.log("from lg-thumbnail", update);
    setSelected(update);
  }

  useEffect(() => {
    window.data_hub = {
      page_type: "about",
      page_name: "Portfolio - Projects",
      site_section: "project",
      nav_selection: "project",
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
  }, []);

  return (
    <>
      <Helmet>
        <title>Portfolio - Projects</title>
        <meta name="description" content="Portfolio Projects" />
        <link rel="icon" href="#" />
      </Helmet>
      <>
        <div className={"page-wrapper"}>
          <div className="page-width">
            {selected ? (
              <>
                {/* This is used to render single page items on Pop up or nav dropdown selections*/}
                <header>
                  <NavBar />
                  <h1>Projects</h1>
                </header>
                <main className={"main-wrapper"}>
                  <LgThumbNail
                    dataFromThumbnail={thumbnailData}
                    closeLgThumbnail={handleCloseLgThumbnail}
                  />
                  <section className={"elements-wrapper"}>
                    <ThumbnailMatrix thumbnails={projects} getData={getData} />
                    {/* {projects.map((project) => {
                            //data is exported before reaching ThumbNail as ThumbNail will accept data from multiple sources - therefore must be generic.
                            return (
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
                            );
                          })} */}
                  </section>
                </main>
                <FooterNav />
              </>
            ) : (
              <>
                {/* This is used to render large pop modal items on click*/}

                <header>
                  <NavBar />
                  <h1>Projects</h1>
                </header>
                <main className={"main-wrapper"}>
                  <section className={"elements-wrapper"}>
                    <ThumbnailMatrix thumbnails={projects} getData={getData} />

                    {/* {projects.map((project) => (
                        //data is exported before reaching ThumbNail as ThumbNail will accept data from multiple sources - therefore must be generic.
                        <ThumbNail
                          key={project.key}
                          id={project.id}
                          type={project.type}
                          img={project.img}
                          name={project.name}
                          desc={project.desc}
                          role={project.role}
                          tech={project.tech}
                          challenge={project.challenge}
                          solution={project.solution}
                          source={project.source}
                          getData={this.getData}
                        />
                      ))} */}
                  </section>
                </main>
                <FooterNav isFooter={true} />
              </>
            )}
          </div>
        </div>
      </>
    </>
  );
}
