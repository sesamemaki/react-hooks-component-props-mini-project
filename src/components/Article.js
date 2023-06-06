import React from "react";

const Article = ({ title, date, preview, minutes }) => {
  function roundNearest5(num) {
    return Math.round(num / 5);
  }
  function roundNearest10(num) {
    return Math.round(num / 10);
  }

   function displayEmoji() {
    const emojiArray = [];
    if (minutes <= 30) {
      for (let i = 0; i < roundNearest5(minutes); i++) {
        emojiArray.push("☕️");
      }
      return emojiArray.join(" ") + " " + minutes + " mins to read";
    } else {
      for (let i = 0; i < roundNearest10(minutes); i++) {
        emojiArray.push("🍱");
      }
      return emojiArray.join("") + " " + minutes + " mins to read";
    }
  };

  return (
    <div>
      <article>
        <h3>{title}</h3>
        <small>{date ? date : "January 1, 1970"}</small> • 
        <small>{minutes} min read</small>
        <span>{displayEmoji()}</span>
        <p>{preview}</p>
      </article>
    </div>
  );
};

export default Article;
