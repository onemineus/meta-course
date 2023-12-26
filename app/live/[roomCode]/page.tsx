"use client";
import { useRouter, useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { AccessToken, Role } from "@huddle01/server-sdk/auth";
import {
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
import { TPeerMetadata } from "@/utils/types";
import { Urbanist } from "next/font/google";
import { cn } from "@/lib/utils";
import { RiMenu4Fill, RiMicLine, RiMicOffLine } from "react-icons/ri";
import { BsMicFill, BsMicMuteFill } from "react-icons/bs";
import { IoVideocam, IoVideocamOff } from "react-icons/io5";
import { MdOutlineScreenShare, MdOutlineStopScreenShare } from "react-icons/md";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400"] });

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
  }, [stream]);

  useEffect(() => {
    if (shareStream && screenRef.current) {
      screenRef.current.srcObject = shareStream;
    }
  }, [shareStream]);

  useEffect(() => {
    getAccessToken(params.roomCode as string, setToken);
  }, []);

  return (
    <>
      {state === "idle" && (
        // {false && (
        <div
          className={cn(
            "flex h-screen w-full items-center justify-center",
            urbanist.className,
          )}
        >
          <div className="flex w-96 flex-col rounded-xl bg-zinc-900 p-4 text-zinc-200">
            {isVideoOn ? (
              <video
                ref={videoRef}
                className="aspect-video w-full rounded-xl"
                autoPlay
                muted
              />
            ) : (
              <div className="flex aspect-video w-full items-center justify-center rounded-lg bg-zinc-800">
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
      )}
      {state === "connected" && (
        // {true && (
        <div
          className={cn(
            "relative flex h-screen w-full flex-col",
            urbanist.className,
          )}
        >
          <div className="absolute left-0 top-0 h-20 w-full shrink-0 bg-zinc-800">
            asdasdassd
          </div>

          {/* body */}
          <div className="flex h-full w-full pt-20">
            {/* left side */}
            <div className="flex h-full w-full flex-col space-y-4 bg-zinc-950 p-4">
              {/* upper line */}
              <div className="flex h-full w-full justify-center overflow-hidden rounded-xl bg-zinc-900 p-4">
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
              <div className="flex h-min w-full shrink-0 space-x-4 overflow-x-auto rounded-xl bg-zinc-900 p-4">
                {/* you video */}
                {isVideoOn ? (
                  <div className="relative aspect-video h-36">
                    <video
                      ref={videoRef}
                      className="h-full w-full rounded-xl outline outline-1 outline-zinc-500"
                      autoPlay
                      muted
                    />
                    <div className="absolute bottom-0 left-0 m-2 rounded-full bg-zinc-900 px-2 capitalize text-zinc-200">
                      you
                    </div>
                  </div>
                ) : (
                  <div className="relative flex aspect-video h-36 shrink-0 items-center justify-center rounded-xl bg-zinc-800 outline outline-1 outline-zinc-500">
                    <div className="flex items-center">
                      <div className="text-zinc-500">
                        <IoVideocamOff size={30} />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 m-2 rounded-full bg-zinc-900 px-2 capitalize text-zinc-200">
                      you
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
            <div className="h-full w-[30rem] bg-zinc-900"></div>
          </div>

          {/* controls */}
          <div className="absolute bottom-4 shrink-0 self-center rounded-xl bg-zinc-800 p-4">
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
              <div
                onClick={async () => {
                  await disableAudio();
                }}
                className="flex aspect-square cursor-pointer items-center justify-center rounded-xl bg-zinc-200 p-2"
              >
                <RiMenu4Fill size={20} color={"#296BBD"} />
              </div>
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
          // <div className="relative flex w-full items-center justify-center bg-zinc-800">
          //   <div className="text-zinc-500">
          //     <IoVideocamOff size={30} />
          //   </div>
          //   <div className="absolute bottom-0 left-0 m-2 rounded-full bg-zinc-900 px-2 capitalize text-zinc-200">
          //     {metadata?.displayName}
          //   </div>
          // </div>
          <div className="relative aspect-video h-full w-full bg-zinc-800">
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
              className="h-full rounded-xl outline outline-1 outline-zinc-500"
              autoPlay
              muted
            />
            <div className="absolute bottom-0 left-0 m-2 rounded-full bg-zinc-900 px-2 capitalize text-zinc-200">
              {metadata?.displayName}
            </div>
          </div>
        ) : (
          <div className="relative flex aspect-video h-36 shrink-0 items-center justify-center rounded-xl bg-zinc-800 outline outline-1 outline-zinc-500">
            <div className="flex items-center">
              <div className="text-zinc-500">
                <IoVideocamOff size={30} />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 m-2 rounded-full bg-zinc-900 px-2 capitalize text-zinc-200">
              {metadata?.displayName}
            </div>
          </div>
        )}

        {/* <video ref={vidRef} autoPlay muted className="aspect-video" /> */}

        {screenVideo && (
          <div className="relative aspect-video h-36 w-full">
            <video
              ref={screenVideoRef}
              className="h-full rounded-xl outline outline-1 outline-zinc-500"
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
  }
};
