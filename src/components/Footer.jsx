import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-950 text-gray-400 py-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Left */}
          <div>
            <h3 className="text-2xl font-bold text-white">
              Ishimwe <span className="text-cyan-400">Patrick</span>
            </h3>

            <p className="mt-2 text-sm">
              Business Information Technology Student
            </p>
          </div>

          {/* Center */}
          <div className="flex gap-6">

            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>

            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>

          </div>

          {/* Right */}
          <div className="flex gap-5 text-xl">

            <a
              href="https://github.com/ishimwepatrick1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/mynetwork/grow/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:ishimwepatrick198@gmail.com"
              className="hover:text-cyan-400 transition"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 flex justify-between items-center">

          <p className="text-sm">
            © {currentYear} Ishimwe Patrick. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="bg-cyan-500 hover:bg-cyan-600 p-3 rounded-full transition"
          >
            <FaArrowUp className="text-white" />
          </button>

        </div>

      </div>
    </footer>
  );
}

export default Footer;