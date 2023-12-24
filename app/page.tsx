
import Course from "@/components/coursePage/coursePage";
import Dashboard from "@/components/dashboard/dashboardPage";
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
