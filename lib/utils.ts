import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getRoomCode = async (): Promise<string> => {
  if (process.env.NEXT_PUBLIC_API_KEY) {
    const response = await fetch(
      "https://api.huddle01.com/api/v1/create-room",
      {
        method: "POST",
        body: JSON.stringify({
          title: "Huddle01-Test",
        }),
        headers: {
          "Content-type": "application/json",
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY, // Replace 'YOUR_API_KEY_HERE' with your actual API key
        },
      }
    );
    const data = await response.json();
    return data.data.roomId;
  }
  return "null";
};