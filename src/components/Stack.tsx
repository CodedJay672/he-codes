import React from "react";

const Stack = ({
  heading,
  description,
  icon,
}: {
  heading: string;
  description: string;
  icon?: string;
}) => {
  return (
    <article className="w-full p-3 rounded-lg bg-white dark:bg-background/50 select-none cursor-pointer border border-gray-300 dark:border-gray-600 hover:border-primary transition-all">
      <h3 className="text-xl text-primary font-semibold">{heading}</h3>
      <p className="text-sm dark:text-gray-100 text-gray-800">{description}</p>
    </article>
  );
};

export default Stack;
