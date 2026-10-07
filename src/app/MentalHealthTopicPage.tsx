import { useState } from "react";
import { Link, useParams } from "react-router";
import { Button, ButtonAnchor, ButtonLink } from "@/components/ui/Button";
import { ArrowRight, CalendarDays, ChevronLeft, ListChecks, PlayCircle } from "@/components/ui/icons";
import { getTopic, type Topic, type TopicVideo } from "./mhs/topics";
import { BackToTopButton } from "./legal/LegalActions";

/* Eyebrow + section title, shared by every section */
function SectionHeading({ eyebrow, title, id }: { eyebrow: string; title: string; id: string }) {
  return (
    <>
      <p className={`flex items-center gap-2 text-pg-eyebrow text-pg-teal-dark`}>
        <span className="h-[18px] w-1 rounded-full bg-pg-sage" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 id={id} className={`mt-2 text-2xl leading-tight font-bold text-pg-navy`}>
        {title}
      </h2>
    </>
  );
}

const card = "rounded-pg-xl border border-pg-line bg-white shadow-pg-card";
const container = "mx-auto max-w-pg-content";
const gutter = "px-6 md:px-10 lg:px-14";

function Hero({ topic }: { topic: Topic }) {
  const [before, after] = topic.title.split(topic.emphasis);
  return (
    <header className={`${gutter} pt-24 pb-16 md:pt-28 print:p-0 print:pb-6`}>
      <div className={container}>
        <Link
          to="/mental-health-series"
          className={`inline-flex items-center gap-1 text-xs font-medium text-pg-teal-dark hover:text-pg-navy print:hidden`}
        >
          <ChevronLeft size={16} aria-hidden="true" />
          All topics
        </Link>

        <div className="mt-5 grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_340px] lg:gap-14">
          <div>
            <p className={`flex items-center gap-2 text-pg-eyebrow text-pg-teal-dark`}>
              <span className="h-[18px] w-1 rounded-full bg-pg-sage" aria-hidden="true" />
              Mental Health Series · {topic.category}
            </p>
            <h1
              id="topic-title"
              tabIndex={-1}
              className={`mt-3 text-pg-h1 font-medium text-pg-navy focus:outline-none`}
            >
              {before}
              <em className="font-semibold">{topic.emphasis}</em>
              {after}
            </h1>
            <p className={`mt-4 text-base leading-[1.625] text-pg-slate`}>{topic.intro}</p>
            <p
              className={`mt-5 rounded-r-pg-lg border-l-4 border-pg-sage bg-white px-5 py-4 text-sm leading-relaxed text-pg-navy italic`}
            >
              {topic.reminder}
            </p>
          </div>

          <aside className={`${card} p-6 print:hidden`} aria-label="About this topic">
            <div className="flex items-center gap-3">
              <span
                className={`grid h-12 w-12 shrink-0 place-items-center rounded-full bg-pg-sage font-bold text-pg-navy`}
                aria-hidden="true"
              >
                {topic.expert.initials}
              </span>
              <div>
                <p className={`text-base leading-snug font-bold text-pg-navy`}>{topic.expert.name}</p>
                <p className={`text-xs text-pg-slate`}>{topic.expert.role}</p>
              </div>
            </div>
            <ul className={`mt-5 grid gap-3 border-t border-pg-line pt-4 text-sm text-pg-slate`}>
              <li className="flex items-center gap-2">
                <PlayCircle size={16} className="shrink-0 text-pg-teal-dark" aria-hidden="true" />
                {topic.videos.length} videos · {topic.videos.map((v) => v.kind).join(" & ")}
              </li>
              <li className="flex items-center gap-2">
                <CalendarDays size={16} className="shrink-0 text-pg-teal-dark" aria-hidden="true" />
                {topic.sessions.length} live sessions ·{" "}
                {[...new Set(topic.sessions.map((s) => s.language))].join(" & ")}
              </li>
              <li className="flex items-center gap-2">
                <ListChecks size={16} className="shrink-0 text-pg-teal-dark" aria-hidden="true" />
                {topic.takeaways.length} key takeaways
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </header>
  );
}

function VideoCard({ video: v }: { video: TopicVideo }) {
  const [playing, setPlaying] = useState(false);
  const canPlay = Boolean(v.vimeoId);

  return (
    <article className={`${card} overflow-hidden`}>
      <div className="relative aspect-video bg-pg-navy">
        {playing && v.vimeoId ? (
          <iframe
            src={`https://player.vimeo.com/video/${v.vimeoId}?autoplay=1&dnt=1&title=0&byline=0&portrait=0`}
            title={`${v.title} (video)`}
            className="absolute inset-0 h-full w-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            <img
              src={v.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: v.imagePosition ?? "center" }}
            />
            <div
              className="from-[color-mix(in srgb, var(--pg-navy) 55%, transparent)] absolute inset-0 bg-gradient-to-t to-transparent to-60%"
              aria-hidden="true"
            />
            <span className={`absolute top-3.5 left-3.5 rounded-full bg-pg-navy px-2 py-1 text-pg-eyebrow text-white`}>
              {v.kind}
            </span>
            {canPlay ? (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                aria-label={`Play ${v.title}, ${v.duration}`}
                className="group absolute inset-0 grid place-items-center"
              >
                <span className="grid h-16 w-16 place-items-center rounded-full bg-white/95 shadow-pg-overlay transition-transform group-hover:scale-105">
                  <svg width="22" height="22" viewBox="0 0 24 24" className="fill-pg-teal-dark" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </button>
            ) : (
              <span
                className="absolute top-1/2 left-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/95 shadow-pg-overlay"
                aria-hidden="true"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" className="fill-pg-teal-dark">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            )}
            <span
              className={`pointer-events-none absolute right-3.5 bottom-3 rounded-pg-md bg-pg-navy px-2 py-0.5 text-xs font-semibold text-white`}
            >
              <span className="sr-only">Duration </span>
              {v.duration}
            </span>
          </>
        )}
      </div>
      <div className="p-5 md:px-6 md:pb-6">
        <h3 className={`text-xl font-bold text-pg-navy`}>{v.title}</h3>
        <p className={`mt-2 text-sm leading-relaxed text-pg-slate`}>{v.description}</p>
      </div>
    </article>
  );
}

function Videos({ topic }: { topic: Topic }) {
  return (
    <section aria-labelledby="watch-title" className={`${gutter} bg-white py-14 md:py-20 print:hidden`}>
      <div className={container}>
        <SectionHeading eyebrow="Watch" title="Learn at your own pace" id="watch-title" />
        <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-2">
          {topic.videos.map((v) => (
            <VideoCard key={v.kind} video={v} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Sessions({ topic }: { topic: Topic }) {
  return (
    <section aria-labelledby="sessions-title" className={`${gutter} py-14 md:py-20 print:hidden`}>
      <div className={container}>
        <SectionHeading eyebrow="Live sessions" title="Join a session and ask your questions" id="sessions-title" />
        <div className="mt-7 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {topic.sessions.map((s) => {
            const spanish = s.language === "Español";
            return (
              <article key={s.title + s.time} className={`${card} flex gap-4 p-5`} lang={spanish ? "es" : undefined}>
                <div
                  className={`flex h-[72px] w-[72px] shrink-0 flex-col items-center justify-center self-start rounded-pg-lg bg-pg-tint text-center text-pg-teal-dark`}
                >
                  <span className="block text-pg-eyebrow leading-none">{s.month}</span>
                  <span className="my-1 block text-2xl leading-none font-bold text-pg-navy">{s.day}</span>
                  <span className="block text-pg-eyebrow leading-none">{s.weekday}</span>
                </div>
                <div className="flex min-w-0 flex-1 flex-col">
                  <h3 className={`text-base leading-snug font-bold text-pg-navy`}>{s.title}</h3>
                  <p className={`mt-1 text-xs text-pg-slate`}>{s.time}</p>
                  <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-3">
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium ${spanish ? "bg-pg-cream-dark text-pg-navy" : "bg-pg-tint text-pg-teal-dark"}`}
                    >
                      {s.language}
                    </span>
                    <ButtonAnchor href={s.registerUrl} target="_blank" rel="noopener noreferrer">
                      {spanish ? "Registrarse" : "Register"}
                      <span className="sr-only">
                        {spanish ? " (se abre en una pestaña nueva)" : " (opens in a new tab)"}
                      </span>
                    </ButtonAnchor>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Takeaways({ topic }: { topic: Topic }) {
  return (
    <section
      aria-labelledby="takeaways-title"
      className={`${gutter} bg-pg-tint py-14 md:py-20 print:bg-white print:py-6`}
    >
      <div className={container}>
        <SectionHeading
          eyebrow="Key takeaways"
          title={`${topic.takeaways.length} ideas to remember`}
          id="takeaways-title"
        />
        <ol className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {topic.takeaways.map((t, i) => (
            <li key={t.title} className="rounded-pg-xl border border-pg-line bg-white p-6">
              <span
                className={`grid h-9 w-9 place-items-center rounded-full bg-pg-sage font-bold text-pg-navy`}
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <h3 className={`mt-4 mb-2 text-base leading-snug font-bold text-pg-navy`}>{t.title}</h3>
              <p className={`text-sm leading-relaxed text-pg-slate`}>{t.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Actions({ topic }: { topic: Topic }) {
  return (
    <section aria-labelledby="actions-title" className={`${gutter} py-14 md:py-20 print:py-6`}>
      <div className={`${container} grid grid-cols-1 items-start gap-8 lg:grid-cols-[300px_1fr] lg:gap-14`}>
        <div>
          <SectionHeading
            eyebrow="At home"
            title={`Things you can do to build your child's ${topic.emphasis.toLowerCase()}`}
            id="actions-title"
          />
          <p className={`mt-3 text-base leading-relaxed text-pg-slate`}>
            Small, everyday actions you can start with this week.
          </p>
        </div>
        <ol className="grid gap-5">
          {topic.actions.map((a, i) => (
            <li key={a.title} className={`${card} p-6 md:p-7`}>
              <div className="flex items-center gap-4">
                <span
                  className={`grid h-9 w-9 shrink-0 place-items-center rounded-full bg-pg-navy font-bold text-white`}
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <h3 className={`text-xl leading-snug font-bold text-pg-navy md:text-xl`}>{a.title}</h3>
              </div>
              <dl className="mt-4 grid gap-4">
                {a.tips.map((tip) => (
                  <div key={tip.label}>
                    <dt className={`text-sm font-semibold text-pg-navy`}>{tip.label}</dt>
                    <dd className={`mt-0.5 text-sm leading-relaxed text-pg-slate`}>{tip.text}</dd>
                  </div>
                ))}
              </dl>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Resources({ topic }: { topic: Topic }) {
  return (
    <section aria-labelledby="resources-title" className={`${gutter} bg-white py-14 md:py-20 print:hidden`}>
      <div className={container}>
        <SectionHeading eyebrow="Keep learning" title="Additional resources" id="resources-title" />
        <ul className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {topic.resources.map((r) => (
            <li key={r.title}>
              <Link
                to={r.to}
                className={`${card} group flex h-full flex-col overflow-hidden no-underline transition-shadow hover:shadow-pg-card-hover`}
              >
                <img src={r.image} alt="" className="h-36 w-full object-cover" />
                <div className="flex flex-1 flex-col gap-2 p-4">
                  <span
                    className={`self-start rounded-full bg-pg-tint px-2 py-0.5 text-xs font-medium text-pg-teal-dark`}
                  >
                    {r.type}
                  </span>
                  <h3 className={`text-base leading-snug font-bold text-pg-navy`}>{r.title}</h3>
                  <p className={`flex-1 text-xs leading-relaxed text-pg-slate`}>{r.description}</p>
                  <span
                    className={`mt-1 inline-flex items-center gap-2 text-sm font-semibold text-pg-teal-dark group-hover:underline`}
                  >
                    View topic <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-col items-start gap-6 rounded-pg-xl bg-pg-navy px-6 py-7 md:flex-row md:items-center md:justify-between md:rounded-pg-2xl md:px-12 md:py-10">
          <div>
            <h2 className={`text-xl font-medium text-white md:text-2xl`}>
              For school leaders &amp; community organizers
            </h2>
            <p className={`mt-2 text-sm text-pg-sage`}>
              Share this topic with your families and find materials for your community.
            </p>
          </div>
          <ButtonLink to="/contact-us" variant="inverse" className="shrink-0">
            Get additional resources <ArrowRight size={16} aria-hidden="true" />
          </ButtonLink>
        </div>

        <BackToTopButton focusId="topic-title" />
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section aria-labelledby="newsletter-title" className={`${gutter} bg-pg-sage py-14 md:py-16 print:hidden`}>
      <div
        className={`${container} flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between md:gap-10`}
      >
        <div>
          <p className={`text-pg-eyebrow text-pg-navy`}>Let's keep in touch</p>
          <h2 id="newsletter-title" className={`mt-1 text-pg-h1 text-pg-navy`}>
            Subscribe to our newsletter
          </h2>
          <p className={`mt-2 text-sm text-pg-navy`}>New topics, live sessions and tools, straight to your inbox.</p>
        </div>
        <form
          className="flex w-full max-w-[460px] items-center gap-2 rounded-pg-lg bg-white p-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="topic-newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="topic-newsletter-email"
            type="email"
            placeholder="Your email"
            className={`min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-pg-navy outline-none placeholder:text-pg-slate`}
          />
          <Button type="submit" className="shrink-0">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}

export default function MentalHealthTopicPage() {
  const { slug } = useParams<{ slug: string }>();
  const topic = getTopic(slug);

  if (!topic) {
    return (
      <div className={`${gutter} min-h-[60vh] bg-pg-cream pt-32 pb-20`}>
        <div className={container}>
          <h1 className={`text-pg-h1 text-pg-navy`}>Topic not found</h1>
          <Link
            to="/mental-health-series"
            className={`mt-4 inline-flex text-sm font-semibold text-pg-teal-dark underline`}
          >
            Back to Mental Health Series
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-pg-cream print:bg-white">
      <Hero topic={topic} />
      <Videos topic={topic} />
      <Sessions topic={topic} />
      <Takeaways topic={topic} />
      <Actions topic={topic} />
      <Resources topic={topic} />
      <Newsletter />
    </div>
  );
}
