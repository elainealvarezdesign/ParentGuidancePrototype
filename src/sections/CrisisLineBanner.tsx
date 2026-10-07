import { useId } from "react";
import type { Media } from "@/content/types";
import { ButtonAnchor } from "@/components/ui/Button";
import { Globe2, MessageCircle, Phone } from "@/components/ui/icons";
import { Section, Container } from "@/components/layout/Section";

/* CrisisLineBanner (docs/system/sections/crisis-line-banner.md). Navy card with a crisis line logo and
 * direct actions: call, text and website. Use on Get Help and anywhere a page discusses risk. The phone
 * and SMS actions are real tel:/sms: links so they work on phones. */

export type CrisisLineBannerContent = {
  logo: Media;
  /** 2–4 words. */
  title: string;
  /** One line. */
  body: string;
  /** Digits only, used for tel: and sms: links. */
  number: string;
  website: string;
};

export function CrisisLineBanner({ content }: { content: CrisisLineBannerContent }) {
  const headingId = useId();
  const { logo, title, body, number, website } = content;
  return (
    <Section spacing="none" labelledBy={headingId} className="pb-14">
      <Container>
        <div className="flex flex-col items-center justify-center gap-6 rounded-pg-md bg-pg-navy px-8 py-10 md:flex-row md:gap-10 md:px-16 md:py-12">
          <img src={logo.src} alt={logo.alt} className="h-32 w-32 shrink-0 object-contain md:h-36 md:w-36" />
          <div className="text-center md:text-left">
            <h2 id={headingId} className="text-pg-h1 text-white">
              {title}
            </h2>
            <p className="mt-2 text-base text-white/85">{body}</p>
            <div className="mt-5 flex flex-col flex-wrap justify-center gap-3 sm:flex-row md:justify-start">
              <ButtonAnchor href={`tel:${number}`} variant="inverse" size="l">
                <Phone size={16} aria-hidden="true" />
                Call {number}
              </ButtonAnchor>
              <ButtonAnchor href={`sms:${number}`} variant="inverse" size="l">
                <MessageCircle size={16} aria-hidden="true" />
                Text {number}
              </ButtonAnchor>
              <ButtonAnchor
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                variant="inverse-secondary"
                size="l"
              >
                <Globe2 size={16} aria-hidden="true" />
                Visit Website
                <span className="sr-only"> (opens in a new tab)</span>
              </ButtonAnchor>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
