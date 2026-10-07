import { useMemo, useState } from "react";
import {
  askCta,
  askHero,
  askSubmitPrompt,
  questionCategories,
  questions,
  questionSortOptions,
  therapists,
  type QuestionSort,
} from "@/content/askATherapist";
import { SplitHero } from "@/sections/SplitHero";
import { PhotoCtaBanner } from "@/sections/PhotoCtaBanner";
import { Section, Container } from "@/components/layout/Section";
import { FilterBar } from "@/components/patterns/FilterBar";
import { SubmitQuestionDialog } from "@/components/patterns/SubmitQuestionDialog";
import { QuestionCard } from "@/components/cards/QuestionCard";
import { Button } from "@/components/ui/Button";
import { SearchField } from "@/components/ui/SearchField";
import { FilterChips } from "@/components/ui/FilterChips";
import { Select } from "@/components/ui/Field";
import { ListHeading } from "@/components/ui/SectionHeading";
import { Pagination } from "@/components/ui/Pagination";
import { Reveal } from "@/components/ui/Reveal";
import { MessageCircle, Send } from "@/components/ui/icons";

/* Ask a Therapist ("/ask-a-therapist"). Recipe: docs/system/pages/ask-a-therapist.md.
 * SplitHero → FilterBar → [submit prompt | question grid + pagination] → PhotoCtaBanner. */

type Category = (typeof questionCategories)[number];
const PER_PAGE = 9;

const sorters: Record<QuestionSort, (a: (typeof questions)[number], b: (typeof questions)[number]) => number> = {
  featured: () => 0,
  newest: (a, b) => b.id - a.id,
  az: (a, b) => a.question.localeCompare(b.question),
};

export default function AskATherapistPage() {
  const [category, setCategory] = useState<Category>("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<QuestionSort>("featured");
  const [page, setPage] = useState(1);
  const [submitOpen, setSubmitOpen] = useState(false);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return questions
      .filter(
        (item) => (category === "All" || item.category === category) && (!q || item.question.toLowerCase().includes(q)),
      )
      .sort(sorters[sort]);
  }, [category, search, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const visible = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  // Every filter change goes back to page 1.
  const update =
    <T,>(set: (v: T) => void) =>
    (v: T) => {
      set(v);
      setPage(1);
    };

  function clearFilters() {
    setCategory("All");
    setSearch("");
    setPage(1);
  }

  return (
    <>
      <SplitHero content={askHero} />

      <FilterBar
        search={
          <SearchField
            label="Search questions"
            placeholder="Search questions…"
            value={search}
            onValueChange={update(setSearch)}
          />
        }
        filters={
          <FilterChips
            label="Filter by category"
            options={questionCategories}
            value={category}
            onChange={update(setCategory)}
          />
        }
        sort={
          <Select
            size="compact"
            aria-label="Sort questions"
            value={sort}
            onChange={(e) => update(setSort)(e.target.value as QuestionSort)}
          >
            {questionSortOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </Select>
        }
      />

      <Section tone="tint-soft" spacing="l">
        <Container className="flex flex-col items-stretch gap-8 lg:flex-row lg:items-start">
          <aside
            aria-label="Submit a question"
            className="flex w-full shrink-0 flex-col gap-5 lg:sticky lg:top-32 lg:w-62"
          >
            <Reveal from="left" className="flex flex-col gap-4 rounded-pg-xl bg-pg-navy p-6">
              <span className="grid h-10 w-10 place-items-center rounded-pg-md bg-pg-sage/15" aria-hidden="true">
                <MessageCircle size={18} className="text-pg-sage" />
              </span>
              <h2 className="text-pg-h4 text-white">{askSubmitPrompt.title}</h2>
              <p className="text-xs text-pg-sage">{askSubmitPrompt.body}</p>
              <Button variant="inverse" onClick={() => setSubmitOpen(true)} className="w-full">
                <Send size={14} aria-hidden="true" />
                {askSubmitPrompt.buttonLabel}
              </Button>
            </Reveal>
            <figure className="relative hidden h-48 overflow-hidden rounded-pg-xl lg:block">
              <img
                src={askSubmitPrompt.image.src}
                alt={askSubmitPrompt.image.alt}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pg-navy/80 to-transparent" aria-hidden="true" />
              <figcaption className="absolute right-4 bottom-4 left-4 text-xs font-semibold text-white">
                {askSubmitPrompt.imageCaption}
              </figcaption>
            </figure>
          </aside>

          <div className="min-w-0 flex-1">
            <ListHeading title="Browse All" count={`${filtered.length} questions`} className="mb-5" />
            <p className="sr-only" role="status">
              {filtered.length} questions found
            </p>

            {visible.length > 0 ? (
              <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {visible.map((item, i) => (
                  <Reveal as="li" key={item.id} delay={(i % PER_PAGE) * 0.06}>
                    <QuestionCard
                      question={item.question}
                      category={item.category}
                      answeredBy={therapists[item.answeredBy].name}
                      image={item.thumbnail}
                      to={`/ask-a-therapist/${item.id}`}
                    />
                  </Reveal>
                ))}
              </ul>
            ) : (
              <div className="flex flex-col items-center justify-center gap-2 py-20 text-center">
                <MessageCircle size={36} className="mb-1 text-pg-slate" aria-hidden="true" />
                <p className="text-sm font-semibold text-pg-navy">No questions found</p>
                <p className="text-xs text-pg-slate">Try a different category or search term</p>
                <Button variant="secondary" size="s" onClick={clearFilters} className="mt-2">
                  Clear filters
                </Button>
              </div>
            )}

            <Pagination
              page={page}
              totalPages={totalPages}
              onChange={setPage}
              label="Questions pages"
              className="mt-10"
            />
          </div>
        </Container>
      </Section>

      <PhotoCtaBanner content={askCta} />

      <SubmitQuestionDialog open={submitOpen} onClose={() => setSubmitOpen(false)} />
    </>
  );
}
