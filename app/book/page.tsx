"use client";
import React from "react";
import axios from "axios";


// hbf - vmvy - wnw;

const Book = () => {
  return (
    <div>
      <div
        className="cursor-pointer capitalize"
        onClick={async () => {
          console.log("getting a room code...");
          const response = await axios.post(
            "https://api.huddle01.com/api/v1/create-room",
            {
              title: "Test Meeting",
              tokenType: "ERC1155",
              chain: "POLYGON",
              contractAddress: [
                // "0xADC327CC02d3230af723C47eCd91a73F600d7E3A",
                "0x4432591D6d3722bE458e839779d715c0d74E8Bf7",
              ],
            },
            {
              headers: {
                "Content-Type": "application/json",
                "x-api-key": "hOZKxff_0SML1Ew22dDSLMnI_dWa2JOh",
              },
            },
          );
          const d = await response.data
          console.log(response.data.data.roomId);
        }}
      >
        get a room code
      </div>
    </div>
  );
};

export default Book;
