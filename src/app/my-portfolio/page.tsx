import Projects from "@/components/Projects";
import Link from "next/link";
import React from "react";

const PortfolioPage = () => {
  return (
    <section className="wrapper flex-center flex-col gap-4">
      <div className="w-full h-64 flex-center flex-col space-y-3 mt-24">
        <h1 className="text-background-base dark:text-gray-50 text-4xl md:text-5xl lg:text-6xl font-bold capitalize">
          my portfolio
        </h1>
        <p className="text-base text-background-base dark:text-gray-50 text-center">
          Welcome to my portfolio! Dive in to explore some of my favorite
          projects and creative works. A full list of projects can be fond on my{" "}
          <Link
            href="https://github.com/codedjay672/"
            target="_blank"
            className="text-primary fnot-medium"
          >
            github.
          </Link>
          <br />
          Are you looking for extra hands to join your team of developers? I am
          open to collaborate with you to bring your dreams to live. Give me a
          call and let's work together to take your business to the next level.
        </p>

        <Link
          href="/contact-me"
          className="text-white bg-primary px-6 py-2 rounded-lg brightness-85 hover:brightness-100 transition-all"
        >
          Contact Me
        </Link>
      </div>

      <div className="w-full my-10">
        <h2 className="text-background-base dark:text-gray-50 text-center text-xl lg:text-2xl font-semibold">
          My Projects
        </h2>
        <Projects />
      </div>
    </section>
  );
};

export default PortfolioPage;
