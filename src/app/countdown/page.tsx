"use client";

import { useEffect, useMemo, useState } from "react";

type StatusItem = {
  label: string;
  state: "GO" | "NO-GO" | "HOLD";
  note?: string;
};

type TimelineItem = {
  time: string;
  event: string;
};

const staticFireDate = new Date("2026-03-28T12:00:00");

const statusItems: StatusItem[] = [
  { label: "Range", state: "GO", note: "Range is green" },
  { label: "Weather", state: "GO", note: "Within limits" },
  { label: "GSE", state: "GO", note: "Ready" },
  { label: "GNC", state: "HOLD", note: "Pending DDR" },
  { label: "Stage 0", state: "GO", note: "Ready" },
  { label: "Propulsion", state: "GO", note: "Ready" },
  { label: "Operations", state: "GO", note: "Ready" },
];

const timeline: TimelineItem[] = [
  { time: "00:30:00", event: "Go / No-Go poll opens" },
  { time: "00:20:00", event: "Range verified clear" },
  { time: "00:15:00", event: "Ground systems final verification" },
  { time: "00:10:00", event: "Telemetry and controls final check" },
  { time: "00:07:00", event: "Operator Sequence Start" },
  { time: "00:05:00", event: "NOx load start" },
  { time: "00:04:00", event: "NOx load complete"},
  { time: "00:02:00", event: "Final Go / No-Go call" },
  { time: "00:01:00", event: "Operator arm ignition system"},
  { time: "00:00:10", event: "Ignition sequence start" },
  { time: "00:00:00", event: "STATIC FIRE" },
  { time: "+ 00:00:05", event: "Shutdown"},
  { time: "+ 00:01:00", event: "Safing sequencing start"}
];

function formatTime(ms: number) {
  if (ms <= 0) {
    return { days: "00", hours: "00", minutes: "00", seconds: "00" };
  }

  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
}

export default function CountdownPage() {
  const [timeLeft, setTimeLeft] = useState<number>(
    staticFireDate.getTime() - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(staticFireDate.getTime() - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const countdown = useMemo(() => formatTime(timeLeft), [timeLeft]);

  return (
    <div className="min-h-screen bg-black text-gray-100 selection:bg-white/20">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-black/70 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="font-semibold tracking-widest text-sm text-[#07294D]">
            DREXEL ROCKET TEAM
          </a>

          <ul className="hidden gap-8 md:flex text-sm text-gray-300">
            <li><a className="hover:text-[#00539B]" href="/">Home</a></li>
            <li><a className="hover:text-[#00539B]" href="/positions">Positions</a></li>
            <li><a className="hover:text-[#00539B]" href="/countdown">Countdown</a></li>
          </ul>

          <a
            href="/positions"
            className="rounded-xl border border-white/10 bg-[#07294D]/40 px-4 py-2 text-sm hover:bg-[#07294D]/60"
          >
            Open Positions
          </a>
        </nav>
      </header>

      {/* HERO / COUNTDOWN */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('/countdown/staticfire-bg.jpg')", // <-- put your image here
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/75 to-black" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(0,83,155,0.35)_0%,transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <p className="text-xs tracking-[0.3em] text-gray-400">
            STATIC FIRE CAMPAIGN
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
            Countdown to <span className="text-white">Ambition One Static Fire</span>
          </h1>
          <p className="mt-4 max-w-2xl text-gray-300">
            Real-time test readiness overview, Go / No-Go status board, and event timeline for the upcoming static fire.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { label: "Days", value: countdown.days },
              { label: "Hours", value: countdown.hours },
              { label: "Minutes", value: countdown.minutes },
              { label: "Seconds", value: countdown.seconds },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-3xl border border-white/10 bg-white/5 px-6 py-8 backdrop-blur"
              >
                <div className="text-4xl font-semibold md:text-5xl text-white">
                  {item.value}
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.25em] text-gray-400">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GO / NO-GO */}
      <section className="border-b border-white/5 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-2xl font-semibold md:text-3xl text-[#00539B]">
            Go / No-Go Status
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-gray-300">
            Live readiness board for major test disciplines. Green indicates Go, red indicates No-Go, yellow indicates Hold.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {statusItems.map((item, i) => {
              const isGo = item.state === "GO";
              const isNoGo = item.state === "NO-GO";
              const isHold = item.state === "HOLD";

              return (
                <div
                  key={i}
                  className={`rounded-3xl border p-6 transition ${
                    isGo
                      ? "border-emerald-500/30 bg-emerald-500/10 shadow-[0_0_30px_rgba(34,197,94,0.12)]"
                      : isNoGo
                      ? "border-red-500/30 bg-red-500/10 shadow-[0_0_30px_rgba(239,68,68,0.10)]"
                      : "border-yellow-500/30 bg-yellow-500/10 shadow-[0_0_30px_rgba(234,179,8,0.10)]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-lg font-medium text-white">{item.label}</div>
                    <div
                      className={`rounded-full px-3 py-1 text-xs font-semibold tracking-wider ${
                        isGo
                          ? "bg-emerald-500/20 text-emerald-300"
                          : isNoGo
                          ? "bg-red-500/20 text-red-300"
                          : "bg-yellow-500/20 text-yellow-200"
                      }`}
                    >
                      {item.state}
                    </div>
                  </div>
                  {item.note && (
                    <p className="mt-3 text-sm text-gray-300">{item.note}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-2xl font-semibold md:text-3xl text-white">
            COUNTDOWN
          </h2>

          <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">
            <div className="grid grid-cols-12 border-b border-white/10 px-4 py-4 text-xs uppercase tracking-[0.2em] text-gray-500 md:px-6">
              <div className="col-span-3 md:col-span-2">HR/MIN/SEC</div>
              <div className="col-span-9 md:col-span-10">Event</div>
            </div>

            <div className="divide-y divide-white/10">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className="grid grid-cols-12 px-4 py-6 text-sm md:px-6"
                >
                  <div className="col-span-3 md:col-span-2 text-gray-300 font-mono">
                    {item.time}
                  </div>
                  <div className="col-span-9 md:col-span-10 text-gray-200 uppercase tracking-wide">
                    {item.event}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}