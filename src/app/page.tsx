
export default function AVXLanding() {
  return (
    <div className="min-h-screen bg-black text-gray-100 selection:bg-white/20">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-black/70 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="font-semibold tracking-widest text-sm text-[#07294D]">DREXEL ROCKET TEAM</a>
          <ul className="hidden gap-8 md:flex text-sm text-gray-300">
            <li><a className="hover:text-[#00539B]" href="#mission">Mission</a></li>
            <li><a className="hover:text-[#00539B]" href="#development">Development</a></li>
            <li><a className="hover:text-[#00539B]" href="#team">Team</a></li>
            <li><a className="hover:text-[#00539B]" href="#sponsors">Sponsors</a></li>
            <li><a className="hover:text-[#00539B]" href="#contact">Contact</a></li>
          </ul>
          <a href="#contact" className="rounded-xl border border-white/10 bg-[#07294D]/40 px-4 py-2 text-sm hover:bg-[#07294D]/60">Join Us</a>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(0,83,155,0.3)_0%,transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_50%_at_80%_10%,rgba(255,255,255,0.08)_0%,transparent_60%)]" />
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:py-32 lg:grid-cols-12 lg:items-center">
          <div className="relative z-10 space-y-6 lg:col-span-6">
            <p className="text-xs tracking-[0.3em] text-gray-400">STUDENT-LAUNCHED • ENGINEERED TO FLY</p>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              Building the Future of <span className="text-white">Student Launch</span>
            </h1>
            <p className="max-w-xl text-gray-300">We’re a student team designing and testing liquid rocket engines and launch systems. From pressure‑fed V1 to pump‑fed V2, we iterate fast, test often, and fly higher.</p>
            <div className="flex flex-wrap gap-3">
              <a href="#development" className="rounded-2xl bg-[#00539B] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#003f79]">Explore Development</a>
              <a href="#contact" className="rounded-2xl border border-[#00539B]/50 px-5 py-2.5 text-sm font-medium hover:bg-[#00539B]/10">Join the Team</a>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section id="mission" className="border-t border-white/5 bg-gradient-to-b from-black to-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-semibold md:text-3xl text-[#00539B]">Mission Statement</h2>
              <p className="mt-4 text-gray-300">The Drexel Rocket Team is a student-led initiative dedicated to designing and developing the most advanced collegiate rocket technology. By advancing liquid propulsion systems, we aim to push the boundaries of what is possible at the university level and ultimately become the first school to cross the Kármán line using liquid propulsion.</p>
              <p className="mt-4 text-gray-300">In addition to developing flight hardware, the Drexel Rocket Team emphasizes research and development practices aligned with industry standards, allowing students to gain valuable, hands-on experience that directly translates to professional careers. Our program exposes members to cutting-edge R&D methodologies, preparing them to contribute to some of the most advanced engineering efforts in the aerospace industry.</p>
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {title:"Safety-first ops",body:"Industry-style checklists, P&IDs, hazard reviews, and LOTO for every test."},
                  {title:"Rapid iteration",body:"We prototype in-house, 3D-print fixtures, and instrument everything."},
                  {title:"Advanced liquid propulsion",body:"Focused on developing the most advanced collegiate liquid rocket engines, utilizing pressure-fed and pump-fed architectures with real data-driven iteration."},
                ].map((c, i) => (
                  <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="text-sm font-medium text-[#00539B]">{c.title}</div>
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
          <h2 className="text-2xl font-semibold md:text-3xl text-[#00539B]">Engines in Development</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {[
              {name:"V1 — Pressure-Fed System", details:"V1 is a pressure-fed, bi-propellant engine utilizing E85 and Nitrous Oxide (N2O). Designed for reliability and modular testing, V1 serves as a platform to validate plumbing, controls, and ignition systems."},
              {name:"V2 — Pump-Fed Expander Cycle", details:"V2 will be a pump-fed engine running on an expander cycle with regenerative cooling and film cooling. It targets between 1,000 and 3,000 lbf of thrust, making it one of the most ambitious student-built liquid engines."},
            ].map((d, i) => (
              <div key={i} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-medium text-white">{d.name}</h3>
                <p className="mt-2 text-sm text-gray-300">{d.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="border-t border-white/5 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-2xl font-semibold md:text-3xl text-[#00539B]">Leadership</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {name:"Dylan Joseph", role:"President & Chief Engineer", blurb:"Leads all architecture & R&D. Oversees all development and testing phases."},
              {name:"Quiency Daniels", role:"Lead Electrical/Avionics Engineer", blurb:"Responsible for avionics, electrical systems integration, and control software development."},
              {name:"William Richards", role:"Lead Propulsion Engineer", blurb:"Focuses on structural design, propulsion engineering, mechanical integration, and engine assembly."},
              {name:"Harnoor Singh", role:"Lead Engineer", blurb:"Supports propulsion development and analysis."},
              {name:"James Holly", role:"Operations Lead", blurb:"Will coordinate logistics, documentation, and test operations as the team grows."},
            ].map((m, i) => (
              <div key={i} className="rounded-3xl border border-white/10 bg-white/5 p-6">
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
            <h2 className="text-2xl font-semibold md:text-3xl text-[#00539B]">Sponsors & Partners</h2>
            <a href="#" className="text-sm text-gray-400 hover:text-[#00539B]">Sponsor us →</a>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {Array.from({length: 8}).map((_, i) => (
              <div key={i} className="flex h-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xs text-gray-400">Logo</div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-y border-white/5 bg-gradient-to-b from-zinc-950 to-black">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="text-2xl font-semibold md:text-3xl text-[#00539B]">Join the Team</h2>
          <p className="mt-2 text-sm text-gray-300">We recruit builders across disciplines. Tell us what you want to own, and we’ll hand you a problem worth solving.</p>
          <form className="mt-8 grid gap-4 md:grid-cols-2">
            <input className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00539B]/40 md:col-span-1" placeholder="Full name" />
            <input className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00539B]/40 md:col-span-1" placeholder="Email" />
            <input className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00539B]/40 md:col-span-2" placeholder="Role of interest (e.g., Propulsion)" />
            <textarea className="min-h-[120px] rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00539B]/40 md:col-span-2" placeholder="What do you want to build?" />
            <button type="button" className="md:col-span-2 rounded-2xl bg-[#00539B] px-5 py-3 text-sm font-medium text-white hover:bg-[#003f79]">Submit</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="">
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
