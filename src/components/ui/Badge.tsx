import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/* Badge / Tag (docs/system/components/badge.md). Short, non-interactive label: a category, content type,
 * count or status. Every tone pairs text and background at 4.5:1 or more. */

export type BadgeTone = "navy" | "teal" | "tint" | "cream" | "success" | "warning" | "error" | "overlay";

const tones: Record<BadgeTone, string> = {
  navy: "bg-pg-navy text-white",
  teal: "bg-pg-teal-dark text-white",
  tint: "bg-pg-tint text-pg-teal-dark",
  cream: "bg-pg-cream-dark text-pg-slate",
  success: "bg-pg-success-soft text-pg-success",
  warning: "bg-pg-warning-soft text-pg-warning",
  error: "bg-pg-error-soft text-pg-error",
  /** On top of photos. */
  overlay: "bg-pg-navy/80 text-white backdrop-blur-sm",
};

export type BadgeProps = {
  children: ReactNode;
  tone?: BadgeTone;
  /** "pill" (default) or "label" (8px radius, uppercase eyebrow style). */
  shape?: "pill" | "label";
  icon?: ReactNode;
  className?: string;
};

export function Badge({ children, tone = "tint", shape = "pill", icon, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center gap-1 whitespace-nowrap [&_svg]:shrink-0",
        shape === "pill" ? "rounded-full px-3 py-1 text-xs font-semibold" : "text-pg-eyebrow rounded-pg-md px-4 py-2",
        tones[tone],
        className,
      )}
    >
      {icon}
      {children}
    </span>
  );
}
