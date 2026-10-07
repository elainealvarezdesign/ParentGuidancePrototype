import type { Cta } from "@/content/types";
import { ButtonLink } from "@/components/ui/Button";
import { Section, Container } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/SectionHeading";

/* Not found. Rendered for any unknown address, and by detail pages when their id does not exist
 * (audit M04: never fall back silently to another item). */

const defaultActions: Cta[] = [
  { label: "Go to home", to: "/" },
  { label: "Mental Health Series", to: "/mental-health-series" },
  { label: "Get help now", to: "/get-help" },
];
const variants = ["primary", "secondary", "tertiary"] as const;

export type NotFoundProps = {
  eyebrow?: string;
  title?: string;
  body?: string;
  actions?: Cta[];
};

export default function NotFoundPage({
  eyebrow = "Page not found",
  title = "We couldn't find that page",
  body = "The link may be out of date, or the page may have moved. Try one of these instead:",
  actions = defaultActions,
}: NotFoundProps) {
  return (
    <Section belowNav spacing="none" className="pt-20 pb-24">
      <Container width="reading" className="flex flex-col items-center gap-3 text-center">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="text-pg-h1 text-pg-navy">{title}</h1>
        <p className="text-base text-pg-slate">{body}</p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {actions.map((a, i) => (
            <ButtonLink key={a.label} to={a.to ?? "/"} variant={variants[Math.min(i, 2)]}>
              {a.label}
            </ButtonLink>
          ))}
        </div>
      </Container>
    </Section>
  );
}
