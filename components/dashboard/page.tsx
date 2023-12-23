"use client";

import React from "react";
import { PiGameControllerFill } from "react-icons/pi";
import { useAtom } from "jotai";
import { createTab, tab } from "@/jotai/atom";
import { CalendarComponent } from "./calender";
import { Creation } from "./creation";
import { CoursesComponent } from "./course";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useAtom(tab);
  const [createdTab, setCreatedTab] = useAtom(createTab);

  return (
    <div className="relative h-screen bg-zinc-950">
      <div className="border- flex h-20 w-full items-center border-zinc-700 bg-zinc-900 px-6">
        <div className="z-10 flex items-center space-x-2">
          <div className="rounded-md bg-gradient-to-r from-blue-500 to-purple-500 p-1 text-zinc-100">
            <PiGameControllerFill size={30} />
          </div>
          <div className="text-xl font-bold text-zinc-100">Pro Gaming</div>
        </div>
      </div>
      <div className="absolute top-0 flex h-full w-full space-x-4 p-4 pt-24">
        {selectedTab === 1 ? (
          <CalendarComponent />
        ) : selectedTab === 0 ? (
          <CoursesComponent />
        ) : (
          <></>
        )}
      </div>
      {createdTab !== 0 && <Creation />}
    </div>
  );
};

export default Dashboard;

// #296BBD
// #AC85FF
