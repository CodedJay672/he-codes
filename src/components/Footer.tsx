"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="w-full p-2 flex justify-center items-center">
      <p className="text-sm text-gray-500 font-light dark:text-background-light">
        &copy; {new Date().getFullYear()}. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
