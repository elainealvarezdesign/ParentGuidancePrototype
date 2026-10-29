import { DocumentHeader } from "@/sections/DocumentHeader";
import { cookiesPage, type ExternalLink } from "@/content/cookies";
import { ButtonAnchor } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CookieTable } from "@/components/patterns/CookieTable";
import { LegalActions, BackToTopButton, downloadTextFile } from "@/components/patterns/DocumentActions";

/* Cookies Policy ("/cookies-policy"). Recipe: docs/system/pages/legal.md. Copy and tables: src/content/cookies.ts.
 * DocumentHeader + Download/Print → one card: about, what cookies are, cookie types, cookie tables, choices,
 * contact → Back to top. */

const DOCUMENT_ID = "cookies-policy-document";
const block = "border-b border-pg-line py-8 first:pt-0 last:border-b-0 last:pb-0";
const prose = "mt-4 space-y-4 text-base leading-7 text-pg-slate";

function handleDownload() {
  const body = document.getElementById(DOCUMENT_ID)?.innerText ?? "";
  downloadTextFile(cookiesPage.fileName, `${cookiesPage.header.title.toUpperCase()}\n\n${body.trim()}\n`);
}

function LinkGrid({ links }: { links: ExternalLink[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {links.map((link) => (
        <li key={link.href}>
          <ButtonAnchor
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            className="w-full justify-start"
          >
            {link.label}
            <span className="sr-only"> (opens in a new tab)</span>
          </ButtonAnchor>
        </li>
      ))}
    </ul>
  );
}

export default function CookiesPolicyPage() {
  const { header, lastUpdated, about, whatAre, types, tables, choices, contact } = cookiesPage;

  return (
    <div className="min-h-screen bg-pg-cream print:bg-white">
      <DocumentHeader content={header} titleId="cookies-policy-title" printable>
        <LegalActions onDownload={handleDownload} />
      </DocumentHeader>

      <section className="px-6 pb-20 md:px-10 lg:px-14 print:p-0">
        <div
          id={DOCUMENT_ID}
          className="mx-auto max-w-pg-content rounded-pg-xl border border-pg-line bg-white p-7 shadow-pg-card md:p-10 print:max-w-none print:rounded-none print:border-0 print:p-0 print:shadow-none"
        >
          <div className={block}>
            <p className="mb-6 text-sm font-semibold text-pg-teal-dark">{lastUpdated}</p>
            <h2 className="text-pg-h2 text-pg-navy">{about.heading}</h2>
            <div className={prose}>
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>

          <div className={block}>
            <h2 className="text-pg-h2 text-pg-navy">{whatAre.heading}</h2>
            <div className={prose}>
              {whatAre.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>

          <div className={block}>
            <h2 className="text-pg-h2 text-pg-navy">{types.heading}</h2>
            <p className="mt-4 text-base leading-7 text-pg-slate">{types.intro}</p>
            <ul className="mt-6 grid gap-4 md:grid-cols-3">
              {types.cards.map((c) => (
                <li key={c.title} className="rounded-pg-lg border border-pg-line bg-pg-cream p-5">
                  <Badge tone="tint">{c.badge}</Badge>
                  <h3 className="mt-4 text-pg-h3 text-pg-navy">{c.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-pg-slate">{c.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className={block}>
            <h2 className="text-pg-h2 text-pg-navy">{tables.heading}</h2>
            <div className="mt-6 flex flex-col gap-10">
              {tables.groups.map((group) => (
                <CookieTable key={group.label} group={group} />
              ))}
            </div>
          </div>

          <div className={block}>
            <h2 className="text-pg-h2 text-pg-navy">{choices.heading}</h2>
            <div className={prose}>
              {choices.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <p>{choices.browsersIntro}</p>
              <LinkGrid links={choices.browsers} />
              <p>{choices.otherBrowsers}</p>
            </div>
            <h3 className="mt-8 text-pg-h3 text-pg-navy">{choices.adOptOut.heading}</h3>
            <p className="mt-3 text-base leading-7 text-pg-slate">{choices.adOptOut.intro}</p>
            <div className="mt-4">
              <LinkGrid links={choices.adOptOut.links} />
            </div>
          </div>

          <div className={block}>
            <h2 className="text-pg-h2 text-pg-navy">{contact.heading}</h2>
            <p className="mt-4 text-base leading-7 text-pg-slate">{contact.body}</p>
            <ButtonAnchor href={`mailto:${contact.email}`} className="mt-4">
              {contact.email}
            </ButtonAnchor>
          </div>
        </div>
        <BackToTopButton focusId="cookies-policy-title" />
      </section>
    </div>
  );
}
