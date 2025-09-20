import Image from "next/image";
import React from "react";

const Stack = ({
  heading,
  description,
  icon,
}: {
  heading: string;
  description: string;
  icon: string;
}) => {
  return (
    <article className="w-full p-3 rounded-lg bg-white hover:bg-gray-50 dark:bg-background/50 hover:dark:bg-background/60 select-none border border-gray-300 dark:border-gray-600 hover:border-primary transition-all relative overflow-hidden group">
      <Image src={icon} alt={heading} width={40} height={40} className="mb-4" />
      <h3 className="text-base text-primary font-semibold">{heading}</h3>
      <p className="text-sm dark:text-gray-100 text-gray-800">{description}</p>
    </article>
  );
};

export default Stack;
