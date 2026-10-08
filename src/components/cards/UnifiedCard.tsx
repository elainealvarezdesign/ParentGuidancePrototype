import { forwardRef, type ComponentPropsWithoutRef } from "react";
import type { Cta, Media } from "@/content/types";
import { cn } from "@/lib/cn";
import { CtaButton } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { ArrowRight } from "@/components/ui/icons";

/* UnifiedCard (docs/system/components/cards.md#unified-card). The one card for browsable items: courses,
 * help resources, featured resources. Image on top (photo or logo), optional badge and person avatar on the
 * image, a title, optional description and meta line, one action, optional footer line.
 *
 *   <UnifiedCard image={{ src, alt: "" }} badge="Anxiety" person="Dr. Kevin Skinner" title="…"
 *     meta="1h 30m • 6 lessons" footer="Dr. Kevin Skinner" cta={{ label: "Begin Course", to: "/courses/…" }} />
 *
 * Only the button is interactive. External links (`cta.href`) open in a new tab and say so. The ref and any
 * other native <article> props (id, data-*, aria-*) go to the root element. */

export type UnifiedCardProps = Omit<ComponentPropsWithoutRef<"article">, "title" | "children"> & {
  image: Media;
  /** "photo" fills the frame; "logo" shows the whole image on white with padding. */
  imageKind?: "photo" | "logo";
  /** Extra padding for logos that are tall or square. */
  logoPadding?: "default" | "large";
  /** Category or type, 1–3 words. */
  badge?: string;
  /** Full name of the person behind the item; shown as an avatar on the image. */
  person?: string;
  /** Up to ~70 characters; long titles are kept, not truncated. */
  title: string;
  /** One sentence, up to ~110 characters. */
  description?: string;
  /** Short facts line: duration, lessons, availability. */
  meta?: string;
  /** Small centered line under the button (instructor, source). */
  footer?: string;
  cta: Cta;
  headingLevel?: "h2" | "h3";
};

const UnifiedCard = forwardRef<HTMLElement, UnifiedCardProps>(function UnifiedCard(
  {
    image,
    imageKind = "photo",
    logoPadding = "default",
    badge,
    person,
    title,
    description,
    meta,
    footer,
    cta,
    headingLevel: Heading = "h3",
    className,
    ...props
  },
  ref,
) {
  const logo = imageKind === "logo";

  return (
    <article
      ref={ref}
      {...props}
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-pg-xl border border-pg-line bg-white shadow-pg-card",
        className,
      )}
    >
      <div className={cn("relative h-38 overflow-hidden", logo ? "bg-white" : "bg-pg-tint-soft")}>
        <img
          src={image.src}
          alt={image.alt}
          className={cn(
            "h-full w-full",
            logo ? cn("object-contain", logoPadding === "large" ? "p-10" : "p-8") : "object-cover",
          )}
        />
        {badge && (
          <Badge tone="navy" className="absolute top-3 left-3">
            {badge}
          </Badge>
        )}
        {person && <Avatar name={person} size="s" ring className="absolute bottom-3 left-3" />}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <Heading className="min-h-11 text-base leading-snug font-bold text-pg-navy">{title}</Heading>
        {description && <p className="mt-2 text-xs text-pg-slate">{description}</p>}
        {meta && <p className="mt-2 text-xs text-pg-teal-dark">{meta}</p>}

        <div className="mt-auto pt-4">
          <CtaButton
            cta={cta}
            className="w-full"
            aria-label={`${cta.label}: ${title}`}
            trailing={<ArrowRight size={16} aria-hidden="true" />}
          />
          {footer && <p className="mt-3 text-center text-xs text-pg-slate">{footer}</p>}
        </div>
      </div>
    </article>
  );
});

export default UnifiedCard;
