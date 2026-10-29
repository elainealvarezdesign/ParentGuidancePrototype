import { useState } from "react";

/* VideoCard (docs/system/components/cards.md). A 16:9 poster with a kind badge, duration and play button;
 * pressing play swaps in the Vimeo player (privacy mode, autoplay). Without a Vimeo id the play icon is
 * decorative. Title and one-sentence description below. */

export type VideoCardContent = {
  /** Badge on the poster, e.g. "Deep Dive". */
  kind: string;
  title: string;
  /** One sentence. */
  description: string;
  /** "4:48". */
  duration: string;
  /** Poster image, 16:9, 1200px wide. */
  image: string;
  /** CSS object-position for the poster, e.g. "center 20%". */
  imagePosition?: string;
  /** Vimeo video id (the number in vimeo.com/<id>). */
  vimeoId?: string;
};

function PlayIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" className="fill-pg-teal-dark" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export function VideoCard({ video, headingLevel = 3 }: { video: VideoCardContent; headingLevel?: 2 | 3 }) {
  const [playing, setPlaying] = useState(false);
  const Heading = `h${headingLevel}` as const;
  const { kind, title, description, duration, image, imagePosition, vimeoId } = video;

  return (
    <article className="overflow-hidden rounded-pg-xl border border-pg-line bg-white shadow-pg-card">
      <div className="relative aspect-video bg-pg-navy">
        {playing && vimeoId ? (
          <iframe
            src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&dnt=1&title=0&byline=0&portrait=0`}
            title={`${title} (video)`}
            className="absolute inset-0 h-full w-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            <img
              src={image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: imagePosition ?? "center" }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-pg-navy/55 to-transparent to-60%"
              aria-hidden="true"
            />
            <span className="absolute top-3.5 left-3.5 rounded-full bg-pg-navy px-2 py-1 text-pg-eyebrow text-white">
              {kind}
            </span>
            {vimeoId ? (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                aria-label={`Play ${title}, ${duration}`}
                className="group absolute inset-0 grid place-items-center"
              >
                <span className="grid h-16 w-16 place-items-center rounded-full bg-white/95 shadow-pg-overlay transition-transform group-hover:scale-105">
                  <PlayIcon />
                </span>
              </button>
            ) : (
              <span
                className="absolute top-1/2 left-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/95 shadow-pg-overlay"
                aria-hidden="true"
              >
                <PlayIcon />
              </span>
            )}
            <span className="pointer-events-none absolute right-3.5 bottom-3 rounded-pg-md bg-pg-navy px-2 py-0.5 text-xs font-semibold text-white">
              <span className="sr-only">Duration </span>
              {duration}
            </span>
          </>
        )}
      </div>
      <div className="p-5 md:px-6 md:pb-6">
        <Heading className="text-xl font-bold text-pg-navy">{title}</Heading>
        <p className="mt-2 text-sm leading-relaxed text-pg-slate">{description}</p>
      </div>
    </article>
  );
}
