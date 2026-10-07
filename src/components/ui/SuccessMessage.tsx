import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { CheckCircle } from "./icons";

/* SuccessMessage (docs/system/components/success-message.md). Replaces a form after it is sent.
 * The heading receives focus when it appears, so keyboard and screen-reader users land on the result
 * instead of on a button that no longer exists (audit M06). */

export type SuccessMessageProps = {
  title: string;
  children?: ReactNode;
  /** Usually a "Done" or "Send another" button. */
  action?: ReactNode;
  headingLevel?: "h2" | "h3";
  className?: string;
};

export function SuccessMessage({
  title,
  children,
  action,
  headingLevel: Heading = "h2",
  className,
}: SuccessMessageProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  useEffect(() => ref.current?.focus(), []);
  return (
    <div role="status" className={cn("flex flex-col items-center gap-4 text-center", className)}>
      <span className="grid h-16 w-16 place-items-center rounded-full bg-pg-tint" aria-hidden="true">
        <CheckCircle size={28} className="text-pg-teal-dark" />
      </span>
      <Heading ref={ref} tabIndex={-1} className="text-pg-h3 text-pg-navy outline-none">
        {title}
      </Heading>
      {children && <div className="max-w-xs text-sm text-pg-slate">{children}</div>}
      {action && <div className="mt-2">{action}</div>}
    </div>
  );
}
