import type { ReactNode } from "react";
import { motion } from "motion/react";
import svgPaths from "./logo-paths";
import type { SocialNetwork } from "@/content/site";

/* Social network marks (brand artwork). Use through <SocialLinks> in the footer. */
export const socialIcons: Record<SocialNetwork, ReactNode> = {
  facebook: (
    <svg viewBox="0 0 17.9509 17.9509" className="h-full w-full" aria-hidden="true">
      <path d={svgPaths.p327f8b00} className="fill-current" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 16.1558 16.1558" className="h-full w-full" aria-hidden="true">
      <path clipRule="evenodd" d={svgPaths.p35d8fa00} className="fill-current" fillRule="evenodd" />
      <path d={svgPaths.p3238c200} className="fill-current" />
      <path clipRule="evenodd" d={svgPaths.p20c8c700} className="fill-current" fillRule="evenodd" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 17.9509 12.5817" className="h-full w-full" aria-hidden="true">
      <path clipRule="evenodd" d={svgPaths.p3c318700} className="fill-current" fillRule="evenodd" />
    </svg>
  ),
  vimeo: (
    // Vimeo logo (Simple Icons, CC0)
    <svg viewBox="0 0 24 24" className="h-full w-full" fill="currentColor" aria-hidden="true">
      <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197a315.065 315.065 0 0 0 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 16.1558 16.1558" className="h-full w-full" aria-hidden="true">
      <path d={svgPaths.p397a0780} className="fill-current" />
    </svg>
  ),
};

/** Footer social row. Networks without a URL render as a plain mark (no dead link) until the URL exists. */
export function SocialLinks({ links }: { links: { network: SocialNetwork; label: string; href?: string }[] }) {
  return (
    <ul className="flex gap-3">
      {links.map(({ network, label, href }) => (
        <li key={network} className="h-5 w-5 text-pg-navy">
          {href ? (
            <motion.a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label} (opens in a new tab)`}
              whileHover={{ y: -2 }}
              className="block h-full w-full rounded-pg-sm"
            >
              {socialIcons[network]}
            </motion.a>
          ) : (
            <span className="block h-full w-full opacity-60" title={`${label}: link coming soon`}>
              {socialIcons[network]}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
