import { getComments } from "../Utility";
import { useState, useEffect } from "react";
import like from "../assets/like.png";
import user from "../assets/user.png"
function Comments({ articleId }) {
  const [comments, setComments] = useState([]);
<<<<<<< Updated upstream

=======
const [isLoading, setIsLoading] = useState(true)
>>>>>>> Stashed changes
  useEffect(() => {
    getComments(articleId)
    .then((comments) => {
      setComments(comments);
      setIsLoading(false)
    });
  }, []);
  

  return (
    <div className="comments-container">
      <h3>Comments</h3>
      {comments.map((comment) => (
        <div key={comment.comment_id} className="comment">
          <p>{comment.body}</p>
          <p>
          <img
              src={user}
              alt={'User icon'}
              style={{ width: "30px", height: "auto" }}
            /> {" "}{comment.author}{" "}
            <img
              src={like}
              alt={'Vote icon'}
              style={{ width: "30px", height: "auto" }}
            />
            {" "}{comment.votes}
          </p>
          <p></p>
        </div>
      ))}
    </div>
  );
}

export default Comments;
