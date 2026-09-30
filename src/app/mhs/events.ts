/* Mental Health Series events, shown on /mental-health-series/events.
 * Times are Central Time. Events marked `sample` are illustrative prototype content. */

export type EventCategory = "qa" | "workshop" | "support" | "course";

export const CATEGORIES: Record<EventCategory, { label: string; swatch: string; pill: string }> = {
  qa:       { label: "Live Q&A",      swatch: "#59797d", pill: "bg-[#59797d] text-white" },
  workshop: { label: "Workshop",      swatch: "#1c3243", pill: "bg-[#1c3243] text-white" },
  support:  { label: "Support group", swatch: "#90b3b6", pill: "bg-[#90b3b6] text-[#1c3243]" },
  course:   { label: "Course update", swatch: "#406064", pill: "bg-[#eaf1f1] text-[#406064] ring-1 ring-inset ring-[#90b3b6]" },
};

export type SeriesEvent = {
  id: string;
  title: string;
  description: string;
  category: EventCategory;
  /** YYYY-MM-DD */
  date: string;
  /** 24h "HH:MM" in Central Time; omitted for all-day events */
  start?: string;
  end?: string;
  language?: "Español";
  sample?: boolean;
};

export const EVENTS: SeriesEvent[] = [
  { id: "anxiety-es", title: "Ansiedad en niños: preguntas y respuestas", description: "Sesión en vivo en español con una terapeuta infantil. Trae tus preguntas.", category: "qa", date: "2025-07-08", start: "18:00", end: "19:00", language: "Español", sample: true },
  { id: "anxiety", title: "Understanding Anxiety in Children", description: "Live Q&A with a licensed child therapist. Bring your questions.", category: "qa", date: "2025-07-10", start: "16:00", end: "17:00" },
  { id: "mindfulness", title: "Mindfulness & Stress Tools for Parents", description: "Interactive workshop on breathing and grounding techniques you can share with your kids.", category: "workshop", date: "2025-07-15", start: "12:00", end: "13:00" },
  { id: "resilience-m2", title: "Emotional Resilience – Module 2 Launch", description: "New module now available in your dashboard.", category: "course", date: "2025-07-17" },
  { id: "support-jul23", title: "Parent Support Circle", description: "Facilitated group session for parents navigating school-year challenges.", category: "support", date: "2025-07-23", start: "18:00", end: "19:00" },
  { id: "screen-time", title: "Ask a Therapist: Screen Time", description: "A short live Q&A on healthy screen-time limits for kids and teens.", category: "qa", date: "2025-07-28", start: "12:00", end: "12:45", sample: true },
  { id: "confidence-s1", title: "Building Your Child's Confidence – Session 1", description: "Dr. Kevin Skinner on fostering a healthy, confident identity in children.", category: "workshop", date: "2025-07-28", start: "18:00", end: "19:00", sample: true },
  { id: "support-jul31", title: "Parent Support Circle", description: "Facilitated group session for parents navigating school-year challenges.", category: "support", date: "2025-07-31", start: "18:00", end: "19:00", sample: true },
  { id: "back-to-school", title: "Back-to-School Mental Health Prep", description: "Strategies to ease school transitions and manage first-week anxiety.", category: "workshop", date: "2025-08-01", start: "14:00", end: "15:00" },
  { id: "teen-forum", title: "Teen Mental Health – Open Forum", description: "For parents of middle and high schoolers. Topics include social pressure, identity, and digital wellbeing.", category: "qa", date: "2025-08-12", start: "17:00", end: "18:30" },
  { id: "self-care", title: "Self-Care for Caregivers", description: "You can't pour from an empty cup. A session dedicated to parent wellbeing.", category: "support", date: "2025-08-21", start: "12:00", end: "13:00" },
  { id: "crisis", title: "Crisis Resources Workshop", description: "Know the signs, know the steps. A practical guide to crisis preparedness for families.", category: "workshop", date: "2025-08-25", start: "15:00", end: "16:00" },
];

/* ── Formatting helpers ── */

export function parseDate(date: string) {
  const [y, m, d] = date.split("-").map(Number);
  return new Date(y, m - 1, d);
}

export function toKey(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function to12h(t: string) {
  const [h, m] = t.split(":").map(Number);
  const suffix = h >= 12 ? "PM" : "AM";
  const hh = h % 12 === 0 ? 12 : h % 12;
  return m === 0 ? `${hh}:00 ${suffix}` : `${hh}:${String(m).padStart(2, "0")} ${suffix}`;
}

/** "4:00 – 5:00 PM" or "All day" */
export function formatTimeRange(e: SeriesEvent) {
  if (!e.start || !e.end) return "All day";
  const a = to12h(e.start), b = to12h(e.end);
  return a.slice(-2) === b.slice(-2) ? `${a.slice(0, -3)} – ${b}` : `${a} – ${b}`;
}

/** Short start time for calendar pills: "4:00 PM" */
export function formatStart(e: SeriesEvent) {
  return e.start ? to12h(e.start) : "All day";
}

/* ── Calendar file (.ics) ── */

/** Central Time offset for a date: CDT (-5) from the 2nd Sunday of March to the 1st Sunday of November, else CST (-6). */
function centralOffsetHours(date: Date) {
  const y = date.getFullYear();
  const firstSunday = (month: number) => 1 + ((7 - new Date(y, month, 1).getDay()) % 7);
  const dstStart = new Date(y, 2, firstSunday(2) + 7); // 2nd Sunday of March
  const dstEnd = new Date(y, 10, firstSunday(10));     // 1st Sunday of November
  const dst = date >= dstStart && date < dstEnd;
  return dst ? 5 : 6;
}

function utcStamp(date: string, time: string) {
  const d = parseDate(date);
  const [h, m] = time.split(":").map(Number);
  const utc = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), h + centralOffsetHours(d), m));
  return utc.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

function escapeIcs(text: string) {
  return text.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");
}

function vevent(e: SeriesEvent) {
  const lines = ["BEGIN:VEVENT", `UID:${e.id}-${e.date}@parentguidance.org`, `DTSTAMP:${utcStamp(e.date, "12:00")}`];
  if (e.start && e.end) {
    lines.push(`DTSTART:${utcStamp(e.date, e.start)}`, `DTEND:${utcStamp(e.date, e.end)}`);
  } else {
    const next = parseDate(e.date);
    next.setDate(next.getDate() + 1);
    lines.push(`DTSTART;VALUE=DATE:${e.date.replace(/-/g, "")}`, `DTEND;VALUE=DATE:${toKey(next).replace(/-/g, "")}`);
  }
  lines.push(`SUMMARY:${escapeIcs(e.title)}`, `DESCRIPTION:${escapeIcs(e.description)}`, "LOCATION:Online", "END:VEVENT");
  return lines;
}

export function buildIcs(events: SeriesEvent[]) {
  return ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Parent Guidance//Mental Health Series//EN", "CALSCALE:GREGORIAN", ...events.flatMap(vevent), "END:VCALENDAR"].join("\r\n");
}

export function downloadIcs(fileName: string, events: SeriesEvent[]) {
  const blob = new Blob([buildIcs(events)], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
