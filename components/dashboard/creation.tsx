"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useAtom } from "jotai";
import { createTab, tab } from "@/jotai/atom";
import { RxCross2 } from "react-icons/rx";
import "react-circular-progressbar/dist/styles.css";
import { LuUploadCloud } from "react-icons/lu";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "../ui/textarea";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

export const Creation = () => {
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
