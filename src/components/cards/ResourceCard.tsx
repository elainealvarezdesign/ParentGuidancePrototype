import { Link } from "react-router";
import type { ResourceType } from "@/content/mentalHealthSeries";
import { Badge, type BadgeTone } from "@/components/ui/Badge";
import { RichText } from "@/components/ui/RichText";
import { ArrowRight, BookOpen, FileText, ListChecks, PlayCircle, Settings } from "@/components/ui/icons";

/* ResourceCard (docs/system/components/cards.md#resource-card). One item in the Mental Health Series
 * resource library: type badge (+ New), title, one line, then category and duration. The whole card is a
 * single link (it has no other controls). */

const typeStyle: Record<ResourceType, { tone: BadgeTone; Icon: typeof PlayCircle }> = {
  Video: { tone: "tint", Icon: PlayCircle },
  Article: { tone: "cream", Icon: FileText },
  Guide: { tone: "success", Icon: BookOpen },
  Worksheet: { tone: "warning", Icon: ListChecks },
  Tool: { tone: "error", Icon: Settings },
};

export type ResourceCardProps = {
  title: string;
  description: string;
  type: ResourceType;
  category: string;
  duration: string;
  isNew?: boolean;
  to: string;
};

export function ResourceCard({ title, description, type, category, duration, isNew, to }: ResourceCardProps) {
  const { tone, Icon } = typeStyle[type];
  return (
    <Link
      to={to}
      className="group flex h-full flex-col items-start gap-3 rounded-pg-xl bg-white p-5 no-underline shadow-pg-card transition-[box-shadow,translate] duration-(--pg-dur-base) hover:-translate-y-0.5 hover:shadow-pg-card-hover"
    >
      <span className="flex w-full items-center justify-between">
        <Badge tone={tone} icon={<Icon size={16} aria-hidden="true" />} className="px-2">
          {type}
        </Badge>
        {isNew && (
          <Badge tone="teal" className="px-2 py-0.5">
            New
          </Badge>
        )}
      </span>
      <span className="text-sm font-semibold text-pg-navy transition-colors group-hover:text-pg-teal-dark">
        {title}
      </span>
      <span className="flex-1 text-xs text-pg-slate">
        <RichText text={description} />
      </span>
      <span className="flex w-full items-center justify-between border-t border-pg-tint-soft pt-2">
        <Badge tone="cream" className="bg-pg-cream px-2 py-0.5 font-medium text-pg-teal-dark">
          {category}
        </Badge>
        <span className="flex items-center gap-2 text-xs text-pg-slate">
          {duration}
          <ArrowRight
            size={14}
            aria-hidden="true"
            className="text-pg-teal-dark transition-transform group-hover:translate-x-0.5"
          />
        </span>
      </span>
    </Link>
  );
}
