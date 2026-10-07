import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { AlertCircle, AlertTriangle, CheckCircle, Info } from "./icons";

/* Notice (docs/system/components/notice.md). An inline message box: an icon and one or two sentences.
 *
 *   tone="crisis"   the "call 911" safety line. Always present on Get Help and Contact Us.
 *   tone="warning"  disclaimers ("does not form a therapist/patient relationship").
 *   tone="info"     neutral help text.
 *   tone="success"  confirmation inside a form.
 *
 * <CrisisNotice /> renders the standard crisis copy so every page says exactly the same thing. */

const tones = {
  crisis: { box: "border-pg-cream-dark bg-white/70", icon: AlertCircle, iconClass: "text-pg-navy" },
  warning: { box: "border-pg-amber/40 bg-pg-warning-soft", icon: AlertTriangle, iconClass: "text-pg-warning" },
  info: { box: "border-pg-line bg-pg-tint", icon: Info, iconClass: "text-pg-teal-dark" },
  success: { box: "border-pg-success/30 bg-pg-success-soft", icon: CheckCircle, iconClass: "text-pg-success" },
} as const;

export function Notice({
  tone = "info",
  children,
  className,
}: {
  tone?: keyof typeof tones;
  children: ReactNode;
  className?: string;
}) {
  const { box, icon: Icon, iconClass } = tones[tone];
  return (
    <div className={cn("flex items-start gap-3 rounded-pg-lg border px-4 py-3", box, className)}>
      <Icon size={20} aria-hidden="true" className={cn("mt-0.5 shrink-0", iconClass)} />
      <p className="text-sm text-pg-navy">{children}</p>
    </div>
  );
}

export function CrisisNotice({ className }: { className?: string }) {
  return (
    <Notice tone="crisis" className={className}>
      If you or someone you know is in immediate danger, <strong>call 911.</strong>
    </Notice>
  );
}
