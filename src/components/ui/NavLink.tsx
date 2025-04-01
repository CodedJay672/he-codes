"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavLinkProps {
  path: string;
  label: string;
  icon?: React.ReactNode;
}

const NavLink = ({ path, label, icon }: NavLinkProps) => {
  const pathname = usePathname();

  const isActive = () => {
    return pathname.endsWith(path);
  };

  return (
    <Link
      href={path}
      className={`w-full p-2 lg:py-3 transition-all text-background-base flex flex-col items-center lg:flex-row gap-1 capitalize lg:px-16 rounded-xl ${
        isActive()
          ? "bg-primary font-bold text-white"
          : "hover:bg-primary/10 text-gray-500"
      }`}
    >
      {icon}
      <span className="text-sm lg:text-base">{label}</span>
    </Link>
  );
};

export default NavLink;
