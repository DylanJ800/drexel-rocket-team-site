"use client";

import { motion } from "framer-motion";

const subteams = [
  {
    name: "Operations",
    lead: "Dhruv Patel",
    description:
      "Coordinates logistics, documentation, onboarding, meeting flow, test planning, outreach, and launch/test operations.",
  },
  {
    name: "Propulsion",
    lead: "William Richards",
    description:
      "Develops engine architecture, combustion devices, injector concepts, chamber/nozzle design, analysis, and test integration.",
  },
  {
    name: "Stage 0",
    lead: "Joe Maddi",
    description:
      "Builds ground support equipment, test stand systems, fluid handling, pad operations, and safety-critical infrastructure.",
  },
  {
    name: "GNC",
    lead: "Quincey Daniel",
    description:
      "Works on avionics, telemetry, sensors, controls, flight software, mission control, and vehicle guidance systems.",
  },
  {
    name: "Manufacturing",
    lead: "Emily Chen",
    description:
      "Turns CAD into hardware through machining, 3D printing, assembly, inspection, fabrication planning, and integration.",
  },
  {
    name: "Turbomachinery",
    lead: "Dylan Joseph",
    description:
      "Focuses on pump-fed engine development, pump sizing, turbine architecture, rotating machinery, and analysis tools.",
  },
];

const steps = ["Apply", "Onboard", "Join a Subteam", "Build & Test Hardware"];

export default function PositionsPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-black text-gray-100 selection:bg-white/20">
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
              <a className="hover:text-[#00539B]" href="/#team">
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
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(0,83,155,0.42)_0%,transparent_65%)]" />
        <div className="pointer-events-none absolute right-[-10%] top-[-20%] h-[520px] w-[520px] rounded-full bg-[#00539B]/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-30%] left-[-10%] h-[480px] w-[480px] rounded-full bg-[#07294D]/35 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-4xl"
          >
            <p className="text-xs tracking-[0.35em] text-gray-400">
              JOIN THE MISSION
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">
              Choose your system. Help build Drexel’s next generation of rocket
              hardware.
            </h1>

            <p className="mt-6 max-w-2xl text-gray-300">
              Drexel Rocket Team is organized into focused subteams developing
              propulsion systems, ground infrastructure, avionics, manufacturing
              workflows, operations, and advanced engine technology.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#subteams"
                className="rounded-2xl bg-[#00539B] px-5 py-2.5 text-sm font-medium text-white shadow-[0_0_28px_rgba(0,83,155,0.35)] hover:bg-[#003f79]"
              >
                Explore Subteams
              </a>

              <a
                href="/apply"
                className="rounded-2xl border border-[#00539B]/50 px-5 py-2.5 text-sm font-medium hover:bg-[#00539B]/10"
              >
                Apply Today
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PIPELINE */}
      <section className="border-b border-white/5 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-4 md:grid-cols-4">
            {steps.map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.35 }}
                className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_0_30px_rgba(0,83,155,0.08)]"
              >
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full border border-[#00539B]/50 bg-[#00539B]/15 text-sm font-semibold text-white">
                  {i + 1}
                </div>

                <div className="text-lg font-medium text-white">{step}</div>

                {i < steps.length - 1 && (
                  <div className="absolute right-[-18px] top-1/2 hidden h-px w-9 bg-white/20 md:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SUBTEAMS */}
      <section id="subteams" className="relative border-b border-white/5 bg-zinc-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_45%_at_50%_0%,rgba(0,83,155,0.18)_0%,transparent_65%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-xs tracking-[0.3em] text-gray-500">
              ACTIVE GROUPS
            </p>

            <h2 className="mt-3 text-2xl font-semibold text-[#00539B] md:text-3xl">
              Subteams
            </h2>

            <p className="mt-4 text-gray-300">
              Apply directly to a subteam or submit a general application if you
              are not sure where you fit yet.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {subteams.map((team, i) => (
              <motion.a
                key={team.name}
                href={`/apply?team=${encodeURIComponent(team.name)}`}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                whileHover={{ y: -8, scale: 1.018 }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur transition hover:border-[#00539B]/75 hover:bg-[#00539B]/10 hover:shadow-[0_0_55px_rgba(0,83,155,0.28)]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00539B]/80 to-transparent opacity-0 transition group-hover:opacity-100" />

                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#00539B]/0 blur-3xl transition group-hover:bg-[#00539B]/25" />

                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      {team.name}
                    </h3>

                    <p className="mt-2 text-sm text-gray-400">
                      Lead: {team.lead}
                    </p>
                  </div>

                  <div className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-300 transition group-hover:border-[#00539B]/60 group-hover:bg-[#00539B]/15 group-hover:text-white">
                    Apply →
                  </div>
                </div>

                <p className="relative mt-5 text-sm leading-6 text-gray-300">
                  {team.description}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-black">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_100%,rgba(0,83,155,0.28)_0%,transparent_65%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#07294D]/60 via-white/[0.04] to-black p-8 shadow-[0_0_60px_rgba(0,83,155,0.16)] md:p-10"
          >
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
                className="inline-flex rounded-2xl bg-[#00539B] px-6 py-3 text-sm font-medium text-white shadow-[0_0_30px_rgba(0,83,155,0.35)] hover:bg-[#003f79]"
              >
                Apply Today
              </a>

              {/*
              <a
                href="/open-positions"
                className="inline-flex rounded-2xl border border-white/10 px-6 py-3 text-sm font-medium text-gray-300 hover:bg-white/5"
              >
                View Open Positions
              </a>
              */}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}