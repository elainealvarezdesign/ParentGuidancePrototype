import { useState, useMemo, useRef, useEffect } from "react";
import { ChevronDown, ListFilter } from "./components/icons";
import { motion, AnimatePresence } from "motion/react";
import { scrollBehavior } from "./utils/motion";
import { useNavigate } from "react-router";
import { Button, ButtonAnchor, ButtonLink } from "./components/Button";
import svgPaths from "@/imports/CreateLivePrototypeWithTransitions/svg-aw5njrtmbl";
import imgParentAndChild from "@/imports/CreateLivePrototypeWithTransitions/5adf607043d952ed1bbbfdfe5254ee778ed8a6e8.png";
import imgContainer from "@/imports/get-help-hero.png";

const imgConnectWithChild = "https://images.unsplash.com/photo-1549068294-04a001ee0638?auto=format&fit=crop&w=700&q=80";
const imgAnxietyWays = "https://images.unsplash.com/photo-1769095207794-02ffab1e2376?auto=format&fit=crop&w=700&q=80";
const imgCalmingMind = "https://images.unsplash.com/photo-1758598737831-10c213d88462?auto=format&fit=crop&w=700&q=80";
const imgApproachingAnxiety = "https://images.unsplash.com/photo-1639760279373-2075f626dc3a?auto=format&fit=crop&w=700&q=80";
const imgAddiction = "https://images.unsplash.com/photo-1559734840-f9509ee5677f?auto=format&fit=crop&w=700&q=80";
const imgOvercomingAddiction = "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=700&q=80";
const imgAskTherapist = "https://images.unsplash.com/photo-1581998392741-67879e0ef04a?auto=format&fit=crop&w=700&q=80";
const imgBodyLove = "https://images.unsplash.com/photo-1758874384842-7e79ce77ed1a?auto=format&fit=crop&w=700&q=80";
const imgEatingDisorders = "https://images.unsplash.com/photo-1758874961000-d8b11690ce22?auto=format&fit=crop&w=700&q=80";

import UnifiedCard from "./components/UnifiedCard";

/* ─── Types ─── */
type Topic =
  | "All"
  | "Anxiety & Depression"
  | "Addiction & Recovery"
  | "Ask a Therapist"
  | "Body Image"
  | "Behavior"
  | "Bullying"
  | "Child & Teen Development"
  | "Grief and Loss"
  | "Meditation & Mindfulness"
  | "Parent Support"
  | "Self Help"
  | "Suicide Prevention"
  | "Technology";

type SortOption = "featured" | "az" | "newest";

const TOPICS: Topic[] = [
  "All",
  "Anxiety & Depression",
  "Addiction & Recovery",
  "Ask a Therapist",
  "Body Image",
  "Behavior",
  "Bullying",
  "Child & Teen Development",
  "Grief and Loss",
  "Meditation & Mindfulness",
  "Parent Support",
  "Self Help",
  "Suicide Prevention",
  "Technology",
];

/* ─── Course data ─── */
interface Course {
  id: number;
  title: string;
  topic: Topic;
  instructor: string;
  img: string;
  lessons: number;
  duration: string;
  description: string;
  isNew?: boolean;
  isFeatured?: boolean;
  slug?: string;
}

const COURSES: Course[] = [
  {
    id: 22,
    title: "Milestones to Progress: Guiding your child from birth through the early school years",
    topic: "Child & Teen Development",
    instructor: "Dr. Kevin Skinner",
    img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=700&q=80",
    lessons: 20,
    duration: "3h 30m",
    description: "A science-informed course for parents navigating the early years — from birth through the first school days.",
    slug: "milestones-to-progress",
  },
  {
    id: 1,
    title: "Connect With Your Child by Parenting with Purpose",
    topic: "Child & Teen Development",
    instructor: "Dr. Kevin Skinner",
    img: imgConnectWithChild,
    lessons: 8,
    duration: "2h 30m",
    description: "Deepen your bond and navigate your child's world with tools that actually work.",
    isFeatured: true,
  },
  {
    id: 2,
    title: "Anxiety: Ways to Move Forward",
    topic: "Anxiety & Depression",
    instructor: "Dr. Ayanna Abrams",
    img: imgAnxietyWays,
    lessons: 6,
    duration: "1h 30m",
    description: "Practical frameworks to help you and your child manage and reduce anxiety day to day.",
    isNew: true,
  },
  {
    id: 3,
    title: "Calming Your Anxious Mind",
    topic: "Anxiety & Depression",
    instructor: "Dr. Ayanna Abrams",
    img: imgCalmingMind,
    lessons: 7,
    duration: "1h 30m",
    description: "Evidence-based grounding and breathing techniques adapted for family life.",
  },
  {
    id: 4,
    title: "Approaching Your Child's Anxiety with Care",
    topic: "Anxiety & Depression",
    instructor: "Dr. Kevin Skinner",
    img: imgApproachingAnxiety,
    lessons: 7,
    duration: "1h 55m",
    description: "How to respond — not react — when your child is overwhelmed by worry or fear.",
  },
  {
    id: 5,
    title: "Addiction: Causes, Signs and Recovery",
    topic: "Addiction & Recovery",
    instructor: "Dr. James Berry",
    img: imgAddiction,
    lessons: 9,
    duration: "2h 45m",
    description: "A compassionate guide to understanding addiction and finding a path forward as a family.",
  },
  {
    id: 6,
    title: "Overcoming Addiction as a Family",
    topic: "Addiction & Recovery",
    instructor: "Dr. Kevin Skinner",
    img: imgOvercomingAddiction,
    lessons: 6,
    duration: "1h 50m",
    description: "Rebuild trust and create a recovery-supportive home environment.",
    isNew: true,
  },
  {
    id: 7,
    title: "Ask a Therapist: Common Parent Questions",
    topic: "Ask a Therapist",
    instructor: "Dr. James Berry",
    img: imgAskTherapist,
    lessons: 10,
    duration: "3h 10m",
    description: "Real answers to the questions parents are afraid to ask out loud.",
  },
  {
    id: 8,
    title: "Body Love",
    topic: "Body Image",
    instructor: "Dr. James Berry",
    img: imgBodyLove,
    lessons: 5,
    duration: "1h 10m",
    description: "Help your child develop a healthy, compassionate relationship with their body.",
    isNew: true,
  },
  {
    id: 9,
    title: "Eating Disorders and Disordered Eating",
    topic: "Body Image",
    instructor: "Dr. Ayanna Abrams",
    img: imgEatingDisorders,
    lessons: 7,
    duration: "2h 05m",
    description: "Recognize warning signs and learn how to talk about food and body image with your child.",
  },
  {
    id: 10,
    title: "4 Questions To Free Yourself From Limiting Thoughts",
    topic: "Behavior",
    instructor: "Dr. Kevin Skinner",
    img: "https://images.unsplash.com/photo-1560328055-e938bb2ed50a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=700",
    lessons: 4,
    duration: "55m",
    description: "A powerful thought-work framework that helps parents break reactive patterns.",
    slug: "free-yourself-from-limiting-thoughts",
  },
  {
    id: 11,
    title: "Supporting Your Child Through Bullying",
    topic: "Bullying",
    instructor: "Dr. Ayanna Abrams",
    img: "https://images.unsplash.com/photo-1605814573621-0513c34a0d58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=700",
    lessons: 6,
    duration: "1h 30m",
    description: "What to say, what to do, and how to help your child rebuild confidence.",
  },
  {
    id: 12,
    title: "Understanding Teen Behavior",
    topic: "Child & Teen Development",
    instructor: "Dr. Ayanna Abrams",
    img: "https://images.unsplash.com/photo-1713946598534-a20fd25a4d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=700",
    lessons: 8,
    duration: "2h 20m",
    description: "Decode the adolescent brain and strengthen your relationship with your teenager.",
  },
  {
    id: 13,
    title: "Breaking the Cycle of Trauma",
    topic: "Grief and Loss",
    instructor: "Dr. Kevin Skinner",
    img: "https://images.unsplash.com/photo-1511297968426-a869b61af3da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=700",
    lessons: 9,
    duration: "2h 50m",
    description: "Trauma-informed parenting strategies that help families heal and move forward.",
  },
  {
    id: 14,
    title: "Grief, Loss and Healing",
    topic: "Grief and Loss",
    instructor: "Dr. James Berry",
    img: "https://images.unsplash.com/photo-1624003652795-a9f73df756fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=700",
    lessons: 6,
    duration: "1h 45m",
    description: "Support your child through loss while also caring for your own grief.",
  },
  {
    id: 15,
    title: "Coping, Healing and Finding Peace Through Mindfulness",
    topic: "Meditation & Mindfulness",
    instructor: "Dr. James Berry",
    img: "https://images.unsplash.com/photo-1709125885142-de8f40230c8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=700",
    lessons: 7,
    duration: "2h 00m",
    description: "Family-centered mindfulness practices that reduce stress and improve connection.",
    isNew: true,
  },
  {
    id: 16,
    title: "Emotional Response & Reflection",
    topic: "Parent Support",
    instructor: "Dr. Kevin Skinner",
    img: "https://images.unsplash.com/photo-1560707856-3af2ff5ea652?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=700",
    lessons: 5,
    duration: "1h 25m",
    description: "Learn to pause before reacting and model emotional intelligence for your children.",
  },
  {
    id: 17,
    title: "Building Resilience in Children",
    topic: "Parent Support",
    instructor: "Dr. Kevin Skinner",
    img: "https://images.unsplash.com/photo-1542948843-bf19f4f535cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=700",
    lessons: 6,
    duration: "1h 35m",
    description: "Raise children who bounce back — and parents who model resilience every day.",
  },
  {
    id: 18,
    title: "Beating The Fear That You're Not Enough",
    topic: "Self Help",
    instructor: "Dr. Ayanna Abrams",
    img: "https://images.unsplash.com/photo-1573495804664-b1c0849525af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=700",
    lessons: 5,
    duration: "1h 15m",
    description: "Silence your inner critic and show up for your family from a place of confidence.",
  },
  {
    id: 19,
    title: "Self-Care for Caregivers",
    topic: "Self Help",
    instructor: "Dr. Kevin Skinner",
    img: "https://images.unsplash.com/photo-1709125885142-de8f40230c8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=700",
    lessons: 4,
    duration: "1h 00m",
    description: "You cannot pour from an empty cup. Sustainable wellbeing starts with you.",
    isNew: true,
  },
  {
    id: 20,
    title: "Suicide Prevention Awareness for Parents",
    topic: "Suicide Prevention",
    instructor: "Dr. James Berry",
    img: "https://images.unsplash.com/photo-1604881991720-f91add269bed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=700",
    lessons: 8,
    duration: "2h 30m",
    description: "Know the warning signs, the right words to say, and how to get your child help.",
  },
  {
    id: 21,
    title: "Technology & Screen Time",
    topic: "Technology",
    instructor: "Dr. Kevin Skinner",
    img: "https://images.unsplash.com/photo-1714976694525-71eb29a7c500?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=700",
    lessons: 6,
    duration: "1h 40m",
    description: "Research-backed strategies for healthy technology habits in your household.",
  },
];

/* Only two courses have detail pages so far. The rest open one of them, alternating the full
 * (Milestones) and short (Free Yourself) templates, so every card leads to example content. */
const DETAIL_TEMPLATES = ["milestones-to-progress", "free-yourself-from-limiting-thoughts"];
const detailSlugFor = (course: Course) => course.slug ?? DETAIL_TEMPLATES[COURSES.indexOf(course) % DETAIL_TEMPLATES.length];

const PER_PAGE = 9;

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="bg-pg-cream pt-24 pb-14 px-6 md:px-10 lg:px-14 overflow-hidden">
      <div className="max-w-pg-page mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left */}
        <motion.div
          className="flex flex-col gap-5"
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="text-xs font-semibold uppercase tracking-pg-eyebrow text-pg-teal-dark">
            On-Demand Courses
          </span>
          <h1 className="text-pg-h1 text-pg-navy">
            {"Expert-led courses to help you "}
            <em className="italic text-pg-teal-dark">parent with confidence.</em>
          </h1>
          <p className="text-pg-slate text-base leading-[26px] max-w-[380px]">
            Learn at your own pace from licensed therapists — practical tools for the real challenges families face every day.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <ButtonAnchor href="#courses">
              Browse all courses
            </ButtonAnchor>
            <ButtonLink to="/parent-coaching" variant="secondary">
              Meet the coaches
            </ButtonLink>
          </div>
        </motion.div>

        {/* Right — photo with offset teal block */}
        <motion.div
          className="relative flex justify-center items-center py-4 pr-4 mx-auto w-full max-w-[420px] lg:max-w-none"
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div
            className="absolute bg-pg-sage rounded-pg-md z-0"
            style={{ width: "62%", aspectRatio: "1/1", bottom: 0, right: 0 }}
          />
          <img
            src={imgParentAndChild}
            alt="Parent and child learning together"
            className="relative z-10 rounded-pg-md object-cover object-top shadow-pg-card"
            style={{ width: "65%", aspectRatio: "1/1", marginBottom: "24px", marginRight: "24px" }}
          />
        </motion.div>
      </div>
    </section>
  );
}

function CourseCard({
  course,
  index,
}: {
  course: Course;
  index: number;
}) {
  const navigate = useNavigate();
  const instructorName = course.instructor.replace(/^Dr\.\s*/, "");

  const instructorInitials = instructorName
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        delay: Math.min(index * 0.05, 0.3),
      }}
      className="h-full"
    >
      <UnifiedCard
        image={course.img}
        imageAlt={course.title}
        imageFit="cover"
        badge={course.topic}
        avatar={instructorInitials}
        title={course.title}
        metadata={`${course.duration} • ${course.lessons} lessons`}
        footer={course.instructor}
        buttonLabel="Begin Course"
        onClick={() => navigate(`/courses/${detailSlugFor(course)}`)}
      />
    </motion.div>
  );
}

/* ─── Page ─── */
export default function OnDemandCoursesPage() {
  const [activeTopic, setActiveTopic] = useState<Topic>("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortOption>("featured");
  const [page, setPage] = useState(1);
  const [sortOpen, setSortOpen] = useState(false);
  const topicsRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) setSortOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const filtered = useMemo(() => {
    let result = COURSES;
    if (activeTopic !== "All") result = result.filter(c => c.topic === activeTopic);
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(c =>
        c.title.toLowerCase().includes(q) ||
        c.topic.toLowerCase().includes(q) ||
        c.instructor.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q)
      );
    }
    if (sort === "az") result = [...result].sort((a, b) => a.title.localeCompare(b.title));
    else if (sort === "newest") result = [...result].filter(c => c.isNew).concat(result.filter(c => !c.isNew));
    else result = [...result].sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    return result;
  }, [activeTopic, search, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  function setTopicAndReset(t: Topic) { setActiveTopic(t); setPage(1); }
  function setSearchAndReset(v: string) { setSearch(v); setPage(1); }

  const SORT_LABELS: Record<SortOption, string> = { featured: "Featured", az: "A → Z", newest: "Newest" };

  const countByTopic = useMemo(() => {
    const map: Record<string, number> = { All: COURSES.length };
    COURSES.forEach(c => { map[c.topic] = (map[c.topic] ?? 0) + 1; });
    return map;
  }, []);

  return (
    <div className="bg-pg-tint-soft min-h-screen">
      <Hero />

      {/* ── Sticky filter bar ── */}
      <div className="bg-white border-b border-pg-line sticky top-14 z-30" style={{ boxShadow: "var(--pg-shadow-card)" }}>
        <div className="max-w-pg-page mx-auto px-6 md:px-10 py-3 flex flex-wrap md:flex-nowrap items-center gap-3 md:gap-4">
          {/* Search */}
          <div className="relative min-w-0 flex-1 md:flex-none md:w-64">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-pg-sage" width="14" height="14" viewBox="0 0 16.732 16.732" fill="none">
              <g>
                <path d={svgPaths.p40de600} stroke="currentColor" strokeWidth="1.394" />
                <path d={svgPaths.p3de73700} stroke="currentColor" strokeLinecap="round" strokeWidth="1.394" />
              </g>
            </svg>
            <input
              value={search}
              onChange={e => setSearchAndReset(e.target.value)}
              placeholder="Search courses…"
              className="w-full bg-pg-cream text-sm text-pg-navy placeholder:text-pg-slate pl-9 pr-4 py-2 rounded-pg-md outline-none border border-transparent focus:border-pg-sage focus:bg-white transition-all"
            />
            {search && (
              <button onClick={() => setSearchAndReset("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-pg-slate hover:text-pg-slate">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </button>
            )}
          </div>

          {/* Topic pills — scrollable */}
          <div ref={topicsRef} className="order-last basis-full md:order-none md:basis-auto flex items-center gap-2 overflow-x-auto flex-1 min-w-0 scrollbar-hide py-0.5">
            {TOPICS.map(t => (
              <button
                key={t}
                type="button"
                aria-pressed={activeTopic === t}
                onClick={() => setTopicAndReset(t)}
                className={`shrink-0 text-xs font-medium px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  activeTopic === t ? "bg-pg-navy text-white" : "bg-pg-cream-dark text-pg-slate hover:bg-pg-tint"
                }`}
              >
                {t}
                {t !== "All" && (
                  <span className="ml-1 opacity-60 text-xs">{countByTopic[t] ?? 0}</span>
                )}
              </button>
            ))}
          </div>

          {/* Sort dropdown */}
          <div ref={sortRef} className="relative shrink-0">
            <button
              type="button"
              onClick={() => setSortOpen(v => !v)}
              aria-haspopup="listbox"
              aria-expanded={sortOpen}
              className="inline-flex items-center gap-2 text-xs font-medium text-pg-slate bg-pg-cream-dark px-4 py-2 rounded-pg-md hover:bg-pg-tint transition-colors"
            >
              <ListFilter size={14} aria-hidden="true" />
              {SORT_LABELS[sort]}
              <ChevronDown size={14} aria-hidden="true" className={`transition-transform ${sortOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {sortOpen && (
                <motion.div
                  className="absolute right-0 top-full mt-2 bg-white rounded-pg-md overflow-hidden z-50"
                  style={{ boxShadow: "var(--pg-shadow-card)", minWidth: 140 }}
                  initial={{ opacity: 0, y: -6, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -4, scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                >
                  {(Object.entries(SORT_LABELS) as [SortOption, string][]).map(([k, v]) => (
                    <button
                      key={k}
                      onClick={() => { setSort(k); setSortOpen(false); }}
                      className="w-full text-left px-4 py-2 text-xs transition-colors"
                      style={{
                        background: sort === k ? "var(--pg-tint-soft)" : "white",
                        color: sort === k ? "var(--pg-teal)" : "var(--pg-slate)",
                        fontWeight: sort === k ? 600 : 400,
                      }}
                    >
                      {v}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ── Main content ── */}
      <div id="courses" className="max-w-pg-page mx-auto px-10 py-8">
        {/* Result header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-1 h-5 rounded-full bg-pg-sage" />
            <span className="font-semibold text-pg-navy text-base">
              {activeTopic === "All" ? "All Courses" : activeTopic}
            </span>
            <span className="bg-pg-tint text-pg-teal-dark text-xs font-semibold px-2 py-0.5 rounded-full">
              {filtered.length}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {search && (
              <span className="flex items-center gap-2 bg-pg-cream border border-pg-sage text-pg-teal-dark text-xs px-2 py-1 rounded-full">
                &ldquo;{search}&rdquo;
                <button onClick={() => setSearchAndReset("")} className="hover:text-pg-navy">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </button>
              </span>
            )}
            {activeTopic !== "All" && (
              <button onClick={() => setTopicAndReset("All")} className="text-xs text-pg-slate hover:text-pg-slate transition-colors">
                Clear filters
              </button>
            )}
          </div>
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeTopic}-${search}-${sort}-${page}`}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 max-w-pg-content mx-auto"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            {paginated.length === 0 ? (
              <div className="col-span-3 flex flex-col items-center justify-center py-24 gap-3">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-pg-mist">
                  <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <p className="text-pg-slate text-sm">No courses found.</p>
                <button onClick={() => { setSearchAndReset(""); setTopicAndReset("All"); }} className="text-xs text-pg-teal-dark underline">Clear all filters</button>
              </div>
            ) : (
              paginated.map((course, i) => <CourseCard key={course.id} course={course} index={i} />)
            )}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 pt-10">
            <Button variant="secondary" size="s" onClick={() => { setPage(p => Math.max(1, p - 1)); window.scrollTo({ top: 0, behavior: scrollBehavior() }); }} disabled={page === 1} className="whitespace-nowrap">
              ← Prev
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
              <button
                key={p}
                onClick={() => { setPage(p); window.scrollTo({ top: 0, behavior: scrollBehavior() }); }}
                className="text-sm font-medium w-[43px] h-[43px] rounded-pg-md flex items-center justify-center transition-all"
                style={{
                  background: page === p ? "var(--pg-teal)" : "white",
                  color: page === p ? "var(--pg-white)" : "var(--pg-slate)",
                  boxShadow: page === p ? "none" : "var(--pg-shadow-card)",
                }}
              >
                {p}
              </button>
            ))}
            <Button variant="secondary" size="s" onClick={() => { setPage(p => Math.min(totalPages, p + 1)); window.scrollTo({ top: 0, behavior: scrollBehavior() }); }} disabled={page === totalPages} className="whitespace-nowrap">
              Next →
            </Button>
          </div>
        )}
      </div>

      {/* ── Bottom CTA ── */}
      <div className="max-w-pg-page mx-auto px-10 pb-14">
        <div className="relative rounded-pg-md overflow-hidden" style={{ height: "248px" }}>
          {/* Background image */}
          <div className="absolute inset-0 rounded-pg-md overflow-hidden">
            <img
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: "center 30%" }}
              src={imgContainer}
            />
          </div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 rounded-pg-md bg-gradient-to-r from-pg-navy/90 via-pg-navy/70 to-pg-navy/0" />
          {/* Content */}
          <div className="relative z-10 h-full flex items-center px-14">
            <div className="flex flex-col gap-2 max-w-lg">
              <h3 className="font-bold text-white text-xl">Looking for additional help?</h3>
              <p className="text-pg-sage text-sm leading-relaxed">
                {"Our expert coaches work one-on-one with you. "}
                <span className="font-semibold text-white">{"Services may be free through your child's school district."}</span>
              </p>
              <div className="mt-2">
                <ButtonLink to="/parent-coaching" variant="inverse">
                  Get Started
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
