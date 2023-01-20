import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./nav-bar.css";
import courseData from "../../../data/course-data.json";
import projectData from "../../../data/project-data";
import uxData from "../../../data/ux-data";
import socialMediaData from "../../../data/social-media-data.js";
import menu from "../../../landing-video/icons8-menu-squared-96.png";
import closeMenu from "../../../landing-video/icons8-close-window-96.png";
import scrollTopBtnIcon from "../../../data/page-btns/icons8-slide-up-100.png";
// import LandingPage from "../landing-page/landing-page";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPage: window.location.pathname, // UPDATE on button click? SET based on pathname
      course: courseData,
      project: projectData,
      ux: uxData,
      socialMedia: socialMediaData,
      menuToggle: true,
      isLandingPage: this.props.isLandingPage || false,
    };
  }

  componentDidMount() {
    // this.setState({ selectedPage: window.location.pathname });

    const navContent = document.querySelector(".nav-content");
    const collaspedMenuBtn = document.querySelector(".collasped-menu-btn");

    if (this.props.isLandingPage) {
      this.setState({ isLandingPage: true });
      collaspedMenuBtn.style.setProperty("display", "flex");
      navContent.classList.remove("full-menu");
      navContent.classList.add("short-menu");
      navContent.classList.add("landing-nav");
      return;
    }

    window.addEventListener("scroll", this.toggleScrollTopBtn);

    window.scrollTo({
      top: 0,
      left: 0,
    });
    this.setNavLayout();

    if (this.state.isLandingPage === false)
      window.addEventListener("resize", this.setNavLayout);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.toggleScrollTopBtn);
    window.removeEventListener("resize", this.setNavLayout);
    this.setState({ isLandingPage: false });
  }

  setNavLayout = () => {
    const navContent =
      document.querySelector(".nav-content") ||
      document.querySelector(".nav-content-landing");
    const collaspedMenuBtn = document.querySelector(".collasped-menu-btn");
    if (window.innerWidth <= 450) {
      collaspedMenuBtn.style.setProperty("display", "flex");
      navContent.classList.remove("full-menu");
      navContent.classList.add("short-menu");
    } else {
      collaspedMenuBtn.style.setProperty("display", "none");
      navContent.classList.remove("short-menu");
      navContent.classList.add("full-menu");
    }
  };

  //FIX: Short menu toggle display bug when resized

  showMenuButtons = () => {
    const navContent =
      document.querySelector(".nav-content") ||
      document.querySelector(".nav-content-landing");
    const navOverlay = document.querySelector(".nav-overlay");
    if (this.state.menuToggle) {
      navContent.classList.remove("hide");
      navContent.classList.add("show");
      navOverlay.classList.add("visible");
      this.setState({ menuToggle: false });
    } else {
      navContent.classList.remove("show");
      navContent.classList.add("hide");
      navOverlay.classList.remove("visible");
      this.setState({ menuToggle: true });
    }
  };

  toggleScrollTopBtn = () => {
    console.dir(window.scrollY);
    const scrollTopBtn = document.querySelector("div.scroll-top-btn");
    if (window.scrollY > window.innerHeight * 0.66) {
      scrollTopBtn.classList.add("active");
      scrollTopBtn.style.setProperty("visibility", "visible");
      scrollTopBtn.style.setProperty("top", `${window.innerHeight - 110}px`);
    } else {
      scrollTopBtn.style.setProperty("visibility", "hidden");
    }
  };

  render() {
    const { menuToggle, selectedPage } = this.state;
    // TODO: Apply BEM Naming Convention
    // TODO: Add Sub Nav
    // TODO: Set Sub Nav state in useEffect (onload)?

    return (
      // TODO: If Landing Page render landing-nav css classname
      <>
        {selectedPage === "/" ? (
          <nav className="nav">
            {console.log({ selectedPage })}
            <div className="nav__wrapper">
              {console.log({ menuToggle })}
              <div className="nav-overlay" onClick={this.showMenuButtons} />
              <div className="short-nav">
                <div className="logo-container">
                  <Link to="/">
                    <p className="logo-signature">Gideon Miles Oluku</p>
                  </Link>
                </div>
                <div
                  className="collasped-menu-btn"
                  onClick={this.showMenuButtons}
                >
                  {this.state.menuToggle ? (
                    <img src={menu} />
                  ) : (
                    <img src={closeMenu} />
                  )}
                </div>
                <ul className="nav-content-landing">
                  <li className="nav-item nav-li">
                    <Link
                      className="link lg-display button"
                      to="/about"
                      name="about"
                    >
                      ABOUT
                    </Link>
                  </li>
                  {/* <li className="nav-item nav-li">
                <Link className="link lg-display button" to="/blog" name="blog">
                  BLOG
                </Link>
              </li> */}
                  <li className="nav-item nav-li">
                    <Link
                      className="link lg-display button"
                      to="/contact"
                      name="about-me"
                    >
                      CONTACT
                    </Link>
                  </li>
                </ul>
                <div
                  className="scroll-top-btn"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    })
                  }
                >
                  <img src={scrollTopBtnIcon} />
                </div>
              </div>
              {/* TODO: Sub Nav should animate transition onto page */}
              {selectedPage === "/about" ||
              selectedPage === "/about/projects" ||
              selectedPage === "/about/education" ? (
                <ul className="nav__sub-nav fade">
                  <li className="nav-item">
                    <Link to="/about/projects">Projects</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about/education">Education</Link>
                  </li>
                </ul>
              ) : selectedPage === "/blog" ||
                selectedPage === "/blog/web-analytics" ||
                selectedPage === "/blog/web-dev" ? (
                <ul className="nav__sub-nav fade">
                  <li className="nav-item">
                    <Link to="/blog/web-analytics">Web Analytics</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/blog/web-dev">Web Dev</Link>
                  </li>
                </ul>
              ) : (
                <></>
              )}
            </div>
          </nav>
        ) : (
          <nav className="nav">
            {console.log({ selectedPage })}
            <div className="nav__wrapper">
              {console.log({ menuToggle })}
              <div className="nav-overlay" onClick={this.showMenuButtons} />
              <div className="short-nav">
                <div className="logo-container">
                  <Link to="/">
                    <p className="logo-signature">Gideon Miles Oluku</p>
                  </Link>
                </div>
                <div
                  className="collasped-menu-btn"
                  onClick={this.showMenuButtons}
                >
                  {this.state.menuToggle ? (
                    <img src={menu} />
                  ) : (
                    <img src={closeMenu} />
                  )}
                </div>
                <ul className="nav-content">
                  <li className="nav-item nav-li">
                    <Link
                      className="link lg-display button"
                      to="/about"
                      name="about"
                    >
                      ABOUT
                    </Link>
                  </li>
                  {/* <li className="nav-item nav-li">
                <Link className="link lg-display button" to="/blog" name="blog">
                  BLOG
                </Link>
              </li> */}
                  <li className="nav-item nav-li">
                    <Link
                      className="link lg-display button"
                      to="/contact"
                      name="about-me"
                    >
                      CONTACT
                    </Link>
                  </li>
                </ul>
                <div
                  className="scroll-top-btn"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    })
                  }
                >
                  <img src={scrollTopBtnIcon} />
                </div>
              </div>
              {/* TODO: Sub Nav should animate transition onto page */}
              {selectedPage === "/about" ||
              selectedPage === "/about/projects" ||
              selectedPage === "/about/education" ? (
                <ul className="nav__sub-nav fade">
                  <li className="nav-item">
                    <Link to="/about/projects">Projects</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about/education">Education</Link>
                  </li>
                </ul>
              ) : selectedPage === "/blog" ||
                selectedPage === "/blog/web-analytics" ||
                selectedPage === "/blog/web-dev" ? (
                <ul className="nav__sub-nav fade">
                  <li className="nav-item">
                    <Link to="/blog/web-analytics">Web Analytics</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/blog/web-dev">Web Dev</Link>
                  </li>
                </ul>
              ) : (
                <></>
              )}
            </div>
          </nav>
        )}
      </>
    );
  }
}

export default NavBar;
