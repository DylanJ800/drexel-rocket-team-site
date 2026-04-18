import Link from "next/link";
import Navbar from "@/Components/Navbar";

export default function AVXLanding() {
  const sponsors = [{ name: "Synnax", logo: "/sponsors/synnax.png" }];

  const developmentPrograms = [
    {
      name: "Ambition One",
      subtitle: "Pressure-Fed System",
      details:
        "Ambition One is a pressure-fed, bi-propellant engine utilizing E85 and Nitrous Oxide. It serves as a platform to validate plumbing, controls, ignition systems, and campaign operations through real testing.",
      href: "/ambition-one",
    },
    {
      name: "Dragon One",
      subtitle: "Pump-Fed Expander Cycle",
      details:
        "Dragon One is our next-generation pump-fed engine architecture focused on regenerative cooling, film cooling, and higher-performance collegiate liquid propulsion development.",
      href: "/dragon-one",
    },
    {
      name: "Condor",
      subtitle: "Launch Vehicle Program",
      details:
        "VEHICLE_NAME is a future launch vehicle concept planned as part of the team’s long-term development roadmap. The program is currently conceptual and is not yet in active development.",
      href: "/Condor",
    },
  ];

  const leadershipPreview = [
    {
      name: "Dylan Joseph",
      role: "President & Chief Engineer",
      blurb:
        "Leads overall architecture, technical direction, and major propulsion development efforts.",
    },
    {
      name: "Quincey Daniel",
      role: "Lead GNC Engineer",
      blurb:
        "Responsible for avionics, controls, software integration, and electrical systems.",
    },
    {
      name: "William Richards",
      role: "Lead Propulsion Engineer",
      blurb:
        "Supports propulsion hardware development, engine systems, and integration efforts.",
    },
    {
        name: "Emily Chen",
        role: "Lead Stage 0 Engineer",
        blurb:
          "Oversees structural design, analysis, and fabrication for test and flight hardware.",
    },
    {
        name: "Dhruv Patel",
        role: "Operations Lead",
        blurb:
          "Manages test campaign planning, general operations, and ",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100 selection:bg-white/20">
      <Navbar />

      {/* HERO */}
      <section id="home" className="relative min-h-[82vh] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover object-[center_60%] opacity-60 [filter:brightness(0.8)_contrast(1.2)]"
        >
          <source src="https://pub-3d662e494b1c45c88a2d801567a6598f.r2.dev/web2.mp4" />
        </video>

        <div className="pointer-events-none absolute inset-0 bg-black/35" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(0,83,155,0.25)_0%,transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.15),rgba(0,0,0,0.55))]" />

        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:py-32 lg:grid-cols-12 lg:items-center">
          <div className="relative z-10 space-y-6 lg:col-span-7">
            <p className="text-xs tracking-[0.3em] text-gray-400">
              STUDENT-LAUNCHED • ENGINEERED TO FLY
            </p>

            <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
              Building the Future of Student Launch
            </h1>

            <p className="max-w-2xl text-lg text-gray-300">
              We’re a student team designing and testing advanced liquid rocket
              engines and launch systems. From pressure-fed validation programs
              to pump-fed development, we iterate fast, test often, and build
              toward increasingly ambitious flight systems.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#development"
                className="rounded-2xl bg-[#00539B] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#003f79]"
              >
                Explore Development
              </a>
              <Link
                href="/team"
                className="rounded-2xl border border-[#00539B]/50 px-5 py-2.5 text-sm font-medium hover:bg-[#00539B]/10"
              >
                Meet the Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section
        id="mission"
        className="border-t border-white/5 bg-gradient-to-b from-black to-zinc-950"
      >
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-xs tracking-[0.3em] text-gray-500">MISSION</p>
              <h2 className="mt-3 text-2xl font-semibold text-[#00539B] md:text-3xl">
                Mission Statement
              </h2>
              <p className="mt-4 text-gray-300">
                The Drexel Rocket Team is a student-led initiative dedicated to
                designing and developing advanced collegiate rocket technology.
                By advancing liquid propulsion systems, we aim to push the
                boundaries of what is possible at the university level and
                ultimately pursue increasingly ambitious launch capability.
              </p>
              <p className="mt-4 text-gray-300">
                In addition to developing flight hardware, the team emphasizes
                research and development practices aligned with industry-style
                engineering workflows, giving students direct experience in
                design, testing, iteration, and operations. Our program exposes 
                members to cutting-edge R&D methodologies, preparing them to 
                contribute to some of the most advanced engineering efforts in 
                the industry.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    title: "Safety-first ops",
                    body: "Industry-style checklists, hazard reviews, and disciplined test operations for every campaign.",
                  },
                  {
                    title: "Rapid iteration",
                    body: "We prototype in-house, instrument everything, and improve hardware through data-driven test cycles.",
                  },
                  {
                    title: "Advanced liquid propulsion",
                    body: "From pressure-fed validation programs to future pump-fed engines, we are building toward advanced collegiate liquid systems.",
                  },
                  {
                    title: "Student-built capability",
                    body: "Members gain hands-on experience in propulsion, controls, structures, operations, and integrated vehicle development.",
                  },
                ].map((c, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <div className="text-sm font-medium text-[#00539B]">
                      {c.title}
                    </div>
                    <div className="mt-1 text-sm text-gray-400">{c.body}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEVELOPMENT */}
      <section id="development" className="border-t border-white/5 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs tracking-[0.3em] text-gray-500">PROGRAMS</p>
          <h2 className="mt-3 text-2xl font-semibold text-[#00539B] md:text-3xl">
            Development Programs
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {developmentPrograms.map((d, i) => (
              <Link
                key={i}
                href={d.href}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-[#00539B]/40 hover:bg-white/[0.07]"
              >
                <div className="text-xs tracking-[0.25em] text-gray-500">
                  {d.subtitle}
                </div>
                <h3 className="mt-3 text-xl font-medium text-white transition group-hover:text-[#7fb8ff]">
                  {d.name}
                </h3>
                <p className="mt-3 text-sm text-gray-300">{d.details}</p>
                <div className="mt-6 text-sm font-medium text-[#00539B]">
                  Explore program →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM PREVIEW */}
      <section className="border-t border-white/5 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs tracking-[0.3em] text-gray-500">
                LEADERSHIP
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-[#00539B] md:text-3xl">
                Team Preview
              </h2>
            </div>

            <Link
              href="/team"
              className="text-sm text-gray-400 transition hover:text-[#00539B]"
            >
              Meet the full team →
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {leadershipPreview.map((m, i) => (
              <div
                key={i}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="text-lg font-medium text-white">{m.name}</div>
                <div className="text-sm text-gray-400">{m.role}</div>
                <p className="mt-3 text-sm text-gray-300">{m.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPONSORS */}
      <section id="sponsors" className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-xs tracking-[0.3em] text-gray-500">
                PARTNERS
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-[#00539B] md:text-3xl">
                Sponsors & Partners
              </h2>
            </div>
            <a href="#" className="text-sm text-gray-400 hover:text-[#00539B]">
              Sponsor us →
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {sponsors.map((s, i) => (
              <div
                key={i}
                className="flex h-24 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <img
                  src={s.logo}
                  alt={s.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-gray-400">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p>© {new Date().getFullYear()} Drexel Rocket Team. All rights reserved.</p>
            <div className="flex gap-6">
              <a className="hover:text-[#00539B]" href="#">
                GitHub
              </a>
              <a className="hover:text-[#00539B]" href="#">
                YouTube
              </a>
              <a className="hover:text-[#00539B]" href="#">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}