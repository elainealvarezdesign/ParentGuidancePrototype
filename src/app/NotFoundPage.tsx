import { ButtonLink } from "./components/Button";


/* Shown for any address that doesn't match a page (inside the normal header and footer). */
export default function NotFoundPage() {
  return (
    <main className="bg-pg-cream px-6 pb-24 pt-32 md:px-10 lg:px-14">
      <div className="mx-auto max-w-pg-reading text-center">
        <p className={`text-pg-eyebrow text-pg-teal-dark`}>Page not found</p>
        <h1 className={`text-pg-h1 mt-3 font-medium text-pg-navy`}>We couldn't find that page</h1>
        <p className={`mt-3 text-base leading-relaxed text-pg-slate`}>
          The link may be out of date, or the page may have moved. Try one of these instead:
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <ButtonLink to="/">
            Go to home
          </ButtonLink>
          <ButtonLink to="/mental-health-series" variant="secondary">
            Mental Health Series
          </ButtonLink>
          <ButtonLink to="/get-help" variant="tertiary">
            Get help now
          </ButtonLink>
        </div>
      </div>
    </main>
  );
}
