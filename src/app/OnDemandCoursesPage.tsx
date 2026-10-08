import { useMemo, useState } from "react";
import {
  courses,
  courseSortOptions,
  courseTopics,
  coursesCta,
  coursesHero,
  detailSlugFor,
  type Course,
  type CourseSort,
} from "@/content/courses";
import { SplitHero } from "@/sections/SplitHero";
import { PhotoCtaBanner } from "@/sections/PhotoCtaBanner";
import { Section, Container } from "@/components/layout/Section";
import { FilterBar } from "@/components/patterns/FilterBar";
import UnifiedCard from "@/components/cards/UnifiedCard";
import { Button } from "@/components/ui/Button";
import { SearchField } from "@/components/ui/SearchField";
import { FilterChips } from "@/components/ui/FilterChips";
import { Select } from "@/components/ui/Field";
import { ListHeading } from "@/components/ui/SectionHeading";
import { Pagination } from "@/components/ui/Pagination";
import { Reveal } from "@/components/ui/Reveal";
import { Search } from "@/components/ui/icons";
import { scrollBehavior } from "@/lib/motion";

/* On-Demand Courses ("/on-demand-courses"). Recipe: docs/system/pages/on-demand-courses.md.
 * SplitHero (square) → FilterBar → course grid + pagination → PhotoCtaBanner (overlay). */

type Topic = (typeof courseTopics)[number];
const PER_PAGE = 9;

const sorters: Record<CourseSort, (list: Course[]) => Course[]> = {
  featured: (list) => [...list].sort((a, b) => Number(!!b.isFeatured) - Number(!!a.isFeatured)),
  az: (list) => [...list].sort((a, b) => a.title.localeCompare(b.title)),
  newest: (list) => [...list.filter((c) => c.isNew), ...list.filter((c) => !c.isNew)],
};

const countByTopic = courses.reduce<Record<string, number>>(
  (acc, c) => ({ ...acc, [c.topic]: (acc[c.topic] ?? 0) + 1 }),
  {},
);

export default function OnDemandCoursesPage() {
  const [topic, setTopic] = useState<Topic>("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<CourseSort>("featured");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    const matches = courses.filter(
      (c) =>
        (topic === "All" || c.topic === topic) &&
        (!q || [c.title, c.topic, c.instructor, c.description].some((f) => f.toLowerCase().includes(q))),
    );
    return sorters[sort](matches);
  }, [topic, search, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const visible = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const update =
    <T,>(set: (v: T) => void) =>
    (v: T) => {
      set(v);
      setPage(1);
    };

  function goToPage(p: number) {
    setPage(p);
    document.getElementById("courses")?.scrollIntoView({ behavior: scrollBehavior() });
  }

  function clearFilters() {
    setTopic("All");
    setSearch("");
    setPage(1);
  }

  return (
    <div className="bg-pg-tint-soft">
      <SplitHero content={coursesHero} />

      <FilterBar
        search={
          <SearchField
            label="Search courses"
            placeholder="Search courses…"
            value={search}
            onValueChange={update(setSearch)}
          />
        }
        filters={
          <FilterChips
            label="Filter by topic"
            options={courseTopics}
            value={topic}
            onChange={update(setTopic)}
            renderLabel={(t) => (t === "All" ? t : `${t} (${countByTopic[t] ?? 0})`)}
          />
        }
        sort={
          <Select
            size="compact"
            aria-label="Sort courses"
            value={sort}
            onChange={(e) => update(setSort)(e.target.value as CourseSort)}
          >
            {courseSortOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </Select>
        }
      />

      <Section tone="tint-soft" spacing="none" id="courses" className="scroll-mt-32 py-8">
        <Container>
          <ListHeading title={topic === "All" ? "All Courses" : topic} count={filtered.length} className="mb-6" />
          <p className="sr-only" role="status">
            {filtered.length} courses found
          </p>

          {visible.length > 0 ? (
            <ul className="mx-auto grid max-w-pg-content grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {visible.map((course, i) => (
                <Reveal as="li" key={course.id} delay={Math.min(i * 0.05, 0.3)}>
                  <UnifiedCard
                    image={{ src: course.image, alt: "" }}
                    badge={course.topic}
                    person={course.instructor}
                    title={course.title}
                    meta={`${course.duration} • ${course.lessons} lessons`}
                    footer={course.instructor}
                    cta={{ label: "Begin Course", to: `/courses/${detailSlugFor(course)}` }}
                  />
                </Reveal>
              ))}
            </ul>
          ) : (
            <div className="flex flex-col items-center justify-center gap-3 py-24">
              <Search size={40} aria-hidden="true" className="text-pg-slate" />
              <p className="text-sm text-pg-slate">No courses found.</p>
              <Button variant="tertiary" size="s" onClick={clearFilters}>
                Clear all filters
              </Button>
            </div>
          )}

          <Pagination page={page} totalPages={totalPages} onChange={goToPage} label="Course pages" className="pt-10" />
        </Container>
      </Section>

      <PhotoCtaBanner content={coursesCta} variant="overlay" tone="tint-soft" />
    </div>
  );
}
