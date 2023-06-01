import React from 'react';
import { Link } from 'react-router-dom';

function ArticleCard({ article }) {
  return (
    
    <div className="article-item">
       <Link to={`/articles/${article.article_id}`} className="article-link">
      <img
        src={article.article_img_url}
        alt={article.title}
        style={{ maxWidth: '100%', maxHeight: '200px' }}
      />
      <h2>{article.title}</h2>
      </Link>
      <p>Comment Count: {article.comment_count}</p>
      <p>Topic: {article.topic}</p>
      
    </div>
    
    
    
  );
}

export default ArticleCard;