import Navbar from "@/Components/Navbar";

const teamMembers = [
  {
    name: "Dylan Joseph",
    role: "President & Chief Engineer",
    blurb:
      "Leads team direction, propulsion architecture, major technical decisions, and integrated program development.",
    image: "/media/team/ts.png",
  },
  {
    name: "Quincey Daniel",
    role: "Lead GNC Engineer",
    blurb:
      "Responsible for avionics, software, controls integration, electrical systems development, and mission critical software.",
    image: "/media/team/ts.png",
  },
  {
    name: "William Richards",
    role: "Lead Propulsion Engineer",
    blurb:
      "Supports propulsion hardware, combustion systems, and engine integration",
    image: "/media/team/ts.png",
  },
  {
    name: "Joe Maddi",
    role: "Lead Stage 0 Engineer",
    blurb:
      "Focused on ground systems, pad equipment, and test-side infrastructure for engine operations.",
    image: "/media/team/ts.png",
  },
  {
    name: "Dhruv Patel",
    role: "Operations Lead \n SR. GNC Engineer (Electrical)",
    blurb:
      "Supports logistics, planning, operational structure, and campaign coordination as the team grows.",
    image: "/media/team/dhruv.jpg",
  },
  {
    name: "Sophia Vesci",
    role: "Propulsion Engineer",
    blurb:
      "Supports mechanical design, propulsion systems, and integration efforts across the team.",
    image: "/media/team/sophia.jpg",
  },
  {
    name: "Anup Pilla",
    role: "SR. GNC Engineer (Software)",
    blurb:
      "Supports avionics, software, controls integration, and electrical systems development.",
    image: "/media/team/anup.jpg",
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-black text-gray-100 selection:bg-white/20">
      <Navbar />

      {/* HERO */}
      <section className="border-b border-white/5 bg-gradient-to-b from-black to-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center md:py-28">
          <p className="text-xs tracking-[0.3em] text-gray-500">TEAM</p>
          <h1 className="mt-4 text-4xl font-semibold md:text-6xl">
            Meet the Team
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-300">
            Drexel Rocket Team is a student-led engineering organization focused
            on advanced collegiate liquid propulsion, launch systems, and
            high-accountability technical development.
          </p>
        </div>
      </section>

      {/* TEAM GRID */}
      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-[#00539B]/40"
              >
                <div className="aspect-[4/4.2] bg-zinc-900/80">
                  <div
                    className="h-full w-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${member.image}')` }}
                  />
                </div>

                <div className="p-5">
                  <div className="text-lg font-medium text-white">
                    {member.name}
                  </div>
                  <div className="mt-1 text-sm text-[#7fb8ff]">
                    {member.role}
                  </div>
                  <p className="mt-4 text-sm text-gray-300">{member.blurb}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}