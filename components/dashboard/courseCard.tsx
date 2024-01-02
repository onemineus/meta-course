"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IoMdArrowRoundForward, IoMdEye } from "react-icons/io";
import { MdMenuOpen, MdStarPurple500 } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { Rating } from "@smastrom/react-rating";
import { FaRegStar, FaStar } from "react-icons/fa6";

export const CourseCard = () => {
  // replace with real courseId
  const courseId = "iuh23gj2hui3";
  const router = useRouter();
  return (
    <div
      onClick={() => {
        // router.push(`/course/${courseId}`);
      }}
      className="flex w-72 flex-col items-center justify-between rounded-xl border border-zinc-400"
    >
      {/* <div className="flex flex-col space-y-4">
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

      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="flex w-full items-center justify-center rounded-lg bg-zinc-500 bg-gradient-to-r from-[#296BBD] to-[#AC85FF]"
      >
        <MdMenuOpen size={30} />
      </div> */}
      <div className="relative w-full rounded-t-xl">
        <Image
          src={"/val.jpg"}
          height={1000}
          width={1000}
          alt=""
          className="h-48 w-full rounded-t-xl object-cover"
        />
        <div className="absolute -bottom-6 z-10 flex w-full justify-end">
          <div className="flex">
            <Image
              src={"/csgo.jpg"}
              height={1000}
              width={1000}
              alt=""
              className="h-12 w-12 rounded-full border-2 border-zinc-200 object-cover"
            />
            <Image
              src={"/csgo.jpg"}
              height={1000}
              width={1000}
              alt=""
              className="relative right-6 h-12 w-12 rounded-full border-2 border-zinc-200 object-cover"
            />
            <Image
              src={"/csgo.jpg"}
              height={1000}
              width={1000}
              alt=""
              className="relative right-12 h-12 w-12 rounded-full border-2 border-zinc-200 object-cover"
            />
          </div>
        </div>
        <div className="absolute left-4 top-4 rounded bg-zinc-200 bg-opacity-50 px-1 py-0.5 text-xs font-bold capitalize text-zinc-900 backdrop-blur-sm">
          bestseller
        </div>
      </div>

      <div className="relative flex h-56 w-full flex-col justify-between rounded-b-xl pt-12 backdrop-blur-md">
        <div className="font-bol absolute left-4 top-4 rounded bg-zinc-500 bg-opacity-50 px-1 py-0.5 text-xs capitalize text-zinc-200 backdrop-blur-sm">
          VALORANT
        </div>
        <div className="flex flex-col space-y-4">
          <div className="px-4 text-xl font-bold">
            Introduction to Valorant Competetive
          </div>
          <div className="flex items-center space-x-2 px-4">
            <div className="text-sm">{"4.0 (75 ratings)"}</div>
            <StarsComponent value={4} />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div
            onClick={() => {
              router.push(`/course/${courseId}`);
            }}
            className="flex cursor-pointer items-center space-x-1 p-4"
          >
            <div className="font-bol whitespace-nowrap capitalize text-zinc-50">
              explore now
            </div>
            <div className="flex justify-center text-zinc-50">
              <AiOutlineArrowRight size={20} />
            </div>
          </div>
          <div className="flex items-center space-x-1 pr-4 text-zinc-50">
            <HiOutlineBookOpen size={20} />
            <div className="capitalize text-sm">3 lesson</div>
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
            <div>
              <FaStar color={"#F7D800"} size={16} />
            </div>
          );
        })}
        {Array.from({
          length: 5 - value,
        }).map((_, index) => {
          return (
            <div>
              <FaRegStar size={16} />
            </div>
          );
        })}
      </>
    </div>
  );
};
