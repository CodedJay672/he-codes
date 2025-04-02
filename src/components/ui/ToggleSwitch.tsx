"use client";

import { GlobalContext } from "@/context/GlobalContext";
import { useContext } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { MdDarkMode, MdLightMode } from "react-icons/md";

// toggle switch for mobile
const SidePanelToggle = () => {
  const { theme, togglePanel, changeTheme } = useContext(GlobalContext);

  return (
    <div className="w-full flex lg:justify-end justify-between px-2 py-5 sticky top-0 left-0 bg-gray-50 dark:bg-background-base z-50">
      <div
        className="p-1 rounded-full flex-center cursor-pointer border border-gray-300 dark:border-primary"
        onClick={changeTheme}
      >
        {theme === "dark" ? (
          <MdLightMode size={20} className="text-primary" />
        ) : (
          <MdDarkMode size={20} className="text-primary" />
        )}
      </div>
      <div className="p-1 rounded-full flex justify-center items-center border border-gray-300 dark:border-primary lg:hidden">
        <HiDotsVertical
          size={20}
          className="lg:hidden text-primary cursor-pointer"
          onClick={togglePanel}
        />
      </div>
    </div>
  );
};

export default SidePanelToggle;
