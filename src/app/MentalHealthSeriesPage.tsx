import { useMemo, useState } from "react";
import { EVENTS, byDateTime, parseDate } from "@/content/events";
import {
  defaultDistricts,
  districtsByState,
  seriesEvents,
  seriesGate,
  seriesResources,
  seriesWelcome,
  usStates,
} from "@/content/mentalHealthSeries";
import { ResourceLibrary } from "@/sections/ResourceLibrary";
import { SchoolGate } from "@/sections/SchoolGate";
import { SeriesWelcome } from "@/sections/SeriesWelcome";
import { Container } from "@/components/layout/Section";
import { SeriesCalendar } from "@/components/patterns/SeriesCalendar";
import { EventRow } from "@/components/cards/EventRow";
import { Button, ButtonLink } from "@/components/ui/Button";
import { ListHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight, ChevronDown } from "@/components/ui/icons";
import { scrollBehavior } from "@/lib/motion";

/* Mental Health Series ("/mental-health-series"). Recipe: docs/system/pages/mental-health-series.md.
 * Step 1, SchoolGate: pick state and district. Step 2, SeriesHome: SeriesWelcome (search + video) →
 * ResourceLibrary → SeriesCalendar → Upcoming events. "Change district" goes back to step 1.
 * Copy: src/content/mentalHealthSeries.ts. */

const EVENTS_PAGE = 3;
const CALENDAR_START = parseDate("2025-07-01");

export default function MentalHealthSeriesPage() {
  const [school, setSchool] = useState<{ state: string; district: string } | null>(null);
  const go = (next: typeof school) => {
    setSchool(next);
    window.scrollTo({ top: 0, behavior: scrollBehavior() });
  };
  return school ? (
    <SeriesHome {...school} onChangeSchool={() => go(null)} />
  ) : (
    <SchoolGate
      content={seriesGate}
      states={usStates}
      districtsByState={districtsByState}
      defaultDistricts={defaultDistricts}
      onSubmit={(state, district) => go({ state, district })}
    />
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
      <SeriesWelcome
        content={seriesWelcome}
        location={`${district} · ${state}`}
        onChangeLocation={onChangeSchool}
        search={search}
        onSearch={setSearch}
      />

      <ResourceLibrary resources={resources} />

      <Container className="flex flex-col gap-14 py-14">
        <section aria-labelledby="monthly-calendar">
          <ListHeading
            id="monthly-calendar"
            title={seriesEvents.calendarTitle}
            className="mb-6"
            action={
              <ButtonLink to={seriesEvents.allEventsCta.to} variant="secondary" size="s">
                {seriesEvents.allEventsCta.label}
                <ArrowRight size={14} aria-hidden="true" />
              </ButtonLink>
            }
          />
          <SeriesCalendar events={events} initialDate={CALENDAR_START} />
        </section>

        <section aria-labelledby="upcoming-events">
          <ListHeading
            id="upcoming-events"
            title={seriesEvents.upcomingTitle}
            count={seriesEvents.total(matching.length)}
            className="mb-6"
          />
          {matching.length === 0 ? (
            <p className="py-16 text-center text-sm text-pg-slate">{seriesEvents.empty}</p>
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
                {seriesEvents.loadMore}
                <ChevronDown size={16} aria-hidden="true" />
              </Button>
            </div>
          )}
        </section>
      </Container>
    </>
  );
}
