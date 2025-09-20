"use client";

import React, { useState } from "react";
import Comment from "./ui/Comment";
import { Models } from "node-appwrite";
import { HiChevronDown } from "react-icons/hi2";

const FeedbackComments = ({ comments }: { comments: Models.Document[] }) => {
  const [fbkHeight, resizeFbk] = useState(false);

  return (
    <div
      className={`w-full flex-1 bg-white dark:bg-background-base overflow-y-scroll no-scrollbar transition-all duration-300 ease-in-out space-y-3 ${
        fbkHeight
          ? "h-96 absolute bottom-2 right-0"
          : "absolute bottom-0 right-0 h-44"
      }`}
    >
      <button
        onClick={() => resizeFbk((prev) => !prev)}
        className="w-full p-3 bg-gray-100 flex justify-center items-center gap-2 dark:bg-background text-primary font-medium sticky top-0 left-0 cursor-pointer "
      >
        See {fbkHeight ? "less" : "more"}
        <HiChevronDown
          size={20}
          className={`text-primary transition-transform duration-300 ease-in-out ${
            fbkHeight ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      {comments?.map((comment) => (
        <Comment
          key={comment.$id}
          name={comment.name}
          comment={comment.feedback}
        />
      ))}
    </div>
  );
};

export default FeedbackComments;
