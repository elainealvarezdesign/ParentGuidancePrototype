import { useRef } from "react";
import { Button, ButtonAnchor } from "./components/Button";
import { motion, useInView } from "motion/react";
import svgPaths from "@/imports/ParentCoaching-1/svg-g80g54ayas";
import imgImageParentHuggingChild from "@/imports/ParentCoaching-1/38518ee84636136dc3ed60b783115620c287b3ee.png";
import imgImageDrKevinSkinner from "@/imports/ParentCoaching-1/f73b6da28c9de1bc7946276ba9584e3cd46f8aec.png";
import imgImageDrAyannaAbrams from "@/imports/ParentCoaching-1/4ae6e6a5882781f770da126f3d55e6d0598e2dcc.png";
import imgImageDrJamesBerry from "@/imports/ParentCoaching-1/a8af2d71a7869f81a13a31906cb46acc027f51d4.png";

/** Noble Health sign-up for Parent Guidance coaching */
const SIGN_UP_URL = "https://app.noble.health/auth/parent-guidance/default/get-started?lang=en";

/* ─── Data ─── */
const BENEFITS = [
  {
    icon: (
      <div className="absolute inset-[8.33%]">
        <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 20 20">
          <path d={svgPaths.p2c0f9c00} className="fill-pg-sage" />
        </svg>
      </div>
    ),
    title: "24/7 messaging with your coach",
    desc: "Message your coach between sessions for check-ins and quick questions.",
  },
  {
    icon: (
      <div className="absolute inset-[8.35%_4.16%]">
        <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 22.004 19.99">
          <path d={svgPaths.p3329db00} className="fill-pg-sage" />
        </svg>
      </div>
    ),
    title: "Self-guided Roadmaps",
    desc: "Strategies built around your specific child, not a generic playbook.",
  },
  {
    icon: (
      <div className="absolute inset-[6.25%_16.67%]">
        <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 16 21">
          <path d={svgPaths.p29f40100} className="fill-pg-sage" />
        </svg>
      </div>
    ),
    title: "Confidential & safe",
    desc: "Everything shared stays private. HIPAA-compliant platform, always.",
  },
  {
    icon: (
      <div className="absolute inset-[8.33%_12.5%]">
        <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 18 20">
          <path d={svgPaths.p8324480} className="fill-pg-sage" />
        </svg>
      </div>
    ),
    title: "Flexible scheduling",
    desc: "Biweekly one-on-one video calls with your coach",
  },
];

const COACHES = [
  {
    name: "Dr. Kevin Skinner",
    role: "Clinical Director, LMTF, CSAT-S",
    bio: "15 years working with families navigating childhood anxiety, ADHD, and school-related stress.",
    tags: ["Anxiety", "ADHD", "School Stress"],
    img: imgImageDrKevinSkinner,
  },
  {
    name: "Dr. Ayanna Abrams",
    role: "Family Therapist",
    bio: "Specializes in adolescent behavior, parent-teen conflict, and building stronger family communication patterns.",
    tags: ["Teens", "Family Conflict", "Communication"],
    img: imgImageDrAyannaAbrams,
  },
  {
    name: "Dr. James Berry",
    role: "Child & Adolescent Psychiatrist",
    bio: "Expert in trauma-informed parenting approaches for children who have experienced adverse childhood events.",
    tags: ["Depression", "Trauma", "Self-Care"],
    img: imgImageDrJamesBerry,
  },
];

const STEPS = [
  {
    num: "01",
    title: "Enroll in the program",
    desc: "Browse profiles and select a specialist whose expertise matches your family's needs.",
  },
  {
    num: "02",
    title: "Schedule an onboarding call",
    desc: "Pick a time that fits your schedule — evenings and weekends available.",
  },
  {
    num: "03",
    title: "Download the app",
    desc: "Secure video sessions from the comfort of your home, no commute required.",
  },
  {
    num: "04",
    title: "Connect with your coach and begin Parenting with Purpose",
    desc: "Walk away with actionable strategies tailored to your child and your family dynamic.",
  },
];

const TESTIMONIALS = [
  {
    quote: "\"Within three sessions I finally understood why my son was shutting down. Our coach gave us a language we didn't have before.\"",
    name: "Mariana T.",
    meta: "Mom of a 9-year-old · Utah",
  },
  {
    quote: "\"I was skeptical about online coaching but it turned out to be the most practical help we've received. Worth every minute.\"",
    name: "David K.",
    meta: "Dad of two teens · Arizona",
  },
  {
    quote: "\"Dr. Nair helped me see my daughter's anxiety as something we could work with together, not something to fear.\"",
    name: "Rebecca L.",
    meta: "Parent of a 12-year-old · California",
  },
];

/* ─── Process step ─── */
function ProcessStep({ num, title, desc, index }: { num: string; title: string; desc: string; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center gap-4 flex-1 px-4 text-center"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12, ease: [0.34, 1.56, 0.64, 1] }}
    >
      <motion.div
        className="w-14 h-14 rounded-full bg-pg-sage flex items-center justify-center shrink-0 z-10 relative"
        initial={{ scale: 0.6 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.55, delay: index * 0.12, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <span className="font-bold text-pg-navy text-sm">{num}</span>
      </motion.div>
      <div>
        <p className="font-semibold text-pg-navy text-sm leading-5">{title}</p>
        <p className="text-pg-slate text-xs leading-[1.625] mt-2 max-w-[224px] mx-auto">{desc}</p>
      </div>
    </motion.div>
  );
}

/* ─── Quote icon ─── */
function QuoteIcon() {
  return (
    <div className="bg-pg-tint rounded-full w-8 h-8 flex items-center justify-center shrink-0">
      <div className="relative w-4 h-4 overflow-hidden">
        <div className="absolute inset-[8.33%]">
          <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 13.3333 13.3333">
            <path d={svgPaths.p11a1c600} className="fill-pg-teal" />
          </svg>
        </div>
      </div>
    </div>
  );
}


export default function ParentCoachingPage() {
  const connectorRef = useRef(null);
  const connectorInView = useInView(connectorRef, { once: true, margin: "-80px" });

  return (
    <div className="bg-pg-cream min-h-screen">

      {/* ── Hero ── */}
      <section className="bg-pg-cream pt-24 pb-14 px-6 md:px-10 lg:px-14 overflow-hidden">
        <div className="max-w-pg-page mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left */}
          <motion.div
            className="flex flex-col gap-6 lg:pb-16"
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="text-xs font-semibold uppercase tracking-pg-eyebrow text-pg-teal-dark">
              Parent Coaching
            </span>
            <h1 className="font-bold text-pg-navy text-[28px] md:text-[40px] leading-[1.25] max-w-[488px]">
              {"A better way to navigate your "}
              <em className="italic text-pg-teal">{"child's mental health."}</em>
            </h1>
            <p className="text-pg-slate text-base leading-[26px] max-w-[384px]">
              {"Work one-on-one with a therapist who coaches "}
              <em className="italic">you</em>
              {" — so you can show up for your child with confidence, clarity, and real tools."}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <ButtonAnchor href={SIGN_UP_URL} target="_blank" rel="noopener noreferrer">
                Sign up now!
                <span className="sr-only"> (opens in a new tab)</span>
              </ButtonAnchor>
              <ButtonAnchor href="#how-it-works" variant="secondary">
                How it works
              </ButtonAnchor>
            </div>
          </motion.div>

          {/* Right — photo with offset teal block */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Photo + offset block, centered as one group in the column */}
            <div className="relative shrink-0 w-[300px] h-[336px] sm:w-[397px] sm:h-[444px]">
              {/* Teal offset block — top-right corner, rounded-tr-pg-sm only */}
              <div
                className="absolute bg-pg-sage"
                style={{
                  width: "84.1%",
                  height: "82.7%",
                  left: "15.9%",
                  top: "11.3%",
                  borderTopRightRadius: "32px",
                }}
              />
              {/* Photo on top */}
              <div
                className="absolute rounded-pg-xl overflow-hidden"
                style={{
                  width: "84.1%",
                  height: "94.1%",
                  left: 0,
                  top: 0,
                  boxShadow: "var(--pg-shadow-card)",
                }}
              >
                <img
                  src={imgImageParentHuggingChild}
                  alt="Parent hugging child"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="bg-pg-navy px-6 md:px-10 lg:px-14 py-12">
        <div className="max-w-pg-page mx-auto flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 max-w-pg-content w-full">
            {BENEFITS.map((b, i) => (
              <motion.div
                key={b.title}
                className="flex flex-col gap-3"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
              >
                <div className="relative w-6 h-6 overflow-hidden">
                  {b.icon}
                </div>
                <p className="font-semibold text-white text-sm leading-5">{b.title}</p>
                <p className="text-pg-sage text-xs leading-[1.625] max-w-[238px]">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Coaches ── */}
      <section className="hidden bg-pg-cream px-14 py-14">
        <div className="max-w-pg-page mx-auto flex justify-center">
          <div className="w-full max-w-pg-content">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-1 h-5 rounded-full bg-pg-sage" />
              <span className="font-semibold text-pg-teal-dark text-xs uppercase tracking-pg-eyebrow">Meet the coaches</span>
            </div>
            <h2 className="font-bold text-pg-navy text-2xl leading-8">Explore our Courses</h2>
            <p className="text-pg-slate text-sm leading-5 mt-2 max-w-[512px]">
              Every coach on our platform holds and specializes in child and family mental health.
            </p>

            <div className="grid grid-cols-3 gap-5 mt-8 items-stretch">
              {COACHES.map((coach, i) => (
                <motion.div
                  key={coach.name}
                  className="bg-white rounded-pg-xl overflow-hidden flex flex-col"
                  style={{ boxShadow: "var(--pg-shadow-card)" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  whileHover={{ y: -4, boxShadow: "var(--pg-shadow-card-hover)" }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden shrink-0" style={{ height: "208px" }}>
                    <img
                      src={coach.img}
                      alt={coach.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-pg-tint rounded-full px-2 py-1">
                      <span className="font-semibold text-pg-teal text-xs">● Available</span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex flex-col gap-3 p-5 flex-1">
                    <div>
                      <p className="font-semibold text-pg-navy text-sm leading-5">{coach.name}</p>
                      <p className="text-pg-teal-dark text-xs leading-4 mt-0.5">{coach.role}</p>
                    </div>
                    <p className="text-pg-slate text-xs leading-[1.625] flex-1">{coach.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {coach.tags.map(tag => (
                        <span key={tag} className="font-medium text-pg-teal-dark text-xs bg-pg-cream px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button className="mt-1 w-full">
                      Begin Course
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="bg-white px-6 md:px-10 lg:px-14 py-14">
        <div className="max-w-pg-page mx-auto flex justify-center">
          <div className="w-full max-w-pg-content flex flex-col items-center">
            <div className="flex items-center gap-2 mb-1 self-start">
              <div className="w-1 h-5 rounded-full bg-pg-sage" />
              <span className="font-semibold text-pg-teal-dark text-xs uppercase tracking-pg-eyebrow">Process</span>
            </div>
            <h2 className="font-bold text-pg-navy text-2xl leading-8 text-center mt-3 mb-10">
              Getting started is simple
            </h2>

            {/* Steps with animated connector */}
            <div className="relative w-full" style={{ minHeight: "160px" }}>
              <div
                ref={connectorRef}
                className="absolute top-7 hidden lg:block overflow-hidden bg-pg-line"
                style={{ left: "128px", right: "128px", height: "1px" }}
              >
                <motion.div
                  className="h-full bg-pg-sage origin-left"
                  initial={{ scaleX: 0 }}
                  animate={connectorInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.55, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10">
                {STEPS.map((step, i) => (
                  <ProcessStep key={step.num} {...step} index={i} />
                ))}
              </div>
            </div>

            <ButtonAnchor href={SIGN_UP_URL} target="_blank" rel="noopener noreferrer" className="mt-10">
              Start Now!
              <span className="sr-only"> (opens in a new tab)</span>
            </ButtonAnchor>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-pg-cream px-6 md:px-10 lg:px-14 py-14">
        <div className="max-w-pg-page mx-auto flex justify-center">
          <div className="w-full max-w-pg-content">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-1 h-5 rounded-full bg-pg-sage" />
              <span className="font-semibold text-pg-teal-dark text-xs uppercase tracking-pg-eyebrow">{"Families we've supported"}</span>
            </div>
            <h2 className="font-bold text-pg-navy text-2xl leading-8 mt-3">Real families. Real change.</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-8 items-stretch">
              {TESTIMONIALS.map((t, i) => (
                <motion.div
                  key={t.name}
                  className="bg-white rounded-pg-xl flex flex-col gap-4 p-6"
                  style={{ boxShadow: "var(--pg-shadow-card)" }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                >
                  <QuoteIcon />
                  <p className="italic text-pg-navy text-sm leading-[22.75px] flex-1">
                    {t.quote}
                  </p>
                  <div className="border-t border-pg-tint-soft pt-3">
                    <p className="font-semibold text-pg-navy text-xs leading-4">{t.name}</p>
                    <p className="text-pg-teal-dark text-xs leading-[16.5px] mt-0.5">{t.meta}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
