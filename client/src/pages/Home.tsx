// Home.tsx — David Mohammed Portfolio
// Obsidian Executive theme — Mo-Blind.com color scheme
// #0A0D14 bg | #1AD1B5 teal | #855DF6 purple | Plus Jakarta Sans + Inter

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}
    >
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}
