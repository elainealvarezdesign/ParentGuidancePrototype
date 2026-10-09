import { useEffect, useRef } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router";
import { siteName } from "@/content/site";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

/* Page shell (docs/system/layout.md): skip link, navbar, one <main> landmark per route, footer (audit M05).
 * Pages render their sections directly; they must not add their own <main>. The navbar is fixed and 56px
 * high: the first section of a page must clear it (<Section belowNav> adds the 56px).
 *
 * On every route change it names the browser tab after the page's <h1> ("Parent Coaching | Parent Guidance"),
 * and — after the first load — moves focus to that <h1>, so screen readers announce the new page instead of
 * staying silent (single-page apps do not reload). In-page links (#faq) keep their own scroll target. */

export function PageShell() {
  const { pathname, hash } = useLocation();
  const firstLoad = useRef(true);
  useEffect(() => {
    const main = document.getElementById("main");
    const h1 = main?.querySelector("h1");
    const heading = h1?.textContent?.replace(/\s+/g, " ").trim();
    document.title = heading ? `${heading} | ${siteName}` : siteName;
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }
    if (hash || !main) return;
    const target = h1 ?? main;
    if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
    target.setAttribute("data-route-focus", "");
    target.focus({ preventScroll: true });
    // Only the pathname matters: filters and search queries (?q=) stay on the same page.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      <ScrollRestoration />
      <a
        href="#main"
        className="sr-only rounded-pg-md bg-white px-4 py-2 text-sm font-semibold text-pg-navy shadow-pg-overlay focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200]"
      >
        Skip to content
      </a>
      <header>
        <Navbar />
      </header>
      <main id="main" tabIndex={-1} className="min-h-screen overflow-x-clip bg-pg-cream outline-none">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
