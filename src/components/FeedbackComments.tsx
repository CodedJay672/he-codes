"use client";

import React, { useContext } from "react";
import Comment from "./ui/Comment";
import { Models } from "node-appwrite";
import { GlobalContext } from "@/context/GlobalContext";

const FeedbackComments = ({ comments }: { comments: Models.Document[] }) => {
  const { fbkHeight, resizeFbk } = useContext(GlobalContext);

  return (
    <>
      <span
        className="w-full py-1 px-3 bg-white/20 backdrop-blur-lg block text-primary sticky top-0 left-0 cursor-pointer"
        onClick={resizeFbk}
      >
        See {fbkHeight === "auto" ? "more" : "less"}
      </span>
      {comments?.map((comment) => (
        <Comment
          key={comment.$id}
          name={comment.name}
          comment={comment.feedback}
        />
      ))}
    </>
  );
};

export default FeedbackComments;
