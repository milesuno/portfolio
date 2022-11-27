import React from "react";
import "./tech-tile.css";

export default function TechTile({ tech }) {
  return (
    <div className="tech-tile">
      <img className="tech-tile__img" src={tech.img_src} />
      <h5 className="tech-tile__name">{tech.name}</h5>
    </div>
  );
}
