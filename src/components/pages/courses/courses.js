import React, { Component } from "react";
import Helmet from "react-helmet";

import NavBar from "../../elements/navbar/nav-bar";
import ThumbNail from "../../elements/thumbnail/thumbnail";
import LgThumbNail from "../../elements/lg-thumbnail/lg-thumbnail";
import FooterNav from "../../elements/footer-nav/footer-nav";

import "../../../style-sheets/portfolio.css";
import data from "../../../data/course-data.json";

class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgIndex: 0,
      selected: 0,
      courses: data,
      dataFromThumbnail: "",
    };
  }
  //FIX: Add Courses completed Page: JS 30, FreeCodeCamp, SoloLearn, CYF Challenges
  getData = (data) => {
    //Gets data on specified Thumbnail and sends data to be rendered as Lg-Thumbnail
    this.setState({ selected: 1, dataFromThumbnail: data });
  };

  handleCloseLgThumbnail = (update) => {
    console.log("from lg-thumbnail", update);
    this.setState({ selected: update });
  };

  render() {
    const { selected, courses, dataFromThumbnail } = this.state;
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
                    dataFromThumbnail={dataFromThumbnail}
                    closeLgThumbnail={this.handleCloseLgThumbnail}
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
                        getData={this.getData}
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
                        getData={this.getData}
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
}

export default Courses;
