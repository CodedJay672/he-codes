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
    <article className="card-glass p-6 rounded-xl flex flex-col items-center gap-4 text-center border-0 hover:border-primary/30 transition-all">
      <div className="w-14 h-14 rounded-lg bg-primary/10 flex-center">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold dark:text-white text-gray-900 mb-1">
          {type}
        </h3>
        <p className="text-sm dark:text-gray-400 text-gray-600 break-words">
          {info}
        </p>
      </div>
    </article>
  );
};

export default ContactCard;
