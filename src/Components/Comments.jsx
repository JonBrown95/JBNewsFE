import { addComment, getComments } from "../Utility";
import { useState, useEffect } from "react";
import like from "../assets/commentlike.png";
import user from "../assets/user.png";
import NewComment from "./NewComment";
function Comments({ articleId }) {
  const [comments, setComments] = useState([]);
 

  useEffect(() => {
    getComments(articleId).then((comments) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, []);

  const refreshComment = (newComment) => {
    setComments((prevComments) => [newComment, ...prevComments]);
    addComment(articleId, newComment);
    console.log(comments);
  };

  return (
    <div className="comments-container">
      <h3>Comments</h3>
      <NewComment articleId={articleId} commentSubmit={refreshComment} />
      {comments.map((comment) => (
        <div key={comment.comment_id} className="comment">
          <p>{comment.body}</p>
          <p>
            <img
              src={user}
              alt={"User icon"}
              style={{ width: "30px", height: "auto" }}
            />{" "}
            {comment.author}
          </p>
          <p></p>
        </div>
      ))}
    </div>
  );
}

export default Comments;
