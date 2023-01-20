import React, { Component, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Helmet from "react-helmet";

import "./lg-thumbnail.css";
import CarouselControls from "../carousel-controls/CarouselControls";
import SinglePageItem from "../single-page-item/SinglePageItem";
import closeBtn from "../../../data/page-btns/icons8-close-window-48.png";

//LG THUMBNAIL to become pop up modal with the following details:
//Image carosel, controls, desc, my role.
//Stand alone page component will display all the available information on a item.
//Stand alone page will be linked too from dropdown list or via "More..." button in Lg Thumbnail

//FIX: clicking more should link to  SPI without setting the ovreflow to hidden (or unsetting the overflow)

// class LgThumbnail extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selected: false, //if "more..." is clicked then render stand alone page
//       imgIndex: 0,
//       autoPlay: "",
//       img: this.props.img,
//     };
//   }

//   datalayerPush = (eventType, eventName) => {
//     // let dataLayer = window.dataLayer || [];

//     // window.dataLayer = [];
//     window.dataLayer.push({ event: eventType, page_name: eventName });
//     window.data_hub.events.push({ event: eventType, page_name: eventName });
//   };

//   componentDidMount() {
//     // this.datalayerPush("thumbnail_click", this.props.dataFromThumbnail.name);
//     const body = document.querySelector("body");
//     body.style.setProperty("overflow", "hidden");

//     const modal = document.querySelector(".modal");
//     const modalContent = document.querySelector(".modal-content");

//     const setModalAnimationAndCloseModal = () => {
//       this.setModalCloseAnimation();

//       //timeout allows animation to happen before re-render
//       setTimeout(() => {
//         this.props.closeLgThumbnail(0);
//       }, 100);
//     };

//     modal.addEventListener("click", setModalAnimationAndCloseModal);

//     modalContent.addEventListener("mouseleave", () => {
//       console.log("leave");

//       return modal.addEventListener("click", setModalAnimationAndCloseModal);
//     });

//     modalContent.addEventListener("mouseenter", () => {
//       console.log("enter");
//       return modal.removeEventListener("click", setModalAnimationAndCloseModal);
//     });
//   }

//   componentWillUnmount() {
//     const body = document.querySelector("body");
//     body.style.setProperty("overflow", "");
//   }

//   getData = (data) => {
//     //Gets data on specified Thumbnail and sends data to be rendered as Lg-Thumbnail
//     const { imgIndex, autoPlay } = data;
//     this.setState({ imgIndex, autoPlay });
//   };

//   setModalCloseAnimation = () => {
//     const modal = document.querySelector(".modal-content");
//     modal.style.setProperty("animation", "zoom-out 0.15s 1");
//   };

//   render() {
//     const { imgIndex, selected } = this.state;

//     return (
//       <>
//         {!selected ? (
//           <template id="myModal" className="modal">
//             <div className="modal-content">
//               <div className={"lg-thumbnail-page-wrapper"}>
//                 <button
//                   className={"lg-thumbnail-button"}
//                   onClick={() => {
//                     this.setModalCloseAnimation();

//                     //timeout allows animation to happen before re-render
//                     setTimeout(() => {
//                       this.props.closeLgThumbnail(false);
//                     }, 100);
//                   }}
//                 >
//                   <img src={closeBtn} />
//                 </button>
//                 <div className="lg-thumbnail-wrapper">
//                   <h1 className={"lg-thumbnail-title"}>{name}</h1>
//                   <img src={img[imgIndex]} className={"lg-thumbnail-img"} />
//                   {img.length > 1 ? (
//                     <CarouselControls getData={this.getData} img={img} />
//                   ) : null}
//                   <br />
//                   {desc ? (
//                     <p>
//                       <strong>Description:</strong>
//                       <br />
//                       {desc}
//                     </p>
//                   ) : null}
//                   {role ? (
//                     <p>
//                       <strong>Role:</strong>
//                       <br />

//                       {role}
//                     </p>
//                   ) : null}
//                   {tech ? (
//                     <span className="tech-stack">
//                       <strong>Technologies:</strong>
//                       <br />

//                       {console.log("TECH SPLIT", tech.split(","))}
//                       <ul className="tech-list">
//                         {tech.split(",").map((str) => {
//                           return <li className="tech">{str}</li>;
//                         })}
//                       </ul>
//                     </span>
//                   ) : null}
//                   {challenge ? (
//                     <p>
//                       <strong>Challenge:</strong>
//                       <br />

//                       {challenge}
//                     </p>
//                   ) : null}
//                   {solution ? (
//                     <p>
//                       <strong>Solution:</strong>
//                       <br />

//                       {solution}
//                     </p>
//                   ) : null}
//                   {source ? (
//                     <>
//                       <strong>Sources:</strong>
//                       {source.url ? (
//                         <p>
//                           URL:
//                           <br />
//                           <a href={source.url} target="_blank">
//                             {source.url}
//                           </a>
//                         </p>
//                       ) : null}
//                       {source.github ? (
//                         <p>
//                           Github:
//                           <br />
//                           <a href={source.github} target="_blank">
//                             {source.github}
//                           </a>
//                         </p>
//                       ) : null}
//                       {source.trello ? (
//                         <p>
//                           Trello:
//                           <br />
//                           <a href={source.github}>{source.trello}</a>
//                         </p>
//                       ) : null}
//                     </>
//                   ) : null}
//                 </div>
//               </div>
//             </div>
//           </template>
//         ) : (
//           <>
//             //This is replaces the pop up which means the other items that
//             aren't selected will still be displayed. This in effect still
//             replaces the original thumbnail
//             <SinglePageItem
//               // if selected return SinglePageItem
//               key={id}
//               img={img}
//               name={name}
//               desc={desc}
//               role={role}
//               tech={tech}
//               challenge={challenge}
//               solution={solution}
//               source={source}
//             />
//           </>
//         )}
//       </>
//     );
//   }
// }

// export default LgThumbnail;

export default function LgThumbnail({ closeLgThumbnail, dataFromThumbnail }) {
  const [selected, setSelected] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(null);
  const [img, setImg] = useState(dataFromThumbnail.img);
  const history = useHistory();

  function setModalAnimationAndCloseModal() {
    setModalCloseAnimation();

    //timeout allows animation to happen before re-render
    setTimeout(() => {
      closeLgThumbnail(false);
    }, 100);
  }

  useEffect(() => {
    console.log({ dataFromThumbnail });
    datalayerPush("thumbnail_click", dataFromThumbnail.name);
    let URLfragment = dataFromThumbnail.name.toLowerCase().replaceAll(" ", "_");
    history.push(`${document.location.pathname}#${URLfragment}`);

    datalayerPush("virtual_page_view", dataFromThumbnail.name);

    const body = document.querySelector("body");
    body.style.setProperty("overflow", "hidden");

    const modal = document.querySelector(".modal");
    const modalContent = document.querySelector(".modal-content");

    // const setModalAnimationAndCloseModal = () => {
    //   setModalCloseAnimation();

    //   //timeout allows animation to happen before re-render
    //   setTimeout(() => {
    //     closeLgThumbnail(false);
    //   }, 100);
    // };

    // modal.addEventListener("click", setModalAnimationAndCloseModal);

    // modalContent.addEventListener("mouseleave", () => {
    //   console.log("leave");

    //   return modal.addEventListener("click", setModalAnimationAndCloseModal);
    // });

    // modalContent.addEventListener("mouseenter", () => {
    //   console.log("enter");
    //   return modal.removeEventListener("click", setModalAnimationAndCloseModal);
    // });

    return () => {
      history.goBack();

      const body = document.querySelector("body");
      body.style.setProperty("overflow", "");
    };
  }, []);

  function datalayerPush(eventType, title) {
    if (eventType === "thumbnail_click") {
      window.dataLayer.push({
        event: eventType,
        page_title: title,
        thumbnail_name: title,
        page_URL: window.location.href,
      });
    }

    if (eventType === "virtual_page_view") {
      window.dataLayer.push({
        event: eventType,
        page_title: title,
        page_URL: window.location.href,
      });
    }

    // window.data_hub.events.push({ event: eventType, page_name: eventName });
  }

  function getData(data) {
    //Gets data on specified Thumbnail and sends data to be rendered as Lg-Thumbnail
    let { imgIndex, autoPlay } = data;
    console.log({ data });
    setImgIndex(imgIndex);
    setAutoPlay(autoPlay);
  }

  function setModalCloseAnimation() {
    const modal = document.querySelector(".modal-content");
    modal.style.setProperty("animation", "zoom-out 0.15s 1");
  }

  return (
    <>
      <Helmet>
        <title>Portfolio - About Me - {dataFromThumbnail.name}</title>
        <meta
          name="description"
          content="About me page, highlighting resume achievements and channels to contact me"
        />
      </Helmet>
      {!selected ? (
        <div
          id="myModal"
          className="modal"
          // onClick={setModalAnimationAndCloseModal}
          onMouseLeave={(e) =>
            e.target.addEventListener("click", setModalAnimationAndCloseModal)
          }
          onMouseEnter={(e) =>
            e.target.removeEventListener(
              "click",
              setModalAnimationAndCloseModal
            )
          }
        >
          <div className="modal-content">
            <div className={"lg-thumbnail-page-wrapper"}>
              <button
                id="close_lg-thumbnail"
                className={"lg-thumbnail-button"}
                onClick={() => {
                  setModalCloseAnimation();

                  //timeout allows animation to happen before re-render
                  setTimeout(() => {
                    closeLgThumbnail(false);
                  }, 100);
                }}
              >
                <img src={closeBtn} />
              </button>
              <div className="lg-thumbnail-wrapper">
                <h1 className={"lg-thumbnail-title"}>
                  {dataFromThumbnail.name}
                </h1>
                <div className="lg-thumbnail-img__wrapper">
                  <img src={img[imgIndex]} className={"lg-thumbnail-img"} />
                  {dataFromThumbnail.img.length > 1 ? (
                    <CarouselControls
                      getData={getData}
                      img={dataFromThumbnail.img}
                    />
                  ) : null}
                </div>
                <br />
                {dataFromThumbnail.desc ? (
                  <p>
                    <strong>Description:</strong>
                    <br />
                    {dataFromThumbnail.desc}
                  </p>
                ) : null}
                {dataFromThumbnail.role ? (
                  <p>
                    <strong>Role:</strong>
                    <br />

                    {dataFromThumbnail.role}
                  </p>
                ) : null}
                {dataFromThumbnail.tech ? (
                  <span className="tech-stack">
                    <strong>Technologies:</strong>
                    <br />
                    <ul className="tech-list">
                      {dataFromThumbnail.tech.split(",").map((str) => {
                        return <li className="tech">{str}</li>;
                      })}
                    </ul>
                  </span>
                ) : null}
                {dataFromThumbnail.challenge ? (
                  <p>
                    <strong>Challenge:</strong>
                    <br />

                    {dataFromThumbnail.challenge}
                  </p>
                ) : null}
                {dataFromThumbnail.solution ? (
                  <p>
                    <strong>Solution:</strong>
                    <br />

                    {dataFromThumbnail.solution}
                  </p>
                ) : null}
                {dataFromThumbnail.source ? (
                  <div className="lg-thumbnail__sources">
                    <strong>Sources:</strong>
                    {dataFromThumbnail.source.url ? (
                      <p>
                        URL:
                        <br />
                        <a href={dataFromThumbnail.source.url} target="_blank">
                          {dataFromThumbnail.source.url}
                        </a>
                      </p>
                    ) : null}
                    {dataFromThumbnail.source.github ? (
                      <p>
                        Github:
                        <br />
                        <a
                          href={dataFromThumbnail.source.github}
                          target="_blank"
                        >
                          {dataFromThumbnail.source.github}
                        </a>
                      </p>
                    ) : null}
                    {dataFromThumbnail.source.trello ? (
                      <p>
                        Trello:
                        <br />
                        <a href={dataFromThumbnail.source.github}>
                          {dataFromThumbnail.source.trello}
                        </a>
                      </p>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          //This is replaces the pop up which means the other items that aren't
          selected will still be displayed. This in effect still replaces the
          original thumbnail
          <SinglePageItem
            // if selected return SinglePageItem
            key={dataFromThumbnail.id}
            img={dataFromThumbnail.img}
            name={dataFromThumbnail.name}
            desc={dataFromThumbnail.desc}
            role={dataFromThumbnail.role}
            tech={dataFromThumbnail.tech}
            challenge={dataFromThumbnail.challenge}
            solution={dataFromThumbnail.solution}
            source={dataFromThumbnail.source}
          />
        </>
      )}
    </>
  );
}
