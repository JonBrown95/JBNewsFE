import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getArticles } from "../Utility";
import ArticleCard from "./ArticleCard";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticles();
  }, []);

  if (isLoading) {
    return <p>Content is loading...</p>
  }

  function fetchArticles() {
    getArticles().then((fetchedArticles) => {
      console.log(fetchedArticles);
      const articles = fetchedArticles.articles;
      setArticles(articles);
      setIsLoading(false)
    });
  }

  return (
    <div className="articles-container">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}

export default Articles;
