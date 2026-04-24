import Navbar from "@/Components/Navbar";

const specs = [
  { label: "Cycle", value: "Pump-Fed" },
  { label: "Cooling", value: "Regenerative + Film" },
  { label: "Propellants", value: "E85 / N₂O" },
  { label: "Status", value: "Early R&D" },
];

const pillars = [
  {
    title: "Pump-fed architecture",
    body: "A step toward higher-performance liquid propulsion with a more advanced system architecture.",
  },
  {
    title: "Thermal management",
    body: "Focused development around regenerative cooling, film cooling, and heat-transfer constraints.",
  },
  {
    title: "Integrated R&D",
    body: "Cross-disciplinary iteration spanning propulsion, controls, structures, operations, and testing.",
  },
];

const roadmap = [
  "Architecture definition",
  "Cycle analysis",
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
        <div className="absolute inset-0 bg-[radial-gradient(60%_70%_at_50%_0%,rgba(0,83,155,0.35)_0%,transparent_65%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-black to-black" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-36">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex rounded-full border border-[#00539B]/40 bg-[#00539B]/10 px-4 py-2 text-xs tracking-[0.25em] text-[#7fb8ff]">
              NEXT-GENERATION DEVELOPMENT PROGRAM
            </div>

            <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
              Dragon One
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
              Dragon One is the team’s next-generation liquid engine development
              effort, focused on pump-fed propulsion, regenerative cooling, and a
              more advanced collegiate engine architecture.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {specs.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_0_40px_rgba(0,83,155,0.08)] backdrop-blur transition hover:border-[#00539B]/50 hover:bg-[#00539B]/10"
              >
                <div className="text-xs uppercase tracking-[0.25em] text-gray-500">
                  {item.label}
                </div>
                <div className="mt-3 text-xl font-medium text-white">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="relative border-b border-white/5 bg-zinc-950">
        <div className="absolute inset-0 bg-[radial-gradient(45%_50%_at_85%_20%,rgba(0,83,155,0.18)_0%,transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs tracking-[0.3em] text-gray-500">VISION</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#00539B] md:text-4xl">
            A step beyond pressure-fed development
          </h2>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <p className="text-gray-300">
              Dragon One represents the next major step in capability for the
              team. The program is intended to push into more advanced
              propulsion architecture, higher-performance system design, and
              deeper cross-disciplinary integration.
            </p>
            <p className="text-gray-300">
              This page is designed to grow over time as the program matures,
              with room for technical callouts, renders, analyses, and
              milestone documentation.
            </p>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE STRIP */}
      <section className="border-b border-white/5 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-xs tracking-[0.3em] text-gray-500">
            SYSTEM ARCHITECTURE
          </p>

          <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <div className="grid gap-4 md:grid-cols-5">
              {["Tanks", "Feed System", "Turbopump", "Injector", "Chamber"].map(
                (item, index) => (
                  <div key={item} className="relative">
                    <div className="rounded-2xl border border-[#00539B]/30 bg-[#00539B]/10 px-5 py-6 text-center text-sm font-medium text-white">
                      {item}
                    </div>
                    {index < 4 && (
                      <div className="absolute right-[-18px] top-1/2 hidden h-px w-8 bg-[#00539B]/60 md:block" />
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="border-b border-white/5 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs tracking-[0.3em] text-gray-500">FOCUS AREAS</p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            Program pillars
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {pillars.map((item) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-[#00539B]/50 hover:shadow-[0_0_50px_rgba(0,83,155,0.16)]"
              >
                <div className="h-1 w-12 rounded-full bg-[#00539B] transition group-hover:w-20" />
                <div className="mt-6 text-lg font-medium text-[#7fb8ff]">
                  {item.title}
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-300">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="border-b border-white/5 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs tracking-[0.3em] text-gray-500">ROADMAP</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#00539B] md:text-4xl">
            Development path
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {roadmap.map((step, index) => (
              <div
                key={step}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-[#00539B]/50 hover:bg-[#00539B]/10"
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

      {/* STATUS */}
      <section className="bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-3xl border border-[#00539B]/30 bg-[#00539B]/10 p-8 shadow-[0_0_60px_rgba(0,83,155,0.12)]">
            <p className="text-xs tracking-[0.3em] text-[#7fb8ff]">STATUS</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              Early-stage development
            </h2>
            <p className="mt-5 max-w-3xl text-gray-300">
              Dragon One is currently in early-stage development. As the program
              progresses, this page will be updated with technical analyses,
              subsystem designs, test data, and validated milestones.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}