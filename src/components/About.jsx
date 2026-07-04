import profile from "../assets/images/profile.jpg";
import {
  FaGraduationCap,
  FaMapMarkerAlt,
  FaLaptopCode,
  FaLightbulb,
  FaAward,
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

           <div className="w-72 h-72 rounded-3xl overflow-hidden shadow-xl border-4 border-cyan-400">

  <img
    src={profile}
    alt="Ishimwe Patrick"
    className="w-full h-full object-cover"
  />

</div>

          </div>

          {/* Right Side */}

          <div>

            <h3 className="text-3xl font-bold mb-6">
              Aspiring Software Developer
            </h3>

            <p className="text-gray-300 leading-8 mb-8">
  I'm Ishimwe Patrick, a Business Information Technology student at the
  University of Rwanda. Before joining university, I studied Software
  Development at Collegio Santo Antonio Maria Zaccaria TSS (2022–2025),
  earning TVET Certificates III, IV, and V and ranking 1st in my class
  each year. That gave me hands-on experience across frontend and backend
  development, databases, DevOps, software testing, mobile app development,
  and emerging areas like machine learning and blockchain.

  I enjoy building modern web applications, learning new technologies, and
  solving real-world problems through technology. My goal is to grow into a
  full-stack software developer who creates reliable and impactful digital
  solutions.
</p>

            <div className="space-y-5">

  <div className="flex items-center gap-4">
    <FaGraduationCap className="text-cyan-400 text-xl" />
    <span>University of Rwanda – Business Information Technology</span>
  </div>

  <div className="flex items-center gap-4">
    <FaAward className="text-cyan-400 text-xl" />
    <span>TVET Certificate V in Software Development – Ranked 1st, 3 years running</span>
  </div>

  <div className="flex items-center gap-4">
    <FaMapMarkerAlt className="text-cyan-400 text-xl" />
    <span>Kigali, Rwanda</span>
  </div>

  <div className="flex items-center gap-4">
    <FaLaptopCode className="text-cyan-400 text-xl" />
    <span>Software Development | React | Java | PHP | SQL</span>
  </div>

  <div className="flex items-center gap-4">
    <FaLightbulb className="text-cyan-400 text-xl" />
    <span>Passionate about solving real-world problems with technology</span>
  </div>

</div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;