import { Link } from "react-router";
import { copyright, footerColumns, socialLinks } from "@/content/site";
import { LogoColor } from "@/components/brand/Logo";
import { SocialLinks } from "@/components/brand/SocialIcons";
import badgeGooglePlay from "@/components/brand/badge-google-play.png";
import badgeAppStore from "@/components/brand/badge-app-store.png";

/* Site footer (docs/system/layout.md). Columns and links come from content/site.ts. */

const linkClass = "text-xs text-pg-slate transition-colors hover:text-pg-teal-dark";

export function Footer() {
  return (
    <footer className="bg-pg-cream px-6 py-8 md:px-10 lg:px-14 print:hidden">
      <div className="mx-auto mb-10 flex max-w-pg-page flex-col items-start gap-10 lg:flex-row lg:gap-20">
        <div className="flex w-full flex-col gap-6 lg:w-[467px] lg:shrink-0">
          <Link to="/" aria-label="Parent Guidance home" className="w-fit rounded-pg-sm">
            <LogoColor className="h-11 w-[182px]" />
          </Link>
          <div className="flex items-center gap-3">
            <img src={badgeGooglePlay} alt="Get it on Google Play" className="h-10 object-contain" />
            <img src={badgeAppStore} alt="Download on the App Store" className="h-10 object-contain" />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-8 sm:flex-row sm:gap-16 lg:justify-center">
          {footerColumns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="mb-3 text-sm font-semibold text-pg-slate">{col.title}</h2>
              <ul className="flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.to ? (
                      <Link to={l.to} className={linkClass}>
                        {l.label}
                      </Link>
                    ) : (
                      <a href={l.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                        {l.label}
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>
      <div className="mb-6 h-px bg-pg-sage opacity-60" aria-hidden="true" />
      <div className="mx-auto flex max-w-pg-page flex-col-reverse items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <SocialLinks links={socialLinks} />
        <p className="text-sm text-pg-navy sm:whitespace-nowrap">{copyright}</p>
      </div>
    </footer>
  );
}
