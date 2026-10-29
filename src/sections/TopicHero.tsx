import { Link } from "react-router";
import { CalendarDays, ChevronLeft, ListChecks, PlayCircle } from "@/components/ui/icons";
import { Container } from "@/components/layout/Section";

/* TopicHero (docs/system/sections/topic-hero.md). First section of a topic page: back link, eyebrow, title
 * with one word in italics, intro, a highlighted reminder, and a side card with the expert and three facts.
 * Clears the fixed navbar. The h1 takes focus from "Back to top" (titleId). */

export type TopicHeroContent = {
  backLink: { label: string; to: string };
  /** "Mental Health Series · Self-Care". */
  eyebrow: string;
  /** Full title; `emphasis` is the part of it shown in italics. */
  title: string;
  emphasis: string;
  /** 2–4 sentences. */
  intro: string;
  /** One or two sentences, shown as a quote. */
  reminder: string;
  expert: { name: string; role: string; initials: string };
  /** Screen-reader name of the side card. */
  asideLabel: string;
  facts: { videos: string; sessions: string; takeaways: string };
};

export function TopicHero({ content, titleId }: { content: TopicHeroContent; titleId?: string }) {
  const { backLink, eyebrow, title, emphasis, intro, reminder, expert, asideLabel, facts } = content;
  const [before, after] = title.split(emphasis);
  const factRows = [
    { icon: PlayCircle, text: facts.videos },
    { icon: CalendarDays, text: facts.sessions },
    { icon: ListChecks, text: facts.takeaways },
  ];

  return (
    <header className="mt-14 pt-10 pb-16 md:pt-14 print:p-0 print:pb-6">
      <Container width="full">
        <div className="mx-auto max-w-pg-content">
          <Link
            to={backLink.to}
            className="inline-flex items-center gap-1 text-xs font-medium text-pg-teal-dark hover:text-pg-navy print:hidden"
          >
            <ChevronLeft size={16} aria-hidden="true" />
            {backLink.label}
          </Link>

          <div className="mt-5 grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_340px] lg:gap-14">
            <div>
              <p className="flex items-center gap-2 text-pg-eyebrow text-pg-teal-dark">
                <span className="h-[18px] w-1 rounded-full bg-pg-sage" aria-hidden="true" />
                {eyebrow}
              </p>
              <h1 id={titleId} tabIndex={-1} className="mt-3 text-pg-h1 font-medium text-pg-navy focus:outline-none">
                {before}
                <em className="font-semibold">{emphasis}</em>
                {after}
              </h1>
              <p className="mt-4 text-pg-body-lg text-pg-slate">{intro}</p>
              <p className="mt-5 rounded-r-pg-lg border-l-4 border-pg-sage bg-white px-5 py-4 text-sm leading-relaxed text-pg-navy italic">
                {reminder}
              </p>
            </div>

            <aside
              className="rounded-pg-xl border border-pg-line bg-white p-6 shadow-pg-card print:hidden"
              aria-label={asideLabel}
            >
              <div className="flex items-center gap-3">
                <span
                  className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-pg-sage font-bold text-pg-navy"
                  aria-hidden="true"
                >
                  {expert.initials}
                </span>
                <div>
                  <p className="text-base leading-snug font-bold text-pg-navy">{expert.name}</p>
                  <p className="text-xs text-pg-slate">{expert.role}</p>
                </div>
              </div>
              <ul className="mt-5 grid gap-3 border-t border-pg-line pt-4 text-sm text-pg-slate">
                {factRows.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-2">
                    <Icon size={16} className="shrink-0 text-pg-teal-dark" aria-hidden="true" />
                    {text}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </Container>
    </header>
  );
}
