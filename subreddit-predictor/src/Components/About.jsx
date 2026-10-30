import React, { useState, useEffect } from "react";
import "../About.css";

const About = () => {
  const [slide, setSlide] = useState(0);
  const [dir, setDir] = useState("next");

  const go = (i) => {
    setDir(i > slide ? "next" : "prev");
    setSlide(i);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight" && slide === 0) go(1);
      if (e.key === "ArrowLeft" && slide === 1) go(0);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <div className="about-carousel">
      <div className="carousel-side left">
        {slide === 1 && (
          <button
            className="carousel-arrow"
            onClick={() => go(0)}
            aria-label="Back to About Post Match"
          >
            <svg
              className="arrow-icon flip"
              viewBox="0 0 24 48"
              aria-hidden="true"
            >
              <polyline points="4,4 20,24 4,44" />
            </svg>
            <span className="arrow-label">About</span>
          </button>
        )}
      </div>

      <div className={`carousel-slide ${dir}`} key={slide}>
        {slide === 0 ? (
          <>
      <div className="about-head">
        <h1>About Post Match</h1>
        <p>Take the hassle out of figuring out where your post belongs.</p>
      </div>

      <section className="about-project">
        <div className="about-copy">
          <h2>What it is</h2>
          <p>
            Reddit has thousands of communities, and posting in the wrong one
            means your post gets ignored or removed. Post Match takes a title
            and the text of your post, then suggests the subreddits where it
            fits best and the upvotes it's likely to earn in each.
          </p>
          <p>
            It started in 2020 as a team project between front end, backend and
            data science developers. The front end has since been rebuilt with
            a modern toolchain and a new design as a portfolio piece.
          </p>
        </div>
        <div className="about-stack">
          <h2>How it's built</h2>
          <div className="stack-item">
            <span className="stack-tag">Front end</span>
            <p>React, Redux and Material UI, bundled with Vite.</p>
          </div>
          <div className="stack-item">
            <span className="stack-tag">Backend</span>
            <p>
              A REST API handling accounts, saved posts and requests to the
              model.
            </p>
          </div>
          <div className="stack-item">
            <span className="stack-tag">Data science</span>
            <p>
              A machine learning model that predicts the best subreddits and
              upvote counts for a post.
            </p>
          </div>
        </div>
      </section>

          </>
        ) : (
          <>
      <div className="about-head">
        <h1>Meet the team</h1>
        <p>The people behind Post Match.</p>
      </div>
      <section className="our-team">
        <a
          className="person"
          href="https://github.com/tippitytapp"
          target="_blank"
          rel="noreferrer"
        >
          <img
              src="https://avatars2.githubusercontent.com/u/60143534?s=460&u=401ca6019ff578e931950564faf99cee49012536&v=4"
              alt="Marc Tapp"
            />
          <div className="info">
            <p className="name">/u/Marc Tapp</p>
            <p className="role">Project Manager</p>
          </div>
        </a>
        <a
          className="person"
          href="https://github.com/william-jensen01"
          target="_blank"
          rel="noreferrer"
        >
          <img
              src="https://avatars2.githubusercontent.com/u/68026783?s=400&u=93bb6b7c3f1955d3e200a7d16bea8cce40af2613&v=4"
              alt="William Jensen"
            />
          <div className="info">
            <p className="name">/u/William Jensen</p>
            <p className="role">UI/UX</p>
          </div>
        </a>
        <a
          className="person"
          href="https://github.com/jonathan-portillo"
          target="_blank"
          rel="noreferrer"
        >
          <img
              src="https://avatars0.githubusercontent.com/u/54336208?s=460&u=742c3e926f896c1bb004a6e806c9cb3ccd97e7cb&v=4"
              alt="Jonathan Portillo"
            />
          <div className="info">
            <p className="name">/u/Jonathan Portillo</p>
            <p className="role">Front End</p>
          </div>
        </a>
        <a
          className="person"
          href="https://github.com/theprogramking"
          target="_blank"
          rel="noreferrer"
        >
          <img
              src="https://avatars2.githubusercontent.com/u/18515031?s=460&u=92226bd6364e602212d07e2c9b0290ff6e2dcc64&v=4"
              alt="Luke Shimkus"
            />
          <div className="info">
            <p className="name">/u/Luke Shimkus</p>
            <p className="role">Front End</p>
          </div>
        </a>
        <a
          className="person"
          href="https://github.com/B-Marshall218"
          target="_blank"
          rel="noreferrer"
        >
          <img
              src="https://avatars3.githubusercontent.com/u/44649140?s=460&v=4"
              alt="Brian Marshall"
            />
          <div className="info">
            <p className="name">/u/Brian Marshall</p>
            <p className="role">Backend</p>
          </div>
        </a>
        <a
          className="person"
          href="http://github.com/AaronReichert"
          target="_blank"
          rel="noreferrer"
        >
          <img
              src="https://avatars1.githubusercontent.com/u/59718295?s=460&u=d1c4dc9e63b7efd1fe234b83815462edc033e0e3&v=4"
              alt="Aaron Reichert"
            />
          <div className="info">
            <p className="name">/u/Aaron Reichert</p>
            <p className="role">Data Science</p>
          </div>
        </a>
        <a
          className="person"
          href="https://github.com/TobyChen320"
          target="_blank"
          rel="noreferrer"
        >
          <img
              src="https://avatars0.githubusercontent.com/u/61997784?s=460&v=4"
              alt="Toby Chen"
            />
          <div className="info">
            <p className="name">/u/Toby Chen</p>
            <p className="role">Data Science</p>
          </div>
        </a>
        <a
          className="person"
          href="https://github.com/Khislatz"
          target="_blank"
          rel="noreferrer"
        >
          <img
              src="https://avatars3.githubusercontent.com/u/47505600?s=460&u=e90a4b2328687e47452de61775c02764be1e3f92&v=4"
              alt="Haley Zhuraeva"
            />
          <div className="info">
            <p className="name">/u/Haley Zhuraeva</p>
            <p className="role">Machine Learning Engineer</p>
          </div>
        </a>
        <a
          className="person"
          href="https://github.com/erikseguinte"
          target="_blank"
          rel="noreferrer"
        >
          <img
              src="https://avatars3.githubusercontent.com/u/16523146?s=460&u=f30a2b703c4cfcf29d082c78228e517d551cd1cc&v=4"
              alt="Erik Seguinte"
            />
          <div className="info">
            <p className="name">/u/Erik Seguinte</p>
            <p className="role">Data Science</p>
          </div>
        </a>
      </section>
          </>
        )}
      </div>

      <div className="carousel-side right">
        {slide === 0 && (
          <button
            className="carousel-arrow"
            onClick={() => go(1)}
            aria-label="Meet the team"
          >
            <svg
              className="arrow-icon"
              viewBox="0 0 24 48"
              aria-hidden="true"
            >
              <polyline points="4,4 20,24 4,44" />
            </svg>
            <span className="arrow-label">Meet the team</span>
          </button>
        )}
      </div>

      <div className="carousel-dots">
        {["About", "Team"].map((label, i) => (
          <button
            key={label}
            className={i === slide ? "on" : ""}
            onClick={() => go(i)}
            aria-label={`Show ${label}`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};
export default About;
