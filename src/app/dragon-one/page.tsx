import Navbar from "@/Components/Navbar";

const roadmap = [
  "Architecture definition",
  "Cycle analysis and system modeling",
  "Turbopump development",
  "Subsystem prototyping",
  "Integrated hot-fire campaign",
];

export default function DragonOnePage() {
  return (
    <div className="min-h-screen bg-black text-gray-100 selection:bg-white/20">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/media/dragon-one-hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(55%_65%_at_50%_0%,rgba(0,83,155,0.28)_0%,transparent_65%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <p className="text-xs tracking-[0.3em] text-gray-400">
            NEXT-GENERATION DEVELOPMENT PROGRAM
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
            Dragon One
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-gray-300">
            Dragon One is the team’s next-generation liquid engine development
            effort, focused on pump-fed propulsion, regenerative cooling, and a
            more advanced collegiate engine architecture.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="border-b border-white/5 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <p className="text-xs tracking-[0.3em] text-gray-500">VISION</p>
              <h2 className="mt-3 text-2xl font-semibold text-[#00539B] md:text-3xl">
                A step beyond pressure-fed development
              </h2>
              <p className="mt-5 text-gray-300">
                Dragon One represents the next major step in capability for the
                team. The program is intended to push into more advanced
                propulsion architecture, higher-performance system design, and
                deeper cross-disciplinary integration.
              </p>
              <p className="mt-4 text-gray-300">
                This page is designed to grow over time as the program matures,
                with room for technical callouts, renders, analyses, and
                milestone documentation.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-3">
                <div className="aspect-[16/10] rounded-2xl bg-zinc-900/70 bg-[url('/media/dragon-one-feature.jpg')] bg-cover bg-center" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="border-b border-white/5 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs tracking-[0.3em] text-gray-500">FOCUS AREAS</p>
          <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
            Program pillars
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Pump-fed architecture",
                body: "Development toward a more advanced liquid propulsion system with higher performance potential.",
              },
              {
                title: "Thermal management",
                body: "Exploration of regenerative cooling, film cooling, and system-level thermal constraints.",
              },
              {
                title: "Integrated R&D",
                body: "Cross-disciplinary iteration spanning propulsion, controls, structures, operations, and test methodology.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="text-lg font-medium text-[#7fb8ff]">
                  {item.title}
                </div>
                <p className="mt-3 text-sm text-gray-300">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="border-b border-white/5 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs tracking-[0.3em] text-gray-500">ROADMAP</p>
          <h2 className="mt-3 text-2xl font-semibold text-[#00539B] md:text-3xl">
            Development path
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {roadmap.map((step, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="text-xs tracking-[0.25em] text-gray-500">
                  PHASE {index + 1}
                </div>
                <div className="mt-3 text-sm font-medium text-white">
                  {step}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLACEHOLDER VISUALS */}
      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs tracking-[0.3em] text-gray-500">VISUALS</p>
          <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
            Concept visuals and future media
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-3">
              <div className="aspect-video rounded-2xl bg-zinc-900/70" />
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-3">
              <div className="aspect-video rounded-2xl bg-zinc-900/70" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}