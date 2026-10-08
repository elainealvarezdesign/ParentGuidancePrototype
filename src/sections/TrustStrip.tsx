import { Section } from "@/components/layout/Section";
import { CheckCircle2, LockKeyhole, ShieldCheck } from "@/components/ui/icons";

/* TrustStrip (docs/system/sections/trust-strip.md). White band with three short reassurance points, each an
 * icon, a title and one line. Placed at the end of a page, before the footer. Exactly three items. */

export const trustIcons = { shield: ShieldCheck, lock: LockKeyhole, check: CheckCircle2 };

export type TrustStripContent = {
  items: {
    icon: keyof typeof trustIcons;
    /** 2–4 words. */ title: string;
    /** Up to ~45 characters. */ body: string;
  }[];
};

export function TrustStrip({ content }: { content: TrustStripContent }) {
  return (
    <Section tone="white" spacing="none" className="border-y border-pg-cream-dark px-6 py-8 md:px-10 lg:px-14">
      <ul className="mx-auto grid max-w-pg-content grid-cols-1 gap-7 md:grid-cols-3">
        {content.items.map(({ icon, title, body }) => {
          const Icon = trustIcons[icon];
          return (
            <li key={title} className="flex items-center gap-4 md:justify-center">
              <Icon size={34} aria-hidden="true" className="shrink-0 text-pg-teal-dark" />
              <div>
                <p className="text-sm font-semibold text-pg-navy">{title}</p>
                <p className="mt-1 text-xs text-pg-slate">{body}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
