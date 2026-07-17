// Contact.tsx — Obsidian Executive theme
// Contact section + Footer

import { useEffect, useRef } from "react";
import { profile } from "@/lib/data";

export default function Contact() {
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
    <>
      <section
        id="contact"
        ref={sectionRef}
        className="py-24 relative overflow-hidden"
        style={{ background: "var(--bg-secondary)" }}
      >
        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(26,209,181,0.05) 0%, transparent 70%)",
          }}
        />

        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="fade-in-up">
              <div
                className="text-xs font-medium mb-3 tracking-widest uppercase"
                style={{ color: "var(--teal)", fontFamily: "'JetBrains Mono', monospace" }}
              >
                Get In Touch
              </div>
              <h2
                className="text-3xl lg:text-4xl font-extrabold mb-4"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "white" }}
              >
                Let's Build Something{" "}
                <span className="gradient-text">Remarkable</span>
              </h2>
              <div className="teal-line w-16 mx-auto mb-6" />
              <p
                className="text-base leading-relaxed mb-10"
                style={{ color: "var(--text-secondary)" }}
              >
                Whether you need an AI implementation strategy, a complex infrastructure project managed to completion, or a trusted partner to bridge technology and business outcomes — I'm ready to deliver.
              </p>
            </div>

            {/* Contact cards */}
            <div className="fade-in-up grid sm:grid-cols-3 gap-4 mb-10">
              <a
                href={`mailto:${profile.email}`}
                className="glass-card p-5 flex flex-col items-center gap-3 group"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(26,209,181,0.1)", border: "1px solid rgba(26,209,181,0.2)" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-medium mb-0.5" style={{ color: "var(--text-muted)" }}>
                    Email
                  </div>
                  <div className="text-sm font-semibold" style={{ color: "white" }}>
                    {profile.email}
                  </div>
                </div>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-5 flex flex-col items-center gap-3 group"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(26,209,181,0.1)", border: "1px solid rgba(26,209,181,0.2)" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--teal)">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-medium mb-0.5" style={{ color: "var(--text-muted)" }}>
                    LinkedIn
                  </div>
                  <div className="text-sm font-semibold" style={{ color: "white" }}>
                    david-a-mohammed
                  </div>
                </div>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-5 flex flex-col items-center gap-3 group"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(26,209,181,0.1)", border: "1px solid rgba(26,209,181,0.2)" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--teal)">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-medium mb-0.5" style={{ color: "var(--text-muted)" }}>
                    GitHub
                  </div>
                  <div className="text-sm font-semibold" style={{ color: "white" }}>
                    github.com/davmoha
                  </div>
                </div>
              </a>
            </div>

            {/* Primary CTA */}
            <div className="fade-in-up flex flex-col sm:flex-row gap-3 justify-center">
              <a href={`mailto:${profile.email}`} className="btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Send a Message
              </a>
              <a href={profile.website} target="_blank" rel="noopener noreferrer" className="btn-outline">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                Mo-Blind.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-8"
        style={{
          background: "var(--bg-primary)",
          borderTop: "1px solid rgba(26,209,181,0.1)",
        }}
      >
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/manus-storage/dm-logo_3a928d6c.png"
                alt="DM"
                className="w-7 h-7 object-contain"
                style={{ filter: "drop-shadow(0 0 4px rgba(26,209,181,0.3))" }}
              />
              <span className="text-sm font-semibold" style={{ color: "white" }}>
                David Mohammed
              </span>
              <span
                className="text-xs"
                style={{ color: "var(--teal)", fontFamily: "'JetBrains Mono', monospace" }}
              >
                PMP · CSM · PCCSE
              </span>
            </div>
            <div className="text-xs text-center" style={{ color: "var(--text-dim)" }}>
              © {new Date().getFullYear()} David Mohammed. Tampa, FL.
            </div>
            <div className="flex items-center gap-4">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
                style={{ color: "var(--text-dim)" }}
                aria-label="LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
                style={{ color: "var(--text-dim)" }}
                aria-label="GitHub"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href={profile.website}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
                style={{ color: "var(--text-dim)" }}
                aria-label="Website"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
