import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Miracle Savers",
      description:
        "A full cooperative financial management system built for a real savings group (ibimina), replacing paper-based record keeping. Features six role-based permission levels (President, Secretary, Accountant, Social Affairs, Auditor, Member), savings tracking, loan approval workflows, an emergency fund module, penalties, and financial reporting.",
      tech: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
      github: "https://github.com/ishimwepatrick1/miracle-savers",
      live: "https://miracleeee.infinityfreeapp.com/miracle_savers/?i=1",
    },
    {
      title: "ChildBridge Rwanda",
      description:
        "A concept and proposal for an AI-assisted mentorship platform connecting vulnerable youth aged 10–18 with mentors, designed to support young people who lack consistent guidance and access to opportunity.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "#",
      live: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern personal portfolio built with React and Tailwind CSS showcasing my skills, projects, and experience.",
      tech: ["React", "Tailwind", "Vite"],
      github: "https://github.com/ishimwepatrick1/portfolio",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-slate-800 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16">
          My <span className="text-cyan-400">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-xl p-6 hover:scale-105 transition duration-300 shadow-lg"
            >

              <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                {project.title}
              </h3>

              <p className="text-gray-300 text-sm mb-4 leading-6">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-slate-700 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                {project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg transition"
                  >
                    <FaGithub /> Code
                  </a>
                )}

                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg transition"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                )}

                {project.github === "#" && project.live === "#" && (
                  <span className="text-sm text-gray-400 italic px-1 py-2">
                    Not yet public
                  </span>
                )}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;