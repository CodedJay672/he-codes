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
    <article className="w-full p-3 flex-center gap-2 border-l-2 border-primary">
      {icon}
      <div className="flex-1">
        <h3 className="text-background-base dark:text-white font-semibold">
          {type}
        </h3>
        <p className="text-xs lg:text-sm text-background-base dark:text-gray-200 font-light">
          {info}
        </p>
      </div>
    </article>
  );
};

export default ContactCard;
