import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticle, getArticles, getComments} from "../Utility";
import Comments from "./Comments";


function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState('');
  const [isLoading, setIsLoading] = useState(true);


useEffect(() => {
  fetchArticle();
}, []);
if (isLoading) {
    return <p>Content is loading...</p>
  }
function fetchArticle() {
  getArticle(article_id).then((singleArticle) => {
    setArticle(singleArticle);
    setIsLoading(false)
  });
}


return (
    <div className="article-container">
      <div className="article-image-container">
        <img
          src={article.article.article_img_url}
          alt={article.article.title}
          className="article-image"
        />
      </div>
      <div className="article-content">
        <h2 className="article-title">{article.article.title}</h2>
        <div className="article-info">
          <p className="article-author">By {article.article.author}</p>
          <p className="article-date">{article.article.created_at} </p>
          <p className="article-topic">Topic: {article.article.topic}</p>
        </div>
        <p className="article-body">{article.article.body}</p>
        <Comments articleId={article_id} />
      </div>
    </div>
  )}
  
export default SingleArticle;
