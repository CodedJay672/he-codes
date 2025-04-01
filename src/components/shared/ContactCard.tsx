import React from "react";

const ContactCard = ({
  icon,
  type,
  info,
}: {
  icon: React.ReactNode;
  type: string;
  info: string;
}) => {
  return (
    <article className="w-full p-3 flex-center gap-1 border-l border-primary">
      {icon}
      <div className="flex-1">
        <h3 className="text-background-base dark:text-white font-bold">
          {type}
        </h3>
        <p className="text-xs text-background-base dark:text-gray-200">
          {info}
        </p>
      </div>
    </article>
  );
};

export default ContactCard;
