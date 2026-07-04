import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaPhp,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMysql,
  SiNodedotjs,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";
import { useInView } from "react-intersection-observer";

/* =========================
   MAIN SKILLS COMPONENT
========================= */

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-900 text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="text-cyan-400">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* FRONTEND */}
          <SkillCard title="Frontend">
            <Skill icon={<FaHtml5 />} name="HTML5" level={90} />
            <Skill icon={<FaCss3Alt />} name="CSS3" level={85} />
            <Skill icon={<FaJs />} name="JavaScript" level={80} />
            <Skill icon={<FaReact />} name="React" level={75} />
            <Skill icon={<SiTailwindcss />} name="Tailwind CSS" level={80} />
          </SkillCard>

          {/* BACKEND */}
          <SkillCard title="Backend">
            <Skill icon={<FaJava />} name="Java" level={80} />
            <Skill icon={<FaPhp />} name="PHP" level={75} />
            <Skill icon={<SiNodedotjs />} name="Node.js" level={70} />
          </SkillCard>

          {/* DATABASE */}
          <SkillCard title="Database">
            <Skill icon={<SiMysql />} name="MySQL" level={85} />
            <Skill icon={<SiMysql />} name="SQL" level={85} />
          </SkillCard>

          {/* TOOLS */}
          <SkillCard title="Development Tools">
            <Skill icon={<FaGitAlt />} name="Git" level={85} />
            <Skill icon={<FaGithub />} name="GitHub" level={85} />
            <Skill icon={<VscCode />} name="VS Code" level={90} />
          </SkillCard>

          {/* SOFTWARE ENGINEERING */}
          <SkillCard title="Software Engineering">
            <Skill icon="⚙️" name="DevOps" level={80} />
            <Skill icon="🧪" name="Software Testing / QA" level={85} />
            <Skill icon="🖥️" name="System Administration" level={80} />
          </SkillCard>

          {/* EMERGING TECH */}
          <SkillCard title="Emerging Technologies">
            <Skill icon="📱" name="Flutter (Mobile Apps)" level={70} />
            <Skill icon="🤖" name="Machine Learning Fundamentals" level={65} />
            <Skill icon="⛓️" name="Blockchain Fundamentals" level={60} />
          </SkillCard>

          {/* CURRENTLY LEARNING */}
          <SkillCard title="Currently Learning">
            <Skill icon={<FaReact />} name="Advanced React" level={70} />
            <Skill icon={<SiNodedotjs />} name="Node.js Backend" level={70} />
            <Skill icon="📘" name="TypeScript" level={70} />
          </SkillCard>

        </div>
      </div>
    </section>
  );
}

/* =========================
   SKILL CARD COMPONENT
========================= */

function SkillCard({ title, children }) {
  return (
    <div className="bg-slate-800 rounded-xl p-6 hover:scale-105 transition duration-300">
      <h3 className="text-xl font-semibold text-cyan-400 mb-5">
        {title}
      </h3>
      <div>{children}</div>
    </div>
  );
}

/* =========================
   SKILL COMPONENT (ANIMATED)
========================= */

function Skill({ icon, name, level }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div ref={ref} className="mb-5">

      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{icon}</span>
          <span className="font-medium">{name}</span>
        </div>

        <span className="text-cyan-400 text-sm">{level}%</span>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: inView ? `${level}%` : "0%",
          }}
        />
      </div>

    </div>
  );
}

export default Skills;