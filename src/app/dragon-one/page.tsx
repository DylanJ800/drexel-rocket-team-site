"use client";

import Navbar from "@/Components/Navbar";
import { motion } from "framer-motion";

const specs = [
  { label: "Cycle", value: "Pump-Fed" },
  { label: "Cooling", value: "Regenerative + Film" },
  { label: "Propellants", value: "E85 / N₂O" },
  { label: "Status", value: "Early R&D" },
];

const pillars = [
  {
    title: "Pump-fed architecture",
    body: "Development toward a more advanced liquid propulsion system with higher performance potential.",
  },
  {
    title: "Thermal management",
    body: "Exploration of regenerative cooling, film cooling, and system-level thermal constraints.",
  },
  {
    title: "Integrated R&D",
    body: "Cross-disciplinary iteration spanning propulsion, controls, structures, operations, and test methodology.",
  },
];

const roadmap = [
  "Architecture definition",
  "Cycle analysis and system modeling",
  "Turbopump development",
  "Subsystem prototyping",
  "Integrated hot-fire campaign",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function DragonOnePage() {
  return (
    <div className="min-h-screen bg-black text-gray-100 selection:bg-white/20">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/5">
        <motion.div
          animate={{ backgroundPosition: ["0px 0px", "80px 80px"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20"
        />
        <div className="absolute inset-0 bg-[radial-gradient(60%_70%_at_50%_0%,rgba(0,83,155,0.35)_0%,transparent_65%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-black to-black" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative mx-auto max-w-7xl px-6 py-24 md:py-36"
        >
          <motion.div variants={fadeUp} className="max-w-4xl">
            <div className="mb-6 inline-flex rounded-full border border-[#00539B]/40 bg-[#00539B]/10 px-4 py-2 text-xs tracking-[0.25em] text-[#7fb8ff]">
              NEXT-GENERATION DEVELOPMENT PROGRAM
            </div>

            <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
              Dragon One
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
              Dragon One is the team’s next-generation liquid engine development
              effort, focused on pump-fed propulsion, regenerative cooling, and a
              more advanced collegiate engine architecture.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {specs.map((item) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_0_40px_rgba(0,83,155,0.08)] backdrop-blur hover:border-[#00539B]/50 hover:bg-[#00539B]/10"
              >
                <div className="text-xs uppercase tracking-[0.25em] text-gray-500">
                  {item.label}
                </div>
                <div className="mt-3 text-xl font-medium text-white">
                  {item.value}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* VISION */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeUp}
        className="relative border-b border-white/5 bg-zinc-950"
      >
        <div className="absolute inset-0 bg-[radial-gradient(45%_50%_at_85%_20%,rgba(0,83,155,0.18)_0%,transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs tracking-[0.3em] text-gray-500">VISION</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#00539B] md:text-4xl">
            A step beyond pressure-fed development
          </h2>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <p className="text-gray-300">
              Dragon One represents the next major step in capability for the
              team. The program is intended to push into more advanced
              propulsion architecture, higher-performance system design, and
              deeper cross-disciplinary integration.
            </p>
            <p className="text-gray-300">
              This page is designed to grow over time as the program matures,
              with room for technical callouts, renders, analyses, and
              milestone documentation.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ARCHITECTURE */}
      <section className="border-b border-white/5 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-xs tracking-[0.3em] text-gray-500">
            SYSTEM ARCHITECTURE
          </p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={stagger}
            className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6"
          >
            <div className="grid gap-4 md:grid-cols-5">
              {["Tanks", "Feed System", "Turbopump", "Injector", "Chamber"].map(
                (item, index) => (
                  <motion.div
                    key={item}
                    variants={fadeUp}
                    whileHover={{ y: -4, scale: 1.03 }}
                    className="relative"
                  >
                    <div className="rounded-2xl border border-[#00539B]/30 bg-[#00539B]/10 px-5 py-6 text-center text-sm font-medium text-white">
                      {item}
                    </div>
                    {index < 4 && (
                      <div className="absolute right-[-18px] top-1/2 hidden h-px w-8 bg-[#00539B]/60 md:block" />
                    )}
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="border-b border-white/5 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs tracking-[0.3em] text-gray-500">FOCUS AREAS</p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            Program pillars
          </h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={stagger}
            className="mt-8 grid gap-6 md:grid-cols-3"
          >
            {pillars.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 hover:border-[#00539B]/50 hover:shadow-[0_0_50px_rgba(0,83,155,0.16)]"
              >
                <div className="h-1 w-12 rounded-full bg-[#00539B] transition-all duration-300 group-hover:w-20" />
                <div className="mt-6 text-lg font-medium text-[#7fb8ff]">
                  {item.title}
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-300">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="border-b border-white/5 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs tracking-[0.3em] text-gray-500">ROADMAP</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#00539B] md:text-4xl">
            Development path
          </h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={stagger}
            className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5"
          >
            {roadmap.map((step, index) => (
              <motion.div
                key={step}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 hover:border-[#00539B]/50 hover:bg-[#00539B]/10"
              >
                <div className="text-xs tracking-[0.25em] text-gray-500">
                  PHASE {index + 1}
                </div>
                <div className="mt-3 text-sm font-medium text-white">
                  {step}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* STATUS */}
      <section className="bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45 }}
            className="rounded-3xl border border-[#00539B]/30 bg-[#00539B]/10 p-8 shadow-[0_0_60px_rgba(0,83,155,0.12)]"
          >
            <p className="text-xs tracking-[0.3em] text-[#7fb8ff]">STATUS</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              Early-stage development
            </h2>
            <p className="mt-5 max-w-3xl text-gray-300">
              Dragon One is currently in early-stage development. As the program
              progresses, this page will be updated with technical analyses,
              subsystem designs, test data, and validated milestones.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}