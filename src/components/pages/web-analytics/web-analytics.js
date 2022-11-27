import { React, useState } from "react";
import { Helmet } from "react-helmet";
import ArticleCard from "../../elements/article-card/article-card";
import NavBar from "../../elements/navbar/nav-bar";
import "./web-analytics.css";

export default function WebAnalytics() {
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
      article_type: "web-analytics",
    },
  ]);

  return (
    <>
      <Helmet>
        <title>Web Analytics</title>
        <meta
          name="description"
          content="About me page, highlighting resume achievements and channels to contact me" //TODO:
        />
      </Helmet>
      <NavBar />
      <div className="web-analytics__wrapper">
        <div className="web-analytics__inner-width">
          <div>WEB Analytics</div>
          <div className="web-analytics__article-section">
            {articles
              .filter((article) => article.article_type !== "web-analytics")
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
