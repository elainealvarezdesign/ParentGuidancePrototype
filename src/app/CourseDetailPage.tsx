import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { ChevronRight, Clock, Play } from "lucide-react";

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
    <div className="bg-[#F9F4F1] min-h-screen">

      {/* ── Breadcrumb bar ── */}
      <div className="bg-[#EEF0F0] border-b border-[#DDE0E0] pt-14">
        <div className="max-w-[1280px] mx-auto px-6 h-10 flex items-center gap-2">
          <Link
            to="/on-demand-courses"
            className="font-['Poppins',sans-serif] text-xs text-[#406064] hover:text-[#1c3243] no-underline transition-colors shrink-0"
          >
            ← Back to courses
          </Link>
          <ChevronRight size={13} className="text-[#435766] shrink-0" />
          <Link
            to="/on-demand-courses"
            className="font-['Poppins',sans-serif] text-xs text-[#406064] hover:text-[#1c3243] no-underline transition-colors truncate"
          >
            {COURSE_TITLE}
          </Link>
          <ChevronRight size={13} className="text-[#435766] shrink-0" />
          <span className="font-['Poppins',sans-serif] text-xs font-semibold text-[#1C3243] shrink-0">
            {currentLesson.title}
          </span>
        </div>
      </div>

      {/* ── Page body ── */}
      <div className="max-w-[1100px] mx-auto px-6 pt-8 pb-6">

        {/* ── Main course card ── */}
        <motion.div
          className="bg-white rounded-[16px] overflow-hidden mb-4"
          style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.07)", border: "1px solid #dee8e9" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="flex flex-col lg:flex-row">

            {/* Left — image */}
            <div className="p-5 shrink-0">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=560&h=680&q=80"
                alt="Child with glasses using laptop"
                className="rounded-[8px] object-cover w-full lg:w-[260px]"
                style={{ height: "320px" }}
              />
            </div>

            {/* Center — course info */}
            <div className="flex-1 p-6 flex flex-col gap-4 lg:border-r border-[#dee8e9]">
              <span className="self-start font-['Poppins',sans-serif] font-semibold text-[11px] uppercase tracking-[1.4px] text-[#406064] bg-[#EAF1F1] border border-[#90B3B6]/40 px-3 py-1 rounded-[4px]">
                Self-Guided Course
              </span>

              <h1 className="font-['Poppins',sans-serif] font-bold text-[#1C3243] text-[24px] leading-[1.25]">
                {COURSE_TITLE}
              </h1>

              <p className="font-['Poppins',sans-serif] text-[#435766] text-sm leading-relaxed">
                Learn how to challenge limiting beliefs and build a more positive mindset.
                Brett Williams, therapist, author, and happiness researcher teaches practical
                tools to help you create lasting change.
              </p>

              <div className="flex items-center gap-2 text-[#435766]">
                <Clock size={13} className="text-[#90B3B6]" />
                <span className="font-['Poppins',sans-serif] text-sm">4 lessons</span>
                <span className="text-[#D0CBCA]">•</span>
                <span className="font-['Poppins',sans-serif] text-sm">Approx. 30 min</span>
              </div>

              <div className="flex items-center gap-2.5">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=80&h=80&q=80"
                  alt="Brett Williams"
                  className="w-9 h-9 rounded-full object-cover shrink-0"
                />
                <span className="font-['Poppins',sans-serif] font-semibold text-[#1C3243] text-sm">
                  Brett Williams, LMFT
                </span>
              </div>

              <Link
                to={`/courses/${COURSE_SLUG}/lesson/1`}
                className="self-start no-underline mt-auto"
              >
                <motion.div
                  className="flex items-center gap-2 font-['Poppins',sans-serif] font-semibold text-sm text-white bg-[#59797D] px-6 py-3 rounded-[8px] min-h-[44px]"
                  whileHover={{ backgroundColor: "#406064" }}
                  whileTap={{ scale: 0.97 }}
                >
                  Start course
                  <ChevronRight size={15} />
                </motion.div>
              </Link>
            </div>

            {/* Right — course outline */}
            <div className="w-full lg:w-[260px] shrink-0 p-6 flex flex-col gap-4">
              <h2 className="font-['Poppins',sans-serif] font-bold text-[#1C3243] text-base">
                Course outline
              </h2>

              <div className="flex flex-col gap-1.5">
                <p className="font-['Poppins',sans-serif] text-[#435766] text-xs">
                  0 of 4 lessons completed
                </p>
                <div className="h-1.5 bg-[#dee8e9] rounded-full overflow-hidden">
                  <div className="h-full bg-[#59797D] rounded-full" style={{ width: "0%" }} />
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
                      className={`flex items-center gap-3 text-left w-full px-3 py-2.5 rounded-[8px] border transition-colors ${
                        isActive
                          ? "border-[#59797D] bg-[#EAF1F1]"
                          : "border-[#dee8e9] bg-white hover:border-[#90B3B6] hover:bg-[#F9F4F1]"
                      }`}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                          isActive ? "bg-[#1C3243] text-white" : "bg-[#F0EDEB] text-[#435766]"
                        }`}
                      >
                        {lesson.id}
                      </span>
                      <span
                        className={`font-['Poppins',sans-serif] text-xs flex-1 leading-snug ${
                          isActive ? "font-semibold text-[#1C3243]" : "text-[#435766]"
                        }`}
                      >
                        {lesson.title}
                      </span>
                      {isActive && (
                        <Play size={11} className="text-[#59797D] shrink-0" fill="#59797D" />
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
          className="bg-white rounded-[16px] p-8 mb-4"
          style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.07)", border: "1px solid #dee8e9" }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="font-['Poppins',sans-serif] font-bold text-[#1C3243] text-lg mb-3">
            About this course
          </h2>
          <p className="font-['Poppins',sans-serif] text-[#435766] text-sm leading-relaxed">
            What is happiness? What negative thoughts are holding you back? How do you change your
            negative thoughts and perspective? Join Brett Williams, therapist, author, and happiness
            researcher as he teaches how to achieve change and develop habits that will lead to
            everyday happiness.
          </p>
        </motion.div>

        {/* ── You may also like ── */}
        <motion.div
          className="bg-white rounded-[16px] p-8 mb-8"
          style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.07)", border: "1px solid #dee8e9" }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="font-['Poppins',sans-serif] font-bold text-[#1C3243] text-lg mb-5">
            You may also like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {RECOMMENDATIONS.map((rec, i) => (
              <motion.div
                key={rec.id}
                className="flex gap-3 p-3 rounded-[12px] border border-[#dee8e9] cursor-pointer hover:border-[#90B3B6] transition-colors"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.07, duration: 0.4 }}
                whileHover={{ y: -2, boxShadow: "0 6px 20px rgba(34,49,67,0.08)" }}
              >
                <img
                  src={rec.img}
                  alt={rec.title}
                  className="w-[80px] h-[64px] rounded-[8px] object-cover shrink-0"
                />
                <div className="flex flex-col justify-center gap-1">
                  <p className="font-['Poppins',sans-serif] font-semibold text-[#1C3243] text-xs leading-snug">
                    {rec.title}
                  </p>
                  <p className="font-['Poppins',sans-serif] text-[#435766] text-xs">
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
