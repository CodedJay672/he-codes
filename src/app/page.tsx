import Stack from "@/components/Stack";
import { brandFiles } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="wrapper flex-center flex-col">
      {/* Hero Section */}
      <section className="w-full flex-center flex-col gap-8 mt-20 mb-32">
        <div className="w-full flex-center flex-col gap-6">
          <div className="space-y-3 text-center">
            <div className="inline-block">
              <span className="inline-block px-4 py-2 bg-primary/10 dark:bg-primary/20 border border-primary/30 rounded-full text-primary text-sm font-semibold">
                Full-Stack Developer & Digital Builder
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold dark:text-white tracking-tight">
              Build Platforms
              <br />
              <span className="text-primary">That Scale</span>
            </h1>
            <p className="text-lg md:text-xl dark:text-gray-400 text-gray-600 max-w-2xl mx-auto leading-relaxed">
              I help ambitious businesses and startup founders transform bold ideas into robust, user-centric digital products. 4+ years of building performant, scalable solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/contact-me" className="btn-primary text-center">
              Start Your Project
            </Link>
            <Link href="/my-portfolio" className="btn-secondary text-center">
              View My Work
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 py-12 border-t border-b border-gray-200 dark:border-gray-800">
        <div className="flex flex-col items-center gap-2">
          <p className="text-3xl md:text-4xl font-bold text-primary">4+</p>
          <p className="text-sm md:text-base dark:text-gray-400 text-gray-600">Years Experience</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-3xl md:text-4xl font-bold text-primary">3+</p>
          <p className="text-sm md:text-base dark:text-gray-400 text-gray-600">Projects Shipped</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-3xl md:text-4xl font-bold text-primary">6+</p>
          <p className="text-sm md:text-base dark:text-gray-400 text-gray-600">Happy Clients</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-3xl md:text-4xl font-bold text-primary">100%</p>
          <p className="text-sm md:text-base dark:text-gray-400 text-gray-600">Delivery Rate</p>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="w-full py-16">
        <p className="text-center text-sm font-semibold text-gray-500 dark:text-gray-500 mb-8 uppercase tracking-wide">
          Trusted by industry leaders
        </p>
        <div className="w-full flex-center gap-8 flex-wrap">
          {brandFiles.map((brand) => (
            <Image
              src={brand.imgUrl}
              alt={brand.name}
              key={brand.id}
              width={brand.width}
              height={brand.height}
              className="max-sm:w-16 max-sm:h-6 select-none object-contain opacity-60 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </section>

      {/* Services Section - Redesigned with Priority Layout */}
      <section className="w-full py-20 space-y-16">
        <div className="flex-center flex-col gap-4 text-center">
          <h2 className="h1-style">Services & Expertise</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            I deliver comprehensive digital solutions tailored to your business needs, from concept to scale.
          </p>
        </div>

        <div className="w-full space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="card-glass p-8 rounded-xl hover:border-primary/50 transition-all duration-300 lg:col-span-2">
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-primary/20 flex-center text-3xl flex-shrink-0">🌐</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold dark:text-white mb-3">Web Application Development</h3>
                    <p className="text-base dark:text-gray-400 text-gray-600 leading-relaxed">
                      Full-stack web platforms built to scale with your business. I deliver secure, maintainable applications using React, Next.js, TypeScript, and modern backend services.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <span className="inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">React</span>
                  <span className="inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">Next.js</span>
                  <span className="inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">TypeScript</span>
                  <span className="inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">APIs & Headless CMS</span>
                </div>
              </div>
            </div>

            <div className="card-glass p-8 rounded-xl hover:border-primary/50 transition-all duration-300">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-primary/20 flex-center text-3xl">📱</div>
                <div>
                  <h3 className="text-xl font-bold dark:text-white mb-2">Mobile App Development</h3>
                  <p className="text-sm dark:text-gray-400 text-gray-600">
                    Polished cross-platform mobile solutions using React Native or Flutter for iOS and Android.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-glass p-6 rounded-xl hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex-center text-xl flex-shrink-0">🎨</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold dark:text-white mb-2">UI/UX Implementation</h3>
                  <p className="text-sm dark:text-gray-400 text-gray-600">
                    Pixel-perfect interfaces designed for clarity, usability, and accessibility.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-glass p-6 rounded-xl hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex-center text-xl flex-shrink-0">⚡</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold dark:text-white mb-2">Performance & Optimization</h3>
                  <p className="text-sm dark:text-gray-400 text-gray-600">
                    Improving speed, reliability, and search visibility across your product.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-glass p-6 rounded-xl hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex-center text-xl flex-shrink-0">🎓</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold dark:text-white mb-2">Tutoring & Mentorship</h3>
                  <p className="text-sm dark:text-gray-400 text-gray-600">
                    One-on-one coaching for developers and teams to build modern skills and ship with confidence.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-glass p-6 rounded-xl hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex-center text-xl flex-shrink-0">🏆</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold dark:text-white mb-2">Technical Consulting</h3>
                  <p className="text-sm dark:text-gray-400 text-gray-600">
                    Strategic advice on architecture, stack selection, and scaling decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider my-12" />

      {/* Technology Stack */}
      <section className="w-full py-20 space-y-12">
        <div className="flex-center flex-col gap-4 text-center">
          <h2 className="h1-style">Technology Stack</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            I work with modern, battle-tested technologies to build tomorrow's solutions.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Stack
            heading="Frontend"
            description="React, Next.js, TypeScript, Tailwind CSS, Responsive Design, Performance Optimization"
            icon="/icons/react.png"
          />
          <Stack
            heading="Backend"
            description="Node.js, Express, RESTful APIs, Database Design, Authentication, Server Optimization"
            icon="/icons/js.png"
          />
          <Stack
            heading="Tools & Services"
            description="Git, Docker, Vercel, AWS, Appwrite, PostgreSQL, MongoDB"
            icon="/icons/git.png"
          />
          <Stack
            heading="Design Systems"
            description="Figma to Code, Component Libraries, Design Tokens, Accessibility (WCAG)"
            icon="/icons/css3.png"
          />
          <Stack
            heading="DevOps & Deployment"
            description="CI/CD Pipelines, Cloud Deployment, Performance Monitoring, Security Best Practices"
            icon="/icons/docker.png"
          />
          <Stack
            heading="Quality Assurance"
            description="Unit Testing, Integration Testing, Performance Testing, Code Reviews"
            icon="/icons/jest.png"
          />
        </div>
      </section>

      <div className="section-divider my-12" />

      {/* Why Choose Section */}
      <section className="w-full py-20 space-y-12">
        <div className="flex-center flex-col gap-4 text-center">
          <h2 className="h1-style">Why Partner With Me</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="grid grid-cols-1 gap-4">
            <div className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex-center flex-shrink-0 text-primary text-sm font-bold">✓</div>
              <div>
                <h3 className="font-semibold dark:text-white mb-1">Results-Driven</h3>
                <p className="text-sm dark:text-gray-400 text-gray-600">Every project is built with measurable business outcomes in mind.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex-center flex-shrink-0 text-primary text-sm font-bold">✓</div>
              <div>
                <h3 className="font-semibold dark:text-white mb-1">Scalable Architecture</h3>
                <p className="text-sm dark:text-gray-400 text-gray-600">Built to grow with your business, not become technical debt.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex-center flex-shrink-0 text-primary text-sm font-bold">✓</div>
              <div>
                <h3 className="font-semibold dark:text-white mb-1">Clear Communication</h3>
                <p className="text-sm dark:text-gray-400 text-gray-600">Transparent timelines, regular updates, and accessible explanations.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex-center flex-shrink-0 text-primary text-sm font-bold">✓</div>
              <div>
                <h3 className="font-semibold dark:text-white mb-1">Quality Focused</h3>
                <p className="text-sm dark:text-gray-400 text-gray-600">Code reviews, testing, and best practices at every step.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex-center flex-shrink-0 text-primary text-sm font-bold">✓</div>
              <div>
                <h3 className="font-semibold dark:text-white mb-1">Fast Iteration</h3>
                <p className="text-sm dark:text-gray-400 text-gray-600">Agile approach to bring your ideas to market quickly.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex-center flex-shrink-0 text-primary text-sm font-bold">✓</div>
              <div>
                <h3 className="font-semibold dark:text-white mb-1">Post-Launch Support</h3>
                <p className="text-sm dark:text-gray-400 text-gray-600">I'm here after launch to optimize, maintain, and enhance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider my-12" />

      {/* CTA Section */}
      <section className="w-full py-20 space-y-8">
        <div className="card-glass p-12 rounded-2xl text-center space-y-6">
          <h2 className="h1-style">Ready to Build Something Great?</h2>
          <p className="text-lg dark:text-gray-400 text-gray-600 max-w-2xl mx-auto">
            Let's discuss how we can turn your vision into a thriving digital product. Whether you're a startup, established business, or individual with a bold idea.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/contact-me" className="btn-primary text-center">
              Let's Talk
            </Link>
            <Link href="/my-portfolio" className="btn-secondary text-center">
              See Recent Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
