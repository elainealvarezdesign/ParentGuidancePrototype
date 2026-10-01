import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import { Button, ButtonAnchor } from "../components/Button";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Check, X } from "../components/icons";

/* Event pop-up used by the Mental Health Series calendars (Figma: "Calendar" event card).
 * On tablet/desktop it opens next to the event that was clicked; on phones it is centered. */

export type EventModalData = {
  id: string;
  title: string;
  date: Date;
  /** "4:00 PM – 5:00 PM" or "All day" */
  time: string;
  description: string;
  registerUrl: string;
  language?: "Español";
};

const WIDTH = 320;
const GAP = 8;
const MARGIN = 16;

export const eventLink = (id: string) => `${window.location.origin}/mental-health-series/events?event=${encodeURIComponent(id)}`;

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(area);
    return ok;
  }
}

function Card({ event, anchor, onClose }: { event: EventModalData; anchor: DOMRect | null; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<CSSProperties>({ visibility: "hidden" });
  const [copied, setCopied] = useState(false);
  const spanish = event.language === "Español";
  const titleId = `event-modal-title-${event.id}`;
  const closeRef = useRef(onClose);
  closeRef.current = onClose;

  // Place next to the clicked event (below it, or above when there is no room); center on phones
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const vw = window.innerWidth, vh = window.innerHeight, h = el.offsetHeight;
    if (!anchor || vw < 640) {
      setStyle({ left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: `min(${WIDTH}px, calc(100vw - ${MARGIN * 2}px))` });
      return;
    }
    const left = Math.max(MARGIN, Math.min(anchor.left, vw - WIDTH - MARGIN));
    const below = anchor.bottom + GAP;
    const top = below + h <= vh - MARGIN ? below : Math.max(MARGIN, anchor.top - GAP - h);
    setStyle({ left, top, width: WIDTH });
  }, [anchor, event.id]);

  // Focus the dialog, trap Tab inside it, close on Escape and give focus back on close
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    ref.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { e.preventDefault(); closeRef.current(); return; }
      if (e.key !== "Tab" || !ref.current) return;
      const items = ref.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
      const first = items[0], last = items[items.length - 1];
      if (e.shiftKey && (document.activeElement === first || document.activeElement === ref.current)) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      previous?.focus?.();
    };
  }, []);

  async function handleCopy() {
    if (await copyText(eventLink(event.id))) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <>
      <motion.div
        className="fixed inset-0 z-50 bg-pg-navy/30 sm:bg-pg-navy/10"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22 }}
        aria-hidden="true"
      />
      <div ref={ref} role="dialog" aria-modal="true" aria-labelledby={titleId} tabIndex={-1} className="fixed z-50 outline-none" style={style}>
        <motion.div
          className="overflow-hidden rounded-pg-xl bg-white shadow-pg-overlay"
          initial={{ opacity: 0, y: -6, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -4, scale: 0.98 }}
          transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
          lang={spanish ? "es" : undefined}
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-3 bg-pg-teal px-5 py-4">
            <h2 id={titleId} className={`text-xl font-semibold leading-snug text-white`}>{event.title}</h2>
            <button
              type="button"
              onClick={onClose}
              aria-label={spanish ? "Cerrar" : "Close"}
              className="-mr-2 -mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-pg-md text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X size={18} aria-hidden="true" />
            </button>
          </div>

          {/* Body */}
          <div className="px-5 pb-4 pt-5">
            <div className="flex items-center gap-3">
              <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-pg-md bg-pg-tint text-xl font-bold text-pg-teal-dark`} aria-hidden="true">
                {event.date.getDate()}
              </span>
              <div>
                <p className={`text-base font-semibold leading-tight text-pg-navy`}>
                  {event.date.toLocaleDateString(spanish ? "es-US" : "en-US", { weekday: "short", month: "long", day: "numeric" })}
                </p>
                <p className={`mt-0.5 text-sm text-pg-teal`}>{event.time}{event.time !== "All day" ? " CT" : ""}</p>
              </div>
            </div>

            <p className={`mt-4 text-sm leading-relaxed text-pg-slate`}>{event.description}</p>

            <ButtonAnchor href={event.registerUrl} target="_blank" rel="noopener noreferrer" className="mt-5 w-full">
              {spanish ? "Regístrate a este evento" : "Register for this event"}
              <ArrowRight size={16} aria-hidden="true" />
              <span className="sr-only">{spanish ? " (se abre en una pestaña nueva)" : " (opens in a new tab)"}</span>
            </ButtonAnchor>

            <Button variant="tertiary" onClick={handleCopy} className="mt-1 w-full gap-1.5 font-medium">
              {copied && <Check size={15} aria-hidden="true" />}
              {copied ? (spanish ? "Enlace copiado" : "Link copied") : (spanish ? "Copiar enlace del evento" : "Copy event link")}
            </Button>
            <span className="sr-only" aria-live="polite">{copied ? (spanish ? "Enlace copiado" : "Event link copied to clipboard") : ""}</span>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export function EventModal({ event, anchor, onClose }: { event: EventModalData | null; anchor: DOMRect | null; onClose: () => void }) {
  return <AnimatePresence>{event && <Card key={event.id} event={event} anchor={anchor} onClose={onClose} />}</AnimatePresence>;
}
