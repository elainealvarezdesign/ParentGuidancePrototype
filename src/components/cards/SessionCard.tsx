import { ButtonAnchor } from "@/components/ui/Button";

/* SessionCard (docs/system/components/cards.md). A live session: date block (month, day, weekday), title, time,
 * language pill and a Register link that opens in a new tab. Spanish sessions are marked lang="es" and use
 * Spanish labels. */

export type SessionCardContent = {
  /** "Nov". */
  month: string;
  /** "16". */
  day: string;
  /** "Mon". */
  weekday: string;
  title: string;
  /** "6:00 pm – 7:00 pm CST". */
  time: string;
  language: "English" | "Español";
  registerUrl: string;
};

const labels = {
  English: { register: "Register", newTab: " (opens in a new tab)" },
  Español: { register: "Registrarse", newTab: " (se abre en una pestaña nueva)" },
};

export function SessionCard({ session, headingLevel = 3 }: { session: SessionCardContent; headingLevel?: 2 | 3 }) {
  const Heading = `h${headingLevel}` as const;
  const spanish = session.language === "Español";
  const label = labels[session.language];

  return (
    <article
      className="flex h-full gap-4 rounded-pg-xl border border-pg-line bg-white p-5 shadow-pg-card"
      lang={spanish ? "es" : undefined}
    >
      <div className="flex h-[72px] w-[72px] shrink-0 flex-col items-center justify-center self-start rounded-pg-lg bg-pg-tint text-center text-pg-teal-dark">
        <span className="block text-pg-eyebrow leading-none">{session.month}</span>
        <span className="my-1 block text-2xl leading-none font-bold text-pg-navy">{session.day}</span>
        <span className="block text-pg-eyebrow leading-none">{session.weekday}</span>
      </div>
      <div className="flex min-w-0 flex-1 flex-col">
        <Heading className="text-base leading-snug font-bold text-pg-navy">{session.title}</Heading>
        <p className="mt-1 text-xs text-pg-slate">{session.time}</p>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-3">
          <span
            className={`rounded-full px-2 py-0.5 text-xs font-medium ${spanish ? "bg-pg-cream-dark text-pg-navy" : "bg-pg-tint text-pg-teal-dark"}`}
          >
            {session.language}
          </span>
          <ButtonAnchor href={session.registerUrl} target="_blank" rel="noopener noreferrer">
            {label.register}
            <span className="sr-only">{label.newTab}</span>
          </ButtonAnchor>
        </div>
      </div>
    </article>
  );
}
