import { React, useState } from "react";
import { Helmet } from "react-helmet";
import ArticleCard from "../../elements/article-card/article-card";
import NavBar from "../../elements/navbar/nav-bar";
import "./web-dev.css";

export default function WebDev() {
  const [articles, setArticles] = useState([
    {
      title: "Demo Article",
      summary: "This is a demo article created for the purpose of testing.",
      img_src: "#",
      author_img: "#",
      author_name: "Miles Oluku",
      date: "01.01.22",
      read_time: "8 mins",
      article_type: "web-dev",
    },
    {
      title: "Demo Article",
      summary: "This is a demo article created for the purpose of testing.",
      img_src: "#",
      author_img: "#",
      author_name: "Miles Oluku",
      date: "01.01.22",
      read_time: "8 mins",
      article_type: "web-analytics",
    },
    {
      title: "Demo Article",
      summary: "This is a demo article created for the purpose of testing.",
      img_src: "#",
      author_img: "#",
      author_name: "Miles Oluku",
      date: "01.01.22",
      read_time: "8 mins",
      article_type: "web-dev",
    },
    {
      title: "Demo Article",
      summary: "This is a demo article created for the purpose of testing.",
      img_src: "#",
      author_img: "#",
      author_name: "Miles Oluku",
      date: "01.01.22",
      read_time: "8 mins",
      article_type: "web-dev",
    },
    {
      title: "Demo Article",
      summary: "This is a demo article created for the purpose of testing.",
      img_src: "#",
      author_img: "#",
      author_name: "Miles Oluku",
      date: "01.01.22",
      read_time: "8 mins",
      article_type: "web-dev",
    },
    {
      title: "Demo Article",
      summary: "This is a demo article created for the purpose of testing.",
      img_src: "#",
      author_img: "#",
      author_name: "Miles Oluku",
      date: "01.01.22",
      read_time: "8 mins",
      article_type: "web-analyticsx ",
    },
  ]);

  return (
    <>
      <Helmet>
        <title>Web Development</title>
        <meta
          name="description"
          content="About me page, highlighting resume achievements and channels to contact me" //TODO:
        />
      </Helmet>
      <NavBar />
      <div className="web-dev__wrapper">
        <div className="web-dev__inner-width">
          <div>WEB DEV</div>
          <div className="web-dev__article-section">
            {articles
              .filter((article) => article.article_type !== "web-dev")
              .map((article) => {
                return (
                  <ArticleCard
                    title={article.title}
                    summary={article.summary}
                    img_src={article.img_src}
                    date={article.date}
                    author_img={article.author_img}
                    author_name={article.author_name}
                    read_time={article.read_time}
                    article_type={article.article_type}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
