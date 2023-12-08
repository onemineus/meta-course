"use client";
import React, { useState } from "react";
import { PiGameControllerFill } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SiGoogleclassroom } from "react-icons/si";
import { FaRankingStar } from "react-icons/fa6";
import { Separator } from "@/components/ui/separator";
import { PiStudentBold } from "react-icons/pi";
import { IoLanguage } from "react-icons/io5";
import { LuGamepad2 } from "react-icons/lu";
import { LuFileStack } from "react-icons/lu";
import { CgTimer } from "react-icons/cg";
import { Button } from "./ui/button";
import { BsBagCheck } from "react-icons/bs";
import { FiGift } from "react-icons/fi";
import { Calendar } from "./ui/calendar";
import { DayClickEventHandler } from "react-day-picker";
import { Label } from "@/components/ui/label";
import { FaCheckToSlot } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { getRoomCode } from "@/lib/utils";

const Course = () => {
  const data = {
    courseName: "CSGO Advanced",
    courseTitle: "CSGO Cash Trade Advanced Course",
    courseThumbnailUrl:
      "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs2/172122774/original/37de36a0e256648796734d4a1105d5cd155f0993/create-you-a-csgo-thumbnail.jpg",
    creatorPublicAddress: "0x4432591D6d3722bE458e839779d715c0d74E8Bf7",
    creatorAvatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQm6wz4HjrALcVjRziHrjY3wRikGKmx0tXIQ&usqp=CAU",
    creatorName: "Arnold Smith",
    description: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Suscipit esse eum atque debitis nesciunt nulla dolorum Sed quasi quas id excepturi laborum dolorem error. Vero animi odit aliquid autem harum.Lorem ipsum dolor sit amet consectetur adipisicing elit",
      "Suscipit esse eum atque debitis nesciunt nulla dolorum! Sed quasi quas id excepturi laborum dolorem error. Vero animi odit aliquid autem harum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit esse eum atque debitis nesciunt nulla dolorum! Sed quasi quas id excepturi laborum dolorem error. Vero animi odit aliquid autem harum.",
    ],
    accordion: [
      {
        title: "Mastering the Arsenal",
        content:
          "Counter-Strike: Global Offensive boasts a diverse arsenal of weapons, each with its unique characteristics and playstyle. From the iconic AWP sniper rifle to the deadly AK-47 assault rifle, mastering these weapons is crucial for success in the game. In this guide, we'll delve into the stats, spray patterns, and tactical uses of some of the most popular CS:GO weapons, helping you become a true virtuoso on the virtual battlefield.",
      },

      {
        title: "Competitive Domination",
        content:
          "Competitive play in CS:GO requires more than just pinpoint accuracy; it demands strategic prowess and teamwork. In this article, we'll explore effective strategies to dominate your opponents across various maps. From map control and economy management to executing flawless bombsite takes, these strategies will elevate your gameplay and contribute to your team's success. Whether you're a seasoned veteran or a newcomer to CS:GO, incorporating these strategies into your playstyle will undoubtedly enhance your competitive experience.",
      },
      {
        title: "The Thriving World of Professional Gaming",
        content:
          "S:GO has evolved beyond just a popular video game; it's now a major player in the world of esports. This article delves into the dynamic and competitive landscape of CS:GO esports, exploring the rise of professional teams, legendary players, and the electrifying tournaments that captivate millions of fans worldwide. From the strategic brilliance of top-tier teams to the nail-biting clutch moments that define matches, we'll uncover the excitement and intensity that makes CS:GO a cornerstone of the esports community.",
      },
    ],
    review: [
      {
        user: "0x4432591D6d3722bE458e839779d715c0d74E8Bf7",
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqci3I36_tmWgGYzpVgelrFuFp0tOhuKReHMlC1TPlJCpHbc_gptkrTMMPUtBvn-e_X5w&usqp=CAU",
        comment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quae recusandae inventore reiciendis voluptates asperiores nihil omnis consectetur voluptatem, nostrum ipsa error, esse vero obcaecati, adipisci at maxime modi nobis.",
      },
      {
        user: "0x4432591D6d3722bE458e839779d715c0d74E8Bf7",
        avatar:
          "https://pastelkattogames.com/wp-content/uploads/2023/08/AvatarCreatorExample.webp",
        comment:
          "asperiores nihil omnis consectetur voluptatem, nostrum ipsa error, esse vero obcaecati, adipisci at maxime modi nobis.",
      },
    ],
    reviewCount: 232,
    starCount: 4.56,
    price: 0.03,
    currency: "matic",
    mode: "live session",
    difficulty: "moderate",
    game: "Counter Strike Global Offensive",
    studentCount: 223,
    language: "english",
    duration: 1,
    prerequisite:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est ad enim tempora assumenda ex qui deserunt. Perspiciatis repellendus porro vero architecto eius, veritatis, voluptas quo ex qui, rem facilis inventore.",
  };
  const [isLiveSession, setIsLiveSession] = useState(true);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );

  const handleDayClick: DayClickEventHandler = (day, modifiers) => {
    console.log(day);
    setSelectedDate(day);
    setIsDateSelected(true);
  };

  const [isEnrollClicked, setIsEnrollClicked] = useState(false);
  const [isDateSelected, setIsDateSelected] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState("");
  const { toast } = useToast();

  return (
    <div className="text-zinc-200 relative min-h-screen">
      <div className="h-20 border- px-6 flex items-center border-zinc-700 bg-zinc-900 w-full">
        <div className="flex items-center z-10 space-x-2">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-md p-1">
            <PiGameControllerFill size={30} />
          </div>
          <div className="font-bold text-xl">Pro Gaming</div>
        </div>
      </div>

      {/* body */}
      <div className="w-full flex-col bg-zinc-950 flex p-6">
        <div className="absolute top-0 left-0 bg-blend-overlay h-screen w-full">
          <img
            src="./csgo.jpg"
            alt=""
            className="object-cover h-2/3 w-full opacity-20 bg-blend-darken"
          />
          <div className="bg-gradient-to-t from-zinc-950 to-transparent absolute top-0 h-2/3 w-full"></div>
        </div>
        {/* course branch */}
        <div className="flex items-center z-10">
          <div className="capitalize cursor-pointer">{"courses"}</div>
          <div>
            <IoIosArrowForward />
          </div>
          <div className="cursor-pointer">{data.courseName}</div>
        </div>

        {/* two section */}
        <div className="flex px-[4vw] w-full flex-col lg:flex-row mt-6 lg:space-x-[6vw]">
          {/* left section */}
          <div className="bg-pink-95 flex w-full z-10 flex-col">
            <div className="relative">
              <img
                src={data.courseThumbnailUrl}
                alt={data.courseTitle}
                className="rounded-3xl w-full aspect-auto"
              />
              <div className=" absolute -bottom-10 left-10 bg-zinc-900 p-1 rounded-[20px]">
                <img
                  src={data.creatorAvatarUrl}
                  alt={data.courseName}
                  className="h-20 rounded-2xl"
                />
              </div>
            </div>
            <div className="flex mt-14 ml-0 lg:ml-10 space-x-4">
              <div className="flex flex-col justify-between">
                <div className="text-">
                  A course by{" "}
                  <span className="font-bold">{data.creatorName}</span>
                </div>
              </div>
            </div>
            {/* description */}
            <div className="mt-4 mx-0 lg:mx-10 flex flex-col">
              <div className="text-5xl">{data.courseTitle}</div>
              {data.description.map((desc, index) => {
                return (
                  <div key={index} className="text-md mt-4">
                    {desc}
                  </div>
                );
              })}
              <div className="uppercase mt-6 text-sm font-bold text-zinc-500">
                course table of contents
              </div>
              <div className="mt-3 bg-zinc-900 px-4 pb-4 rounded-xl">
                <Accordion type="single" collapsible className="w-full">
                  {data.accordion.map((item, index) => {
                    return (
                      <AccordionItem key={index} value={index.toString()}>
                        <AccordionTrigger className="text-left font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                          {item.title}
                        </AccordionTrigger>
                        <AccordionContent>{item.content}</AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </div>

              {/* reviews */}
              <div className="flex flex-col pt-6">
                <div className="text-2xl capitalize">reviews</div>
                {/* rating */}
                <div className="flex items-center pt-3">
                  <div>
                    <IoMdStar size={30} />
                  </div>
                  <div className="pt-1">{data.starCount}</div>
                  <Separator orientation="vertical" className="mx-3" />
                  <div className="capitalize">{`${data.reviewCount} reviews`}</div>
                </div>
                {/* user reviews */}
                <div className="flex flex-col pt-6 space-y-4">
                  {data.review.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="w-full rounded-lg space-y-4 bg-zinc-900 p-4 flex flex-col"
                      >
                        <div className="flex space-x-4 items-center">
                          <img
                            src={item.avatar}
                            alt={item.user}
                            className="h-10 w-10 rounded-full"
                          />
                          <div className="bg-gradient-to-r font-bold from-blue-500 to-purple-500 bg-clip-text text-transparent">{`${item.user.slice(
                            0,
                            5
                          )}...${item.user.slice(27, 32)}`}</div>
                        </div>
                        <div className="text-sm">{item.comment}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* right section */}
          <div className="bg-blue-95 z-10 w-full lg:w-2/5 flex flex-col">
            {/* price */}
            {/* <div className="uppercase mt-10 text-sm">price</div> */}
            <div className="flex items-end space-x-2 mt-10">
              <div className="text-6xl ">{data.price}</div>
              <div className="uppercase mb-1 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-bold">
                {data.currency}
              </div>
            </div>
            {/* tabs */}
            <div className="flex w-full mt-6 border border-zinc-400 rounded-2xl p-4 justify-between">
              <div className="flex items-center w-full space-x-4">
                <div>
                  <SiGoogleclassroom size={30} />
                </div>
                <div className="flex flex-col text-xs">
                  <div className="uppercase">mode</div>
                  <div className="font-bold capitalize text-sm">
                    {data.mode}
                  </div>
                </div>
              </div>
              <Separator orientation="vertical" className="mx-4" />
              <div className="flex items-center w-full space-x-4">
                <div>
                  <FaRankingStar size={30} />
                </div>
                <div className="flex flex-col text-xs">
                  <div className="uppercase">difficulty</div>
                  <div className="font-bold capitalize text-sm">
                    {data.difficulty}
                  </div>
                </div>
              </div>
            </div>
            {/* details */}
            <div className="flex w-full flex-col space-y-2 mt-6">
              <div className="flex items-center space-x-2">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-1">
                  <LuGamepad2 size={25} />
                </div>
                <div className="capitalize">game: </div>
                <div className="font-bold whitespace-nowrap">{data.game}</div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-1">
                  <PiStudentBold size={25} />
                </div>
                <div className="capitalize">students: </div>
                <div className="font-bold">{data.studentCount}</div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-1">
                  <IoLanguage size={25} />
                </div>
                <div className="capitalize">language: </div>
                <div className="font-bold capitalize">{data.language}</div>
              </div>
              {/* <div className="flex items-center space-x-2">
                <div>
                  <LuFileStack size={25} />
                </div>
                <div className="capitalize">additional resources: </div>
                <div className="font-bold">{"2 files"}</div>
              </div> */}
              <div className="flex items-center space-x-2">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-1">
                  <CgTimer size={25} />
                </div>
                <div className="capitalize">duration: </div>
                <div className="font-bold capitalize">{`${data.duration}h`}</div>
              </div>
            </div>
            {/* buy */}
            <div className="pt-6 flex space-x-6 items-center">
              <Button
                onClick={() => {
                  if (isLiveSession) {
                    setIsEnrollClicked(true);
                  } else {
                    // payment for prerecorded videos
                  }
                }}
                variant={"secondary"}
                className="flex items-center space-x-2 bg-gradient-to-r from-[#296BBD] to-[#AC85FF] text-zinc-100"
              >
                <BsBagCheck size={20} />
                <div>Enroll now</div>
              </Button>
              <div className="bg-gradient-to-r p-[2px] rounded-lg from-[#296BBD] to-[#AC85FF]">
                <Button
                  variant={"default"}
                  className="flex items-center bg-zinc-900 text-zinc-100 space-x-2 outline-1 "
                >
                  <FiGift size={20} />
                  <div>Buy as a gift</div>
                </Button>
              </div>
            </div>
            {/* additional */}
            <div className="flex flex-col pt-6 space-y-3">
              <div className="uppercase text-zinc-500 text-sm font-bold">
                prerequisites
              </div>
              <div className="">{data.prerequisite}</div>
            </div>
            {isLiveSession ? (
              // {/* live session */}
              <div>
                {/* select date */}
                {isEnrollClicked && (
                  <div className="flex flex-col pt-6 space-y-3">
                    <div className="uppercase text-zinc-500 text-sm font-bold">
                      choose a date
                    </div>
                    <div className="">
                      <Calendar
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        onDayClick={handleDayClick}
                      />
                    </div>
                  </div>
                )}
                {/* select slot */}
                {isDateSelected && (
                  <div className="flex flex-col pt-6 space-y-3">
                    <div className="uppercase text-zinc-500 text-sm font-bold">
                      choose a slot
                    </div>
                    <div className="">
                      <RadioGroup
                        onValueChange={(value) => {
                          setSelectedSlot(value);
                        }}
                        defaultValue="comfortable"
                        className="flex flex-col space-y-2"
                      >
                        {Array.from({ length: 5 }, (_, index) => {
                          return (
                            <div
                              key={index}
                              className="flex items-center space-x-2 p-3 rounded-lg bg-zinc-900"
                            >
                              <RadioGroupItem
                                value={index.toString()}
                                id="r1"
                              />
                              <Label htmlFor="r1">{`${
                                10 + index + 1
                              }:${"00"} - ${12 + index}:${"00"}`}</Label>
                            </div>
                          );
                        })}
                      </RadioGroup>
                    </div>
                  </div>
                )}
                {/* proceed  */}
                {selectedSlot !== "" && (
                  <div className="pt-6">
                    <Button
                      onClick={async () => {
                        // const code = await getRoomCode();
                        const code = "Asdasdas";
                        const sessionData = {
                          coach: data.creatorName,
                          student: "student.name",
                          title: data.courseName,
                          date: selectedDate,
                          time: selectedSlot,
                          state: "pending",
                          game: data.game,
                          roomCode: code,
                        };
                        toast({
                          title: "Scheduled: Catch up",
                          description: "Friday, February 10, 2023 at 5:57 PM",
                        });
                      }}
                      variant={"secondary"}
                      className="space-x-2"
                    >
                      <FaCheckToSlot size={20} />
                      <div>Book your slot</div>
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              // {/* pre reorded videos */}
              <div className="pt-6">
                <div className="uppercase text-zinc-500 text-sm font-bold">
                  introduction videos
                </div>
                <div className="pt-4 flex flex-col space-y-4">
                  <div className="bg-zinc-900 p-2 rounded-xl">
                    <video
                      controls
                      muted
                      loop
                      autoPlay
                      src="./csgo.mp4"
                      className="rounded-lg"
                    ></video>
                    <div className="pt-2 text-sm">How to do something</div>
                  </div>
                  <div className="bg-zinc-900 p-2 rounded-xl">
                    <video
                      controls
                      muted
                      loop
                      autoPlay
                      src="./csg.mp4"
                      className="rounded-lg"
                    ></video>
                    <div className="pt-2 text-sm">How to do another thing</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Course;
