import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiDocument, HiUserCircle } from "react-icons/hi2";
import { MdFileOpen } from "react-icons/md";
import { HiMail } from "react-icons/hi";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import NavLink from "./ui/NavLink";

import Footer from "./Footer";

const Sidebar = () => {
  return (
    <aside className="hidden lg:block w-62 py-6 px-2 shrink-0 h-[calc(100vh-50px)] lg:sticky top-13 left-0 flex-col items-center bg-gray-50 dark:bg-background-base/20 overflow-y-scroll no-scrollbar">
      <div className="w-full flex-center flex-col gap-2">
        <Image
          src="/assets/profile.png"
          alt="he-codes"
          width={120}
          height={120}
          className="rounded-full object-center"
        />

        <h1 className="text-lg lg:text-2xl leading-3 font-semibold text-center text-background dark:text-gray-50">
          Emmanuel Ugoh
        </h1>
        <p className="text-sm text-background-base dark:text-gray-400 font-medium text-center">
          Software Engineer
        </p>

        <div className="flex-between gap-5 mt-1">
          <Link
            href="https://linkedin.com/ln/emmanueljoel672/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={20} className="text-blue-800" />
          </Link>
          <Link
            href="https://github.com/codedjay672/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              size={20}
              className="text-background-base dark:text-white"
            />
          </Link>
          <Link
            href="https://linkedin.com/ln/emmanueljoel672/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={20} className="text-cyan-600" />
          </Link>
        </div>
        <Link
          href="https://wa.link/09032705515"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm mt-3 text-background-base dark:text-gray-50 bg-gray-300 dark:bg-background transition-all px-4 py-1 lg:px-6 rounded-xl hover:opacity-95"
        >
          Let's have coffee
        </Link>
      </div>

      <nav className="w-full flex flex-col flex-1 border-t border-background/50 dark:border-background-light/50 mt-6 mb-16 lg:mb-6 py-6 space-y-3">
        <NavLink
          path="/"
          label="about me"
          icon={<HiUserCircle className="size-6 lg:size-4" />}
        />
        <NavLink
          path="/my-resume"
          label="my Resume"
          icon={<MdFileOpen className="size-6 lg:size-4" />}
        />
        <NavLink
          path="/my-portfolio"
          label="my portfolio"
          icon={<HiDocument className="size-6 lg:size-4" />}
        />
        <NavLink
          path="/contact-me"
          label="contact me"
          icon={<HiMail className="size-6 lg:size-4" />}
        />
      </nav>
      <Footer />
    </aside>
  );
};

export default Sidebar;
