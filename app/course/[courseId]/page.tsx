"use client";

import Course from "@/components/coursePage/coursePage";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";


const Page = () => {
  const address = "0x4432591D6d3722bE458e839779d715c0d74E8Bf7";

  const params = useParams();

  return (
    // <div className="relative min-h-screen text-zinc-200">
    //   <div className="border- flex h-20 w-full items-center border-zinc-700 bg-zinc-900 px-6">
    //     <div className="z-10 flex items-center space-x-2">
    //       <div className="rounded-md bg-gradient-to-r from-blue-500 to-purple-500 p-1">
    //         <PiGameControllerFill size={30} />
    //       </div>
    //       <div className="text-xl font-bold">Pro Gaming</div>
    //     </div>
    //   </div>

    //   {/* body */}
    //   <div className="flex w-full flex-col bg-zinc-950 p-6">
    //     <div className="absolute left-0 top-0 h-screen w-full bg-blend-overlay">
    //       {/* set the image as per the course game */}
    //       <Image
    //         src="/csgo.jpg"
    //         alt=""
    //         width={1000}
    //         height={1000}
    //         className="h-2/3 w-full object-cover opacity-20 bg-blend-darken"
    //       />
    //       <div className="absolute top-0 h-2/3 w-full bg-gradient-to-t from-zinc-950 to-transparent"></div>
    //     </div>
    //     {/* course branch */}
    //     <div className="z-10 flex items-center">
    //       <div className="cursor-pointer capitalize">{"courses"}</div>
    //       <div>
    //         <IoIosArrowForward />
    //       </div>
    //       <div className="cursor-pointer">{data.courseName}</div>
    //     </div>

    //     {/* two section */}
    //     <div className="mt-6 flex w-full flex-col px-[4vw] lg:flex-row lg:space-x-[6vw]">
    //       {/* left section */}
    //       <div className="bg-pink-95 z-10 flex w-full flex-col">
    //         <div className="relative">
    //           <img
    //             src={data.courseThumbnailUrl}
    //             alt={data.courseTitle}
    //             className="aspect-auto w-full rounded-3xl"
    //           />
    //           <div className=" absolute -bottom-10 left-10 rounded-[20px] bg-zinc-900 p-1">
    //             <img
    //               src={data.creatorAvatarUrl}
    //               alt={data.courseName}
    //               className="h-20 rounded-2xl"
    //             />
    //           </div>
    //         </div>
    //         <div className="ml-0 mt-14 flex space-x-4 lg:ml-10">
    //           <div className="flex flex-col justify-between">
    //             <div className="text-">
    //               A course by{" "}
    //               <span className="font-bold">{data.creatorName}</span>
    //             </div>
    //           </div>
    //         </div>
    //         {/* description */}
    //         <div className="mx-0 mt-4 flex flex-col lg:mx-10">
    //           <div className="text-5xl">{data.courseTitle}</div>
    //           {data.description.map((desc, index) => {
    //             return (
    //               <div key={index} className="text-md mt-4">
    //                 {desc}
    //               </div>
    //             );
    //           })}
    //           <div className="mt-6 text-sm font-bold uppercase text-zinc-500">
    //             course table of contents
    //           </div>
    //           <div className="mt-3 rounded-xl bg-zinc-900 px-4 pb-4">
    //             <Accordion type="single" collapsible className="w-full ">
    //               {data.accordion.map((item, index) => {
    //                 return (
    //                   <AccordionItem key={index} value={index.toString()}>
    //                     <AccordionTrigger className="h-12 w-full border-b bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-left font-bold text-transparent">
    //                       {item.title}
    //                     </AccordionTrigger>
    //                     <AccordionContent>{item.content}</AccordionContent>
    //                   </AccordionItem>
    //                 );
    //               })}
    //             </Accordion>
    //           </div>

    //           {/* reviews */}
    //           <div className="flex flex-col pt-6">
    //             <div className="text-2xl capitalize">reviews</div>
    //             {/* rating */}
    //             <div className="flex items-center pt-3">
    //               <div>
    //                 <IoMdStar size={30} />
    //               </div>
    //               <div className="pt-1">{data.starCount}</div>
    //               <Separator orientation="vertical" className="mx-3" />
    //               <div className="capitalize">{`${data.reviewCount} reviews`}</div>
    //             </div>
    //             {/* user reviews */}
    //             <div className="flex flex-col space-y-4 pt-6">
    //               {data.review.map((item, index) => {
    //                 return (
    //                   <div
    //                     key={index}
    //                     className="flex w-full flex-col space-y-4 rounded-lg bg-zinc-900 p-4"
    //                   >
    //                     <div className="flex items-center space-x-4">
    //                       <img
    //                         src={item.avatar}
    //                         alt={item.user}
    //                         className="h-10 w-10 rounded-full"
    //                       />
    //                       <div className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text font-bold text-transparent">{`${item.user.slice(
    //                         0,
    //                         5,
    //                       )}...${item.user.slice(27, 32)}`}</div>
    //                     </div>
    //                     <div className="text-sm">{item.comment}</div>
    //                   </div>
    //                 );
    //               })}
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       {/* right section */}
    //       <div className="bg-blue-95 z-10 flex w-full flex-col lg:w-2/5">
    //         {/* price */}
    //         {/* <div className="uppercase mt-10 text-sm">price</div> */}
    //         <div className="mt-10 flex items-end space-x-2">
    //           <div className="text-6xl ">{data.price}</div>
    //           <div className="mb-1 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text font-bold uppercase text-transparent">
    //             {data.currency}
    //           </div>
    //         </div>
    //         {/* tabs */}
    //         <div className="mt-6 flex w-full justify-between rounded-2xl border border-zinc-400 p-4">
    //           <div className="flex w-full items-center space-x-4">
    //             <div>
    //               <SiGoogleclassroom size={30} />
    //             </div>
    //             <div className="flex flex-col text-xs">
    //               <div className="uppercase">mode</div>
    //               <div className="text-sm font-bold capitalize">
    //                 {data.mode}
    //               </div>
    //             </div>
    //           </div>
    //           <Separator orientation="vertical" className="mx-4" />
    //           <div className="flex w-full items-center space-x-4">
    //             <div>
    //               <FaRankingStar size={30} />
    //             </div>
    //             <div className="flex flex-col text-xs">
    //               <div className="uppercase">difficulty</div>
    //               <div className="text-sm font-bold capitalize">
    //                 {data.difficulty}
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         {/* details */}
    //         <div className="mt-6 flex w-full flex-col space-y-2">
    //           <div className="flex items-center space-x-2">
    //             <div className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
    //               <LuGamepad2 size={25} />
    //             </div>
    //             <div className="capitalize">game: </div>
    //             <div className="whitespace-nowrap font-bold">{data.game}</div>
    //           </div>
    //           <div className="flex items-center space-x-2">
    //             <div className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
    //               <PiStudentBold size={25} />
    //             </div>
    //             <div className="capitalize">students: </div>
    //             <div className="font-bold">{data.studentCount}</div>
    //           </div>
    //           <div className="flex items-center space-x-2">
    //             <div className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
    //               <IoLanguage size={25} />
    //             </div>
    //             <div className="capitalize">language: </div>
    //             <div className="font-bold capitalize">{data.language}</div>
    //           </div>
    //           {/* <div className="flex items-center space-x-2">
    //             <div>
    //               <LuFileStack size={25} />
    //             </div>
    //             <div className="capitalize">additional resources: </div>
    //             <div className="font-bold">{"2 files"}</div>
    //           </div> */}
    //           <div className="flex items-center space-x-2">
    //             <div className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
    //               <CgTimer size={25} />
    //             </div>
    //             <div className="capitalize">duration: </div>
    //             <div className="font-bold capitalize">{`${data.duration}h`}</div>
    //           </div>
    //         </div>
    //         {/* buy */}
    //         <div className="flex items-center space-x-6 pt-6">
    //           <Button
    //             onClick={() => {
    //               if (isLiveSession) {
    //                 setIsEnrollClicked(true);
    //                 handleConnect();
    //               } else {
    //                 // payment for prerecorded videos
    //               }
    //             }}
    //             variant={"secondary"}
    //             className="flex items-center space-x-2 bg-gradient-to-r from-[#296BBD] to-[#AC85FF] text-zinc-100"
    //           >
    //             <BsBagCheck size={20} />
    //             <div>Enroll now</div>
    //           </Button>
    //           <div className="rounded-lg bg-gradient-to-r from-[#296BBD] to-[#AC85FF] p-[2px]">
    //             <Button
    //               variant={"default"}
    //               className="flex items-center space-x-2 bg-zinc-900 text-zinc-100 outline-1 "
    //             >
    //               <FiGift size={20} />
    //               <div>Buy as a gift</div>
    //             </Button>
    //           </div>
    //         </div>
    //         {/* additional */}
    //         <div className="flex flex-col space-y-3 pt-6">
    //           <div className="text-sm font-bold uppercase text-zinc-500">
    //             prerequisites
    //           </div>
    //           <div className="">{data.prerequisite}</div>
    //         </div>
    //         {isLiveSession ? (
    //           // {/* live session */}
    //           <div>
    //             {/* select date */}
    //             {isEnrollClicked && (
    //               <div className="flex flex-col space-y-3 pt-6">
    //                 <div className="text-sm font-bold uppercase text-zinc-500">
    //                   choose a date
    //                 </div>
    //                 <div className="">
    //                   <Calendar
    //                     selected={selectedDate}
    //                     onSelect={setSelectedDate}
    //                     onDayClick={handleDayClick}
    //                   />
    //                 </div>
    //               </div>
    //             )}
    //             {/* select slot */}
    //             {isDateSelected && (
    //               <div className="flex flex-col space-y-3 pt-6">
    //                 <div className="text-sm font-bold uppercase text-zinc-500">
    //                   choose a slot
    //                 </div>
    //                 <div className="">
    //                   <RadioGroup
    //                     onValueChange={(value) => {
    //                       setSelectedSlot(value);
    //                       const bookedSlotPrivate = {
    //                         fromHour: parseInt(value) + 11,
    //                         duration: data.duration,
    //                         date: selectedDate,
    //                       };
    //                       console.log(bookedSlotPrivate);
    //                       setBookedSlot(bookedSlotPrivate);
    //                     }}
    //                     defaultValue="comfortable"
    //                     className="flex flex-col space-y-2"
    //                   >
    //                     {Array.from({ length: 5 }, (_, index) => {
    //                       return (
    //                         <div
    //                           key={index}
    //                           className="flex items-center space-x-2 rounded-lg bg-zinc-900 p-3"
    //                         >
    //                           <RadioGroupItem
    //                             value={index.toString()}
    //                             id="r1"
    //                           />
    //                           <Label htmlFor="r1">{`${
    //                             10 + index + 1
    //                           }:${"00"} - ${12 + index}:${"00"}`}</Label>
    //                         </div>
    //                       );
    //                     })}
    //                   </RadioGroup>
    //                 </div>
    //               </div>
    //             )}
    //             {/* proceed  */}
    //             {selectedSlot !== "" && (
    //               <div className="pt-6">
    //                 <Button
    //                   onClick={async () => {
    //                     // const code = await getRoomCode();
    //                     const code = "Asdasdas";
    //                     const sessionData = {
    //                       coach: data.creatorName,
    //                       student: "student.name",
    //                       title: data.courseName,
    //                       date: selectedDate,
    //                       time: selectedSlot,
    //                       state: "pending",
    //                       game: data.game,
    //                       roomCode: code,
    //                     };
    //                     const transaction = {
    //                       to: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
    //                       value: ethers.parseEther(data.price.toString()),
    //                     };

    //                     try {
    //                       const tx = await signer.sendTransaction(transaction);
    //                       setIsLoading(true);
    //                       await tx.wait();
    //                       toast({
    //                         title: "Scheduled: Catch up",
    //                         description: formatDate(bookedSlot.date!),
    //                       });
    //                       setIsLoading(false);
    //                       setThankYou(true);
    //                     } catch (error) {
    //                       console.log(error);
    //                       toast({
    //                         title: "Payment rejected!",
    //                       });
    //                     }
    //                     // toast({
    //                     //   title: "Scheduled: Catch up",
    //                     //   description: formatDate(bookedSlot.date!),
    //                     // });
    //                   }}
    //                   variant={"secondary"}
    //                   className="space-x-2"
    //                 >
    //                   <FaCheckToSlot size={20} />
    //                   <div>Book your slot</div>
    //                 </Button>
    //               </div>
    //             )}
    //           </div>
    //         ) : (
    //           // {/* pre reorded videos */}
    //           <div className="pt-6">
    //             <div className="text-sm font-bold uppercase text-zinc-500">
    //               introduction videos
    //             </div>
    //             <div className="flex flex-col space-y-4 pt-4">
    //               <div className="rounded-xl bg-zinc-900 p-2">
    //                 <video
    //                   controls
    //                   muted
    //                   loop
    //                   autoPlay
    //                   src="./csgo.mp4"
    //                   className="rounded-lg"
    //                 ></video>
    //                 <div className="pt-2 text-sm">How to do something</div>
    //               </div>
    //               <div className="rounded-xl bg-zinc-900 p-2">
    //                 <video
    //                   controls
    //                   muted
    //                   loop
    //                   autoPlay
    //                   src="./csg.mp4"
    //                   className="rounded-lg"
    //                 ></video>
    //                 <div className="pt-2 text-sm">How to do another thing</div>
    //               </div>
    //             </div>
    //           </div>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    //   <Toaster />
    //   {thankYou && (
    //     <div className="fixed top-0 z-20 flex h-screen w-full items-center justify-center bg-zinc-950">
    //       <div>
    //         <Image
    //           src={"game.svg"}
    //           width={1000}
    //           height={1000}
    //           alt=""
    //           className="w-[45vw]"
    //         />
    //         {/* <div className="text-center text-5xl">Thank You!</div>
    //         <div className="text-center">{`We will catch up on ${formatDate(
    //           bookedSlot.date!
    //         )}`}</div> */}
    //       </div>
    //     </div>
    //   )}
    //   {isLoading && (
    //     <div className="fixed top-0 z-20 flex h-screen w-full items-center justify-center bg-zinc-950">
    //       <div>
    //         <PacmanLoader
    //           color={"#fff"}
    //           loading={true}
    //           size={30}
    //           aria-label="Loading Spinner"
    //           data-testid="loader"
    //         />
    //       </div>
    //     </div>
    //   )}
    // </div>
    <Course courseId={params.courseId as string}/>
  );
};

export default Page;
