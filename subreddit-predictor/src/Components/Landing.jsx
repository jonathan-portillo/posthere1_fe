import React from "react";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    title: "Write your post",
    text: "Add a title and the text you want to share.",
  },
  {
    title: "We analyze it",
    text: "Our model compares it against thousands of subreddit communities.",
  },
  {
    title: "Pick your community",
    text: "Get the best matches along with predicted upvotes.",
  },
];

const Landing = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="hero">
        <div>
          <span className="eyebrow">Subreddit Predictor</span>
          <h1>
            Find the right <span>subreddit</span> for your post.
          </h1>
          <p className="lead">
            Post Match helps you find the best place to share on Reddit. Just
            create your post and we'll find the subreddit that is most
            appropriate.
          </p>
          <div className="hero-actions">
            <button className="btn" onClick={() => navigate("/signup")}>
              Get Started
            </button>
            <button
              className="btn btn-outline"
              onClick={() => navigate("/about")}
            >
              About
            </button>
          </div>
        </div>
        <div className="mock" aria-hidden="true">
          <div className="mock-bar">
            <i />
            <i />
            <i />
          </div>
          <div className="mock-body">
            <div className="mock-post">
              <span className="mock-label">Your post</span>
              <strong>Best budget mechanical keyboard?</strong>
              <p>Looking for something under $80 that feels great to type on.</p>
            </div>
            <div className="mock-results">
              <span className="mock-label">Suggested subreddits</span>
              <div className="prediction">
                <span className="sub">r/MechanicalKeyboards</span>
                <span className="pill">4.2k upvotes</span>
              </div>
              <div className="prediction">
                <span className="sub">r/BuyItForLife</span>
                <span className="pill">1.8k upvotes</span>
              </div>
              <div className="prediction">
                <span className="sub">r/hardware</span>
                <span className="pill">950 upvotes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <h2 className="section-title">How it works</h2>
      <section className="steps">
        {steps.map((step, i) => (
          <div className="step" key={step.title}>
            <div className="step-num">{i + 1}</div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </section>

      <section className="split">
        <div>
          <h2>Not sure where your post belongs?</h2>
          <p>
            Maybe you are new to Reddit and don't quite know the communities it
            has. Post Match has got you covered.
          </p>
        </div>
      </section>

      <section className="cta-band">
        <h2>Ready to post in the right place?</h2>
        <button className="btn" onClick={() => navigate("/signup")}>
          Create a free account
        </button>
      </section>
    </>
  );
};

export default Landing;
