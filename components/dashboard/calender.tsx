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
import { CalendarCard } from "./calendarCard";
import { Tabs } from "./tabs";

const arvo = Arvo({ weight: ["400", "700"], subsets: ["latin"] });

export const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState<undefined | Date>();
  const handOnDayClick: DayClickEventHandler = (date, modifiers) => {
    if (date) {
      setSelectedDate(date);
    }
  };
  return (
    <div className="flex w-full flex-col overflow-auto rounded-xl bg-zinc-900 p-4 text-zinc-300 scrollbar-thin scrollbar-track-zinc-900 scrollbar-thumb-zinc-800">
      <Tabs />
      {/* first section */}
      <div className="my-2 mb-4 text-2xl capitalize">calender meetings</div>
      <div className="flex flex-col space-x-0 space-y-4 xl:flex-row xl:space-x-4 xl:space-y-0">
        {/* calendar */}
        <div className="min-w-min shrink-0 xl:w-1/2">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            onDayClick={handOnDayClick}
            className="rounded-xl bg-zinc-800"
          />
        </div>
        {/* cards */}
        <div className="h-min w-full overflow-hidden rounded-xl bg-zinc-800 p-4">
          <div className="flex h-80 flex-col space-y-4 overflow-x-auto scrollbar-thin scrollbar-track-zinc-800 scrollbar-thumb-zinc-700">
            <CalendarCard />
            <CalendarCard />
            <CalendarCard />
          </div>
        </div>
      </div>
      {/* second section */}
      <div>
        <div className="my-4 text-2xl capitalize">upcoming meetings</div>
        <div className="w-full rounded-xl bg-zinc-800">
          <div className="flex h-max flex-col space-y-4 p-4 ">
            <CalendarCard />
            <CalendarCard />
            <CalendarCard />
          </div>
        </div>
      </div>
    </div>
  );
};
