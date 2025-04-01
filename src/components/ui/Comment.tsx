import React from "react";

const Comment = ({ name, comment }: { name: string; comment: string }) => {
  return (
    <article className="w-full py-1 px-3 bg-gray-50/10 rounded-md">
      <h2 className="text-base text-background-base dark:text-white font-bold">
        {name}
      </h2>
      <p className="text-sm font-nomal text-background-light dark:text-gray-50">
        {comment}
      </p>
    </article>
  );
};

export default Comment;
