import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern personal portfolio built with React and Tailwind CSS showcasing my skills, projects, and experience.",
      tech: ["React", "Tailwind", "Vite"],
      github: "https://github.com/ishimwepatrick1/portfolio",
      live: "#",
    },
    {
      title: "Gym Management System",
      description:
        "A system for managing gym members, subscriptions, and payments with a clean dashboard interface.",
      tech: ["PHP", "MySQL", "Bootstrap"],
      github: "#",
      live: "#",
    },
    {
      title: "Student Result System",
      description:
        "A web application for managing and displaying student academic results efficiently.",
      tech: ["Java", "MySQL", "Servlets"],
      github: "#",
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
                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 text-sm bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg transition"
                >
                  <FaGithub /> Code
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  className="flex items-center gap-2 text-sm bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg transition"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;