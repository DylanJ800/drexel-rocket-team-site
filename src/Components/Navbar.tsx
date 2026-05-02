"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import CountdownBadge from "@/Components/CountdownBadge";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/70 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-sm font-semibold tracking-widest text-[#07294D]"
        >
          DREXEL ROCKET TEAM
        </Link>

        <ul className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
          <li>
            <a className="hover:text-[#00539B]" href="/#mission">
              Mission
            </a>
          </li>

          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="flex items-center gap-2 hover:text-[#00539B]"
              type="button"
            >
              Development
              <span className="text-xs">{open ? "▲" : "▼"}</span>
            </button>

            {open && (
              <div className="absolute left-0 top-full mt-3 w-64 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/95 shadow-2xl backdrop-blur">
                <Link
                  href="/ambition-one"
                  onClick={() => setOpen(false)}
                  className="block border-b border-white/5 px-5 py-4 transition hover:bg-white/5"
                >
                  <div className="text-sm font-medium text-white">
                    Ambition One
                  </div>
                  <div className="mt-1 text-xs text-gray-400">
                    Pressure-fed liquid engine program
                  </div>
                </Link>

                <Link
                  href="/dragon-one"
                  onClick={() => setOpen(false)}
                  className="block border-b border-white/5 px-5 py-4 transition hover:bg-white/5"
                >
                  <div className="text-sm font-medium text-white">
                    Dragon One
                  </div>
                  <div className="mt-1 text-xs text-gray-400">
                    Pump-fed next-generation development
                  </div>
                </Link>

                <Link
                  href="/chariot"
                  onClick={() => setOpen(false)}
                  className="block px-5 py-4 transition hover:bg-white/5"
                >
                  <div className="text-sm font-medium text-white">
                    Chariot
                  </div>
                  <div className="mt-1 text-xs text-gray-400">
                    Long-term launch vehicle program • NET 2028
                  </div>
                </Link>
              </div>
            )}
          </li>

          <li>
            <Link className="hover:text-[#00539B]" href="/team">
              Team
            </Link>
          </li>

          <li>
            <a className="hover:text-[#00539B]" href="/#sponsors">
              Sponsors
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <CountdownBadge />
          <Link
            href="/positions"
            className="rounded-xl border border-white/10 bg-[#07294D]/40 px-4 py-2 text-sm hover:bg-[#07294D]/60"
          >
            Join Us 
          </Link>
        </div>
      </nav>
    </header>
  );
}