"use client";

import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";
import { HiOutlineX } from "react-icons/hi";

const CloseButton = () => {
  const { togglePanel } = useContext(GlobalContext);

  return (
    <div className="w-full flex justify-end lg:hidden mt-6">
      <HiOutlineX
        size={20}
        className="text-primary cursor-pointer"
        onClick={togglePanel}
      />
    </div>
  );
};

export default CloseButton;
