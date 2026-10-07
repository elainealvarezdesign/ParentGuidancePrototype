import { ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { ArrowRight } from "@/components/ui/icons";

/* QuestionCard (docs/system/components/cards.md#question-card). One answered question in the Ask a
 * Therapist grid: photo with category and answerer avatar, the question as the card title, a "View Answer"
 * action and the answerer's name. Only the button is interactive. */

export type QuestionCardProps = {
  question: string;
  category: string;
  answeredBy: string;
  /** Decorative photo, 420×240. */
  image: string;
  to: string;
  headingLevel?: "h2" | "h3";
};

export function QuestionCard({
  question,
  category,
  answeredBy,
  image,
  to,
  headingLevel: Heading = "h3",
}: QuestionCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-pg-xl bg-white shadow-pg-card transition-[box-shadow,translate] duration-(--pg-dur-base) hover:-translate-y-1 hover:shadow-pg-card-hover">
      <div className="relative h-44 shrink-0 overflow-hidden">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-(--pg-dur-reveal) group-hover:scale-105"
        />
        <Badge tone="overlay" className="absolute top-3 left-3">
          {category}
        </Badge>
        <Avatar name={answeredBy} size="xs" ring className="absolute bottom-3 left-3" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <Heading className="flex-1 text-sm leading-normal font-semibold text-pg-navy">{question}</Heading>
        <ButtonLink to={to} className="w-full" aria-label={`View answer: ${question}`}>
          View Answer <ArrowRight size={16} aria-hidden="true" />
        </ButtonLink>
        <p className="text-center text-xs text-pg-slate">
          Answered by: <span className="font-medium">{answeredBy}</span>
        </p>
      </div>
    </article>
  );
}
