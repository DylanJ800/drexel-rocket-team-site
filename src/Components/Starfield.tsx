"use client";

import { useMemo } from "react";

type Star = {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
};

export default function Starfield() {
  const stars = useMemo<Star[]>(() => {
    return Array.from({ length: 140 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.8 + 0.4,
      opacity: Math.random() * 0.55 + 0.25,
      duration: Math.random() * 5 + 4,
      delay: Math.random() * -8,
    }));
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="absolute inset-0">
        {stars.map((star) => (
          <span
            key={star.id}
            className="absolute rounded-full bg-white star-twinkle"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(50%_40%_at_50%_0%,rgba(0,83,155,0.16)_0%,transparent_65%)]" />
    </div>
  );
}