import { updateVotes } from "../Utility";
import { useState } from "react";
import staticlike from "../assets/staticlike.png";
import dislike from "../assets/dislike.png";

function UpdateArticleVotes({ articleId, votes }) {
  const [voteCount, setVoteCount] = useState(votes);
  const [err, setErr] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);

  const handleUpvote = () => {
    if (hasVoted) return;

    setVoteCount((currVotes) => currVotes + 1);
    setHasVoted(true);
    setErr(null);

    updateVotes(1, articleId).catch((err) => {
      if (err.message) {
        setVoteCount((currVotes) => currVotes - 1);
        setHasVoted(false);
      }
      setErr("There was an error voting, please try again later.");
    });
  };

  const handleDownvote = () => {
    if (hasVoted) return;

    setVoteCount((currVotes) => currVotes - 1);
    setHasVoted(true);
    setErr(null);

    updateVotes(-1, articleId).catch((err) => {
      if (err.message) {
        setVoteCount((currVotes) => currVotes + 1);
        setHasVoted(false);
      }
      setErr("There was an error voting, please try again later.");
    });
  };

  return (
    <>
      {err ? <p>{err}</p> : null}
      <div>Votes: {voteCount} </div>
      <img
        src={staticlike}
        alt={"Upvote icon"}
        style={{
          width: "33px",
          height: "auto",
          cursor: hasVoted ? "default" : "pointer",
          marginRight: "10px",
        }}
        onClick={handleUpvote}
      />

      <img
        src={dislike}
        alt={"Downvote icon"}
        style={{
          width: "28px",
          height: "auto",
          cursor: hasVoted ? "default" : "pointer",
        }}
        onClick={handleDownvote}
      />
    </>
  );
}

export default UpdateArticleVotes;
