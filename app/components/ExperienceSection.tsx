import React from "react";
import {
  SiNextdotjs,
  SiReact,
  SiGraphql,
  SiSplunk,
  SiJest,
  SiTestcafe,
  SiRedux,
  SiJavascript,
  SiTypescript,
  SiSass,
  SiCss3,
  SiJenkins,
} from "react-icons/si";
import { FaServer, FaCode } from "react-icons/fa";

interface Props {
  showIcons: boolean;
}

export default function ExperienceSection({ showIcons }: Props) {
  const experiences = [
    {
      role: "Senior Lead Software Engineer",
      company: "Walmart Global Tech",
      location: "Sunnyvale, CA",
      range: "Jul 2022 – Present",
      bullets: [
        "Lead 10+ large-scale full-stack features for Walmart+ membership and account experiences, impacting millions of users annually.",
        "Implemented company-wide on-call analyzer tool powered by Walmart’s internal LLM to increase developer productivity by 10% each sprint.",
        "Mentored 5+ engineers, conducted 20+ interviews, and guided cross-functional initiatives as a senior tech lead.",
        "Improved Walmart+ Web Pages’ Core Web Vitals by 75%+ (FCP, LCP, CLS, INP), boosting performance and user engagement.",
      ],
      tech: [
        { name: "Next.js", Icon: SiNextdotjs, color: "#000000" },
        { name: "React", Icon: SiReact, color: "#61DAFB" },
        { name: "GraphQL", Icon: SiGraphql, color: "#E10098" },
        { name: "Splunk", Icon: SiSplunk, color: "#FF9600" },
        { name: "Jest", Icon: SiJest, color: "#C21325" },
        { name: "TestCafe", Icon: SiTestcafe, color: "#005EB8" },
      ],
    },
    {
      role: "Senior Full Stack Software Engineer",
      company: "Meltwater",
      location: "Boston, MA",
      range: "Dec 2020 – Jun 2022",
      bullets: [
        "Served as Tech Lead for Web Team across the Analytics Org.",
        "Led migration of legacy state logic from Redux to modern React Context API, improving maintainability.",
      ],
      tech: [
        { name: "React", Icon: SiReact, color: "#61DAFB" },
        { name: "Redux", Icon: SiRedux, color: "#764ABC" },
        { name: "Context API", Icon: FaCode, color: "#4A5568" },
        { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
        { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      ],
    },
    {
      role: "React Developer",
      company: "BeyondTrust",
      location: "Somerville, MA",
      range: "Aug 2019 – Oct 2020",
      bullets: [
        "Developed UI for secure credential injection and remote access tooling.",
        "Collaborated closely with backend team on RESTful APIs and secure workflows.",
      ],
      tech: [
        { name: "React", Icon: SiReact, color: "#61DAFB" },
        { name: "REST", Icon: FaServer, color: "#4A5568" },
        { name: "SCSS", Icon: SiSass, color: "#CC6699" },
      ],
    },
    {
      role: "Web Developer",
      company: "Drift",
      location: "Boston, MA",
      range: "Oct 2018 – Aug 2019",
      bullets: [
        "Maintained and led production deployment cycle for the main site.",
      ],
      tech: [
        { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
        { name: "CSS", Icon: SiCss3, color: "#264DE4" },
        { name: "Jenkins", Icon: SiJenkins, color: "#D24939" },
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-4xl font-bold text-gray-800">Experience</h3>
        </div>

        {experiences.map((exp) => (
          <div key={exp.role + exp.company} className="mb-12">
            <h4 className="text-2xl font-semibold text-purple-700">{exp.role}</h4>
            <p className="text-gray-600">
              {exp.company} • {exp.location} • {exp.range}
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <div className="mt-2 text-sm text-gray-500">
              Tech:{' '}
              {showIcons ? (
                <div className="flex flex-wrap gap-3 mt-1">
                  {exp.tech.map(({ name, Icon, color }) => (
                    <div
                      key={name}
                      className="w-20 h-12 flex items-center justify-center relative group bg-gray-100 rounded-lg p-2"
                    >
                      <Icon
                        size={24}
                        color={color}
                        className="transition-transform hover:scale-110"
                      />
                      <span
                        className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-75 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap"
                      >
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-3 mt-1">
                  {exp.tech.map(({ name }) => (
                    <div
                      key={name}
                      className="w-20 h-12 flex items-center justify-center relative bg-gray-100 rounded-lg p-2"
                    >
                      <span className="text-sm text-center break-words">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
