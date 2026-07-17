// Projects.tsx — Obsidian Executive theme (Revised)
// Executive proof-points first, then full repo grid | Diamond geometry motif | Curated hierarchy

import { useEffect, useRef, useState } from "react";
import { repos, languageColors, profile } from "@/lib/data";

const categories = ["All", "AI / Automation", "Project Management", "Web Development", "Finance", "Business Tools", "IoT"];

const featuredProjects = [
  {
    name: "PMP-Dashboard",
    description: "Dynamic project management dashboard for tracking KPIs, milestones, and delivery metrics across complex enterprise portfolios.",
    language: "TypeScript",
    url: "https://github.com/davmoha/PMP-Dashboard",
    outcome: "Real-time PM visibility",
    category: "Project Management",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    name: "gov-contract-matcher",
    description: "Mobile app that matches user products and services to government contracts via SAM.gov API, with AI-assisted proposal creation.",
    language: "TypeScript",
    url: "https://github.com/davmoha/gov-contract-matcher",
    outcome: "AI-powered contract discovery",
    category: "AI / Automation",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="11" y1="8" x2="11" y2="14" />
        <line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    ),
  },
  {
    name: "Veteran-Resume-Optimizer",
    description: "AI-powered tool that tailors resumes for veterans transitioning to civilian careers, using past resumes and job descriptions as inputs.",
    language: "N/A",
    url: "https://github.com/davmoha/Veteran-Resume-Optimizer",
    outcome: "Veteran career support",
    category: "AI / Automation",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    name: "veteran-finance-sense",
    description: "Financial planning and literacy platform designed for veterans transitioning to civilian careers, covering budgeting, benefits, and investment basics.",
    language: "TypeScript",
    url: "https://github.com/davmoha/veteran-finance-sense",
    outcome: "Veteran financial empowerment",
    category: "Finance",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    name: "handyman-brandon-redesign",
    description: "High-end website redesign for Brandon's Finest Handyman Services featuring background animations, dedicated service pages, and cohesive brand identity.",
    language: "TypeScript",
    url: "https://github.com/davmoha/handyman-brandon-redesign",
    outcome: "Client web transformation",
    category: "Web Development",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    name: "voucher-automation",
    description: "ANE voucher automation system that streamlines voucher processing workflows, reducing manual overhead for non-profit operations.",
    language: "JavaScript",
    url: "https://github.com/davmoha/voucher-automation",
    outcome: "Non-profit workflow automation",
    category: "AI / Automation",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = activeCategory === "All"
    ? repos
    : repos.filter((r) => r.category === activeCategory);

  const displayed = showAll ? filtered : filtered.slice(0, 9);

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

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="container">
        {/* Section header */}
        <div className="fade-in-up mb-14">
          <div
            className="text-xs font-medium mb-3 tracking-widest uppercase"
            style={{ color: "var(--teal)", fontFamily: "'JetBrains Mono', monospace" }}
          >
            GitHub Repositories
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2
                className="text-3xl lg:text-4xl font-extrabold mb-4"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "white" }}
              >
                Selected{" "}
                <span className="gradient-text">Work</span>
              </h2>
              <div className="teal-line w-16" />
            </div>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline self-start sm:self-auto"
              style={{ fontSize: "0.8rem" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              All Repos on GitHub
            </a>
          </div>
        </div>

        {/* Featured projects — executive proof points */}
        <div className="fade-in-up mb-16">
          <div
            className="text-xs font-medium mb-6 tracking-widest uppercase flex items-center gap-3"
            style={{ color: "var(--text-muted)", fontFamily: "'JetBrains Mono', monospace" }}
          >
            <span
              className="w-6 h-px"
              style={{ background: "rgba(26,209,181,0.4)" }}
            />
            Featured Projects
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredProjects.map((proj, idx) => (
              <a
                key={proj.name}
                href={proj.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="h-full rounded-xl p-6 flex flex-col gap-4 transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(26,209,181,0.15)",
                    animationDelay: `${idx * 60}ms`,
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.background = "rgba(26,209,181,0.05)";
                    el.style.borderColor = "rgba(26,209,181,0.35)";
                    el.style.boxShadow = "0 0 30px rgba(26,209,181,0.1), 0 8px 32px rgba(0,0,0,0.3)";
                    el.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.background = "rgba(255,255,255,0.03)";
                    el.style.borderColor = "rgba(26,209,181,0.15)";
                    el.style.boxShadow = "none";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(26,209,181,0.08)",
                      border: "1px solid rgba(26,209,181,0.2)",
                      color: "var(--teal)",
                    }}
                  >
                    {proj.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div
                      className="text-base font-bold mb-2 group-hover:text-white transition-colors"
                      style={{ color: "var(--text-secondary)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {proj.name}
                    </div>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {proj.description}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-2" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ background: languageColors[proj.language] || "#6B7280" }}
                      />
                      <span
                        className="text-xs"
                        style={{ color: "var(--text-dim)", fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {proj.language}
                      </span>
                    </div>
                    <span
                      className="text-xs px-2 py-0.5 rounded"
                      style={{
                        background: "rgba(26,209,181,0.08)",
                        border: "1px solid rgba(26,209,181,0.15)",
                        color: "var(--teal)",
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {proj.outcome}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* All repos section */}
        <div>
          <div
            className="text-xs font-medium mb-6 tracking-widest uppercase flex items-center gap-3"
            style={{ color: "var(--text-muted)", fontFamily: "'JetBrains Mono', monospace" }}
          >
            <span
              className="w-6 h-px"
              style={{ background: "rgba(133,93,246,0.4)" }}
            />
            All Repositories ({repos.length})
          </div>

          {/* Category filter */}
          <div className="fade-in-up flex flex-wrap gap-2 mb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setShowAll(false); }}
                className="text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-150"
                style={{
                  background: activeCategory === cat ? "rgba(26,209,181,0.15)" : "rgba(255,255,255,0.04)",
                  border: activeCategory === cat ? "1px solid rgba(26,209,181,0.4)" : "1px solid rgba(255,255,255,0.08)",
                  color: activeCategory === cat ? "var(--teal)" : "var(--text-muted)",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Repo grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {displayed.map((repo, idx) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="fade-in-up glass-card p-4 flex flex-col gap-2 group"
                style={{ textDecoration: "none", animationDelay: `${idx * 40}ms` }}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" className="flex-shrink-0">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                    </svg>
                    <span
                      className="text-sm font-semibold group-hover:text-white transition-colors"
                      style={{ color: "var(--text-secondary)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {repo.name}
                    </span>
                  </div>
                  {repo.featured && (
                    <span
                      className="text-xs px-1.5 py-0.5 rounded flex-shrink-0"
                      style={{
                        background: "rgba(26,209,181,0.08)",
                        border: "1px solid rgba(26,209,181,0.2)",
                        color: "var(--teal)",
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      ★
                    </span>
                  )}
                </div>

                <p
                  className="text-xs leading-relaxed flex-1"
                  style={{ color: "var(--text-muted)" }}
                >
                  {repo.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span
                      className="lang-dot"
                      style={{ background: languageColors[repo.language] || "#6B7280" }}
                    />
                    <span
                      className="text-xs"
                      style={{ color: "var(--text-dim)", fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {repo.language}
                    </span>
                  </div>
                  <span
                    className="text-xs"
                    style={{ color: "var(--text-dim)", fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {repo.category}
                  </span>
                </div>
              </a>
            ))}
          </div>

          {!showAll && filtered.length > 9 && (
            <div className="mt-6 text-center">
              <button onClick={() => setShowAll(true)} className="btn-outline">
                Show All {filtered.length} Repos
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
