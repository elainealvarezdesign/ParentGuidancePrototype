import { useEffect, useId, useState } from "react";
import { Link } from "react-router";
import type { SearchEntry } from "@/content/search";
import { Container, Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SearchField } from "@/components/ui/SearchField";
import { ArrowRight } from "@/components/ui/icons";

/* SiteSearch (docs/system/sections/site-search.md). Search form, an announced result count, and the results
 * as a list of links. Before searching, and when nothing matches, it offers topic suggestions.
 * The page owns the query (it lives in the URL: /search?q=…); this section only renders it. */

export type SiteSearchContent = {
  /** Accessible name of the search field. */
  label: string;
  placeholder: string;
  buttonLabel: string;
  /** 4–8 single words or short topics; shown before searching and when nothing matches. */
  suggestions: string[];
  emptyTitle: string;
  emptyBody: string;
};

type Props = {
  content: SiteSearchContent;
  query: string;
  results: SearchEntry[];
  /** Called with the new query when the form is submitted. */
  onSearch: (query: string) => void;
};

const suggestionHref = (word: string) => `/search?q=${encodeURIComponent(word)}`;

export function SiteSearch({ content, query, results, onSearch }: Props) {
  const headingId = useId();
  const [value, setValue] = useState(query);
  useEffect(() => setValue(query), [query]);

  const suggestions = (
    <ul className="mt-3 flex flex-wrap gap-2">
      {content.suggestions.map((word) => (
        <li key={word}>
          <Link
            to={suggestionHref(word)}
            className="inline-flex min-h-9 items-center rounded-full bg-pg-cream-dark px-4 text-sm text-pg-navy transition-colors hover:bg-pg-tint"
          >
            {word}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <Section spacing="none" className="pb-20" labelledBy={headingId}>
      <Container width="content">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSearch(value.trim());
          }}
        >
          <SearchField
            variant="hero"
            label={content.label}
            placeholder={content.placeholder}
            value={value}
            onValueChange={setValue}
            action={
              <Button type="submit" size="s" className="shrink-0">
                {content.buttonLabel}
              </Button>
            }
          />
        </form>

        <h2 id={headingId} className="sr-only">
          Results
        </h2>
        <p role="status" className="mt-8 text-sm text-pg-slate">
          {query
            ? `${results.length} ${results.length === 1 ? "result" : "results"} for “${query}”`
            : "Type a word or pick a topic."}
        </p>

        {query && results.length === 0 && (
          <div className="mt-6 rounded-pg-xl border border-pg-line bg-white p-8">
            <p className="font-semibold text-pg-navy">{content.emptyTitle}</p>
            <p className="mt-1 text-sm text-pg-slate">{content.emptyBody}</p>
            {suggestions}
          </div>
        )}
        {!query && suggestions}

        {results.length > 0 && (
          <ul className="mt-6 flex flex-col gap-3">
            {results.map((r) => {
              const external = !!r.href;
              const linkClass =
                "group flex items-start gap-4 rounded-pg-xl border border-pg-line bg-white p-5 shadow-pg-card transition-shadow hover:shadow-pg-card-hover";
              const body = (
                <>
                  <div className="min-w-0 flex-1">
                    <Badge tone="tint">{r.kind}</Badge>
                    <p className="mt-2 text-pg-h4 text-pg-navy group-hover:text-pg-teal-dark">{r.title}</p>
                    <p className="mt-1 text-sm text-pg-slate">{r.description}</p>
                  </div>
                  <ArrowRight size={18} aria-hidden="true" className="mt-1 shrink-0 text-pg-teal-dark" />
                </>
              );
              return (
                <li key={`${r.kind}-${r.title}`}>
                  {external ? (
                    <a href={r.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      {body}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : (
                    <Link to={r.to ?? "/"} className={linkClass}>
                      {body}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </Container>
    </Section>
  );
}
