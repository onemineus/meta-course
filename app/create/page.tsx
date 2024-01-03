"use client";

import { Input } from "@/components/ui/input";
import { TbPhotoOff } from "react-icons/tb";
import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const CreateCourse = () => {
  const [step, setStep] = useState(0);
  return (
    <div className="h-screen w-full flex-col overflow-y-hidden">
      <div className="h-20 w-full shrink-0 border-b bg-zinc-950"></div>
      <div className="flex h-full w-full bg-zinc-50">
        <div className="h-full w-[300px] bg-zinc-950"></div>
        <div className="flex h-full w-full justify-center border-l bg-zinc-950">
          <div className="flex max-w-4xl flex-col">
            {/* steps */}
            <div className="bg-zinc-90 mt-8 flex w-full items-center justify-center">
              <div className="bg-zinc-80 flex items-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 text-zinc-100">
                  1
                </div>
                <div className="h-[1px] w-12 bg-zinc-50"></div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-200 text-zinc-900">
                  2
                </div>
                <div className="h-[1px] w-12 bg-zinc-50"></div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-200 text-zinc-900">
                  3
                </div>
              </div>
            </div>
            {/* head */}
            <div className="flex flex-col space-y-2 p-8">
              <div className="text-sm text-zinc-400">{`Step ${1 + 0}/3`}</div>
              <div className="text-3xl font-bold">
                Let&apos;s set up your course
              </div>
              <div className="text-sm text-zinc-300">
                Tell us more about your course so we can provide you a
                personalized experience tailored to your preferences
              </div>
            </div>
            {}
            <div className="flex h-full flex-col space-y-8 overflow-y-auto px-8 pb-28 scrollbar-thin">
              {/* thumbnail */}
              <div className="flex flex-col space-y-2">
                <div className="capitalize">course thumbnail</div>
                <div className="flex space-x-4">
                  <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-xl bg-zinc-700">
                    <TbPhotoOff size={24} className="text-zinc-400" />
                  </div>
                  <div className="flex flex-col justify-center space-y-4">
                    <div>
                      <Input type="file" className="w-64 bg-zinc-900" />
                    </div>
                    <div className="text-sm text-zinc-400">
                      .png, .jpg, .jpeg files up to 8MB. Recomended size is
                      2000x1000px.
                    </div>
                  </div>
                </div>
              </div>
              {/* title */}
              <div className="flex flex-col space-y-2">
                <div className="capitalize">course title</div>
                <div className="flex">
                  <Input
                    type="text"
                    placeholder="Title"
                    className="w-64 bg-zinc-900"
                  />
                </div>
              </div>
              {/* type */}
              <div className="flex flex-col space-y-2">
                <div className="capitalize">course type</div>
                <div className="flex flex-col space-y-2">
                  {/* live */}
                  <div className="flex w-full items-center justify-between space-x-2 rounded-lg border bg-zinc-900 p-4">
                    <div className="flex flex-col space-y-1">
                      <div className="text-sm font-bold text-zinc-200">
                        Live 1 to 1 Session
                      </div>
                      <div className="text-sm text-zinc-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Inventore adipisci unde odit accusamus veritatis! Saepe
                      </div>
                    </div>
                    <div>
                      <Switch />
                    </div>
                  </div>
                  {/* pre */}
                  <div className="flex w-full items-center justify-between rounded-lg border bg-zinc-900 p-4">
                    <div className="flex flex-col space-y-1">
                      <div className="text-sm font-bold capitalize text-zinc-200">
                        Pre-recorded Video Course
                      </div>
                      <div className="text-sm text-zinc-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Inventore adipisci unde odit accusamus veritatis! Saepe
                      </div>
                    </div>
                    <div>
                      <Switch />
                    </div>
                  </div>
                </div>
              </div>
              {/* game */}
              <div className="flex flex-col space-y-2">
                <div className="capitalize">choose game</div>
                <div className="flex">
                  <Select>
                    <SelectTrigger className="w-64 bg-zinc-900">
                      <SelectValue placeholder="Game" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Valorant">Valorant</SelectItem>
                      <SelectItem value="Counter Strike">
                        Counter Strike
                      </SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              {/* language */}
              <div className="flex flex-col space-y-2">
                <div className="capitalize">course language</div>
                <div className="flex">
                  <Select>
                    <SelectTrigger className="w-64 bg-zinc-900">
                      <SelectValue placeholder="Language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="English">English</SelectItem>
                      <SelectItem value="Counter Strike">
                        Counter Strike
                      </SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              {/* currency */}
              <div className="flex flex-col space-y-2">
                <div className="capitalize">choose currency</div>
                <div className="flex">
                  <Select>
                    <SelectTrigger className="w-64 bg-zinc-900">
                      <SelectValue placeholder="Currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="eth">Ethereum</SelectItem>
                      <SelectItem value="Counter Strike">
                        Counter Strike
                      </SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              {/* price */}
              <div className="flex flex-col space-y-2">
                <div className="capitalize">course price</div>
                <div className="flex">
                  <Input
                    type="number"
                    placeholder="Price"
                    step={0.001}
                    className="w-64 bg-zinc-900"
                  />
                </div>
              </div>
              {/* next */}
              <div className="flex">
                <Button variant={"secondary"} className="bg-zinc-700">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
