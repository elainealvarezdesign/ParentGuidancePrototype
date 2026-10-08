import { useState } from "react";
import { motion } from "motion/react";
import type { Title } from "@/content/types";
import { Button } from "@/components/ui/Button";
import { SearchField } from "@/components/ui/SearchField";
import { Section } from "@/components/layout/Section";
import { DURATION } from "@/lib/motion";

/* HomeHero (docs/system/sections/home-hero.md). Centered display title with an optional highlighted word,
 * one intro sentence and a large search field. Only on the home page. */

export type HomeHeroContent = {
  /** 3–6 words. `highlight` renders in italic bold. */
  title: Title;
  /** One sentence, up to ~140 characters. */
  intro: string;
  search: { label: string; placeholder: string; buttonLabel: string };
};

export function HomeHero({ content, onSearch }: { content: HomeHeroContent; onSearch?: (query: string) => void }) {
  const [query, setQuery] = useState("");
  const { title, intro, search } = content;

  return (
    <Section belowNav spacing="none" className="flex flex-col items-center px-6 pt-4 pb-16 text-center">
      <motion.h1
        className="mt-14 text-pg-h1 text-pg-teal-dark md:leading-relaxed lg:whitespace-nowrap"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: DURATION.reveal, delay: 0.3 }}
      >
        {title.text}
        {title.highlight && <em className="font-bold italic">{title.highlight}</em>}
        {title.after}
      </motion.h1>
      <motion.p
        className="mt-4 max-w-2xl text-pg-body-lg text-pg-navy"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: DURATION.reveal, delay: 0.5 }}
      >
        {intro}
      </motion.p>
      <motion.form
        className="mt-10 w-full max-w-3xl"
        onSubmit={(e) => {
          e.preventDefault();
          onSearch?.(query);
        }}
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: DURATION.reveal, delay: 0.65 }}
      >
        <SearchField
          variant="hero"
          label={search.label}
          placeholder={search.placeholder}
          value={query}
          onValueChange={setQuery}
          action={
            <Button type="submit" size="s" className="shrink-0">
              {search.buttonLabel}
            </Button>
          }
        />
      </motion.form>
    </Section>
  );
}
