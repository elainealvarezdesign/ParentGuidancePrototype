import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/cn";
import { Pause, Play } from "./icons";

/* Media player (docs/system/components/media-player.md). SIMULATED: there is no video source yet; play
 * advances a fake progress so the layout and states can be reviewed. The controls are real and accessible
 * (audit H06): a named play/pause button and a native range input for seeking (arrow keys, Home/End).
 * Replace the internals with a real provider (e.g. Vimeo player) and keep this API.
 *
 * Give it a `key` tied to the content id so playback state resets when the route changes (audit M03).
 */

export type MediaPlayerProps = {
  /** Poster image URL. */
  poster: string;
  /** "mm:ss" */
  duration: string;
  /** What is playing; used in control names ("Play video: …"). */
  title: string;
  /** Progress bar color. Amber for course lessons, teal elsewhere. */
  accent?: "teal" | "amber";
  className?: string;
};

const toSeconds = (mmss: string) => {
  const [m = "0", s = "0"] = mmss.split(":");
  return parseInt(m, 10) * 60 + parseInt(s, 10);
};
const fmt = (sec: number) => `${Math.floor(sec / 60).toString().padStart(2, "0")}:${Math.floor(sec % 60).toString().padStart(2, "0")}`;

export function MediaPlayer({ poster, duration, title, accent = "teal", className }: MediaPlayerProps) {
  const total = toSeconds(duration);
  const [playing, setPlaying] = useState(false);
  const [position, setPosition] = useState(0);

  function toggle() {
    setPlaying((p) => !p);
    if (!playing) setPosition((p) => Math.min(p + Math.round(total * 0.05), total));
  }

  const percent = total ? (position / total) * 100 : 0;
  const label = `${playing ? "Pause" : "Play"} video: ${title}`;

  return (
    <div className={cn("relative aspect-video w-full overflow-hidden rounded-pg-lg bg-pg-navy select-none", className)}>
      <img
        src={poster}
        alt=""
        className={cn("absolute inset-0 h-full w-full object-cover transition-opacity duration-(--pg-dur-base)", playing ? "opacity-50" : "opacity-75")}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-pg-navy/70 via-pg-navy/10 to-transparent" aria-hidden="true" />
      <span className="absolute top-3 left-3 rounded-pg-sm bg-pg-navy/60 px-2 py-0.5 text-xs font-semibold text-white">{duration}</span>

      {/* Large center control: the whole poster is one real button */}
      <button type="button" onClick={toggle} aria-label={label} className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={playing ? "pause" : "play"}
            className="grid h-16 w-16 place-items-center rounded-full border border-white/30 bg-white/20 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.15 }}
          >
            {playing ? <Pause size={26} className="text-white" aria-hidden="true" /> : <Play size={26} className="ml-1 text-white" aria-hidden="true" />}
          </motion.span>
        </AnimatePresence>
      </button>

      <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-pg-navy/80 to-transparent px-4 pt-8 pb-3">
        <input
          type="range"
          min={0}
          max={total}
          step={1}
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          aria-label={`Seek: ${title}`}
          aria-valuetext={`${fmt(position)} of ${duration}`}
          className={cn(
            "mb-2 h-1 w-full cursor-pointer appearance-none rounded-full bg-white/30",
            "[&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full",
            "[&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0",
            accent === "amber"
              ? "accent-pg-amber [&::-moz-range-thumb]:bg-pg-amber [&::-webkit-slider-thumb]:bg-pg-amber"
              : "accent-pg-teal [&::-moz-range-thumb]:bg-pg-sage [&::-webkit-slider-thumb]:bg-pg-sage",
          )}
          style={{
            background: `linear-gradient(to right, var(${accent === "amber" ? "--pg-amber" : "--pg-sage"}) ${percent}%, rgb(255 255 255 / 0.3) ${percent}%)`,
          }}
        />
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggle}
            aria-label={label}
            className="grid h-8 w-8 place-items-center rounded-pg-md text-white/80 transition-colors hover:text-white"
          >
            {playing ? <Pause size={16} aria-hidden="true" /> : <Play size={16} className="ml-0.5" aria-hidden="true" />}
          </button>
          <span className="text-xs text-white/80" aria-hidden="true">
            {fmt(position)} / {duration}
          </span>
        </div>
      </div>
    </div>
  );
}
