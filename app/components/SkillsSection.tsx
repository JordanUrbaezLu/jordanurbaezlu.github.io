import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMui,
  SiGraphql,
  SiRedux,
  SiSpringboot,
  SiJsonwebtokens,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiKubernetes,
  SiVercel,
  SiJenkins,
  SiNx,
  SiGithubactions,
  SiWebpack,
  SiJest,
  SiTestcafe,
  SiPrometheus,
  SiGrafana,
  SiSplunk,
} from "react-icons/si";
import {
  FaServer,
  FaCode,
  FaCogs,
  FaBrain,
  FaJava,
  FaRegPlayCircle,
} from "react-icons/fa";

interface Props {
  showIcons: boolean;
}

export default function SkillsSection({ showIcons }: Props) {
  const categories = [
    {
      title: "Frontend",
      items: [
        { name: "React", Icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", Icon: SiNextdotjs, color: "#000000" },
        { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
        { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
        { name: "Tailwind", Icon: SiTailwindcss, color: "#38B2AC" },
        { name: "MUI", Icon: SiMui, color: "#007FFF" },
        { name: "GraphQL", Icon: SiGraphql, color: "#E10098" },
        { name: "Redux", Icon: SiRedux, color: "#764ABC" },
      ],
    },
    {
      title: "Backend & DevOps",
      items: [
        { name: "Java", Icon: FaJava, color: "#007396" },
        { name: "Spring Boot", Icon: SiSpringboot, color: "#6DB33F" },
        { name: "JWT", Icon: SiJsonwebtokens, color: "#000000" },
        { name: "REST", Icon: FaServer, color: "#4A5568" },
        { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
        { name: "Express", Icon: SiExpress, color: "#000000" },
        { name: "PostgreSQL", Icon: SiPostgresql, color: "#31648C" },
        { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
        { name: "Docker", Icon: SiDocker, color: "#2496ED" },
        { name: "Kubernetes", Icon: SiKubernetes, color: "#326CE5" },
        { name: "Vercel", Icon: SiVercel, color: "#000000" },
      ],
    },
    {
      title: "Tooling & Testing",
      items: [
        { name: "Jenkins", Icon: SiJenkins, color: "#D24939" },
        { name: "Nx", Icon: SiNx, color: "#E23DD9" },
        { name: "GitHub Actions", Icon: SiGithubactions, color: "#2088FF" },
        { name: "Webpack", Icon: SiWebpack, color: "#8DD6F9" },
        { name: "Jest", Icon: SiJest, color: "#C21325" },
        { name: "Playwright", Icon: FaRegPlayCircle, color: "#333333" },
        { name: "TestCafe", Icon: SiTestcafe, color: "#005EB8" },
        { name: "React Testing Lib", Icon: FaCode, color: "#E75A7C" },
      ],
    },
    {
      title: "Other",
      items: [
        { name: "LLM/Neural Nets", Icon: FaBrain, color: "#805AD5" },
        { name: "Prometheus", Icon: SiPrometheus, color: "#E6522C" },
        { name: "Grafana", Icon: SiGrafana, color: "#F05A28" },
        { name: "Splunk", Icon: SiSplunk, color: "#FF9600" },
        { name: "SSR/CSR", Icon: FaServer, color: "#4A5568" },
        { name: "Code Splitting", Icon: FaCogs, color: "#4A5568" },
        { name: "CI/CD", Icon: FaCogs, color: "#4A5568" },
        { name: "Agile/Scrum", Icon: FaCogs, color: "#4A5568" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-4xl font-bold text-gray-800">Skills</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
          {categories.map(({ title, items }) => (
            <div key={title}>
              <h4 className="font-semibold text-gray-900 mb-2">{title}</h4>
              <div className="flex flex-wrap gap-4">
                {items.map(({ name, Icon, color }) => (
                  <div
                    key={name}
                    className="w-20 h-12 flex items-center justify-center relative group bg-gray-100 rounded-lg p-2"
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
                    <span
                      className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-75 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap"
                    >
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
