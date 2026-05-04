import Projects from "@/components/Projects";
import Tab from "@/components/shared/tab";
import Link from "next/link";
import React, { Suspense } from "react";
import { HiArrowRight, HiSquares2X2 } from "react-icons/hi2";

const categories = [
  { name: "All", icon: "📁", value: "" },
  { name: "Web Apps", icon: "🌐", value: "web" },
  { name: "Mobile", icon: "📱", value: "mobile" },
  { name: "E-Commerce", icon: "🛒", value: "e-commerce" },
];

const projectTypes = [
  {
    type: "Web Applications",
    description: "Full-stack web platforms and SaaS solutions",
    count: "3+",
    icon: "🌐",
    color: "from-blue-500 to-cyan-500"
  },
  {
    type: "Mobile Apps",
    description: "Cross-platform mobile experiences",
    count: "1+",
    icon: "📱",
    color: "from-green-500 to-emerald-500"
  },
  {
    type: "E-Commerce",
    description: "Online stores and marketplaces",
    count: "2+",
    icon: "🛒",
    color: "from-purple-500 to-pink-500"
  }
];

const PortfolioPage = () => {
  return (
    <div className="wrapper flex-center flex-col">
      {/* Hero Section */}
      <section className="w-full py-24 flex-center flex-col gap-8 text-center">
        <div className="space-y-6">
          <div className="inline-block">
            <span className="inline-block px-4 py-2 bg-primary/10 dark:bg-primary/20 border border-primary/30 rounded-full text-primary text-sm font-semibold">
              Portfolio Showcase
            </span>
          </div>
          <div>
            <h1 className="text-5xl md:text-6xl font-bold dark:text-white tracking-tight mb-4">
              Building Digital
              <br />
              <span className="text-primary">Excellence</span>
            </h1>
            <p className="text-lg md:text-xl dark:text-gray-400 text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A curated collection of projects that demonstrate my commitment to quality, innovation, and delivering measurable business results. Each project represents a unique challenge solved with modern technology and thoughtful design.
            </p>
          </div>
        </div>
      </section>

      {/* Project Types Overview */}
      <section className="w-full py-16">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectTypes.map((type, idx) => (
            <div key={idx} className="card-glass p-6 rounded-xl hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${type.color} flex-center text-2xl`}>
                  {type.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold dark:text-white">{type.type}</h3>
                  <p className="text-2xl font-bold text-primary">{type.count}</p>
                </div>
              </div>
              <p className="text-sm dark:text-gray-400 text-gray-600">{type.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Filter Section */}
      <section className="w-full py-12">
        <div className="flex-center flex-col gap-6">
          <h2 className="text-xl font-semibold dark:text-white">Projects</h2>

          <Suspense fallback={
            <div className="flex gap-3 flex-wrap">
              {Array.from({ length: 4 }).map((_, idx) => (
                <div key={idx} className="h-12 w-24 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
              ))}
            </div>
          }>
            <div className="flex-center gap-3 flex-wrap">
              {categories.map((cat) => (
                <Tab key={cat.name} cat={cat} />
              ))}
            </div>
          </Suspense>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="w-full py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <HiSquares2X2 size={20} className="text-primary" />
            <h2 className="text-xl font-semibold dark:text-white">Featured Projects</h2>
          </div>
          <div className="text-sm dark:text-gray-400 text-gray-600">
            Showing all projects
          </div>
        </div>

        <Suspense fallback={
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div key={idx} className="card-glass animate-pulse h-80 rounded-xl" />
            ))}
          </div>
        }>
          <Projects />
        </Suspense>
      </section>

      <div className="section-divider my-16" />

      {/* Quality Assurance Section */}
      <section className="w-full py-20 space-y-12">
        <div className="flex-center flex-col gap-4 text-center">
          <h2 className="h1-style">Quality That Speaks for Itself</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            Every project follows rigorous standards and proven methodologies to ensure exceptional results.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              metric: "100%",
              label: "On-Time Delivery",
              description: "Reliable timelines you can count on"
            },
            {
              metric: "4.9/5",
              label: "Client Satisfaction",
              description: "Consistently exceeding expectations"
            },
            {
              metric: "99.9%",
              label: "Uptime",
              description: "Reliable, performant applications"
            },
            {
              metric: "24/7",
              label: "Support",
              description: "Ongoing maintenance and updates"
            }
          ].map((item, idx) => (
            <div key={idx} className="card-glass p-6 rounded-xl text-center hover:border-primary/50 transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">{item.metric}</div>
              <h3 className="text-lg font-semibold dark:text-white mb-1">{item.label}</h3>
              <p className="text-sm dark:text-gray-400 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider my-16" />

      {/* Development Approach */}
      <section className="w-full py-20 space-y-12">
        <div className="flex-center flex-col gap-4 text-center">
          <h2 className="h1-style">My Development Philosophy</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            A systematic approach that combines technical excellence with business acumen.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "User-First Design",
              description: "Every interface is crafted with real users in mind. I conduct thorough user research and usability testing to ensure intuitive, engaging experiences that drive results.",
              icon: "👥"
            },
            {
              title: "Scalable Architecture",
              description: "I build systems that grow with your business. Clean code, modular design, and cloud-native solutions ensure your application can handle increased demand.",
              icon: "🏗️"
            },
            {
              title: "Performance Optimization",
              description: "Fast loading times and smooth interactions are non-negotiable. I implement best practices for SEO, caching, and performance monitoring.",
              icon: "⚡"
            },
            {
              title: "Security by Design",
              description: "Security is built into every layer of the application. From secure authentication to data protection, I ensure your users and data are safe.",
              icon: "🔒"
            }
          ].map((item, idx) => (
            <div key={idx} className="card-glass p-8 rounded-xl space-y-4 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="text-3xl">{item.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm dark:text-gray-400 text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider my-16" />

      {/* Professional CTA */}
      <section className="w-full py-20">
        <div className="card-glass p-12 md:p-16 rounded-2xl text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold dark:text-white">
              Ready to Start
              <br />
              <span className="text-primary">Your Project?</span>
            </h2>
            <p className="text-lg dark:text-gray-400 text-gray-600 max-w-2xl mx-auto">
              Let's discuss your vision and how we can bring it to life. Whether you have a specific idea or need guidance on the best approach, I'm here to help you succeed.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/contact-me"
              className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-3"
            >
              Discuss Your Project
              <HiArrowRight size={18} />
            </Link>
            <Link
              href="https://github.com/codedjay672/"
              target="_blank"
              className="btn-secondary inline-flex items-center justify-center gap-2 px-8 py-3"
            >
              View Code Repository
              <HiArrowRight size={18} />
            </Link>
          </div>

          <div className="pt-8 border-t border-white/10">
            <p className="text-sm dark:text-gray-400 text-gray-600">
              Prefer to explore more? Check out my detailed case studies and technical documentation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
