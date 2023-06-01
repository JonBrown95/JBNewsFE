import { getArticle, updateVotes } from "../Utility";
import { useEffect, useState } from "react";
import staticlike from "../assets/staticlike.png";
import dislike from "../assets/dislike.png"

function UpdateArticleVotes({ articleId }) {
  const [votes, setVotes] = useState(0);
  const [err, setErr] = useState(null);

  useEffect(() => {
    getArticle(articleId).then((singleArticle) => {
      setVotes(singleArticle.article.votes);
      console.log(singleArticle.article.votes);
    });
  }, []);

  const handleUpvote = () => {
    setVotes((currVotes) => currVotes + 1);
    setErr(null);
    updateVotes(1, articleId).catch((err) => {
      if (err.message) setVotes((currVotes) => currVotes - 1);
      setErr("There was an error voting, please try again later.");
    });
  };

  const handleDownvote = () => {
    setVotes((currVotes) => currVotes - 1);
    setErr(null);
    updateVotes(-1, articleId).catch((err) => {
      if (err.message) setVotes((currVotes) => currVotes - 1);
      setErr("There was an error voting, please try again later.");
    });
  };

  return (
    <>
      {err ? <p>{err}</p> : null}
      <div>Votes: {votes} </div>
      <img
        src={staticlike}
        alt={"Vote icon"}
        style={{ width: "33px", height: "auto" ,
      cursor: "pointer",
      marginRight: "10px"}}
        onClick={handleUpvote}
        />

<img
        src={dislike}
        alt={"Vote icon"}
        style={{ width: "28px", height: "auto" ,
      cursor: "pointer"}}
        onClick={handleDownvote}
        />

    </>
  );
}

export default UpdateArticleVotes;
