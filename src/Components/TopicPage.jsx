import React from "react";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetSingleTopic, getArticles } from "../Utility";
import { Link } from "react-router-dom";

function TopicPage() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { slug } = useParams();

  useEffect(() => {
    fetchArticles();
  }, []);

  if (isLoading) {
    return <p>Content is loading...</p>;
  }

  function fetchArticles() {
    getArticles().then((fetchedArticles) => {
      const results = fetchedArticles.articles;

      const filteredArticles = results.filter(
        (article) => article.topic === slug
      );
      setArticles(filteredArticles);

      setIsLoading(false);
    });
  }

  return (
    <div>
      <div className="articles-container">
        {articles.map((article) => (
          <div className="article-item" key={article.article_id}>
            <Link
              to={`/articles/${article.article_id}`}
              className="article-link"
            >
              <img
                src={article.article_img_url}
                alt={article.title}
                style={{ maxWidth: "100%", maxHeight: "200px" }}
              />
              <h2>{article.title}</h2>
            </Link>
            <p>Comment Count: {article.comment_count}</p>
            <p>Topic: {article.topic}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopicPage;
