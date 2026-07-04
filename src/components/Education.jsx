import { FaGraduationCap, FaTrophy } from "react-icons/fa";

function Education() {
  const records = [
    {
      title: "TVET Certificate V in Software Development",
      school: "Collegio Santo Antonio Maria Zaccaria TSS",
      period: "2024 – 2025",
      result: "88.27% · Ranked 1st out of 43",
    },
    {
      title: "TVET Certificate IV in Software Development",
      school: "Collegio Santo Antonio Maria Zaccaria TSS",
      period: "2023 – 2024",
      result: "91.68% · Ranked 1st",
    },
    {
      title: "TVET Certificate III in Software Development",
      school: "Collegio Santo Antonio Maria Zaccaria TSS",
      period: "2022 – 2023",
      result: "91.05% · Ranked 1st out of 45",
    },
  ];

  return (
    <section id="education" className="bg-slate-900 text-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Education & <span className="text-cyan-400">Certifications</span>
        </h2>

        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Ranked 1st in class for three consecutive years in Software
          Development at TVET level, before continuing on to university.
        </p>

        <div className="space-y-8">
          {/* University - current */}
          <div className="bg-slate-800 rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 border-l-4 border-cyan-400">
            <div className="flex items-start gap-4">
              <FaGraduationCap className="text-cyan-400 text-2xl mt-1 shrink-0" />
              <div>
                <h3 className="text-lg font-semibold">
                  BSc in Business Information Technology
                </h3>
                <p className="text-gray-400 text-sm">University of Rwanda</p>
              </div>
            </div>
            <span className="text-sm text-cyan-400 font-medium whitespace-nowrap">
              2025 – 2029 (In Progress)
            </span>
          </div>

          {/* TVET records */}
          {records.map((r, i) => (
            <div
              key={i}
              className="bg-slate-800 rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 hover:scale-[1.02] transition duration-300"
            >
              <div className="flex items-start gap-4">
                <FaTrophy className="text-cyan-400 text-2xl mt-1 shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold">{r.title}</h3>
                  <p className="text-gray-400 text-sm">{r.school}</p>
                  <p className="text-gray-400 text-sm mt-1">{r.period}</p>
                </div>
              </div>
              <span className="text-sm bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full font-medium whitespace-nowrap">
                {r.result}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
