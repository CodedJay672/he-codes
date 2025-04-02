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
    <article className="w-full p-3 rounded-lg bg-white dark:bg-background/50 select-none cursor-pointer border border-gray-300 dark:border-gray-600 hover:border-primary transition-all">
      <Image src={icon} alt={heading} width={40} height={40} className="mb-4" />
      <h3 className="text-base text-primary font-semibold">{heading}</h3>
      <p className="text-sm dark:text-gray-100 text-gray-800">{description}</p>
    </article>
  );
};

export default Stack;
