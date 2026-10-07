import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";
import { ChevronDown, ListFilter, Search } from "@/components/ui/icons";
import { motion } from "motion/react";
import { Link } from "react-router";
import { Button, ButtonAnchor, ButtonLink } from "@/components/ui/Button";
import { scrollBehavior } from "@/lib/motion";
import { EventModal, type EventModalData } from "./mhs/EventModal";
import { SAMPLE_REGISTER_URL } from "./mhs/links";
import svgPaths from "@/imports/MentalHealthPage/svg-8lpz1a5k3k";
import imgRectangle79 from "@/imports/HomePagePgV2/ece298d0ec2c16f10310d45724b276a6035cb503.png";
import imgRectangle80 from "@/imports/HomePagePgV2/fb9567d2a70815a5c0307df9118cb49c401b72a3.png";
import imgRectangle81 from "@/imports/HomePagePgV2/40e0ae4f954f871b7087c4354f1c8d0bf5926225.png";

/* Only "Building Your Child's Confidence" has a topic page so far; the other resources open it as sample content */
const SAMPLE_TOPIC_SLUG = "building-your-childs-confidence";

/* ─── Static data ─── */
const US_STATES = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];
const DISTRICTS: Record<string, string[]> = {
  Utah: [
    "Alpine School District",
    "Canyons School District",
    "Davis School District",
    "Granite School District",
    "Jordan School District",
    "Murray City School District",
    "Nebo School District",
    "Provo City School District",
    "Salt Lake City School District",
    "Weber School District",
  ],
  California: [
    "Los Angeles Unified",
    "San Diego Unified",
    "San Francisco Unified",
    "Oakland Unified",
    "Fresno Unified",
    "Sacramento City Unified",
  ],
  "New York": [
    "New York City DOE",
    "Buffalo City Schools",
    "Rochester City Schools",
    "Yonkers City Schools",
    "Syracuse City Schools",
  ],
  Texas: ["Houston ISD", "Dallas ISD", "Austin ISD", "Fort Worth ISD", "San Antonio ISD"],
};
const DEFAULT_DISTRICTS = [
  "Central School District",
  "North School District",
  "South School District",
  "East School District",
  "West School District",
];

type ResourceType = "Video" | "Article" | "Guide" | "Worksheet" | "Tool";
type ResourceCategory = "All" | "Anxiety" | "Depression" | "Parenting" | "Teen Health" | "Self-Care" | "Crisis";

const RESOURCE_LIBRARY: {
  title: string;
  desc: string;
  type: ResourceType;
  category: ResourceCategory;
  duration: string;
  isNew?: boolean;
  slug?: string;
}[] = [
  {
    title: "ABC's of Substance Use & Vaping",
    desc: "Recognize and address risk and health impact in teens",
    type: "Video",
    category: "Parenting",
    duration: "8 min",
  },
  {
    title: "Body Positivity: Nurturing Self-Image",
    desc: "Promote body positivity with strategies for self-acceptance",
    type: "Article",
    category: "Anxiety",
    duration: "5 min read",
  },
  {
    title: "Building Your Child's Confidence",
    desc: "Foster a healthy identity in your child with professional insights",
    type: "Video",
    category: "Self-Care",
    duration: "6-part series",
    isNew: true,
    slug: "building-your-childs-confidence",
  },
  {
    title: "Bullying - Stop the Cycle",
    desc: "Identify and address bullying with expert tips and strategies",
    type: "Guide",
    category: "Depression",
    duration: "7 min read",
  },
  {
    title: "Compassionate Parenting & Self-Compassion",
    desc: "Practical tools for reducing day-to-day stress as a family.",
    type: "Worksheet",
    category: "Parenting",
    duration: "Printable",
  },
  {
    title: "De-escalating Cycles of Conflicts",
    desc: "Resolve conflicts using internal Family Systems",
    type: "Article",
    category: "Anxiety",
    duration: "6 min read",
  },
  {
    title: "Depression: You're Not Alone",
    desc: "Understand the complexity, symptoms and early intervention",
    type: "Guide",
    category: "Parenting",
    duration: "10 min read",
  },
  {
    title: "Effects of Screen Time & Children's Mental Health",
    desc: "Explore the impact on kids' mental health and set limits",
    type: "Article",
    category: "Parenting",
    duration: "8 min read",
  },
  {
    title: "Emotional Regulation - Part 1: Recognizing What's Wrong",
    desc: "Guide your child in mastering emotional regulation and balance",
    type: "Video",
    category: "Teen Health",
    duration: "12 min",
    isNew: true,
  },
];

const CATEGORIES: ResourceCategory[] = [
  "All",
  "Anxiety",
  "Depression",
  "Parenting",
  "Teen Health",
  "Self-Care",
  "Crisis",
];

/* ─── Type badge SVG icons (from Figma paths) ─── */
function TypeBadge({ type }: { type: ResourceType }) {
  if (type === "Video")
    return (
      <div className="relative flex shrink-0 items-center gap-2 rounded-full bg-pg-tint px-2 py-1">
        <div className="relative size-[16px] shrink-0">
          <svg className="block size-full" fill="none" viewBox="0 0 13.3333 13.3333">
            <path d={svgPaths.p308c8130} fill="var(--pg-teal-dark)" />
          </svg>
        </div>
        <span className="text-xs leading-[15px] font-semibold whitespace-nowrap text-pg-teal-dark">Video</span>
      </div>
    );
  if (type === "Article")
    return (
      <div className="relative flex shrink-0 items-center gap-2 rounded-full bg-pg-tint-soft px-2 py-1">
        <div className="relative size-[16px] shrink-0">
          <svg className="block size-full" fill="none" viewBox="0 0 12 12">
            <path d={svgPaths.p26f92c80} className="fill-pg-navy" />
            <path d={svgPaths.p4aa5c80} className="fill-pg-navy" />
          </svg>
        </div>
        <span className="text-xs leading-[15px] font-semibold whitespace-nowrap text-pg-navy">Article</span>
      </div>
    );
  if (type === "Guide")
    return (
      <div className="relative flex shrink-0 items-center gap-2 rounded-full bg-pg-success-soft px-2 py-1">
        <div className="relative size-[16px] shrink-0">
          <svg className="block size-full" fill="none" viewBox="0 0 12 13.3333">
            <path d={svgPaths.p2a787c0} fill="var(--pg-success)" />
          </svg>
        </div>
        <span className="text-xs leading-[15px] font-semibold whitespace-nowrap text-pg-navy">Guide</span>
      </div>
    );
  if (type === "Worksheet")
    return (
      <div className="relative flex shrink-0 items-center gap-2 rounded-full bg-pg-warning-soft px-2 py-1">
        <div className="relative size-[16px] shrink-0">
          <svg className="block size-full" fill="none" viewBox="0 0 12.0017 12">
            <path d={svgPaths.p1ad4ca80} fill="var(--pg-warning)" />
          </svg>
        </div>
        <span className="text-xs leading-[15px] font-semibold whitespace-nowrap text-pg-warning">Worksheet</span>
      </div>
    );
  return (
    <div className="relative flex shrink-0 items-center gap-2 rounded-full bg-pg-error-soft px-2 py-1">
      <span className="text-xs leading-[15px] font-semibold whitespace-nowrap text-pg-error">Tool</span>
    </div>
  );
}

const MotionLink = motion.create(Link);

/* ─── Resource card (faithful to Figma Link component) ─── */
function ResourceCard({ resource, index }: { resource: (typeof RESOURCE_LIBRARY)[0]; index: number }) {
  return (
    <MotionLink
      to={`/mental-health-series/${resource.slug ?? SAMPLE_TOPIC_SLUG}`}
      className="group flex flex-col items-start gap-3 rounded-pg-xl bg-white p-5 no-underline shadow-pg-card"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: (index % 9) * 0.04 }}
      whileHover={{ y: -3, boxShadow: "var(--pg-shadow-card-hover)" }}
    >
      {/* Type + New badge row */}
      <div className="flex w-full items-center justify-between">
        <TypeBadge type={resource.type} />
        {resource.isNew && (
          <div className="inline-flex items-center rounded-full bg-pg-teal px-2 py-0.5">
            <span className="text-xs leading-[15px] font-semibold whitespace-nowrap text-white">New</span>
          </div>
        )}
      </div>

      {/* Title */}
      <div className="w-full">
        <p className="text-sm leading-[19.25px] font-semibold text-pg-navy transition-colors group-hover:text-pg-teal-dark">
          {resource.title}
        </p>
      </div>

      {/* Description */}
      <div className="min-h-px w-full flex-1">
        <p className="text-xs leading-[19.5px] text-pg-slate">{resource.desc}</p>
      </div>

      {/* Footer */}
      <div className="relative w-full pt-1">
        <div aria-hidden className="pointer-events-none absolute inset-0 border-t border-solid border-pg-tint-soft" />
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center rounded-full bg-pg-cream px-2 py-0.5">
            <span className="text-xs leading-[15px] font-medium whitespace-nowrap text-pg-teal-dark">
              {resource.category}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs leading-[15px] whitespace-nowrap text-pg-slate">{resource.duration}</span>
            <svg
              className="size-[14px] transition-transform group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                d={svgPaths.p7f8ed00}
                stroke="var(--pg-teal)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.16667"
              />
            </svg>
          </div>
        </div>
      </div>
    </MotionLink>
  );
}

/* ─── Resource Library ─── */
type ResourceSort = "featured" | "az" | "type";
const RESOURCE_SORT_LABELS: Record<ResourceSort, string> = { featured: "Featured", az: "A → Z", type: "Type" };

function ResourceLibrary() {
  const [activeCategory, setActiveCategory] = useState<ResourceCategory>("All");
  const [libSearch, setLibSearch] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [sort, setSort] = useState<ResourceSort>("featured");
  const [sortOpen, setSortOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  // Close the sort menu on outside click or Escape
  useEffect(() => {
    if (!sortOpen) return;
    const onDown = (e: globalThis.MouseEvent) => {
      if (!sortRef.current?.contains(e.target as Node)) setSortOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSortOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [sortOpen]);

  const filtered = RESOURCE_LIBRARY.filter((r) => {
    const matchCat = activeCategory === "All" || r.category === activeCategory;
    const matchSearch =
      !libSearch ||
      r.title.toLowerCase().includes(libSearch.toLowerCase()) ||
      r.desc.toLowerCase().includes(libSearch.toLowerCase());
    return matchCat && matchSearch;
  });
  const sorted =
    sort === "az"
      ? [...filtered].sort((a, b) => a.title.localeCompare(b.title))
      : sort === "type"
        ? [...filtered].sort((a, b) => a.type.localeCompare(b.type))
        : [...filtered].sort((a, b) => Number(!!b.isNew) - Number(!!a.isNew));

  const visible = expanded ? sorted : sorted.slice(0, 9);

  return (
    <div className="w-full">
      {/* Filter bar: full width and sticky while browsing the library, like On-Demand Courses and Ask a Therapist */}
      <div className="sticky top-14 z-30 border-y border-pg-line bg-white shadow-pg-card">
        <div className="mx-auto flex max-w-pg-page flex-wrap items-center gap-3 px-6 py-3 md:flex-nowrap md:gap-4 md:px-10">
          <div className="relative min-w-0 flex-1 md:w-64 md:flex-none">
            <Search
              size={14}
              className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-pg-sage"
              aria-hidden="true"
            />
            <input
              value={libSearch}
              onChange={(e) => setLibSearch(e.target.value)}
              placeholder="Search resources…"
              aria-label="Search resources"
              className="w-full rounded-pg-md border border-transparent bg-pg-cream py-2 pr-4 pl-9 text-sm text-pg-navy transition-colors outline-none placeholder:text-pg-slate focus:border-pg-sage focus:bg-white"
            />
          </div>

          <div className="order-last flex min-w-0 flex-1 basis-full items-center gap-2 overflow-x-auto py-0.5 md:order-none md:basis-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                aria-pressed={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-medium whitespace-nowrap transition-colors ${
                  activeCategory === cat ? "bg-pg-navy text-white" : "bg-pg-cream-dark text-pg-slate hover:bg-pg-tint"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div ref={sortRef} className="relative shrink-0">
            <button
              type="button"
              onClick={() => setSortOpen((v) => !v)}
              aria-haspopup="listbox"
              aria-expanded={sortOpen}
              className="inline-flex items-center gap-2 rounded-pg-md bg-pg-cream-dark px-4 py-2 text-xs font-medium text-pg-slate transition-colors hover:bg-pg-tint"
            >
              <ListFilter size={14} aria-hidden="true" />
              {RESOURCE_SORT_LABELS[sort]}
              <ChevronDown
                size={14}
                aria-hidden="true"
                className={`transition-transform ${sortOpen ? "rotate-180" : ""}`}
              />
            </button>
            {sortOpen && (
              <ul
                role="listbox"
                aria-label="Sort resources"
                className="absolute top-full right-0 z-30 mt-2 min-w-[140px] overflow-hidden rounded-pg-md bg-white py-1 shadow-pg-overlay"
              >
                {(Object.keys(RESOURCE_SORT_LABELS) as ResourceSort[]).map((k) => (
                  <li key={k} role="option" aria-selected={sort === k}>
                    <button
                      type="button"
                      onClick={() => {
                        setSort(k);
                        setSortOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-xs transition-colors hover:bg-pg-tint-soft ${sort === k ? "bg-pg-tint-soft font-semibold text-pg-teal-dark" : "text-pg-slate"}`}
                    >
                      {RESOURCE_SORT_LABELS[k]}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-pg-page px-6 pt-10 md:px-10">
        {/* Header */}
        <div className="flex items-center gap-2">
          <div className="h-[20px] w-[4px] rounded-full bg-pg-sage" />
          <p className="text-xl leading-[28px] font-semibold whitespace-nowrap text-pg-navy">Resource Library</p>
          <div className="inline-flex items-center rounded-full bg-pg-tint px-2 py-0.5">
            <p className="text-xs leading-[16px] font-medium whitespace-nowrap text-pg-teal-dark">
              {RESOURCE_LIBRARY.length} resources
            </p>
          </div>
        </div>

        {/* Card grid */}
        <div className="w-full pt-6">
          <div className="grid w-full grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((r, i) => (
              <ResourceCard key={r.title} resource={r} index={i} />
            ))}
            {filtered.length === 0 && (
              <div className="col-span-3 py-14 text-center text-sm text-pg-slate">No resources match your filters.</div>
            )}
          </div>
        </div>

        {/* Show all button */}
        {filtered.length > 9 && (
          <div className="flex w-full items-start justify-center pt-6">
            <Button variant="secondary" onClick={() => setExpanded((v) => !v)} className="whitespace-nowrap">
              {expanded ? "Show fewer resources" : `Show all ${filtered.length} resources`}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Calendar ─── */
type CalendarView = "day" | "week" | "month";
const EVENTS: {
  id: string;
  date: string;
  day: number;
  month: number;
  year: number;
  title: string;
  time: string;
  desc: string;
  color: "teal" | "navy";
}[] = [
  {
    id: "anxiety",
    date: "Thu, July 10",
    day: 10,
    month: 6,
    year: 2025,
    title: "Understanding Anxiety in Children",
    time: "4:00 PM – 5:00 PM",
    desc: "Live Q&A with a licensed child therapist. Bring your questions.",
    color: "teal",
  },
  {
    id: "mindfulness",
    date: "Tue, July 15",
    day: 15,
    month: 6,
    year: 2025,
    title: "Mindfulness & Stress Tools for Parents",
    time: "12:00 PM – 1:00 PM",
    desc: "Interactive workshop on breathing and grounding techniques you can share with your kids.",
    color: "navy",
  },
  {
    id: "resilience-m2",
    date: "Thu, July 17",
    day: 17,
    month: 6,
    year: 2025,
    title: "Emotional Resilience – Module 2 Launch",
    time: "All day",
    desc: "New module now available in your dashboard.",
    color: "teal",
  },
  {
    id: "support-jul23",
    date: "Wed, July 23",
    day: 23,
    month: 6,
    year: 2025,
    title: "Parent Support Circle",
    time: "6:00 PM – 7:00 PM",
    desc: "Facilitated group session for parents navigating school-year challenges.",
    color: "navy",
  },
  {
    id: "back-to-school",
    date: "Fri, August 1",
    day: 1,
    month: 7,
    year: 2025,
    title: "Back-to-School Mental Health Prep",
    time: "2:00 PM – 3:00 PM",
    desc: "Strategies to ease school transitions and manage first-week anxiety.",
    color: "teal",
  },
  {
    id: "teen-forum",
    date: "Tue, August 12",
    day: 12,
    month: 7,
    year: 2025,
    title: "Teen Mental Health – Open Forum",
    time: "5:00 PM – 6:30 PM",
    desc: "For parents of middle and high schoolers. Topics include social pressure, identity, and digital wellbeing.",
    color: "navy",
  },
  {
    id: "self-care",
    date: "Thu, August 21",
    day: 21,
    month: 7,
    year: 2025,
    title: "Self-Care for Caregivers",
    time: "12:00 PM – 1:00 PM",
    desc: "You can't pour from an empty cup. A session dedicated to parent wellbeing.",
    color: "teal",
  },
  {
    id: "crisis",
    date: "Mon, August 25",
    day: 25,
    month: 7,
    year: 2025,
    title: "Crisis Resources Workshop",
    time: "3:00 PM – 4:00 PM",
    desc: "Know the signs, know the steps. A practical guide to crisis preparedness for families.",
    color: "navy",
  },
];

const EVENTS_PAGE_SIZE = 3;

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

type EventPopupState = { event: (typeof EVENTS)[0]; anchorRect: DOMRect } | null;

const toModalData = (ev: (typeof EVENTS)[0]): EventModalData => ({
  id: ev.id,
  title: ev.title,
  date: new Date(ev.year, ev.month, ev.day),
  time: ev.time,
  description: ev.desc,
  registerUrl: SAMPLE_REGISTER_URL,
});

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const DAY_NAMES_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const DAY_NAMES_FULL = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function eventsForDate(year: number, month: number, day: number) {
  return EVENTS.filter((e) => e.year === year && e.month === month && e.day === day);
}

function getWeekStart(date: Date) {
  const d = new Date(date);
  d.setDate(d.getDate() - d.getDay());
  return d;
}

function EventPill({
  ev,
  popup,
  onEventClick,
  compact = false,
}: {
  ev: (typeof EVENTS)[0];
  popup: EventPopupState;
  onEventClick: (ev: (typeof EVENTS)[0], e: MouseEvent) => void;
  compact?: boolean;
}) {
  const active = popup?.event === ev;
  return (
    <motion.button
      type="button"
      aria-haspopup="dialog"
      onClick={(e) => onEventClick(ev, e)}
      className={`w-full cursor-pointer truncate rounded-pg-md text-left font-medium ${
        ev.color === "teal"
          ? active
            ? "bg-pg-teal-dark text-white"
            : "bg-pg-tint text-pg-teal-dark"
          : active
            ? "bg-pg-navy-hover text-white"
            : "bg-pg-navy text-white"
      } ${compact ? "px-2 py-0.5 text-xs leading-[14px]" : "px-2 py-1 text-xs"}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      title={ev.title}
    >
      {compact ? (
        ev.title
      ) : (
        <>
          <span className="mr-1 font-normal">{ev.time.split(" ")[0]}</span>
          {ev.title}
        </>
      )}
    </motion.button>
  );
}

function MonthView({
  year,
  month,
  popup,
  onEventClick,
}: {
  year: number;
  month: number;
  popup: EventPopupState;
  onEventClick: (ev: (typeof EVENTS)[0], e: MouseEvent) => void;
}) {
  const days = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  const cells: (number | null)[] = [
    ...Array.from({ length: firstDay }, () => null),
    ...Array.from({ length: days }, (_, i) => i + 1),
  ];
  while (cells.length % 7 !== 0) cells.push(null);
  const today = new Date();

  return (
    <div className="overflow-hidden rounded-pg-xl bg-white" style={{ boxShadow: "var(--pg-shadow-card)" }}>
      <div className="grid grid-cols-7 border-b border-pg-tint-soft">
        {DAY_NAMES_SHORT.map((d) => (
          <div key={d} className="py-2 text-center text-xs font-semibold tracking-pg-eyebrow text-pg-slate uppercase">
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7">
        {cells.map((day, idx) => {
          const evs = day ? eventsForDate(year, month, day) : [];
          const isToday =
            day !== null && today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;
          return (
            <div
              key={idx}
              className={`flex min-h-[80px] flex-col gap-1 border-r border-b border-pg-tint-soft p-2 transition-colors ${day ? "cursor-default hover:bg-pg-cream" : "bg-pg-tint-soft"}`}
            >
              {day && (
                <>
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-medium ${isToday ? "bg-pg-teal text-white" : "text-pg-slate"}`}
                  >
                    {day}
                  </span>
                  {evs.map((ev, i) => (
                    <EventPill key={i} ev={ev} popup={popup} onEventClick={onEventClick} compact />
                  ))}
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function WeekView({
  weekStart,
  popup,
  onEventClick,
}: {
  weekStart: Date;
  popup: EventPopupState;
  onEventClick: (ev: (typeof EVENTS)[0], e: MouseEvent) => void;
}) {
  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(weekStart);
    d.setDate(d.getDate() + i);
    return d;
  });
  const today = new Date();

  return (
    <div className="overflow-hidden rounded-pg-xl bg-white" style={{ boxShadow: "var(--pg-shadow-card)" }}>
      <div className="grid grid-cols-7 border-b border-pg-tint-soft">
        {days.map((d, i) => {
          const isToday = d.toDateString() === today.toDateString();
          return (
            <div key={i} className="flex flex-col items-center gap-1 py-3">
              <span className="text-pg-eyebrow text-pg-slate">{DAY_NAMES_SHORT[d.getDay()]}</span>
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-full text-sm font-semibold ${isToday ? "bg-pg-teal text-white" : "text-pg-navy"}`}
              >
                {d.getDate()}
              </span>
            </div>
          );
        })}
      </div>
      <div className="grid min-h-[200px] grid-cols-7">
        {days.map((d, i) => {
          const evs = eventsForDate(d.getFullYear(), d.getMonth(), d.getDate());
          return (
            <div key={i} className="flex flex-col gap-2 border-r border-pg-tint-soft p-2">
              {evs.map((ev, j) => (
                <EventPill key={j} ev={ev} popup={popup} onEventClick={onEventClick} />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function DayView({
  date,
  popup,
  onEventClick,
}: {
  date: Date;
  popup: EventPopupState;
  onEventClick: (ev: (typeof EVENTS)[0], e: MouseEvent) => void;
}) {
  const evs = eventsForDate(date.getFullYear(), date.getMonth(), date.getDate());
  const dayName = DAY_NAMES_FULL[date.getDay()];
  const monthName = MONTH_NAMES[date.getMonth()];

  return (
    <div className="overflow-hidden rounded-pg-xl bg-white" style={{ boxShadow: "var(--pg-shadow-card)" }}>
      <div className="border-b border-pg-tint-soft px-5 py-4">
        <p className="text-sm font-semibold text-pg-navy">{dayName}</p>
        <p className="mt-0.5 text-xs text-pg-slate">
          {monthName} {date.getDate()}, {date.getFullYear()}
        </p>
      </div>
      <div className="flex min-h-[200px] flex-col gap-3 p-5">
        {evs.length === 0 && (
          <p className="mt-8 text-center text-sm text-pg-slate">No events scheduled for this day.</p>
        )}
        {evs.map((ev, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className="w-16 shrink-0 text-right">
              <span className="text-xs leading-tight font-medium text-pg-teal-dark">
                {ev.time.split("–")[0].trim()}
              </span>
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
  const closePopup = useCallback(() => setPopup(null), []);

  function handleEventClick(ev: (typeof EVENTS)[0], e: MouseEvent) {
    e.stopPropagation();
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setPopup((prev) => (prev?.event === ev ? null : { event: ev, anchorRect: rect }));
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
      const we = new Date(ws);
      we.setDate(we.getDate() + 6);
      if (ws.getMonth() === we.getMonth())
        return `${MONTH_NAMES[ws.getMonth()]} ${ws.getDate()}–${we.getDate()}, ${ws.getFullYear()}`;
      return `${MONTH_NAMES[ws.getMonth()]} ${ws.getDate()} – ${MONTH_NAMES[we.getMonth()]} ${we.getDate()}, ${we.getFullYear()}`;
    }
    return `${DAY_NAMES_FULL[currentDate.getDay()]}, ${MONTH_NAMES[currentDate.getMonth()]} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;
  }

  const views: CalendarView[] = ["day", "week", "month"];

  return (
    <div className="relative flex flex-col gap-3">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Prev / label / next */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={goPrev}
            aria-label={"Previous"}
            className="flex h-9 w-9 items-center justify-center rounded-pg-md border border-pg-line text-pg-navy transition-colors hover:bg-pg-cream"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18l-6-6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <span className="text-center text-sm font-semibold text-pg-navy sm:min-w-[180px]">{getHeaderLabel()}</span>
          <button
            type="button"
            onClick={goNext}
            aria-label={"Next"}
            className="flex h-9 w-9 items-center justify-center rounded-pg-md border border-pg-line text-pg-navy transition-colors hover:bg-pg-cream"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 18l6-6-6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* View switcher */}
        <div className="flex items-center gap-0.5 rounded-pg-md bg-pg-tint-soft p-0.5">
          {views.map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className="rounded-pg-md px-3 py-2 text-xs font-medium capitalize transition-all"
              style={{
                background: view === v ? "var(--pg-white)" : "transparent",
                color: view === v ? "var(--pg-navy)" : "var(--pg-slate)",
                boxShadow: view === v ? "var(--pg-shadow-card)" : "none",
              }}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* View content */}
      <motion.div
        key={`${view}-${currentDate.toISOString()}`}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.22 }}
      >
        {view === "month" && (
          <MonthView
            year={currentDate.getFullYear()}
            month={currentDate.getMonth()}
            popup={popup}
            onEventClick={handleEventClick}
          />
        )}
        {view === "week" && (
          <WeekView weekStart={getWeekStart(currentDate)} popup={popup} onEventClick={handleEventClick} />
        )}
        {view === "day" && <DayView date={currentDate} popup={popup} onEventClick={handleEventClick} />}
      </motion.div>

      <EventModal
        event={popup ? toModalData(popup.event) : null}
        anchor={popup?.anchorRect ?? null}
        onClose={closePopup}
      />
    </div>
  );
}

/** "Welcome to the Mental Health Series" video on Vimeo */
const WELCOME_VIMEO_ID = "1037509342";

/* ─── Content page ─── */
function ContentPage({ state, district, onReset }: { state: string; district: string; onReset: () => void }) {
  const [search, setSearch] = useState("");
  const [eventsVisible, setEventsVisible] = useState(EVENTS_PAGE_SIZE);

  const filteredEvents = search
    ? EVENTS.filter(
        (e) =>
          e.title.toLowerCase().includes(search.toLowerCase()) || e.desc.toLowerCase().includes(search.toLowerCase()),
      )
    : EVENTS;

  const shownEvents = filteredEvents.slice(0, eventsVisible);

  return (
    <motion.div
      className="min-h-[calc(100vh-72px)] bg-pg-cream"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      {/* ── Hero: matches Figma ContentPage + ContainerMargin ── */}
      <div className="relative flex w-full shrink-0 flex-col items-center justify-end bg-pg-cream px-6 pt-24 pb-14 md:px-10 lg:px-14">
        <div className="flex w-full max-w-[825px] flex-col items-center gap-6">
          {/* Heading + location */}
          <div className="w-full text-center">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
              <p className="text-center text-pg-h1 text-pg-navy">
                Welcome to the <em className="font-bold text-pg-teal-dark italic">Mental Health Series</em>
              </p>
              <p className="mt-2 text-center text-sm leading-[20px] text-pg-navy">
                {district} · {state}
              </p>
            </motion.div>
          </div>

          {/* Search bar — matches Figma SearchBar */}
          <motion.div
            className="flex h-[60px] w-full max-w-[659px] shrink-0 items-center gap-2 rounded-pg-2xl bg-white px-6"
            style={{ boxShadow: "var(--pg-shadow-card)" }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.55 }}
          >
            <svg
              className="size-[16px] shrink-0 text-pg-slate"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 16.3333 16.3333"
            >
              <path
                d={svgPaths.pb1c300}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
              <path
                d="M14.8333 14.8333L13.5 13.5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search resources and events…"
              className="min-w-0 flex-1 bg-transparent text-sm text-pg-slate outline-none placeholder:text-pg-slate"
            />
            <Button size="s" className="shrink-0">
              Search
            </Button>
          </motion.div>

          {/* Welcome video (Vimeo) — loads in place, no poster image */}
          <motion.div
            className="relative aspect-video w-full max-w-[659px] shrink-0 overflow-hidden rounded-pg-2xl bg-pg-navy shadow-pg-card"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.55 }}
          >
            <iframe
              src={`https://player.vimeo.com/video/${WELCOME_VIMEO_ID}?dnt=1&title=0&byline=0&portrait=0`}
              title="Welcome to the Mental Health Series (video)"
              className="absolute inset-0 h-full w-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </div>
      </div>

      {/* ── Body sections ── */}
      {/* Resource Library (with its sticky filter bar) */}
      <ResourceLibrary />

      <div className="mx-auto flex max-w-pg-page flex-col gap-14 px-6 py-14 md:px-10">
        {/* Monthly Calendar */}
        <section>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="h-[20px] w-[4px] rounded-full bg-pg-sage" />
              <p className="text-xl leading-[28px] font-semibold whitespace-nowrap text-pg-navy">Monthly Calendar</p>
            </div>
            <ButtonLink to="/mental-health-series/events" variant="secondary" size="s" className="shrink-0">
              View all events
              <svg className="relative size-[13px] shrink-0" fill="none" viewBox="0 0 13 13" aria-hidden="true">
                <path
                  d={svgPaths.p2d0d8080}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.08333"
                />
              </svg>
            </ButtonLink>
          </div>
          <Calendar />
        </section>

        {/* Upcoming Events */}
        <section>
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-[20px] w-[4px] rounded-full bg-pg-sage" />
              <p className="text-xl leading-[28px] font-semibold whitespace-nowrap text-pg-navy">Upcoming Events</p>
              <div className="inline-flex items-center rounded-full bg-pg-tint px-2 py-0.5">
                <p className="text-xs leading-[16px] font-medium whitespace-nowrap text-pg-teal-dark">
                  {filteredEvents.length} total
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {shownEvents.map((ev, i) => (
              <motion.div
                key={ev.title}
                className="group flex flex-wrap items-start gap-4 rounded-pg-xl bg-white px-5 py-5 sm:flex-nowrap sm:gap-5 sm:px-6"
                style={{ boxShadow: "var(--pg-shadow-card)" }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                whileHover={{ boxShadow: "var(--pg-shadow-card-hover)", y: -2 }}
              >
                <div
                  className="flex min-w-[60px] shrink-0 flex-col items-center justify-center rounded-pg-lg px-4 py-3"
                  style={{ background: ev.color === "teal" ? "var(--pg-tint)" : "var(--pg-tint-soft)" }}
                >
                  <span
                    className="text-xl leading-none font-bold"
                    style={{ color: ev.color === "teal" ? "var(--pg-teal-dark)" : "var(--pg-navy)" }}
                  >
                    {ev.day}
                  </span>
                  <span className="mt-0.5 text-pg-eyebrow text-pg-teal-dark">
                    {ev.date.split(",")[1]?.trim().split(" ")[0]}
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 flex-col gap-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-sm font-semibold text-pg-navy transition-colors group-hover:text-pg-teal-dark">
                      {ev.title}
                    </h3>
                    <span
                      className="rounded-full px-2 py-0.5 text-xs font-semibold"
                      style={{
                        background: ev.color === "teal" ? "var(--pg-sage)" : "var(--pg-navy)",
                        color: ev.color === "teal" ? "var(--pg-navy)" : "var(--pg-white)",
                      }}
                    >
                      {ev.color === "teal" ? "Session" : "Workshop"}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-pg-teal-dark">{ev.time}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-pg-slate">{ev.desc}</p>
                </div>
                <ButtonAnchor
                  href={SAMPLE_REGISTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="s"
                  className="w-full shrink-0 self-center sm:w-auto"
                >
                  Register<span className="sr-only"> (opens in a new tab)</span>
                </ButtonAnchor>
              </motion.div>
            ))}

            {filteredEvents.length === 0 && (
              <div className="py-16 text-center text-sm text-pg-slate">No events match your search.</div>
            )}
          </div>

          {eventsVisible < filteredEvents.length && (
            <div className="mt-6 flex justify-center">
              <Button variant="secondary" onClick={() => setEventsVisible((v) => v + EVENTS_PAGE_SIZE)}>
                Load more events
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 5v14M5 12l7 7 7-7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
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
    <div className="flex min-h-[calc(100vh-72px)] flex-col bg-pg-cream">
      <div className="relative flex flex-1 flex-col overflow-hidden lg:flex-row">
        {/* Left */}
        <div className="relative z-10 flex w-full flex-col justify-center px-6 pt-24 pb-10 md:px-10 lg:w-[52%] lg:px-20 lg:py-20">
          <motion.div
            className="flex max-w-md flex-col gap-8"
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.span
              className="tracking-pg-eyebrowst text-sm font-semibold text-pg-teal-dark uppercase"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.55 }}
            >
              Mental Health Series
            </motion.span>
            <motion.h1
              className="text-pg-h1 text-pg-navy"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.55 }}
            >
              What{" "}
              <em className="font-bold text-pg-teal-dark" style={{ fontStyle: "italic" }}>
                state
              </em>{" "}
              does your child attend school in?
            </motion.h1>
            <motion.p
              className="text-base leading-relaxed text-pg-slate"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.55 }}
            >
              {"Don't see your state? "}
              <a href="#" className="text-pg-teal-dark underline transition-colors hover:text-pg-navy">
                Get in touch with our team.
              </a>
            </motion.p>
            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.55 }}
            >
              <div className="relative">
                <select
                  value={selectedState}
                  onChange={(e) => {
                    setSelectedState(e.target.value);
                    setSelectedDistrict("");
                  }}
                  className="w-full cursor-pointer appearance-none rounded-pg-xl px-5 py-4 text-sm transition-all duration-(--pg-dur-fast) outline-none"
                  style={{
                    background: selectedState ? "var(--pg-teal)" : "var(--pg-sage)",
                    color: selectedState ? "var(--pg-white)" : "var(--pg-navy)",
                    boxShadow: "var(--pg-shadow-card)",
                  }}
                >
                  <option value="" disabled style={{ color: "var(--pg-navy)", background: "var(--pg-cream)" }}>
                    Select your state
                  </option>
                  {US_STATES.map((s) => (
                    <option key={s} value={s} style={{ color: "var(--pg-navy)", background: "var(--pg-cream)" }}>
                      {s}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6 9l6 6 6-6"
                      stroke={selectedState ? "var(--pg-white)" : "var(--pg-navy)"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="relative">
                <select
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.target.value)}
                  disabled={!selectedState}
                  className="w-full cursor-pointer appearance-none rounded-pg-xl px-5 py-4 text-sm transition-all duration-(--pg-dur-fast) outline-none disabled:cursor-not-allowed"
                  style={{
                    background: selectedDistrict ? "var(--pg-tint-soft)" : "var(--pg-white)",
                    color: "var(--pg-navy)",
                    border: "1.5px solid",
                    borderColor: selectedDistrict ? "var(--pg-sage)" : "var(--pg-line)",
                    boxShadow: "var(--pg-shadow-card)",
                    opacity: selectedState ? 1 : 0.5,
                  }}
                >
                  <option value="" disabled style={{ color: "var(--pg-mist)" }}>
                    Select your district
                  </option>
                  {districts.map((d) => (
                    <option key={d} value={d} style={{ color: "var(--pg-navy)", background: "var(--pg-white)" }}>
                      {d}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6 9l6 6 6-6"
                      className="stroke-pg-sage"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <Button
                size="l"
                onClick={() => onSubmit(selectedState, selectedDistrict)}
                disabled={!selectedState || !selectedDistrict}
              >
                Continue
              </Button>
            </motion.div>
          </motion.div>
        </div>
        {/* Right */}
        <div className="relative flex min-h-[340px] w-full items-center justify-center overflow-hidden sm:min-h-[420px] lg:min-h-0 lg:w-[48%]">
          <div
            className="absolute right-[-80px] bottom-[-80px] h-[85%] w-[110%] rounded-tl-pg-2xl"
            style={{ background: "var(--pg-sage)" }}
          />
          <motion.div
            className="relative z-10 overflow-hidden rounded-pg-2xl shadow-pg-overlay"
            style={{ width: "75%", height: "72%" }}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <img src={imgRectangle79} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <img src={imgRectangle80} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <img src={imgRectangle81} alt="Parent and child" className="h-full w-full object-cover" />
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
    setState(s);
    setDistrict(d);
    setView("content");
    window.scrollTo({ top: 0, behavior: scrollBehavior() });
  }

  return view === "content" ? (
    <ContentPage
      state={state}
      district={district}
      onReset={() => {
        setView("form");
        window.scrollTo({ top: 0, behavior: scrollBehavior() });
      }}
    />
  ) : (
    <FormPage onSubmit={handleSubmit} />
  );
}
