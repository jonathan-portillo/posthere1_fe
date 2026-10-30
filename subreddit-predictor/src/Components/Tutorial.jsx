import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";

const steps = [
  {
    title: "Welcome to Post Match",
    text: "We'll help you find the best subreddit for your post. Here's a quick look at how it works.",
  },
  {
    title: "Write your post",
    text: "Add a title and the text of your post in the form on the left. Choose how many subreddit suggestions you want.",
  },
  {
    title: "Get predictions",
    text: "Hit Predict and we'll suggest subreddits for your post, along with the upvotes it's likely to get in each.",
  },
  {
    title: "Come back anytime",
    text: "Your previous posts are saved below the predictions, so you can look back at them or delete them.",
  },
];

const storageKey = () => `tutorialSeen:${localStorage.getItem("id")}`;

const hasSeen = () => {
  try {
    return localStorage.getItem(storageKey()) === "true";
  } catch {
    return false;
  }
};

const Tutorial = () => {
  const [open, setOpen] = useState(() => !hasSeen());
  const [step, setStep] = useState(0);

  const close = () => {
    try {
      localStorage.setItem(storageKey(), "true");
    } catch {
      // storage unavailable; the tutorial will just show again next time
    }
    setOpen(false);
  };

  const last = step === steps.length - 1;

  return (
    <Dialog open={open} onClose={close} fullWidth maxWidth="xs">
      <div className="tutorial">
        <span className="eyebrow">
          Step {step + 1} of {steps.length}
        </span>
        <h2>{steps[step].title}</h2>
        <p>{steps[step].text}</p>
        <div className="tutorial-dots">
          {steps.map((s, i) => (
            <i key={s.title} className={i === step ? "on" : ""} />
          ))}
        </div>
        <div className="tutorial-actions">
          <Button color="inherit" onClick={close}>
            Skip
          </Button>
          <div>
            {step > 0 && (
              <Button onClick={() => setStep(step - 1)}>Back</Button>
            )}
            <Button
              variant="contained"
              onClick={() => (last ? close() : setStep(step + 1))}
            >
              {last ? "Get started" : "Next"}
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default Tutorial;
