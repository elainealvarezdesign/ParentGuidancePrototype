import { useRef } from "react";
import { Link } from "react-router";
import { motion, useInView } from "motion/react";
import type { Cta, Media } from "@/content/types";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/layout/Section";

/* ResourceTiles (docs/system/sections/resource-tiles.md). Four image tiles that link to the main areas
 * of the site, 2×2 on mobile and a row of four from 1024px. */

export type ResourceTile = {
  /** 2–4 words; use "\n" to control the line break. */
  title: string;
  /** One sentence, up to ~60 characters. */
  description: string;
  image: Media;
  /** Darken the photo slightly when it is busy. */
  dim?: boolean;
  to: string;
};

export type ResourceTilesContent = { tiles: ResourceTile[]; more?: Cta };

const MotionLink = motion.create(Link);

function Tile({ tile, index }: { tile: ResourceTile; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <MotionLink
      ref={ref}
      to={tile.to}
      className="group block w-full shrink-0 overflow-hidden rounded-t-pg-xl bg-pg-sage no-underline lg:w-44"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      whileHover={{ y: -6, boxShadow: "var(--pg-shadow-card-hover)" }}
    >
      <div className="relative h-32 overflow-hidden rounded-t-pg-md">
        <img src={tile.image.src} alt={tile.image.alt} className="h-full w-full rounded-t-pg-md object-cover" />
        {tile.dim && <div className="absolute inset-0 rounded-t-pg-md bg-pg-navy/20" />}
        <div className="absolute inset-0 bg-pg-sage/20 opacity-0 transition-opacity duration-(--pg-dur-fast) group-hover:opacity-100 group-focus-visible:opacity-100" />
      </div>
      <div className="flex flex-col gap-2 px-4 pt-3 pb-4 text-pg-navy">
        <h2 className="text-xl leading-tight font-bold whitespace-pre-line">{tile.title}</h2>
        <p className="text-xs">{tile.description}</p>
        <span className="text-xs font-medium underline" aria-hidden="true">
          Learn More
        </span>
      </div>
    </MotionLink>
  );
}

export function ResourceTiles({ content }: { content: ResourceTilesContent }) {
  return (
    <Section spacing="none" className="px-6 pb-16 md:px-10 lg:px-14">
      <div className="mx-auto flex w-full max-w-md flex-col lg:w-fit lg:max-w-none">
        <div className="grid grid-cols-2 gap-4 lg:flex lg:gap-5">
          {content.tiles.map((tile, i) => (
            <Tile key={tile.to} tile={tile} index={i} />
          ))}
        </div>
        {content.more?.to && (
          <Reveal from="none" className="mt-3 flex justify-end">
            <Link to={content.more.to} className="text-sm text-pg-teal-dark underline">
              {content.more.label}
            </Link>
          </Reveal>
        )}
      </div>
    </Section>
  );
}
