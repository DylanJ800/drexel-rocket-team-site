import Navbar from "@/Components/Navbar";

const testHistory = [
  { name: "Cold Flow 1", status: "Success" },
  { name: "Valve Checkout", status: "Success" },
  { name: "Ignition Validation", status: "Success" },
  { name: "Static Fire 1", status: "Success" },
];

export default function AmbitionOnePage() {
  return (
    <div className="min-h-screen bg-black text-gray-100 selection:bg-white/20">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/5">
        {/* Background Video */}
        <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover object-[center_60%] opacity-70 [filter:brightness(0.9)_contrast(1.1)]"
        >
            <source src="https://pub-3d662e494b1c45c88a2d801567a6598f.r2.dev/SF1.mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(0,83,155,0.25)_0%,transparent_60%)]" />

        {/* Content (UNCHANGED SIZE) */}
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
            <p className="text-xs tracking-[0.3em] text-gray-400">
            PRESSURE-FED DEVELOPMENT PROGRAM
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
            Ambition One
            </h1>

            <p className="mt-5 max-w-3xl text-lg text-gray-300">
            Ambition One is Drexel Rocket Team’s pressure-fed liquid engine
            development program, built to validate propulsion hardware,
            ignition, controls, plumbing, and test operations through real
            campaign execution.
            </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="border-b border-white/5 bg-zinc-950">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <p className="text-xs tracking-[0.3em] text-gray-500">OVERVIEW</p>
            <h2 className="mt-3 text-2xl font-semibold text-[#00539B] md:text-3xl">
              A foundation for iterative liquid propulsion development
            </h2>
            <p className="mt-5 text-gray-300">
              Ambition One serves as a platform for validating key engine and
              operations systems through direct testing. The program supports
              development of plumbing architecture, controls integration,
              ignition sequencing, instrumentation, and campaign execution.
            </p>
            <p className="mt-4 text-gray-300">
              More than a single test article, it represents the beginning of a
              larger propulsion development path that will feed into future
              programs, improved hardware, and increasingly capable systems.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-3">
              <div className="aspect-[16/10] w-full rounded-2xl bg-zinc-900/70 bg-[url('/media/am1.png')] bg-cover bg-center" />
            </div>
          </div>
        </div>
      </section>

      {/* MEDIA / STORY */}
      <section className="border-b border-white/5 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-3">
              <div className="aspect-video rounded-2xl bg-zinc-900/70 bg-[url('/media/am2.jpg')] bg-cover bg-center" />
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-xs tracking-[0.3em] text-gray-500">
                TEST CAMPAIGN
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                Built to test, learn, and improve
              </h2>
              <p className="mt-5 text-gray-300">
                The Ambition One campaign is centered around iterative test
                execution. Each milestone informs the next: validating hardware,
                refining operations, improving controls, and maturing the team’s
                integrated engineering process.
              </p>
              <p className="mt-4 text-gray-300">
                This page can later expand with video, detailed test writeups,
                subsystem callouts, and milestone-specific media.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TEST HISTORY */}
      <section className="border-b border-white/5 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs tracking-[0.3em] text-gray-500">MILESTONES</p>
          <h2 className="mt-3 text-2xl font-semibold text-[#00539B] md:text-3xl">
            Test History
          </h2>

          <div className="mt-10 flex flex-wrap gap-6">
            {testHistory.map((item, index) => (
              <div
                key={index}
                className="flex h-40 w-40 flex-col items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-500/10 text-center shadow-[0_0_35px_rgba(34,197,94,0.18)]"
              >
                <div className="px-4 text-sm font-medium text-white">
                  {item.name}
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.25em] text-emerald-300">
                  {item.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PLACEHOLDER */}
      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs tracking-[0.3em] text-gray-500">GALLERY</p>

          <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
            Program visuals
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                src: "/media/am4.png",
                label: "Static Fire",
              },
              {
                src: "/media/amb3.jpg",
                label: "Test Setup",
              },
              {
                src: "/media/am1.png",
                label: "Ignition",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <img
                    src={item.src}
                    alt={item.label}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 transition group-hover:opacity-100" />

                  {/* label */}
                  <div className="absolute bottom-3 left-3 text-sm text-white opacity-0 transition group-hover:opacity-100">
                    {item.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}