import Link from "next/link";
import Navbar from "@/Components/Navbar";

export default function SponsorsPage() {
  const sponsors = [
    { name: "Synnax", logo: "/sponsors/synnax.jpg", website: "https://www.synnaxlabs.com/" },
    { name: "Altium", logo: "/sponsors/altium.png", website: "https://www.altium.com/" },
    { name: "CFTurbo", logo: "/sponsors/CF.png", website: "https://cfturbo.com/" },
    { name: "Lockheed Martin", logo: "/sponsors/Lockheed.jpg", website: "https://www.lockheedmartin.com/en-us/index.html" },
    { name: "Ansys", logo: "/sponsors/ansys.jpg", website: "https://ansys.synopsys.com/" },
    { name: "SECO SEALS", logo: "/sponsors/seco2.png", website: "https://secoseals.com/" },
  ];

  const partnershipBenefits = [
    { title: "Advancing Our Engineering", body: "Sponsor support gives our students the resources to take on challenging work across liquid propulsion, turbomachinery, controls, test infrastructure, and integrated launch systems." },
    { title: "Supporting Student Engineers", body: "Your support gives students the opportunity to take engineering beyond the classroom—designing, building, testing, learning from setbacks, and turning ambitious ideas into real hardware." },
    { title: "Making Our Work Possible", body: "Every contribution can make a direct difference, helping provide the materials, manufacturing, testing capability, software, equipment, and other resources our projects depend on." },
    { title: "Growing With Us", body: "Long-term support helps DRT build capabilities that can be passed from one generation of students to the next as the team takes on increasingly ambitious projects." },
  ];

  const programs = [
    { name: "Ambition One", type: "Pressure-Fed Engine", body: "Our first liquid bipropellant engine program established the team's foundation in propulsion development and integrated static-fire operations.", href: "/ambition-one" },
    { name: "Dragon One", type: "Pump-Fed Engine", body: "Our next-generation propulsion program expands into turbomachinery, regenerative cooling, and higher-performance liquid engine development.", href: "/dragon-one" },
    { name: "Chariot", type: "Launch Vehicle", body: "Our long-term vehicle program is intended to carry the capabilities developed through our propulsion and ground-system programs toward flight.", href: "/chariot" },
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100 selection:bg-white/20">
      <Navbar />
      <main>
        <section className="relative overflow-hidden border-b border-white/5 bg-black">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_80%_at_80%_20%,rgba(0,83,155,0.22)_0%,transparent_60%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(9,9,11,0.8))]" />
          <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
            <p className="font-[family-name:var(--font-roboto-condensed)] text-xs font-semibold uppercase tracking-[0.32em] text-[#5e9bd3]">Sponsorship</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">Help us turn ambitious ideas into reality.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">The work we do would not be possible without the organizations that choose to support student engineering. We are incredibly grateful to the sponsors who provide the resources, tools, expertise, and opportunities that allow Drexel Rocket Team to keep learning, building, and pushing toward what comes next.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/sponsors/inquiry" className="rounded-2xl bg-[#00539B] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#0068c4]">Become a Sponsor</Link>
              <a href="#current-partners" className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-medium text-gray-200 transition hover:border-[#00539B]/60 hover:bg-[#00539B]/10">Meet Our Sponsors</a>
            </div>
          </div>
        </section>

        <section id="current-partners" className="border-b border-white/5 bg-zinc-950">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Our Sponsors</p>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Thank you for believing in what we&apos;re building.</h2>
              <p className="mt-4 text-gray-400">We are proud to recognize the organizations whose support helps make our projects possible. Their contributions give our students opportunities to learn through real engineering challenges, and we are sincerely grateful to have them behind us.</p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {sponsors.map((s) => (
                <a
                  key={s.name}
                  href={s.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${s.name} website`}
                  className="group relative flex h-40 items-center justify-center overflow-hidden rounded-3xl border border-[#00539B]/25 bg-white/[0.04] p-7 shadow-[0_0_34px_rgba(0,83,155,0.12)] transition duration-300 hover:-translate-y-1 hover:border-[#00539B]/75 hover:bg-white/[0.075] hover:shadow-[0_0_58px_rgba(0,83,155,0.30)]"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,83,155,0.12),transparent_70%)] opacity-80 transition duration-300 group-hover:opacity-100" />
                  <img src={s.logo} alt={`${s.name} logo`} className="relative z-10 max-h-20 max-w-[80%] object-contain transition duration-300 group-hover:scale-[1.03]" />
                  <div className="pointer-events-none absolute bottom-3 right-4 z-20 translate-y-1 font-[family-name:var(--font-roboto-condensed)] text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7fb8ff] opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    Visit Sponsor ↗
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/5 bg-black">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Your Impact</p>
                <h2 className="mt-3 text-3xl font-semibold text-[#00539B] md:text-4xl">Every sponsor becomes part of the work.</h2>
                <p className="mt-5 text-gray-300">Sponsorship is more than a name on our website. It gives our students the ability to design, manufacture, instrument, and test hardware that would otherwise be out of reach. We value every organization that chooses to be part of that journey with us.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
                {partnershipBenefits.map((benefit, i) => (
                  <div key={benefit.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#00539B]/50 hover:bg-white/[0.07]">
                    <div className="text-xs font-medium tracking-[0.2em] text-gray-600">0{i + 1}</div>
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
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500">What Your Support Enables</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-white md:text-4xl">Helping our students take the next step, project by project.</h2>
            <p className="mt-4 max-w-3xl text-gray-400">Each program builds on the lessons and capabilities of the one before it. Sponsor support helps us continue that progression and gives students the chance to take on challenges at an increasingly advanced level.</p>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {programs.map((program, i) => (
                <Link key={program.name} href={program.href} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black p-7 transition duration-300 hover:-translate-y-1 hover:border-[#00539B]/60">
                  <div className="absolute right-6 top-5 text-5xl font-semibold text-white/[0.04]">0{i + 1}</div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[#5e9bd3]">{program.type}</p>
                  <h3 className="mt-4 text-2xl font-medium text-white">{program.name}</h3>
                  <p className="mt-4 text-sm leading-6 text-gray-400">{program.body}</p>
                  <div className="mt-8 text-sm font-medium text-[#5e9bd3] transition group-hover:text-white">Explore program →</div>
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
                <p className="text-xs uppercase tracking-[0.3em] text-[#7fb8ff]">Join Us</p>
                <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">We&apos;d be honored to have your support.</h2>
                <p className="mt-5 max-w-2xl text-gray-300">Whether through funding, hardware, software, manufacturing, technical expertise, or another form of support, every sponsorship helps create opportunities for our students to learn by building. Thank you for considering becoming part of Drexel Rocket Team&apos;s journey.</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/sponsors/inquiry" className="rounded-2xl bg-[#00539B] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#0068c4]">Become a Sponsor</Link>
                  <Link href="/" className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-medium text-gray-200 transition hover:bg-white/5">Explore DRT</Link>
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
            <div className="flex gap-6"><a className="hover:text-[#00539B]" href="#">GitHub</a><a className="hover:text-[#00539B]" href="#">YouTube</a><a className="hover:text-[#00539B]" href="#">Instagram</a></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
