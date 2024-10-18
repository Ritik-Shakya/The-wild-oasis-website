"use client";

import { useState } from "react";

function TextExpansion({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const desc = isExpanded
    ? children
    : children.split(" ").slice(0, 40).join(" ");

  const expander = isExpanded ? "Show Less" : "Show More";
  return (
    <span>
      {`${desc} ...`}
      <button
        className="text-primary-700 border-b border-primary-700 leading-3 pb-1"
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        {expander}
      </button>
    </span>
  );
}

export default TextExpansion;
