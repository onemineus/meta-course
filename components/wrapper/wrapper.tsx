"use client";

import React from "react";
import { HuddleClient, HuddleProvider } from "@huddle01/react";
import { ThemeProvider } from "../theme/theme";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const huddleClient = new HuddleClient({
    projectId: "1h8cAwCA7bQ7mjxCl948iqf-aHYtmU1Y",
    options: {
      activeSpeakers: {
        size: 8,
      },
    },
  });
  return (
    <HuddleProvider key="huddle01-provider" client={huddleClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </HuddleProvider>
  );
};

export default Wrapper;
