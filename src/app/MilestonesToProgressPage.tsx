import { useState } from "react";
import { Link } from "react-router";
import { ButtonLink } from "./components/Button";
import { motion } from "motion/react";
import { ChevronRight, ChevronLeft, Clock, Play } from "lucide-react";

const COURSE_SLUG = "milestones-to-progress";
const COURSE_TITLE = "Milestones to Progress: Guiding your child from birth through the early school years";

const INSTRUCTORS = [
  {
    name: "Dr. Kevin Skinner",
    credential: "Clinical Director, LMFT",
    initials: "KS",
    bio: "Therapist, author, and happiness researcher with over 20 years of clinical experience working with families.",
  },
  {
    name: "Max Dahmen",
    credential: "LCSW, Licensed Clinical Social Worker",
    initials: "MD",
    bio: "Licensed therapist who brings clinical concepts to life through real-world family scenarios and a parent's perspective.",
  },
  {
    name: "Robbie Kinghorn",
    credential: "School Principal & Family Advocate",
    initials: "RK",
    bio: "Longtime school principal who helps families and schools work together to support every child's growth.",
  },
];

type Lesson = { id: number; title: string; duration: string };
type Module = { title: string; lessons: Lesson[] };

const MODULES: Module[] = [
  {
    title: "The Milestones: The Science of Growing Minds with Dr. Kevin Skinner",
    lessons: [
      { id: 1,  title: "Introduction to Milestones to Progress",     duration: "4:12" },
      { id: 2,  title: "Building Secure Attachments",                duration: "6:45" },
      { id: 3,  title: "Sensory & Motor Development",                duration: "5:30" },
      { id: 4,  title: "Independence & Responsibility",              duration: "7:02" },
      { id: 5,  title: "Conflict Resolution",                        duration: "6:18" },
      { id: 6,  title: "Emotional Awareness & Regulation",           duration: "8:05" },
      { id: 7,  title: "Early Communication Skills",                 duration: "5:48" },
      { id: 8,  title: "Early Socialization",                        duration: "6:33" },
    ],
  },
  {
    title: "The Moments: Real-Life Scenarios – a Clinical Lens with Max Dahmen, LCSW",
    lessons: [
      { id: 9,  title: "Working with Teachers",                      duration: "5:14" },
      { id: 10, title: "Defiant Child",                              duration: "7:22" },
      { id: 11, title: "Toilet Training Regression",                 duration: "4:55" },
      { id: 12, title: "Peer-to-Peer Playtime",                      duration: "6:10" },
      { id: 13, title: "Acting Out in Class",                        duration: "7:38" },
      { id: 14, title: "A Development Detour",                       duration: "8:15" },
      { id: 15, title: "Missed Milestones",                          duration: "6:50" },
    ],
  },
  {
    title: "The Mentors: Supporting Your Child at School with Robbie Kinghorn",
    lessons: [
      { id: 16, title: "Behaviors Are Communication",                duration: "5:40" },
      { id: 17, title: "Big Question – Behaviors are Communication", duration: "4:28" },
      { id: 18, title: "Emotional Development",                      duration: "6:55" },
      { id: 19, title: "Big Question – Emotional Development",       duration: "4:12" },
      { id: 20, title: "Connections vs. Corrections",                duration: "7:30" },
    ],
  },
];

const ALL_LESSONS = MODULES.flatMap(m => m.lessons);
const TOTAL_LESSONS = ALL_LESSONS.length;
const LESSONS_PER_PAGE = 8;

const RECOMMENDATIONS = [
  {
    title: "4 Questions To Free Yourself From Limiting Thoughts",
    lessons: 4,
    duration: "55m",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=240&h=160&q=80",
    slug: "free-yourself-from-limiting-thoughts",
  },
  {
    title: "Building Emotional Resilience",
    lessons: 5,
    duration: "35m",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=240&h=160&q=80",
    slug: null,
  },
  {
    title: "Managing Stress Together",
    lessons: 6,
    duration: "40m",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=240&h=160&q=80",
    slug: null,
  },
];

export default function MilestonesToProgressPage() {
  const [outlinePage, setOutlinePage] = useState(1);
  const [activeLesson, setActiveLesson] = useState(1);

  const totalOutlinePages = Math.ceil(TOTAL_LESSONS / LESSONS_PER_PAGE);
  const pagedLessons = ALL_LESSONS.slice(
    (outlinePage - 1) * LESSONS_PER_PAGE,
    outlinePage * LESSONS_PER_PAGE
  );

  return (
    <div className="bg-pg-cream min-h-screen">

      {/* Breadcrumb */}
      <div className="bg-pg-tint-soft border-b border-pg-line pt-14">
        <div className="max-w-pg-page mx-auto px-6 h-10 flex items-center gap-2">
          <Link
            to="/on-demand-courses"
            className="text-xs text-pg-teal-dark hover:text-pg-navy no-underline transition-colors shrink-0"
          >
            ← Back to courses
          </Link>
          <ChevronRight size={13} className="text-pg-slate shrink-0" />
          <span className="text-xs font-semibold text-pg-navy truncate">
            {COURSE_TITLE}
          </span>
        </div>
      </div>

      <div className="max-w-pg-content mx-auto px-6 pt-8 pb-12">

        {/* Main card */}
        <motion.div
          className="bg-white rounded-pg-xl overflow-hidden mb-4"
          style={{ boxShadow: "0 8px 24px rgba(28,50,67,0.06)", border: "1px solid #dee8e9" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="flex flex-col lg:flex-row">

            {/* Image */}
            <div className="p-5 shrink-0">
              <img
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=560&h=680&q=80"
                alt="Children on stairs"
                className="rounded-pg-md object-cover w-full lg:w-[260px]"
                style={{ height: "320px" }}
              />
            </div>

            {/* Course info */}
            <div className="flex-1 p-6 flex flex-col gap-4 lg:border-r border-pg-line">
              <span className="self-start font-semibold text-[11px] uppercase tracking-[1.4px] text-pg-teal-dark bg-pg-tint border border-pg-sage/40 px-3 py-1 rounded-pg-sm">
                Child & Teen Development
              </span>

              <h1 className="font-bold text-pg-navy text-[22px] leading-[1.25]">
                {COURSE_TITLE}
              </h1>

              <p className="text-pg-slate text-sm leading-relaxed">
                A supportive, science-informed course for parents navigating the early years — from birth through the first school days. Explore three expert-led modules covering development, real-life scenarios, and school support.
              </p>

              <div className="flex items-center gap-2 text-pg-slate">
                <Clock size={13} className="text-pg-sage" />
                <span className="text-sm">{TOTAL_LESSONS} lessons</span>
                <span className="text-pg-mist">•</span>
                <span className="text-sm">3h 30m</span>
                <span className="text-pg-mist">•</span>
                <span className="text-sm">3 modules</span>
              </div>

              <div className="flex flex-col gap-2">
                {INSTRUCTORS.map(inst => (
                  <div key={inst.name} className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-pg-teal flex items-center justify-center shrink-0">
                      <span className="font-bold text-white text-xs">{inst.initials}</span>
                    </div>
                    <div className="min-w-0">
                      <span className="font-semibold text-pg-navy text-sm">{inst.name}</span>
                      <span className="text-pg-slate text-xs ml-1.5">{inst.credential}</span>
                    </div>
                  </div>
                ))}
              </div>

              <ButtonLink to={`/courses/${COURSE_SLUG}/lesson/1`} className="self-start mt-auto">
                Start course
                <ChevronRight size={16} aria-hidden="true" />
              </ButtonLink>
            </div>

            {/* Course outline sidebar */}
            <div className="w-full lg:w-[280px] shrink-0 p-5 flex flex-col gap-3">
              <h2 className="font-bold text-pg-navy text-base">Course outline</h2>

              {/* Progress */}
              <div className="flex flex-col gap-1.5">
                <p className="text-pg-slate text-xs">
                  0 of {TOTAL_LESSONS} lessons completed
                </p>
                <div className="h-1.5 bg-pg-line rounded-full overflow-hidden">
                  <div className="h-full bg-pg-teal rounded-full" style={{ width: "0%" }} />
                </div>
              </div>

              {/* Rows */}
              <div className="flex flex-col gap-2">
                {pagedLessons.map((lesson) => {
                  const isActive = activeLesson === lesson.id;
                  return (
                    <Link
                      key={lesson.id}
                      to={`/courses/${COURSE_SLUG}/lesson/${lesson.id}`}
                      className="no-underline block"
                      style={{ color: "inherit" }}
                      onClick={() => setActiveLesson(lesson.id)}
                    >
                      <motion.div
                        className={`flex items-center gap-3 text-left w-full px-3 py-2.5 rounded-pg-md border transition-colors ${
                          isActive
                            ? "border-pg-teal bg-pg-tint"
                            : "border-pg-line bg-white hover:border-pg-sage hover:bg-pg-cream"
                        }`}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                          isActive ? "bg-pg-navy text-white" : "bg-pg-cream-dark text-pg-slate"
                        }`}>
                          {lesson.id}
                        </span>
                        <span className={`text-xs flex-1 leading-snug line-clamp-2 ${
                          isActive ? "font-semibold text-pg-navy" : "text-pg-slate"
                        }`}>
                          {lesson.title}
                        </span>
                        {isActive && <Play size={11} className="text-pg-teal shrink-0" fill="#59797D" />}
                      </motion.div>
                    </Link>
                  );
                })}
              </div>

              {/* Pagination */}
              {totalOutlinePages > 1 && (
                <div className="flex items-center justify-between pt-2 border-t border-pg-line mt-1">
                  <button
                    onClick={() => setOutlinePage(p => Math.max(1, p - 1))}
                    disabled={outlinePage === 1}
                    className="w-7 h-7 rounded-full border border-pg-line flex items-center justify-center text-pg-slate hover:border-pg-teal hover:text-pg-teal disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft size={13} />
                  </button>
                  <span className="text-xs text-pg-slate">
                    {outlinePage} of {totalOutlinePages}
                  </span>
                  <button
                    onClick={() => setOutlinePage(p => Math.min(totalOutlinePages, p + 1))}
                    disabled={outlinePage === totalOutlinePages}
                    className="w-7 h-7 rounded-full border border-pg-line flex items-center justify-center text-pg-slate hover:border-pg-teal hover:text-pg-teal disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronRight size={13} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* About */}
        <motion.div
          className="bg-white rounded-pg-xl p-8 mb-4"
          style={{ boxShadow: "0 8px 24px rgba(28,50,67,0.06)", border: "1px solid #dee8e9" }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="font-bold text-pg-navy text-lg mb-4">About this course</h2>
          <div className="text-pg-slate text-sm leading-relaxed flex flex-col gap-3">
            <p>
              <span className="font-semibold text-pg-navy">Milestones to Progress</span> is a supportive, science-informed course for parents navigating the early years — from birth through the first school days.
            </p>
            <p>
              Led by Dr. Kevin Skinner, this series explores what's happening inside a child's developing brain and body, including attachment, routines, independence, tantrums, emotional regulation, and the wide range of what healthy development can look like at each stage.
            </p>
            <p>
              Dr. Skinner grounds the course in research while offering reassurance that every child grows at their own pace — and that thoughtful, responsive caregiving makes a powerful difference.
            </p>
            <p>
              Alongside Dr. Skinner, you'll hear from Max Dahmen, a licensed therapist who brings these concepts to life through real-world family scenarios, and Robbie Kinghorn, a longtime school principal who helps connect home and school support systems.
            </p>
            <p className="font-semibold text-pg-navy">The course is broken up in three modules.</p>
            <p>
              Dr. Kevin Skinner will lead us through The Milestones module, focusing on the therapeutic science of growing minds. Max Dahmen will then guide us through familiar parenting moments — The Moments — sharing real-life scenarios through a clinical lens. Finally, Robbie Kinghorn will drive home an essential truth: your child has a team — and how families and schools can work together to support your child's growth.
            </p>
          </div>

          {/* Instructor bios */}
          <div className="mt-6 pt-6 border-t border-pg-line grid grid-cols-1 sm:grid-cols-3 gap-5">
            {INSTRUCTORS.map(inst => (
              <div key={inst.name} className="flex flex-col gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-full bg-pg-teal flex items-center justify-center shrink-0">
                    <span className="font-bold text-white text-xs">{inst.initials}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-pg-navy text-sm">{inst.name}</p>
                    <p className="text-pg-teal text-xs">{inst.credential}</p>
                  </div>
                </div>
                <p className="text-pg-slate text-xs leading-relaxed">{inst.bio}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* You may also like */}
        <motion.div
          className="bg-white rounded-pg-xl p-8"
          style={{ boxShadow: "0 8px 24px rgba(28,50,67,0.06)", border: "1px solid #dee8e9" }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="font-bold text-pg-navy text-lg mb-5">You may also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {RECOMMENDATIONS.map((rec, i) => {
              const card = (
                <motion.div
                  className="flex gap-3 p-3 rounded-pg-lg border border-pg-line cursor-pointer hover:border-pg-sage transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.07, duration: 0.35 }}
                  whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(28,50,67,0.14)" }}
                >
                  <img src={rec.img} alt={rec.title} className="w-[80px] h-[64px] rounded-pg-md object-cover shrink-0" />
                  <div className="flex flex-col justify-center gap-1">
                    <p className="font-semibold text-pg-navy text-xs leading-snug">{rec.title}</p>
                    <p className="text-pg-slate text-xs">{rec.lessons} lessons &nbsp;•&nbsp; {rec.duration}</p>
                  </div>
                </motion.div>
              );
              return rec.slug
                ? <Link key={i} to={`/courses/${rec.slug}`} className="no-underline" style={{ color: "inherit" }}>{card}</Link>
                : <div key={i}>{card}</div>;
            })}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
