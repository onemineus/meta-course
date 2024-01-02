"use client";

import Course from "@/components/coursePage/coursePage";
import ProfileView from "@/components/profilePage/profileView";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const address = "0x4432591D6d3722bE458e839779d715c0d74E8Bf7";

  const params = useParams();

  return <ProfileView id={params.id as string} />;
};

export default Page;
