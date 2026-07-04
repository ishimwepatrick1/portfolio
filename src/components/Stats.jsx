function Stats() {
const stats = [
  {
    number: "1st",
    title: "Class Rank, 3 Years Running",
  },
  {
    number: "10+",
    title: "Technical Skills",
  },
  {
    number: "Daily",
    title: "Learning",
  },
];

  return (
    <section className="bg-slate-900 py-20">

      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-8">

          {stats.map((stat) => (
            <div
              key={stat.title}
              className="bg-slate-800 rounded-2xl p-10 text-center hover:scale-105 transition duration-300"
            >
              <h2 className="text-5xl font-bold text-cyan-400">
                {stat.number}
              </h2>

              <p className="mt-4 text-gray-300">
                {stat.title}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Stats;