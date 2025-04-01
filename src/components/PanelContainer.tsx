"use client";

import React, { useContext } from "react";
import { GlobalContext } from "@/context/GlobalContext";

const PanelContainer = ({ children }: { children: React.ReactNode }) => {
  const { showPanel } = useContext(GlobalContext);

  return (
    <aside
      className={`h-screen transition-all dark:bg-background-base flex flex-col bg-gray-50 z-50 lg:z-10 md:px-10 lg:px-2 ${
        showPanel
          ? "w-full fixed top-0 lg:top-10 right-0 lg:sticky lg:w-64 px-4"
          : "hidden"
      }`}
    >
      {children}
    </aside>
  );
};

export default PanelContainer;
