import Link from "next/link";
import React from "react";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { HiOutlineGlobeAlt, HiOutlinePhone } from "react-icons/hi2";
import { IoMdDocument } from "react-icons/io";

const MyResume = () => {
  return (
    <section className="wrapper flex-center flex-col">
      {/* Header Section */}
      <div className="w-full py-16 flex-center flex-col gap-6 text-center">
        <h1 className="h1-style">Professional Resume</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
          Full-stack developer with 4+ years of experience building scalable web applications. Specialized in React, Next.js, and modern web technologies.
        </p>
        <Link
          href="/assets/resume.pdf"
          target="_blank"
          download
          className="btn-primary inline-flex items-center gap-2"
        >
          <IoMdDocument size={20} />
          Download PDF
        </Link>
      </div>

      {/* Resume Content */}
      <div className="w-full space-y-12">
        {/* Contact Info */}
        <div className="card-glass p-8 rounded-xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-gray-900 mb-1">
                Emmanuel Ugoh
              </h2>
              <p className="text-lg dark:text-gray-400 text-gray-600 mb-4">
                Full-Stack Developer & Digital Solutions Engineer
              </p>
            </div>
            <div className="w-full lg:w-auto grid grid-cols-2 lg:grid-cols-1 gap-3 text-sm">
              <div className="flex items-center gap-2 dark:text-gray-300">
                <HiOutlinePhone size={16} className="text-primary flex-shrink-0" />
                <span>+234 903 270 5515</span>
              </div>
              <div className="flex items-center gap-2 dark:text-gray-300">
                <HiOutlineMail size={16} className="text-primary flex-shrink-0" />
                <span>emmanjoel6456@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 dark:text-gray-300">
                <HiOutlineGlobeAlt size={16} className="text-primary flex-shrink-0" />
                <Link href="https://github.com/codedjay672/" className="text-primary hover:underline">
                  GitHub
                </Link>
              </div>
              <div className="flex items-center gap-2 dark:text-gray-300">
                <HiOutlineLocationMarker size={16} className="text-primary flex-shrink-0" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="space-y-3">
          <h3 className="h2-style">Professional Summary</h3>
          <p className="dark:text-gray-400 text-gray-600 leading-relaxed">
            Results-driven Full-Stack Engineer with 4+ years of experience designing and building high-performance, scalable web applications. Specialized in React, Next.js, TypeScript, and modern DevOps practices. Proven track record of delivering innovative solutions that improve user experience and drive business growth. Experienced in architecting multi-tenant platforms, implementing secure authentication systems, and optimizing application performance. Passionate about writing clean, maintainable code and collaborating with cross-functional teams to solve complex problems.
          </p>
        </div>

        {/* Experience */}
        <div className="space-y-4">
          <h3 className="h2-style">Professional Experience</h3>

          <div className="space-y-3">
            <div className="border-l-4 border-primary pl-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                <h4 className="font-semibold dark:text-white text-gray-900">Lead Fullstack Developer</h4>
                <span className="text-sm dark:text-gray-400 text-gray-600">Feb 2025 - Apr 2025</span>
              </div>
              <p className="text-primary font-medium mb-3">WakoCoding</p>
              <ul className="space-y-2 text-sm dark:text-gray-400 text-gray-600">
                <li>• Built multi-tenant e-commerce MVP for vendors, farmers and agents to sell cooked and raw foods</li>
                <li>• Integrated RESTful APIs with TanStack React Query for efficient caching and state management</li>
                <li>• Built responsive UI using Next.js and Tailwind CSS with multi-role access control</li>
                <li>• Implemented Redux Toolkit for scalable application state management</li>
              </ul>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                <h4 className="font-semibold dark:text-white text-gray-900">Lead Frontend Developer</h4>
                <span className="text-sm dark:text-gray-400 text-gray-600">Jun 2024 - Present</span>
              </div>
              <p className="text-primary font-medium mb-3">MyCartsOnline</p>
              <ul className="space-y-2 text-sm dark:text-gray-400 text-gray-600">
                <li>• Led frontend development of multi-tenant commerce platform with complex role-based access control</li>
                <li>• Implemented isolated dashboards for vendors, riders, admins and customers using Next.js</li>
                <li>• Built notification systems and professional emailing infrastructure for all user roles</li>
                <li>• Managed state with Zustand and implemented responsive design across all device sizes</li>
              </ul>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                <h4 className="font-semibold dark:text-white text-gray-900">Frontend Developer</h4>
                <span className="text-sm dark:text-gray-400 text-gray-600">Oct 2024 - Jan 2025</span>
              </div>
              <p className="text-primary font-medium mb-3">Sekure Business</p>
              <ul className="space-y-2 text-sm dark:text-gray-400 text-gray-600">
                <li>• Developed and optimized virtual card payment SaaS admin dashboard reducing page load times by 30%</li>
                <li>• Integrated real-time data updates with TanStack React Query and Redux Toolkit</li>
                <li>• Built responsive admin interfaces for multi-role access control and transaction monitoring</li>
              </ul>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                <h4 className="font-semibold dark:text-white text-gray-900">Frontend Developer & IT Officer</h4>
                <span className="text-sm dark:text-gray-400 text-gray-600">Dec 2023 - Nov 2024</span>
              </div>
              <p className="text-primary font-medium mb-3">Highbridge Homes Ltd</p>
              <ul className="space-y-2 text-sm dark:text-gray-400 text-gray-600">
                <li>• Led website redesign improving loading speed by 40% and increasing user engagement by 50%</li>
                <li>• Developed SEO-optimized landing page enhancing organic visibility and conversion rates</li>
                <li>• Integrated real-time property search and filtering features for enhanced UX</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Projects */}
        <div className="space-y-4">
          <h3 className="h2-style">Featured Projects</h3>

          <div className="grid gap-4">
            <div className="card-glass p-6 rounded-xl">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                <div>
                  <h4 className="font-semibold dark:text-white text-gray-900">MyCartsOnline</h4>
                  <p className="text-sm dark:text-gray-400 text-gray-600">Multi-tenant commerce platform</p>
                </div>
                <Link href="http://mycartsonline.com" rel="noopener nonreferrer" target="_blank" className="text-primary hover:underline text-sm font-medium">
                  Live Site
                </Link>
              </div>
              <p className="text-sm dark:text-gray-400 text-gray-600 mb-3">
                Complete e-commerce solution with separate dashboards for vendors, riders, admins and customers. Features secure authentication, real-time notifications, and comprehensive order management.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'TypeScript', 'Tailwind CSS', 'Zustand', 'shadcnui', 'docker', "CI/CD"].map(tech => (
                  <span key={tech} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="card-glass p-6 rounded-xl">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                <div>
                  <h4 className="font-semibold dark:text-white text-gray-900">FoodStreet.ng</h4>
                  <p className="text-sm dark:text-gray-400 text-gray-600">Food delivery marketplace</p>
                </div>
                <Link href="https://www.foodstreet.ng" rel="noopener noreferrer" target="_blank" className="text-primary hover:underline text-sm font-medium">
                  Live Site
                </Link>
              </div>
              <p className="text-sm dark:text-gray-400 text-gray-600 mb-3">
                Multi-role food delivery platform with vendor stores, real-time order tracking, and integrated payment systems. Built with focus on mobile responsiveness and user experience.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'TailwindCSS', 'Zustand', 'Appwrite', 'Docker', 'Resend'].map(tech => (
                  <span key={tech} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="card-glass p-6 rounded-xl">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                <div>
                  <h4 className="font-semibold dark:text-white text-gray-900">CleanBeautifulProperties.com</h4>
                  <p className="text-sm dark:text-gray-400 text-gray-600">Real estate marketplace solution</p>
                </div>
                <Link href="https://www.cleanbeautifulproperties.com" rel="noopener nonreferrer" target="_blank" className="text-primary hover:underline text-sm font-medium">
                  Live Site
                </Link>
              </div>
              <p className="text-sm dark:text-gray-400 text-gray-600 mb-3">
                Full-stack real estate platform with admin dashboard for managing properties, analytics for top-performing listings, and user features like wishlist and favorites.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'PostgreSQL', 'Shadcnui', 'TanstackTable', 'Docker', 'CI/CD', 'imageKit', 'Emailjs'].map(tech => (
                  <span key={tech} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="space-y-4">
          <h3 className="h2-style">Technical Expertise</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div>
                <p className="font-semibold dark:text-white text-gray-900 text-sm mb-1">Languages & Runtime</p>
                <p className="text-sm dark:text-gray-400 text-gray-600">JavaScript (ES6+), TypeScript, Node.js</p>
              </div>
              <div>
                <p className="font-semibold dark:text-white text-gray-900 text-sm mb-1">Frontend Frameworks</p>
                <p className="text-sm dark:text-gray-400 text-gray-600">React, Next.js, React Native</p>
              </div>
              <div>
                <p className="font-semibold dark:text-white text-gray-900 text-sm mb-1">State Management</p>
                <p className="text-sm dark:text-gray-400 text-gray-600">Redux Toolkit, Zustand, Context API</p>
              </div>
              <div>
                <p className="font-semibold dark:text-white text-gray-900 text-sm mb-1">Styling</p>
                <p className="text-sm dark:text-gray-400 text-gray-600">Tailwind CSS, CSS-in-JS, Responsive Design</p>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <p className="font-semibold dark:text-white text-gray-900 text-sm mb-1">Backend & Databases</p>
                <p className="text-sm dark:text-gray-400 text-gray-600">Node.js, Express, PostgreSQL, MongoDB</p>
              </div>
              <div>
                <p className="font-semibold dark:text-white text-gray-900 text-sm mb-1">Tools & DevOps</p>
                <p className="text-sm dark:text-gray-400 text-gray-600">Git, Docker, Vercel, AWS, GitHub Actions</p>
              </div>
              <div>
                <p className="font-semibold dark:text-white text-gray-900 text-sm mb-1">Performance & Testing</p>
                <p className="text-sm dark:text-gray-400 text-gray-600">Jest, React Testing Library, Lighthouse</p>
              </div>
              <div>
                <p className="font-semibold dark:text-white text-gray-900 text-sm mb-1">APIs & Integrations</p>
                <p className="text-sm dark:text-gray-400 text-gray-600">REST APIs, GraphQL, TanStack Query</p>
              </div>
            </div>
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="h3-style">Education</h3>
            <div className="card-glass p-4 rounded-lg">
              <p className="font-semibold dark:text-white text-gray-900 text-sm">Bachelor of Science, Computer Science</p>
              <p className="text-sm dark:text-gray-400 text-gray-600">Bayero University, Kano (BUK)</p>
              <p className="text-xs dark:text-gray-500 text-gray-500">Feb 2016 - Sept 2021</p>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="h3-style">Certifications</h3>
            <div className="card-glass p-4 rounded-lg">
              <p className="font-semibold dark:text-white text-gray-900 text-sm">Software Engineering Certification</p>
              <p className="text-sm dark:text-gray-400 text-gray-600">ALX Africa</p>
              <p className="text-xs dark:text-gray-500 text-gray-500">2023</p>
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="space-y-4">
          <h3 className="h2-style">Additional Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card-glass p-4 rounded-lg space-y-2">
              <p className="font-semibold dark:text-white text-gray-900 text-sm mb-2">Soft Skills</p>
              <ul className="space-y-1 text-sm dark:text-gray-400 text-gray-600">
                <li>• Strong communication and presentation abilities</li>
                <li>• Excellent team collaboration and leadership</li>
                <li>• Problem-solving and analytical thinking</li>
                <li>• Mentoring junior developers</li>
              </ul>
            </div>
            <div className="card-glass p-4 rounded-lg space-y-2">
              <p className="font-semibold dark:text-white text-gray-900 text-sm mb-2">Other Competencies</p>
              <ul className="space-y-1 text-sm dark:text-gray-400 text-gray-600">
                <li>• Responsive design and mobile-first development</li>
                <li>• Performance optimization and SEO</li>
                <li>• Continuous learning and AI integration enthusiasm</li>
                <li>• Agile/Scrum methodologies</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="card-glass p-8 rounded-xl text-center space-y-4">
          <p className="dark:text-gray-400 text-gray-600">
            Interested in working together?
          </p>
          <Link
            href="/contact-me"
            className="btn-primary inline-block"
          >
            Let's Discuss Your Project
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MyResume;
