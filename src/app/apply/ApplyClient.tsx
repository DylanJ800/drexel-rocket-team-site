"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function ApplyClient() {
  const params = useSearchParams();
  const preselected = useMemo(() => params.get("position") ?? "", [params]);

  const [position, setPosition] = useState(preselected);
  const [name, setName] = useState("");
  const [major, setMajor] = useState("");
  const [classYear, setClassYear] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-black text-gray-100 selection:bg-white/20">
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

      <section className="border-t border-white/5 bg-gradient-to-b from-black to-zinc-950">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h1 className="text-3xl md:text-4xl font-semibold text-[#00539B]">
            Application
          </h1>
          <p className="mt-3 text-sm text-gray-300">
            Fill this out and we’ll follow up. If you’re applying for a specific role, select it below.
          </p>

          {submitted ? (
            <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-lg font-medium text-white">Submitted ✅</div>
              <p className="mt-2 text-sm text-gray-300">
                Your application is ready — next step is wiring it to a real inbox/spreadsheet.
              </p>
              <a className="mt-4 inline-block text-sm text-[#00539B] hover:underline" href="/positions">
                Back to Positions
              </a>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-10 grid gap-4 md:grid-cols-2">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00539B]/40"
                placeholder="Full name"
                required
              />

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00539B]/40"
                placeholder="Email"
                type="email"
                required
              />

              <input
                value={major}
                onChange={(e) => setMajor(e.target.value)}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00539B]/40"
                placeholder="Major"
              />

              <input
                value={classYear}
                onChange={(e) => setClassYear(e.target.value)}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00539B]/40"
                placeholder="Class year (e.g., 2027)"
              />

              <select
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                className="md:col-span-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00539B]/40"
              >
                <option value="">Select a position (optional)</option>
                <option value="Propulsion Engineer (Combustion Devices)">Propulsion Engineer (Combustion Devices)</option>
              </select>

              <input
                className="md:col-span-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-200 file:mr-4 file:rounded-lg file:border-0 file:bg-[#00539B]/20 file:px-4 file:py-2 file:text-sm file:text-white hover:file:bg-[#00539B]/30"
                type="file"
                multiple
              />

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="md:col-span-2 min-h-[140px] rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00539B]/40"
                placeholder="Tell us what you want to build, your experience, and links (GitHub/LinkedIn/portfolio)."
              />

              <button
                type="submit"
                className="md:col-span-2 rounded-2xl bg-[#00539B] px-5 py-3 text-sm font-medium text-white hover:bg-[#003f79]"
              >
                Submit Application
              </button>

              <p className="md:col-span-2 text-xs text-gray-500">
                Note: This form is frontend-only right now; it doesn’t store uploads yet.
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
