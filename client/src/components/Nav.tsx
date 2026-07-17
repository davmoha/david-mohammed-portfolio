// Nav.tsx — Obsidian Executive theme
// Sticky top nav with Mo-Blind.com teal (#1AD1B5) active indicator

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Determine active section
      const sections = navItems.map((item) => item.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(10, 13, 20, 0.92)"
          : "rgba(10, 13, 20, 0.6)",
        backdropFilter: "blur(16px)",
        borderBottom: scrolled
          ? "1px solid rgba(26, 209, 181, 0.12)"
          : "1px solid transparent",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#about"
            className="flex items-center gap-3 group"
            style={{ textDecoration: "none" }}
          >
            <img
              src="/manus-storage/dm-logo_3a928d6c.png"
              alt="DM Logo"
              className="w-9 h-9 object-contain"
              style={{ filter: "drop-shadow(0 0 6px rgba(26,209,181,0.4))" }}
            />
            <div className="hidden sm:block">
              <div
                className="font-bold text-sm leading-tight"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: "white",
                }}
              >
                {profile.name}
              </div>
              <div
                className="text-xs"
                style={{ color: "var(--teal)", fontFamily: "'JetBrains Mono', monospace" }}
              >
                {profile.credentials}
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link"
                style={{
                  color:
                    activeSection === item.href.slice(1)
                      ? "var(--teal)"
                      : "var(--text-muted)",
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ padding: "0.4rem 1rem", fontSize: "0.8rem" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="btn-primary"
              style={{ padding: "0.4rem 1rem", fontSize: "0.8rem" }}
            >
              Hire Me
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg"
            style={{
              color: "var(--text-muted)",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="md:hidden py-4 border-t"
            style={{ borderColor: "rgba(26,209,181,0.12)" }}
          >
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 rounded-lg text-sm font-medium"
                  style={{
                    color:
                      activeSection === item.href.slice(1)
                        ? "var(--teal)"
                        : "var(--text-secondary)",
                    background:
                      activeSection === item.href.slice(1)
                        ? "rgba(26,209,181,0.08)"
                        : "transparent",
                    textDecoration: "none",
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex gap-2 mt-3 px-3">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline flex-1 justify-center"
                  style={{ fontSize: "0.8rem" }}
                >
                  GitHub
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="btn-primary flex-1 justify-center"
                  style={{ fontSize: "0.8rem" }}
                >
                  Hire Me
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
