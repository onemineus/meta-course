"use client";
import { useRouter, useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { AccessToken, Role } from "@huddle01/server-sdk/auth";
import {
  useDataMessage,
  useLocalAudio,
  useLocalPeer,
  useLocalScreenShare,
  useLocalVideo,
  usePeerIds,
  useRemoteAudio,
  useRemotePeer,
  useRemoteScreenShare,
  useRemoteVideo,
  useRoom,
} from "@huddle01/react/hooks";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TPeerMetadata } from "@/utils/types";
import { Urbanist } from "next/font/google";
import { cn } from "@/lib/utils";
import { RiMenu4Fill, RiMicLine, RiMicOffLine } from "react-icons/ri";
import { BsMicFill, BsMicMuteFill } from "react-icons/bs";
import { IoVideocam, IoVideocamOff } from "react-icons/io5";
import { MdOutlineScreenShare, MdOutlineStopScreenShare } from "react-icons/md";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import { PiGameControllerFill } from "react-icons/pi";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "900", "800", "700", "600", "500", "300", "200", "100"],
});

const Page = () => {
  const address = "0x443...Bf7";
  const router = useRouter();
  const params = useParams();
  const [token, setToken] = useState("");
  const [isScreenShareOn, setIsScreenShareOn] = useState(false);
  const [displayName, setDisplayName] = useState<string>(address);
  const videoRef = useRef<HTMLVideoElement>(null);
  const screenRef = useRef<HTMLVideoElement>(null);
  const { updateMetadata } = useLocalPeer<TPeerMetadata>();
  const { joinRoom, state, leaveRoom } = useRoom({
    onJoin: (room) => {
      console.log("onJoin", room);
      updateMetadata({ displayName });
    },
    onPeerJoin: (peer) => {
      console.log("onPeerJoin", peer);
    },
  });
  const { enableVideo, isVideoOn, stream, disableVideo } = useLocalVideo();
  const { enableAudio, disableAudio, isAudioOn } = useLocalAudio();
  const { startScreenShare, stopScreenShare, shareStream } =
    useLocalScreenShare();
  const { peerIds } = usePeerIds();

  useEffect(() => {
    if (stream && videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  }, [stream, state]);

  useEffect(() => {
    if (shareStream && screenRef.current) {
      screenRef.current.srcObject = shareStream;
    }
  }, [shareStream, state]);

  useEffect(() => {
    getAccessToken(params.roomCode as string, setToken);
  }, []);

  return (
    <>
      {state === "idle" && (
        // {false && (
        <div
          className={cn(
            "relative flex h-screen w-full flex-col",
            urbanist.className,
          )}
        >
          <div className="absolute left-0 top-0 h-full w-full">
            <Image
              src={"/lobby.jpg"}
              height={2000}
              width={2000}
              alt=""
              className="h-full w-full object-cover blur-sm brightness-50"
            />
          </div>
          <div className="absolute left-0 top-0 h-full w-full">
            <div className="left-0 top-0 h-1/2 w-full bg-gradient-to-t from-black"></div>
            <div className="h-1/2 w-full bg-black"></div>
          </div>

          <div className="absolute left-0 top-0 flex h-20 w-full shrink-0 items-center border-b border-zinc-900 px-6 backdrop-blur-md backdrop-brightness-75">
            <div className="z-10 flex items-center space-x-2">
              <div className="rounded-md bg-gradient-to-r from-blue-500 to-purple-500 p-1">
                <PiGameControllerFill size={30} />
              </div>
              <div className="text-xl font-bold">Pro Gaming</div>
            </div>
          </div>
          {/* <div className="mt-20 z-10 flex w-96 flex-col rounded-xl bg-purple-950 bg-opacity-30 p-4 text-zinc-200">
            {isVideoOn ? (
              <video
                ref={videoRef}
                className="aspect-video w-full rounded-xl"
                autoPlay
                muted
              />
            ) : (
              <div className="flex aspect-video w-full items-center justify-center rounded-lg bg-zinc-950">
                <div className="flex items-center">
                  <div className="text-zinc-500">
                    <IoVideocamOff size={30} />
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-center">
              <div className="flex space-x-4 pt-4">
                {isAudioOn ? (
                  <div
                    onClick={async () => {
                      await disableAudio();
                    }}
                    className="flex aspect-square cursor-pointer items-center justify-center rounded-xl bg-zinc-200 p-2"
                  >
                    <BsMicFill size={20} color={"#296BBD"} />
                  </div>
                ) : (
                  <div
                    onClick={async () => {
                      await enableAudio();
                    }}
                    className="flex aspect-square cursor-pointer items-center justify-center rounded-xl bg-red-500 p-2"
                  >
                    <BsMicMuteFill size={20} />
                  </div>
                )}
                {isVideoOn ? (
                  <div
                    onClick={async () => {
                      await disableVideo();
                    }}
                    className="flex aspect-square cursor-pointer items-center justify-center rounded-xl bg-zinc-200 p-2"
                  >
                    <IoVideocam size={20} color={"#296BBD"} />
                  </div>
                ) : (
                  <div
                    onClick={async () => {
                      await enableVideo();
                    }}
                    className="flex aspect-square cursor-pointer items-center justify-center rounded-xl bg-red-500 p-2"
                  >
                    <IoVideocamOff size={20} />
                  </div>
                )}
                <button
                  onClick={async () => {
                    console.log(params.roomCode as string, token);
                    await joinRoom({
                      roomId: params.roomCode as string,
                      token,
                    });
                  }}
                  className="flex h-full cursor-pointer items-center justify-center whitespace-nowrap rounded-xl bg-[#296BBD] px-4 capitalize"
                >
                  join now
                </button>
              </div>
            </div>
          </div> */}
          <div className="bg-zinc-90 z-10 mt-20 flex h-full w-full flex-col justify-center">
            <div
              className={cn(
                "flex w-full flex-col items-center justify-center",
                urbanist.className,
              )}
            >
              <div className="max-w-3xl bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-center text-7xl font-semibold text-transparent">
                Embark on Your{" "}
                <span className="itali bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text font-extrabold">
                  Journey
                </span>{" "}
                to Mastery, Join the{" "}
                <span className="itali bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text font-extrabold">
                  <span className="italic font-mono">Live</span> Session
                </span>{" "}
                Now!
              </div>
            </div>
            <div className="flex w-full justify-center">
              <video
                className="w-96 object-cover h-64"
                muted
                autoPlay
                loop
                src="https://framerusercontent.com/assets/ifOxqeHjMEgtKQ9nr9DLKCCgbEo.mp4"
              ></video>
            </div>
            <div className="flex w-full justify-center">
              <div className="z-10 flex h-min w-96 flex-col rounded-xl bg-purple-950 bg-opacity-30 p-4 text-zinc-200">
                {isVideoOn ? (
                  <video
                    ref={videoRef}
                    className="aspect-video w-full rounded-xl"
                    autoPlay
                    muted
                  />
                ) : (
                  <div className="flex aspect-video w-full items-center justify-center rounded-lg bg-zinc-950">
                    <div className="flex items-center">
                      <div className="text-zinc-500">
                        <IoVideocamOff size={30} />
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex justify-center">
                  <div className="flex space-x-4 pt-4">
                    {isAudioOn ? (
                      <div
                        onClick={async () => {
                          await disableAudio();
                        }}
                        className="flex aspect-square cursor-pointer items-center justify-center rounded-xl bg-zinc-200 p-2"
                      >
                        <BsMicFill size={20} color={"#296BBD"} />
                      </div>
                    ) : (
                      <div
                        onClick={async () => {
                          await enableAudio();
                        }}
                        className="flex aspect-square cursor-pointer items-center justify-center rounded-xl bg-red-500 p-2"
                      >
                        <BsMicMuteFill size={20} />
                      </div>
                    )}
                    {isVideoOn ? (
                      <div
                        onClick={async () => {
                          await disableVideo();
                        }}
                        className="flex aspect-square cursor-pointer items-center justify-center rounded-xl bg-zinc-200 p-2"
                      >
                        <IoVideocam size={20} color={"#296BBD"} />
                      </div>
                    ) : (
                      <div
                        onClick={async () => {
                          await enableVideo();
                        }}
                        className="flex aspect-square cursor-pointer items-center justify-center rounded-xl bg-red-500 p-2"
                      >
                        <IoVideocamOff size={20} />
                      </div>
                    )}
                    <button
                      onClick={async () => {
                        console.log(params.roomCode as string, token);
                        await joinRoom({
                          roomId: params.roomCode as string,
                          token,
                        });
                      }}
                      className="flex h-full cursor-pointer items-center justify-center whitespace-nowrap rounded-xl bg-[#296BBD] px-4 capitalize"
                    >
                      join now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {state === "connected" && (
        // {true && (
        <div
          className={cn(
            "relative flex h-screen w-full flex-col",
            urbanist.className,
          )}
        >
          <div className="absolute left-0 top-0 flex h-20 w-full shrink-0 items-center border-b border-zinc-800 bg-zinc-950 px-6">
            <div className="z-10 flex items-center space-x-2">
              <div className="rounded-md bg-gradient-to-r from-blue-500 to-purple-500 p-1">
                <PiGameControllerFill size={30} />
              </div>
              <div className="text-xl font-bold">Pro Gaming</div>
            </div>
          </div>

          {/* body */}
          <div className="flex h-full w-full pt-20">
            {/* left side */}
            <div className="flex h-full w-full flex-col space-y-2 bg-zinc-950 p-2">
              {/* upper line */}
              <div className="flex h-full w-full justify-center overflow-hidden rounded-xl bg-gradient-to-l from-[#180826] to-sky-950 p-2 backdrop-brightness-50">
                <div className="flex h-full w-full shrink-0 justify-center rounded-xl bg-zinc-950">
                  {/* {peerIds.map((peerId) =>
                    peerId ? <RemotePeer key={peerId} peerId={peerId} /> : null,
                  )} */}
                  <div className="h-full w-min">
                    <RemotePeer
                      key={peerIds[0]}
                      peerId={peerIds[0]}
                      flag={true}
                    />
                  </div>

                  {/* <img
                    className="h-full w-full object-cover"
                    src="https://miro.medium.com/v2/resize:fit:798/1*tn5V9k-PnYFlvMo5ek-skw.jpeg"
                  /> */}
                </div>
                {/* <RemotePeer key={peerIds[0]} peerId={peerIds[0]} flag={true} /> */}
                {/* <div className="h-[2000px] w-full bg-blue-900"></div> */}
              </div>
              {/* bottom line */}
              <div className="flex h-min w-full shrink-0 space-x-4 overflow-x-auto rounded-xl bg-opacity-30 bg-gradient-to-l from-[#180826] to-sky-950 p-2">
                {/* you video */}
                {isVideoOn ? (
                  <div className="relative aspect-video h-36">
                    <video
                      ref={videoRef}
                      className="h-full w-full rounded-xl outline outline-1 outline-zinc-700"
                      autoPlay
                      muted
                    />
                    <div className="absolute bottom-0 left-0 m-2 rounded-full bg-zinc-900 px-2 text-sm capitalize text-zinc-200">
                      you
                    </div>
                  </div>
                ) : (
                  <div className="relative flex aspect-video h-36 shrink-0 items-center justify-center rounded-xl bg-zinc-950 outline outline-1 outline-zinc-700">
                    <div className="flex items-center">
                      <div className="text-zinc-500">
                        <IoVideocamOff size={30} />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 m-2 rounded-full bg-zinc-900 px-2 text-sm capitalize text-zinc-200">
                      you
                    </div>
                  </div>
                )}
                {isScreenShareOn && (
                  <div className="relative aspect-video h-36 rounded-xl bg-zinc-950">
                    <video
                      ref={screenRef}
                      className="h-full w-full rounded-xl outline outline-1 outline-zinc-500 brightness-50"
                      autoPlay
                      muted
                    />
                    <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
                      <MdOutlineScreenShare size={40} color={"#E4E4E7"} />
                    </div>
                    <div className="absolute bottom-0 left-0 m-2 rounded-full bg-zinc-900 px-2 text-sm capitalize text-zinc-200">
                      Screen Share
                    </div>
                  </div>
                )}
                {peerIds.map((peerId) =>
                  peerId ? (
                    <RemotePeer key={peerId} peerId={peerId} flag={false} />
                  ) : null,
                )}
              </div>
            </div>

            {/* sidebar */}
            <div className="h-full w-[30rem] border-l border-zinc-800 p-2">
              <div className="h-full w-full rounded-xl bg-purple-950 bg-opacity-30">
                <ChatBox address={address} />
              </div>
            </div>
          </div>

          {/* controls */}
          <div className="bg-zinc-80 absolute bottom-4 shrink-0 self-center rounded-xl bg-opacity-20 p-4 outline outline-1 outline-zinc-800 backdrop-blur-sm backdrop-brightness-75">
            <div className="flex items-center justify-center space-x-4">
              {isAudioOn ? (
                <div
                  onClick={async () => {
                    await disableAudio();
                  }}
                  className="flex aspect-square cursor-pointer items-center justify-center rounded-xl bg-zinc-200 p-2"
                >
                  <BsMicFill size={20} color={"#296BBD"} />
                </div>
              ) : (
                <div
                  onClick={async () => {
                    await enableAudio();
                  }}
                  className="flex aspect-square cursor-pointer items-center justify-center rounded-xl bg-red-500 p-2"
                >
                  <BsMicMuteFill size={20} />
                </div>
              )}
              {isVideoOn ? (
                <div
                  onClick={async () => {
                    await disableVideo();
                  }}
                  className="flex aspect-square cursor-pointer items-center justify-center rounded-xl bg-zinc-200 p-2"
                >
                  <IoVideocam size={20} color={"#296BBD"} />
                </div>
              ) : (
                <div
                  onClick={async () => {
                    await enableVideo();
                  }}
                  className="flex aspect-square cursor-pointer items-center justify-center rounded-xl bg-red-500 p-2"
                >
                  <IoVideocamOff size={20} />
                </div>
              )}
              {isScreenShareOn ? (
                <div
                  onClick={async () => {
                    await stopScreenShare();
                    setIsScreenShareOn(false);
                  }}
                  className="flex aspect-square cursor-pointer items-center justify-center rounded-xl bg-zinc-200 p-2"
                >
                  <MdOutlineScreenShare size={20} color={"#296BBD"} />
                </div>
              ) : (
                <div
                  onClick={async () => {
                    await startScreenShare();
                    setIsScreenShareOn(true);
                  }}
                  className="flex aspect-square cursor-pointer items-center justify-center rounded-xl bg-red-500 p-2"
                >
                  <MdOutlineStopScreenShare size={20} />
                </div>
              )}
              <button
                onClick={async () => {
                  console.log(params.roomCode as string, token);
                  leaveRoom();
                }}
                className="flex h-9 cursor-pointer items-center justify-center whitespace-nowrap rounded-xl bg-[#296BBD] px-4 capitalize"
              >
                Leave Meet
              </button>
              {/* <div
                onClick={async () => {
                  await disableAudio();
                }}
                className="flex aspect-square cursor-pointer items-center justify-center rounded-xl bg-zinc-200 p-2"
              >
                <RiMenu4Fill size={20} color={"#296BBD"} />
              </div> */}
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <div
                    onClick={async () => {
                      await disableAudio();
                    }}
                    className="flex aspect-square cursor-pointer items-center justify-center rounded-xl bg-zinc-200 p-2"
                  >
                    <RiMenu4Fill size={20} color={"#296BBD"} />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Menu</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      )}
      {state === "left" && (
        // {true && (
        <div
          className={cn(
            "relative flex h-screen w-full flex-col",
            urbanist.className,
          )}
        >
          <div className="absolute left-0 top-0 flex h-20 w-full shrink-0 items-center border-b border-zinc-900 bg-zinc-950 px-6">
            <div className="z-10 flex items-center space-x-2">
              <div className="rounded-md bg-gradient-to-r from-blue-500 to-purple-500 p-1">
                <PiGameControllerFill size={30} />
              </div>
              <div className="text-xl font-bold">Pro Gaming</div>
            </div>
          </div>
          <div className="flex h-full w-full items-center justify-center pt-20">
            <div className="flex h-96 w-96 flex-col items-center justify-center rounded-xl bg-zinc-900 p-4">
              <div
                onClick={() => {
                  window.location.reload();
                }}
                className="flex w-full cursor-pointer items-center space-x-1"
              >
                <FaArrowLeft />
                <div className="capitalize">back</div>
              </div>
              <Image
                className="h-72"
                src={"/Done-pana.svg"}
                alt=""
                width={1000}
                height={1000}
              />
              <div className="h-full pt-2 text-2xl">You left the meeting</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Page;

async function getAccessToken(ctx: string, setter: Function) {
  const accessToken = new AccessToken({
    apiKey: process.env.NEXT_PUBLIC_API_KEY!,
    roomId: ctx,
    role: Role.HOST,
    permissions: {
      admin: true,
      canConsume: true,
      canProduce: true,
      canProduceSources: {
        cam: true,
        mic: true,
        screen: true,
      },
      canRecvData: true,
      canSendData: true,
      canUpdateMetadata: true,
    },
    options: {
      metadata: {
        // you can add any custom attributes here which you want to associate with the user
        walletAddress: "axit.eth",
      },
    },
  });

  console.log(accessToken)
  const token = await accessToken.toJwt();
  setter(token);
}

// from-[#296BBD] to-[#AC85FF]

const RemotePeer = ({ peerId, flag }: { peerId: string; flag: boolean }) => {
  const { metadata }: { metadata: { displayName: string } | null } =
    useRemotePeer({
      peerId,
    });
  const { stream, state, isVideoOn } = useRemoteVideo({ peerId });
  const { stream: audioStream, state: audioState } = useRemoteAudio({ peerId });
  const { videoStream: screenVideo, audioStream: screenAudio } =
    useRemoteScreenShare({ peerId });
  const vidRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const screenVideoRef = useRef<HTMLVideoElement>(null);
  const screenAudioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    console.log("stream", stream);
    if (stream && vidRef.current && state === "playable") {
      vidRef.current.srcObject = stream;

      vidRef.current.onloadedmetadata = async () => {
        try {
          vidRef.current?.play();
        } catch (error) {
          console.error(error);
        }
      };

      vidRef.current.onerror = () => {
        console.error("videoCard() | Error is hapenning...");
      };
    }
  }, [stream]);

  useEffect(() => {
    if (audioStream && audioRef.current && audioState === "playable") {
      audioRef.current.srcObject = audioStream;

      audioRef.current.onloadedmetadata = async () => {
        try {
          audioRef.current?.play();
        } catch (error) {
          console.error(error);
        }
      };

      audioRef.current.onerror = () => {
        console.error("videoCard() | Error is hapenning...");
      };
    }
  }, [audioStream]);

  useEffect(() => {
    if (screenVideo && screenVideoRef.current) {
      screenVideoRef.current.srcObject = screenVideo;

      screenVideoRef.current.onloadedmetadata = async () => {
        try {
          screenVideoRef.current?.play();
        } catch (error) {
          console.error(error);
        }
      };

      screenVideoRef.current.onerror = () => {
        console.error("videoCard() | Error is hapenning...");
      };
    }
  }, [screenVideo]);

  useEffect(() => {
    if (screenAudio && screenAudioRef.current) {
      screenAudioRef.current.srcObject = screenAudio;

      screenAudioRef.current.onloadedmetadata = async () => {
        try {
          screenAudioRef.current?.play();
        } catch (error) {
          console.error(error);
        }
      };

      screenAudioRef.current.onerror = () => {
        console.error("videoCard() | Error is hapenning...");
      };
    }
  }, [screenAudio]);

  console.log(metadata);

  if (flag) {
    return (
      <div className="flex h-full w-full flex-row justify-center space-x-4 overflow-hidden bg-zinc-950">
        {isVideoOn && !screenVideo ? (
          <div className="relative aspect-video h-full w-full">
            <video
              ref={vidRef}
              className="h-full w-full rounded-xl"
              autoPlay
              muted
            />
            <div className="absolute bottom-0 left-0 m-2 rounded-full bg-zinc-900 px-2 capitalize text-zinc-200">
              {metadata?.displayName}
            </div>
          </div>
        ) : !isVideoOn && !screenVideo ? (
          <div className="relative aspect-video h-full w-full bg-zinc-950">
            <video ref={vidRef} className="h-full w-full" autoPlay muted />
            <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center">
              <div className="text-zinc-500">
                <IoVideocamOff size={30} />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 m-2 rounded-full bg-zinc-900 px-2 capitalize text-zinc-200">
              {metadata?.displayName}
            </div>
          </div>
        ) : (
          <></>
        )}
        {screenVideo && (
          <div className="relative aspect-video h-full w-full">
            <video
              ref={screenVideoRef}
              className="h-full w-full rounded-xl"
              autoPlay
              muted
            />
            <div className="absolute bottom-0 left-0 m-2 rounded-full bg-zinc-900 px-2 capitalize text-zinc-200">
              {metadata?.displayName}
            </div>
          </div>
        )}
        <audio ref={audioRef} autoPlay></audio>
        {screenAudio && <audio ref={screenAudioRef} autoPlay></audio>}
      </div>
    );
  } else {
    return (
      <div className="flex h-full flex-row space-x-4">
        {isVideoOn ? (
          <div className="relative aspect-video h-36 w-full">
            <video
              ref={vidRef}
              className="h-full rounded-xl outline outline-1 outline-zinc-700"
              autoPlay
              muted
            />
            <div className="absolute bottom-0 left-0 m-2 rounded-full bg-zinc-900 px-2 text-sm capitalize text-zinc-200">
              {metadata?.displayName}
            </div>
          </div>
        ) : (
          <div className="relative flex aspect-video h-36 shrink-0 items-center justify-center rounded-xl bg-zinc-950 outline outline-1 outline-zinc-700">
            <div className="flex items-center">
              <div className="text-zinc-500">
                <IoVideocamOff size={30} />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 m-2 rounded-full bg-zinc-900 px-2 text-sm capitalize text-zinc-200">
              {metadata?.displayName}
            </div>
          </div>
        )}

        {screenVideo && (
          <div className="relative aspect-video h-36 w-full">
            <video
              ref={screenVideoRef}
              className="h-full rounded-xl outline outline-1 outline-zinc-700"
              autoPlay
              muted
            />
            <div className="absolute bottom-0 left-0 m-2 rounded-full bg-zinc-900 px-2 text-sm capitalize text-zinc-200">
              {metadata?.displayName}
            </div>
          </div>
        )}
        <audio ref={audioRef} autoPlay></audio>
        {screenAudio && <audio ref={screenAudioRef} autoPlay></audio>}
      </div>
    );
  }
};

export type TMessage = {
  text: string;
  sender: string;
};

const ChatBox = ({ address }: { address: string }) => {
  const [messages, setMessages] = useState<TMessage[]>([]);
  const [text, setText] = useState<string>("");
  const [tab, setTab] = useState(true);
  const { peerId } = useLocalPeer();
  const { sendData } = useDataMessage({
    onMessage: (payload, from, label) => {
      if (label === "chat") {
        setMessages((prev) => [...prev, { text: payload, sender: from }]);
      }
    },
  });

  const sendMessage = () => {
    if (text.length > 0) {
      sendData({
        to: "*",
        payload: text,
        label: "chat",
      });
      setText("");
    }
  };
  return (
    <div className="flex h-full w-full">
      <div className="relative flex h-full w-full flex-col rounded-lg">
        {/* <div className="m-4 flex items-center justify-between rounded-xl bg-[#296BBD] p-2 text-left text-zinc-200">
          <div className="pl-1 capitalize">messages</div>
          <div className="rounded-lg bg-zinc-200 px-2 text-[#0E0914]">
            {messages.length}
          </div>
        </div> */}
        <div className="bg-red-70 absolute top-0 z-10 flex w-full shrink-0 justify-center pt-4">
          <div className="flex rounded-xl bg-purple-950 p-1">
            <div
              onClick={() => {
                setTab(true);
              }}
              className={cn(
                "cursor-pointer rounded-lg px-2 py-1 text-sm capitalize",
                tab ? "bg-purple-600" : "bg-purple-950",
              )}
            >
              messages
            </div>
            <div
              onClick={() => {
                setTab(false);
              }}
              className={cn(
                "cursor-pointer rounded-lg px-2 py-1 text-sm capitalize",
                !tab ? "bg-purple-600" : "bg-purple-950",
              )}
            >
              participants
            </div>
          </div>
        </div>
        {tab ? (
          <div className="bg-pink-20 mx-2 flex h-full flex-col justify-between px-1">
            <div className="mb-4 mt-16 flex flex-col space-y-2 overflow-y-auto p-2 scrollbar-thin scrollbar-track-purple-950 scrollbar-thumb-purple-900">
              {messages.map((message, index) =>
                message.sender === peerId ? (
                  <LocalMessageBubble key={index} message={message} />
                ) : (
                  <RemoteMessageBubble key={index} message={message} />
                ),
              )}
            </div>
            <div className="mb-3 flex shrink-0 items-center rounded-full bg-zinc-950 p-1 outline outline-2 outline-zinc-800">
              <input
                type="text"
                className="w-full self-end bg-transparent p-2 text-sm text-white outline-none"
                placeholder="Type a message"
                value={text}
                onChange={(event) => setText(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    sendMessage();
                  }
                }}
              />
              <button
                onClick={() => {
                  sendMessage();
                }}
                className="rounded-full bg-zinc-800 p-2"
              >
                <FiSend />
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-16 flex w-full flex-col space-y-4 px-4">
            <div className="flex items-center rounded-xl bg-purple-950 p-2">
              <Image
                className="h-8 w-8 self-end rounded-full object-cover"
                src={"/val.jpg"}
                width={100}
                height={100}
                alt=""
              />
              <div className="pl-2">{address}</div>
            </div>
            <div className="flex items-center rounded-xl bg-purple-950 p-2">
              <Image
                className="h-8 w-8 self-end rounded-full object-cover"
                src={"/val.jpg"}
                width={100}
                height={100}
                alt=""
              />
              <div className="pl-2">asdsa</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

interface Props {
  message: TMessage;
}

function RemoteMessageBubble({ message }: Props) {
  const { metadata } = useRemotePeer<TPeerMetadata>({ peerId: message.sender });

  return (
    <div className="flex items-start space-x-2">
      <Image
        className="h-8 w-8 self-end rounded-full object-cover"
        src={"/asd-asdone.jpg"}
        width={100}
        height={100}
        alt=""
      />
      <div className="flex flex-col">
        <span className="text-xs text-gray-200">{metadata?.displayName}</span>
        <span className="rounded-r-xl rounded-t-xl bg-zinc-200 px-2 py-1 text-sm text-zinc-900">
          {message.text}
        </span>
      </div>
    </div>
  );
}

function LocalMessageBubble({ message }: Props) {
  const { metadata } = useLocalPeer<TPeerMetadata>();

  return (
    <div className="flex w-full justify-end space-x-2">
      <div className="flex flex-col justify-end">
        <span className="self-end text-xs text-gray-200">
          {metadata?.displayName}
        </span>
        <div className="self-end rounded-l-xl rounded-t-xl bg-[#296BBD] px-2 py-1">
          <span className="text-sm text-zinc-200">{message.text}</span>
        </div>
      </div>
      <Image
        className="h-8 w-8 self-end rounded-full object-cover"
        src={"/val.jpg"}
        width={100}
        height={100}
        alt=""
      />
    </div>
  );
}
