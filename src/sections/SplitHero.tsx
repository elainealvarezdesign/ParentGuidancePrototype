import type { ReactNode } from "react";
import { motion } from "motion/react";
import type { Cta, Media, RichText as RichTextValue, Title } from "@/content/types";
import { RichText } from "@/components/ui/RichText";
import { cn } from "@/lib/cn";
import { CtaButton } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { PersonLine } from "@/components/ui/Avatar";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { ArrowRight } from "@/components/ui/icons";
import { Section } from "@/components/layout/Section";
import { DURATION, EASE_OUT } from "@/lib/motion";

/* SplitHero (docs/system/sections/split-hero.md). The first section of most inner pages: text on the left,
 * a photo with an offset sage block on the right (stacked on mobile). Always contains the page's <h1>.
 *
 * Media shapes (match Figma "Hero Media"):
 *   "wide"     16:10 photo, sage block bottom-right (Ask a Therapist, Get Help)
 *   "square"   1:1 photo, square sage block bottom-right (On-Demand Courses)
 *   "portrait" tall photo, sage block top-right with a rounded corner (Parent Coaching)
 */

export type SplitHeroContent = {
  /** Small uppercase label (section name) or a highlighted badge ("Latest Answer"). */
  eyebrow?: string;
  eyebrowStyle?: "label" | "badge";
  /** Up to ~80 characters. `highlight` renders in italic teal. */
  title: Title;
  /** 1–2 sentences, up to ~180 characters. May mark one key fact as **bold**. */
  body?: RichTextValue;
  /** A person attached to the content (answer author, coach). */
  person?: { name: string; role?: string };
  /** Up to two actions: the first is primary, the second secondary. */
  actions?: Cta[];
  image: Media;
  shape?: "wide" | "square" | "portrait";
};

function Action({ cta, primary }: { cta: Cta; primary: boolean }) {
  const arrow = primary && cta.to ? <ArrowRight size={16} aria-hidden="true" /> : null;
  return <CtaButton cta={cta} variant={primary ? "primary" : "secondary"} trailing={arrow} />;
}

function HeroMedia({ image, shape }: { image: Media; shape: NonNullable<SplitHeroContent["shape"]> }) {
  if (shape === "portrait")
    return (
      <div className="relative h-[336px] w-[300px] shrink-0 sm:h-[444px] sm:w-[397px]">
        <div className="absolute top-[11.3%] left-[15.9%] h-[82.7%] w-[84.1%] rounded-tr-pg-2xl bg-pg-sage" />
        <div className="absolute top-0 left-0 h-[94.1%] w-[84.1%] overflow-hidden rounded-pg-xl shadow-pg-card">
          <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
        </div>
      </div>
    );
  if (shape === "square")
    return (
      <div className="relative mx-auto flex w-full max-w-[420px] items-center justify-center py-4 pr-4 lg:max-w-none">
        <div className="absolute right-0 bottom-0 aspect-square w-[62%] rounded-pg-md bg-pg-sage" />
        <img
          src={image.src}
          alt={image.alt}
          className="relative mr-6 mb-6 aspect-square w-[65%] rounded-pg-md object-cover object-top shadow-pg-card"
        />
      </div>
    );
  return (
    <div className="relative mx-auto w-full max-w-[570px] pr-7 pb-9 md:pr-10 md:pb-12 lg:mx-0 lg:ml-auto">
      <div className="absolute right-0 bottom-0 h-[78%] w-[66%] rounded-pg-xl bg-pg-sage" />
      <img
        src={image.src}
        alt={image.alt}
        className="relative aspect-[16/10] w-full rounded-pg-xl object-cover shadow-pg-card"
      />
    </div>
  );
}

export function SplitHero({
  content,
  children,
}: {
  content: SplitHeroContent;
  /** Extra block under the text (e.g. a crisis notice). */ children?: ReactNode;
}) {
  const { eyebrow, eyebrowStyle = "label", title, body, person, actions = [], image, shape = "wide" } = content;
  return (
    <Section belowNav spacing="l" className="overflow-hidden">
      <div className="mx-auto grid max-w-pg-page grid-cols-1 items-center gap-12 px-6 md:px-10 lg:grid-cols-2 lg:gap-16 lg:px-14">
        <motion.div
          className="flex max-w-[540px] flex-col items-start gap-6"
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: DURATION.reveal, ease: EASE_OUT }}
        >
          {eyebrow &&
            (eyebrowStyle === "badge" ? (
              <Badge tone="teal" shape="label" icon={<span className="h-1.5 w-1.5 rounded-full bg-white/80" />}>
                {eyebrow}
              </Badge>
            ) : (
              <Eyebrow>{eyebrow}</Eyebrow>
            ))}
          <h1 className="text-pg-h1 text-pg-navy">
            {title.text}
            {title.highlight && <em className="text-pg-teal-dark italic">{title.highlight}</em>}
            {title.after}
          </h1>
          {body && (
            <p className="max-w-[500px] text-pg-body-lg text-pg-slate">
              <RichText text={body} />
            </p>
          )}
          {person && <PersonLine name={person.name} detail={person.role} />}
          {children}
          {actions.length > 0 && (
            <div className="flex flex-wrap items-center gap-3">
              {actions.map((a, i) => (
                <Action key={a.label} cta={a} primary={i === 0} />
              ))}
            </div>
          )}
        </motion.div>
        <motion.div
          className={cn("flex justify-center", shape === "wide" && "block")}
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: DURATION.reveal, delay: 0.1, ease: EASE_OUT }}
        >
          <HeroMedia image={image} shape={shape} />
        </motion.div>
      </div>
    </Section>
  );
}
