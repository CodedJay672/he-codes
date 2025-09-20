import React from "react";
import NavLink from "./ui/NavLink";
import { HiFolder, HiUserCircle } from "react-icons/hi2";
import { MdFileOpen } from "react-icons/md";
import { HiMail } from "react-icons/hi";

const Bottombar = () => {
  return (
    <div className="w-full flex justify-between items-center lg:hidden p-2 bg-gray dark:bg-background-base/80 z-10 backdrop-blur-lg fixed bottom-0 left-0 gap-2 md:gap-6">
      <NavLink
        path="/"
        label="about"
        icon={<HiUserCircle className="size-4 lg:size-8" />}
      />
      <NavLink
        path="/my-resume"
        label="resume"
        icon={<MdFileOpen className="size-4 lg:size-8" />}
      />
      <NavLink
        path="/my-portfolio"
        label="portfolio"
        icon={<HiFolder className="size-4 lg:size-8" />}
      />
      <NavLink
        path="/contact-me"
        label="contact"
        icon={<HiMail className="size-4 lg:size-8" />}
      />
    </div>
  );
};

export default Bottombar;
