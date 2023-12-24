"use client";

import { accessToken, roomCode, test } from "@/jotai/atom";
import { useAtom } from "jotai";
import React, { useEffect } from "react";
// hbf - vmvy - wnw;
const Page = () => {
  const [accessTokenPrivate, setAccessTokenPrivate] = useAtom(accessToken);
  const [roomCodePrivate, setRoomCodePrivate] = useAtom(roomCode);
  const [taste, setTaste] = useAtom(test);

  useEffect(() => {
    console.log(accessTokenPrivate, roomCodePrivate);
  }, [accessToken, roomCode]);
  console.log(accessTokenPrivate, roomCodePrivate);

  return (
    <div>
      <div>{taste}</div>
    </div>
  );
};

export default Page;
