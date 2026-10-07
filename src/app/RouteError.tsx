import { Link, isRouteErrorResponse, useRouteError } from "react-router";
import { buttonClass } from "@/components/ui/Button";

/* Route-level error screen (TODO phase 5): shown when a page fails to load or throws. */
export function RouteError() {
  const error = useRouteError();
  const message = isRouteErrorResponse(error)
    ? `${error.status} ${error.statusText}`
    : "Something went wrong while loading this page.";
  return (
    <div className="min-h-screen bg-pg-cream px-6 pt-32 pb-24 text-center">
      <p className="text-pg-eyebrow text-pg-teal-dark">Error</p>
      <h1 className="mt-3 text-pg-h1 text-pg-navy">We couldn't load this page</h1>
      <p className="mx-auto mt-4 max-w-pg-reading text-pg-body-lg text-pg-slate">{message} Please try again.</p>
      <div className="mt-8 flex justify-center gap-3">
        <button type="button" onClick={() => window.location.reload()} className={buttonClass()}>
          Try again
        </button>
        <Link to="/" className={buttonClass({ variant: "secondary" })}>
          Go to the home page
        </Link>
      </div>
    </div>
  );
}
