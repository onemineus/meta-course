"use client";

import React, { useState } from "react";
import { IoCalendarOutline } from "react-icons/io5";
import { PiChalkboardTeacher } from "react-icons/pi";
import { useAtom } from "jotai";
import { createTab, tab } from "@/jotai/atom";
import { IoAddCircleOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";

export const Tabs = () => {
  const [selectedTab, setSelectedTab] = useAtom(tab);
  const [createdTab, setCreatedTab] = useAtom(createTab);

  const menuData = [
    {
      id: 0,
      title: "courses",
      icon: () => <PiChalkboardTeacher size={24} />,
    },
    {
      id: 1,
      title: "schedule",
      icon: () => <IoCalendarOutline size={24} />,
    },
  ];
  return (
    <div className="flex justify-between rounded-xl bg-zinc-800 p-2">
      <div className="flex items-center rounded-lg bg-zinc-900 p-1">
        {menuData.map((tab, index) => {
          return (
            <div
              key={tab.id}
              className={cn(
                "flex cursor-pointer items-center space-x-2 rounded p-2",
                selectedTab === tab.id && "bg-zinc-800",
              )}
              onClick={() => {
                setSelectedTab(tab.id);
              }}
            >
              <tab.icon />
              <div className="capitalize">{tab.title}</div>
            </div>
          );
        })}
      </div>
      <div
        onClick={() => {
          setCreatedTab(1);
        }}
        className="flex cursor-pointer items-center space-x-2 rounded-lg bg-zinc-900 px-4"
      >
        <div className="capitalize">create now</div>
        <div>
          <IoAddCircleOutline size={24} />
        </div>
      </div>
    </div>
  );
};
