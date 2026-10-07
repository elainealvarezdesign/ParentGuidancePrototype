import { useMemo, useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { EVENTS, byDateTime, parseDate } from "@/content/events";
import {
  defaultDistricts,
  districtsByState,
  seriesGate,
  seriesResources,
  seriesWelcome,
  usStates,
} from "@/content/mentalHealthSeries";
import { ResourceLibrary } from "@/sections/ResourceLibrary";
import { Section, Container } from "@/components/layout/Section";
import { SeriesCalendar } from "@/components/patterns/SeriesCalendar";
import { EventRow } from "@/components/cards/EventRow";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Field, Select } from "@/components/ui/Field";
import { SearchField } from "@/components/ui/SearchField";
import { Eyebrow, ListHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight, ChevronDown } from "@/components/ui/icons";
import { cn } from "@/lib/cn";
import { scrollBehavior } from "@/lib/motion";

/* Mental Health Series ("/mental-health-series"). Recipe: docs/system/pages/mental-health-series.md.
 * Step 1, SchoolGate: pick state and district. Step 2, SeriesHome: welcome + search + video → ResourceLibrary
 * → SeriesCalendar → Upcoming events. "Change district" goes back to step 1. */

const EVENTS_PAGE = 3;
const CALENDAR_START = parseDate("2025-07-01");
const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export default function MentalHealthSeriesPage() {
  const [school, setSchool] = useState<{ state: string; district: string } | null>(null);
  const go = (next: typeof school) => {
    setSchool(next);
    window.scrollTo({ top: 0, behavior: scrollBehavior() });
  };
  return school ? (
    <SeriesHome {...school} onChangeSchool={() => go(null)} />
  ) : (
    <SchoolGate onSubmit={(state, district) => go({ state, district })} />
  );
}

/* ─── Step 1 ─── */
function SchoolGate({ onSubmit }: { onSubmit: (state: string, district: string) => void }) {
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const districts = state ? (districtsByState[state] ?? defaultDistricts) : [];
  const { eyebrow, title, help, images } = seriesGate;

  return (
    <section className="mt-14 flex min-h-[calc(100vh-56px)] flex-col overflow-hidden lg:flex-row">
      <div className="relative z-10 flex w-full flex-col justify-center px-6 pt-10 pb-10 md:px-10 lg:w-[52%] lg:px-20 lg:py-20">
        <motion.form
          className="flex max-w-md flex-col gap-8"
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: EASE }}
          onSubmit={(e) => {
            e.preventDefault();
            if (state && district) onSubmit(state, district);
          }}
        >
          <Eyebrow size="large" tone="teal" className="text-sm">
            {eyebrow}
          </Eyebrow>
          <h1 className="text-pg-h1 text-pg-navy">
            {title.text}
            <em className="text-pg-teal-dark italic">{title.highlight}</em>
            {title.after}
          </h1>
          <p className="text-base text-pg-slate">
            {help.text}{" "}
            <Link to={help.to} className="text-pg-teal-dark underline hover:text-pg-navy">
              {help.linkLabel}
            </Link>
          </p>
          <div className="flex flex-col gap-4">
            <Field label="State" hideLabel>
              <Select
                value={state}
                onChange={(e) => {
                  setState(e.target.value);
                  setDistrict("");
                }}
                className={cn(
                  "min-h-14 rounded-pg-xl border-0 px-5 shadow-pg-card",
                  state ? "bg-pg-teal-dark text-white" : "bg-pg-sage text-pg-navy",
                )}
              >
                <option value="" disabled>
                  Select your state
                </option>
                {usStates.map((s) => (
                  <option key={s} value={s} className="bg-pg-cream text-pg-navy">
                    {s}
                  </option>
                ))}
              </Select>
            </Field>
            <Field label="School district" hideLabel>
              <Select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                disabled={!state}
                className="min-h-14 rounded-pg-xl px-5 shadow-pg-card disabled:opacity-60"
              >
                <option value="" disabled>
                  Select your district
                </option>
                {districts.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </Select>
            </Field>
            <Button type="submit" size="l" disabled={!state || !district}>
              Continue
            </Button>
          </div>
        </motion.form>
      </div>
      <div className="relative flex min-h-85 w-full items-center justify-center overflow-hidden sm:min-h-105 lg:min-h-0 lg:w-[48%]">
        <div
          className="absolute -right-20 -bottom-20 h-[85%] w-[110%] rounded-tl-pg-2xl bg-pg-sage"
          aria-hidden="true"
        />
        <motion.div
          className="relative z-10 h-[72%] w-3/4 overflow-hidden rounded-pg-2xl shadow-pg-overlay max-lg:my-10 max-lg:aspect-[4/3] max-lg:h-auto"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.15, ease: EASE }}
        >
          <img src={images.base} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <img src={images.frame} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <img src={images.photo.src} alt={images.photo.alt} className="relative h-full w-full object-cover" />
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Step 2 ─── */
function SeriesHome({
  state,
  district,
  onChangeSchool,
}: {
  state: string;
  district: string;
  onChangeSchool: () => void;
}) {
  const [search, setSearch] = useState("");
  const [shown, setShown] = useState(EVENTS_PAGE);
  const q = search.trim().toLowerCase();
  const events = useMemo(() => [...EVENTS].sort(byDateTime), []);
  const matching = q
    ? events.filter((e) => e.title.toLowerCase().includes(q) || e.description.toLowerCase().includes(q))
    : events;
  const resources = q
    ? seriesResources.filter((r) => r.title.toLowerCase().includes(q) || r.description.toLowerCase().includes(q))
    : seriesResources;

  return (
    <>
      <Section belowNav spacing="none" className="pt-10 pb-14">
        <Container width="content" className="flex flex-col items-center gap-6 text-center">
          <Reveal from="none" className="flex flex-col items-center gap-2">
            <h1 className="text-pg-h1 text-pg-navy">
              {seriesWelcome.title.text}
              <em className="text-pg-teal-dark italic">{seriesWelcome.title.highlight}</em>
            </h1>
            <p className="flex flex-wrap items-center justify-center gap-x-3 text-sm text-pg-navy">
              <span>
                {district} · {state}
              </span>
              <button
                type="button"
                onClick={onChangeSchool}
                className="font-semibold text-pg-teal-dark underline underline-offset-4 hover:text-pg-navy"
              >
                Change district
              </button>
            </p>
          </Reveal>
          <SearchField
            variant="hero"
            label={seriesWelcome.searchLabel}
            placeholder="Search resources and events…"
            value={search}
            onValueChange={setSearch}
            className="w-full max-w-165"
          />
          <div className="relative aspect-video w-full max-w-165 overflow-hidden rounded-pg-2xl bg-pg-navy shadow-pg-card">
            <iframe
              src={`https://player.vimeo.com/video/${seriesWelcome.vimeoId}?dnt=1&title=0&byline=0&portrait=0`}
              title={seriesWelcome.videoTitle}
              className="absolute inset-0 h-full w-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        </Container>
      </Section>

      <ResourceLibrary resources={resources} />

      <Container className="flex flex-col gap-14 py-14">
        <section aria-labelledby="monthly-calendar">
          <ListHeading
            id="monthly-calendar"
            title="Monthly Calendar"
            className="mb-6"
            action={
              <ButtonLink to="/mental-health-series/events" variant="secondary" size="s">
                View all events
                <ArrowRight size={14} aria-hidden="true" />
              </ButtonLink>
            }
          />
          <SeriesCalendar events={events} initialDate={CALENDAR_START} />
        </section>

        <section aria-labelledby="upcoming-events">
          <ListHeading
            id="upcoming-events"
            title="Upcoming Events"
            count={`${matching.length} total`}
            className="mb-6"
          />
          {matching.length === 0 ? (
            <p className="py-16 text-center text-sm text-pg-slate">No events match your search.</p>
          ) : (
            <ul className="flex flex-col gap-3">
              {matching.slice(0, shown).map((e, i) => (
                <Reveal as="li" key={e.id} delay={(i % EVENTS_PAGE) * 0.06}>
                  <EventRow event={e} />
                </Reveal>
              ))}
            </ul>
          )}
          {shown < matching.length && (
            <div className="mt-6 flex justify-center">
              <Button variant="secondary" onClick={() => setShown((v) => v + EVENTS_PAGE)}>
                Load more events
                <ChevronDown size={16} aria-hidden="true" />
              </Button>
            </div>
          )}
        </section>
      </Container>
    </>
  );
}
