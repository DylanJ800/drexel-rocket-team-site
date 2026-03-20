"use client";

import { useEffect, useState } from "react";

const staticFireDate = new Date("2026-03-28T12:00:00"); // change this

function formatCountdown(target: Date) {
  const diff = target.getTime() - Date.now();

  if (diff <= 0) return "T-00:00:00:00";

  const totalSeconds = Math.floor(diff / 1000);

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `T-${String(days).padStart(2, "0")}:${String(hours).padStart(
    2,
    "0"
  )}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export default function CountdownBadge() {
  const [countdown, setCountdown] = useState(formatCountdown(staticFireDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(formatCountdown(staticFireDate));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <a
      href="/countdown"
      className="inline-flex items-center gap-3 rounded-md border border-white/10 bg-black/40 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-gray-200 backdrop-blur transition hover:border-white/20 hover:bg-white/5"
    >
      <span className="text-gray-400">Static Fire</span>
      <span className="font-mono text-white">{countdown}</span>
    </a>
  );
}