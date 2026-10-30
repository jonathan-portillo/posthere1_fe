import React from "react";

const content = {
  login: {
    title: "Pick up where you left off.",
    text: "Your saved posts and predictions are waiting for you.",
  },
  signup: {
    title: "Post in the right place, every time.",
    text: "Create an account to get subreddit suggestions and keep track of your posts.",
  },
};

const points = [
  "Subreddit matches for any post",
  "Predicted upvotes for each match",
  "Your previous posts, saved",
];

const AuthPanel = ({ variant }) => {
  const { title, text } = content[variant];

  return (
    <aside className="auth-brand">
      <span className="auth-brand-label">Post Match</span>
      <h2>{title}</h2>
      <p>{text}</p>
      <ul>
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </aside>
  );
};

export default AuthPanel;
