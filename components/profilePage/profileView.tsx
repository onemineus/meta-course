"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs";
import { MdOutlineArrowOutward } from "react-icons/md";
import { CourseCard } from "../dashboard/courseCard";
import SmallCourseCard from "./smallCourseCard";
import { cn } from "@/lib/utils";
import { PiShareNetworkBold } from "react-icons/pi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { HiOutlineBookOpen } from "react-icons/hi2";

const ProfileView = ({ id }: { id: string }) => {
  const [tabId, setTabId] = useState(0);
  const tabList = [
    {
      id: 0,
      name: "my courses",
      component: () => <ZerothComponent />,
    },
    {
      id: 1,
      name: "purchased courses",
      component: () => <FirstComponent />,
    },
    {
      id: 2,
      name: "my posts",
      component: () => <SecondComponent />,
    },
  ];
  const router = useRouter();
  return (
    <div className="flex h-screen flex-col xl:overflow-y-hidden">
      <div className="h-16 w-full shrink-0 border-b border-b-zinc-700 bg-zinc-950"></div>
      <div className="flex h-full bg-zinc-600">
        {/* put your sidebar here */}
        <div className="h-full w-[300px] shrink-0 border-r border-r-zinc-700 bg-black"></div>
        <div className="flex h-full w-full flex-col bg-zinc-950">
          {/* profile head */}
          <div className="flex w-full flex-col px-8 pt-8 text-zinc-200">
            {/* cover photo */}
            <Image
              src={"/csgo.jpg"}
              //   src={`https://picsum.photos/seed/${Math.random()}/2000/`}
              width={2000}
              height={1000}
              alt=""
              className="h-48 rounded-t-3xl object-cover"
            />
            {/* rest */}
            <div className="flex w-full flex-col justify-between bg-gradient-to-b from-zinc-900 to-zinc-950 px-12 lg:flex-row">
              <div className="space-x- flex flex-col md:flex-row">
                <Image
                  src={"/csgo.jpg"}
                  //   src={`https://picsum.photos/seed/${Math.random()}/500/`}
                  width={300}
                  height={300}
                  alt=""
                  className="relative bottom-8 h-40 w-40 rounded-full border-4 border-zinc-950 object-cover"
                />
                <div className="flex flex-col space-y-2 px-0 md:px-8 md:pt-8">
                  <div className="text-2xl font-bold">Eliza o Beth</div>
                  <div className="text-sm text-zinc-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum repellendus sunt dolorum quas in commodi ipsam totam
                    quae laudantium incidunt atque velit nam!
                  </div>
                  <div className="flex flex-col space-y-1 text-zinc-300 lg:flex-row lg:space-x-4 lg:space-y-0">
                    <div className="flex space-x-4">
                      <div className="text-sm font-bold capitalize">{`${324} followers`}</div>
                      <div className="text-sm font-bold capitalize">{`${424} followeing`}</div>
                    </div>
                    <div className="flex space-x-4">
                      <div className="text-sm font-bold capitalize">{`${124} posts`}</div>
                      <div
                        onClick={() => {
                          router.push(`/dashboard/randomid69`);
                        }}
                        className="flex cursor-pointer items-center"
                      >
                        <div className="text-sm font-bold capitalize">
                          dashboard
                        </div>
                        <MdOutlineArrowOutward size={18} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-4 pt-8">
                <div className="flex space-x-4">
                  <div className="cursor-pointer">
                    <BsInstagram size={24} />
                  </div>
                  <div className="cursor-pointer">
                    <BsTwitterX size={24} />
                  </div>
                  <div className="cursor-pointer">
                    <BsFacebook size={24} />
                  </div>
                  <div className="cursor-pointer">
                    <PiShareNetworkBold size={24} />
                  </div>
                </div>
                <div className="cursor-pointer rounded-full bg-purple-500 py-1 text-center capitalize">
                  follow
                </div>
              </div>
            </div>
          </div>
          {/* body */}
          <div className="flex h-full w-full flex-col overflow-y-hidden bg-zinc-950 px-8">
            <div className="bg-zinc-70 flex w-full flex-col">
              <div className="bg-red-60 flex h-10 w-full items-center justify-around border-b border-zinc-700">
                {tabList.map((tab) => {
                  return (
                    <div
                      key={tab.id}
                      onClick={() => {
                        setTabId(tab.id);
                      }}
                      className={cn(
                        "flex h-full cursor-pointer items-center whitespace-nowrap px-6 text-sm capitalize text-zinc-300",
                        tab.id === tabId &&
                          "border-b-4 border-purple-500 text-zinc-100",
                      )}
                    >
                      {tab.name}
                    </div>
                  );
                })}
              </div>
            </div>
            {tabList.map((tab, index) => tab.id === tabId && <tab.component key={index} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;

const ZerothComponent = () => {
  return (
    <div className="bg-zinc-20 w-ma flex h-full flex-wrap justify-center gap-8 overflow-y-auto py-8 scrollbar-thin scrollbar-track-zinc-800 scrollbar-thumb-zinc-900 lg:mb-16">
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
    </div>
  );
};

const FirstComponent = () => {
  return (
    <div className="flex h-full flex-wrap gap-8 overflow-y-auto bg-zinc-900 py-8 scrollbar-thin scrollbar-track-zinc-800 scrollbar-thumb-zinc-900">
      <div className="h-72 w-48 rounded-xl bg-white"></div>
      <div className="h-72 w-48 rounded-xl bg-white"></div>
      <div className="h-72 w-48 rounded-xl bg-white"></div>
      <div className="h-72 w-48 rounded-xl bg-white"></div>
      <div className="h-72 w-48 rounded-xl bg-white"></div>
      <div className="h-72 w-48 rounded-xl bg-white"></div>
      <div className="h-72 w-48 rounded-xl bg-white"></div>
      <div className="h-72 w-48 rounded-xl bg-white"></div>
      <div className="h-72 w-48 rounded-xl bg-white"></div>
      <div className="h-72 w-48 rounded-xl bg-white"></div>
      <div className="h-72 w-48 rounded-xl bg-white"></div>
      <div className="h-72 w-48 rounded-xl bg-white"></div>
      <div className="h-72 w-48 rounded-xl bg-white"></div>
      <div className="h-72 w-48 rounded-xl bg-white"></div>
      <div className="h-72 w-48 rounded-xl bg-white"></div>
    </div>
  );
};

const SecondComponent = () => {
  return (
    <div className="flex h-full flex-wrap gap-8 overflow-y-auto bg-zinc-900 py-8 scrollbar-thin scrollbar-track-zinc-800 scrollbar-thumb-zinc-900">
      <div className="h-72 w-48 rounded-xl bg-white"></div>
      <div className="h-72 w-48 rounded-xl bg-white"></div>
      <div className="h-72 w-48 rounded-xl bg-white"></div>
      <div className="h-72 w-48 rounded-xl bg-white"></div>
      <div className="h-72 w-48 rounded-xl bg-white"></div>
      <div className="h-72 w-48 rounded-xl bg-white"></div>
      <div className="h-72 w-48 rounded-xl bg-white"></div>
      <div className="h-72 w-48 rounded-xl bg-white"></div>
      <div className="h-72 w-48 rounded-xl bg-white"></div>
      <div className="h-72 w-48 rounded-xl bg-white"></div>
      <div className="h-72 w-48 rounded-xl bg-white"></div>
      <div className="h-72 w-48 rounded-xl bg-white"></div>
      <div className="h-72 w-48 rounded-xl bg-white"></div>
      <div className="h-72 w-48 rounded-xl bg-white"></div>
      <div className="h-72 w-48 rounded-xl bg-white"></div>
    </div>
  );
};

const ProfileCard = () => {
  return (
    <div className="bg-zinc-30 relative flex h-72 w-48 flex-col rounded-xl">
      <div className="relative h-44 w-full shrink-0">
        <Image
          src={`https://picsum.photos/seed/${Math.random()}/500/`}
          width={500}
          height={500}
          alt=""
          className="h-full rounded-t-xl object-cover"
        />
        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-transparent to-zinc-900"></div>
      </div>
      <div className="h-full w-full rounded-b-xl bg-gradient-to-b from-zinc-900 to-zinc-950 px-4"></div>
      {/* abs class */}
      <div className="absolute left-0 top-0 flex h-full w-full flex-col justify-between rounded-b-xl rounded-t-xl border-b border-t border-zinc-700 border-t-purple-700">
        <div className="w-full p-2">
          <div className="w-min rounded-lg bg-zinc-900 bg-opacity-50 px-2 py-1 text-xs">
            VALORANT
          </div>
        </div>
        <div className="flex w-full flex-col space-y-4">
          <div>
            <div className="px-4 text-lg font-bold capitalize">
              how to smurf in valorant in 3 easy steps
            </div>
            <div className="flex items-center space-x-2 px-4">
              <StarsComponent value={4} />
              <div className="text-sm">{"(76)"}</div>
            </div>
          </div>

          <div className="flex items-center justify-between p-4">
            <div className="flex cursor-pointer items-center space-x-1 ">
              <div className="text-sm capitalize underline decoration-purple-500 decoration-2 underline-offset-4">
                explore
              </div>
              <AiOutlineArrowRight />
            </div>
            <div>
              <HiOutlineBookOpen size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StarsComponent = ({ value }: { value: number }) => {
  return (
    <div className="flex space-x-0.5">
      <>
        {Array.from({
          length: value,
        }).map((_, index) => {
          return (
            <div key={index}>
              <FaStar color={"#F7D800"} size={16} />
            </div>
          );
        })}
        {Array.from({
          length: 5 - value,
        }).map((_, index) => {
          return (
            <div key={index}>
              <FaRegStar size={16} />
            </div>
          );
        })}
      </>
    </div>
  );
};
