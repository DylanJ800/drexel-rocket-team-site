import Link from "next/link";
import Navbar from "@/Components/Navbar";

const inputClass =
  "mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-[#00539B]/80 focus:bg-white/[0.06] focus:ring-2 focus:ring-[#00539B]/20";

export default function SponsorInquiryPage() {
  return (
    <div className="min-h-screen bg-black text-gray-100 selection:bg-white/20">
      <Navbar />

      <main>
        <section className="relative overflow-hidden border-b border-white/5">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(65%_85%_at_85%_15%,rgba(0,83,155,0.2)_0%,transparent_62%)]" />
          <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-24">
            <Link
              href="/sponsors"
              className="text-sm text-gray-500 transition hover:text-[#5e9bd3]"
            >
              ← Back to Sponsors
            </Link>
            <p className="mt-10 font-[family-name:var(--font-roboto-condensed)] text-xs font-semibold uppercase tracking-[0.32em] text-[#5e9bd3]">
              Sponsorship Inquiry
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
              Let&apos;s build something ambitious together.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              Tell us a little about your organization and how you would like to support Drexel Rocket Team. We welcome conversations around funding, hardware, software, manufacturing, technical support, and other in-kind contributions.
            </p>
          </div>
        </section>

        <section className="bg-zinc-950">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[minmax(0,1fr)_360px] lg:py-20">
            <div className="rounded-[2rem] border border-white/10 bg-black p-6 md:p-9">
              <div className="border-b border-white/10 pb-7">
                <p className="text-xs uppercase tracking-[0.25em] text-gray-500">Tell Us About You</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">Sponsor inquiry</h2>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Fields marked with an asterisk are intended to be required once submissions are enabled.
                </p>
              </div>

              <form className="mt-8 space-y-7">
                <div className="grid gap-6 md:grid-cols-2">
                  <label className="text-sm text-gray-300">
                    Contact name <span className="text-[#5e9bd3]">*</span>
                    <input className={inputClass} type="text" name="name" placeholder="Jane Smith" />
                  </label>
                  <label className="text-sm text-gray-300">
                    Work email <span className="text-[#5e9bd3]">*</span>
                    <input className={inputClass} type="email" name="email" placeholder="jane@company.com" />
                  </label>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <label className="text-sm text-gray-300">
                    Company / organization <span className="text-[#5e9bd3]">*</span>
                    <input className={inputClass} type="text" name="organization" placeholder="Organization name" />
                  </label>
                  <label className="text-sm text-gray-300">
                    Role / title
                    <input className={inputClass} type="text" name="role" placeholder="Engineering Manager" />
                  </label>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <label className="text-sm text-gray-300">
                    Phone number
                    <input className={inputClass} type="tel" name="phone" placeholder="Optional" />
                  </label>
                  <label className="text-sm text-gray-300">
                    Company website
                    <input className={inputClass} type="url" name="website" placeholder="https://" />
                  </label>
                </div>

                <label className="block text-sm text-gray-300">
                  Area of interest <span className="text-[#5e9bd3]">*</span>
                  <select className={inputClass} name="interest" defaultValue="">
                    <option value="" disabled className="bg-zinc-950">Select an option</option>
                    <option value="financial" className="bg-zinc-950">Financial sponsorship</option>
                    <option value="hardware" className="bg-zinc-950">Hardware or materials</option>
                    <option value="manufacturing" className="bg-zinc-950">Manufacturing support</option>
                    <option value="software" className="bg-zinc-950">Software or engineering tools</option>
                    <option value="technical" className="bg-zinc-950">Technical support or expertise</option>
                    <option value="other" className="bg-zinc-950">Other / multiple areas</option>
                  </select>
                </label>

                <label className="block text-sm text-gray-300">
                  How would you like to work with DRT? <span className="text-[#5e9bd3]">*</span>
                  <textarea
                    className={`${inputClass} min-h-40 resize-y`}
                    name="message"
                    placeholder="Tell us about your organization, the type of partnership you have in mind, or anything else that would help us start the conversation."
                  />
                </label>

                <div className="rounded-2xl border border-[#00539B]/25 bg-[#00539B]/10 p-4 text-sm leading-6 text-gray-300">
                  The inquiry form is currently in preview while we connect secure submission delivery. No information entered on this page is sent or stored yet.
                </div>

                <button
                  type="button"
                  disabled
                  className="cursor-not-allowed rounded-2xl bg-[#00539B]/45 px-6 py-3.5 text-sm font-medium text-white/60"
                >
                  Submit Inquiry — Coming Soon
                </button>
              </form>
            </div>

            <aside className="space-y-5 lg:pt-2">
              <div className="rounded-3xl border border-white/10 bg-black p-6">
                <p className="text-xs uppercase tracking-[0.25em] text-gray-500">Ways to Support</p>
                <div className="mt-6 space-y-5">
                  {[
                    ["Funding", "Directly support development, manufacturing, testing, and team operations."],
                    ["Hardware & Materials", "Provide components, raw materials, instrumentation, or specialized equipment."],
                    ["Manufacturing", "Help turn student-designed hardware into flight and test-ready components."],
                    ["Software & Tools", "Expand access to professional engineering, simulation, and development platforms."],
                    ["Technical Partnership", "Share expertise, mentorship, reviews, or other engineering support."],
                  ].map(([title, body]) => (
                    <div key={title} className="border-b border-white/5 pb-5 last:border-0 last:pb-0">
                      <h3 className="text-sm font-medium text-white">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-gray-500">{body}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-[#00539B]/25 bg-[#00539B]/10 p-6">
                <p className="text-xs uppercase tracking-[0.25em] text-[#7fb8ff]">Prefer Email?</p>
                <h3 className="mt-3 text-lg font-medium text-white">Direct contact will remain available.</h3>
                <p className="mt-3 text-sm leading-6 text-gray-400">
                  When we connect form delivery, we can also keep a direct team email here as an alternative for organizations that prefer traditional outreach.
                </p>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-gray-400">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p>© {new Date().getFullYear()} Drexel Rocket Team. All rights reserved.</p>
            <Link className="hover:text-[#00539B]" href="/sponsors">Sponsors & Partnerships</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
