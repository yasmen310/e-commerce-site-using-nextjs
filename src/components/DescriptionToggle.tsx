"use client";
import { useState } from "react";

export default function DescriptionToggle({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <p className="card-text text-muted">
      {expanded ? text : `${text.slice(0, 60)}...`}{" "}
      <button
        onClick={() => setExpanded(!expanded)}
        className="btn btn-link p-0"
        style={{ fontSize: "0.9rem" }}
      >
        {expanded ? "See less" : "See more"}
      </button>
    </p>
  );
}
