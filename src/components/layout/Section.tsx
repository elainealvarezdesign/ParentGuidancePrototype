import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/* Layout primitives (docs/system/layout.md).
 *
 * <Section>   a full-width band with a background and vertical rhythm. Pages are a stack of Sections.
 * <Container> the content column: page gutter (24 / 40 / 56px) and a max width.
 *
 *   <Section tone="tint-soft" spacing="l">
 *     <Container>…</Container>
 *   </Section>
 *
 * Alternate section tones instead of drawing divider lines between sections.
 */

export type SectionTone = "cream" | "white" | "tint" | "tint-soft" | "sage" | "navy";

const tones: Record<SectionTone, string> = {
  cream: "bg-pg-cream",
  white: "bg-white",
  tint: "bg-pg-tint",
  "tint-soft": "bg-pg-tint-soft",
  sage: "bg-pg-sage",
  navy: "bg-pg-navy text-white",
};

const spacings = {
  none: "",
  s: "py-8 md:py-10",
  m: "py-12 md:py-14",
  l: "py-14 md:py-20",
} as const;

export type SectionProps = {
  children: ReactNode;
  tone?: SectionTone;
  spacing?: keyof typeof spacings;
  /** First section of a page: adds 56px on top so content clears the fixed navbar. */
  belowNav?: boolean;
  /** Landmark name for screen readers; pass the id of the section heading. */
  labelledBy?: string;
  id?: string;
  className?: string;
};

export function Section({
  children,
  tone = "cream",
  spacing = "m",
  belowNav,
  labelledBy,
  id,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(tones[tone], spacings[spacing], belowNav && "mt-14", className)}
    >
      {children}
    </section>
  );
}

const widths = {
  page: "max-w-pg-page",
  content: "max-w-pg-content",
  reading: "max-w-pg-reading",
  full: "",
} as const;

export function Container({
  children,
  width = "page",
  className,
}: {
  children: ReactNode;
  width?: keyof typeof widths;
  className?: string;
}) {
  return <div className={cn("mx-auto w-full px-6 md:px-10 lg:px-14", widths[width], className)}>{children}</div>;
}
