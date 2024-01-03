"use client";
import {
  useConnect,
  useEnsName,
  useAccount,
  useDisconnect,
  useSignMessage,
} from "wagmi";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CgMenuRight } from "react-icons/cg";
import { MdOutlineArrowOutward } from "react-icons/md";
import { HuddleClient, HuddleProvider } from "@huddle01/react";
import { useRouter } from "next/navigation";
import { getAccessToken, getMessage } from "@huddle01/auth";
import { useAtom } from "jotai";
import { accessToken, roomCode, test } from "@/jotai/atom";
import { useStore } from "zustand";
import { IoOptionsSharp } from "react-icons/io5";
import { AiOutlineArrowRight } from "react-icons/ai";

export const CalendarCard = () => {
  const [accessTokenPrivate, setAccessTokenPrivate] = useAtom(accessToken);
  const [roomCodePrivate, setRoomCodePrivate] = useAtom(roomCode);

  const [taste, setTaste] = useAtom(test);
  const { signMessage } = useSignMessage({
    onSuccess: async (data) => {
      const token = await getAccessToken(data, address as string);
      setAccessTokenPrivate(token.accessToken);
    },
  });

  const router = useRouter();
  const address = "0x4432591D6d3722bE458e839779d715c0d74E8Bf7";

  useEffect(() => {
    if (accessTokenPrivate !== "") {
      console.log(accessTokenPrivate, roomCodePrivate);
      router.push(`/live/${roomCodePrivate}`);
    }
  }, [accessTokenPrivate]);

  return (
    <div className="rounded-xl bg-gradient-to-r from-blue-950 via-blue-900 to-zinc-950 p-0.5">
      <div className="flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-zinc-950 via-zinc-950 p-2">
        <div className="flex space-x-4">
          <Image
            src={"/val.jpg"}
            height={500}
            width={500}
            alt=""
            className="h-48 w-2/3 rounded-lg object-cover"
          />
          <div className="flex flex-col justify-between p-2">
            <div className="flex flex-col space-y-2">
              <div className="text-2xl font-bold">
                Advanced CSGO basics guide pro max
              </div>
              <div className="flex space-x-2">
                <div className="w-min rounded bg-zinc-700 px-2 py-[] text-sm">
                  2:00PM
                </div>
                <div className="w-min rounded bg-zinc-700 px-2 py-[] text-sm">
                  VALORANT
                </div>
                <div className="w-min rounded bg-zinc-700 px-2 py-[] text-sm">
                  LIVE
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <div className="mr-1 text-sm text-zinc-400">With</div>
                <Image
                  alt=""
                  height={100}
                  width={100}
                  src={"/val.jpg"}
                  className="h-4 w-4 rounded-md object-cover"
                />

                <div className="text-sm">{"0xiasjdiausdai"}</div>
              </div>
            </div>

            <Dialog>
              <DialogTrigger>
                <div
                  onClick={() => {
                    // router.push(`/course/${courseId}`);
                  }}
                  className="flex cursor-pointer items-center space-x-1"
                >
                  <div className="font-bol whitespace-nowrap capitalize text-zinc-50">
                    options
                  </div>
                  <div className="flex justify-center text-zinc-50">
                    <AiOutlineArrowRight size={20} />
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="w-64">
                <DialogHeader>
                  <DialogTitle>Course options</DialogTitle>
                  <DialogDescription>
                    {/* <div>asdasd</div> */}
                  </DialogDescription>
                </DialogHeader>
                <div
                  className="flex cursor-pointer justify-between"
                  onClick={() => {
                    // setRoomCodePrivate("hbf-vmvy-wnw");
                    // handleSignClick(getMessage, address, signMessage);
                    router.push(`/live/${"hbf-vmvy-wnw"}`);
                  }}
                >
                  <div>Go to lobby</div>
                  <div>
                    <MdOutlineArrowOutward />
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export const handleSignClick = async (
  getMessage: Function,
  address: any,
  signMessage: Function,
) => {
  const msg = await getMessage(address as string);
  signMessage({ message: msg.message });
};
