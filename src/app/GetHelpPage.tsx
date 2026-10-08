import { useMemo, useState } from "react";
import {
  crisisLine,
  getHelpHero,
  getHelpTrust,
  helpChooser,
  resourceCategories,
  resourceDirectory,
  supportResources,
} from "@/content/getHelp";
import { SplitHero } from "@/sections/SplitHero";
import { CrisisLineBanner } from "@/sections/CrisisLineBanner";
import { IconCtaBanner } from "@/sections/IconCtaBanner";
import { TrustStrip } from "@/sections/TrustStrip";
import { Section, Container } from "@/components/layout/Section";
import UnifiedCard from "@/components/cards/UnifiedCard";
import { Button } from "@/components/ui/Button";
import { CrisisNotice } from "@/components/ui/Notice";
import { SearchField } from "@/components/ui/SearchField";
import { FilterChips } from "@/components/ui/FilterChips";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

/* Get Help ("/get-help"). Recipe: docs/system/pages/get-help.md.
 * SplitHero (+ CrisisNotice) → CrisisLineBanner → resource directory (heading, search, chips, cards,
 * IconCtaBanner) → TrustStrip. */

type Category = (typeof resourceCategories)[number];

export default function GetHelpPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category>("All");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return supportResources.filter(
      (r) =>
        (category === "All" || r.category === category) &&
        (!q || [r.name, r.description, r.category].some((f) => f.toLowerCase().includes(q))),
    );
  }, [category, search]);

  return (
    <>
      <SplitHero content={getHelpHero}>
        <CrisisNotice className="max-w-[500px] py-4" />
      </SplitHero>

      <CrisisLineBanner content={crisisLine} />

      <Section tone="tint-soft" spacing="l">
        <Container>
          <SectionHeading eyebrow={resourceDirectory.eyebrow} title={resourceDirectory.title} />
          <SearchField
            label={resourceDirectory.searchLabel}
            placeholder="Search resources…"
            value={search}
            onValueChange={setSearch}
            className="mx-auto mt-8 max-w-[900px] [&_input]:border [&_input]:border-pg-line [&_input]:bg-white [&_input]:py-4"
          />
          <FilterChips
            label="Filter by category"
            options={resourceCategories}
            value={category}
            onChange={setCategory}
            className="mt-5 flex-wrap justify-center overflow-visible"
          />
          <p className="sr-only" role="status">
            {filtered.length} resources found
          </p>

          {filtered.length > 0 ? (
            <ul className="mx-auto mt-9 grid max-w-pg-content grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filtered.map((r, i) => (
                <Reveal as="li" key={r.name} delay={i * 0.06}>
                  <UnifiedCard
                    image={{ src: r.logo, alt: `${r.name} logo` }}
                    imageKind="logo"
                    logoPadding={r.logoPadding}
                    badge={r.category}
                    title={r.name}
                    description={r.description}
                    meta={r.availability}
                    cta={{ label: "Get help", href: r.href }}
                  />
                </Reveal>
              ))}
            </ul>
          ) : (
            <div className="mt-10 rounded-pg-xl border border-pg-cream-dark bg-white p-10 text-center">
              <p className="font-semibold text-pg-navy">No resources match your search.</p>
              <Button
                variant="tertiary"
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
                className="mt-4"
              >
                Clear filters
              </Button>
            </div>
          )}

          <IconCtaBanner content={helpChooser} className="mt-12" />
        </Container>
      </Section>

      <TrustStrip content={getHelpTrust} />
    </>
  );
}
