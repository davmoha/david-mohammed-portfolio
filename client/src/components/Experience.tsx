// Experience.tsx — Obsidian Executive theme (Revised)
// Executive briefing rhythm: impact-first, then detail | Diamond geometry accents

import { useEffect, useRef } from "react";
import { experience } from "@/lib/data";

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-in-up").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{ background: "var(--bg-secondary)" }}
    >
      {/* Decorative diamond — top right */}
      <div
        className="absolute top-12 right-12 pointer-events-none hidden lg:block"
        style={{ opacity: 0.06 }}
      >
        <svg width="200" height="200" viewBox="0 0 40 40" fill="none">
          <polygon points="20,2 38,20 20,38 2,20" stroke="url(#dg1)" strokeWidth="1.5" fill="none" />
          <polygon points="20,8 32,20 20,32 8,20" stroke="url(#dg1)" strokeWidth="1" fill="none" />
          <defs>
            <linearGradient id="dg1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1AD1B5" />
              <stop offset="100%" stopColor="#855DF6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container">
        {/* Section header */}
        <div className="fade-in-up mb-16">
          <div
            className="text-xs font-medium mb-3 tracking-widest uppercase"
            style={{ color: "var(--teal)", fontFamily: "'JetBrains Mono', monospace" }}
          >
            Career History
          </div>
          <h2
            className="text-3xl lg:text-4xl font-extrabold mb-2"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "white" }}
          >
            Professional{" "}
            <span className="gradient-text">Experience</span>
          </h2>
          <p
            className="text-base mb-4 max-w-lg"
            style={{ color: "var(--text-muted)" }}
          >
            17+ years of enterprise delivery across cybersecurity, AI implementation, and infrastructure at scale.
          </p>
          <div className="teal-line w-16" />
        </div>

        {/* Timeline */}
        <div className="space-y-14">
          {experience.map((job, idx) => (
            <div
              key={idx}
              className="fade-in-up"
            >
              {/* Company header — large and commanding */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    {job.current && (
                      <span
                        className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full"
                        style={{
                          background: "rgba(26,209,181,0.1)",
                          border: "1px solid rgba(26,209,181,0.25)",
                          color: "var(--teal)",
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: "var(--teal)", boxShadow: "0 0 4px var(--teal)" }}
                        />
                        Current
                      </span>
                    )}
                  </div>
                  <h3
                    className="text-xl lg:text-2xl font-extrabold mb-1"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "white" }}
                  >
                    {job.company}
                  </h3>
                  <div
                    className="text-base font-semibold"
                    style={{ color: "var(--teal)" }}
                  >
                    {job.role}
                  </div>
                  <div className="text-sm mt-0.5" style={{ color: "var(--text-dim)" }}>
                    {job.location}
                  </div>
                </div>
                <div
                  className="text-sm flex-shrink-0 sm:text-right"
                  style={{ color: "var(--text-muted)", fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {job.period}
                </div>
              </div>

              {/* Impact metrics — executive briefing */}
              <div className="flex flex-wrap gap-2 mb-6">
                {job.metrics.map((metric, mi) => (
                  <div
                    key={mi}
                    className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg"
                    style={{
                      background: "rgba(26,209,181,0.06)",
                      border: "1px solid rgba(26,209,181,0.15)",
                      color: "var(--teal)",
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                      <polyline points="17 6 23 6 23 12" />
                    </svg>
                    {metric}
                  </div>
                ))}
              </div>

              {/* Detail card */}
              <div
                className="rounded-xl p-6 lg:p-8"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(26,209,181,0.1)",
                  borderLeft: "3px solid rgba(26,209,181,0.5)",
                }}
              >
                <ul className="space-y-4">
                  {job.highlights.map((highlight, hi) => (
                    <li
                      key={hi}
                      className="flex gap-3 text-sm leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <span
                        className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{
                          background: "rgba(26,209,181,0.6)",
                          boxShadow: "0 0 4px rgba(26,209,181,0.3)",
                        }}
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Separator */}
              {idx < experience.length - 1 && (
                <div
                  className="mt-14 h-px"
                  style={{
                    background: "linear-gradient(to right, rgba(26,209,181,0.2), transparent)",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
