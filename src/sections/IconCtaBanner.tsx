import { useId } from "react";
import type { Cta } from "@/content/types";
import { cn } from "@/lib/cn";
import { Button, CtaButton } from "@/components/ui/Button";
import { ArrowRight, Signpost } from "@/components/ui/icons";

/* IconCtaBanner (docs/system/sections/icon-cta-banner.md). Rounded sage box with an icon, a question-style
 * title, one sentence and one action. Sits inside another section's column (it is a block, not a band),
 * e.g. after the resource grid on Get Help.
 * A `cta` with only a `label` renders a button with no destination yet (open item, see the page doc). */

export type IconCtaBannerContent = {
  /** Up to ~45 characters. */
  title: string;
  /** One sentence. */
  body: string;
  /** `{ label }` alone = action without a destination yet (renders a <button>); flagged in the page doc. */
  cta: Cta | { label: string };
};

export function IconCtaBanner({ content, className }: { content: IconCtaBannerContent; className?: string }) {
  const headingId = useId();
  const { title, body, cta } = content;
  const arrow = <ArrowRight size={16} aria-hidden="true" />;
  return (
    <section
      aria-labelledby={headingId}
      className={cn(
        "mx-auto flex max-w-pg-content flex-col items-center gap-8 rounded-pg-xl bg-pg-sage px-7 py-9 md:flex-row md:px-12",
        className,
      )}
    >
      <span className="grid h-24 w-24 shrink-0 place-items-center rounded-full bg-white/70" aria-hidden="true">
        <Signpost size={46} className="text-pg-teal-dark" />
      </span>
      <div className="flex-1 text-center md:text-left">
        <h2 id={headingId} className="text-pg-h2 text-pg-navy">
          {title}
        </h2>
        <p className="mt-2 text-sm text-pg-navy md:text-base">{body}</p>
      </div>
      {"to" in cta || "href" in cta ? (
        <CtaButton cta={cta as Cta} variant="inverse" className="shrink-0" trailing={arrow} />
      ) : (
        <Button variant="inverse" className="shrink-0">
          {cta.label}
          {arrow}
        </Button>
      )}
    </section>
  );
}
