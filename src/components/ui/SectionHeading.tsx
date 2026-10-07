import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/* Section headings (docs/system/components/section-heading.md).
 *
 * <SectionHeading>  centered or left block: optional eyebrow, title (h2 by default), optional intro.
 * <ListHeading>     the "Section Header" above lists: sage bar, title and a count badge.
 * <Eyebrow>         the small uppercase label above a title.
 */

export function Eyebrow({
  children,
  tone = "teal",
  size = "small",
  className,
}: {
  children: ReactNode;
  tone?: "teal" | "navy" | "inverse";
  /** "small": 11px label (default). "large": 16px uppercase label above big section titles. */
  size?: "small" | "large";
  className?: string;
}) {
  return (
    <p
      className={cn(
        size === "small" ? "text-pg-eyebrow" : "text-base font-semibold tracking-pg-eyebrow uppercase",
        tone === "teal" ? "text-pg-teal-dark" : tone === "navy" ? "text-pg-navy" : "text-pg-sage",
        className,
      )}
    >
      {children}
    </p>
  );
}

export type SectionHeadingProps = {
  title: ReactNode;
  eyebrow?: ReactNode;
  intro?: ReactNode;
  align?: "center" | "left";
  /** Heading level; the visual size stays text-pg-h1 for h1/h2 sections and text-pg-h2 for "small". */
  as?: "h1" | "h2" | "h3";
  size?: "large" | "small";
  tone?: "default" | "inverse";
  eyebrowSize?: "small" | "large";
  className?: string;
};

export function SectionHeading({ title, eyebrow, intro, align = "center", as: Tag = "h2", size = "large", tone = "default", eyebrowSize = "small", className }: SectionHeadingProps) {
  const inverse = tone === "inverse";
  return (
    <div className={cn("flex flex-col gap-4", align === "center" ? "mx-auto max-w-3xl items-center text-center" : "items-start", className)}>
      {eyebrow && (
        <Eyebrow tone={inverse ? "inverse" : eyebrowSize === "large" ? "navy" : "teal"} size={eyebrowSize}>
          {eyebrow}
        </Eyebrow>
      )}
      <Tag className={cn(size === "large" ? "text-pg-h1" : "text-pg-h2", inverse ? "text-white" : "text-pg-navy")}>{title}</Tag>
      {intro && <div className={cn("text-pg-body-lg", inverse ? "text-white/80" : "text-pg-navy")}>{intro}</div>}
    </div>
  );
}

export function ListHeading({ title, count, as: Tag = "h2", action, className }: { title: ReactNode; count?: ReactNode; as?: "h2" | "h3"; action?: ReactNode; className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center justify-between gap-3", className)}>
      <div className="flex items-center gap-2">
        <span className="h-5 w-1 rounded-full bg-pg-sage" aria-hidden="true" />
        <Tag className="text-pg-h3 text-pg-navy">{title}</Tag>
        {count !== undefined && <span className="rounded-full bg-pg-tint px-2 py-0.5 text-xs font-medium text-pg-teal-dark">{count}</span>}
      </div>
      {action}
    </div>
  );
}
