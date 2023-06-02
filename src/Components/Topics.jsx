import React from "react";
import { useState, useEffect } from "react";
import { getTopics } from "../Utility";
import { Link } from "react-router-dom";

function Topics() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then(({ topics }) => {
      const topicsWithImages = topics.map((topic) => {
        let imgUrl = "";
        if (topic.slug === "coding") {
          imgUrl = "../src/assets/coding.gif";
        } else if (topic.slug === 'football') {
            imgUrl = "../src/assets/ball.gif"
        } else if (topic.slug === 'cooking') {
            imgUrl = "../src/assets/cooking.gif"
        }
        return { ...topic, image: imgUrl };
      });

      setTopics(topicsWithImages);
      console.log(topicsWithImages);
    });
  }, []);

  return (
    <div className="topics-container">
      {topics.map((topic) => (
        <div className="topic-card" key={topic.id}>
          <img
            src={topic.image}
            alt={topic.slug}
            style={{ maxWidth: "200px", maxHeight: "200px" }}
          />
          <h3>{topic.slug}</h3>
          <p>{topic.description}</p>
          <button className="topic-button">
          <Link to={`/topics/${topic.slug}`}>Read More</Link>
          </button>
        </div>
      ))}
    </div>
  );
}

export default Topics;
