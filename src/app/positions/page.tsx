"use client";

import { useRouter } from "next/navigation";

type Position = {
  title: string;
  discipline: string;
  program: string; // Ambition 1 / Dragon 1 / Aegis / General
  id: string;
};

const POSITIONS: Position[] = [
  {
    title: "Propulsion Engineer (Combustion Devices)",
    discipline: "PROP",
    program: "Ambition One",
    id: "prop-combustion-devices",
  },
  {
    title: "Propulsion Engineer",
    discipline: "PROP",
    program: "Dragon One",
    id: "prop-combustion-devices1",
  },
  {
    title: "UI Engineer",
    discipline: "SWE",
    program: "Ageis",
    id: "prop-combustion-devices2",
  },
    {
    title: "Stage 0 Engineer (Test Stand)",
    discipline: "MECH",
    program: "Ambition One",
    id: "prop-combustion-devices3",
  },
  
  // Add more here:
  // { title: "Avionics Engineer (Flight Computer)", discipline: "AVX", id: "avx-flight-computer" },
];

export default function PositionsPage() {
  const router = useRouter();

  function goApply(p: Position) {
    router.push(`/apply?position=${encodeURIComponent(p.title)}`);
  }

  return (
    <div className="min-h-screen bg-black text-gray-100 selection:bg-white/20">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-black/70 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="font-semibold tracking-widest text-sm text-[#07294D]">
            DREXEL ROCKET TEAM
          </a>

          <ul className="hidden gap-8 md:flex text-sm text-gray-300">
            <li><a className="hover:text-[#00539B]" href="/#mission">Mission</a></li>
            <li><a className="hover:text-[#00539B]" href="/#development">Development</a></li>
            <li><a className="hover:text-[#00539B]" href="/#team">Team</a></li>
            <li><a className="hover:text-[#00539B]" href="/#sponsors">Sponsors</a></li>
            <li><a className="hover:text-[#00539B]" href="/#contact">Contact</a></li>
          </ul>

          <a
            href="/positions"
            className="rounded-xl border border-white/10 bg-[#07294D]/40 px-4 py-2 text-sm hover:bg-[#07294D]/60"
          >
            Open Positions
          </a>
        </nav>
      </header>

      {/* CONTENT */}
      <section className="border-t border-white/5 bg-gradient-to-b from-black to-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h1 className="text-3xl md:text-4xl font-semibold text-[#00539B]">
            Positions
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-gray-300">
            We recruit builders across disciplines. Define your mark today.
            Currently Front End Only -- For positions please email dsj53@drexel.edu
          </p>

          <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <div className="grid grid-cols-12 gap-4 border-b border-white/10 px-6 py-4 text-xs font-medium tracking-wider text-gray-400">
                <div className="col-span-7 md:col-span-7">Title</div>
                <div className="col-span-3 md:col-span-3">Program</div>
                <div className="col-span-2 md:col-span-2 text-right">Discipline</div>
            </div>


            <div className="divide-y divide-white/10">
              {POSITIONS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => goApply(p)}
                  className="w-full text-left grid grid-cols-12 gap-4 px-6 py-5 hover:bg-white/5 transition"
                >
                 <div className="col-span-7 md:col-span-7 text-sm text-white">
                    {p.title}
                    <div className="mt-1 text-xs text-gray-400">Click to apply →</div>
                </div>

                <div className="col-span-3 md:col-span-3">
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-200">
                        {p.program}
                    </span>
                </div>

                <div className="col-span-2 md:col-span-2 text-right">
                    <span className="inline-flex items-center rounded-full border border-[#00539B]/40 bg-[#00539B]/10 px-3 py-1 text-xs text-[#7bb7ff]">
                        {p.discipline}
                    </span>
                </div>

                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            Prefer a general application?{" "}
            <a className="text-[#00539B] hover:underline" href="/apply">
              Apply here
            </a>
            .
          </div>
        </div>
      </section>
    </div>
  );
}
