import EmailForm from "@/components/EmailForm";
import ContactCard from "@/components/shared/ContactCard";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { HiLocationMarker } from "react-icons/hi";
import { HiDevicePhoneMobile, HiEnvelope } from "react-icons/hi2";

const ContactPage = () => {
  return (
    <section className="wrapper">
      <div className="w-full py-10 flex-center flex-col gap-4">
        <h1 className="text-background-base dark:text-gray-50 text-4xl lg:text-5xl font-bold">
          Contact me
        </h1>
        <p className="text-background-base dark:text-gray-50 text-center lg:px-6">
          Are you ready to build your next big project? Do you more hands and
          brains on your team? Are you looking for a Web developer tutor? You
          can contact me with the information below, or connect with me on my
          socials
        </p>
        <div className="flex-between gap-5">
          <Link href="https://linkedin.com/ln/emmanueljoel672/">
            <FaLinkedin size={24} className="text-blue-800" />
          </Link>
          <Link href="https://web.facebook.com/Manny6456">
            <FaFacebook size={24} className="text-blue-700" />
          </Link>
          <Link href="https://linkedin.com/ln/emmanueljoel672/">
            <FaTwitter size={24} className="text-cyan-600" />
          </Link>
        </div>
      </div>

      <div className="w-full my-16 space-y-4">
        <h1 className="h1-style">Contact Details</h1>
        <p className="text-background dark:text-gray-200">
          Feel free to contact through any of the media below: I typically
          response in 2 minutes.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-1 mt-5">
          <ContactCard
            icon={<HiDevicePhoneMobile size={32} className="text-primary" />}
            type="Phone"
            info="+234 903 270 5515"
          />
          <ContactCard
            icon={<HiLocationMarker size={32} className="text-primary" />}
            type="Location"
            info="Lagos, Nigeria"
          />
          <ContactCard
            icon={<HiEnvelope size={32} className="text-primary" />}
            type="Email"
            info="emmanjoel6456@gmail.com"
          />
        </div>
      </div>

      <div className="w-full"></div>

      <div className="space-y-4">
        <h1 className="h1-style">Get in touch</h1>
        <p className="text-background dark:text-gray-200">
          Are you looking for a seasoned developer to work on your next project?
          Do you need more hands on your team to bring your ideas to life? Get
          in touch for exceptional web development or mobile development
          projects.
        </p>
        <EmailForm />
      </div>
    </section>
  );
};

export default ContactPage;
