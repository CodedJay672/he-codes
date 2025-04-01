import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import NavLink from "./ui/NavLink";
import { HiDocument, HiUserCircle } from "react-icons/hi2";
import { MdFileOpen } from "react-icons/md";
import { HiMail } from "react-icons/hi";

const Sidebar = () => {
  return (
    <aside className="hidden lg:flex w-80 bg-white dark:bg-background/50 h-screen sticky top-0 left-0 md:py-6 lg:py-10 flex-col items-center">
      <div className="w-full flex-center flex-col gap-1">
        <Image
          src="/assets/profile.jpg"
          alt="he-codes"
          width={120}
          height={120}
          className="rounded-full object-center"
        />

        <h1 className="text-lg lg:text-2xl leading-3 font-semibold text-center text-background dark:text-gray-100">
          Emmanuel Ugoh
        </h1>
        <p className="text-background-base dark:text-gray-300 font-light text-center -mt">
          NextJs Developer
        </p>

        <div className="flex-between gap-5">
          <Link href="https://linkedin.com/ln/emmanueljoel672/">
            <FaLinkedin size={24} className="text-blue-800" />
          </Link>
          <Link href="https://github.com/codedjay672/">
            <FaGithub size={24} className="dark:text-white" />
          </Link>
          <Link href="https://linkedin.com/ln/emmanueljoel672/">
            <FaTwitter size={24} className="text-cyan-600" />
          </Link>
        </div>
        <Link
          href="https://wa.link/09032705515"
          className="mt-3 text-base text-background-base dark:text-gray-50 border border-primary transition-all px-4 py-1 lg:px-6 rounded-xl"
        >
          Let's have coffee
        </Link>
      </div>

      <nav className="w-full flex flex-col flex-1 space-y-1 border-t border-background/50 dark:border-background-light mt-6 mb-16 lg:mb-6 py-6">
        <NavLink path="/" label="about me" icon={<HiUserCircle size={24} />} />
        <NavLink
          path="/my-resume"
          label="my Resume"
          icon={<MdFileOpen size={24} />}
        />
        <NavLink
          path="/my-portfolio"
          label="my portfolio"
          icon={<HiDocument size={24} />}
        />
        <NavLink
          path="/contact-me"
          label="contact me"
          icon={<HiMail size={24} />}
        />
      </nav>

      <footer className="w-full p-2 flex justify-center items-center">
        <p className="text-gray-400 font-light dark:text-background-light">
          &copy; {new Date().getFullYear()}. All rights reserved.
        </p>
      </footer>
    </aside>
  );
};

export default Sidebar;
