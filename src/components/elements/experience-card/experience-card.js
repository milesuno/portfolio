import React from "react";
import "./experience-card.css";

export default function ExperienceCard({
  key,
  id,
  type,
  img,
  name,
  desc,
  role,
  tech,
  challenge,
  solution,
  source,
  getData,
}) {
  return (
    <div className="experience-card">
      <img className="experience-card__img" src={img} />
      <div className="experience-card__contents">
        <h4>{name}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
}
