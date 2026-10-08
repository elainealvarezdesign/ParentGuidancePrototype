import { useId, useState } from "react";
import { motion } from "motion/react";
import type { Media } from "@/content/types";
import { Button } from "@/components/ui/Button";
import { Field, TextInput } from "@/components/ui/Field";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/layout/Section";
import { DURATION } from "@/lib/motion";

/* NewsletterSection (docs/system/sections/newsletter.md). Sage band: photo + title, one sentence and an
 * email field with the Subscribe button inside the field box. Without `image` it is the compact band
 * (text left, form right) used at the end of topic pages. SIMULATED: no request is sent; the success
 * message is announced (aria-live) and replaces the form (audit M06). */

export type NewsletterContent = {
  /** Small label above the title (compact band). */
  eyebrow?: string;
  /** 1–4 words. */
  title: string;
  /** One sentence, up to ~110 characters. */
  body: string;
  /** Photo on the left. Omit for the compact band. */
  image?: Media;
  imageBase?: Media;
  successMessage: string;
};

export function NewsletterSection({ content }: { content: NewsletterContent }) {
  const headingId = useId();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Enter a valid email address.");
      return;
    }
    setError("");
    setSubscribed(true);
  }

  const form = (
    <div aria-live="polite">
      {subscribed ? (
        <p className="text-base font-semibold text-pg-navy">✓ {content.successMessage}</p>
      ) : (
        <form onSubmit={submit} noValidate className="max-w-md">
          <Field label="Email address" hideLabel error={error} tone="on-sage">
            <div className="flex items-center gap-2 rounded-pg-xl bg-pg-tint-soft p-2">
              <TextInput
                type="email"
                autoComplete="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="min-h-0 border-0 bg-transparent"
              />
              <Button type="submit" className="shrink-0 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </Field>
        </form>
      )}
    </div>
  );

  if (!content.image)
    return (
      <Section tone="sage" spacing="none" labelledBy={headingId} className="px-6 py-14 md:px-10 md:py-16 lg:px-14">
        <div className="mx-auto flex max-w-pg-content flex-col items-start gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
          <div>
            {content.eyebrow && <p className="text-pg-eyebrow text-pg-navy">{content.eyebrow}</p>}
            <h2 id={headingId} className="mt-1 text-pg-h1 text-pg-navy">
              {content.title}
            </h2>
            <p className="mt-2 text-sm text-pg-navy">{content.body}</p>
          </div>
          <div className="w-full max-w-115">{form}</div>
        </div>
      </Section>
    );

  return (
    <Section
      tone="sage"
      spacing="none"
      labelledBy={headingId}
      className="flex justify-center px-6 py-16 md:px-10 lg:px-14"
    >
      <Reveal className="flex w-full max-w-pg-page flex-col items-center gap-8 lg:flex-row lg:justify-center lg:gap-12">
        <motion.div
          className="relative h-56 w-full overflow-hidden rounded-pg-xl lg:w-[480px] lg:shrink-0"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: DURATION.base }}
        >
          {content.imageBase && (
            <img src={content.imageBase.src} alt="" className="absolute inset-0 h-full w-full object-cover" />
          )}
          <img
            src={content.image.src}
            alt={content.image.alt}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </motion.div>
        <div className="flex w-full flex-col gap-5 lg:w-[440px] lg:shrink-0">
          <h2 id={headingId} className="text-pg-h1 text-pg-navy">
            {content.title}
          </h2>
          <p className="max-w-sm text-sm text-pg-navy">{content.body}</p>
          {form}
        </div>
      </Reveal>
    </Section>
  );
}
