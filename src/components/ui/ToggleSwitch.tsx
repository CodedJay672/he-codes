"use client";

import { useTheme } from "next-themes";
import { ReactNode, useState } from "react";
import { HiDotsVertical, HiOutlineX } from "react-icons/hi";
import { HiPhone } from "react-icons/hi2";
import { MdDarkMode, MdLightMode } from "react-icons/md";

// toggle switch for mobile
const SidePanelToggle = ({ children }: { children: ReactNode }) => {
  const { theme, setTheme } = useTheme();
  const [showSideForm, setshowSideForm] = useState(false);

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      return;
    }

    setTheme("light");
  };

  return (
    <div className="w-full flex flex-between px-5 py-3 bg-white dark:bg-background-base sticky top-0 left-0 z-50 ">
      <div className="flex-1 flex items-center gap-1">
        <HiPhone className="text-base lg:text-sm text-primary" />
        <div className="ml-2">
          <p className="text-sm font-semibold text-background-base dark:text-gray-200">
            +234813 953 6456
          </p>
          <p className="text-xs lg:text-sm  font-light text-gray-700 dark:text-gray-400 leading-2">
            emmajoel6456@gmail.com
          </p>
        </div>
      </div>

      <div className="flex-center gap-2 relative">
        <button
          onClick={changeTheme}
          className="p-2 rounded-full flex-center cursor-pointer border-2 border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-background-base"
        >
          {theme === "dark" ? (
            <MdLightMode className="text-base lg:text-sm  text-gray-500 dark:text-gray-400 outline-none" />
          ) : (
            <MdDarkMode className="text-base lg:text-sm  text-gray-500 dark:text-gray-400 outline-none" />
          )}
        </button>
        <button
          onClick={() => setshowSideForm(true)}
          className="p-2 rounded-full  flex justify-center items-center lg:hidden border-2 border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-background-base "
        >
          <HiDotsVertical className="text-base lg:text-sm  text-gray-500 dark:text-gray-400 outline-none" />
        </button>
      </div>
      <div
        className={`
            fixed top-0 right-0 z-50
            transition-transform transform-gpu duration-300 ease-in-out
            bg-white dark:bg-background-base
            ${showSideForm ? "translate-x-0" : "translate-x-full"}
            w-full h-screen
            sm:w-[70vw] sm:h-screen
            lg:hidden
          `}
      >
        <div className="w-full flex justify-end">
          <HiOutlineX
            size={44}
            onClick={() => setshowSideForm(false)}
            className="text-primary cursor-pointer mt-2 p-3"
          />
        </div>
        {children}
      </div>
    </div>
  );
};

export default SidePanelToggle;
