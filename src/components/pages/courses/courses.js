import React, { Component, useState, useEffect } from "react";
import Helmet from "react-helmet";

import NavBar from "../../elements/navbar/nav-bar";
import ThumbNail from "../../elements/thumbnail/thumbnail";
import LgThumbNail from "../../elements/lg-thumbnail/lg-thumbnail";
import FooterNav from "../../elements/footer-nav/footer-nav";

import "../../../style-sheets/portfolio.css";
import data from "../../../data/course-data.json";

export default function Courses() {
  const [selected, setSelected] = useState(false);
  const [thumbnailData, setThumbnailData] = useState(null);
  const [courses, setCourses] = useState([...data]);
  const [imgIndex, setImgIndex] = useState(null);

  useEffect(() => {
    window.data_hub = {
      page_type: "about",
      page_name: "Portfolio - Courses",
      site_section: "education",
      nav_selection: "education",
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

  function getData(data) {
    //Gets data on specified Thumbnail and sends data to be rendered as Lg-Thumbnail
    setSelected(true);
    setThumbnailData(data);
  }

  function handleCloseLgThumbnail(update) {
    console.log("from lg-thumbnail", update);
    setSelected(update);
  }
  return (
    <>
      <Helmet>
        <title>Portfolio - Courses</title>
        <meta
          name="description"
          content="Course and Educational programmes completed"
        />
      </Helmet>
      <div className="page-wrapper">
        <div className="page-width">
          {selected ? (
            <>
              {/* This is used to render single page items on Pop up or nav dropdown selections*/}
              <header>
                <NavBar />
                <h1>Courses</h1>
              </header>
              <main className={"main-wrapper"}>
                <LgThumbNail
                  dataFromThumbnail={thumbnailData}
                  closeLgThumbnail={handleCloseLgThumbnail}
                />
                <section className={"elements-wrapper"}>
                  {courses.map((course) => (
                    //data is exported before reaching ThumbNail as ThumbNail will accept data from multiple sources - therefore must be generic.
                    <ThumbNail
                      key={course.key}
                      id={course.id}
                      type={course.type}
                      img={course.img}
                      name={course.name}
                      desc={course.desc}
                      role={course.role}
                      tech={course.tech}
                      challenge={course.challenge}
                      solution={course.solution}
                      source={course.source}
                      getData={getData}
                    />
                  ))}
                </section>
              </main>
              <FooterNav isFooter={true} />
            </>
          ) : (
            <>
              {/* This is used to render large pop modal items on click*/}

              <header>
                <NavBar />
                <h1>Courses</h1>
              </header>
              <main className={"main-wrapper"}>
                <section className={"elements-wrapper"}>
                  {courses.map((course) => (
                    //data is exported before reaching ThumbNail as ThumbNail will accept data from multiple sources - therefore must be generic.
                    <ThumbNail
                      key={course.key}
                      id={course.id}
                      type={course.type}
                      img={course.img}
                      name={course.name}
                      desc={course.desc}
                      role={course.role}
                      tech={course.tech}
                      challenge={course.challenge}
                      solution={course.solution}
                      source={course.source}
                      getData={getData}
                    />
                  ))}
                </section>
              </main>
              <FooterNav isFooter={true} />
            </>
          )}
        </div>
      </div>
    </>
  );
}
