import { React, useState, useEffect } from "react";
import TechTile from "../tech-tile/tech-tile";
import "./tech-banner.css";

// TODO: Turn teckStack from object to array of objects

export default function TechBanner({ techStack }) {
  console.log({ techStack });
  return (
    <div className="tech-banner">
      {techStack.map((tech) => (
        <TechTile tech={tech} />
      ))}
    </div>
  );
}
