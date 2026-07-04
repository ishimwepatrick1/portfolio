import profile from "../assets/images/profile.jpg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-slate-900 text-white px-6 pt-24"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-16">

        {/* Left */}
        <div className="flex-1">

          {/* Badge */}
          <span className="inline-block bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Available for Internships
          </span>

          {/* Greeting */}
          <p className="text-cyan-400 text-lg font-medium mb-3">
            👋 Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ishimwe Patrick
            </span>
          </h1>

          {/* Title */}
          <h2 className="mt-5 text-2xl text-gray-300 font-medium">
            Business Information Technology Student | Aspiring Full-Stack Developer
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-xl text-gray-400 leading-8 text-lg">
            I am a Business Information Technology student at the University of
            Rwanda, passionate about building responsive web applications and
            solving real-world problems through technology. I enjoy learning
            modern software development tools and creating applications that
            make a positive impact.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="px-8 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition font-semibold"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-8 py-3 rounded-xl border border-cyan-500 hover:bg-cyan-500 hover:text-slate-900 transition font-semibold"
            >
              Contact Me
            </a>

            <a
              href="/Patrick_Ishimwe_CV.pdf"
              download
              className="px-8 py-3 rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition font-semibold"
            >
              Download CV
            </a>

          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-10 text-2xl">

            <a
              href="https://github.com/ishimwepatrick1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:ishimwepatrick198@gmail.com"
              className="hover:text-cyan-400 transition"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        {/* Right */}
        <div className="flex-1 flex justify-center">

          <div className="relative float">

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-30"></div>

            {/* Image */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-cyan-400">

              <img
                src={profile}
                alt="Portrait of Ishimwe Patrick"
                className="w-full h-full object-cover"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;