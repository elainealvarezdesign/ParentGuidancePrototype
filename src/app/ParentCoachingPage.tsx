import { useRef } from "react";
import { motion, useInView } from "motion/react";
import svgPaths from "@/imports/ParentCoaching-1/svg-g80g54ayas";
import imgImageParentHuggingChild from "@/imports/ParentCoaching-1/38518ee84636136dc3ed60b783115620c287b3ee.png";
import imgImageDrKevinSkinner from "@/imports/ParentCoaching-1/f73b6da28c9de1bc7946276ba9584e3cd46f8aec.png";
import imgImageDrAyannaAbrams from "@/imports/ParentCoaching-1/4ae6e6a5882781f770da126f3d55e6d0598e2dcc.png";
import imgImageDrJamesBerry from "@/imports/ParentCoaching-1/a8af2d71a7869f81a13a31906cb46acc027f51d4.png";

/* ─── Data ─── */
const BENEFITS = [
  {
    icon: (
      <div className="absolute inset-[8.33%]">
        <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 20 20">
          <path d={svgPaths.p2c0f9c00} fill="#90B3B6" />
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
          <path d={svgPaths.p3329db00} fill="#90B3B6" />
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
          <path d={svgPaths.p29f40100} fill="#90B3B6" />
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
          <path d={svgPaths.p8324480} fill="#90B3B6" />
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
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.34, 1.56, 0.64, 1] }}
    >
      <motion.div
        className="w-14 h-14 rounded-full bg-[#90b3b6] flex items-center justify-center shrink-0 z-10 relative"
        initial={{ scale: 0.6 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.12, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <span className="font-['Poppins',sans-serif] font-bold text-white text-sm">{num}</span>
      </motion.div>
      <div>
        <p className="font-['Poppins',sans-serif] font-semibold text-[#1c3243] text-sm leading-5">{title}</p>
        <p className="font-['Poppins',sans-serif] text-[#435766] text-xs leading-[1.625] mt-1.5 max-w-[224px] mx-auto">{desc}</p>
      </div>
    </motion.div>
  );
}

/* ─── Quote icon ─── */
function QuoteIcon() {
  return (
    <div className="bg-[#e8f1f1] rounded-full w-8 h-8 flex items-center justify-center shrink-0">
      <div className="relative w-4 h-4 overflow-hidden">
        <div className="absolute inset-[8.33%]">
          <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 13.3333 13.3333">
            <path d={svgPaths.p11a1c600} fill="#59797D" />
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
    <div className="bg-[#f9f4f1] min-h-screen">

      {/* ── Hero ── */}
      <section className="bg-[#f9f4f1] pt-24 pb-14 px-14 overflow-hidden">
        <div className="max-w-[1280px] mx-auto grid grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            className="flex flex-col gap-6 pb-16"
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="font-['Poppins',sans-serif] text-xs font-semibold uppercase tracking-[1.2px] text-[#90b3b6]">
              Parent Coaching
            </span>
            <h1 className="font-['Poppins',sans-serif] font-bold text-[#1c3243] text-[36px] leading-[1.25] max-w-[488px]">
              {"A better way to navigate your "}
              <em className="italic text-[#59797d]">{"child's mental health."}</em>
            </h1>
            <p className="font-['Poppins',sans-serif] text-[#435766] text-base leading-[26px] max-w-[384px]">
              {"Work one-on-one with a therapist who coaches "}
              <em className="italic">you</em>
              {" — so you can show up for your child with confidence, clarity, and real tools."}
            </p>
            <div className="flex items-center gap-3">
              <motion.a
                href="#how-it-works"
                className="font-['Poppins',sans-serif] font-semibold text-sm text-white bg-[#59797d] px-6 py-3.5 rounded-2xl no-underline"
                whileHover={{ scale: 1.03, backgroundColor: "#406064" }}
                whileTap={{ scale: 0.97 }}
              >
                Sign up now!
              </motion.a>
              <motion.a
                href="#how-it-works"
                className="font-['Poppins',sans-serif] font-semibold text-sm text-[#59797d] border border-[#90b3b6] px-6 py-3.5 rounded-2xl no-underline bg-transparent"
                whileHover={{ scale: 1.03, backgroundColor: "rgba(144,179,182,0.08)" }}
                whileTap={{ scale: 0.97 }}
              >
                How it works
              </motion.a>
            </div>
          </motion.div>

          {/* Right — photo with offset teal block */}
          <motion.div
            className="relative flex justify-center"
            style={{ height: "444px" }}
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Teal offset block — top-right corner, rounded-tr only */}
            <div
              className="absolute bg-[#90b3b6]"
              style={{
                width: "334px",
                height: "367px",
                left: "63px",
                top: "50px",
                borderTopRightRadius: "32px",
              }}
            />
            {/* Photo on top */}
            <div
              className="absolute rounded-2xl overflow-hidden"
              style={{
                width: "334px",
                height: "418px",
                left: 0,
                top: 0,
                boxShadow: "0 16px 20px -4px rgba(0,0,0,0.1), 0 6px 8px -5px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={imgImageParentHuggingChild}
                alt="Parent hugging child"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="bg-[#1c3243] px-14 py-12">
        <div className="max-w-[1280px] mx-auto flex justify-center">
          <div className="grid grid-cols-4 gap-6 max-w-[1024px] w-full">
            {BENEFITS.map((b, i) => (
              <motion.div
                key={b.title}
                className="flex flex-col gap-3"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <div className="relative w-6 h-6 overflow-hidden">
                  {b.icon}
                </div>
                <p className="font-['Poppins',sans-serif] font-semibold text-white text-sm leading-5">{b.title}</p>
                <p className="font-['Poppins',sans-serif] text-[#90b3b6] text-xs leading-[1.625] max-w-[238px]">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Coaches ── */}
      <section className="hidden bg-[#f9f4f1] px-14 py-14">
        <div className="max-w-[1280px] mx-auto flex justify-center">
          <div className="w-full max-w-[1024px]">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-1 h-5 rounded-full bg-[#90b3b6]" />
              <span className="font-['Poppins',sans-serif] font-semibold text-[#90b3b6] text-xs uppercase tracking-[1.2px]">Meet the coaches</span>
            </div>
            <h2 className="font-['Poppins',sans-serif] font-bold text-[#1c3243] text-2xl leading-8">Explore our Courses</h2>
            <p className="font-['Poppins',sans-serif] text-[#435766] text-sm leading-5 mt-2 max-w-[512px]">
              Every coach on our platform holds and specializes in child and family mental health.
            </p>

            <div className="grid grid-cols-3 gap-5 mt-8 items-stretch">
              {COACHES.map((coach, i) => (
                <motion.div
                  key={coach.name}
                  className="bg-white rounded-2xl overflow-hidden flex flex-col"
                  style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  whileHover={{ y: -4, boxShadow: "0 12px 28px rgba(34,49,67,0.12)" }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden shrink-0" style={{ height: "208px" }}>
                    <img
                      src={coach.img}
                      alt={coach.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-[#e8f1f1] rounded-full px-2.5 py-1">
                      <span className="font-['Poppins',sans-serif] font-semibold text-[#59797d] text-[10px]">● Available</span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex flex-col gap-3 p-5 flex-1">
                    <div>
                      <p className="font-['Poppins',sans-serif] font-semibold text-[#1c3243] text-sm leading-5">{coach.name}</p>
                      <p className="font-['Poppins',sans-serif] text-[#90b3b6] text-xs leading-4 mt-0.5">{coach.role}</p>
                    </div>
                    <p className="font-['Poppins',sans-serif] text-[#435766] text-xs leading-[1.625] flex-1">{coach.bio}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {coach.tags.map(tag => (
                        <span key={tag} className="font-['Poppins',sans-serif] font-medium text-[#90b3b6] text-[10px] bg-[#f9f4f1] px-2.5 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <motion.button
                      className="w-full font-['Poppins',sans-serif] font-semibold text-xs text-white bg-[#1c3243] py-2.5 rounded-xl mt-1"
                      whileHover={{ backgroundColor: "#1c3243" }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Begin Course
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="bg-white px-14 py-14">
        <div className="max-w-[1280px] mx-auto flex justify-center">
          <div className="w-full max-w-[1024px] flex flex-col items-center">
            <div className="flex items-center gap-2 mb-1 self-start">
              <div className="w-1 h-5 rounded-full bg-[#90b3b6]" />
              <span className="font-['Poppins',sans-serif] font-semibold text-[#90b3b6] text-xs uppercase tracking-[1.2px]">Process</span>
            </div>
            <h2 className="font-['Poppins',sans-serif] font-bold text-[#1c3243] text-2xl leading-8 text-center mt-3 mb-10">
              Getting started is simple
            </h2>

            {/* Steps with animated connector */}
            <div className="relative w-full" style={{ minHeight: "160px" }}>
              <div
                ref={connectorRef}
                className="absolute top-7 overflow-hidden bg-[#e8ebed]"
                style={{ left: "128px", right: "128px", height: "1px" }}
              >
                <motion.div
                  className="h-full bg-[#90b3b6] origin-left"
                  initial={{ scaleX: 0 }}
                  animate={connectorInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
              </div>

              <div className="grid grid-cols-4">
                {STEPS.map((step, i) => (
                  <ProcessStep key={step.num} {...step} index={i} />
                ))}
              </div>
            </div>

            <motion.button
              className="mt-10 font-['Poppins',sans-serif] font-semibold text-sm text-white bg-[#59797d] px-6 py-3.5 rounded-2xl"
              whileHover={{ scale: 1.03, backgroundColor: "#406064" }}
              whileTap={{ scale: 0.97 }}
            >
              Start Now!
            </motion.button>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-[#f9f4f1] px-14 py-14">
        <div className="max-w-[1280px] mx-auto flex justify-center">
          <div className="w-full max-w-[1024px]">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-1 h-5 rounded-full bg-[#90b3b6]" />
              <span className="font-['Poppins',sans-serif] font-semibold text-[#90b3b6] text-xs uppercase tracking-[1.2px]">{"Families we've supported"}</span>
            </div>
            <h2 className="font-['Poppins',sans-serif] font-bold text-[#1c3243] text-2xl leading-8 mt-3">Real families. Real change.</h2>

            <div className="grid grid-cols-3 gap-5 mt-8 items-stretch">
              {TESTIMONIALS.map((t, i) => (
                <motion.div
                  key={t.name}
                  className="bg-white rounded-2xl flex flex-col gap-4 p-6"
                  style={{ boxShadow: "0 2px 6px rgba(0,0,0,0.06)" }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                >
                  <QuoteIcon />
                  <p className="font-['Poppins',sans-serif] italic text-[#1c3243] text-sm leading-[22.75px] flex-1">
                    {t.quote}
                  </p>
                  <div className="border-t border-[#f5f5f5] pt-3">
                    <p className="font-['Poppins',sans-serif] font-semibold text-[#1c3243] text-xs leading-4">{t.name}</p>
                    <p className="font-['Poppins',sans-serif] text-[#90b3b6] text-[11px] leading-[16.5px] mt-0.5">{t.meta}</p>
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
