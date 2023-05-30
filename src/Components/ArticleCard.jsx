import React from 'react';

function ArticleCard({ article }) {
  return (
    <div className="article-item">
      <img
        src={article.article_img_url}
        alt={article.title}
        style={{ maxWidth: '100%', maxHeight: '200px' }}
      />
      <h2>{article.title}</h2>
      <p>Comment Count: {article.comment_count}</p>
      <p>Topic: {article.topic}</p>
    </div>
  );
}

export default ArticleCard;