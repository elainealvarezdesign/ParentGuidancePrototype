import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/cn";
import { mainNav } from "@/content/site";
import { Logo } from "@/components/brand/Logo";
import { Menu, X } from "@/components/ui/icons";
import { LanguageMenu } from "./LanguageMenu";
import { DURATION, EASE_OUT } from "@/lib/motion";

/* Site navbar (docs/system/layout.md). Fixed, 56px high, navy. Links from content/site.ts.
 * Below 1024px the links move into a menu panel: focus moves into it, Escape closes it and returns focus. */

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation
  const [lastPath, setLastPath] = useState(location.pathname);
  if (lastPath !== location.pathname) {
    setLastPath(location.pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    if (!menuOpen) return;
    firstMenuLinkRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const isActive = (to: string) => (to === "/" ? location.pathname === "/" : location.pathname.startsWith(to));

  return (
    <motion.nav
      aria-label="Main"
      className="fixed top-0 right-0 left-0 z-50 flex h-14 items-center justify-between bg-pg-navy px-6 lg:px-10 print:hidden"
      animate={{ boxShadow: scrolled ? "var(--pg-shadow-card-hover)" : "none" }}
      transition={{ duration: DURATION.base }}
    >
      <Link to="/" aria-label="Parent Guidance home" className="flex items-center rounded-pg-sm">
        <Logo />
      </Link>

      <div className="hidden items-center gap-6 lg:flex">
        <ul className="flex items-center gap-6">
          {mainNav.map((l) => {
            const active = isActive(l.to);
            return (
              <li key={l.to}>
                <Link
                  to={l.to}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative text-xs font-medium whitespace-nowrap transition-colors duration-(--pg-dur-fast) hover:text-pg-sage",
                    active ? "text-pg-sage" : "text-white",
                  )}
                >
                  {l.label}
                  {active && (
                    <span
                      className="absolute right-0 -bottom-[18px] left-0 h-0.5 rounded-full bg-pg-sage"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
        <LanguageMenu />
      </div>

      <button
        ref={menuButtonRef}
        type="button"
        className="-mr-2 flex h-11 w-11 items-center justify-center rounded-pg-md text-white transition-colors hover:bg-white/10 lg:hidden"
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen((v) => !v)}
      >
        {menuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
      </button>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 top-14 bg-pg-navy/40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: DURATION.fast }}
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              id="mobile-menu"
              className="absolute top-14 right-0 left-0 max-h-[calc(100dvh-56px)] overflow-y-auto border-t border-white/10 bg-pg-navy px-6 pt-2 pb-6 shadow-pg-overlay lg:hidden"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: DURATION.fast, ease: EASE_OUT }}
            >
              <ul className="flex flex-col">
                {mainNav.map((l, i) => {
                  const active = isActive(l.to);
                  return (
                    <li key={l.to} className="border-b border-white/10 last:border-b-0">
                      <Link
                        ref={i === 0 ? firstMenuLinkRef : undefined}
                        to={l.to}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "flex min-h-12 items-center gap-3 py-3 text-base font-medium transition-colors",
                          active ? "text-pg-sage" : "text-white hover:text-pg-sage",
                        )}
                      >
                        <span
                          className={cn("h-5 w-1 rounded-full", active ? "bg-pg-sage" : "bg-transparent")}
                          aria-hidden="true"
                        />
                        {l.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-xs font-semibold tracking-pg-eyebrow text-pg-sage uppercase">Language</span>
                <LanguageMenu />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
