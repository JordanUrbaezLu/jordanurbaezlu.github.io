"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import Typed from "typed.js";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

// Typed text component for profession
const TypedProfession: React.FC = () => {
  const el = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const typed = new Typed(el.current as Element, {
      strings: [
        "Senior Full Stack Software Engineer",
        "Tech Lead",
        "Senior Web Developer",
      ],
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
    });
    return () => typed.destroy();
  }, []);
  return (
    <span
      ref={el}
      className="font-semibold text-xl md:text-2xl text-gray-700 block mt-2 min-h-[1.75rem] md:min-h-[2rem]"
    />
  );
};

const Home: React.FC = () => {
  const navRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [underlineProps, setUnderlineProps] = useState({ left: 0, width: 0 });
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showIcons, setShowIcons] = useState(true);

  // Update underline on active change and resize
  useEffect(() => {
    const el = navRefs.current[active];
    if (el) setUnderlineProps({ left: el.offsetLeft, width: el.offsetWidth });
    const onResize = () => {
      const r = navRefs.current[active];
      if (r) setUnderlineProps({ left: r.offsetLeft, width: r.offsetWidth });
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [active]);

  // Smooth scroll handler
  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(id);
      setMenuOpen(false);
    }
  };

  // Observe sections to update active nav
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(
          (entry) => entry.isIntersecting && setActive(entry.target.id)
        );
      },
      { threshold: 0.6 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>Jordan Urbaez - Portfolio</title>
        <meta
          name="description"
          content="Jordan Urbaez | Senior Full Stack Software Engineer"
        />
      </Head>

      <div className="scroll-smooth">
        {/* Header */}
        <header className="fixed w-full z-30 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 shadow-lg">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-extrabold text-white tracking-widest">
              Jordan Urbaez
            </h1>
            {/* Desktop Nav */}
            <nav className="relative space-x-6 hidden md:flex">
              {sections.map((s) => (
                <button
                  key={s.id}
                  ref={(el) => (navRefs.current[s.id] = el as any)}
                  onClick={() => handleNavClick(s.id)}
                  className={`text-white hover:text-gray-100 transition py-1 focus:outline-none ${
                    active === s.id ? "font-semibold" : ""
                  }`}
                >
                  {s.label}
                </button>
              ))}
              <motion.div
                className="absolute bottom-0 h-1 bg-white rounded"
                animate={{
                  left: underlineProps.left,
                  width: underlineProps.width,
                }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </nav>

            {/* Global “Icons” switch */}
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={showIcons}
                onChange={() => setShowIcons((v) => !v)}
                className="sr-only peer"
              />
              <div
                className="
      w-11 h-6 bg-gray-200 rounded-full peer
      peer-focus:ring-2 peer-focus:ring-purple-300
      peer-checked:bg-purple-600
      peer-checked:after:translate-x-full
      after:content-[''] after:absolute after:top-[2px] after:left-[2px]
      after:bg-white after:border after:border-gray-300
      after:rounded-full after:h-5 after:w-5 after:transition-all
      relative
    "
              />
              <span className="ml-3 text-sm font-medium text-white">Icons</span>
            </label>
            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </header>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-70 z-20 flex flex-col items-center justify-center space-y-8"
            >
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => handleNavClick(s.id)}
                  className="text-white text-2xl font-medium hover:text-gray-200"
                >
                  {s.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main className="pt-20">
          {/* Hero Section */}
          <section
            id="hero"
            className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-50 via-white to-indigo-50 text-center px-6"
          >
            <motion.h2
              className="text-5xl md:text-7xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Hello, I&rsquo;m Jordan Urbaez
            </motion.h2>
            <TypedProfession />
            <motion.div
              className="mt-4 flex flex-wrap justify-center space-x-4 text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a
                href="mailto:jordana.urbaez@gmail.com"
                className="hover:text-gray-900"
              >
                jordana.urbaez@gmail.com
              </a>
              <span className="text-gray-400">|</span>
              <a href="tel:+19782897135" className="hover:text-gray-900">
                (978) 289-7135
              </a>
              <span className="text-gray-400">|</span>
              <a
                href="https://jordanurbaezlu.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900"
              >
                Portfolio
              </a>
              <span className="text-gray-400">|</span>
              <a
                href="https://github.com/jordanurbaezlu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900"
              >
                GitHub
              </a>
            </motion.div>
          </section>

          {/* About Section */}
          <section
            id="about"
            className="py-20 bg-gradient-to-r from-white to-purple-50"
          >
            <div className="container mx-auto px-6 max-w-3xl">
              <motion.h3
                className="text-4xl font-bold mb-6 text-purple-700"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Professional Summary
              </motion.h3>
              <motion.p
                className="text-gray-600 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Senior Software Engineer and Tech Lead with 7+ years of
                experience building high-performance, scalable web applications
                and driving revenue-impacting initiatives.{" "}
                <b>
                  Currently leading large-scale optimizations and feature
                  development for Walmart.com, improving Core Web Vitals by 75%+
                  and accelerating user growth.
                </b>{" "}
                Expertise in React, Next.js, and modern web architecture. Proven
                track record of translating business goals into performant,
                user-first experiences, mentoring engineering teams, and
                delivering measurable product outcomes in fast-paced
                environments.
              </motion.p>
            </div>
          </section>

          {/* Skills Section */}
          <SkillsSection showIcons={showIcons} />

          {/* Experience Section */}
          <ExperienceSection showIcons={showIcons} />

          {/* Projects Section */}
          <ProjectsSection />

          {/* Education Section */}
          <section
            id="education"
            className="py-20 bg-gradient-to-r from-white to-purple-50"
          >
            <div className="container mx-auto px-6 max-w-2xl text-center">
              <h3 className="text-4xl font-bold mb-6 text-purple-700">
                Education
              </h3>
              <p className="text-gray-700">
                Bachelor of Science in Computer Science
                <br />
                University of Massachusetts Lowell
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            className="py-20 bg-gradient-to-b from-white via-purple-50 to-white"
          >
            <div className="container mx-auto px-6 max-w-xl">
              <h3 className="text-4xl font-bold mb-6 text-purple-700">
                Get in Touch
              </h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={6}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-center font-semibold bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-pink-600 hover:to-purple-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
