"use client";
import React from "react";

const Book = () => {
  return (
    <div>
      <div
        className="cursor-pointer capitalize"
        onClick={() => {
          console.log("getting a room code...");
        }}
      >
        get a room code
      </div>
    </div>
  );
};

export default Book;
