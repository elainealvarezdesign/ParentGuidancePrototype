import { forwardRef, type ComponentPropsWithoutRef } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { cn } from "./ui/utils";

/* Parent Guidance buttons (docs/guidelines/02-botones.md).
 * One radius (8px), three sizes, five styles. Use <Button> for actions, <ButtonLink> for in-app
 * navigation and <ButtonAnchor> for external, mail or tel links. `buttonClass()` gives the same
 * classes for the rare element that can't use these components. */

export type ButtonVariant = "primary" | "secondary" | "tertiary" | "inverse" | "inverse-secondary";
export type ButtonSize = "s" | "m" | "l";

const base =
  "inline-flex items-center justify-center gap-2 rounded-pg-md font-['Poppins',sans-serif] font-semibold no-underline " +
  "transition-colors duration-(--pg-dur-fast) disabled:cursor-not-allowed [&_svg]:shrink-0";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-pg-teal text-white hover:bg-pg-teal-dark disabled:bg-pg-line disabled:text-pg-slate",
  secondary: "border border-pg-teal bg-white text-pg-teal-dark hover:bg-pg-tint disabled:border-pg-line disabled:bg-white disabled:text-pg-slate",
  tertiary: "text-pg-teal-dark underline-offset-4 hover:underline disabled:text-pg-slate disabled:no-underline",
  inverse: "bg-white text-pg-navy hover:bg-pg-cream disabled:opacity-60",
  "inverse-secondary": "border border-white/20 bg-white/5 text-white hover:bg-white/10 disabled:opacity-60",
};

const sizes: Record<ButtonSize, string> = {
  s: "min-h-9 px-4 text-sm",
  m: "min-h-11 px-5 text-sm",
  l: "min-h-13 px-7 text-base",
};

export function buttonClass({ variant = "primary", size = "m", className }: { variant?: ButtonVariant; size?: ButtonSize; className?: string } = {}) {
  return cn(base, variants[variant], variant === "tertiary" ? "min-h-11 px-1 text-sm" : sizes[size], className);
}

type Style = { variant?: ButtonVariant; size?: ButtonSize };
const tap = { scale: 0.97 };

type ButtonProps = Omit<ComponentPropsWithoutRef<typeof motion.button>, "children"> & Style & { loading?: boolean; children?: React.ReactNode };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant, size, loading, className, disabled, type, children, ...props },
  ref,
) {
  return (
    <motion.button
      ref={ref}
      type={type ?? "button"}
      whileTap={disabled || loading ? undefined : tap}
      aria-busy={loading || undefined}
      disabled={disabled || loading}
      className={buttonClass({ variant, size, className })}
      {...props}
    >
      {loading && <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent" aria-hidden="true" />}
      {children}
    </motion.button>
  );
});

const MotionLink = motion.create(Link);

type ButtonLinkProps = Omit<ComponentPropsWithoutRef<typeof MotionLink>, "children"> & Style & { children?: React.ReactNode };

export function ButtonLink({ variant, size, className, ...props }: ButtonLinkProps) {
  return <MotionLink whileTap={tap} className={buttonClass({ variant, size, className })} {...props} />;
}

type ButtonAnchorProps = Omit<ComponentPropsWithoutRef<typeof motion.a>, "children"> & Style & { children?: React.ReactNode };

export function ButtonAnchor({ variant, size, className, ...props }: ButtonAnchorProps) {
  return <motion.a whileTap={tap} className={buttonClass({ variant, size, className })} {...props} />;
}
