"use client";

import Reveal from "./FadeIn";

const SOCIAL_LINKS = [
  { name: "GitHub", url: "https://github.com/tylerdial1818" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/tyler-dial18/" },
  { name: "Instagram", url: "https://www.instagram.com/tyler_dial97/" },
];

export default function CTA() {
  const px = "clamp(2rem, 7vw, 7rem)";

  return (
    <section id="connect" style={{ padding: `12rem ${px} 10rem`, background: "var(--ink)", color: "#fff" }}>
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
          <div>
            <div className="uppercase" style={{ fontSize: "0.62rem", letterSpacing: "0.2em", color: "var(--muted-dark)", marginBottom: "1.5rem" }}>Contact</div>
            <h2 className="font-display font-[800]" style={{ fontSize: "clamp(3rem, 7vw, 6rem)", letterSpacing: "-0.04em", lineHeight: 0.96, marginBottom: "2.5rem" }}>
              Let&apos;s<br />connect<span style={{ color: "var(--accent)" }}>.</span>
            </h2>
            <p className="max-w-[380px]" style={{ color: "var(--muted-dark)", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "3rem" }}>
              Open to collaborations, interesting problems, and good conversation.
            </p>
            <a href="https://www.linkedin.com/in/tyler-dial18/" target="_blank" rel="noopener noreferrer" className="cta-btn inline-block uppercase" style={{ padding: "1rem 2.8rem", border: "1px solid rgba(255,255,255,0.15)", fontSize: "0.72rem", letterSpacing: "0.16em", color: "#fff", borderRadius: 2 }}>
              Connect on LinkedIn
            </a>
          </div>
          <div className="flex gap-8 justify-start md:justify-end">
            {SOCIAL_LINKS.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="nav-a text-[0.82rem]" style={{ color: "var(--muted-dark)", letterSpacing: "0.02em", cursor: "pointer" }}>{s.name}</a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
