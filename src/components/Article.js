import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutesToRead }) {
  // Bonus: Calculate the correct emoji based on minutes to read
  const renderReadTime = () => {
    if (minutesToRead < 30) {
      const cups = Math.ceil(minutesToRead / 5);
      return "☕️".repeat(cups);
    } else {
      const boxes = Math.ceil(minutesToRead / 10);
      return "🍱".repeat(boxes);
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date} • {renderReadTime()} {minutesToRead} min read</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
