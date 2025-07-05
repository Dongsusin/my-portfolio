import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDiscord,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiFirebase,
  SiNextdotjs,
  SiThreedotjs,
  SiVuedotjs,
  SiNotion,
  SiUnity,
  SiFigma,
} from "react-icons/si";

const category = [
  {
    title: "프론트엔드/백엔드",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="skill-react-icon html" /> },
      { name: "CSS", icon: <FaCss3Alt className="skill-react-icon css" /> },
      { name: "JavaScript", icon: <FaJs className="skill-react-icon js" /> },
      { name: "TypeScript", icon: <SiTypescript className="skill-react-icon ts" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss className="skill-react-icon tailwind" /> },
      { name: "React", icon: <FaReact className="skill-react-icon react" /> },
      { name: "Firebase", icon: <SiFirebase className="skill-react-icon firebase" /> },
    ],
  },
  {
    title: "개발 기술",
    skills: [
      { name: "Next.js", icon: <SiNextdotjs className="skill-react-icon next" /> },
      { name: "Three.js", icon: <SiThreedotjs className="skill-react-icon three" /> },
      { name: "Vue.js", icon: <SiVuedotjs className="skill-react-icon vue" /> },
      { name: "Node.js", icon: <FaNodeJs className="skill-react-icon node" /> },
    ],
  },
  {
    title: "협업 기술",
    skills: [
      { name: "Git", icon: <FaGitAlt className="skill-react-icon git" /> },
      { name: "GitHub", icon: <FaGithub className="skill-react-icon github" /> },
      { name: "Discord", icon: <FaDiscord className="skill-react-icon discord" /> },
      { name: "Notion", icon: <SiNotion className="skill-react-icon notion" /> },
    ],
  },
  {
    title: "기타",
    skills: [
      { name: "Figma", icon: <SiFigma className="skill-react-icon figma" />, color: "#F24E1E" },
      { name: "Unity", icon: <SiUnity className="skill-react-icon unity" />, color: "#000000" },],
  },
];



const SkillList = () => {
  return (
    <div className="skill-section" data-aos="fade-up">
      {category.map((cat, catIndex) => (
        <div className="skill-category" key={cat.title}>
          <h3 className="category-title">{cat.title}</h3>
          <div className="skill-list">
            {cat.skills.map((skill, skillIndex) => (
              <div
                className="skill-item"
                key={skill.name}
                data-aos="zoom-in"
                data-aos-delay={skillIndex * 100}
              >
                {skill.icon}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillList;
