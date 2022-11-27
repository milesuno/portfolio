import { React, useState } from "react";
import { Helmet } from "react-helmet";
import ArticleCard from "../../elements/article-card/article-card";
import NavBar from "../../elements/navbar/nav-bar";
import "./blog.css";

export default function Blog() {
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
        <title>Blog</title>
        <meta
          name="description"
          content="About me page, highlighting resume achievements and channels to contact me" //TODO:
        />
      </Helmet>
      <NavBar />
      <div className="blog__wrapper">
        <div className="blog__inner-width">
          <main className="main-wrapper">
            <header>
              <NavBar />
              <h1>Blog</h1> {/*Extract to background image banner*/}
            </header>
            <div className="blog__page-wrapper">
              <div className="blog__article-section">
                {articles.map((article) => {
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
              <div className="blog__user-mini-card">
                <img src="#" />
                <p>
                  I am a Web Developer with a background in Business Studies,
                  Agile development and Full Stack Development.
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
