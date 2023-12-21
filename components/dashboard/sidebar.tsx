"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import React, { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { Input } from "@/components/ui/input";
import { IoMdSearch } from "react-icons/io";
import { IoCalendarOutline } from "react-icons/io5";
import { PiChalkboardTeacher, PiGameControllerFill } from "react-icons/pi";
import { IoMdArrowRoundForward } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";
import { Calendar } from "../ui/calendar";
import { DayClickEventHandler } from "react-day-picker";
import { Scrollbar } from "react-scrollbars-custom";
import Image from "next/image";
import { IoMdEye } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import { useAtom } from "jotai";
import { createTab, tab } from "@/jotai/atom";
import { RxCross2 } from "react-icons/rx";
import { IoAddCircleOutline } from "react-icons/io5";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { LuUploadCloud } from "react-icons/lu";
import { MdMenuOpen } from "react-icons/md";
import {
  AreaChart,
  Area,
  Tooltip,
  ResponsiveContainer,
  Legend,
  YAxis,
  Pie,
  PieChart,
  Cell,
  Label,
} from "recharts";
import { IoIosStar } from "react-icons/io";
import { cn } from "@/lib/utils";
import { Arvo } from "next/font/google";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "../ui/textarea";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

export const Sidebar = () => {
  const menuData = [
    // {
    //   id: 0,
    //   title: "overview",
    //   icon: () => <RxDashboard size={24} />,
    // },
    {
      id: 1,
      title: "calendar",
      icon: () => <IoCalendarOutline size={24} />,
    },
    {
      id: 2,
      title: "courses",
      icon: () => <PiChalkboardTeacher size={24} />,
    },
    // {
    //   id: 3,
    //   title: "overview",
    //   icon: () => <RxDashboard size={24} />,
    // },
  ];
  const [selectedTab, setSelectedTab] = useAtom(tab);

  return (
    <div className="w-72 shrink-0 rounded-xl bg-zinc-900 p-4 text-zinc-300">
      <div className="flex flex-col space-y-3">
        {/* dashboard */}
        <div className="flex items-center space-x-2">
          <div className="text-lg capitalize">dashboard</div>
          <div>
            <MdArrowForwardIos size={16} />
          </div>
        </div>
        {/* search */}
        <div className="flex items-center space-x-2">
          <Input
            placeholder="Search"
            className="rounded-xl border-transparent bg-zinc-800"
          />
          <div className="rounded-xl bg-zinc-800 p-3">
            <IoMdSearch />
          </div>
        </div>
        {/* menu */}
        <div className="flex flex-col space-y-4">
          <div className="capitalize text-zinc-500">menu</div>

          {menuData.map((menu, index) => {
            return (
              <div
                key={menu.id}
                className={
                  selectedTab === menu.id
                    ? "flex cursor-pointer justify-between rounded-xl bg-gradient-to-r from-[#296BBD] to-[#AC85FF] p-3"
                    : "flex cursor-pointer justify-between rounded-xl"
                }
                onClick={() => {
                  setSelectedTab(menu.id);
                }}
              >
                <div className="flex items-center space-x-3">
                  <menu.icon />
                  <div
                    className={cn(
                      "capitalize",
                      selectedTab === menu.id ? "font-bold" : "",
                    )}
                  >
                    {menu.title}
                  </div>
                </div>
                <div className="flex items-center">
                  <MdArrowForwardIos size={16} />
                </div>
              </div>
            );
          })}
        </div>
        {/* menu 2 */}
      </div>
    </div>
  );
};
