import { motion } from "../../tokens/pg.tokens.json";

/** True when the user asked their system to reduce motion. */
export function prefersReducedMotion(): boolean {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Scroll behavior for window.scrollTo: smooth unless reduced motion is on. */
export function scrollBehavior(): ScrollBehavior {
  return prefersReducedMotion() ? "auto" : "smooth";
}

/* Motion tokens for motion/react, read from tokens/pg.tokens.json (the same values as the CSS variables
 * --pg-ease-* and the ease-pg-* utilities). Use these instead of raw numbers: `pnpm check:design` fails on
 * a literal cubic-bezier array or duration in a `transition`. */

type Bezier = [number, number, number, number];
const ms = (value: string) => parseFloat(value) / 1000;

/** Brand curve for entrances and hovers. */
export const EASE_OUT = motion["ease-out"].$value as Bezier;
/** Open and close (accordions, dialogs). */
export const EASE_IN_OUT = motion["ease-in-out"].$value as Bezier;
/** Durations in seconds (motion/react's unit). */
export const DURATION = {
  /** 150ms: hover, press, small menus. */
  micro: ms(motion["dur-micro"].$value),
  /** 220ms: overlays fading in and out. */
  fast: ms(motion["dur-fast"].$value),
  /** 350ms: panels, dialogs, accordions. */
  base: ms(motion["dur-base"].$value),
  /** 550ms: scroll-in reveals and hero entrances. */
  reveal: ms(motion["dur-reveal"].$value),
} as const;
