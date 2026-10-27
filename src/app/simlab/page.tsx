import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/Components/Navbar";

export const metadata: Metadata = {
  title: "SIMLAB | Drexel Rocket Team",
  description: "DRT’s planned simulation, integration, verification, and engineering data laboratory: connecting models, software, hardware, and operators before physical testing.",
};

const capabilities = [
  ["SIL · Software-in-the-Loop", "Exercise production control logic against simulated sensors, actuators, and vehicle physics."],
  ["PIL · Processor-in-the-Loop", "Run software on representative embedded processors to evaluate timing, scheduling, and resource use."],
  ["HIL · Hardware-in-the-Loop", "Connect real avionics and DAQ hardware to a simulated vehicle through realistic inputs and outputs."],
  ["HITL · Human-in-the-Loop", "Give Mission Control a repeatable environment for countdowns, fault response, aborts, and safing rehearsals."],
  ["Fault injection & regression", "Introduce sensor drift, valve delays, packet loss, and combined failures; check expected responses after software changes."],
  ["Monte Carlo & uncertainty", "Explore parameter distributions and sensitivity to understand performance margins and the drivers of system risk."],
  ["Engineering data & calibration", "Clean and synchronize test telemetry, compare predictions with measurements, and calibrate models within validated ranges."],
  ["Computing performance", "Profile CPU, memory, network load, and timing; scale parameter sweeps and simulation campaigns across computing workers."],
  ["Machine learning", "Explore anomaly detection, validated surrogate models, and scenario generation as supplements to physics and deterministic verification."],
];

const roadmap = [
  ["0", "Architecture & requirements", "Define model interfaces, scenario standards, data schemas, and the computing foundation."],
  ["1", "Ambition One digital test stand", "Validate simplified tank, valve, sensor, and engine models against static-fire data and control sequences."],
  ["2", "Automated scenarios", "Build repeatable fault schedules, expected responses, pass/fail checks, and result logging."],
  ["3", "Monte Carlo framework", "Add distributed execution, statistical summaries, sensitivity studies, and reporting."],
  ["4", "Dragon One system models", "Integrate feed systems, pumps, GSE, and reduced-order startup and shutdown models."],
  ["5", "Hardware-in-the-Loop", "Introduce control computers, DAQ, communications, and eventually representative avionics racks."],
  ["6", "Vehicle & mission simulation", "Expand into flight dynamics, GNC, staging, recovery, and complete mission rehearsals."],
];

const interfaces = [
  ["Propulsion", "Engine and pump models, operating limits, and test data inform transient simulation and uncertainty studies."],
  ["Avionics, Controls & GNC", "Flight software, state machines, and communications connect to virtual sensors, actuators, and timing checks."],
  ["Stage 0 & Operations", "Ground-system interfaces and procedures support virtual servicing, countdowns, and operator rehearsals."],
  ["Structures & Manufacturing", "Geometry, mass, inertia, structural constraints, and as-built differences inform vehicle models."],
];

export default function SimlabPage() {
  return (
    <div className="min-h-screen bg-black text-gray-100 selection:bg-white/20">
      <Navbar />
      <main>
        <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(ellipse_at_top_right,rgba(0,83,155,0.35),transparent_65%)]">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <p className="text-xs tracking-[0.3em] text-[#7fb8ff]">DEVELOPMENT · TEAM-WIDE CAPABILITY</p>
            <h1 className="mt-4 text-5xl font-semibold md:text-7xl">SIMLAB</h1>
            <p className="mt-5 max-w-3xl text-xl text-gray-200 md:text-2xl">Simulation, Integration, Verification, and Engineering Data Laboratory</p>
            <p className="mt-6 max-w-2xl leading-relaxed text-gray-300">Explore how physics, software, hardware, and operators interact before the real test. SIMLAB is DRT’s planned integrated environment for discovering system faults, understanding uncertainty, and making better engineering decisions.</p>
            <p className="mt-6 inline-block rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-[#7fb8ff]">Initial program charter · Incremental development roadmap</p>
          </div>
        </section>

        <section aria-labelledby="mission" className="border-b border-white/10 bg-zinc-950">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-2">
            <div>
              <p className="text-xs tracking-[0.3em] text-gray-400">PURPOSE & MISSION</p>
              <h2 id="mission" className="mt-3 text-3xl font-semibold">Understand the complete system.</h2>
            </div>
            <div className="space-y-4 leading-relaxed text-gray-300">
              <p>SIMLAB aims to bring propulsion, avionics, controls, ground systems, vehicle dynamics, and mission operations into controlled, repeatable tests under nominal and failure conditions.</p>
              <p>Detailed CFD, FEA, and fluid-network analyses supply reduced-order models; physical tests supply the evidence to validate and improve them. Start with one useful model, validate it, then connect the next subsystem.</p>
            </div>
          </div>
        </section>

        <section aria-labelledby="capabilities" className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-xs tracking-[0.3em] text-gray-400">PLANNED CAPABILITIES</p>
          <h2 id="capabilities" className="mt-3 text-3xl font-semibold">From control logic to integrated missions</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(([title, text]) => (
              <article key={title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-medium text-[#7fb8ff]">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-300">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="scenario" className="border-y border-white/10 bg-zinc-950">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <p className="text-xs tracking-[0.3em] text-gray-400">REPRESENTATIVE FUTURE SCENARIO</p>
            <h2 id="scenario" className="mt-3 text-3xl font-semibold">Rehearse a static fire. Challenge the response.</h2>
            <p className="mt-5 max-w-3xl leading-relaxed text-gray-300">Begin with an Ambition One digital test stand, then extend validated models toward Dragon One. Real control logic would command simulated loading, arming, and ignition while Mission Control monitors realistic telemetry.</p>
            <ol className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                ["01 · Run", "Model valve timing, fluid flow, chamber-pressure rise, and thrust buildup."],
                ["02 · Inject", "At T+2.5 seconds, introduce downward drift in a simulated fuel-pressure sensor."],
                ["03 · Verify", "Check fault detection, abort initiation, valve closure, shutdown timing, and the final safe state against requirements."],
              ].map(([title, text]) => (
                <li key={title} className="rounded-3xl border border-white/10 p-6">
                  <h3 className="font-medium text-[#7fb8ff]">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-300">{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section aria-labelledby="interfaces" className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-xs tracking-[0.3em] text-gray-400">CROSS-TEAM INTERFACES</p>
          <h2 id="interfaces" className="mt-3 text-3xl font-semibold">Built with every discipline</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {interfaces.map(([title, text]) => (
              <div key={title} className="border-l-2 border-[#00539B] pl-5">
                <h3 className="text-lg font-medium text-[#7fb8ff]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-300">{text}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl leading-relaxed text-gray-300">Future interoperability with Synnax-based telemetry and Mission Control would let operators use familiar interfaces across simulation, HIL, and physical testing. Test data feeds back into model calibration and verification.</p>
        </section>

        <section aria-labelledby="roadmap" className="border-y border-white/10 bg-zinc-950">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <p className="text-xs tracking-[0.3em] text-gray-400">PROPOSED ROADMAP</p>
            <h2 id="roadmap" className="mt-3 text-3xl font-semibold">One validated step at a time</h2>
            <p className="mt-4 text-gray-300">A development sequence from the initial charter; milestones will evolve with team needs and validation evidence.</p>
            <ol className="mt-8 space-y-4">
              {roadmap.map(([phase, title, text]) => (
                <li key={phase} className="grid gap-2 rounded-2xl border border-white/10 bg-white/5 p-5 md:grid-cols-[5rem_16rem_1fr] md:gap-5">
                  <span className="text-sm text-[#7fb8ff]">Phase {phase}</span>
                  <h3 className="font-medium">{title}</h3>
                  <p className="text-sm leading-relaxed text-gray-300">{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section aria-labelledby="vision" className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-3xl border border-white/10 bg-[#07294D]/30 p-6 md:p-10">
            <p className="text-xs tracking-[0.3em] text-[#7fb8ff]">LONG-TERM VISION</p>
            <h2 id="vision" className="mt-3 text-3xl font-semibold">Thousands of virtual missions before flight.</h2>
            <p className="mt-5 max-w-3xl leading-relaxed text-gray-300">Grow a persistent digital engineering environment spanning ground servicing, ignition, ascent, staging, and recovery. Success means finding faults earlier, quantifying risk, reproducing test data, and giving the team stronger evidence before operating the real system.</p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link href="/ambition-one" className="rounded-xl border border-white/20 px-5 py-3 text-sm hover:bg-white/10">Explore Ambition One</Link>
              <Link href="/dragon-one" className="rounded-xl border border-white/20 px-5 py-3 text-sm hover:bg-white/10">Explore Dragon One</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
