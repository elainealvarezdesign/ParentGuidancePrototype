import { Outlet, ScrollRestoration } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

/* Page shell (docs/system/layout.md): skip link, navbar, one <main> landmark per route, footer (audit M05).
 * Pages render their sections directly; they must not add their own <main>. The navbar is fixed and 56px
 * high: the first section of a page must clear it (<Section belowNav> adds the 56px). */

export function PageShell() {
  return (
    <>
      <ScrollRestoration />
      <a
        href="#main"
        className="sr-only rounded-pg-md bg-white px-4 py-2 text-sm font-semibold text-pg-navy shadow-pg-overlay focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200]"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1} className="min-h-screen overflow-x-clip bg-pg-cream outline-none">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
