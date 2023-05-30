import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getArticles } from "../Utility";

function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  function fetchArticles() {
    getArticles().then((fetchedArticles) => {
      console.log(fetchedArticles);
      const articles = fetchedArticles.articles;
      setArticles(articles);
    });
  }

  return (
    <div className="articles-container">
      {articles.map((article) => (
        <div key={article.id} className="article-item">
          <img
            src={article.article_img_url}
            alt={article.title}
            style={{ maxWidth: "100%", maxHeight: "200px" }}
          />
          <h2>{article.title}</h2>
          <p>Comment Count: {article.comment_count}</p>
          <p>Topic: {article.topic}</p>
          
        </div>
      ))}
    </div>
  );
}

export default Articles;
