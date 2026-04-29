"use client";

import { deleteContact, sendEmail } from "@/lib/actions/contact.actions";
import React, { useRef, useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlinePhone, HiOutlineUser } from "react-icons/hi2";
import { VscLoading } from "react-icons/vsc";
import emailjs from "@emailjs/browser";
import { config } from "@/lib/config";
import { toast } from "sonner";
import { AppwriteException } from "node-appwrite";

const EmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !phone.trim() || !message.trim()) {
      return toast.error("All fields are required.");
    }

    try {
      //set loading state to true
      setIsSubmitting(true);
      const formData = new FormData(formRef.current!);
      const savedContact = await sendEmail(formData);

      if (!savedContact || savedContact instanceof AppwriteException) {
        return toast.error(savedContact?.message);
      }

      // send the email
      const res = await emailjs.sendForm(
        config.emailjs.serviceID,
        config.emailjs.templateID,
        formRef.current!,
        {
          publicKey: config.emailjs.publicKey,
        }
      );

      if (res.status !== 200) {
        await deleteContact(savedContact?.$id);
        return toast.error(`${res.status}: ${res.text}`);
      }
      // Reset the form fields
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      formRef.current?.reset();
      return toast.success("Message sent successfully!");
    } catch (error) {
      toast.error(
        error instanceof AppwriteException ? error.message : String(error)
      );
    } finally {
      //set loading state to false
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef} className="w-full max-w-2xl mx-auto space-y-4">
      <div className="relative">
        <label htmlFor="name" className="block text-sm font-medium dark:text-white text-gray-900 mb-2">
          Full Name
        </label>
        <div className="relative">
          <HiOutlineUser
            size={20}
            className="text-primary absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
          />
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input pl-12 w-full h-12"
          />
        </div>
      </div>

      <div className="relative">
        <label htmlFor="email" className="block text-sm font-medium dark:text-white text-gray-900 mb-2">
          Email Address
        </label>
        <div className="relative">
          <HiOutlineMail
            size={20}
            className="text-primary absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
          />
          <input
            id="email"
            type="email"
            name="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input pl-12 w-full h-12"
          />
        </div>
      </div>

      <div className="relative">
        <label htmlFor="phone" className="block text-sm font-medium dark:text-white text-gray-900 mb-2">
          Phone Number
        </label>
        <div className="relative">
          <HiOutlinePhone
            size={20}
            className="text-primary absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
          />
          <input
            id="phone"
            type="text"
            name="phone"
            placeholder="+234 XXX XXX XXXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-input pl-12 w-full h-12"
          />
        </div>
      </div>

      <div className="relative">
        <label htmlFor="message" className="block text-sm font-medium dark:text-white text-gray-900 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell me about your project and what you're looking to build..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="form-input w-full h-40 resize-none p-4"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full h-12 flex-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting && (
          <VscLoading
            size={20}
            className="text-white animate-spin"
          />
        )}
        <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
      </button>
    </form>
  );
};

export default EmailForm;
