// Resume.tsx — Obsidian Executive theme
// Full professional resume display with print-friendly layout

import { useEffect, useRef } from "react";
import {
  profile,
  experience,
  education,
  military,
  certifications,
  competencies,
  leadership,
} from "@/lib/data";

export default function Resume() {
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
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <section
      id="resume"
      ref={sectionRef}
      className="py-24"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="container">
        {/* Section header */}
        <div className="fade-in-up mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div
              className="text-xs font-medium mb-3 tracking-widest uppercase"
              style={{ color: "var(--teal)", fontFamily: "'JetBrains Mono', monospace" }}
            >
              Full Resume
            </div>
            <h2
              className="text-3xl lg:text-4xl font-extrabold mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "white" }}
            >
              Professional{" "}
              <span className="gradient-text">Resume</span>
            </h2>
            <div className="teal-line w-16" />
          </div>
          <button
            onClick={handlePrint}
            className="btn-primary self-start sm:self-auto"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 6 2 18 2 18 9" />
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
              <rect x="6" y="14" width="12" height="8" />
            </svg>
            Print / Save PDF
          </button>
        </div>

        {/* Resume card */}
        <div
          className="fade-in-up rounded-2xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(26,209,181,0.15)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
          }}
          id="resume-print"
        >
          {/* Resume header */}
          <div
            className="p-8 lg:p-10"
            style={{
              background: "linear-gradient(135deg, rgba(26,209,181,0.08) 0%, rgba(133,93,246,0.05) 100%)",
              borderBottom: "1px solid rgba(26,209,181,0.12)",
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
              <div>
                <h1
                  className="text-3xl lg:text-4xl font-extrabold mb-1"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "white" }}
                >
                  {profile.name}
                </h1>
                <div className="flex flex-wrap gap-2 mb-3">
                  {profile.credentials.split(", ").map((cred) => (
                    <span key={cred} className="cert-badge">
                      {cred}
                    </span>
                  ))}
                </div>
                <div
                  className="text-base font-semibold gradient-text"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {profile.title} — {profile.subtitle}
                </div>
              </div>
              <div
                className="text-sm space-y-1.5 flex-shrink-0"
                style={{ color: "var(--text-secondary)" }}
              >
                <div className="flex items-center gap-2">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {profile.location}
                </div>
                <div className="flex items-center gap-2">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  {profile.phone}
                </div>
                <div className="flex items-center gap-2">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <a href={`mailto:${profile.email}`} style={{ color: "var(--teal)", textDecoration: "none" }}>
                    {profile.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: "var(--teal)", textDecoration: "none" }}>
                    linkedin.com/in/david-a-mohammed
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 lg:p-10 space-y-10">
            {/* Professional Summary */}
            <div>
              <h3 className="resume-section-title">Professional Summary</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {profile.summary} Directing a portfolio of 3,000 managed service deployments with up to $12M budget oversight, consistently achieving a 95% on-time delivery rate. Utilizing AI Operations and Agentic Features to establish technology integration frameworks that optimize speed to market and ensure the best customer experience.
              </p>
            </div>

            {/* Core Competencies */}
            <div>
              <h3 className="resume-section-title">Core Competencies</h3>
              <div className="flex flex-wrap gap-2">
                {competencies.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="resume-section-title">Certifications</h3>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <span key={cert} className="cert-badge">
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Professional Experience */}
            <div>
              <h3 className="resume-section-title">Professional Experience</h3>
              <div className="space-y-8">
                {experience.map((job, idx) => (
                  <div key={idx} className="timeline-entry">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 mb-3">
                      <div>
                        <div
                          className="font-bold text-base"
                          style={{ color: "white", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        >
                          {job.company}
                        </div>
                        <div className="text-sm font-medium" style={{ color: "var(--teal)" }}>
                          {job.role}
                        </div>
                        <div className="text-xs" style={{ color: "var(--text-dim)" }}>
                          {job.location}
                        </div>
                      </div>
                      <div
                        className="text-xs flex-shrink-0"
                        style={{ color: "var(--text-muted)", fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {job.period}
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {job.highlights.map((h, hi) => (
                        <li
                          key={hi}
                          className="flex gap-2 text-sm leading-relaxed"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          <span
                            className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: "rgba(26,209,181,0.6)" }}
                          />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Military Service */}
            <div>
              <h3 className="resume-section-title">Military Service</h3>
              <div className="timeline-entry">
                <div className="font-semibold text-sm" style={{ color: "white" }}>
                  {military.branch} — {military.role}
                </div>
                <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                  {military.location}
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="resume-section-title">Education</h3>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <div key={i} className="timeline-entry">
                    <div className="font-semibold text-sm" style={{ color: "white" }}>
                      {edu.degree}
                    </div>
                    <div className="text-sm" style={{ color: "var(--teal)" }}>
                      {edu.institution}
                    </div>
                    <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                      {edu.location}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership */}
            <div>
              <h3 className="resume-section-title">Leadership & Volunteer Experience</h3>
              <div className="space-y-3">
                {leadership.map((item, i) => (
                  <div key={i} className="timeline-entry">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-bold" style={{ color: "var(--teal)" }}>
                        {item.role},
                      </span>
                      <span className="text-sm font-semibold" style={{ color: "white" }}>
                        {item.org}
                      </span>
                      <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                        — {item.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
