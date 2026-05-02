const subteams = [
  {
    name: "Operations",
    lead: "Dhruv Patel",
    description:
      "Supports team logistics, documentation, onboarding, meeting coordination, test planning, outreach, and launch/test operations.",
  },
  {
    name: "Propulsion",
    lead: "William Richards",
    description:
      "Works on engine architecture, combustion devices, injector development, chamber/nozzle design, propulsion analysis, and test integration.",
  },
  {
    name: "Stage 0",
    lead: "Joe Maddi",
    description:
      "Develops ground support equipment, test stand systems, fluid handling, pad operations, and safety-critical infrastructure.",
  },
  {
    name: "GNC",
    lead: "Quincey Daniel",
    description:
      "Works on avionics, sensors, telemetry, controls, flight software, mission control, and vehicle guidance systems.",
  },
  {
    name: "Manufacturing",
    lead: "Emily Chen",
    description:
      "Supports CAD-to-hardware workflows, machining, 3D printing, assembly, inspection, fabrication planning, and hardware integration.",
  },
  {
    name: "Turbomachinery",
    lead: "Dylan Joseph",
    description:
      "Focuses on pump-fed engine development, pump sizing, turbine architecture, rotating machinery, analysis tools, and Dragon One R&D.",
  },
];

export default function PositionsPage() {
  return (
    <div className="min-h-screen bg-black text-gray-100 selection:bg-white/20">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-black/70 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a
            href="/"
            className="text-sm font-semibold tracking-widest text-[#07294D]"
          >
            DREXEL ROCKET TEAM
          </a>

          <ul className="hidden gap-8 text-sm text-gray-300 md:flex">
            <li>
              <a className="hover:text-[#00539B]" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-[#00539B]" href="/team">
                Team
              </a>
            </li>
            <li>
              <a className="hover:text-[#00539B]" href="/apply">
                Apply
              </a>
            </li>
          </ul>

          <a
            href="/apply"
            className="rounded-xl border border-white/10 bg-[#07294D]/40 px-4 py-2 text-sm hover:bg-[#07294D]/60"
          >
            Apply Today
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(0,83,155,0.35)_0%,transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_50%_at_80%_10%,rgba(255,255,255,0.06)_0%,transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <p className="text-xs tracking-[0.3em] text-gray-400">
            JOIN DREXEL ROCKET TEAM
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
            Find where you can contribute to real rocket development.
          </h1>

          <p className="mt-6 max-w-2xl text-gray-300">
            Drexel Rocket Team is organized into focused subteams that support
            propulsion development, ground systems, avionics, manufacturing,
            operations, and future pump-fed engine research.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#subteams"
              className="rounded-2xl bg-[#00539B] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#003f79]"
            >
              Explore Subteams
            </a>

            <a
              href="/apply"
              className="rounded-2xl border border-[#00539B]/50 px-5 py-2.5 text-sm font-medium hover:bg-[#00539B]/10"
            >
              Apply Today
            </a>

            {/* Keep this hidden for now. You can enable it later. */}
            {/*
            <a
              href="/open-positions"
              className="rounded-2xl border border-white/10 px-5 py-2.5 text-sm font-medium text-gray-300 hover:bg-white/5"
            >
              View Open Positions
            </a>
            */}
          </div>
        </div>
      </section>

      {/* SUBTEAMS */}
      <section id="subteams" className="border-b border-white/5 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-[#00539B] md:text-3xl">
              Subteams
            </h2>

            <p className="mt-4 text-gray-300">
              Apply directly to a subteam or submit a general application if you
              are not sure where you fit yet.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {subteams.map((team) => (
              <a
                key={team.name}
                href={`/apply?team=${encodeURIComponent(team.name)}`}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-[#00539B]/60 hover:bg-[#00539B]/10 hover:shadow-[0_0_35px_rgba(0,83,155,0.18)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {team.name}
                    </h3>

                    <p className="mt-1 text-sm text-gray-400">
                      Lead: {team.lead}
                    </p>
                  </div>

                  <div className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-300 transition group-hover:border-[#00539B]/50 group-hover:text-white">
                    Apply →
                  </div>
                </div>

                <p className="mt-5 text-sm leading-6 text-gray-300">
                  {team.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* APPLY CTA */}
      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#07294D]/50 to-white/5 p-8 md:p-10">
            <p className="text-xs tracking-[0.3em] text-gray-400">
              NOT SURE WHERE TO START?
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-semibold text-white md:text-4xl">
              Apply anyway. We will help place you where you can contribute
              best.
            </h2>

            <p className="mt-4 max-w-2xl text-gray-300">
              You do not need to know exactly which subteam is right for you.
              We are looking for students who are motivated, reliable, and
              interested in helping build real aerospace hardware.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/apply"
                className="inline-flex rounded-2xl bg-[#00539B] px-6 py-3 text-sm font-medium text-white hover:bg-[#003f79]"
              >
                Apply Today
              </a>

              {/* Hidden for now. Enable later when advisor is comfortable. */}
              {/*
              <a
                href="/open-positions"
                className="inline-flex rounded-2xl border border-white/10 px-6 py-3 text-sm font-medium text-gray-300 hover:bg-white/5"
              >
                View Open Positions
              </a>
              */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}