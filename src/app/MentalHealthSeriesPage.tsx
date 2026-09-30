import { useState, type MouseEvent } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { scrollBehavior } from "./utils/motion";
import svgPaths from "@/imports/MentalHealthPage/svg-8lpz1a5k3k";
import imgImage13 from "@/imports/MentalHealthPage/f075cf3868341d1ced5b7049edc0996923832898.png";
import imgRectangle79 from "@/imports/HomePagePgV2/ece298d0ec2c16f10310d45724b276a6035cb503.png";
import imgRectangle80 from "@/imports/HomePagePgV2/fb9567d2a70815a5c0307df9118cb49c401b72a3.png";
import imgRectangle81 from "@/imports/HomePagePgV2/40e0ae4f954f871b7087c4354f1c8d0bf5926225.png";

/* ─── Static data ─── */
const US_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
  "Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa",
  "Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan",
  "Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire",
  "New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio",
  "Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota",
  "Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia",
  "Wisconsin","Wyoming",
];
const DISTRICTS: Record<string, string[]> = {
  Utah: ["Alpine School District","Canyons School District","Davis School District","Granite School District","Jordan School District","Murray City School District","Nebo School District","Provo City School District","Salt Lake City School District","Weber School District"],
  California: ["Los Angeles Unified","San Diego Unified","San Francisco Unified","Oakland Unified","Fresno Unified","Sacramento City Unified"],
  "New York": ["New York City DOE","Buffalo City Schools","Rochester City Schools","Yonkers City Schools","Syracuse City Schools"],
  Texas: ["Houston ISD","Dallas ISD","Austin ISD","Fort Worth ISD","San Antonio ISD"],
};
const DEFAULT_DISTRICTS = ["Central School District","North School District","South School District","East School District","West School District"];

type ResourceType = "Video" | "Article" | "Guide" | "Worksheet" | "Tool";
type ResourceCategory = "All" | "Anxiety" | "Depression" | "Parenting" | "Teen Health" | "Self-Care" | "Crisis";

const RESOURCE_LIBRARY: {
  title: string; desc: string; type: ResourceType; category: ResourceCategory; duration: string; isNew?: boolean; slug?: string;
}[] = [
  { title: "ABC's of Substance Use & Vaping",                         desc: "Recognize and address risk and health impact in teens",                              type: "Video",     category: "Parenting",   duration: "8 min" },
  { title: "Body Positivity: Nurturing Self-Image",                   desc: "Promote body positivity with strategies for self-acceptance",                       type: "Article",   category: "Anxiety",     duration: "5 min read" },
  { title: "Building Your Child's Confidence",                        desc: "Foster a healthy identity in your child with professional insights",                 type: "Video",     category: "Self-Care",   duration: "6-part series", isNew: true, slug: "building-your-childs-confidence" },
  { title: "Bullying - Stop the Cycle",                               desc: "Identify and address bullying with expert tips and strategies",                      type: "Guide",     category: "Depression",  duration: "7 min read" },
  { title: "Compassionate Parenting & Self-Compassion",               desc: "Practical tools for reducing day-to-day stress as a family.",                       type: "Worksheet", category: "Parenting",   duration: "Printable" },
  { title: "De-escalating Cycles of Conflicts",                       desc: "Resolve conflicts using internal Family Systems",                                    type: "Article",   category: "Anxiety",     duration: "6 min read" },
  { title: "Depression: You're Not Alone",                            desc: "Understand the complexity, symptoms and early intervention",                         type: "Guide",     category: "Parenting",   duration: "10 min read" },
  { title: "Effects of Screen Time & Children's Mental Health",       desc: "Explore the impact on kids' mental health and set limits",                          type: "Article",   category: "Parenting",   duration: "8 min read" },
  { title: "Emotional Regulation - Part 1: Recognizing What's Wrong", desc: "Guide your child in mastering emotional regulation and balance",                    type: "Video",     category: "Teen Health", duration: "12 min", isNew: true },
];

const CATEGORIES: ResourceCategory[] = ["All","Anxiety","Depression","Parenting","Teen Health","Self-Care","Crisis"];

/* ─── Type badge SVG icons (from Figma paths) ─── */
function TypeBadge({ type }: { type: ResourceType }) {
  if (type === "Video") return (
    <div className="bg-[#e8f1f1] relative rounded-[9999px] shrink-0 flex gap-[6px] items-center px-[10px] py-[4px]">
      <div className="relative shrink-0 size-[16px]">
        <svg className="block size-full" fill="none" viewBox="0 0 13.3333 13.3333">
          <path d={svgPaths.p308c8130} fill="#59797D" />
        </svg>
      </div>
      <span className="font-['Poppins',sans-serif] font-semibold leading-[15px] text-[#59797d] text-xs whitespace-nowrap">Video</span>
    </div>
  );
  if (type === "Article") return (
    <div className="bg-[#eef0f3] relative rounded-[9999px] shrink-0 flex gap-[6px] items-center px-[10px] py-[4px]">
      <div className="relative shrink-0 size-[16px]">
        <svg className="block size-full" fill="none" viewBox="0 0 12 12">
          <path d={svgPaths.p26f92c80} fill="#1c3243" />
          <path d={svgPaths.p4aa5c80} fill="#1c3243" />
        </svg>
      </div>
      <span className="font-['Poppins',sans-serif] font-semibold leading-[15px] text-[#1c3243] text-xs whitespace-nowrap">Article</span>
    </div>
  );
  if (type === "Guide") return (
    <div className="bg-[#f0edf7] relative rounded-[9999px] shrink-0 flex gap-[6px] items-center px-[10px] py-[4px]">
      <div className="relative shrink-0 size-[16px]">
        <svg className="block size-full" fill="none" viewBox="0 0 12 13.3333">
          <path d={svgPaths.p2a787c0} fill="#6B5C8D" />
        </svg>
      </div>
      <span className="font-['Poppins',sans-serif] font-semibold leading-[15px] text-[#6b5c8d] text-xs whitespace-nowrap">Guide</span>
    </div>
  );
  if (type === "Worksheet") return (
    <div className="bg-[#f7f0e8] relative rounded-[9999px] shrink-0 flex gap-[6px] items-center px-[10px] py-[4px]">
      <div className="relative shrink-0 size-[16px]">
        <svg className="block size-full" fill="none" viewBox="0 0 12.0017 12">
          <path d={svgPaths.p1ad4ca80} fill="#8D6B3A" />
        </svg>
      </div>
      <span className="font-['Poppins',sans-serif] font-semibold leading-[15px] text-[#8d6b3a] text-xs whitespace-nowrap">Worksheet</span>
    </div>
  );
  return (
    <div className="bg-[#fdecea] relative rounded-[9999px] shrink-0 flex gap-[6px] items-center px-[10px] py-[4px]">
      <span className="font-['Poppins',sans-serif] font-semibold leading-[15px] text-[#c0392b] text-xs whitespace-nowrap">Tool</span>
    </div>
  );
}

const MotionLink = motion.create(Link);

/* ─── Resource card (faithful to Figma Link component) ─── */
function ResourceCard({ resource, index }: { resource: typeof RESOURCE_LIBRARY[0]; index: number }) {
  return (
    <MotionLink
      to={resource.slug ? `/mental-health-series/${resource.slug}` : "#"}
      className="bg-white flex flex-col gap-[12px] items-start p-[20px] rounded-[16px] drop-shadow-[0px_2px_5px_rgba(0,0,0,0.05)] no-underline group"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: (index % 9) * 0.04 }}
      whileHover={{ y: -3, boxShadow: "0 6px 24px rgba(89,121,125,0.13)" }}
    >
      {/* Type + New badge row */}
      <div className="flex items-center justify-between w-full">
        <TypeBadge type={resource.type} />
        {resource.isNew && (
          <div className="bg-[#59797d] rounded-[9999px] px-[8px] py-[2px] inline-flex items-center">
            <span className="font-['Poppins',sans-serif] font-semibold leading-[15px] text-white text-xs whitespace-nowrap">New</span>
          </div>
        )}
      </div>

      {/* Title */}
      <div className="w-full">
        <p className="font-['Poppins',sans-serif] font-semibold leading-[19.25px] text-[#1c3243] text-[14px] group-hover:text-[#59797d] transition-colors">
          {resource.title}
        </p>
      </div>

      {/* Description */}
      <div className="flex-1 min-h-px w-full">
        <p className="font-['Poppins',sans-serif] leading-[19.5px] text-[#435766] text-[12px]">
          {resource.desc}
        </p>
      </div>

      {/* Footer */}
      <div className="w-full relative pt-[5px]">
        <div aria-hidden className="absolute border-[#f5f5f5] border-solid border-t inset-0 pointer-events-none" />
        <div className="flex items-center justify-between">
          <div className="bg-[#f9f4f1] rounded-[9999px] px-[8px] py-[2px] inline-flex items-center">
            <span className="font-['Poppins',sans-serif] font-medium leading-[15px] text-[#406064] text-xs whitespace-nowrap">{resource.category}</span>
          </div>
          <div className="flex gap-[8px] items-center">
            <span className="font-['Poppins',sans-serif] leading-[15px] text-[#435766] text-xs whitespace-nowrap">{resource.duration}</span>
            <svg className="size-[14px] group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 14 14">
              <path d={svgPaths.p7f8ed00} stroke="#C0CDD4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            </svg>
          </div>
        </div>
      </div>
    </MotionLink>
  );
}

/* ─── Resource Library ─── */
function ResourceLibrary() {
  const [activeCategory, setActiveCategory] = useState<ResourceCategory>("All");
  const [libSearch, setLibSearch] = useState("");
  const [expanded, setExpanded] = useState(false);

  const filtered = RESOURCE_LIBRARY.filter(r => {
    const matchCat = activeCategory === "All" || r.category === activeCategory;
    const matchSearch = !libSearch || r.title.toLowerCase().includes(libSearch.toLowerCase()) || r.desc.toLowerCase().includes(libSearch.toLowerCase());
    return matchCat && matchSearch;
  });

  const visible = expanded ? filtered : filtered.slice(0, 9);

  return (
    <div className="relative shrink-0 w-full flex flex-col items-start">
      {/* Header */}
      <div className="flex items-start justify-between w-full">
        <div className="flex gap-[8px] items-center">
          <div className="bg-[#90b3b6] h-[20px] rounded-[9999px] w-[4px]" />
          <p className="font-['Poppins',sans-serif] font-semibold leading-[28px] text-[#1c3243] text-[18px] whitespace-nowrap">Resource Library</p>
          <div className="bg-[#e8f1f1] rounded-[9999px] px-[8px] py-[2px] inline-flex items-center">
            <p className="font-['Poppins',sans-serif] font-medium leading-[16px] text-[#406064] text-[12px] whitespace-nowrap">{RESOURCE_LIBRARY.length} resources</p>
          </div>
        </div>

        {/* Filter search */}
        <div className="h-[34px] relative w-[208px]">
          <div className="absolute left-[12px] size-[14px] top-[10px]">
            <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 14 14">
              <path d={svgPaths.p2725de00} stroke="#acbcbe" strokeWidth="1.16667" />
              <path d="M9.625 9.625L12.25 12.25" stroke="#acbcbe" strokeLinecap="round" strokeWidth="1.16667" />
            </svg>
          </div>
          <input
            value={libSearch}
            onChange={e => setLibSearch(e.target.value)}
            placeholder="Filter resources…"
            className="absolute bg-white h-[34px] left-0 rounded-[14px] top-0 w-[208px] border border-[#e8ebed] pl-[37px] pr-[17px] py-[9px] font-['Poppins',sans-serif] text-[12px] text-[#1c3243] placeholder:text-[#59797d] outline-none focus:border-[#90b3b6] transition-colors"
          />
        </div>
      </div>

      {/* Category tabs */}
      <div className="flex gap-[6px] items-start pt-[20px] flex-wrap">
        {CATEGORIES.map(cat => (
          <motion.button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className="rounded-[9999px] px-[16px] py-[8px] font-['Poppins',sans-serif] font-medium leading-[16px] text-[12px] text-center whitespace-nowrap"
            style={{
              background: activeCategory === cat ? "#1c3243" : "#fff",
              color: activeCategory === cat ? "#fff" : "#435766",
              boxShadow: activeCategory === cat ? "none" : "0px 1px 2px rgba(0,0,0,0.07)",
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Card grid */}
      <div className="pt-[24px] w-full">
        <div className="grid grid-cols-3 gap-x-[16px] gap-y-[16px] w-full">
          {visible.map((r, i) => (
            <ResourceCard key={r.title} resource={r} index={i} />
          ))}
          {filtered.length === 0 && (
            <div className="col-span-3 text-center py-14 font-['Poppins',sans-serif] text-[#435766] text-sm">
              No resources match your filters.
            </div>
          )}
        </div>
      </div>

      {/* Show all button */}
      {filtered.length > 9 && (
        <div className="flex items-start justify-center pt-[24px] w-full">
          <motion.button
            onClick={() => setExpanded(v => !v)}
            className="bg-[#90b3b6] border border-[#90b3b6] rounded-[14px] px-[33px] py-[13px] font-['Poppins',sans-serif] font-semibold leading-[20px] text-[14px] text-center text-white whitespace-nowrap"
            whileHover={{ scale: 1.03, backgroundColor: "#59797d" }}
            whileTap={{ scale: 0.97 }}
          >
            {expanded ? "Show fewer resources" : `Show all ${filtered.length} resources`}
          </motion.button>
        </div>
      )}
    </div>
  );
}

/* ─── Calendar ─── */
type CalendarView = "day" | "week" | "month";
const EVENTS: { date: string; day: number; month: number; year: number; title: string; time: string; desc: string; color: "teal" | "navy" }[] = [
  { date: "Thu, July 10", day: 10, month: 6, year: 2025, title: "Understanding Anxiety in Children", time: "4:00 PM – 5:00 PM", desc: "Live Q&A with a licensed child therapist. Bring your questions.", color: "teal" },
  { date: "Tue, July 15", day: 15, month: 6, year: 2025, title: "Mindfulness & Stress Tools for Parents", time: "12:00 PM – 1:00 PM", desc: "Interactive workshop on breathing and grounding techniques you can share with your kids.", color: "navy" },
  { date: "Thu, July 17", day: 17, month: 6, year: 2025, title: "Emotional Resilience – Module 2 Launch", time: "All day", desc: "New module now available in your dashboard.", color: "teal" },
  { date: "Wed, July 23", day: 23, month: 6, year: 2025, title: "Parent Support Circle", time: "6:00 PM – 7:00 PM", desc: "Facilitated group session for parents navigating school-year challenges.", color: "navy" },
  { date: "Fri, August 1", day: 1, month: 7, year: 2025, title: "Back-to-School Mental Health Prep", time: "2:00 PM – 3:00 PM", desc: "Strategies to ease school transitions and manage first-week anxiety.", color: "teal" },
  { date: "Tue, August 12", day: 12, month: 7, year: 2025, title: "Teen Mental Health – Open Forum", time: "5:00 PM – 6:30 PM", desc: "For parents of middle and high schoolers. Topics include social pressure, identity, and digital wellbeing.", color: "navy" },
  { date: "Thu, August 21", day: 21, month: 7, year: 2025, title: "Self-Care for Caregivers", time: "12:00 PM – 1:00 PM", desc: "You can't pour from an empty cup. A session dedicated to parent wellbeing.", color: "teal" },
  { date: "Mon, August 25", day: 25, month: 7, year: 2025, title: "Crisis Resources Workshop", time: "3:00 PM – 4:00 PM", desc: "Know the signs, know the steps. A practical guide to crisis preparedness for families.", color: "navy" },
];

const EVENTS_PAGE_SIZE = 3;

function getDaysInMonth(year: number, month: number) { return new Date(year, month + 1, 0).getDate(); }
function getFirstDayOfMonth(year: number, month: number) { return new Date(year, month, 1).getDay(); }

type EventPopupState = { event: typeof EVENTS[0]; anchorRect: DOMRect } | null;

function EventPopup({ state, onClose }: { state: EventPopupState; onClose: () => void }) {
  if (!state) return null;
  const { event: ev, anchorRect } = state;

  const isTeal = ev.color === "teal";
  const accent = isTeal ? "#59797d" : "#1c3243";
  const accentLight = isTeal ? "#e8f1f1" : "#eef0f3";

  return (
    <>
      {/* Backdrop to close */}
      <div className="fixed inset-0 z-40" onClick={onClose} />

      <motion.div
        className="fixed z-50 w-[280px] rounded-2xl overflow-hidden"
        style={{
          top: anchorRect.bottom + 8,
          left: Math.min(anchorRect.left, window.innerWidth - 296),
          boxShadow: "0 12px 40px rgba(0,0,0,0.15), 0 2px 8px rgba(0,0,0,0.08)",
        }}
        initial={{ opacity: 0, y: -6, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -4, scale: 0.97 }}
        transition={{ duration: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Colour header strip */}
        <div className="px-4 pt-4 pb-3" style={{ background: accent }}>
          <div className="flex items-start justify-between gap-2">
            <p className="font-['Poppins',sans-serif] font-semibold text-white text-sm leading-snug">{ev.title}</p>
            <button
              onClick={onClose}
              className="shrink-0 text-white/70 hover:text-white transition-colors mt-0.5"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="bg-white px-4 py-4 flex flex-col gap-3">
          {/* Date + time */}
          <div className="flex items-center gap-2">
            <div className="shrink-0 rounded-lg px-2.5 py-1.5" style={{ background: accentLight }}>
              <span className="font-['Poppins',sans-serif] font-bold text-lg leading-none" style={{ color: accent }}>{ev.day}</span>
            </div>
            <div>
              <p className="font-['Poppins',sans-serif] text-xs font-semibold text-[#1c3243]">{ev.date}</p>
              <p className="font-['Poppins',sans-serif] text-xs text-[#406064] font-medium">{ev.time}</p>
            </div>
          </div>

          {/* Description */}
          <p className="font-['Poppins',sans-serif] text-xs text-[#435766] leading-relaxed">{ev.desc}</p>

          {/* Register link */}
          <motion.a
            href="#"
            className="flex items-center justify-center gap-2 w-full rounded-xl py-2.5 font-['Poppins',sans-serif] font-semibold text-xs text-white no-underline"
            style={{ background: accent }}
            whileHover={{ scale: 1.03, opacity: 0.9 }}
            whileTap={{ scale: 0.97 }}
          >
            Register for this event
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>

          {/* Copy link */}
          <button className="font-['Poppins',sans-serif] text-xs text-center w-full" style={{ color: accent }}>
            Copy event link
          </button>
        </div>
      </motion.div>
    </>
  );
}

const MONTH_NAMES = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const DAY_NAMES_SHORT = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const DAY_NAMES_FULL = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function eventsForDate(year: number, month: number, day: number) {
  return EVENTS.filter(e => e.year === year && e.month === month && e.day === day);
}

function getWeekStart(date: Date) {
  const d = new Date(date);
  d.setDate(d.getDate() - d.getDay());
  return d;
}

function EventPill({ ev, popup, onEventClick, compact = false }: {
  ev: typeof EVENTS[0]; popup: EventPopupState; onEventClick: (ev: typeof EVENTS[0], e: MouseEvent) => void; compact?: boolean;
}) {
  const active = popup?.event === ev;
  return (
    <motion.button
      onClick={e => onEventClick(ev, e)}
      className={`rounded-lg font-['Poppins',sans-serif] font-medium text-white text-left w-full cursor-pointer truncate ${compact ? "text-xs px-1.5 py-0.5 leading-[14px]" : "text-xs px-2 py-1"}`}
      style={{ background: active ? (ev.color === "teal" ? "#59797d" : "#1a2838") : (ev.color === "teal" ? "#90b3b6" : "#1c3243") }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      title={ev.title}
    >
      {compact ? ev.title : <><span className="opacity-70 mr-1">{ev.time.split(" ")[0]}</span>{ev.title}</>}
    </motion.button>
  );
}

function MonthView({ year, month, popup, onEventClick }: { year: number; month: number; popup: EventPopupState; onEventClick: (ev: typeof EVENTS[0], e: MouseEvent) => void }) {
  const days = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  const cells: (number | null)[] = Array.from({ length: firstDay }, () => null).concat(Array.from({ length: days }, (_, i) => i + 1));
  while (cells.length % 7 !== 0) cells.push(null);
  const today = new Date();

  return (
    <div className="bg-white rounded-2xl overflow-hidden" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
      <div className="grid grid-cols-7 border-b border-[#f0f0f0]">
        {DAY_NAMES_SHORT.map(d => (
          <div key={d} className="text-center py-2.5 font-['Poppins',sans-serif] text-xs font-semibold text-[#435766] uppercase tracking-[0.6px]">{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7">
        {cells.map((day, idx) => {
          const evs = day ? eventsForDate(year, month, day) : [];
          const isToday = day !== null && today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;
          return (
            <div key={idx} className={`min-h-[80px] p-1.5 border-b border-r border-[#f5f5f5] flex flex-col gap-1 transition-colors ${day ? "hover:bg-[#f9f4f1] cursor-default" : "bg-[#fafafa]"}`}>
              {day && (
                <>
                  <span className={`font-['Poppins',sans-serif] text-xs font-medium w-6 h-6 flex items-center justify-center rounded-full ${isToday ? "bg-[#59797d] text-white" : "text-[#435766]"}`}>{day}</span>
                  {evs.map((ev, i) => <EventPill key={i} ev={ev} popup={popup} onEventClick={onEventClick} compact />)}
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function WeekView({ weekStart, popup, onEventClick }: { weekStart: Date; popup: EventPopupState; onEventClick: (ev: typeof EVENTS[0], e: MouseEvent) => void }) {
  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(weekStart);
    d.setDate(d.getDate() + i);
    return d;
  });
  const today = new Date();

  return (
    <div className="bg-white rounded-2xl overflow-hidden" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
      <div className="grid grid-cols-7 border-b border-[#f0f0f0]">
        {days.map((d, i) => {
          const isToday = d.toDateString() === today.toDateString();
          return (
            <div key={i} className="flex flex-col items-center py-3 gap-1">
              <span className="font-['Poppins',sans-serif] text-[11px] font-semibold uppercase tracking-[0.6px] text-[#435766]">{DAY_NAMES_SHORT[d.getDay()]}</span>
              <span className={`w-7 h-7 flex items-center justify-center rounded-full font-['Poppins',sans-serif] font-semibold text-sm ${isToday ? "bg-[#59797d] text-white" : "text-[#1c3243]"}`}>{d.getDate()}</span>
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-7 min-h-[200px]">
        {days.map((d, i) => {
          const evs = eventsForDate(d.getFullYear(), d.getMonth(), d.getDate());
          return (
            <div key={i} className="border-r border-[#f5f5f5] p-2 flex flex-col gap-1.5">
              {evs.map((ev, j) => <EventPill key={j} ev={ev} popup={popup} onEventClick={onEventClick} />)}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function DayView({ date, popup, onEventClick }: { date: Date; popup: EventPopupState; onEventClick: (ev: typeof EVENTS[0], e: MouseEvent) => void }) {
  const evs = eventsForDate(date.getFullYear(), date.getMonth(), date.getDate());
  const dayName = DAY_NAMES_FULL[date.getDay()];
  const monthName = MONTH_NAMES[date.getMonth()];

  return (
    <div className="bg-white rounded-2xl overflow-hidden" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
      <div className="border-b border-[#f0f0f0] px-5 py-4">
        <p className="font-['Poppins',sans-serif] font-semibold text-[#1c3243] text-sm">{dayName}</p>
        <p className="font-['Poppins',sans-serif] text-xs text-[#90b3b6] mt-0.5">{monthName} {date.getDate()}, {date.getFullYear()}</p>
      </div>
      <div className="p-5 flex flex-col gap-3 min-h-[200px]">
        {evs.length === 0 && (
          <p className="font-['Poppins',sans-serif] text-sm text-[#435766] text-center mt-8">No events scheduled for this day.</p>
        )}
        {evs.map((ev, i) => (
          <div key={i} className="flex gap-4 items-start">
            <div className="shrink-0 w-16 text-right">
              <span className="font-['Poppins',sans-serif] text-xs text-[#406064] font-medium leading-tight">{ev.time.split("–")[0].trim()}</span>
            </div>
            <EventPill ev={ev} popup={popup} onEventClick={onEventClick} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Calendar() {
  const [view, setView] = useState<CalendarView>("month");
  const [currentDate, setCurrentDate] = useState(new Date(2025, 6, 1));
  const [popup, setPopup] = useState<EventPopupState>(null);

  function handleEventClick(ev: typeof EVENTS[0], e: MouseEvent) {
    e.stopPropagation();
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setPopup(prev => (prev?.event === ev ? null : { event: ev, anchorRect: rect }));
  }

  function goNext() {
    const d = new Date(currentDate);
    if (view === "month") d.setMonth(d.getMonth() + 1);
    else if (view === "week") d.setDate(d.getDate() + 7);
    else d.setDate(d.getDate() + 1);
    setCurrentDate(d);
  }

  function goPrev() {
    const d = new Date(currentDate);
    if (view === "month") d.setMonth(d.getMonth() - 1);
    else if (view === "week") d.setDate(d.getDate() - 7);
    else d.setDate(d.getDate() - 1);
    setCurrentDate(d);
  }

  function getHeaderLabel() {
    if (view === "month") return `${MONTH_NAMES[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
    if (view === "week") {
      const ws = getWeekStart(currentDate);
      const we = new Date(ws); we.setDate(we.getDate() + 6);
      if (ws.getMonth() === we.getMonth()) return `${MONTH_NAMES[ws.getMonth()]} ${ws.getDate()}–${we.getDate()}, ${ws.getFullYear()}`;
      return `${MONTH_NAMES[ws.getMonth()]} ${ws.getDate()} – ${MONTH_NAMES[we.getMonth()]} ${we.getDate()}, ${we.getFullYear()}`;
    }
    return `${DAY_NAMES_FULL[currentDate.getDay()]}, ${MONTH_NAMES[currentDate.getMonth()]} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;
  }

  const views: CalendarView[] = ["day", "week", "month"];

  return (
    <div className="flex flex-col gap-3 relative">
      {/* Toolbar */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        {/* Prev / label / next */}
        <div className="flex items-center gap-3">
          <button
            onClick={goPrev}
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#e0e0e0] text-[#1c3243] hover:bg-[#f9f4f1] transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <span className="font-['Poppins',sans-serif] font-semibold text-[#1c3243] text-sm min-w-[180px] text-center">{getHeaderLabel()}</span>
          <button
            onClick={goNext}
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#e0e0e0] text-[#1c3243] hover:bg-[#f9f4f1] transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* View switcher */}
        <div className="flex items-center bg-[#f0f0f0] rounded-lg p-0.5 gap-0.5">
          {views.map(v => (
            <button
              key={v}
              onClick={() => setView(v)}
              className="font-['Poppins',sans-serif] text-xs font-medium px-3 py-1.5 rounded-md capitalize transition-all"
              style={{
                background: view === v ? "#fff" : "transparent",
                color: view === v ? "#1c3243" : "#435766",
                boxShadow: view === v ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
              }}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* View content */}
      <motion.div key={`${view}-${currentDate.toISOString()}`} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
        {view === "month" && <MonthView year={currentDate.getFullYear()} month={currentDate.getMonth()} popup={popup} onEventClick={handleEventClick} />}
        {view === "week" && <WeekView weekStart={getWeekStart(currentDate)} popup={popup} onEventClick={handleEventClick} />}
        {view === "day" && <DayView date={currentDate} popup={popup} onEventClick={handleEventClick} />}
      </motion.div>

      <EventPopup state={popup} onClose={() => setPopup(null)} />
    </div>
  );
}

/* ─── Content page ─── */
function ContentPage({ state, district, onReset }: { state: string; district: string; onReset: () => void }) {
  const [search, setSearch] = useState("");
  const [eventsVisible, setEventsVisible] = useState(EVENTS_PAGE_SIZE);

  const filteredEvents = search
    ? EVENTS.filter(e => e.title.toLowerCase().includes(search.toLowerCase()) || e.desc.toLowerCase().includes(search.toLowerCase()))
    : EVENTS;

  const shownEvents = filteredEvents.slice(0, eventsVisible);

  return (
    <motion.div
      className="bg-[#f9f4f1] min-h-[calc(100vh-72px)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* ── Hero: matches Figma ContentPage + ContainerMargin ── */}
      <div className="bg-[#f9f4f1] relative shrink-0 w-full flex flex-col items-center justify-end pt-24 pb-14 px-14">
        <div className="flex flex-col items-center gap-[24px] max-w-[825px] w-full">

          {/* Heading + location */}
          <div className="w-full text-center">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <p className="font-['Poppins',sans-serif] font-bold leading-[41.25px] text-[#1c3243] text-[30px] text-center">
                Welcome to the{" "}
                <em className="font-['Poppins',sans-serif] font-bold italic text-[#59797d]">Mental Health Series</em>
              </p>
              <p className="font-['Poppins',sans-serif] leading-[20px] text-[#1c3243] text-[14px] text-center mt-2">
                {district} · {state}
              </p>
            </motion.div>
          </div>

          {/* Search bar — matches Figma SearchBar */}
          <motion.div
            className="bg-white h-[60px] rounded-[24px] shrink-0 w-full max-w-[659px] flex items-center px-[24px] gap-[10px]"
            style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.06)" }}
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.45 }}
          >
            <svg className="shrink-0 size-[16px]" fill="none" viewBox="0 0 16.3333 16.3333">
              <path d={svgPaths.pb1c300} stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M14.8333 14.8333L13.5 13.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search resources and events…"
              className="flex-1 font-['Poppins',sans-serif] text-[14px] text-[#333] placeholder:text-[#59797d] outline-none bg-transparent"
            />
            <button
              className="bg-[#90b3b6] rounded-[8px] px-[16px] py-[6px] font-['Poppins',sans-serif] font-medium text-[14px] text-[#fff] whitespace-nowrap hover:bg-[#59797d] transition-colors"
            >
              Search
            </button>
          </motion.div>

          {/* Hero image — matches Figma "image 13" */}
          <motion.div
            className="rounded-[24px] overflow-hidden shrink-0 w-full max-w-[659px]"
            style={{ aspectRatio: "659.5 / 416.47" }}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.55 }}
          >
            <img alt="Mental Health Series" className="w-full h-full object-cover" src={imgImage13} />
          </motion.div>
        </div>
      </div>

      {/* ── Body sections ── */}
      <div className="max-w-[912px] mx-auto px-14 py-12 flex flex-col gap-14">

        {/* Resource Library */}
        <ResourceLibrary />

        {/* Monthly Calendar */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div className="flex gap-[8px] items-center">
              <div className="bg-[#90b3b6] h-[20px] rounded-[9999px] w-[4px]" />
              <p className="font-['Poppins',sans-serif] font-semibold leading-[28px] text-[#1c3243] text-[18px] whitespace-nowrap">Monthly Calendar</p>
            </div>
            <MotionLink
              to="/mental-health-series/events"
              className="relative rounded-[14px] shrink-0 flex gap-[8px] items-center px-[21px] py-[9px] no-underline"
              style={{ border: "1px solid #90b3b6" }}
              whileHover={{ scale: 1.03, backgroundColor: "#59797d", color: "#fff" }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="font-['Poppins',sans-serif] font-semibold leading-[16px] text-[#59797d] text-[12px] whitespace-nowrap group-hover:text-white">View all events</span>
              <svg className="relative shrink-0 size-[13px]" fill="none" viewBox="0 0 13 13">
                <path d={svgPaths.p2d0d8080} stroke="#59797D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
              </svg>
            </MotionLink>
          </div>
          <Calendar />
        </section>

        {/* Upcoming Events */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div className="flex gap-[8px] items-center">
              <div className="bg-[#90b3b6] h-[20px] rounded-[9999px] w-[4px]" />
              <p className="font-['Poppins',sans-serif] font-semibold leading-[28px] text-[#1c3243] text-[18px] whitespace-nowrap">Upcoming Events</p>
              <div className="bg-[#e8f1f1] rounded-[9999px] px-[8px] py-[2px] inline-flex items-center">
                <p className="font-['Poppins',sans-serif] font-medium leading-[16px] text-[#406064] text-[12px] whitespace-nowrap">{filteredEvents.length} total</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {shownEvents.map((ev, i) => (
              <motion.div
                key={ev.title}
                className="bg-white rounded-2xl px-6 py-5 flex items-start gap-5 cursor-pointer group"
                style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ boxShadow: "0 6px 24px rgba(89,121,125,0.14)", y: -2 }}
              >
                <div className="shrink-0 rounded-xl px-4 py-3 flex flex-col items-center justify-center min-w-[60px]"
                  style={{ background: ev.color === "teal" ? "#e8f1f1" : "#eef0f3" }}>
                  <span className="font-['Poppins',sans-serif] font-bold text-xl leading-none" style={{ color: ev.color === "teal" ? "#59797d" : "#1c3243" }}>{ev.day}</span>
                  <span className="font-['Poppins',sans-serif] text-[11px] font-semibold uppercase tracking-wide mt-0.5" style={{ color: ev.color === "teal" ? "#90b3b6" : "#6b7c8d" }}>
                    {ev.date.split(",")[1]?.trim().split(" ")[0]}
                  </span>
                </div>
                <div className="flex flex-col gap-1 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-['Poppins',sans-serif] font-semibold text-[#1c3243] text-sm group-hover:text-[#59797d] transition-colors">{ev.title}</h3>
                    <span className="font-['Poppins',sans-serif] text-xs font-semibold px-2 py-0.5 rounded-full text-white"
                      style={{ background: ev.color === "teal" ? "#90b3b6" : "#1c3243" }}>
                      {ev.color === "teal" ? "Session" : "Workshop"}
                    </span>
                  </div>
                  <p className="font-['Poppins',sans-serif] text-xs text-[#406064] font-medium">{ev.time}</p>
                  <p className="font-['Poppins',sans-serif] text-sm text-[#435766] leading-relaxed mt-0.5">{ev.desc}</p>
                </div>
                <motion.button
                  className="shrink-0 self-center font-['Poppins',sans-serif] text-xs font-semibold px-4 py-2 rounded-lg border transition-colors"
                  style={{ borderColor: ev.color === "teal" ? "#90b3b6" : "#1c3243", color: ev.color === "teal" ? "#59797d" : "#1c3243" }}
                  whileHover={{ scale: 1.04, backgroundColor: ev.color === "teal" ? "#90b3b6" : "#1c3243", color: "#fff" }}
                  whileTap={{ scale: 0.97 }}
                >
                  Register
                </motion.button>
              </motion.div>
            ))}

            {filteredEvents.length === 0 && (
              <div className="text-center py-16 font-['Poppins',sans-serif] text-[#435766] text-sm">No events match your search.</div>
            )}
          </div>

          {eventsVisible < filteredEvents.length && (
            <div className="flex justify-center mt-6">
              <motion.button
                onClick={() => setEventsVisible(v => v + EVENTS_PAGE_SIZE)}
                className="font-['Poppins',sans-serif] text-sm font-semibold text-[#59797d] border border-[#90b3b6] px-8 py-3 rounded-xl flex items-center gap-2 hover:bg-[#59797d] hover:text-white transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Load more events
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.button>
            </div>
          )}
        </section>
      </div>
    </motion.div>
  );
}

/* ─── Form page ─── */
function FormPage({ onSubmit }: { onSubmit: (state: string, district: string) => void }) {
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const districts = selectedState ? (DISTRICTS[selectedState] ?? DEFAULT_DISTRICTS) : [];

  return (
    <div className="bg-[#f9f4f1] min-h-[calc(100vh-72px)] flex flex-col">
      <div className="flex flex-1 relative overflow-hidden">
        {/* Left */}
        <div className="flex flex-col justify-center px-20 py-20 w-[52%] z-10 relative">
          <motion.div
            className="flex flex-col gap-8 max-w-md"
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.span
              className="font-['Poppins',sans-serif] font-semibold text-[#406064] text-sm uppercase tracking-widest"
              initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
            >
              Mental Health Series
            </motion.span>
            <motion.h1
              className="font-['Poppins',sans-serif] font-bold text-[#1c3243] text-4xl leading-tight"
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.55 }}
            >
              What{" "}
              <em className="font-['Poppins',sans-serif] font-bold text-[#59797d]" style={{ fontStyle: "italic" }}>state</em>{" "}
              does your child attend school in?
            </motion.h1>
            <motion.p
              className="font-['Poppins',sans-serif] text-[#435766] text-base leading-relaxed"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}
            >
              {"Don't see your state? "}
              <a href="#" className="text-[#406064] underline hover:text-[#1c3243] transition-colors">Get in touch with our team.</a>
            </motion.p>
            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.55 }}
            >
              <div className="relative">
                <select
                  value={selectedState}
                  onChange={e => { setSelectedState(e.target.value); setSelectedDistrict(""); }}
                  className="w-full appearance-none font-['Poppins',sans-serif] text-sm px-5 py-4 rounded-2xl outline-none cursor-pointer transition-all duration-200"
                  style={{ background: selectedState ? "#59797d" : "#90b3b6", color: selectedState ? "#fff" : "#1c3243", boxShadow: "0 4px 16px rgba(144,179,182,0.25)" }}
                >
                  <option value="" disabled style={{ color: "#1c3243", background: "#f9f4f1" }}>Select your state</option>
                  {US_STATES.map(s => <option key={s} value={s} style={{ color: "#1c3243", background: "#f9f4f1" }}>{s}</option>)}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke={selectedState ? "#fff" : "#1c3243"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
              </div>
              <div className="relative">
                <select
                  value={selectedDistrict}
                  onChange={e => setSelectedDistrict(e.target.value)}
                  disabled={!selectedState}
                  className="w-full appearance-none font-['Poppins',sans-serif] text-sm px-5 py-4 rounded-2xl outline-none transition-all duration-200 cursor-pointer disabled:cursor-not-allowed"
                  style={{ background: selectedDistrict ? "#f0f6f6" : "#fff", color: "#1c3243", border: "1.5px solid", borderColor: selectedDistrict ? "#90b3b6" : "#e0e0e0", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", opacity: selectedState ? 1 : 0.5 }}
                >
                  <option value="" disabled style={{ color: "#9ca3af" }}>Select your district</option>
                  {districts.map(d => <option key={d} value={d} style={{ color: "#1c3243", background: "#fff" }}>{d}</option>)}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="#90b3b6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
              </div>
              <motion.button
                onClick={() => onSubmit(selectedState, selectedDistrict)}
                disabled={!selectedState || !selectedDistrict}
                className="font-['Poppins',sans-serif] font-semibold text-white text-sm px-8 py-4 rounded-2xl disabled:opacity-40 disabled:cursor-not-allowed"
                style={{ background: "#1c3243" }}
                whileHover={selectedState && selectedDistrict ? { scale: 1.03, backgroundColor: "#1c3243" } : {}}
                whileTap={selectedState && selectedDistrict ? { scale: 0.97 } : {}}
              >
                Continue
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
        {/* Right */}
        <div className="w-[48%] relative flex items-center justify-center overflow-hidden">
          <div className="absolute bottom-[-80px] right-[-80px] w-[110%] h-[85%] rounded-tl-[24px]" style={{ background: "#90b3b6" }} />
          <motion.div
            className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
            style={{ width: "75%", height: "72%" }}
            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.75, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <img src={imgRectangle79} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <img src={imgRectangle80} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <img src={imgRectangle81} alt="Parent and child" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ─── Page root ─── */
export default function MentalHealthSeriesPage() {
  const [view, setView] = useState<"form" | "content">("form");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");

  function handleSubmit(s: string, d: string) {
    setState(s); setDistrict(d); setView("content");
    window.scrollTo({ top: 0, behavior: scrollBehavior() });
  }

  return view === "content"
    ? <ContentPage state={state} district={district} onReset={() => { setView("form"); window.scrollTo({ top: 0, behavior: scrollBehavior() }); }} />
    : <FormPage onSubmit={handleSubmit} />;
}
