"use client";

import { GlobalContext } from "@/context/GlobalContext";
import { createComment } from "@/lib/actions/comments.actions";
import React, { useActionState, useContext, useState } from "react";
import { HiArrowRightCircle } from "react-icons/hi2";
import { VscLoading } from "react-icons/vsc";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const { fbkHeight } = useContext(GlobalContext);
  const [state, formAction, isPending] = useActionState(createComment, null);

  return (
    <form
      action={formAction}
      className={`w-full mt-3 flex flex-col gap-1 transition-all relative`}
      style={{
        height: `${fbkHeight}`,
        overflow: "hidden",
      }}
    >
      <label
        htmlFor="name"
        className="text-background-base dark:text-gray-300 text-base font-medium flex flex-col gap-2"
      >
        Name
        <input
          id="name"
          type="text"
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full h-12 lg:h-10 p-2 border border-primary text-background-base dark:text-gray-50 rounded-md text-base font-thin ring-0 outline-none"
        />
      </label>
      <label
        htmlFor="feedback"
        className="text-background-base dark:text-gray-300 text-base font-medium flex flex-col gap-2"
      >
        Feedback
        <textarea
          id="feedback"
          name="message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="text-background-base dark:text-gray-50 w-full h-32 resize-none lg:h-32 p-2 border border-primary rounded-md text-base font-thin outline-none ring-0"
        />
      </label>

      <button
        type="submit"
        className="place-self-end cursor-pointer flex-center gap-1"
        disabled={isPending}
      >
        {isPending ? (
          <VscLoading size={40} className="text-gray-50 animate-spin" />
        ) : (
          <HiArrowRightCircle
            size={40}
            color="white"
            className="fill-primary"
          />
        )}
      </button>
    </form>
  );
};

export default FeedbackForm;
