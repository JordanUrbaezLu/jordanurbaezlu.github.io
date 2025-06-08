import React from "react";
import {
  SiNextdotjs,
  SiReact,
  SiGraphql,
  SiRedux,
  SiJavascript,
  SiTypescript,
  SiSass,
  SiCss3,
  SiJenkins,
  SiNodedotjs,
  SiPrometheus,
  SiDocker,
  SiSpringboot,
  SiNx,
  SiSplunk,
  SiGithubactions,
} from "react-icons/si";
import { FaServer } from "react-icons/fa";

interface Props {
  showIcons: boolean;
}

export default function ExperienceSection({ showIcons }: Props) {
  const [iconClicked, setIconClicked] = React.useState<string>("");
  const [hoveredIcon, setHoveredIcon] = React.useState<string>("");

  const experiences = [
    {
      role: "Senior Lead Software Engineer",
      company: "Walmart Global Tech",
      location: "Sunnyvale, CA",
      range: "Jul 2022 – Present",
      current: true,
      bullets: [
        "<b>Lead 10+ large-scale full-stack features</b> for Walmart+ membership and account experiences, impacting millions of users annually.",
        "Implemented company-wide on-call analyzer tool powered by Walmart’s internal LLM to increase developer productivity by <b>10% each sprint.</b>",
        "<b>Mentored 5+ engineers, conducted 20+ interviews</b>, and guided cross-functional initiatives as a senior tech lead.",
        "Improved Walmart+ Web Pages’ Core Web Vitals by <b>75%+ (FCP, LCP, CLS, INP)</b>, boosting performance and user engagement.",
      ],
      tech: [
        { name: "Next.js", Icon: SiNextdotjs, color: "#000000" },
        { name: "React", Icon: SiReact, color: "#61DAFB" },
        { name: "GraphQL", Icon: SiGraphql, color: "#E10098" },
        { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
        { name: "Prometheus", Icon: SiPrometheus, color: "#E6522C" },
        { name: "Docker", Icon: SiDocker, color: "#2496ED" },
        { name: "Spring Boot", Icon: SiSpringboot, color: "#6DB33F" },
        { name: "Nx", Icon: SiNx, color: "#00008B" },
      ],
    },
    {
      role: "Senior Full Stack Software Engineer",
      company: "Meltwater",
      location: "Boston, MA",
      range: "Dec 2020 – Jun 2022",
      bullets: [
        "Served as <b>Tech Lead for Web Team</b> across the Analytics Org.",
        "Led migration of legacy state logic from Redux to modern React Context API, improving maintainability.",
      ],
      tech: [
        { name: "React", Icon: SiReact, color: "#61DAFB" },
        { name: "Redux", Icon: SiRedux, color: "#764ABC" },
        { name: "Splunk", Icon: SiSplunk, color: "#FF9600" },
        { name: "GitHub Actions", Icon: SiGithubactions, color: "#2088FF" },
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
        { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
        { name: "SCSS", Icon: SiSass, color: "#CC6699" },
      ],
    },
    {
      role: "Web Developer",
      company: "Drift",
      location: "Boston, MA",
      range: "Oct 2018 – Aug 2019",
      bullets: [
        "Maintained and <b>led production deployment cycle</b> for the main site.",
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
          <h3 className="text-4xl font-bold text-purple-700">Experience</h3>
        </div>

        {experiences.map((exp) => (
          <div key={exp.role + exp.company} className="mb-12">
            <h4
              className={`text-2xl font-semibold text-gray-800 ${
                exp.current
                  ? "bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500"
                  : ""
              }`}
            >
              {exp.role}
            </h4>
            <p className="text-gray-600">
              <i>
                {exp.company} • {exp.location} • {exp.range}
              </i>
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              {exp.bullets.map((b, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: b }} />
              ))}
            </ul>
            <div className="mt-2 text-sm text-gray-500">
              Tech:{" "}
              {showIcons ? (
                <div className="flex flex-wrap gap-3 mt-1">
                  {exp.tech.map(({ name, Icon, color }) => {
                    const isActive =
                      iconClicked === exp.company + name ||
                      hoveredIcon === exp.company + name;

                    return (
                      <div
                        key={name}
                        tabIndex={showIcons ? 0 : -1}
                        onMouseEnter={() => setHoveredIcon(exp.company + name)}
                        onMouseLeave={() => setHoveredIcon("")}
                        onClick={() => setIconClicked(exp.company + name)}
                        className="w-20 h-12 flex items-center justify-center relative bg-gray-100 rounded-lg p-2 cursor-pointer"
                      >
                        {showIcons ? (
                          <Icon
                            size={24}
                            color={color}
                            className="transition-transform hover:scale-110"
                          />
                        ) : (
                          <span className="text-sm text-center break-words">
                            {name}
                          </span>
                        )}

                        {/* tooltip: always in the DOM, but fades in if hovered or clicked */}
                        <span
                          className={`
          absolute bottom-full mb-2 left-1/2
          transform -translate-x-1/2
          bg-black bg-opacity-75 text-white text-xs
          rounded px-2 py-1 whitespace-nowrap pointer-events-none
          transition-opacity duration-200 ease-out
          ${isActive ? "opacity-100" : "opacity-0"}
        `}
                        >
                          {name}
                        </span>
                      </div>
                    );
                  })}
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
