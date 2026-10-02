import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router";
import { Button } from "./components/Button";
import { motion, AnimatePresence } from "motion/react";
import {
  Play, Pause, Volume2, Maximize2, Settings, Captions,
  ChevronRight, ChevronLeft, CheckCircle2, Circle, BookOpen, FileText, Paperclip,
} from "./components/icons";

const COURSE_SLUG = "milestones-to-progress";
const COURSE_TITLE = "Milestones to Progress: Guiding your child from birth through the early school years";

type Lesson = { id: number; title: string; duration: string; module: string; description: string; takeaways: string[] };

const LESSONS: Lesson[] = [
  {
    id: 1,
    title: "Introduction to Milestones to Progress",
    module: "The Milestones: The Science of Growing Minds",
    duration: "4:12",
    description: "Dr. Kevin Skinner introduces the Milestones to Progress framework — what to expect across the course, the three expert perspectives you'll hear from, and why understanding child development science gives parents the confidence to respond rather than react.",
    takeaways: ["Why development science matters for everyday parenting", "An overview of the three course modules", "How to use this course alongside your child's growth", "Setting realistic expectations at each stage"],
  },
  {
    id: 2,
    title: "Building Secure Attachments",
    module: "The Milestones: The Science of Growing Minds",
    duration: "6:45",
    description: "Secure attachment is the foundation of every other developmental milestone. Dr. Skinner explains what attachment actually means, how it forms in the first years of life, and the simple daily interactions that strengthen the parent-child bond.",
    takeaways: ["What secure vs. insecure attachment looks like", "The role of attunement in early bonding", "How to repair connection after ruptures", "Practical daily habits that build attachment"],
  },
  {
    id: 3,
    title: "Sensory & Motor Development",
    module: "The Milestones: The Science of Growing Minds",
    duration: "5:30",
    description: "From tummy time to first steps, sensory and motor development shapes how children explore and understand their world. This lesson covers the milestones parents can watch for — and why some variation is completely normal.",
    takeaways: ["Key sensory milestones from birth to age 5", "How to support motor development at home", "When to talk to your pediatrician", "The connection between sensory processing and behavior"],
  },
  {
    id: 4,
    title: "Independence & Responsibility",
    module: "The Milestones: The Science of Growing Minds",
    duration: "7:02",
    description: "Teaching independence is one of the most important — and counter-intuitive — jobs of a parent. Dr. Skinner shares a developmental framework for letting children struggle appropriately, build confidence, and develop the internal motivation that lasts a lifetime.",
    takeaways: ["Age-appropriate independence at each stage", "Why rescuing too quickly backfires", "How to scaffold tasks without doing them for your child", "Building intrinsic motivation from the start"],
  },
  {
    id: 5,
    title: "Conflict Resolution",
    module: "The Milestones: The Science of Growing Minds",
    duration: "6:18",
    description: "Children don't arrive knowing how to handle disagreement. This lesson explores how conflict resolution develops, why sibling conflict is actually a developmental opportunity, and what parents can do to coach rather than referee.",
    takeaways: ["How conflict resolution skills develop over time", "The difference between problem-solving and peacekeeping", "Scripts for coaching children through disagreements", "Using family conflict as a learning laboratory"],
  },
  {
    id: 6,
    title: "Emotional Awareness & Regulation",
    module: "The Milestones: The Science of Growing Minds",
    duration: "8:05",
    description: "Emotional regulation is a skill built over years — not something children are born with. Dr. Skinner walks through the neuroscience of big emotions, the window of tolerance, and how parents can help children name, feel, and move through difficult feelings.",
    takeaways: ["The neuroscience of emotional regulation in plain terms", "What co-regulation means and why it works", "Building an emotional vocabulary with your child", "When to be concerned about emotional dysregulation"],
  },
  {
    id: 7,
    title: "Early Communication Skills",
    module: "The Milestones: The Science of Growing Minds",
    duration: "5:48",
    description: "Language development is one of the fastest-moving milestones in early childhood. This lesson covers what typical communication looks like from babbling to full sentences — and how parents can be the best language environment their child has.",
    takeaways: ["Communication milestones from birth to age 6", "The power of serve-and-return conversation", "Reading as a daily communication practice", "Signs that warrant a speech evaluation"],
  },
  {
    id: 8,
    title: "Early Socialization",
    module: "The Milestones: The Science of Growing Minds",
    duration: "6:33",
    description: "Learning to be with other people is a milestone just like walking. Dr. Skinner explores how social development unfolds in the early years, what parallel play reveals, and how to help shy or anxious children find their footing with peers.",
    takeaways: ["Stages of social play from solitary to cooperative", "How temperament shapes social comfort", "Supporting the shy or slow-to-warm child", "What to look for when socialization feels stuck"],
  },
  {
    id: 9,
    title: "Working with Teachers",
    module: "The Moments: Real-Life Scenarios with Max Dahmen, LCSW",
    duration: "5:14",
    description: "Max Dahmen explores one of the most common parent challenges — navigating the parent-teacher relationship. Whether feedback is welcome or frustrating, how parents respond shapes their child's relationship with school for years to come.",
    takeaways: ["How to have a productive teacher conference", "Responding to negative feedback without defensiveness", "Being an advocate without being adversarial", "Building a team mentality with your child's school"],
  },
  {
    id: 10,
    title: "Defiant Child",
    module: "The Moments: Real-Life Scenarios with Max Dahmen, LCSW",
    duration: "7:22",
    description: "Defiance is one of the most exhausting parenting experiences. Max reframes it not as opposition but as a developmental signal — and shares the clinical tools that help parents respond in ways that reduce defiance rather than fuel it.",
    takeaways: ["Why defiance is often a bid for autonomy", "The difference between defiance and ODD", "De-escalation strategies that actually work", "How consistency and warmth reduce oppositional behavior"],
  },
  {
    id: 11,
    title: "Toilet Training Regression",
    module: "The Moments: Real-Life Scenarios with Max Dahmen, LCSW",
    duration: "4:55",
    description: "Regression is common, normal, and understandably alarming. Max explains why children regress during toilet training, what's happening developmentally, and how parents can respond calmly in ways that move things forward.",
    takeaways: ["Common triggers for toilet training regression", "Why punishment makes regression worse", "A calm, practical response framework", "When regression signals something more significant"],
  },
  {
    id: 12,
    title: "Peer-to-Peer Playtime",
    module: "The Moments: Real-Life Scenarios with Max Dahmen, LCSW",
    duration: "6:10",
    description: "Playdates and playground dynamics are where social skills get tested in real time. Max shares how to set up peer interactions for success, when to step in and when to let children work it out, and what to watch for as social complexity grows.",
    takeaways: ["Age-appropriate expectations for peer play", "How to set up a successful playdate", "Knowing when and how to intervene", "Helping children process social conflict afterward"],
  },
  {
    id: 13,
    title: "Acting Out in Class",
    module: "The Moments: Real-Life Scenarios with Max Dahmen, LCSW",
    duration: "7:38",
    description: "When a child is struggling behaviorally at school, the instinct to be embarrassed or defensive can get in the way of actually helping. Max walks through a collaborative approach that puts the child's needs at the center of the solution.",
    takeaways: ["Understanding what classroom behavior communicates", "How to partner with teachers without over-promising", "Creating a behavior support plan that works at home and school", "What to do when the school wants an evaluation"],
  },
  {
    id: 14,
    title: "A Development Detour",
    module: "The Moments: Real-Life Scenarios with Max Dahmen, LCSW",
    duration: "8:15",
    description: "Not every child follows the expected developmental path — and that's okay. Max shares how families can navigate evaluations, diagnoses, and support services without losing sight of what their child is doing well.",
    takeaways: ["How to approach a developmental evaluation", "Understanding what diagnoses do and don't tell you", "Building a support team around your child", "Holding the big picture when the moment feels hard"],
  },
  {
    id: 15,
    title: "Missed Milestones",
    module: "The Moments: Real-Life Scenarios with Max Dahmen, LCSW",
    duration: "6:50",
    description: "Milestone charts can be reassuring — or terrifying. Max helps parents put developmental timelines in context, understand when waiting is appropriate versus when to act, and how to advocate effectively for early intervention.",
    takeaways: ["How to read milestone charts without spiraling", "The difference between a delay and a disorder", "Early intervention: what it is and why it matters", "Talking to your pediatrician about concerns"],
  },
  {
    id: 16,
    title: "Behaviors Are Communication",
    module: "The Mentors: Supporting Your Child at School with Robbie Kinghorn",
    duration: "5:40",
    description: "Robbie Kinghorn opens this module with a foundational principle: every behavior a child shows is a message. Understanding what children are communicating through their actions changes how parents and schools respond — and opens the door to real support.",
    takeaways: ["Decoding what behaviors are communicating", "How schools interpret behavior vs. what's really happening", "Moving from discipline to understanding", "The power of a shared language between home and school"],
  },
  {
    id: 17,
    title: "Big Question – Behaviors are Communication",
    module: "The Mentors: Supporting Your Child at School with Robbie Kinghorn",
    duration: "4:28",
    description: "Robbie answers the most common questions parents have after learning that behaviors are communication — including how to talk to your child about it, what to do when the message isn't clear, and how schools can be better listeners.",
    takeaways: ["How to ask 'what are you trying to tell me?' in practice", "When behavior communication is unconscious", "Making school a safe place for children to express needs", "How parents and schools can get on the same page"],
  },
  {
    id: 18,
    title: "Emotional Development",
    module: "The Mentors: Supporting Your Child at School with Robbie Kinghorn",
    duration: "6:55",
    description: "Schools that support emotional development produce better academic outcomes. Robbie explains how families can reinforce the emotional learning happening at school — and how to fill in the gaps when school support is limited.",
    takeaways: ["What schools are (and aren't) doing around emotional development", "How to complement school SEL programs at home", "Building emotional vocabulary across home and school settings", "When your child's emotional needs exceed what school provides"],
  },
  {
    id: 19,
    title: "Big Question – Emotional Development",
    module: "The Mentors: Supporting Your Child at School with Robbie Kinghorn",
    duration: "4:12",
    description: "Robbie answers parents' real questions about emotional development in the school context — including how to talk to reluctant teachers, what to do when your child shuts down at school, and how to advocate for a more emotionally supportive environment.",
    takeaways: ["Scripts for talking to teachers about emotional needs", "What to do when school feels unsafe emotionally", "Understanding 504 plans and emotional support accommodations", "Building your child's emotional resilience for the school day"],
  },
  {
    id: 20,
    title: "Connections vs. Corrections",
    module: "The Mentors: Supporting Your Child at School with Robbie Kinghorn",
    duration: "7:30",
    description: "Robbie closes the course with its most important message: relationship is the foundation of all learning and growth. A child who feels connected to the adults in their life — at home and at school — is a child who can learn, grow, and thrive.",
    takeaways: ["Why connection must come before correction", "How to repair after a difficult interaction", "Building connection rituals at home and school", "Leaving your child with a felt sense of being known and valued"],
  },
];

const TABS = ["Overview", "Key Takeaways", "Resources"] as const;
type Tab = (typeof TABS)[number];

const RESOURCES = [
  { label: "Milestone Tracking Worksheet", type: "PDF" },
  { label: "Secure Attachment Daily Practices", type: "PDF" },
  { label: "Recommended Reading: The Whole-Brain Child", type: "Link" },
];

export default function MilestonesLessonPage() {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();

  const id = parseInt(lessonId ?? "1", 10);
  const lesson = LESSONS.find(l => l.id === id) ?? LESSONS[0];
  const prevLesson = LESSONS.find(l => l.id === id - 1);
  const nextLesson = LESSONS.find(l => l.id === id + 1);

  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeTab, setActiveTab] = useState<Tab>("Overview");
  const [completed, setCompleted] = useState<Set<number>>(new Set());

  const [durMin, durSec] = lesson.duration.split(":").map(Number);
  const totalSecs = durMin * 60 + durSec;
  const elapsed = Math.floor((progress / 100) * totalSecs);
  const elapsedStr = `${Math.floor(elapsed / 60)}:${String(elapsed % 60).padStart(2, "0")}`;

  function goToLesson(lid: number) {
    navigate(`/courses/${COURSE_SLUG}/lesson/${lid}`);
  }

  function markComplete() {
    setCompleted(prev => new Set([...prev, lesson.id]));
  }

  return (
    <div className="bg-pg-cream min-h-screen flex flex-col">

      {/* Breadcrumb */}
      <div className="bg-pg-tint-soft border-b border-pg-line pt-14 shrink-0">
        <div className="max-w-pg-page mx-auto px-6 h-10 flex items-center gap-2">
          <Link to="/on-demand-courses" className="text-xs text-pg-teal-dark hover:text-pg-navy no-underline transition-colors shrink-0">
            ← Back to courses
          </Link>
          <ChevronRight size={13} className="text-pg-slate shrink-0 hidden sm:block" />
          <Link to={`/courses/${COURSE_SLUG}`} className="text-xs text-pg-teal-dark hover:text-pg-navy no-underline transition-colors truncate min-w-0 hidden sm:block">
            {COURSE_TITLE}
          </Link>
          <ChevronRight size={13} className="text-pg-slate shrink-0" />
          <span className="text-xs font-semibold text-pg-navy truncate min-w-0">{lesson.title}</span>
        </div>
      </div>

      {/* Main layout */}
      <div className="flex-1 max-w-pg-page mx-auto w-full px-6 py-6 flex flex-col lg:flex-row gap-6">

        {/* Left: video + content */}
        <div className="flex-1 flex flex-col gap-4 min-w-0">

          {/* Lesson header */}
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:justify-between sm:gap-4">
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-[11px] uppercase tracking-pg-caps text-pg-teal-dark bg-pg-tint px-2.5 py-0.5 rounded-pg-sm">
                  Lesson {lesson.id} of {LESSONS.length}
                </span>
                <span className="text-xs text-pg-slate">{lesson.duration}</span>
              </div>
              <p className="text-xs text-pg-teal-dark mb-1">{lesson.module}</p>
              <h1 className="font-bold text-pg-navy text-[28px] md:text-[40px] leading-[1.15]">{lesson.title}</h1>
            </div>
            <Button variant="secondary" size="s" onClick={markComplete} aria-pressed={completed.has(lesson.id)} className={`shrink-0 gap-1.5 ${completed.has(lesson.id) ? "bg-pg-tint" : ""}`}>
              {completed.has(lesson.id) ? <CheckCircle2 size={13} /> : <Circle size={13} />}
              {completed.has(lesson.id) ? "Completed" : "Mark complete"}
            </Button>
          </div>

          {/* Video player */}
          <div
            className="relative w-full rounded-pg-lg overflow-hidden bg-pg-navy cursor-pointer select-none"
            style={{ aspectRatio: "16/9" }}
            onClick={() => { setPlaying(p => !p); if (!playing) setProgress(p => Math.min(p + 3, 100)); }}
          >
            <img
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1280&h=720&q=80"
              alt="Lesson thumbnail"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-(--pg-dur-base) ${playing ? "opacity-50" : "opacity-75"}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pg-navy/70 via-pg-navy/10 to-transparent" />
            <div className="absolute top-3 left-3 bg-pg-navy/60 text-white text-xs font-semibold px-2 py-0.5 rounded-pg-sm">
              {lesson.duration}
            </div>

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
                  {playing ? <Pause size={26} fill="white" className="text-white" /> : <Play size={26} fill="white" className="text-white ml-1" />}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-0 left-0 right-0 px-4 pb-3 pt-8 bg-gradient-to-t from-pg-navy/80 to-transparent">
              <div
                className="w-full h-1 bg-white/30 rounded-full mb-3 cursor-pointer"
                onClick={e => { e.stopPropagation(); const r = e.currentTarget.getBoundingClientRect(); setProgress(Math.round(((e.clientX - r.left) / r.width) * 100)); }}
              >
                <div className="h-full bg-pg-teal rounded-full relative" style={{ width: `${progress}%` }}>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-pg-teal rounded-full shadow-pg-card" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button type="button" aria-label={playing ? "Pause video" : "Play video"} className="text-white/80 hover:text-white transition-colors" onClick={e => { e.stopPropagation(); setPlaying(p => !p); }}>
                    {playing ? <Pause size={15} fill="white" aria-hidden="true" /> : <Play size={15} fill="white" className="ml-0.5" aria-hidden="true" />}
                  </button>
                  <span className="text-white/80 text-xs">{elapsedStr} / {lesson.duration}</span>
                  <Volume2 size={14} className="text-white/60 hover:text-white cursor-pointer transition-colors" onClick={e => e.stopPropagation()} />
                </div>
                <div className="flex items-center gap-3">
                  <Captions size={14} className="text-white/60 hover:text-white cursor-pointer transition-colors" onClick={e => e.stopPropagation()} />
                  <Settings size={14} className="text-white/60 hover:text-white cursor-pointer transition-colors" onClick={e => e.stopPropagation()} />
                  <Maximize2 size={14} className="text-white/60 hover:text-white cursor-pointer transition-colors" onClick={e => e.stopPropagation()} />
                </div>
              </div>
            </div>
          </div>

          {/* Content tabs */}
          <div className="bg-white rounded-pg-xl border border-pg-line overflow-hidden" style={{ boxShadow: "var(--pg-shadow-card)" }}>
            <div className="flex border-b border-pg-line">
              {TABS.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex flex-1 sm:flex-none items-center justify-center gap-1.5 px-2 sm:px-5 py-3.5 text-xs font-semibold whitespace-nowrap transition-colors border-b-2 ${
                    activeTab === tab ? "border-pg-teal text-pg-teal" : "border-transparent text-pg-slate hover:text-pg-navy"
                  }`}
                >
                  {tab === "Overview" && <BookOpen size={12} />}
                  {tab === "Key Takeaways" && <CheckCircle2 size={12} />}
                  {tab === "Resources" && <Paperclip size={12} />}
                  {tab}
                </button>
              ))}
            </div>
            <div className="p-6">
              <AnimatePresence mode="wait">
                {activeTab === "Overview" && (
                  <motion.p key="ov" className="text-pg-slate text-sm leading-relaxed"
                    initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.22 }}>
                    {lesson.description}
                  </motion.p>
                )}
                {activeTab === "Key Takeaways" && (
                  <motion.ul key="kt" className="flex flex-col gap-3"
                    initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.22 }}>
                    {lesson.takeaways.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 size={14} className="text-pg-teal shrink-0 mt-0.5" />
                        <span className="text-pg-navy text-sm leading-snug">{item}</span>
                      </li>
                    ))}
                  </motion.ul>
                )}
                {activeTab === "Resources" && (
                  <motion.div key="res" className="flex flex-col gap-3"
                    initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.22 }}>
                    {RESOURCES.map((r, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-pg-md border border-pg-line hover:border-pg-sage transition-colors cursor-pointer">
                        <div className="flex items-center gap-2.5">
                          <FileText size={14} className="text-pg-sage" />
                          <span className="text-sm text-pg-navy">{r.label}</span>
                        </div>
                        <span className="text-xs font-semibold text-pg-teal bg-pg-tint px-2 py-0.5 rounded-full">{r.type}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="w-full lg:w-[280px] shrink-0">
          <div className="bg-white rounded-pg-xl border border-pg-line overflow-hidden lg:sticky lg:top-20" style={{ boxShadow: "var(--pg-shadow-card)" }}>
            <div className="p-4 border-b border-pg-line">
              <p className="font-bold text-pg-navy text-sm">Course outline</p>
              <div className="mt-2 flex items-center gap-2">
                <div className="flex-1 h-1.5 bg-pg-line rounded-full overflow-hidden">
                  <div className="h-full bg-pg-teal rounded-full transition-all duration-(--pg-dur-reveal)" style={{ width: `${(completed.size / LESSONS.length) * 100}%` }} />
                </div>
                <span className="text-xs text-pg-slate shrink-0">{completed.size}/{LESSONS.length}</span>
              </div>
            </div>

            <div className="flex flex-col divide-y divide-pg-tint-soft overflow-y-auto" style={{ maxHeight: "520px" }}>
              {LESSONS.map((l, i) => {
                const isActive = l.id === lesson.id;
                const isDone = completed.has(l.id);
                const prevL = i > 0 ? LESSONS[i - 1] : null;
                const showModule = !prevL || prevL.module !== l.module;
                return (
                  <div key={l.id}>
                    {showModule && (
                      <p className="font-bold text-xs text-pg-navy px-4 pt-3 pb-1 leading-snug bg-pg-cream">
                        {l.module}
                      </p>
                    )}
                    <motion.button
                      onClick={() => goToLesson(l.id)}
                      className={`flex items-center gap-3 px-4 py-3 text-left w-full transition-colors ${isActive ? "bg-pg-tint" : "hover:bg-pg-cream"}`}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                        isDone ? "bg-pg-teal text-white" : isActive ? "bg-pg-navy text-white" : "bg-pg-cream-dark text-pg-slate"
                      }`}>
                        {isDone ? <CheckCircle2 size={12} /> : l.id}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className={`text-xs leading-snug truncate ${isActive ? "font-semibold text-pg-navy" : "text-pg-slate"}`}>
                          {l.title}
                        </p>
                        <p className="text-xs text-pg-slate mt-0.5">{l.duration}</p>
                      </div>
                      {isActive && <Play size={10} fill="var(--pg-teal)" className="text-pg-teal shrink-0" />}
                    </motion.button>
                  </div>
                );
              })}
            </div>

            <div className="p-4 border-t border-pg-line">
              <Link to={`/courses/${COURSE_SLUG}`} className="text-xs text-pg-teal hover:text-pg-teal-dark no-underline transition-colors flex items-center gap-1">
                <ChevronLeft size={13} /> Course overview
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="border-t border-pg-line bg-white shrink-0">
        <div className="max-w-pg-page mx-auto px-6 h-16 flex items-center justify-between gap-3">
          {prevLesson ? (
            <Button variant="tertiary" onClick={() => goToLesson(prevLesson.id)} className="gap-1.5">
              <ChevronLeft size={15} aria-hidden="true" />
              <span className="sm:hidden">Previous</span>
              <span className="hidden sm:inline">{prevLesson.title}</span>
            </Button>
          ) : (
            <Link to={`/courses/${COURSE_SLUG}`} className="text-sm text-pg-teal hover:text-pg-teal-dark no-underline transition-colors">
              Back to Course
            </Link>
          )}

          <div className="hidden sm:flex items-center gap-1.5">
            {LESSONS.map(l => (
              <button key={l.id} onClick={() => goToLesson(l.id)} aria-label={l.title} aria-current={l.id === lesson.id ? "step" : undefined}
                className={`rounded-full transition-all duration-(--pg-dur-fast) ${l.id === lesson.id ? "w-5 h-2 bg-pg-navy" : completed.has(l.id) ? "w-2 h-2 bg-pg-teal" : "w-2 h-2 bg-pg-mist hover:bg-pg-sage"}`}
              />
            ))}
          </div>

          {nextLesson ? (
            <Button onClick={() => goToLesson(nextLesson.id)}>
              Next Lesson <ChevronRight size={15} />
            </Button>
          ) : (
            <Button onClick={() => { markComplete(); navigate(`/courses/${COURSE_SLUG}`); }}>
              Finish Course <CheckCircle2 size={15} />
            </Button>
          )}
        </div>
      </div>

    </div>
  );
}
