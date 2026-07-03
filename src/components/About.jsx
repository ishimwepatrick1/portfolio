import {
  FaGraduationCap,
  FaMapMarkerAlt,
  FaLaptopCode,
  FaLightbulb,
} from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="bg-slate-800 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}

        <h2 className="text-4xl font-bold text-center mb-16">
          About <span className="text-cyan-400">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <div className="flex justify-center">

            <div className="w-72 h-72 rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-7xl font-bold shadow-xl">

              IP

            </div>

          </div>

          {/* Right Side */}

          <div>

            <h3 className="text-3xl font-bold mb-6">
              Aspiring Software Developer
            </h3>

            <p className="text-gray-300 leading-8 mb-8">
              I am a Business Information Technology student at the
              University of Rwanda with a strong passion for software
              development and problem solving.

              I enjoy building modern web applications, learning new
              technologies, and creating solutions that make everyday
              tasks easier.
            </p>

            <div className="space-y-5">

              <div className="flex items-center gap-4">
                <FaGraduationCap className="text-cyan-400 text-xl" />
                <span>University of Rwanda</span>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-cyan-400 text-xl" />
                <span>Kigali, Rwanda</span>
              </div>

              <div className="flex items-center gap-4">
                <FaLaptopCode className="text-cyan-400 text-xl" />
                <span>Interested in Web & Mobile Development</span>
              </div>

              <div className="flex items-center gap-4">
                <FaLightbulb className="text-cyan-400 text-xl" />
                <span>Always Learning New Technologies</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;