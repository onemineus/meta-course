"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IoMdEye } from "react-icons/io";
import { MdMenuOpen } from "react-icons/md";
import { IoIosStar } from "react-icons/io";

export const CourseCard = () => {
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
