import Link from "next/link";
import React from "react";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { HiOutlineGlobeAlt, HiOutlinePhone } from "react-icons/hi2";
import { IoMdDocument } from "react-icons/io";

const MyResume = () => {
  return (
    <section className="wrapper flex-center flex-col gap-4">
      <div className="w-full h-64 flex-center flex-col gap-5">
        <h1 className="text-background-base dark:text-gray-50 text-4xl md:text-5xl lg:text-6xl font-bold">
          Online Resume
        </h1>
        <Link
          href="/assets/resume.pdf"
          download={true}
          target="_blank"
          className="text-sm md:text-base px-4 py-3 bg-primary text-gray-50 rounded-lg brightness-90 hover:brightness-100 transition-all flex items-center gap-2"
        >
          <IoMdDocument size={24} color="white" />
          Download PDF version
        </Link>
      </div>

      <div className="mt-10 bg-white dark:bg-background/50 px-3 py-4 w-full rounded-lg">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">
            <h1 className="text-4xl lg:text-5xl text-primary font-bold flex-1">
              Emmanuel Ugoh
            </h1>
            <p className="text-xl lg:text-2xl text-background-base/60 dark:text-gray-300">
              NextJs developer
            </p>
          </div>
          <div className="w-full lg:w-55 flex flex-col gap-1 my-2">
            <div className="flex items-center gap-0.5">
              <HiOutlinePhone size={14} className="text-primary" />
              <span className="text-background-light dark:text-gray-50 text-sm">
                +234 903 270 5515
              </span>
            </div>
            <div className="flex items-center gap-0.5">
              <HiOutlineMail size={14} className="text-primary" />
              <span className="text-background-light dark:text-gray-50 text-sm">
                emmajoel6456@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-0.5 text-sm">
              <HiOutlineGlobeAlt size={14} className="text-primary" />
              <span className="text-background-light dark:text-gray-50 text-sm">
                www.manny-dev.vercel.app
              </span>
            </div>
            <div className="flex items-center gap-0.5 text-sm">
              <HiOutlineLocationMarker size={14} className="text-primary" />
              <span className="text-background-light dark:text-gray-50">
                Lagos, Nigeria
              </span>
            </div>
          </div>
        </div>

        <div className="w-full my-6">
          <h2 className="text-xl lg:text-2xl text-primary font-semibold">
            Professional Summary
          </h2>
          <p className="text-background-base dark:text-gray-50">
            Results-driven Frontend Engineer with over 2 years of experience
            specializing in building high-performance, scalable, and secure web
            applications. Proficient in React.js, Nextjs, TypeScript, and state
            management solutions like Redux and ContextAPI. Experienced in
            developing intuitive and responsive UI components while ensuring
            optimal performance across various devices. Adept at collaborating
            with cross-functional teams to deliver innovative and reliable
            solutions, particularly within fintech and payments-related
            platforms. Passionate about optimizing front-end performance,
            accessibility, and user experience.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:flex-1 space-y-2 lg:space-y-1">
            <h2 className="text-xl lg:text-2xl text-primary font-semibold">
              Experience
            </h2>
            <div className="w-full">
              <h3 className="text-background-base dark:text-white font-semibold">
                Frontend Developer (Remote Contract)
              </h3>
              <p className="text-sm text-gray-900 dark:text-gray-200">
                Sekure Business | Oct 2024 - Jan 2025
              </p>

              <ul className="w-full p-2 list-disc list-inside space-y-1">
                <li className="text-background dark:text-gray-50 text-sm">
                  Developed and optimized a virtual card payment SaaS admin
                  dashboard, using optimization techniques and framework like
                  NextJs which resulted in reduced page load times by 30%.
                </li>
                <li className="text-background dark:text-gray-50 text-sm">
                  Integrated RESTful APIs for real-time data updates with
                  tanstack react-query which is perfecting for caching fetch
                  results and state management.
                </li>
                <li className="text-background dark:text-gray-50 text-sm">
                  Built a responsive UI using React.js, Next.js, and Tailwind
                  CSS.
                </li>
                <li className="text-background dark:text-gray-50 text-sm">
                  Implemented secure authentication and multi-role access
                  control.
                </li>
                <li className="text-background dark:text-gray-50 text-sm">
                  Enhanced application state management using Redux Toolkit for
                  scalability.
                </li>
              </ul>
            </div>

            <div className="w-full">
              <h3 className="text-background-base dark:text-white font-semibold">
                Frontend Developer & IT Officer
              </h3>
              <p className="text-sm text-gray-900 dark:text-gray-200">
                Highbridge Homes Ltd (Lagos, Nigeria) | Dec 2023 - Nov 2024
              </p>

              <ul className="w-full p-2 list-disc list-inside space-y-1">
                <li className="text-background dark:text-gray-50 text-sm">
                  Led a website redesign that improved loading speed by 40% and
                  increased user engagement by 50%.
                </li>
                <li className="text-background dark:text-gray-50 text-sm">
                  Developed an SEO-optimized landing page, enhancing organic
                  visibility and conversion rates
                </li>
                <li className="text-background dark:text-gray-50 text-sm">
                  Integrated real-time property search and filtering features
                  for enhanced user experience.
                </li>
              </ul>
            </div>

            <div className="w-full">
              <h3 className="text-background-base dark:text-white font-semibold">
                Volunteer Frontend Developer
              </h3>
              <p className="text-sm text-gray-900 dark:text-gray-200 ">
                Tech64 Lagos (Remote) | Aug 2023 - Present
              </p>

              <ul className="w-full p-2 list-disc list-inside space-y-1">
                <li className="text-background dark:text-gray-50 text-sm">
                  Spearheaded the migration of the Vanbook app from Reactjs to
                  Nextjs. This was done in efforts, aimed at improving project
                  workflow efficiency by 80%
                </li>
                <li className="text-background dark:text-gray-50 text-sm">
                  Created interactive web pages, including the application
                  dashboard, landing page and overall workflow of the
                  application
                </li>
                <li className="text-background dark:text-gray-50 text-sm">
                  Developed reusable React components and optimized rendering
                  performance
                </li>
              </ul>
            </div>

            <h2 className="text-xl lg:text-2xl text-primary font-semibold">
              Key Projects
            </h2>
            <div className="w-full">
              <h3 className="text-background-base dark:text-white font-semibold">
                TechCity Landing page
              </h3>

              <ul className="w-full p-2 list-disc list-inside space-y-1">
                <li className="text-background dark:text-gray-50 text-sm">
                  Built an investment landing page for a real estate company
                </li>
                <li className="text-background dark:text-gray-50 text-sm">
                  Implemented the single page application using modern
                  technology like Reactjs
                </li>
                <li className="text-background dark:text-gray-50 text-sm">
                  Followed modern design principles which promote user
                  interaction and experience
                </li>
                <li className="text-background dark:text-gray-50 text-sm">
                  Ensured design is mobile responsive for different device sizes
                </li>
                <li className="text-background dark:text-gray-50 text-sm">
                  <span className="font-bold">Tech Stack:</span> ReactJs,
                  TailwindCSS, React Icons, React ContextAPI
                </li>
                <Link
                  href="https://www.techcity.homes"
                  target="_blank"
                  className="text-base text-primary"
                >
                  Live Site
                </Link>
              </ul>
            </div>

            <div className="w-full">
              <h3 className="text-background-base dark:text-white font-semibold">
                Fintech Dashboard - Sekure Business
              </h3>

              <ul className="w-full p-2 list-disc list-inside space-y-1">
                <li className="text-background dark:text-gray-50 text-sm">
                  Built a scalable admin dashboard for business activity
                  monitoring
                </li>
                <li className="text-background dark:text-gray-50 text-sm">
                  Implemented secure user authentication and multi-level form
                  handling.
                </li>
                <li className="text-background dark:text-gray-50 text-sm">
                  <span className="font-bold">Tech Stack:</span> Next.js,
                  Tailwind CSS, Tanstack Query, Tanstack Table, Redux Toolkit
                </li>
                <Link
                  href="https://sekure-business.vercel.app"
                  target="_blank"
                  className="text-base text-primary"
                >
                  Demo Site
                </Link>
              </ul>
            </div>

            <div className="w-full">
              <h3 className="text-background-base dark:text-white font-semibold">
                Real Estate Solution - Cleanbeautifulproperties.com
              </h3>

              <ul className="w-full p-2 list-disc list-inside space-y-1">
                <li className="text-background dark:text-gray-50 text-sm">
                  Developed this fullstack application for a realty company
                </li>
                <li className="text-background dark:text-gray-50 text-sm">
                  Built the client page view and the Admin dashboard
                </li>
                <li className="text-background dark:text-gray-50 text-sm">
                  ntegrated real-time features which allow users to like
                  products and also add product to watch list which help
                  streamline their searches{" "}
                </li>
                <li className="text-background dark:text-gray-50 text-sm">
                  Admin can monitor categories and top performing products based
                  on the saves and likes from users.
                </li>
                <li className="text-background dark:text-gray-50 text-sm">
                  <span className="font-bold">Tech Stack:</span> Next.js,
                  Tailwind CSS, Tanstack Query, Tanstack Table, PostgreSQL,
                  React ContextAPI
                </li>
                <Link
                  href="https://www.cleanbeautifulproperties.com"
                  target="_blank"
                  className="text-base text-primary"
                >
                  Live Site
                </Link>
              </ul>
            </div>
          </div>

          <div className="w-full lg:w-70">
            <h2 className="text-xl lg:text-2xl text-primary font-semibold">
              Technical Stack
            </h2>
            <div className="flex items-center gap-1">
              <h4 className="text-sm text-background-base dark:text-white font-semibold">
                Languages:
              </h4>
              <p className="text-xs text-background-base dark:text-gray-200 font-normal">
                JavaScript (ES6+), TypeScript
              </p>
            </div>
            <div className="flex items-center gap-1">
              <h4 className="text-sm text-background-base dark:text-white font-semibold">
                Frameworks:
              </h4>
              <p className="text-xs text-background-base dark:text-gray-200 font-normal">
                React.js, Next.js, React Native
              </p>
            </div>
            <div className="flex items-center gap-1">
              <h4 className="text-sm text-background-base dark:text-white font-semibold">
                State Management:
              </h4>
              <p className="text-xs text-background-base dark:text-gray-200 font-normal">
                Redux Toolkit, Zustand, Context API
              </p>
            </div>
            <div className="flex items-center gap-1">
              <h4 className="text-sm text-background-base dark:text-white font-semibold">
                Testing:
              </h4>
              <p className="text-xs text-background-base dark:text-gray-200 font-normal">
                Jest, React Testing Library
              </p>
            </div>
            <div className="flex items-center gap-1">
              <h4 className="text-sm text-background-base dark:text-white font-semibold">
                Version Control:
              </h4>
              <p className="text-xs text-background-base dark:text-gray-200 font-normal">
                Git, GitHub, Git-based workflows
              </p>
            </div>
            <div className="flex items-center gap-1">
              <h4 className="text-sm text-background-base dark:text-white font-semibold">
                API Integration:
              </h4>
              <p className="text-xs text-background-base dark:text-gray-200 font-normal">
                RESTful APIs, GraphQL
              </p>
            </div>
            <div className="flex items-center gap-1">
              <h4 className="text-sm text-background-base dark:text-white font-semibold text-pretty">
                Performance Optimization:
              </h4>
              <p className="text-xs text-background-base dark:text-gray-200 font-normal">
                Lighthouse, Webpack, PageSpeed Insights, Sentry
              </p>
            </div>
            <div className="flex items-center gap-1">
              <h4 className="text-sm text-background-base dark:text-white font-semibold">
                Dev Tools:
              </h4>
              <p className="text-xs text-background-base dark:text-gray-200 font-normal">
                VS Code, Postman, Figma, PostgreSQL, Neon, Drizzle, Appwrite
                Cloud
              </p>
            </div>

            <h2 className="text-xl lg:text-2xl text-primary font-semibold mt-2">
              Education
            </h2>
            <div className="flex items-center gap-1">
              <h4 className="text-sm text-background-base dark:text-white font-semibold text-pretty">
                Bachelor of Science, Computer Science
              </h4>
              <p className="text-xs text-background-base dark:text-gray-200 text-pretty">
                Bayero University, Kano (BUK) | Feb 2016 - Sept 2021
              </p>
            </div>

            <h2 className="text-xl lg:text-2xl text-primary font-semibold mt-2">
              Certifications
            </h2>
            <div className="flex items-center gap-1">
              <h4 className="text-sm text-background-base dark:text-white font-semibold">
                Software Engineering Certification
              </h4>
              <p className="text-xs text-background-base dark:text-gray-200">
                ALX Africa (2023)
              </p>
            </div>

            <h2 className="text-xl lg:text-2xl text-primary font-semibold mt-2">
              Additional Skills
            </h2>
            <ul className="w-full p-2 list-disc list-inside space-y-1">
              <li className="text-background dark:text-gray-50 text-sm">
                Strong problem-solving and debugging skills
              </li>
              <li className="text-background dark:text-gray-50 text-sm">
                Proficient in responsive design and mobile-first development.
              </li>
              <li className="text-background dark:text-gray-50 text-sm">
                Experience with unit testing and performance optimization.
              </li>
              <li className="text-background dark:text-gray-50 text-sm">
                Enthusiastic about integrating AI and automation into web
                applications.
              </li>
            </ul>

            <h2 className="text-xl lg:text-2xl text-primary font-semibold mt-2">
              Soft Skills
            </h2>
            <ul className="w-full p-2 list-disc list-inside space-y-1">
              <li className="text-background dark:text-gray-50 text-sm">
                Strong communication skills
              </li>
              <li className="text-background dark:text-gray-50 text-sm">
                Team player, Ability to express thoughts clearly
              </li>
              <li className="text-background dark:text-gray-50 text-sm">
                Ability to work with cross-functional teams wether remotely or
                on-site
              </li>
              <li className="text-background dark:text-gray-50 text-sm">
                Enthusiatic about knowledge aquisition. Reader, leader, listener
                goal-oriented problem solver.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyResume;
