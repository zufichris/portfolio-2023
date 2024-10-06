"use client";
import React from "react";
const error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div>
      <h1>An Error Occured</h1>
      <p>{error.message ?? ""}</p>
      <button className="bg-blue-600 rounded-md px-2 py-1" onClick={reset}>
        Retry
      </button>
    </div>
  );
};

export default error;
