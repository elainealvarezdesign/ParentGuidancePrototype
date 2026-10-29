import type { Title } from "@/content/types";
import { Section, Container } from "@/components/layout/Section";
import { SearchField } from "@/components/ui/SearchField";
import { Reveal } from "@/components/ui/Reveal";

/* SeriesWelcome (docs/system/sections/series-welcome.md). First section once a family has picked a school:
 * centered title, the chosen district with a "Change district" button, a large search field and a 16:9 Vimeo
 * welcome video. Clears the fixed navbar. The search value is controlled by the page (it filters the
 * sections below). */

export type SeriesWelcomeContent = {
  title: Title;
  searchLabel: string;
  searchPlaceholder: string;
  changeLabel: string;
  /** Vimeo video id (the number in vimeo.com/<id>). */
  vimeoId: string;
  /** Accessible name of the video iframe. */
  videoTitle: string;
};

export type SeriesWelcomeProps = {
  content: SeriesWelcomeContent;
  /** "Fort Worth ISD · Texas". */
  location: string;
  onChangeLocation: () => void;
  search: string;
  onSearch: (value: string) => void;
};

export function SeriesWelcome({ content, location, onChangeLocation, search, onSearch }: SeriesWelcomeProps) {
  const { title, searchLabel, searchPlaceholder, changeLabel, vimeoId, videoTitle } = content;
  return (
    <Section belowNav spacing="none" className="pt-10 pb-14">
      <Container width="content" className="flex flex-col items-center gap-6 text-center">
        <Reveal from="none" className="flex flex-col items-center gap-2">
          <h1 className="text-pg-h1 text-pg-navy">
            {title.text}
            <em className="text-pg-teal-dark italic">{title.highlight}</em>
            {title.after}
          </h1>
          <p className="flex flex-wrap items-center justify-center gap-x-3 text-sm text-pg-navy">
            <span>{location}</span>
            <button
              type="button"
              onClick={onChangeLocation}
              className="font-semibold text-pg-teal-dark underline underline-offset-4 hover:text-pg-navy"
            >
              {changeLabel}
            </button>
          </p>
        </Reveal>
        <SearchField
          variant="hero"
          label={searchLabel}
          placeholder={searchPlaceholder}
          value={search}
          onValueChange={onSearch}
          className="w-full max-w-165"
        />
        <div className="relative aspect-video w-full max-w-165 overflow-hidden rounded-pg-2xl bg-pg-navy shadow-pg-card">
          <iframe
            src={`https://player.vimeo.com/video/${vimeoId}?dnt=1&title=0&byline=0&portrait=0`}
            title={videoTitle}
            className="absolute inset-0 h-full w-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Container>
    </Section>
  );
}
