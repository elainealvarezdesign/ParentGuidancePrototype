import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CalendarDays, LockKeyhole, MessageCircle, Route } from "@/components/ui/icons";

/* BenefitsBand (docs/system/sections/benefits-band.md). Navy band with 4 short benefits (icon, title, one
 * line) in a row on desktop, 2×2 on tablet, stacked on mobile. Sits right after a hero. 3–4 items. */

export const benefitIcons = { message: MessageCircle, roadmap: Route, privacy: LockKeyhole, calendar: CalendarDays };

export type BenefitsBandContent = {
  items: {
    icon: keyof typeof benefitIcons;
    /** 2–6 words. */ title: string;
    /** Up to ~80 characters. */ body: string;
  }[];
};

export function BenefitsBand({ content }: { content: BenefitsBandContent }) {
  return (
    <Section tone="navy" spacing="none" className="px-6 py-12 md:px-10 lg:px-14">
      <ul className="mx-auto grid w-full max-w-pg-content grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {content.items.map(({ icon, title, body }, i) => {
          const Icon = benefitIcons[icon];
          return (
            <Reveal as="li" key={title} delay={i * 0.08} className="flex flex-col gap-3">
              <Icon size={24} aria-hidden="true" className="text-pg-sage" />
              <p className="text-sm font-semibold text-white">{title}</p>
              <p className="max-w-60 text-xs text-pg-sage">{body}</p>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
