import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  Play, Pause, Volume2, Maximize2, Settings, Captions,
  ChevronRight, ChevronLeft, CheckCircle2, Circle, BookOpen, FileText, Paperclip,
} from "lucide-react";

const COURSE_SLUG = "free-yourself-from-limiting-thoughts";
const COURSE_TITLE = "4 Questions To Free Yourself From Limiting Thoughts";

const LESSONS = [
  {
    id: 1,
    title: "The 4 Questions",
    duration: "11:19",
    description:
      "Brett Williams introduces the 4 powerful questions that help you identify and challenge limiting thoughts. You'll learn the core framework that guides the entire course and understand why our thought patterns keep us stuck.",
    takeaways: [
      "How limiting beliefs silently shape your behavior",
      "The 4-question framework for examining any thought",
      "Why traditional positive thinking often fails",
      "Your first practical exercise for this week",
    ],
  },
  {
    id: 2,
    title: "What's The Goal?",
    duration: "8:45",
    description:
      "Clarity on what you truly want is the foundation of change. In this lesson you'll define your personal vision and learn how misaligned goals keep limiting beliefs in place.",
    takeaways: [
      "Distinguishing between surface goals and core desires",
      "The role of values in setting meaningful goals",
      "How to write a goal statement that motivates change",
      "Worksheet: My Core Goal exercise",
    ],
  },
  {
    id: 3,
    title: "Negating Negative Thoughts",
    duration: "7:32",
    description:
      "Learn the evidence-based techniques Brett uses with clients to weaken the grip of negative self-talk. You'll practice flipping automatic thoughts in real time.",
    takeaways: [
      "The cognitive reframing method explained simply",
      "Spotting cognitive distortions in your own thinking",
      "3 quick techniques you can use immediately",
      "How to build a personal thought journal",
    ],
  },
  {
    id: 4,
    title: "Strengthening Positive Thoughts",
    duration: "9:54",
    description:
      "Change is only lasting when you actively reinforce new patterns. This final lesson gives you a daily practice and accountability system to embed what you've learned.",
    takeaways: [
      "The neuroscience of habit formation in simple terms",
      "Building a 5-minute daily mindset routine",
      "How to track progress without self-judgment",
      "Celebrating small wins to sustain momentum",
    ],
  },
];

const TABS = ["Overview", "Key Takeaways", "Resources"] as const;
type Tab = (typeof TABS)[number];

const RESOURCES = [
  { label: "The 4 Questions Worksheet", type: "PDF" },
  { label: "Cognitive Reframing Guide", type: "PDF" },
  { label: "Recommended Reading List", type: "Link" },
];

export default function LessonPage() {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();

  const id = parseInt(lessonId ?? "1", 10);
  const lesson = LESSONS.find((l) => l.id === id) ?? LESSONS[0];
  const prevLesson = LESSONS.find((l) => l.id === id - 1);
  const nextLesson = LESSONS.find((l) => l.id === id + 1);

  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeTab, setActiveTab] = useState<Tab>("Overview");
  const [completed, setCompleted] = useState<Set<number>>(new Set());

  function markComplete() {
    setCompleted((prev) => new Set([...prev, lesson.id]));
  }

  function goToLesson(lessonId: number) {
    navigate(`/courses/${COURSE_SLUG}/lesson/${lessonId}`);
  }

  return (
    <div className="bg-[#F9F4F1] min-h-screen flex flex-col">

      {/* ── Breadcrumb bar ── */}
      <div className="bg-[#EEF0F0] border-b border-[#DDE0E0] pt-14 shrink-0">
        <div className="max-w-[1280px] mx-auto px-6 h-10 flex items-center gap-2">
          <Link
            to="/on-demand-courses"
            className="font-['Poppins',sans-serif] text-xs text-[#406064] hover:text-[#1c3243] no-underline transition-colors shrink-0"
          >
            ← Back to courses
          </Link>
          <ChevronRight size={13} className="text-[#435766] shrink-0" />
          <Link
            to={`/courses/${COURSE_SLUG}`}
            className="font-['Poppins',sans-serif] text-xs text-[#406064] hover:text-[#1c3243] no-underline transition-colors truncate"
          >
            {COURSE_TITLE}
          </Link>
          <ChevronRight size={13} className="text-[#435766] shrink-0" />
          <span className="font-['Poppins',sans-serif] text-xs font-semibold text-[#1C3243] shrink-0">
            {lesson.title}
          </span>
        </div>
      </div>

      {/* ── Main two-column layout ── */}
      <div className="flex-1 max-w-[1280px] mx-auto w-full px-6 py-6 flex gap-6">

        {/* ── Left: video + content ── */}
        <div className="flex-1 flex flex-col gap-4 min-w-0">

          {/* Lesson header */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-['Poppins',sans-serif] font-semibold text-[11px] uppercase tracking-[1.4px] text-[#406064] bg-[#EAF1F1] px-2.5 py-0.5 rounded-[4px]">
                  Lesson {lesson.id} of {LESSONS.length}
                </span>
                <span className="font-['Poppins',sans-serif] text-xs text-[#435766]">
                  {lesson.duration}
                </span>
              </div>
              <h1 className="font-['Poppins',sans-serif] font-bold text-[#1C3243] text-xl leading-tight">
                {lesson.title}
              </h1>
            </div>

            {/* Mark complete */}
            <motion.button
              onClick={markComplete}
              className={`shrink-0 flex items-center gap-1.5 font-['Poppins',sans-serif] text-xs font-semibold px-3 py-2 rounded-[8px] border transition-colors ${
                completed.has(lesson.id)
                  ? "bg-[#EAF1F1] border-[#59797D] text-[#59797D]"
                  : "bg-white border-[#dee8e9] text-[#435766] hover:border-[#59797D] hover:text-[#59797D]"
              }`}
              whileTap={{ scale: 0.96 }}
            >
              {completed.has(lesson.id) ? (
                <CheckCircle2 size={13} />
              ) : (
                <Circle size={13} />
              )}
              {completed.has(lesson.id) ? "Completed" : "Mark complete"}
            </motion.button>
          </div>

          {/* ── Video player ── */}
          <div
            className="relative w-full rounded-[12px] overflow-hidden bg-[#0d1b2a] cursor-pointer select-none"
            style={{ aspectRatio: "16/9" }}
            onClick={() => {
              setPlaying((p) => !p);
              if (!playing) setProgress((p) => Math.min(p + 5, 100));
            }}
          >
            {/* Thumbnail */}
            <img
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1280&h=720&q=80"
              alt="Lesson video thumbnail"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${playing ? "opacity-60" : "opacity-80"}`}
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* Duration badge */}
            <div className="absolute top-3 left-3 bg-black/60 text-white font-['Poppins',sans-serif] text-xs font-semibold px-2 py-0.5 rounded">
              {lesson.duration}
            </div>

            {/* Center play/pause button */}
            <AnimatePresence mode="wait">
              <motion.div
                key={playing ? "pause" : "play"}
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.15 }}
              >
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                  {playing ? (
                    <Pause size={26} className="text-white" fill="white" />
                  ) : (
                    <Play size={26} className="text-white ml-1" fill="white" />
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom controls bar */}
            <div className="absolute bottom-0 left-0 right-0 px-4 pb-3 pt-8 bg-gradient-to-t from-black/80 to-transparent">
              {/* Progress bar */}
              <div
                className="w-full h-1 bg-white/30 rounded-full mb-3 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  const rect = e.currentTarget.getBoundingClientRect();
                  setProgress(Math.round(((e.clientX - rect.left) / rect.width) * 100));
                }}
              >
                <div
                  className="h-full bg-[#C8893A] rounded-full relative"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#C8893A] rounded-full shadow" />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    className="text-white/80 hover:text-white transition-colors"
                    onClick={(e) => { e.stopPropagation(); setPlaying((p) => !p); }}
                  >
                    {playing ? <Pause size={16} fill="white" /> : <Play size={16} className="ml-0.5" fill="white" />}
                  </button>
                  <span className="font-['Poppins',sans-serif] text-white/80 text-xs">
                    {Math.floor((parseInt(lesson.duration.split(":")[0]) * 60 + parseInt(lesson.duration.split(":")[1])) * progress / 100 / 60).toString().padStart(2, "0")}:
                    {Math.floor((parseInt(lesson.duration.split(":")[0]) * 60 + parseInt(lesson.duration.split(":")[1])) * progress / 100 % 60).toString().padStart(2, "0")}
                    {" / "}
                    {lesson.duration}
                  </span>
                  <Volume2 size={15} className="text-white/60 hover:text-white cursor-pointer transition-colors" onClick={(e) => e.stopPropagation()} />
                </div>
                <div className="flex items-center gap-3">
                  <Captions size={15} className="text-white/60 hover:text-white cursor-pointer transition-colors" onClick={(e) => e.stopPropagation()} />
                  <Settings size={15} className="text-white/60 hover:text-white cursor-pointer transition-colors" onClick={(e) => e.stopPropagation()} />
                  <Maximize2 size={15} className="text-white/60 hover:text-white cursor-pointer transition-colors" onClick={(e) => e.stopPropagation()} />
                </div>
              </div>
            </div>
          </div>

          {/* ── Content tabs ── */}
          <div className="bg-white rounded-[16px] border border-[#dee8e9] overflow-hidden" style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
            {/* Tab bar */}
            <div className="flex border-b border-[#dee8e9]">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex items-center gap-1.5 px-5 py-3.5 font-['Poppins',sans-serif] text-xs font-semibold transition-colors border-b-2 ${
                    activeTab === tab
                      ? "border-[#59797D] text-[#59797D]"
                      : "border-transparent text-[#435766] hover:text-[#1C3243]"
                  }`}
                >
                  {tab === "Overview" && <BookOpen size={12} />}
                  {tab === "Key Takeaways" && <CheckCircle2 size={12} />}
                  {tab === "Resources" && <Paperclip size={12} />}
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="p-6">
              <AnimatePresence mode="wait">
                {activeTab === "Overview" && (
                  <motion.p
                    key="overview"
                    className="font-['Poppins',sans-serif] text-[#435766] text-sm leading-relaxed"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {lesson.description}
                  </motion.p>
                )}
                {activeTab === "Key Takeaways" && (
                  <motion.ul
                    key="takeaways"
                    className="flex flex-col gap-3"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {lesson.takeaways.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 size={14} className="text-[#59797D] shrink-0 mt-0.5" />
                        <span className="font-['Poppins',sans-serif] text-[#1C3243] text-sm leading-snug">{item}</span>
                      </li>
                    ))}
                  </motion.ul>
                )}
                {activeTab === "Resources" && (
                  <motion.div
                    key="resources"
                    className="flex flex-col gap-3"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {RESOURCES.map((r, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-[8px] border border-[#dee8e9] hover:border-[#90B3B6] transition-colors cursor-pointer">
                        <div className="flex items-center gap-2.5">
                          <FileText size={14} className="text-[#90B3B6]" />
                          <span className="font-['Poppins',sans-serif] text-sm text-[#1C3243]">{r.label}</span>
                        </div>
                        <span className="font-['Poppins',sans-serif] text-xs font-semibold text-[#59797D] bg-[#EAF1F1] px-2 py-0.5 rounded-full">
                          {r.type}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ── Right sidebar: course outline ── */}
        <div className="w-[280px] shrink-0 flex flex-col gap-4">
          <div className="bg-white rounded-[16px] border border-[#dee8e9] overflow-hidden sticky top-20" style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
            <div className="p-4 border-b border-[#dee8e9]">
              <p className="font-['Poppins',sans-serif] font-bold text-[#1C3243] text-sm">Course outline</p>
              <div className="mt-2 flex items-center gap-2">
                <div className="flex-1 h-1.5 bg-[#dee8e9] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#59797D] rounded-full transition-all duration-500"
                    style={{ width: `${(completed.size / LESSONS.length) * 100}%` }}
                  />
                </div>
                <span className="font-['Poppins',sans-serif] text-xs text-[#435766] shrink-0">
                  {completed.size}/{LESSONS.length}
                </span>
              </div>
            </div>

            <div className="flex flex-col divide-y divide-[#F5F5F5]">
              {LESSONS.map((l) => {
                const isActive = l.id === lesson.id;
                const isDone = completed.has(l.id);
                return (
                  <motion.button
                    key={l.id}
                    onClick={() => goToLesson(l.id)}
                    className={`flex items-center gap-3 px-4 py-3 text-left w-full transition-colors ${
                      isActive ? "bg-[#EAF1F1]" : "hover:bg-[#F9F4F1]"
                    }`}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                      isDone
                        ? "bg-[#59797D] text-white"
                        : isActive
                        ? "bg-[#1C3243] text-white"
                        : "bg-[#F0EDEB] text-[#435766]"
                    }`}>
                      {isDone ? <CheckCircle2 size={13} /> : l.id}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className={`font-['Poppins',sans-serif] text-xs leading-snug truncate ${
                        isActive ? "font-semibold text-[#1C3243]" : "text-[#435766]"
                      }`}>
                        {l.title}
                      </p>
                      <p className="font-['Poppins',sans-serif] text-xs text-[#435766] mt-0.5">{l.duration}</p>
                    </div>
                    {isActive && <Play size={10} fill="#59797D" className="text-[#59797D] shrink-0" />}
                  </motion.button>
                );
              })}
            </div>

            <div className="p-4 border-t border-[#dee8e9]">
              <Link
                to={`/courses/${COURSE_SLUG}`}
                className="font-['Poppins',sans-serif] text-xs text-[#59797D] hover:text-[#406064] no-underline transition-colors flex items-center gap-1"
              >
                <ChevronLeft size={13} />
                Course overview
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom navigation bar ── */}
      <div className="border-t border-[#dee8e9] bg-white shrink-0">
        <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
          {/* Previous / Back */}
          {prevLesson ? (
            <motion.button
              onClick={() => goToLesson(prevLesson.id)}
              className="flex items-center gap-1.5 font-['Poppins',sans-serif] font-medium text-sm text-[#59797D] hover:text-[#406064] transition-colors"
              whileTap={{ scale: 0.97 }}
            >
              <ChevronLeft size={15} />
              {prevLesson.title}
            </motion.button>
          ) : (
            <Link
              to={`/courses/${COURSE_SLUG}`}
              className="font-['Poppins',sans-serif] text-sm text-[#59797D] hover:text-[#406064] no-underline transition-colors"
            >
              Back to Course
            </Link>
          )}

          {/* Lesson indicator dots */}
          <div className="flex items-center gap-1.5">
            {LESSONS.map((l) => (
              <button
                key={l.id}
                onClick={() => goToLesson(l.id)}
                className={`rounded-full transition-all duration-200 ${
                  l.id === lesson.id
                    ? "w-5 h-2 bg-[#1C3243]"
                    : completed.has(l.id)
                    ? "w-2 h-2 bg-[#59797D]"
                    : "w-2 h-2 bg-[#D0CBCA] hover:bg-[#90B3B6]"
                }`}
              />
            ))}
          </div>

          {/* Next Lesson */}
          {nextLesson ? (
            <motion.button
              onClick={() => goToLesson(nextLesson.id)}
              className="flex items-center gap-2 font-['Poppins',sans-serif] font-semibold text-sm text-white px-5 py-2.5 rounded-full"
              style={{ backgroundColor: "#59797D" }}
              whileHover={{ backgroundColor: "#406064" }}
              whileTap={{ scale: 0.97 }}
            >
              Next Lesson
              <ChevronRight size={15} />
            </motion.button>
          ) : (
            <motion.button
              onClick={() => {
                markComplete();
                navigate(`/courses/${COURSE_SLUG}`);
              }}
              className="flex items-center gap-2 font-['Poppins',sans-serif] font-semibold text-sm text-white px-5 py-2.5 rounded-full"
              style={{ backgroundColor: "#59797D" }}
              whileHover={{ backgroundColor: "#406064" }}
              whileTap={{ scale: 0.97 }}
            >
              Finish Course
              <CheckCircle2 size={15} />
            </motion.button>
          )}
        </div>
      </div>

    </div>
  );
}
