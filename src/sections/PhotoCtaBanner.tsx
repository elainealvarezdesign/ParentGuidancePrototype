import { useId } from "react";
import { motion } from "motion/react";
import type { Cta, Media, RichText as RichTextValue } from "@/content/types";
import { RichText } from "@/components/ui/RichText";
import { ButtonAnchor, ButtonLink } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/icons";
import { Container, Section, type SectionTone } from "@/components/layout/Section";

/* PhotoCtaBanner (docs/system/sections/photo-cta-banner.md). Near the end of a page, sends people to the
 * next step (coaching, help, sign-up): a title, one or two sentences and one action. Max one per page.
 *
 *   variant="band"     full-width sage band, photo on the left, text on the right (Ask a Therapist).
 *   variant="overlay"  rounded photo card inside the page column, navy gradient with white text (Courses). */

export type PhotoCtaBannerContent = {
  /** Up to ~40 characters. */
  title: string;
  /** 1–2 sentences. May mark one key fact as **bold**. */
  body: RichTextValue;
  cta: Cta;
  image: Media;
};

function Action({ cta, variant }: { cta: Cta; variant: "primary" | "inverse" }) {
  return cta.to ? (
    <ButtonLink to={cta.to} variant={variant}>
      {cta.label} <ArrowRight size={16} aria-hidden="true" />
    </ButtonLink>
  ) : (
    <ButtonAnchor href={cta.href} variant={variant} target="_blank" rel="noopener noreferrer">
      {cta.label} <span className="sr-only">(opens in a new tab)</span>
    </ButtonAnchor>
  );
}

export function PhotoCtaBanner({
  content,
  variant = "band",
  tone,
}: {
  content: PhotoCtaBannerContent;
  variant?: "band" | "overlay";
  /** Page background behind the overlay card. */ tone?: SectionTone;
}) {
  const headingId = useId();
  const { title, body, cta, image } = content;
  if (variant === "overlay")
    return (
      <Section tone={tone} spacing="none" labelledBy={headingId} className="pb-14">
        <Container>
          <div className="relative overflow-hidden rounded-pg-md">
            <img
              src={image.src}
              alt={image.alt}
              className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-pg-navy/90 via-pg-navy/70 to-pg-navy/0"
              aria-hidden="true"
            />
            <div className="relative flex min-h-62 max-w-lg flex-col justify-center gap-2 px-6 py-10 md:px-14">
              <h2 id={headingId} className="text-pg-h3 text-white">
                {title}
              </h2>
              <p className="text-sm text-pg-sage [&_strong]:font-semibold [&_strong]:text-white">
                <RichText text={body} />
              </p>
              <div className="mt-2">
                <Action cta={cta} variant="inverse" />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    );
  return (
    <Section tone="sage" spacing="m" labelledBy={headingId} className="px-6 md:px-10 lg:px-14">
      <div className="mx-auto flex max-w-pg-page flex-col gap-8 md:flex-row md:items-center lg:gap-12">
        <motion.div
          className="relative h-[210px] w-full shrink-0 overflow-hidden rounded-pg-xl md:w-[340px] lg:w-[420px]"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.35 }}
        >
          <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-pg-navy/20" aria-hidden="true" />
        </motion.div>
        <motion.div
          className="flex flex-col items-start gap-4"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <h2 id={headingId} className="max-w-md text-pg-h1 text-pg-navy">
            {title}
          </h2>
          <p className="max-w-sm text-sm text-pg-navy">
            <RichText text={body} />
          </p>
          <Action cta={cta} variant="primary" />
        </motion.div>
      </div>
    </Section>
  );
}
