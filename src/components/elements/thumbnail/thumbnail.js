import React, { Component, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./thumbnail.css";
// import LgThumbnail from "../../lg-thumbnail/lg-thumbnail";
import CarouselControls from "../carousel-controls/CarouselControls";

export default function Thumbnail(props) {
  const [imgIndex, setImgIndex] = useState(0);
  const [selected, setSelected] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);
  const [id, setId] = useState(props.id);
  const [type, setType] = useState(props.type);
  const [name, setName] = useState(props.name);
  const [img, setImg] = useState(props.img);
  const [desc, setDesc] = useState(props.desc);
  const [short_desc, setShortDesc] = useState(props.short_desc);
  const [role, setRole] = useState(props.role);
  const [tech, setTech] = useState(props.tech);
  const [challenge, setChallenge] = useState(props.challenge);
  const [solution, setSolution] = useState(props.solution);
  const [source, setSource] = useState(props.source);
  const [checkScroll, setCheckScroll] = useState(props.checkScroll);
  const [isLoaded, setIsLoaded] = useState(props.isLoaded);
  const history = useHistory();

  // TODO: merge into useEffect

  useEffect(() => {
    // history.push(`/${name}`);
    console.log("thumbnail data:", props);
    return () => {
      // history.push("/");
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
  }

  function thumbnailSwitch() {
    // datalayerPush("thumbnail_click", name);
    setSelected(!selected);
    props.getData({
      imgIndex,
      selected,
      autoPlay,
      id,
      type,
      name,
      img,
      desc,
      short_desc,
      role,
      tech,
      challenge,
      solution,
      source,
      checkScroll,
      isLoaded,
    });
  }

  return (
    <>
      <div className="thumbnail-page-wrapper fade">
        <div className="thumbnail-wrapper" onClick={thumbnailSwitch}>
          {/* {this.props.img ? ( */}
          <img src={img[imgIndex]} className={"thumbnail-img"} />
          {/* ) : <div>"NOPE"</div>} */}
          <h2 className="thumbnail-title">{name}</h2>
          <span className="thumbnail__short-desc">{short_desc}</span>

          {/* <span className="thumbnail__tech-stack">Technologies: {tech}</span> */}
        </div>
        {/* {img.length > 1 ? (
							<CarouselControls
								getData={this.getData}
								img={this.props.img}
							/>
						) : null} */}
      </div>
    </>
  );
}
