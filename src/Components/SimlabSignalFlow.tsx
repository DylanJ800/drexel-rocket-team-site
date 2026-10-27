"use client";

import { useEffect, useState } from "react";

const frames = [
  { pressure: 0, valve: "CLOSED", state: "READY" },
  { pressure: 0, valve: "OPEN", state: "START" },
  { pressure: 85, valve: "OPEN", state: "START" },
  { pressure: 210, valve: "OPEN", state: "RUN" },
  { pressure: 300, valve: "OPEN", state: "RUN" },
  { pressure: 300, valve: "CLOSED", state: "SHUTDOWN" },
  { pressure: 170, valve: "CLOSED", state: "SHUTDOWN" },
  { pressure: 45, valve: "CLOSED", state: "SHUTDOWN" },
  { pressure: 0, valve: "CLOSED", state: "SAFE" },
];

export default function SimlabSignalFlow() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const preference = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    let timer: ReturnType<typeof setInterval> | undefined;

    function updateAnimation() {
      if (timer !== undefined) clearInterval(timer);

      if (!preference.matches) {
        timer = setInterval(() => {
          setFrame((current) => (current + 1) % frames.length);
        }, 1200);
      }
    }

    updateAnimation();
    preference.addEventListener("change", updateAnimation);

    return () => {
      if (timer !== undefined) clearInterval(timer);
      preference.removeEventListener("change", updateAnimation);
    };
  }, []);

  const current = frames[frame];
  const blue = "#80b5ff";
  const amber = "#e8b978";

  return (
    <section
      aria-labelledby="signal-flow"
      className="mx-auto max-w-7xl px-6 py-16"
    >
      <p className="text-xs tracking-[0.25em] text-gray-400">
        INTEGRATION / CONCEPTUAL SIGNAL FLOW
      </p>
      <h2 id="signal-flow" className="mt-3 text-3xl font-semibold">
        Close the loop.
      </h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-gray-400">
        Real controllers command a simulated vehicle. Its response
        returns as sensor measurements, completing the feedback loop.
      </p>

      <div className="simlab-flow mt-8 overflow-hidden rounded-2xl border border-white/10">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 px-5 py-4">
          <span className="text-sm text-gray-300">
            Hardware-in-the-loop
          </span>
          <span className="font-mono text-xs text-blue-300">
            ILLUSTRATIVE SEQUENCE
          </span>
        </div>

        <div className="overflow-x-auto">
          <svg
            viewBox="0 0 900 340"
            role="img"
            aria-label="Illustrative HIL sequence: a controller opens a valve, simulated chamber pressure rises, then the controller closes the valve and pressure falls."
            className="block w-full min-w-[640px]"
          >
            {/* Two logical paths, each representing multiple channels */}
            <g fill="none" strokeWidth="1">
              <path d="M290 140 H610" stroke="#283c55" />
              <path d="M610 215 H290" stroke="#493b2a" />
            </g>

            {/* Moving packets */}
            {[
              {
                path: "M290 140 H610",
                color: blue,
                duration: "1.2s",
              },
              {
                path: "M610 215 H290",
                color: amber,
                duration: "1.2s",
              },
            ].map(({ path, color, duration }) => (
              <g key={path} className="simlab-packet">
                <circle r="10" fill={color} opacity="0.08" />
                <circle r="5" fill={color} opacity="0.2" />
                <circle r="2.5" fill={color} />
                <animateMotion
                  dur={duration}
                  repeatCount="indefinite"
                  path={path}
                />
              </g>
            ))}

            {/* Equipment panels */}
            <g fill="#090c10" stroke="#29313c">
              <rect
                x="35" y="80" width="255" height="190" rx="10"
              />
              <rect
                x="610" y="80" width="255" height="190" rx="10"
              />
              <path d="M35 128 H290 M610 128 H865" />
            </g>

            {/* Connection points */}
            <g fill={blue}>
              <circle cx="290" cy="140" r="3" />
              <circle cx="610" cy="140" r="3" />
            </g>
            <g fill={amber}>
              <circle cx="290" cy="215" r="3" />
              <circle cx="610" cy="215" r="3" />
            </g>

            <g fontFamily="monospace" fontSize="12">
              <g fill="#e2e8f0" fontSize="14">
                <text x="55" y="109">SIMULATION TARGET</text>
                <text x="630" y="109">HIL RACK</text>
              </g>

              <g fill="#8c99aa">
                <text x="55" y="155">CHAMBER PRESSURE</text>
                <text x="55" y="220">VIRTUAL VALVE</text>
                <text x="630" y="155">RECEIVED PRESSURE</text>
                <text x="630" y="220">COMMAND / STATE</text>
              </g>

              <g fill={blue} fontSize="22">
                <text x="55" y="187">
                  {current.pressure}
                  <tspan fontSize="12" fill="#8c99aa"> psi</tspan>
                </text>
                <text x="630" y="187">
                  {current.pressure}
                  <tspan fontSize="12" fill="#8c99aa"> psi</tspan>
                </text>
              </g>

              <text x="55" y="246" fill={amber}>
                {current.valve}
              </text>
              <text x="630" y="246" fill={amber}>
                {current.valve}
                <tspan fill="#8c99aa"> / {current.state}</tspan>
              </text>

              <text
                x="450" y="122"
                textAnchor="middle" fill={blue}
              >
                sensor measurements →
              </text>
              <text
                x="450" y="242"
                textAnchor="middle" fill={amber}
              >
                ← controller commands
              </text>
            </g>

            {/* Sequence progress */}
            {frames.map((_, index) => (
              <circle
                key={index}
                cx={402 + index * 12}
                cy="300"
                r="2"
                fill={index === frame ? blue : "#29313c"}
              />
            ))}
          </svg>
        </div>

        <p className="border-t border-white/10 px-5 py-4 text-sm leading-relaxed text-gray-400">
          Simulated values, not live telemetry. A simplified sequence:
          open valve → pressure rises → close valve → pressure falls.
        </p>
      </div>
    </section>
  );
}