import React from "react";
import "./article-card.css";

export default function ArticleCard({
  title,
  summary,
  img_src,
  author_img,
  author_name,
  date,
  read_time,
  article_type,
}) {
  return (
    <div className="article-card">
      <img className="article-card__img" src={img_src} />
      <div className="article-card__content">
        <h5 className="article-card__content__title">{title}</h5>
        <p className="article-card__content__article-summary">{summary}</p>
        <div className="article-card__content__author-bar">
          <img className="article-card__content__author_img" src={author_img} />
          <h6 className="article-card__content__author_name">{author_name}</h6>
          <span className="article-card__content__date">{date}</span>
          <span className="article-card__content__read-time">{read_time}</span>
          <div className="article-card__content__type">{article_type}</div>
        </div>
      </div>
    </div>
  );
}
