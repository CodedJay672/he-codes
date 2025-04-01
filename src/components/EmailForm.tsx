"use client";

import { sendEmail } from "@/lib/actions/contact.actions";
import React, { useActionState, useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlinePhone, HiOutlineUser } from "react-icons/hi2";
import { VscLoading } from "react-icons/vsc";

const EmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [state, action, isPending] = useActionState(sendEmail, null);
  return (
    <form action={action} className="flex flex-col gap-4">
      <label htmlFor="name" className="form-label">
        Fullname
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-input pl-10 w-full h-12"
        />
        <HiOutlineUser
          size={20}
          className="text-primary absolute top-[38px] left-3"
        />
      </label>
      <label htmlFor="email" className="form-label">
        Email
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input pl-10 w-full h-12"
        />
        <HiOutlineMail
          size={20}
          className="text-primary absolute top-[38px] left-3"
        />
      </label>
      <label htmlFor="phone" className="form-label">
        Phone
        <input
          id="phone"
          type="text"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="form-input pl-10 w-full h-12"
        />
        <HiOutlinePhone
          size={20}
          className="text-primary absolute top-[38px] left-3"
        />
      </label>
      <label htmlFor="message" className="form-label">
        Message
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="form-input h-40 resize-none block w-full p-4"
        />
      </label>

      <button
        type="submit"
        className="w-full lg:w-72 h-12 bg-primary rounded-lg cursor-pointer mt-1 place-self-end flex-center gap-2 disabled:brightness-50"
        disabled={isPending}
      >
        {isPending && (
          <VscLoading
            size={24}
            className="dark:text-gray-50 text-background-base animate-spin flex-center gap-1 inline"
          />
        )}
        <span className="text-white text-base">Send message</span>
      </button>
    </form>
  );
};

export default EmailForm;
