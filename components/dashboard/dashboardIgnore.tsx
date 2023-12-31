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

const arvo = Arvo({ weight: ["400", "700"], subsets: ["latin"] });

const Dashboard2 = () => {
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
        {/* sidebar */}
        {/* <Sidebar /> */}
        {/* right section */}
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

export default Dashboard2;

const CalendarCard = () => {
  return (
    <div className="flex w-full items-center justify-between rounded-lg bg-zinc-900 p-4">
      <div className="flex space-x-4">
        <Image
          alt=""
          height={100}
          width={100}
          src={
            "data:image/jpeg;base64,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"
          }
          className="min-h-[5rem] w-20 rounded-md object-cover"
        />
        <div className="flex flex-col justify-between">
          <div>
            <div className="text-lg font-bold">
              Advanced CSGO basics guide pro max
            </div>
            <div className="flex items-center space-x-1">
              <div className="mr-1 text-sm text-zinc-400">With</div>
              <Image
                alt=""
                height={100}
                width={100}
                src={
                  "data:image/jpeg;base64,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"
                }
                className="h-4 w-4 rounded-md object-cover"
              />
              <div className="text-sm">Spantur34</div>
            </div>
          </div>

          <div className="flex space-x-2">
            <div className="w-min rounded-full bg-zinc-700 px-2 py-[] text-sm">
              2:00PM
            </div>
            <div className="w-min rounded-full bg-zinc-700 px-2 py-[] text-sm">
              VALORANT
            </div>
            <div className="w-min rounded-full bg-zinc-700 px-2 py-[] text-sm">
              LIVE
            </div>
          </div>
        </div>
      </div>

      <Dialog>
        <DialogTrigger>
          <div className="cursor-pointer">
            <CgMenuRight size={30} />
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const Sidebar = () => {
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

const CalendarComponent = () => {
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

const CoursesComponent = () => {
  const [selectedDate, setSelectedDate] = useState<undefined | Date>();
  const handOnDayClick: DayClickEventHandler = (date, modifiers) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  const getRandomViews = () => Math.floor(Math.random() * 100); // Adjust the range as needed
  const getRandomEnrollment = () => Math.floor(Math.random() * 20) + 1; // Random enrollment between 1 and 10
  const data = Array.from({ length: 30 }, (_, index) => ({
    date: index + 1,
    views: getRandomViews(),
    enrollment: getRandomEnrollment(),
  }));
  const data2 = [
    { name: "Group A", value: 65 },
    { name: "Group B", value: 35 },
  ];
  const data3 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
  ];
  // #296BBD
  // #AC85FF
  const COLORS = ["#AC85FF", "#296BBD"];
  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }: {
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    percent: number;
    index: number;
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const CustomTooltip = ({
    active,
    payload,
    label,
  }: {
    active: boolean | undefined;
    payload: any;
    label: string;
  }) => {
    if (active && payload && payload.length > 0) {
      return (
        <div className="flex flex-col items-center rounded-lg bg-stone-950 p-2 text-sm outline outline-1 outline-stone-700">
          <div>{`On Day - ${label + 1}`}</div>
          <div>{`Total Views - ${payload[0].value}`}</div>
          <div>{`Total Enrollment - ${payload[1].value}`}</div>
        </div>
      );
    }
    return null;
  };
  const percentage = 66;
  return (
    <div className="flex w-full flex-col space-y-4 overflow-auto rounded-xl bg-zinc-900 p-4 text-zinc-300 scrollbar-thin scrollbar-track-zinc-900 scrollbar-thumb-zinc-800">
      <Tabs />
      {/* first section */}
      {/* <div className="text-2xl capitalize my-2 mb-4">course analytics</div> */}
      <div className="h- flex w-full shrink-0 flex-col space-y-4 rounded-xl bg-zinc-800 p-4 lg:flex-row lg:space-x-4 lg:space-y-0">
        {/* analytics */}
        <div className="h-64 w-full shrink-0 rounded-lg bg-zinc-900 lg:h-96 lg:w-1/2">
          <div className="p-6 text-2xl capitalize"> course engagements</div>
          <div className="h-40 lg:h-72">
            <ResponsiveContainer>
              <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                  // top: 26,
                  right: 16,
                  left: 0,
                  bottom: 0,
                }}
              >
                <Tooltip
                  content={(event) => (
                    <CustomTooltip
                      active={event.active}
                      label={event.label}
                      payload={event.payload}
                    />
                  )}
                />
                <defs>
                  <linearGradient id="views" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#AC85FF" stopOpacity={1} />
                    <stop offset="95%" stopColor="#AC85FF" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="enrollment" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#296BBD" stopOpacity={1} />
                    <stop offset="95%" stopColor="#296BBD" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="views"
                  stroke="#AC85FF"
                  fill="url(#views)"
                />
                <YAxis />
                <Area
                  type="monotone"
                  dataKey="enrollment"
                  stroke="#296BBD"
                  fill="url(#enrollment)"
                />
                <Legend
                  iconType="diamond"
                  payload={[
                    {
                      value: "Daily Enrollment",
                      type: "diamond",
                      id: "rawColumns",
                      color: "#296BBD",
                    },
                    {
                      value: "Daily Views",
                      type: "diamond",
                      id: "parsedColumns",
                      color: "#AC85FF",
                    },
                  ]}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-zinc-90 h- flex w-full flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          {/* 1st box */}
          <div
            className={cn(
              "flex h-full w-full flex-col justify-between rounded-lg bg-gradient-to-br from-[#7c61b8] via-[#40335e] to-zinc-950 p-4 lg:w-1/2",
            )}
          >
            <div className="flex flex-col space-y-8">
              <div className="font-bol p-2 text-2xl">Running courses</div>
              <div className="p-2 text-2xl">
                <span className={cn("text-5xl lg:text-6xl", arvo.className)}>
                  66
                </span>
                /100
              </div>
            </div>

            <div className="flex ">
              <div className="flex max-h-40 w-full p-2">
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  styles={{
                    // Customize the root svg element
                    root: {},
                    // Customize the path, i.e. the "completed progress"
                    path: {
                      borderRadius: "30p",
                      // Path color
                      stroke: `rgba(172, 133, 255, ${percentage / 100})`,
                      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                      strokeLinecap: "round",
                      // Customize transition animation
                      transition: "stroke-dashoffset 0.5s ease 0s",
                      // Rotate the path
                      // transform: "rotate(0.25turn)",
                      transformOrigin: "center center",
                    },
                    // Customize the circle behind the path, i.e. the "total progress"
                    trail: {
                      // Trail color
                      stroke: "#d6d6d6",
                      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                      strokeLinecap: "round",
                      // Rotate the trail
                      transform: "rotate(0.25turn)",
                      transformOrigin: "center center",
                    },
                    // Customize the text
                    text: {
                      // Text color
                      fill: "#fff",
                      // Text size
                      fontSize: "20px",
                      fontFamily: "",
                    },
                    // Customize background - only used when the `background` prop is true
                    background: {
                      fill: "#fff",
                    },
                  }}
                />
              </div>
              <div className="flex h-full w-full flex-col items-start justify-center lg:items-center">
                <div className="text-center text-2xl capitalize">
                  total <span className="font-bold">100</span>
                </div>
                <div className="text-center capitalize">courses </div>
              </div>
            </div>
          </div>

          {/* 2nd box */}
          <div
            className={cn(
              "flex h-full w-full flex-col justify-between rounded-lg bg-gradient-to-br from-[#296BBD] via-[#123156] to-zinc-950 p-4 lg:w-1/2",
            )}
          >
            <div className="flex flex-col space-y-8">
              <div className="font-bol p-2 text-2xl capitalize">
                user reviews
              </div>
              <div className="p-2 text-2xl">
                <span className={cn("text-5xl lg:text-6xl", arvo.className)}>
                  4.6
                </span>
                /5
              </div>
            </div>

            <div className="flex ">
              <div className="flex max-h-40 w-full p-2">
                <CircularProgressbar
                  value={92}
                  text={`${92}%`}
                  styles={{
                    // Customize the root svg element
                    root: {},
                    // Customize the path, i.e. the "completed progress"
                    path: {
                      borderRadius: "30p",
                      // Path color
                      stroke: `rgba(41, 107, 189, ${percentage / 100})`,
                      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                      strokeLinecap: "round",
                      // Customize transition animation
                      transition: "stroke-dashoffset 0.5s ease 0s",
                      // Rotate the path
                      // transform: "rotate(0.25turn)",
                      transformOrigin: "center center",
                    },
                    // Customize the circle behind the path, i.e. the "total progress"
                    trail: {
                      // Trail color
                      stroke: "#d6d6d6",
                      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                      strokeLinecap: "round",
                      // Rotate the trail
                      transform: "rotate(0.25turn)",
                      transformOrigin: "center center",
                    },
                    // Customize the text
                    text: {
                      // Text color
                      fill: "#fff",
                      // Text size
                      fontSize: "20px",
                    },
                    // Customize background - only used when the `background` prop is true
                    background: {
                      fill: "#3e98c7",
                    },
                  }}
                />
              </div>
              <div className="flex h-full w-full flex-col items-start justify-center lg:items-center">
                <div className="text-center text-2xl capitalize">
                  total <span className="font-bold">456</span>
                </div>
                <div className="text-center capitalize">reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* second section */}
      <div className="h-full">
        {/* <div className="text-2xl capitalize my-4">your courses</div> */}
        <div className="flex h-full w-full flex-col space-y-4 overflow-y-auto rounded-xl bg-zinc-800 p-4 scrollbar-thin scrollbar-track-zinc-800 scrollbar-thumb-zinc-700">
          <div className="flex h-full w-full flex-col rounded-lg bg-zinc-900 pb-4 ">
            <div className="p-6 text-2xl capitalize">your courses</div>
            <div className="flex-co flex max-h-96 w-full shrink-0 space-x-4 overflow-y-auto px-4 pb-4 scrollbar-thin scrollbar-track-zinc-800 scrollbar-thumb-zinc-700 2xl:max-h-96">
              {/* card */}
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
            </div>
          </div>
          <div className="flex h-full w-full flex-col rounded-lg bg-zinc-900 pb-4">
            <div className="p-6 text-2xl capitalize">purchased courses</div>
            <div className="flex-co flex max-h-96 w-full shrink-0 space-x-4 overflow-y-auto px-4 pb-4 scrollbar-thin scrollbar-track-zinc-800 scrollbar-thumb-zinc-700 2xl:max-h-96">
              {/* card */}
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
            </div>
          </div>
          {/* <div className="aspect-square bg-zinc-900 h-full flex rounded-lg">
            <ResponsiveContainer>
              <PieChart>
                <Label />
                <Tooltip />
                <Pie
                  data={data3}
                  cx="50%"
                  cy="50%"
                  // labelLine={false}
                  label={renderCustomizedLabel}
                  // outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  // label
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div> */}
        </div>
      </div>
    </div>
  );
};

const CourseCard = () => {
  return (
    <div className="flex w-72 flex-col items-center justify-between space-y-4 rounded-lg bg-zinc-800 p-4">
      <div className="flex flex-col space-y-4">
        <Image
          src={"/val.jpg"}
          height={1000}
          width={1000}
          alt=""
          className="aspect-squar w-full rounded object-cover"
        />
        <div className="flex flex-col justify-center space-y-1">
          <div className="text-xl font-bold capitalize">title</div>
          <div className="">Something somethigbn something</div>
          <div className="flex space-x-2 pt-3">
            <div className="py- flex w-min items-center space-x-1 rounded-full bg-opacity-50 bg-gradient-to-r from-[#296BBD] to-[#AC85FF] px-1">
              <IoMdEye size={20} />
              <div className="text-sm">56</div>
            </div>
            <div className="py- flex w-min items-center space-x-1 rounded-full bg-zinc-600 px-2">
              <div className="text-sm">VALORANT</div>
            </div>
            <div className="py- flex w-min items-center space-x-1 rounded-full bg-yellow-500 px-1 text-zinc-900">
              <IoIosStar size={16} />
              <div className="text-sm">3.9</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full items-center justify-center rounded-lg bg-zinc-500 bg-gradient-to-r from-[#296BBD] to-[#AC85FF]">
        <MdMenuOpen size={30} />
      </div>
    </div>
  );
};

// #296BBD
// #AC85FF
const Tabs = () => {
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
    <div className="flex justify-between rounded-xl bg-zinc-800 p-3">
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

const Sections = () => {
  return (
    <div className="mt-4 flex flex-col space-y-1 rounded-xl bg-zinc-800 p-2">
      <div className="pl-2 capitalize">game</div>
      <Select>
        <SelectTrigger className="rounded-xl">
          <SelectValue placeholder="Select Game" />
        </SelectTrigger>
        <SelectContent className="rounded-lg">
          <SelectItem value="valorant">Valorant</SelectItem>
          <SelectItem value="xsgo">CSGO</SelectItem>
          <SelectItem value="system">Succka23</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

const Creation = () => {
  const [createdTab, setCreatedTab] = useAtom(createTab);
  const [courseDetails, setCourseDetails] = useState({
    title: "",
    currency: "",
    price: "",
    game: "",
  });

  return (
    <div className="absolute top-0 flex h-screen w-full items-center justify-center backdrop-blur-sm backdrop-brightness-50">
      <div
        className={cn(
          "flex w-1/2 max-w-2xl flex-col rounded-xl bg-zinc-900 p-4 text-zinc-100",
          createdTab === 5 && "w-80",
          createdTab === 4 && "w-80",
        )}
      >
        {createdTab === 1 ? (
          //  {/* sections 1*/}
          <div>
            <div className="flex w-full justify-between">
              <div className="text-xl font-bold capitalize">couse details</div>
              <div
                className="cursor-pointer"
                onClick={() => {
                  setCreatedTab(0);
                }}
              >
                <RxCross2 size={20} />
              </div>
            </div>
            <div>#56</div>
            <div className="mt-4 flex flex-col space-y-1 rounded-xl bg-zinc-800 p-2">
              <div className="pl-2 capitalize">course title</div>
              <Input
                value={courseDetails.price}
                onChange={(event) => {
                  setCourseDetails({
                    ...courseDetails,
                    title: event.currentTarget.value,
                  });
                }}
                className="rounded-xl"
                placeholder="Enter title"
              />
            </div>
            <div className="mt-4 flex flex-col space-y-1 rounded-xl bg-zinc-800 p-2">
              <div className="pl-2 capitalize">game</div>
              <Select
                onValueChange={(value) => {
                  setCourseDetails({
                    ...courseDetails,
                    game: value,
                  });
                }}
              >
                <SelectTrigger className="rounded-xl">
                  <SelectValue placeholder="Select game" />
                </SelectTrigger>
                <SelectContent className="rounded-lg">
                  <SelectItem value="valorant">Valorant</SelectItem>
                  <SelectItem value="xsgo">CSGO</SelectItem>
                  <SelectItem value="system">Succka23</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="mt-4 flex flex-col space-y-1 rounded-xl bg-zinc-800 p-2">
              <div className="pl-2 capitalize">currency</div>
              <Select
                onValueChange={(value) => {
                  setCourseDetails({
                    ...courseDetails,
                    currency: value,
                  });
                }}
              >
                <SelectTrigger className="rounded-xl">
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent className="rounded-lg">
                  <SelectItem value="valorant">Valorant</SelectItem>
                  <SelectItem value="xsgo">CSGO</SelectItem>
                  <SelectItem value="system">Succka23</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="mt-4 flex flex-col space-y-1 rounded-xl bg-zinc-800 p-2">
              <div className="pl-2 capitalize">price</div>
              <Input
                value={courseDetails.price}
                onChange={(event) => {
                  setCourseDetails({
                    ...courseDetails,
                    price: event.currentTarget.value,
                  });
                }}
                className="rounded-xl"
                placeholder="Enter price"
              />
            </div>
            <div className="flex w-full items-center justify-end">
              <button
                onClick={() => {
                  setCreatedTab(2);
                }}
                className="mt-4 rounded-lg bg-gradient-to-r from-[#296BBD] to-[#AC85FF] px-8 py-2 text-sm capitalize"
              >
                next
              </button>
            </div>
          </div>
        ) : createdTab === 2 ? (
          //  {/* sections 2*/}
          <div>
            <div className="flex w-full justify-between">
              <div className="text-xl font-bold capitalize">upload videos</div>
              <div
                className="cursor-pointer"
                onClick={() => {
                  setCreatedTab(0);
                }}
              >
                <RxCross2 size={20} />
              </div>
            </div>
            <div>#56</div>
            <div className="mt-4 flex flex-col space-y-1 rounded-xl bg-zinc-800 p-2">
              <div className="pl-2 capitalize">video title</div>
              <Input className="rounded-xl" placeholder="Enter title" />
            </div>

            <div className="mt-4 flex flex-col space-y-1 rounded-xl bg-zinc-800 p-2">
              <div className="pl-2 capitalize">description</div>
              {/* <Input className="rounded-xl" placeholder="Enter price" /> */}
              <Textarea
                className="rounded-xl"
                placeholder="Enter description"
              />
            </div>
            <div className="mt-4 flex space-x-2 rounded-xl bg-zinc-800 p-2 ">
              <div className="w-full space-y-2">
                <div className="capitalize">upload poster</div>
                <div className="flex h-24 w-full cursor-pointer flex-col items-center justify-center space-y-1 rounded-lg bg-zinc-900">
                  <div className="rounded-full bg-zinc-800 p-2">
                    <LuUploadCloud size={30} />
                  </div>
                  <div className="text-xs">Click to upload</div>
                </div>
              </div>
              <div className="flex w-full flex-col space-y-2">
                <div className="capitalize">upload video</div>
                <div className="flex h-24 w-full cursor-pointer flex-col items-center justify-center space-y-1 rounded-lg bg-zinc-900">
                  <div className="rounded-full bg-zinc-800 p-2">
                    <LuUploadCloud size={30} />
                  </div>
                  <div className="text-xs">Click to upload</div>
                </div>
              </div>
            </div>
            <div className="flex w-full items-center justify-end">
              <button
                onClick={() => {
                  setCreatedTab(3);
                }}
                className="mt-4 rounded-lg bg-gradient-to-r from-[#296BBD] to-[#AC85FF] px-8 py-2 text-sm capitalize"
              >
                next
              </button>
            </div>
          </div>
        ) : createdTab === 3 ? (
          // section 3
          <div className="flex w-full space-x-4">
            <div className="w-96">
              <div className="mb-4 text-lg font-bold capitalize">
                uploaded videos
              </div>
              <div className="flex flex-col space-y-4">
                <div className="flex space-x-2 rounded-xl bg-[#27272A] p-2">
                  <div>
                    <Image
                      src={"/val.jpg"}
                      width={1000}
                      height={1000}
                      alt=""
                      className="aspect-square h-11 w-11 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col text-xs">
                    <div className="text-sm capitalize">video - 102</div>
                    <div className="capitalize opacity-50">2 MB</div>
                  </div>
                </div>
                <div className="flex space-x-2 rounded-xl bg-[#27272A] p-2">
                  <div>
                    <Image
                      src={"/val.jpg"}
                      width={1000}
                      height={1000}
                      alt=""
                      className="aspect-square h-11 w-11 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col text-xs">
                    <div className="text-sm capitalize">video - 102</div>
                    <div className="capitalize opacity-50">2 MB</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="flex w-full justify-between">
                <div className="text-lg font-bold capitalize">
                  upload videos
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setCreatedTab(0);
                  }}
                >
                  <RxCross2 size={20} />
                </div>
              </div>
              <div>#56</div>
              <div className="mt-4 flex flex-col space-y-1 rounded-xl bg-zinc-800 p-2">
                <div className="pl-2 capitalize">video title</div>
                <Input className="rounded-xl" placeholder="Enter title" />
              </div>

              <div className="mt-4 flex flex-col space-y-1 rounded-xl bg-zinc-800 p-2">
                <div className="pl-2 capitalize">description</div>
                {/* <Input className="rounded-xl" placeholder="Enter price" /> */}
                <Textarea
                  className="rounded-xl"
                  placeholder="Enter description"
                />
              </div>
              <div className="mt-4 flex space-x-2 rounded-xl bg-zinc-800 p-2 ">
                <div className="w-full space-y-2">
                  <div className="capitalize">upload poster</div>
                  <div className="flex h-24 w-full cursor-pointer flex-col items-center justify-center space-y-1 rounded-lg bg-zinc-900">
                    <div className="rounded-full bg-zinc-800 p-2">
                      <LuUploadCloud size={30} />
                    </div>
                    <div className="text-xs">Click to upload</div>
                  </div>
                </div>
                <div className="flex w-full flex-col space-y-2">
                  <div className="capitalize">upload video</div>
                  <div className="flex h-24 w-full cursor-pointer flex-col items-center justify-center space-y-1 rounded-lg bg-zinc-900">
                    <div className="rounded-full bg-zinc-800 p-2">
                      <LuUploadCloud size={30} />
                    </div>
                    <div className="text-xs">Click to upload</div>
                  </div>
                </div>
              </div>
              <div className="flex w-full items-center justify-end">
                <button
                  onClick={() => {
                    setCreatedTab(4);
                  }}
                  className="mt-4 rounded-lg bg-gradient-to-r from-[#296BBD] to-[#AC85FF] px-8 py-2 text-sm capitalize"
                >
                  next
                </button>
              </div>
            </div>
          </div>
        ) : createdTab === 4 ? (
          <div>
            <div className="flex w-full justify-between">
              <div className="text-xl font-bold capitalize">
                Are you done with adding videos? Do you want to finish?
              </div>
              <div
                className="cursor-pointer"
                onClick={() => {
                  setCreatedTab(0);
                }}
              >
                <RxCross2 size={20} />
              </div>
            </div>

            <div className="flex w-full items-center justify-end">
              <button
                onClick={() => {
                  setCreatedTab(0);
                }}
                className="mr-4 mt-4 rounded-lg bg-gradient-to-r from-[#296BBD] to-[#AC85FF] p-[1px]  text-sm capitalize"
              >
                <div className="w-full rounded-lg bg-zinc-900 px-7 py-2">
                  cancel
                </div>
              </button>
              <button
                onClick={() => {
                  setCreatedTab(5);
                }}
                className="mt-4 rounded-lg bg-gradient-to-r from-[#296BBD] to-[#AC85FF] px-8 py-2 text-sm capitalize"
              >
                next
              </button>
            </div>
          </div>
        ) : createdTab === 5 ? (
          <div className="flex flex-col items-center">
            <IoCheckmarkDoneCircleOutline size={60} color={"#AC85FF"} />
            <div>Video course added successfully</div>

            <div className="flex w-full items-center justify-center">
              <button
                onClick={() => {
                  setCreatedTab(0);
                }}
                className="mr-4 mt-4 rounded-lg bg-gradient-to-r from-[#296BBD] to-[#AC85FF] p-[1px]  text-sm capitalize"
              >
                <div className="w-full rounded-lg bg-zinc-900 px-7 py-2">
                  cancel
                </div>
              </button>
              <button
                onClick={() => {
                  // redirect to couse page
                }}
                className="mt-4 rounded-lg bg-gradient-to-r from-[#296BBD] to-[#AC85FF] px-8 py-2 text-sm capitalize"
              >
                view course
              </button>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
