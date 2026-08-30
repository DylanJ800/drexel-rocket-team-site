import Navbar from "@/Components/Navbar";

export default function SponsorsPage() {
  const sponsors = [
    { name: "Synnax", logo: "/sponsors/synnax.jpg" },
    { name: "Altium", logo: "/sponsors/altium.png" },
    { name: "CFTurbo", logo: "/sponsors/CF.png" },
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100 selection:bg-white/20">
      <Navbar />

      <main>
        <section className="border-t border-white/5">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="mb-8 flex items-end justify-between">
              <div>
                <p className="text-xs tracking-[0.3em] text-gray-500">
                  PARTNERS
                </p>
                <h1 className="mt-3 text-2xl font-semibold text-[#00539B] md:text-3xl">
                  Sponsors & Partners
                </h1>
              </div>
              <a href="#" className="text-sm text-gray-400 hover:text-[#00539B]">
                Sponsor us →
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {sponsors.map((s, i) => (
                <div
                  key={i}
                  className="flex h-24 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <img
                    src={s.logo}
                    alt={s.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-gray-400">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p>© {new Date().getFullYear()} Drexel Rocket Team. All rights reserved.</p>
            <div className="flex gap-6">
              <a className="hover:text-[#00539B]" href="#">
                GitHub
              </a>
              <a className="hover:text-[#00539B]" href="#">
                YouTube
              </a>
              <a className="hover:text-[#00539B]" href="#">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}