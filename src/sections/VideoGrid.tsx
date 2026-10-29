import { useId } from "react";
import { Section, Container } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VideoCard, type VideoCardContent } from "@/components/cards/VideoCard";

/* VideoGrid (docs/system/sections/video-grid.md). Eyebrow + title, then a two-column grid of VideoCards that
 * play Vimeo in place. White band. Hidden when printing. */

export type VideoGridContent = {
  eyebrow?: string;
  title: string;
  /** 2 or 4 videos read best in the two-column grid. */
  videos: VideoCardContent[];
};

export function VideoGrid({ content }: { content: VideoGridContent }) {
  const headingId = useId();
  const { eyebrow, title, videos } = content;
  return (
    <Section tone="white" spacing="l" labelledBy={headingId} className="print:hidden">
      <Container width="full">
        <div className="mx-auto max-w-pg-content">
          <SectionHeading align="left" size="small" eyebrow={eyebrow} title={title} id={headingId} />
          <ul className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-2">
            {videos.map((v) => (
              <li key={v.title}>
                <VideoCard video={v} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
