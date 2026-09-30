import { Link } from "react-router";

const font = "font-['Poppins',sans-serif]";

/* Shown for any address that doesn't match a page (inside the normal header and footer). */
export default function NotFoundPage() {
  return (
    <main className="bg-pg-cream px-6 pb-24 pt-32 md:px-10 lg:px-14">
      <div className="mx-auto max-w-pg-reading text-center">
        <p className={`${font} text-[11px] font-semibold uppercase tracking-[0.12em] text-pg-teal-dark`}>Page not found</p>
        <h1 className={`${font} mt-3 text-[28px] font-medium leading-tight text-pg-navy md:text-[40px]`}>We couldn't find that page</h1>
        <p className={`${font} mt-3 text-base leading-relaxed text-pg-slate`}>
          The link may be out of date, or the page may have moved. Try one of these instead:
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link to="/" className={`${font} inline-flex min-h-11 items-center rounded-pg-md bg-pg-teal px-5 text-sm font-semibold text-white transition-colors hover:bg-pg-teal-dark`}>
            Go to home
          </Link>
          <Link to="/mental-health-series" className={`${font} inline-flex min-h-11 items-center rounded-pg-md border border-pg-teal bg-white px-5 text-sm font-semibold text-pg-teal-dark transition-colors hover:bg-pg-tint`}>
            Mental Health Series
          </Link>
          <Link to="/get-help" className={`${font} inline-flex min-h-11 items-center rounded-pg-md px-3 text-sm font-semibold text-pg-teal-dark underline-offset-4 hover:underline`}>
            Get help now
          </Link>
        </div>
      </div>
    </main>
  );
}
