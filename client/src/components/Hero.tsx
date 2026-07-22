// Hero.tsx — Obsidian Executive theme (Revised)
// DM monogram as primary brand mark | Angular diamond geometry | Executive editorial hierarchy
// #0A0D14 bg | #1AD1B5 teal | #855DF6 purple | Plus Jakarta Sans display

import { useEffect, useRef } from "react";
import type { ReactElement } from "react";
import { profile, stats } from "@/lib/data";

const iconMap: Record<string, ReactElement> = {
  calendar: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  server: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="3" width="20" height="5" rx="1" />
      <rect x="2" y="10" width="20" height="5" rx="1" />
      <rect x="2" y="17" width="20" height="5" rx="1" />
      <circle cx="6" cy="5.5" r="1" fill="currentColor" />
      <circle cx="6" cy="12.5" r="1" fill="currentColor" />
      <circle cx="6" cy="19.5" r="1" fill="currentColor" />
    </svg>
  ),
  dollar: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  check: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
};

// Diamond/angular geometry motif component
function DiamondMotif({ size = 40, opacity = 0.15 }: { size?: number; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" style={{ opacity }}>
      <polygon
        points="20,2 38,20 20,38 2,20"
        stroke="url(#diamondGrad)"
        strokeWidth="1.5"
        fill="none"
      />
      <polygon
        points="20,8 32,20 20,32 8,20"
        stroke="url(#diamondGrad)"
        strokeWidth="1"
        fill="rgba(26,209,181,0.05)"
      />
      <defs>
        <linearGradient id="diamondGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1AD1B5" />
          <stop offset="100%" stopColor="#855DF6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    setTimeout(() => {
      el.querySelectorAll(".fade-in-up").forEach((item, i) => {
        setTimeout(() => item.classList.add("visible"), i * 80);
      });
    }, 100);
  }, []);

  return (
    <section
      id="about"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: "80px" }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/manus-storage/hero-bg_f0505a80.png"
          alt=""
          className="w-full h-full object-cover"
          style={{ opacity: 0.5 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(10,13,20,0.97) 0%, rgba(10,13,20,0.75) 55%, rgba(13,19,33,0.92) 100%)",
          }}
        />
      </div>

      {/* Decorative diamond geometry — top right */}
      <div className="absolute top-24 right-16 pointer-events-none hidden lg:block">
        <DiamondMotif size={120} opacity={0.12} />
      </div>
      <div className="absolute bottom-32 left-8 pointer-events-none hidden lg:block">
        <DiamondMotif size={60} opacity={0.08} />
      </div>

      {/* Glow orbs */}
      <div
        className="absolute top-1/3 right-1/3 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(26,209,181,0.07) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(133,93,246,0.07) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center py-16">
          {/* Left: Text content */}
          <div className="lg:col-span-7">
            {/* Status badge */}
            <div className="fade-in-up mb-8 inline-flex items-center gap-2">
              <span
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
                style={{
                  background: "rgba(26,209,181,0.07)",
                  border: "1px solid rgba(26,209,181,0.2)",
                  color: "var(--teal)",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    background: "var(--teal)",
                    boxShadow: "0 0 6px var(--teal)",
                    animation: "pulse 2s infinite",
                  }}
                />
                Available for New Opportunities
              </span>
            </div>

            {/* Name — large display */}
            <h1
              className="fade-in-up leading-none mb-4"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(3rem, 6vw, 5.5rem)",
                color: "white",
                letterSpacing: "-0.02em",
              }}
            >
              David
              <br />
              <span className="gradient-text">Mohammed</span>
            </h1>

            {/* Credentials row */}
            <div className="fade-in-up flex flex-wrap items-center gap-2 mb-5">
              {profile.credentials.split(", ").map((cred) => (
                <span key={cred} className="cert-badge">
                  {cred}
                </span>
              ))}
              <span
                className="text-xs"
                style={{
                  color: "var(--text-dim)",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                · {profile.location}
              </span>
            </div>

            {/* Role statement */}
            <div className="fade-in-up mb-3">
              <div
                className="text-xl lg:text-2xl font-bold"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: "white",
                }}
              >
                {profile.title}
              </div>
              <div
                className="text-base mt-1"
                style={{ color: "var(--text-muted)" }}
              >
                {profile.subtitle}
              </div>
            </div>

            {/* Divider line */}
            <div className="fade-in-up teal-line w-20 mb-6" />

            {/* Impact statement */}
            <p
              className="fade-in-up text-base leading-relaxed mb-8 max-w-xl"
              style={{ color: "var(--text-secondary)" }}
            >
              {profile.bio}
            </p>

            {/* CTAs */}
            <div className="fade-in-up flex flex-wrap gap-3 mb-10">
              <a href="#resume" className="btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
                View Full Resume
              </a>
              <a href="#projects" className="btn-outline">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub Projects
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>

            {/* Contact info row */}
            <div className="fade-in-up flex flex-wrap gap-4 text-sm" style={{ color: "var(--text-muted)" }}>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-1.5 transition-colors"
                style={{ color: "var(--text-muted)", textDecoration: "none" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone}`}
                className="flex items-center gap-1.5"
                style={{ color: "var(--text-muted)", textDecoration: "none" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {profile.phone}
              </a>
            </div>
          </div>

          {/* Right: DM Monogram + Stats */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* DM Monogram — primary brand mark */}
            <div className="fade-in-up flex justify-center lg:justify-end">
              <div className="relative">
                {/* Diamond frame */}
                <div
                  className="absolute inset-0 -m-4"
                  style={{ opacity: 0.2 }}
                >
                  <DiamondMotif size={240} opacity={1} />
                </div>

                {/* DM Logo card */}
                <div
                  className="relative w-44 h-44 lg:w-52 lg:h-52 rounded-2xl flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(26,209,181,0.08) 0%, rgba(133,93,246,0.08) 100%)",
                    border: "1px solid rgba(26,209,181,0.25)",
                    boxShadow:
                      "0 0 60px rgba(26,209,181,0.12), 0 0 120px rgba(133,93,246,0.08), 0 20px 60px rgba(0,0,0,0.5)",
                  }}
                >
                  <img
                    src="/manus-storage/oval_final_1cb596a4.png"
                    alt="Mo-Blind"
                    className="w-32 h-32 lg:w-40 lg:h-40 object-contain"
                    style={{ filter: "drop-shadow(0 0 16px rgba(26,209,181,0.5))" }}
                  />
                </div>

                {/* Teal corner accent */}
                <div
                  className="absolute -bottom-2 -right-2 w-12 h-12 rounded-xl"
                  style={{
                    background: "var(--gradient-brand)",
                    opacity: 0.2,
                  }}
                />
              </div>
            </div>

            {/* Stats grid */}
            <div className="fade-in-up grid grid-cols-2 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <div className="mb-2" style={{ color: "var(--teal)" }}>
                    {iconMap[stat.icon]}
                  </div>
                  <div
                    className="font-extrabold leading-none mb-1"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "clamp(1.5rem, 3vw, 2rem)",
                      color: "white",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Current role card */}
            <div className="fade-in-up glass-card p-4 flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(26,209,181,0.1)",
                  border: "1px solid rgba(26,209,181,0.2)",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold" style={{ color: "white" }}>
                  Mo-Blind Solutions LLC
                </div>
                <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                  AI Project Manager · Sept. 2024 — Present
                </div>
              </div>
              <div
                className="ml-auto w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: "var(--teal)", boxShadow: "0 0 6px var(--teal)" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        style={{ color: "var(--text-dim)" }}
      >
        <span className="text-xs" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          scroll
        </span>
        <div
          className="w-px h-8"
          style={{
            background: "linear-gradient(to bottom, rgba(26,209,181,0.5), transparent)",
          }}
        />
      </div>
    </section>
  );
}
