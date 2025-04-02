"use client";

import Image from "next/image";
import React from "react";

const error = ({
  error,
  reset,
}: {
  error: Error & { digest: string };
  reset: () => void;
}) => {
  return (
    <section className="wrapper min-h-screen flex-center flex-col gap-2">
      <Image
        src="/assets/robot-bro.svg"
        alt="error"
        width={200}
        height={210}
        className="fill-primary"
      />

      <p className="text-background-base dark:text-gray-50 text-base text-center font-thin">
        {error.digest}: {error.message}
      </p>
      <button
        className="bg-primary text-white px-6 h-10 flex-center mt-6 rounded-lg cursor-pointer"
        onClick={reset}
      >
        Reload Page
      </button>
    </section>
  );
};

export default error;
