import { useRef, type ReactNode } from "react";
import { motion, useInView } from "motion/react";

/* Scroll reveal (docs/system/foundations.md → Motion). Fades content in when it enters the viewport, once.
 * Respects reduced motion through <MotionConfig reducedMotion="user"> in the app root.
 *
 *   <Reveal>…</Reveal>                 fade up 32px (default)
 *   <Reveal from="left" delay={0.1}>   slide in from the side
 *   <Reveal from="none">               opacity only
 */

const EASE = [0.25, 0.46, 0.45, 0.94] as const;
const offsets = { up: { y: 32 }, left: { x: -48 }, right: { x: 48 }, none: {} } as const;

export type RevealProps = {
  children: ReactNode;
  from?: keyof typeof offsets;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
};

export function Reveal({ children, from = "up", delay = 0, className, as = "div" }: RevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const MotionTag = motion[as];
  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...offsets[from] }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}
