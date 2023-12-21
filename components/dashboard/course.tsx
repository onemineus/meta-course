"use client";

import React, { useState } from "react";
import { DayClickEventHandler } from "react-day-picker";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  AreaChart,
  Area,
  Tooltip,
  ResponsiveContainer,
  Legend,
  YAxis,
} from "recharts";
import { cn } from "@/lib/utils";
import { Arvo } from "next/font/google";
import { CourseCard } from "./courseCard";
import { Tabs } from "./tabs";

const arvo = Arvo({ weight: ["400", "700"], subsets: ["latin"] });

export const CoursesComponent = () => {
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
