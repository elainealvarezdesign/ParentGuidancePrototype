import { useEffect } from "react";
import { Link, useParams } from "react-router";
import { ArrowRight, CalendarDays, ChevronLeft, ListChecks, PlayCircle } from "lucide-react";
import { getTopic, type Topic } from "./mhs/topics";
import { BackToTopButton } from "./legal/LegalActions";

const font = "font-['Poppins',sans-serif]";

/* Eyebrow + section title, shared by every section */
function SectionHeading({ eyebrow, title, id }: { eyebrow: string; title: string; id: string }) {
  return (
    <>
      <p className={`${font} flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#406064]`}>
        <span className="h-[18px] w-1 rounded-full bg-[#90b3b6]" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 id={id} className={`${font} mt-2 text-2xl font-bold leading-tight text-[#1c3243]`}>
        {title}
      </h2>
    </>
  );
}

const card = "rounded-2xl border border-[#dee8e9] bg-white shadow-[0_8px_24px_rgba(28,50,67,0.06)]";
const container = "mx-auto max-w-[1100px]";
const gutter = "px-6 md:px-10 lg:px-14";

function Hero({ topic }: { topic: Topic }) {
  const [before, after] = topic.title.split(topic.emphasis);
  return (
    <header className={`${gutter} pb-16 pt-24 md:pt-28 print:p-0 print:pb-6`}>
      <div className={container}>
        <Link to="/mental-health-series" className={`${font} inline-flex items-center gap-1 text-xs font-medium text-[#406064] hover:text-[#1c3243] print:hidden`}>
          <ChevronLeft size={16} aria-hidden="true" />
          All topics
        </Link>

        <div className="mt-5 grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_340px] lg:gap-14">
          <div>
            <p className={`${font} flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#406064]`}>
              <span className="h-[18px] w-1 rounded-full bg-[#90b3b6]" aria-hidden="true" />
              Mental Health Series · {topic.category}
            </p>
            <h1 id="topic-title" tabIndex={-1} className={`${font} mt-3 text-[28px] font-medium leading-[1.15] text-[#1c3243] focus:outline-none md:text-[40px]`}>
              {before}
              <em className="font-semibold">{topic.emphasis}</em>
              {after}
            </h1>
            <p className={`${font} mt-4 text-base leading-[1.625] text-[#435766]`}>{topic.intro}</p>
            <p className={`${font} mt-5 rounded-r-xl border-l-4 border-[#90b3b6] bg-white px-5 py-4 text-sm italic leading-relaxed text-[#1c3243]`}>
              {topic.reminder}
            </p>
          </div>

          <aside className={`${card} p-6 print:hidden`} aria-label="About this topic">
            <div className="flex items-center gap-3">
              <span className={`${font} grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#90b3b6] font-bold text-[#1c3243]`} aria-hidden="true">
                {topic.expert.initials}
              </span>
              <div>
                <p className={`${font} text-base font-bold leading-snug text-[#1c3243]`}>{topic.expert.name}</p>
                <p className={`${font} text-xs text-[#435766]`}>{topic.expert.role}</p>
              </div>
            </div>
            <ul className={`${font} mt-5 grid gap-3 border-t border-[#dee8e9] pt-4 text-[13px] text-[#435766]`}>
              <li className="flex items-center gap-2.5"><PlayCircle size={16} className="shrink-0 text-[#406064]" aria-hidden="true" />{topic.videos.length} videos · {topic.videos.map((v) => v.kind).join(" & ")}</li>
              <li className="flex items-center gap-2.5"><CalendarDays size={16} className="shrink-0 text-[#406064]" aria-hidden="true" />{topic.sessions.length} live sessions · {[...new Set(topic.sessions.map((s) => s.language))].join(" & ")}</li>
              <li className="flex items-center gap-2.5"><ListChecks size={16} className="shrink-0 text-[#406064]" aria-hidden="true" />{topic.takeaways.length} key takeaways</li>
            </ul>
          </aside>
        </div>
      </div>
    </header>
  );
}

function Videos({ topic }: { topic: Topic }) {
  return (
    <section aria-labelledby="watch-title" className={`${gutter} bg-white py-14 md:py-20 print:hidden`}>
      <div className={container}>
        <SectionHeading eyebrow="Watch" title="Learn at your own pace" id="watch-title" />
        <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-2">
          {topic.videos.map((v) => (
            <article key={v.kind} className={`${card} overflow-hidden`}>
              <div className="relative aspect-video bg-[#eaf1f1]">
                <img src={v.image} alt="" className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: v.imagePosition ?? "center" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(28,50,67,0.55)] to-transparent to-60%" aria-hidden="true" />
                <span className={`${font} absolute left-3.5 top-3.5 rounded-full bg-[#1c3243] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-white`}>
                  {v.kind}
                </span>
                <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/95 shadow-[0_24px_60px_rgba(28,50,67,0.28)]" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#406064"><path d="M8 5v14l11-7z" /></svg>
                </span>
                <span className={`${font} absolute bottom-3 right-3.5 rounded-md bg-[#1c3243] px-2 py-0.5 text-xs font-semibold text-white`}>
                  <span className="sr-only">Duration </span>{v.duration}
                </span>
              </div>
              <div className="p-5 md:px-6 md:pb-6">
                <h3 className={`${font} text-lg font-bold text-[#1c3243]`}>{v.title}</h3>
                <p className={`${font} mt-1.5 text-sm leading-relaxed text-[#435766]`}>{v.description}</p>
              </div>
            </article>
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
                <div className={`${font} w-16 shrink-0 rounded-xl bg-[#eaf1f1] py-2 text-center text-[#406064]`}>
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.1em]">{s.month}</span>
                  <span className="block text-[26px] font-bold leading-tight text-[#1c3243]">{s.day}</span>
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.1em]">{s.weekday}</span>
                </div>
                <div className="flex min-w-0 flex-1 flex-col">
                  <h3 className={`${font} text-[15px] font-bold leading-snug text-[#1c3243]`}>{s.title}</h3>
                  <p className={`${font} mt-1 text-xs text-[#435766]`}>{s.time}</p>
                  <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-3">
                    <span className={`${font} rounded-full px-2.5 py-0.5 text-xs font-medium ${spanish ? "bg-[#f0edeb] text-[#1c3243]" : "bg-[#eaf1f1] text-[#406064]"}`}>
                      {s.language}
                    </span>
                    <a href="#" className={`${font} inline-flex min-h-9 items-center rounded-lg bg-[#59797d] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#406064]`}>
                      {spanish ? "Registrarse" : "Register"}
                    </a>
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
    <section aria-labelledby="takeaways-title" className={`${gutter} bg-[#eaf1f1] py-14 md:py-20 print:bg-white print:py-6`}>
      <div className={container}>
        <SectionHeading eyebrow="Key takeaways" title={`${topic.takeaways.length} ideas to remember`} id="takeaways-title" />
        <ol className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {topic.takeaways.map((t, i) => (
            <li key={t.title} className="rounded-2xl border border-[#dee8e9] bg-white p-6">
              <span className={`${font} grid h-9 w-9 place-items-center rounded-full bg-[#90b3b6] font-bold text-[#1c3243]`} aria-hidden="true">
                {i + 1}
              </span>
              <h3 className={`${font} mb-1.5 mt-3.5 text-base font-bold leading-snug text-[#1c3243]`}>{t.title}</h3>
              <p className={`${font} text-sm leading-relaxed text-[#435766]`}>{t.text}</p>
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
          <SectionHeading eyebrow="At home" title={`Things you can do to build your child's ${topic.emphasis.toLowerCase()}`} id="actions-title" />
          <p className={`${font} mt-3 text-base leading-relaxed text-[#435766]`}>Small, everyday actions you can start with this week.</p>
        </div>
        <ol className="grid gap-5">
          {topic.actions.map((a, i) => (
            <li key={a.title} className={`${card} p-6 md:p-7`}>
              <div className="flex items-center gap-3.5">
                <span className={`${font} grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#1c3243] font-bold text-white`} aria-hidden="true">
                  {i + 1}
                </span>
                <h3 className={`${font} text-lg font-bold leading-snug text-[#1c3243] md:text-xl`}>{a.title}</h3>
              </div>
              <dl className="mt-4 grid gap-4">
                {a.tips.map((tip) => (
                  <div key={tip.label}>
                    <dt className={`${font} text-sm font-semibold text-[#1c3243]`}>{tip.label}</dt>
                    <dd className={`${font} mt-0.5 text-sm leading-relaxed text-[#435766]`}>{tip.text}</dd>
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
              <Link to={r.to} className={`${card} group flex h-full flex-col overflow-hidden no-underline transition-shadow hover:shadow-[0_8px_24px_rgba(28,50,67,0.14)]`}>
                <img src={r.image} alt="" className="h-36 w-full object-cover" />
                <div className="flex flex-1 flex-col gap-2 p-4">
                  <span className={`${font} self-start rounded-full bg-[#eaf1f1] px-2.5 py-0.5 text-xs font-medium text-[#406064]`}>{r.type}</span>
                  <h3 className={`${font} text-[15px] font-bold leading-snug text-[#1c3243]`}>{r.title}</h3>
                  <p className={`${font} flex-1 text-xs leading-relaxed text-[#435766]`}>{r.description}</p>
                  <span className={`${font} mt-1 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#406064] group-hover:underline`}>
                    View topic <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-col items-start gap-6 rounded-2xl bg-[#1c3243] px-6 py-7 md:flex-row md:items-center md:justify-between md:rounded-[28px] md:px-12 md:py-10">
          <div>
            <h2 className={`${font} text-xl font-medium text-white md:text-2xl`}>For school leaders &amp; community organizers</h2>
            <p className={`${font} mt-1.5 text-sm text-[#90b3b6]`}>Share this topic with your families and find materials for your community.</p>
          </div>
          <Link to="/contact-us" className={`${font} inline-flex min-h-11 shrink-0 items-center gap-2 rounded-lg bg-white px-5 text-sm font-semibold text-[#1c3243] no-underline transition-colors hover:bg-[#f9f4f1]`}>
            Get additional resources <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <BackToTopButton focusId="topic-title" />
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section aria-labelledby="newsletter-title" className={`${gutter} bg-[#90b3b6] py-14 md:py-16 print:hidden`}>
      <div className={`${container} flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between md:gap-10`}>
        <div>
          <p className={`${font} text-[11px] font-semibold uppercase tracking-[0.12em] text-[#1c3243]`}>Let's keep in touch</p>
          <h2 id="newsletter-title" className={`${font} mt-1 text-[28px] font-bold leading-tight text-[#1c3243] md:text-4xl`}>Subscribe to our newsletter</h2>
          <p className={`${font} mt-1.5 text-sm text-[#1c3243]`}>New topics, live sessions and tools, straight to your inbox.</p>
        </div>
        <form className="flex w-full max-w-[460px] overflow-hidden rounded-xl bg-white" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="topic-newsletter-email" className="sr-only">Email address</label>
          <input id="topic-newsletter-email" type="email" placeholder="Your email" className={`${font} min-w-0 flex-1 bg-transparent px-4 py-3.5 text-sm text-[#1c3243] placeholder:text-[#59797d] outline-none`} />
          <button type="submit" className={`${font} bg-[#59797d] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#406064]`}>Subscribe</button>
        </form>
      </div>
    </section>
  );
}

export default function MentalHealthTopicPage() {
  const { slug } = useParams<{ slug: string }>();
  const topic = getTopic(slug);

  // Open each topic at the top of the page (the app has no global scroll restoration)
  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!topic) {
    return (
      <main className={`${gutter} min-h-[60vh] bg-[#f9f4f1] pb-20 pt-32`}>
        <div className={container}>
          <h1 className={`${font} text-3xl font-bold text-[#1c3243]`}>Topic not found</h1>
          <Link to="/mental-health-series" className={`${font} mt-4 inline-flex text-sm font-semibold text-[#406064] underline`}>Back to Mental Health Series</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#f9f4f1] print:bg-white">
      <Hero topic={topic} />
      <Videos topic={topic} />
      <Sessions topic={topic} />
      <Takeaways topic={topic} />
      <Actions topic={topic} />
      <Resources topic={topic} />
      <Newsletter />
    </main>
  );
}
