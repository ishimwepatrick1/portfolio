import profile from "../assets/images/profile.jpg";
function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-slate-900 text-white px-6 pt-24"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-16">

        {/* Left */}
        <div className="flex-1">

          <p className="text-cyan-400 text-lg font-medium mb-3">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ishimwe Patrick
            </span>
          </h1>

          <h2 className="mt-5 text-2xl text-gray-300">
            Aspiring Software Developer & BIT Student
          </h2>

          <p className="mt-6 max-w-xl text-gray-400 leading-8">
            I enjoy building responsive web applications, solving real-world
            problems with technology, and continuously learning modern software
            development tools.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="px-8 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition font-semibold"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-8 py-3 rounded-xl border border-cyan-500 hover:bg-cyan-500 transition font-semibold"
            >
              Contact Me
            </a>

          </div>

        </div>

        {/* Right */}

        <div className="flex-1 flex justify-center">

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-30"></div>

           <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-cyan-400">

  <img
    src={profile}
    alt="Ishimwe Patrick"
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