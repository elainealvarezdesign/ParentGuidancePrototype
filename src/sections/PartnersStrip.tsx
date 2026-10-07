import { useId } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/layout/Section";

/* PartnersStrip (docs/system/sections/partners-strip.md). Title and a continuously scrolling row of
 * partner logos. Pauses on hover; with reduced motion the row is static and wraps. */

export type PartnerLogo = { src: string; alt: string; /** Rendered height in px (40–48). */ height: number };
export type PartnersContent = { title: string; logos: PartnerLogo[] };

export function PartnersStrip({ content }: { content: PartnersContent }) {
  const headingId = useId();
  const track = [...content.logos, ...content.logos, ...content.logos];
  return (
    <Section spacing="none" labelledBy={headingId} className="overflow-hidden py-24">
      <Reveal className="mb-10 text-center">
        <h2 id={headingId} className="text-2xl font-semibold text-pg-teal-dark">
          {content.title}
        </h2>
      </Reveal>
      <div className="relative">
        <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-24 bg-gradient-to-r from-pg-cream to-transparent" />
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-24 bg-gradient-to-l from-pg-cream to-transparent" />
        <ul className="pg-marquee flex w-max items-center motion-reduce:w-auto motion-reduce:flex-wrap motion-reduce:justify-center">
          {track.map((logo, i) => (
            <li key={i} aria-hidden={i >= content.logos.length || undefined} className={`flex shrink-0 items-center justify-center px-10 ${i >= content.logos.length ? "motion-reduce:hidden" : ""}`}>
              <img src={logo.src} alt={i < content.logos.length ? logo.alt : ""} style={{ height: logo.height }} className="w-auto object-contain mix-blend-multiply" />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
