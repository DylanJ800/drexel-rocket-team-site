import Navbar from "@/Components/Navbar";

const roadmapItems = [
  {
    title: "Concept Definition",
    text: "Initial high-level vehicle concept, visual direction, and long-term mission positioning.",
  },
  {
    title: "Program Planning",
    text: "Future planning for how this vehicle program fits into the team’s staged propulsion and launch roadmap.",
  },
  {
    title: "Pre-Development Status",
    text: "This vehicle is not yet in active design, manufacturing, or flight development.",
  },
];

export default function VehiclePage() {
  return (
    <div className="min-h-screen bg-black text-gray-100 selection:bg-white/20">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/5 min-h-[60vh] md:min-h-[70vh]">
        <div
          className="absolute inset-0 bg-cover bg-[center_30%] opacity-80 [filter:brightness(0.9)_contrast(1.1)]"
          style={{ backgroundImage: "url('/media/rocket.png')" }}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(0,83,155,0.20)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.08),rgba(0,0,0,0.45))]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-24">
          <p className="text-xs tracking-[0.3em] text-gray-400">
            FUTURE VEHICLE PROGRAM
          </p>

          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
            Chariot
          </h1>

          <p className="mt-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200 backdrop-blur">
            NET 2028
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-b border-white/5 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-4xl">
            <p className="text-xs tracking-[0.3em] text-gray-500">OVERVIEW</p>
            <h2 className="mt-3 text-2xl font-semibold text-[#00539B] md:text-3xl">
              A future launch vehicle planned within the team’s long-term roadmap
            </h2>

            <p className="mt-5 text-gray-300">
              Chariot is a future launch vehicle concept envisioned as part
              of the Drexel Rocket Team’s broader long-term development plan.
              The program is intended to build on the team’s propulsion and
              systems experience over time and eventually support a more complete
              integrated launch vehicle effort.
            </p>

            <p className="mt-4 text-gray-300">
              At this stage, Chariot is not yet an active hardware
              development program. It is currently a forward-looking concept and
              roadmap element rather than an ongoing build campaign.
            </p>
          </div>
        </div>
      </section>

      {/* STATUS / ROADMAP */}
      <section className="border-b border-white/5 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs tracking-[0.3em] text-gray-500">STATUS</p>
          <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
            Current position in the roadmap
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {roadmapItems.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="text-lg font-medium text-[#7fb8ff]">
                  {item.title}
                </div>
                <p className="mt-3 text-sm text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FUTURE NOTE */}
      <section className="bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-xs tracking-[0.3em] text-gray-500">
              NOTE
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-[#00539B] md:text-3xl">
              Conceptual program page
            </h2>
            <p className="mt-5 max-w-3xl text-gray-300">
              This page is intended to communicate long-term direction and
              future ambition. As the program develops, additional technical
              details, visual updates, milestones, and subsystem sections can be
              added here.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}