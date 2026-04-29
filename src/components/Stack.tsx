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
    <article className="card-glass p-6 rounded-xl border border-white/10 dark:border-white/5 group hover:border-primary/30 transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
          <Image src={icon} alt={heading} width={24} height={24} className="opacity-70 group-hover:opacity-100 transition-opacity" />
        </div>
        <div className="flex-1">
          <h3 className="text-base font-semibold dark:text-white text-gray-900 mb-2">{heading}</h3>
          <p className="text-sm dark:text-gray-400 text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </article>
  );
};

export default Stack;
