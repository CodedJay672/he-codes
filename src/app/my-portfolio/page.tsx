import Projects from "@/components/Projects";
import Tab from "@/components/shared/tab";
import Link from "next/link";
import React, { Suspense } from "react";
import { HiArrowRight, HiCheckCircle } from "react-icons/hi2";

const categories = [
  { name: "All", icon: "📁", value: "" },
  { name: "Web Apps", icon: "🌐", value: "web" },
  { name: "Mobile", icon: "📱", value: "mobile" },
  { name: "E-Commerce", icon: "🛒", value: "e-commerce" },
];

const benefits = [
  {
    title: "Modern Tech Stack",
    description: "Built with React, Next.js, Node.js, and cloud infrastructure for optimal performance.",
  },
  {
    title: "Scalable Architecture",
    description: "Designed from the ground up to handle growth and increased demand without compromise.",
  },
  {
    title: "User-Centric Design",
    description: "Every interface crafted with real user needs in mind. High engagement, low friction.",
  },
  {
    title: "Performance First",
    description: "Fast load times, optimized code, and efficient databases. Speed matters to conversions.",
  },
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
              Real Projects,
              <br />
              <span className="text-primary">Real Impact</span>
            </h1>
            <p className="text-lg md:text-xl dark:text-gray-400 text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore a handpicked selection of projects that showcase my expertise in full-stack development, modern UI/UX, and solving complex business problems. Each project tells a story of innovation and dedication to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="w-full grid grid-cols-3 md:grid-cols-6 gap-4 py-12 mb-8">
        <div className="card-glass p-4 rounded-xl text-center">
          <p className="text-2xl font-bold text-primary">20+</p>
          <p className="text-xs dark:text-gray-400 text-gray-600 mt-1">Projects</p>
        </div>
        <div className="card-glass p-4 rounded-xl text-center">
          <p className="text-2xl font-bold text-primary">15+</p>
          <p className="text-xs dark:text-gray-400 text-gray-600 mt-1">Clients</p>
        </div>
        <div className="card-glass p-4 rounded-xl text-center">
          <p className="text-2xl font-bold text-primary">4+</p>
          <p className="text-xs dark:text-gray-400 text-gray-600 mt-1">Years</p>
        </div>
        <div className="card-glass p-4 rounded-xl text-center col-span-3 md:col-span-3">
          <p className="text-2xl font-bold text-primary">100%</p>
          <p className="text-xs dark:text-gray-400 text-gray-600 mt-1">On-Time Delivery</p>
        </div>
      </section>

      <Suspense fallback={
        <div className="w-full py-8 flex-center">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div key={idx} className="w-full md:w-1/2 lg:w-1/4 p-4">
              <div className="card-glass animate-pulse h-64 rounded-xl" />
            </div>
          ))}
        </div>
      }>
        <section className="w-full flex-center gap-3 py-8 mb-4 flex-wrap">
          {categories.map((cat) => (
            <Tab key={cat.name} cat={cat} />
          ))}
        </section>
      </Suspense>

      {/* Projects Grid */}
      <section className="w-full py-8">
        <Projects />
      </section>

      <div className="section-divider my-16" />

      {/* Project Benefits Section */}
      <section className="w-full py-20 space-y-12">
        <div className="flex-center flex-col gap-4 text-center">
          <h2 className="h1-style">What Makes These Projects Stand Out</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            Every project in my portfolio follows a proven methodology for delivering exceptional results.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="card-glass p-8 rounded-xl space-y-4 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <HiCheckCircle size={28} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold dark:text-white mb-2">{benefit.title}</h3>
                  <p className="text-sm dark:text-gray-400 text-gray-600">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider my-16" />

      {/* Case Study / Process Section */}
      <section className="w-full py-20 space-y-12">
        <div className="flex-center flex-col gap-4 text-center">
          <h2 className="h1-style">My Development Process</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            A structured approach to ensure every project exceeds expectations.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Discovery", desc: "Deep dive into your vision, goals, and audience" },
            { step: "02", title: "Design", desc: "Create intuitive, beautiful interfaces" },
            { step: "03", title: "Build", desc: "Develop with clean, scalable code" },
            { step: "04", title: "Launch", desc: "Deploy and monitor for peak performance" },
          ].map((item, idx) => (
            <div key={idx} className="relative">
              <div className="card-glass p-8 rounded-xl space-y-4 h-full">
                <div className="text-4xl font-bold text-primary/30">{item.step}</div>
                <h3 className="text-xl font-semibold dark:text-white">{item.title}</h3>
                <p className="text-sm dark:text-gray-400 text-gray-600">{item.desc}</p>
              </div>
              {idx < 3 && (
                <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 text-primary/30 text-2xl">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider my-16" />

      {/* Final CTA Section */}
      <section className="w-full py-20">
        <div className="card-glass p-12 md:p-16 rounded-2xl text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold dark:text-white">
              Ready to Build Something
              <br />
              <span className="text-primary">Exceptional?</span>
            </h2>
            <p className="text-lg dark:text-gray-400 text-gray-600 max-w-2xl mx-auto">
              Whether you have a specific project in mind or just want to explore possibilities, I'm excited to hear about your idea. Let's create something amazing together.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/contact-me"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              Start Your Project
              <HiArrowRight size={18} />
            </Link>
            <Link
              href="https://github.com/codedjay672/"
              target="_blank"
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              View on GitHub
              <HiArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
