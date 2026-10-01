import { useState } from "react";
import { Link } from "react-router";
import { ButtonLink } from "./components/Button";
import { motion } from "motion/react";
import { ChevronRight, Clock, Play } from "./components/icons";

const COURSE_SLUG = "free-yourself-from-limiting-thoughts";

const LESSONS = [
  { id: 1, title: "The 4 Questions" },
  { id: 2, title: "What's The Goal?" },
  { id: 3, title: "Negating Negative Thoughts" },
  { id: 4, title: "Strengthening Positive Thoughts" },
];

const RECOMMENDATIONS = [
  {
    id: 1,
    title: "Building Emotional Resilience",
    lessons: 5,
    duration: "35 min",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=240&h=160&q=80",
  },
  {
    id: 2,
    title: "Managing Stress Together",
    lessons: 6,
    duration: "40 min",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=240&h=160&q=80",
  },
  {
    id: 3,
    title: "Growing Gratitude as a Family",
    lessons: 4,
    duration: "25 min",
    img: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=240&h=160&q=80",
  },
];

const COURSE_TITLE = "4 Questions To Free Yourself From Limiting Thoughts";

export default function CourseDetailPage() {
  const [activeLesson, setActiveLesson] = useState(1);
  const currentLesson = LESSONS.find((l) => l.id === activeLesson)!;

  return (
    <div className="bg-pg-cream min-h-screen">

      {/* ── Breadcrumb bar ── */}
      <div className="bg-pg-tint-soft border-b border-pg-line pt-14">
        <div className="max-w-pg-page mx-auto px-6 h-10 flex items-center gap-2">
          <Link
            to="/on-demand-courses"
            className="text-xs text-pg-teal-dark hover:text-pg-navy no-underline transition-colors shrink-0"
          >
            ← Back to courses
          </Link>
          <ChevronRight size={13} className="text-pg-slate shrink-0" />
          <Link
            to="/on-demand-courses"
            className="text-xs text-pg-teal-dark hover:text-pg-navy no-underline transition-colors truncate"
          >
            {COURSE_TITLE}
          </Link>
          <ChevronRight size={13} className="text-pg-slate shrink-0" />
          <span className="text-xs font-semibold text-pg-navy shrink-0">
            {currentLesson.title}
          </span>
        </div>
      </div>

      {/* ── Page body ── */}
      <div className="max-w-pg-content mx-auto px-6 pt-8 pb-6">

        {/* ── Main course card ── */}
        <motion.div
          className="bg-white rounded-pg-xl overflow-hidden mb-4"
          style={{ boxShadow: "var(--pg-shadow-card)", border: "1px solid var(--pg-line)" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="flex flex-col lg:flex-row">

            {/* Left — image */}
            <div className="p-5 shrink-0">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=560&h=680&q=80"
                alt="Child with glasses using laptop"
                className="rounded-pg-md object-cover w-full lg:w-[260px]"
                style={{ height: "320px" }}
              />
            </div>

            {/* Center — course info */}
            <div className="flex-1 p-6 flex flex-col gap-4 lg:border-r border-pg-line">
              <span className="self-start font-semibold text-[11px] uppercase tracking-[1.4px] text-pg-teal-dark bg-pg-tint border border-pg-sage/40 px-3 py-1 rounded-pg-sm">
                Self-Guided Course
              </span>

              <h1 className="font-bold text-pg-navy text-[24px] leading-[1.25]">
                {COURSE_TITLE}
              </h1>

              <p className="text-pg-slate text-sm leading-relaxed">
                Learn how to challenge limiting beliefs and build a more positive mindset.
                Brett Williams, therapist, author, and happiness researcher teaches practical
                tools to help you create lasting change.
              </p>

              <div className="flex items-center gap-2 text-pg-slate">
                <Clock size={13} className="text-pg-sage" />
                <span className="text-sm">4 lessons</span>
                <span className="text-pg-mist" aria-hidden="true">•</span>
                <span className="text-sm">Approx. 30 min</span>
              </div>

              <div className="flex items-center gap-2.5">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=80&h=80&q=80"
                  alt="Brett Williams"
                  className="w-9 h-9 rounded-full object-cover shrink-0"
                />
                <span className="font-semibold text-pg-navy text-sm">
                  Brett Williams, LMFT
                </span>
              </div>

              <ButtonLink to={`/courses/${COURSE_SLUG}/lesson/1`} className="self-start mt-auto">
                Start course
                <ChevronRight size={16} aria-hidden="true" />
              </ButtonLink>
            </div>

            {/* Right — course outline */}
            <div className="w-full lg:w-[260px] shrink-0 p-6 flex flex-col gap-4">
              <h2 className="font-bold text-pg-navy text-base">
                Course outline
              </h2>

              <div className="flex flex-col gap-1.5">
                <p className="text-pg-slate text-xs">
                  0 of 4 lessons completed
                </p>
                <div className="h-1.5 bg-pg-line rounded-full overflow-hidden">
                  <div className="h-full bg-pg-teal rounded-full" style={{ width: "0%" }} />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                {LESSONS.map((lesson) => {
                  const isActive = activeLesson === lesson.id;
                  return (
                    <Link
                      key={lesson.id}
                      to={`/courses/${COURSE_SLUG}/lesson/${lesson.id}`}
                      className="no-underline block"
                      style={{ color: "inherit" }}
                    >
                    <motion.div
                      className={`flex items-center gap-3 text-left w-full px-3 py-2.5 rounded-pg-md border transition-colors ${
                        isActive
                          ? "border-pg-teal bg-pg-tint"
                          : "border-pg-line bg-white hover:border-pg-sage hover:bg-pg-cream"
                      }`}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                          isActive ? "bg-pg-navy text-white" : "bg-pg-cream-dark text-pg-slate"
                        }`}
                      >
                        {lesson.id}
                      </span>
                      <span
                        className={`text-xs flex-1 leading-snug ${
                          isActive ? "font-semibold text-pg-navy" : "text-pg-slate"
                        }`}
                      >
                        {lesson.title}
                      </span>
                      {isActive && (
                        <Play size={11} className="text-pg-teal shrink-0" fill="#59797D" />
                      )}
                    </motion.div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── About this course ── */}
        <motion.div
          className="bg-white rounded-pg-xl p-8 mb-4"
          style={{ boxShadow: "var(--pg-shadow-card)", border: "1px solid var(--pg-line)" }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="font-bold text-pg-navy text-xl mb-3">
            About this course
          </h2>
          <p className="text-pg-slate text-sm leading-relaxed">
            What is happiness? What negative thoughts are holding you back? How do you change your
            negative thoughts and perspective? Join Brett Williams, therapist, author, and happiness
            researcher as he teaches how to achieve change and develop habits that will lead to
            everyday happiness.
          </p>
        </motion.div>

        {/* ── You may also like ── */}
        <motion.div
          className="bg-white rounded-pg-xl p-8 mb-8"
          style={{ boxShadow: "var(--pg-shadow-card)", border: "1px solid var(--pg-line)" }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="font-bold text-pg-navy text-xl mb-5">
            You may also like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {RECOMMENDATIONS.map((rec, i) => (
              <motion.div
                key={rec.id}
                className="flex gap-3 p-3 rounded-pg-lg border border-pg-line cursor-pointer hover:border-pg-sage transition-colors"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.07, duration: 0.35 }}
                whileHover={{ y: -2, boxShadow: "var(--pg-shadow-card-hover)" }}
              >
                <img
                  src={rec.img}
                  alt={rec.title}
                  className="w-[80px] h-[64px] rounded-pg-md object-cover shrink-0"
                />
                <div className="flex flex-col justify-center gap-1">
                  <p className="font-semibold text-pg-navy text-xs leading-snug">
                    {rec.title}
                  </p>
                  <p className="text-pg-slate text-xs">
                    {rec.lessons} lessons &nbsp;•&nbsp; {rec.duration}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

    </div>
  );
}
