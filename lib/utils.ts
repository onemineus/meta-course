import axios from "axios";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getRoomCode = async (): Promise<string> => {
  const response = await axios.post(
    "https://api.huddle01.com/api/v1/create-room",
    {
      title: "Test Meeting",
      tokenType: "ERC1155",
      chain: "POLYGON",
      contractAddress: [
        //add wallet addresses you want to add to meeting
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
  console.log(response.data.data.roomId);
  return response.data.data.roomId;
};

export const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long", // Full weekday name
    month: "short", // Abbreviated month name
    day: "numeric", // Numeric day of the month
  };

  return date.toLocaleDateString("en-US", options);
};
