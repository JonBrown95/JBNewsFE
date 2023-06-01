import { useState } from "react";
import { addComment } from "../Utility";

function NewComment({ articleId, commentSubmit}) {
  const [commentText, setCommentText] = useState("");

  const handleCommentSubmit = () => {
    if (!commentText) return;

    const newComment = {
      author: "grumpy19",
      body: commentText,
      article_id: +articleId,
    };
    
    commentSubmit(newComment)
    setCommentText("");
  };

  return (
    <div className="new-comment">
      <textarea
      className="comment-textbox"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Leave a comment :)"
      ></textarea>
      <button onClick={handleCommentSubmit}>Submit</button>
    </div>
  );
}

export default NewComment;
