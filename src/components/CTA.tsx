"use client";

import Image from "next/image";
import Reveal from "./FadeIn";

const SOCIAL_LINKS = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/tyler-dial18/" },
  { label: "GitHub", url: "https://github.com/tylerdial1818" },
  { label: "Instagram", url: "https://www.instagram.com/tyler_dial97/" },
];

export default function CTA() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap">
        <Reveal>
          <div className="eyebrow">Contact</div>
        </Reveal>

        <div className="contact__grid">
          <div>
            <Reveal delay={0.08}>
              <h2 className="h2" style={{ marginTop: "0.3em" }}>
                Let&apos;s connect.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="lead" style={{ marginTop: "clamp(20px, 3vh, 30px)" }}>
                Open to collaborations, interesting problems, and good conversation.
              </p>
            </Reveal>

            <div className="contact__links">
              {SOCIAL_LINKS.map((link, index) => (
                <Reveal delay={0.2 + index * 0.06} key={link.label}>
                  <a
                    className={`btn${index === 0 ? " btn--accent" : ""}`}
                    href={link.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {link.label} ↗
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.18}>
            <div className="contact__portrait">
              <Image
                alt="Tyler Dial"
                fill
                sizes="(max-width: 880px) 100vw, 38vw"
                src="/images/DSC08219-portrait.jpg"
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
          </Reveal>
        </div>

        <div className="rule" style={{ marginTop: "clamp(60px, 10vh, 120px)" }} />
        <div className="foot">
          <span>&copy; 2026 - Tyler Dial</span>
          <span>Built for the scroll - Neue Montreal</span>
        </div>
      </div>
    </section>
  );
}
