import { useMemo, useState } from "react";
import { libraryCategories, topicHref, type SeriesResource } from "@/content/mentalHealthSeries";
import { Container } from "@/components/layout/Section";
import { FilterBar } from "@/components/patterns/FilterBar";
import { ResourceCard } from "@/components/cards/ResourceCard";
import { Button } from "@/components/ui/Button";
import { SearchField } from "@/components/ui/SearchField";
import { FilterChips } from "@/components/ui/FilterChips";
import { Select } from "@/components/ui/Field";
import { ListHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

/* ResourceLibrary (docs/system/sections/resource-library.md). Sticky FilterBar (search, category chips,
 * sort) over a grid of ResourceCards. Shows 9, then "Show all". */

type Category = (typeof libraryCategories)[number];
type Sort = "featured" | "az" | "type";
const sortOptions: { value: Sort; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "az", label: "A–Z" },
  { value: "type", label: "Type" },
];
const sorters: Record<Sort, (a: SeriesResource, b: SeriesResource) => number> = {
  featured: (a, b) => Number(!!b.isNew) - Number(!!a.isNew),
  az: (a, b) => a.title.localeCompare(b.title),
  type: (a, b) => a.type.localeCompare(b.type),
};
const INITIAL = 9;

export function ResourceLibrary({ resources }: { resources: SeriesResource[] }) {
  const [category, setCategory] = useState<Category>("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<Sort>("featured");
  const [expanded, setExpanded] = useState(false);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return resources
      .filter(
        (r) =>
          (category === "All" || r.category === category) &&
          (!q || r.title.toLowerCase().includes(q) || r.description.toLowerCase().includes(q)),
      )
      .sort(sorters[sort]);
  }, [resources, category, search, sort]);
  const visible = expanded ? filtered : filtered.slice(0, INITIAL);

  return (
    <section aria-labelledby="resource-library">
      <FilterBar
        search={
          <SearchField
            label="Search resources"
            placeholder="Search resources…"
            value={search}
            onValueChange={setSearch}
          />
        }
        filters={
          <FilterChips label="Filter by category" options={libraryCategories} value={category} onChange={setCategory} />
        }
        sort={
          <Select
            size="compact"
            aria-label="Sort resources"
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
          >
            {sortOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </Select>
        }
      />
      <Container className="pt-10">
        <ListHeading id="resource-library" title="Resource Library" count={`${filtered.length} resources`} />
        <p className="sr-only" role="status">
          {filtered.length} resources found
        </p>
        {visible.length > 0 ? (
          <ul className="grid w-full grid-cols-1 gap-4 pt-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((r, i) => (
              <Reveal as="li" key={r.title} delay={(i % INITIAL) * 0.04}>
                <ResourceCard {...r} to={topicHref(r)} />
              </Reveal>
            ))}
          </ul>
        ) : (
          <p className="py-14 text-center text-sm text-pg-slate">No resources match your filters.</p>
        )}
        {filtered.length > INITIAL && (
          <div className="flex justify-center pt-6">
            <Button variant="secondary" onClick={() => setExpanded((v) => !v)}>
              {expanded ? "Show fewer resources" : `Show all ${filtered.length} resources`}
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
