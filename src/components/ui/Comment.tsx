import React from "react";

const Comment = ({ name, comment }: { name: string; comment: string }) => {
  return (
    <article className="p-3 bg-gray-100/50 dark:bg-gray-50/10 mx-2 rounded-md space-y-1">
      <h2 className="text-base text-background-base dark:text-white font-bold">
        {name}
      </h2>
      <p className="text-sm font-nomal text-background-light dark:text-gray-200">
        {comment}
      </p>
    </article>
  );
};

export default Comment;
