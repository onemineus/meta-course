
import Course from "@/components/coursePage/page";
import Dashboard from "@/components/dashboard/page";
import Providers from "@/jotai/jotai";
import Image from "next/image";

export default function Home() {
  return (
    <Providers>
      {/* <Course /> */}
      <Dashboard />
    </Providers>
  );
}
