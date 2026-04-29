import EmailForm from "@/components/EmailForm";
import ContactCard from "@/components/shared/ContactCard";
import Link from "next/link";
import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa6";
import { HiLocationMarker } from "react-icons/hi";
import { HiDevicePhoneMobile, HiEnvelope } from "react-icons/hi2";

const ContactPage = () => {
  return (
    <section className="wrapper flex-center flex-col">
      {/* Hero Section */}
      <div className="w-full py-20 flex-center flex-col gap-6 text-center">
        <h1 className="h1-style">Let's Build Something Amazing</h1>
        <p className="text-lg dark:text-gray-400 text-gray-600 max-w-2xl">
          Have a project in mind? Need to discuss your next venture? I'm here to help bring your ideas to life. Let's schedule a quick call or send me a message.
        </p>
      </div>

      {/* Contact Methods */}
      <div className="w-full py-12 space-y-8">
        <h2 className="text-2xl font-semibold dark:text-white text-center mb-8">Ways to Reach Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ContactCard
            icon={<HiEnvelope size={32} className="text-primary" />}
            type="Email"
            info="emmanjoel6456@gmail.com"
          />
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
        </div>
      </div>

      <div className="section-divider my-12" />

      {/* Social Links */}
      <div className="w-full py-12 flex-center flex-col gap-6">
        <h2 className="text-2xl font-semibold dark:text-white">Connect on Social Media</h2>
        <div className="flex gap-6 justify-center">
          <Link
            href="https://linkedin.com/in/emmanueljoel672/"
            rel="noopener noreferrer"
            target="_blank"
            className="w-14 h-14 rounded-full bg-primary/10 hover:bg-primary/20 flex-center transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} className="text-primary" />
          </Link>
          <Link
            href="https://github.com/codedjay672/"
            rel="noopener noreferrer"
            target="_blank"
            className="w-14 h-14 rounded-full bg-primary/10 hover:bg-primary/20 flex-center transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={24} className="text-primary" />
          </Link>
          <Link
            href="https://twitter.com/_iammanny_"
            rel="noopener noreferrer"
            target="_blank"
            className="w-14 h-14 rounded-full bg-primary/10 hover:bg-primary/20 flex-center transition-colors"
            aria-label="Twitter"
          >
            <FaTwitter size={24} className="text-primary" />
          </Link>
        </div>
      </div>

      <div className="section-divider my-12" />

      {/* Contact Form Section */}
      <div className="w-full py-12 space-y-8">
        <div className="flex-center flex-col gap-4 text-center">
          <h2 className="text-2xl font-semibold dark:text-white">Send Me a Message</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl">
            Tell me about your project, and I'll get back to you as soon as possible. I typically respond within 24 hours.
          </p>
        </div>
        <EmailForm />
      </div>
    </section>
  );
};

export default ContactPage;
