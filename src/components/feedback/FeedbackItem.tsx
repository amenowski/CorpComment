import { useState } from "react";

import { TriangleUpIcon } from "@radix-ui/react-icons";

import { FeedbackItemT } from "../../lib/types";

type FeedbackProps = {
  feedbackItem: FeedbackItemT;
};

export default function FeedbackItem({ feedbackItem }: FeedbackProps) {
  const { badgeLetter, company, text, upvoteCount, daysAgo } = feedbackItem;
  const [open, setOpen] = useState(false);
  const [upvote, setUpvote] = useState(upvoteCount);

  function handleToggle() {
    setOpen((prevOpen) => !prevOpen);
  }

  function handleUpvote(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setUpvote((prevUpvote) => prevUpvote + 1);
    e.currentTarget.disabled = true;
    e.stopPropagation();
  }

  return (
    <li
      onClick={handleToggle}
      className={`feedback ${open ? "feedback--expand" : ""}`}
    >
      <button onClick={handleUpvote}>
        <TriangleUpIcon />
        <span>{upvote}</span>
      </button>
      <div>
        <p>{badgeLetter}</p>
      </div>
      <div>
        <p>{company}</p>
        <p>{text}</p>
      </div>

      <p>{daysAgo === 0 ? "New" : `${daysAgo}d`}</p>
    </li>
  );
}
