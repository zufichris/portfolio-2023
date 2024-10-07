"use client";
import React from "react";
const error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="h-screen p-5 w-screen flex justify-center items-center flex-col">
      <h1 className="font-bold">An Error Occured</h1>
      <p className="text-red-600">{error.message ?? ""}</p>
      <button className="bg-blue-600 rounded-md px-3 py-1 text-white" onClick={reset}>
        Retry
      </button>
    </div>
  );
};

export default error;
