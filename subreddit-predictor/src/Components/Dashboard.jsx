import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchSubs, fetchPrev, deletePost } from "../actions/";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Tutorial from "./Tutorial";

const Dashboard = (props) => {
  const [formState, setFormState] = useState({
    title: "",
    text: "",
    results: 1,
  });

  const handleChange = (event) => {
    console.log(typeof event.target.value);
    setFormState({
      ...formState,
      [event.target.name]:
        event.target.type === "number"
          ? parseInt(event.target.value)
          : event.target.value,
    });
  };

  const clearInputs = () => {
    setFormState({
      title: "",
      text: "",
      results: 1,
    });
  };

  useEffect(() => {
    props.fetchPrev(props.userId);
  }, [props.userId]);

  return (
    <>
      <Tutorial />
      <div className="page-head">
        <h1>Find your subreddit</h1>
        <p>Enter a post and we'll suggest where it belongs.</p>
      </div>

      <div className="dashboard">
        <aside className="dashboard-side">
          <form className="panel">
            <h2>New post</h2>
            <div className="field-stack">
              <TextField
                name="title"
                type="text"
                label="Title of your post"
                fullWidth
                value={formState.title}
                onChange={handleChange}
              />
              <TextField
                name="text"
                type="text"
                label="Write your post"
                fullWidth
                multiline
                minRows={4}
                maxRows={10}
                value={formState.text}
                onChange={handleChange}
              />
              <TextField
                name="results"
                type="number"
                label="Number of results"
                fullWidth
                slotProps={{ htmlInput: { min: 1 } }}
                value={formState.results}
                onChange={handleChange}
              />
              <Button
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  props.fetchSubs(formState);
                }}
              >
                Predict
              </Button>
            </div>
          </form>
        </aside>

        <div className="dashboard-main">
          <section className="panel">
            <h2>Subreddit prediction</h2>
            {props.subPredictions.length === 0 ? (
              <p className="empty">
                No predictions yet. Submit a post to see suggested subreddits.
              </p>
            ) : (
              <div className="list">
                {props.subPredictions.map((i) => (
                  <div className="prediction" key={i.suggested_subreddit}>
                    <span className="sub">r/{i.suggested_subreddit}</span>
                    <span className="pill">
                      {i.pred_upvotes} predicted upvotes
                    </span>
                  </div>
                ))}
              </div>
            )}
          </section>

          <section className="panel">
            <h2>Previous posts</h2>
            {props.prevPost.length === 0 ? (
              <p className="empty">Your previous posts will show up here.</p>
            ) : (
              <div className="list">
                {props.prevPost.map((i) => (
                  <div className="past-post" key={i.id}>
                    <h3>{i.title}</h3>
                    <p>{i.text}</p>
                    <div className="past-post-actions">
                      <Button
                        variant="outlined"
                        color="error"
                        size="small"
                        onClick={(e) => {
                          e.preventDefault();
                          clearInputs();
                          props.deletePost(i.id);
                        }}
                      >
                        Delete
                      </Button>
                      <Button variant="outlined" size="small">
                        Update
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    subPredictions: state.subPredictions,
    prevPost: state.prevPost,
    userId: state.userId,
  };
};

export default connect(mapStateToProps, { fetchSubs, fetchPrev, deletePost })(
  Dashboard
);
