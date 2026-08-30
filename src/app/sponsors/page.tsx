import Link from "next/link";
import Navbar from "@/Components/Navbar";

export default function SponsorsPage() {
  const sponsors = [
    { name: "Synnax", logo: "/sponsors/synnax.jpg" },
    { name: "Altium", logo: "/sponsors/altium.png" },
    { name: "CFTurbo", logo: "/sponsors/CF.png" },
  ];

  const partnershipBenefits = [
    {
      title: "Advanced Engineering",
      body: "Support student-led development spanning liquid propulsion, turbomachinery, controls, test infrastructure, and integrated launch systems.",
    },
    {
      title: "Engineering Talent",
      body: "Connect your organization with students gaining hands-on experience across mechanical, electrical, software, manufacturing, and systems engineering.",
    },
    {
      title: "Visible Impact",
      body: "Partner support is translated directly into hardware, testing capability, manufacturing access, engineering tools, and student development.",
    },
    {
      title: "Long-Term Development",
      body: "Help build a sustained collegiate R&D program progressing from engine testing toward increasingly ambitious propulsion and launch systems.",
    },
  ];

  const programs = [
    {
      name: "Ambition One",
      type: "Pressure-Fed Engine",
      body: "Our first liquid bipropellant engine program established the team's foundation in propulsion development and integrated static-fire operations.",
      href: "/ambition-one",
    },
    {
      name: "Dragon One",
      type: "Pump-Fed Engine",
      body: "Our next-generation propulsion program expands into turbomachinery, regenerative cooling, and higher-performance liquid engine development.",
      href: "/dragon-one",
    },
    {
      name: "Chariot",
      type: "Launch Vehicle",
      body: "Our long-term vehicle program is intended to carry the capabilities developed through our propulsion and ground-system programs toward flight.",
      href: "/chariot",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100 selection:bg-white/20">
      <Navbar />

      <main>
        <section className="relative overflow-hidden border-b border-white/5 bg-black">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_80%_at_80%_20%,rgba(0,83,155,0.22)_0%,transparent_60%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(9,9,11,0.8))]" />

          <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
            <p className="font-[family-name:var(--font-roboto-condensed)] text-xs font-semibold uppercase tracking-[0.32em] text-[#5e9bd3]">
              Industry Partnership
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
              Partner with the next generation of aerospace engineers.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              Drexel Rocket Team partners with organizations that want to help students design, build, and test advanced collegiate rocket technology while developing the engineering talent that will shape the future of aerospace.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/sponsors/inquiry"
                className="rounded-2xl bg-[#00539B] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#0068c4]"
              >
                Become a Sponsor
              </Link>
              <a
                href="#current-partners"
                className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-medium text-gray-200 transition hover:border-[#00539B]/60 hover:bg-[#00539B]/10"
              >
                Meet Our Partners
              </a>
            </div>
          </div>
        </section>

        <section id="current-partners" className="border-b border-white/5 bg-zinc-950">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Current Partners</p>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
                Organizations helping us build what comes next.
              </h2>
              <p className="mt-4 text-gray-400">
                Our partners provide the tools, technology, resources, and support that make ambitious student engineering possible.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {sponsors.map((s) => (
                <div
                  key={s.name}
                  className="group flex h-40 items-center justify-center rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#00539B]/50 hover:bg-white/[0.07] hover:shadow-[0_0_45px_rgba(0,83,155,0.14)]"
                >
                  <img
                    src={s.logo}
                    alt={`${s.name} logo`}
                    className="max-h-20 max-w-[80%] object-contain transition duration-300 group-hover:scale-[1.03]"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/5 bg-black">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Why DRT</p>
                <h2 className="mt-3 text-3xl font-semibold text-[#00539B] md:text-4xl">
                  More than a logo on a website.
                </h2>
                <p className="mt-5 text-gray-300">
                  Sponsorship directly expands what our students can design, manufacture, instrument, and test. Every partnership helps turn ambitious engineering concepts into real hardware and real experience.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
                {partnershipBenefits.map((benefit, i) => (
                  <div
                    key={benefit.title}
                    className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#00539B]/50 hover:bg-white/[0.07]"
                  >
                    <div className="text-xs font-medium tracking-[0.2em] text-gray-600">
                      0{i + 1}
                    </div>
                    <h3 className="mt-5 text-lg font-medium text-white">{benefit.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-gray-400">{benefit.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/5 bg-zinc-950">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Program Impact</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-white md:text-4xl">
              Supporting a development path from static fire to flight.
            </h2>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {programs.map((program, i) => (
                <Link
                  key={program.name}
                  href={program.href}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black p-7 transition duration-300 hover:-translate-y-1 hover:border-[#00539B]/60"
                >
                  <div className="absolute right-6 top-5 text-5xl font-semibold text-white/[0.04]">
                    0{i + 1}
                  </div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[#5e9bd3]">{program.type}</p>
                  <h3 className="mt-4 text-2xl font-medium text-white">{program.name}</h3>
                  <p className="mt-4 text-sm leading-6 text-gray-400">{program.body}</p>
                  <div className="mt-8 text-sm font-medium text-[#5e9bd3] transition group-hover:text-white">
                    Explore program →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-black">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="relative overflow-hidden rounded-[2rem] border border-[#00539B]/30 bg-[#00539B]/10 px-7 py-12 md:px-12 md:py-16">
              <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-[#00539B]/20 blur-3xl" />
              <div className="relative max-w-3xl">
                <p className="text-xs uppercase tracking-[0.3em] text-[#7fb8ff]">Build With Us</p>
                <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
                  Help us build what comes next.
                </h2>
                <p className="mt-5 max-w-2xl text-gray-300">
                  We welcome financial, hardware, software, manufacturing, technical, and in-kind partnerships from organizations interested in advancing hands-on aerospace engineering education.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/sponsors/inquiry"
                    className="rounded-2xl bg-[#00539B] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#0068c4]"
                  >
                    Become a Sponsor
                  </Link>
                  <Link
                    href="/"
                    className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-medium text-gray-200 transition hover:bg-white/5"
                  >
                    Explore DRT
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-gray-400">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p>© {new Date().getFullYear()} Drexel Rocket Team. All rights reserved.</p>
            <div className="flex gap-6">
              <a className="hover:text-[#00539B]" href="#">GitHub</a>
              <a className="hover:text-[#00539B]" href="#">YouTube</a>
              <a className="hover:text-[#00539B]" href="#">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
