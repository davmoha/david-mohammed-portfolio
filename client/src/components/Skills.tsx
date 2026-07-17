// Skills.tsx — Obsidian Executive theme
// Competencies (teal badges) + Certifications (purple badges) + Education + Military

import { useEffect, useRef } from "react";
import { certifications, competencies, education, military, leadership } from "@/lib/data";

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-in-up").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 60);
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
      id="skills"
      ref={sectionRef}
      className="py-24"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="container">
        {/* Section header */}
        <div className="fade-in-up mb-16">
          <div
            className="text-xs font-medium mb-3 tracking-widest uppercase"
            style={{ color: "var(--teal)", fontFamily: "'JetBrains Mono', monospace" }}
          >
            Expertise
          </div>
          <h2
            className="text-3xl lg:text-4xl font-extrabold mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "white" }}
          >
            Skills &{" "}
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="teal-line w-16" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Core Competencies */}
          <div className="fade-in-up">
            <h3
              className="text-lg font-bold mb-5 flex items-center gap-2"
              style={{ color: "white", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span
                className="w-6 h-6 rounded flex items-center justify-center"
                style={{ background: "rgba(26,209,181,0.1)", border: "1px solid rgba(26,209,181,0.2)" }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2.5">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </span>
              Core Competencies
            </h3>
            <div className="flex flex-wrap gap-2">
              {competencies.map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="fade-in-up">
            <h3
              className="text-lg font-bold mb-5 flex items-center gap-2"
              style={{ color: "white", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span
                className="w-6 h-6 rounded flex items-center justify-center"
                style={{ background: "rgba(133,93,246,0.1)", border: "1px solid rgba(133,93,246,0.2)" }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C084FC" strokeWidth="2.5">
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              </span>
              Certifications
            </h3>
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <span key={cert} className="cert-badge">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Education + Military + Leadership */}
        <div className="grid lg:grid-cols-3 gap-6 mt-12">
          {/* Education */}
          <div className="fade-in-up glass-card p-6">
            <h3
              className="text-base font-bold mb-4 flex items-center gap-2"
              style={{ color: "white", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <div key={i} className="timeline-entry">
                  <div className="text-sm font-semibold" style={{ color: "white" }}>
                    {edu.degree}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: "var(--teal)" }}>
                    {edu.institution}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: "var(--text-dim)" }}>
                    {edu.location}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Military */}
          <div className="fade-in-up glass-card p-6">
            <h3
              className="text-base font-bold mb-4 flex items-center gap-2"
              style={{ color: "white", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              Military Service
            </h3>
            <div className="timeline-entry">
              <div className="text-sm font-semibold" style={{ color: "white" }}>
                {military.branch}
              </div>
              <div className="text-xs mt-0.5" style={{ color: "var(--teal)" }}>
                {military.role}
              </div>
              <div className="text-xs mt-0.5" style={{ color: "var(--text-dim)" }}>
                {military.location}
              </div>
            </div>
            <div
              className="mt-4 p-3 rounded-lg text-xs"
              style={{
                background: "rgba(26,209,181,0.05)",
                border: "1px solid rgba(26,209,181,0.1)",
                color: "var(--text-muted)",
              }}
            >
              Veteran — Committed to serving those who serve. Active supporter of veteran transition programs.
            </div>
          </div>

          {/* Leadership */}
          <div className="fade-in-up glass-card p-6">
            <h3
              className="text-base font-bold mb-4 flex items-center gap-2"
              style={{ color: "white", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              Leadership & Volunteer
            </h3>
            <div className="space-y-3">
              {leadership.map((item, i) => (
                <div key={i} className="timeline-entry">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold" style={{ color: "var(--teal)" }}>
                      {item.role}
                    </span>
                    <span className="text-xs font-medium" style={{ color: "white" }}>
                      {item.org}
                    </span>
                  </div>
                  <div className="text-xs mt-0.5 leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
