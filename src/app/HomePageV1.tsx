import { useState } from "react";
import { Link } from "react-router";
import { Button, ButtonLink } from "@/components/ui/Button";
import { motion } from "motion/react";
import { Search, ArrowRight, Send, ShieldCheck, Clock } from "@/components/ui/icons";
import UnifiedCard from "@/components/cards/UnifiedCard";

import imgMentalHealth from "@/imports/HomePagePgV2/b75247b5542e76cdf5c675041b7a6e465e33ef23.png";
import imgCoaching from "@/imports/HomePagePgV2/debf8187f5722e2bc3e9c2869fc7308cfe71f1fc.png";
import imgOnDemand from "@/imports/HomePagePgV2/2efa62174bfcf85665907842ba36899e44e02fe9.png";
import imgAskTherapist from "@/imports/HomePagePgV2/277938b24e46ee2598e5638b70da775e75a5d182.png";
import imgTrustedByParents from "@/imports/HomePagePgV2/fb9567d2a70815a5c0307df9118cb49c401b72a3.png";
import imgRealSupport from "@/imports/HomePagePgV2/dabd6f5341bd78f44bfe8771b4f0e2a23c9565f1.png";
import imgNewsletter from "@/imports/HomePagePgV2/0400e3bb3f86c98e80e3ad89c6a42fc531e57c9c.png";

import imgQBUnited from "@/imports/QB_united-1.png";
import imgHopeSquad from "@/imports/HopeSquad-1.png";
import imgCookCenter from "@/imports/CCHC_Logo-greyscale-1.png";
import imgStaffGuidance from "@/imports/StaffGuidance.png";
import imgElizaChat from "@/imports/elizachat_logo_horizontal.svg";

const MotionLink = motion.create(Link);

const imgHeroBanner =
  "https://images.unsplash.com/photo-1560707856-3af2ff5ea652?auto=format&fit=crop&w=1400&h=900&q=80";

type Category = "All" | "Mental Health" | "Coaching" | "Courses" | "Ask a Therapist";
const CATEGORIES: Category[] = ["All", "Mental Health", "Coaching", "Courses", "Ask a Therapist"];

const RESOURCE_CARDS = [
  {
    image: imgMentalHealth,
    badge: "Mental Health",
    title: "Mental Health Series",
    description: "Dive into a wealth of knowledge tailored for parents.",
  },
  {
    image: imgCoaching,
    badge: "Coaching",
    title: "Coaching for Lasting Change",
    description: "One-on-one guidance to help you navigate the ups and downs.",
  },
  {
    image: imgOnDemand,
    badge: "Courses",
    title: "On-Demand Courses",
    description: "Learn at your own pace with self-guided video courses.",
  },
  {
    image: imgAskTherapist,
    badge: "Ask a Therapist",
    title: "Ask a Therapist",
    description: "Real questions from parents, answered by our clinical team.",
  },
];

const FEATURES = [
  {
    img: imgTrustedByParents,
    title: "Trusted by Parents",
    desc: "Developed by leading mental health professionals with years of clinical practice.",
    reverse: false,
  },
  {
    img: imgOnDemand,
    title: "Expert Guidance",
    desc: "Access support whenever you need it, day or night, at your own pace.",
    reverse: true,
  },
  {
    img: imgRealSupport,
    title: "Real Support for You",
    desc: "Get answers when your child needs them most.",
    reverse: false,
  },
];

const FAQS = [
  {
    question: "How long is this program?",
    answer:
      "Mental health support doesn't have a timeline and neither does our program. While the initial Parenting with Purpose roadmap is expected to take around 4 weeks to complete, we offer ongoing support as long as you need it.",
    defaultOpen: true,
  },
  {
    question: "What can I expect from a meeting with my coach?",
    answer:
      "Each coaching session is personalized to your family's unique needs and goals. Your coach will listen actively, offer evidence-based strategies, and help you develop an action plan that fits your lifestyle.",
    defaultOpen: false,
  },
  {
    question: "How often can I message my coach?",
    answer:
      "You can message your coach at any time through our platform. Most coaches respond within a few hours during business hours, and within 24 hours at other times.",
    defaultOpen: false,
  },
  {
    question: "How often will I meet with my coach?",
    answer:
      "Meeting frequency is flexible and based on your needs. Most families start with weekly sessions and adjust from there.",
    defaultOpen: false,
  },
  {
    question: "What can I expect from a meeting with my coach?",
    answer: "Sessions typically include a check-in, goal review, new strategies, and a plan for the week ahead.",
    defaultOpen: false,
  },
  {
    question: "How often can I message my coach?",
    answer: "Messaging is unlimited — reach out whenever something comes up.",
    defaultOpen: false,
  },
  {
    question: "How long until we deliver your first blog post?",
    answer:
      "Our team reviews your intake information and typically delivers the first resource within 48 hours of enrollment.",
    defaultOpen: false,
  },
];

const PARTNER_LOGOS = [
  { src: imgQBUnited, alt: "QB United", height: 40 },
  { src: imgHopeSquad, alt: "Hope Squad", height: 40 },
  { src: imgCookCenter, alt: "Cook Center for Human Connection", height: 44 },
  { src: imgStaffGuidance, alt: "Staff Guidance", height: 40 },
  { src: imgElizaChat, alt: "Eliza Chat", height: 36 },
];

/* Where each "Explore" card leads (sample detail pages until each resource has its own) */
const EXPLORE_ROUTES: Record<string, string> = {
  "Mental Health": "/mental-health-series/building-your-childs-confidence",
  Coaching: "/parent-coaching",
  Courses: "/courses/milestones-to-progress",
  "Ask a Therapist": "/ask-a-therapist/1",
};

function FaqItem({ item, index }: { item: (typeof FAQS)[0]; index: number }) {
  const [open, setOpen] = useState(item.defaultOpen);
  return (
    <motion.div
      className="overflow-hidden rounded-pg-md bg-white shadow-pg-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
    >
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between px-8 py-6 text-left"
      >
        <span className="flex-1 pr-4 text-xl leading-snug font-bold text-pg-navy opacity-88">{item.question}</span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.22 }}
          className="flex h-5 w-5 shrink-0 items-center justify-center"
        >
          <div className="relative h-5 w-5">
            <div className="absolute top-1/2 left-0 h-[3px] w-full -translate-y-1/2 rounded-full bg-pg-navy opacity-80" />
            <div className="absolute top-0 left-1/2 h-full w-[3px] -translate-x-1/2 rounded-full bg-pg-navy opacity-80" />
          </div>
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        style={{ overflow: "hidden" }}
      >
        <div className="flex flex-col gap-3 px-8 pb-6">
          <div className="h-[3px] w-5 rounded-full bg-pg-live opacity-80" />
          <p className="text-sm leading-relaxed text-pg-navy opacity-70">{item.answer}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function PartnersCarousel() {
  const doubled = [...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS];
  return (
    <section className="overflow-hidden bg-pg-cream py-20">
      <style>{`
        @keyframes marquee-v1 { 0% { transform: translateX(0); } 100% { transform: translateX(-33.3333%); } }
        .marquee-track-v1 { animation: marquee-v1 30s linear infinite; will-change: transform; }
        .marquee-track-v1:hover { animation-play-state: paused; }
      `}</style>
      <motion.h3
        className="mb-10 text-center text-2xl font-semibold text-pg-teal-dark"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Our Passionate Partners
      </motion.h3>
      <div className="relative">
        <div
          className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-24"
          style={{ background: "linear-gradient(to right, var(--pg-cream), transparent)" }}
        />
        <div
          className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-24"
          style={{ background: "linear-gradient(to left, var(--pg-cream), transparent)" }}
        />
        <div className="marquee-track-v1 flex items-center" style={{ width: "max-content" }}>
          {doubled.map((logo, i) => (
            <div key={i} className="flex flex-shrink-0 items-center justify-center px-10">
              <img
                src={logo.src}
                alt={logo.alt}
                style={{ height: logo.height, width: "auto", objectFit: "contain", mixBlendMode: "multiply" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePageV1() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const left = FAQS.slice(0, Math.ceil(FAQS.length / 2));
  const right = FAQS.slice(Math.ceil(FAQS.length / 2));

  return (
    <div className="min-h-screen overflow-x-clip bg-pg-cream pt-14">
      {/* ── HERO ── */}
      <section className="overflow-hidden bg-pg-cream">
        <div className="mx-auto max-w-pg-page px-6 py-14 md:px-10 md:py-20 lg:px-14">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              className="max-w-[540px]"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h1 className="mb-5 text-pg-display tracking-[-0.02em] text-pg-navy">Discover Resources That Can Help</h1>
              <p className="mb-8 max-w-[480px] text-base leading-relaxed text-pg-slate">
                Find trusted guidance, practical tips, and expert resources to help you navigate everyday parenting
                challenges.
              </p>

              <div
                className="flex max-w-[440px] items-center gap-3 rounded-pg-2xl bg-white px-5 py-2 shadow-pg-card"
                style={{ boxShadow: "var(--pg-shadow-card)" }}
              >
                <Search size={18} className="shrink-0 text-pg-slate" />
                <input
                  className="flex-1 bg-transparent text-sm text-pg-navy outline-none placeholder:text-pg-slate"
                  placeholder="Anxiety in Children"
                />
                <Button size="s" className="shrink-0">
                  Search
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="relative mx-auto w-full max-w-[570px] pr-7 pb-9 md:pr-10 md:pb-12 lg:mx-0 lg:ml-auto"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="absolute right-0 bottom-0 h-[78%] w-[66%] rounded-pg-xl bg-pg-sage" />
              <img
                src={imgHeroBanner}
                alt="A mother and daughter sharing a joyful moment at home"
                className="relative z-10 aspect-[16/10] w-full rounded-pg-xl object-cover shadow-pg-card"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FILTER BAR ── */}
      <section
        className="sticky top-14 z-30 border-y border-pg-cream-dark bg-white"
        style={{ boxShadow: "var(--pg-shadow-card)" }}
      >
        <div className="mx-auto flex max-w-pg-page items-center gap-2 overflow-x-auto px-6 py-3 md:px-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="shrink-0 rounded-full px-4 py-2 text-xs font-medium transition-colors"
              style={{
                background: activeCategory === cat ? "var(--pg-navy)" : "var(--pg-cream-dark)",
                color: activeCategory === cat ? "var(--pg-white)" : "var(--pg-slate)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── RESOURCES ── */}
      <section className="bg-pg-tint-soft py-14">
        <div className="mx-auto max-w-pg-page px-6 md:px-10 lg:px-14">
          <div className="mb-6 flex items-center gap-2">
            <div className="h-5 w-1 rounded-full bg-pg-sage" />
            <span className="text-xl font-semibold text-pg-navy">Browse All Resources</span>
            <div className="rounded-full bg-pg-tint px-2 py-0.5">
              <span className="text-xs font-medium text-pg-teal-dark">24 resources</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {RESOURCE_CARDS.map((card, i) => (
              <motion.div
                key={card.title + i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
              >
                <UnifiedCard
                  image={{ src: card.image, alt: "" }}
                  badge={card.badge}
                  title={card.title}
                  description={card.description}
                  cta={{ label: "Explore", to: EXPLORE_ROUTES[card.badge] }}
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-10 mb-12 flex justify-center">
            <ButtonLink to="/mental-health-series" variant="secondary">
              View more resources <ArrowRight size={14} />
            </ButtonLink>
          </div>

          {/* Feature cards: quiz CTA + expert therapists */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <motion.div
              className="group relative flex min-h-[340px] flex-col items-center justify-center overflow-hidden rounded-pg-2xl border border-white/10 px-8 py-10 text-center"
              style={{
                background:
                  "radial-gradient(120% 90% at 50% 0%, color-mix(in srgb, var(--pg-sage) 38%, transparent) 0%, color-mix(in srgb, var(--pg-sage) 0%, transparent) 60%), var(--pg-navy)",
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55 }}
            >
              <h3 className="text-[28px] leading-[1.2] font-medium text-white">Not sure where to start?</h3>
              <p className="mt-3 max-w-[360px] text-base leading-[1.5] font-normal text-white/70">
                Answer a few quick questions and we'll point you to the right resources.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button variant="inverse">
                  <Send size={14} />
                  Take the Quiz
                </Button>
                <Button variant="inverse-secondary">Learn more</Button>
              </div>
            </motion.div>

            <MotionLink
              to="/ask-a-therapist"
              className="group relative block min-h-[340px] overflow-hidden rounded-pg-2xl no-underline"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              <img
                src={imgMentalHealth}
                alt="A therapist speaking with a young client"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-(--pg-dur-reveal) group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pg-navy via-pg-navy/40 to-transparent" />
              <div className="absolute right-0 bottom-0 left-0 flex items-end justify-between gap-4 p-8">
                <div>
                  <h3 className="max-w-[320px] text-[28px] leading-[1.2] font-medium text-white">
                    Expert therapists available to help
                  </h3>
                  <p className="mt-2 text-base leading-[1.5] font-normal text-white/75">
                    Licensed clinicians, ready when you are.
                  </p>
                </div>
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-pg-navy transition-transform duration-(--pg-dur-base) group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <ArrowRight size={18} />
                </span>
              </div>
            </MotionLink>
          </div>
        </div>
      </section>

      {/* ── WHY ── */}
      <section className="flex flex-col items-center gap-16 bg-pg-cream px-6 py-20 md:px-10 lg:px-14">
        <motion.div
          className="flex max-w-3xl flex-col items-center gap-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="text-base font-semibold tracking-pg-eyebrow text-pg-navy uppercase">Why</span>
          <h2 className="text-pg-h1 tracking-tight text-pg-navy">Built on real clinical experience</h2>
          <p className="text-xl leading-relaxed text-pg-navy">
            We believe every parent deserves access to expert guidance. Our resources are built on real clinical
            experience and designed with your family in mind.
          </p>
        </motion.div>

        <div className="flex w-full max-w-4xl flex-col gap-14">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              className={`flex flex-col items-center gap-8 md:flex-row md:gap-24 ${f.reverse ? "md:flex-row-reverse" : ""}`}
              initial={{ opacity: 0, x: f.reverse ? 48 : -48 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              <div className="h-60 w-full shrink-0 overflow-hidden rounded-pg-md md:w-80">
                <img src={f.img} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="flex max-w-sm flex-col gap-2">
                <p className="text-2xl leading-relaxed font-bold text-pg-teal-dark">{f.title}</p>
                <p className="text-base leading-relaxed text-pg-navy">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-pg-cream px-6 py-16 md:px-10 lg:px-14">
        <motion.h2
          className="mb-10 text-center text-2xl font-bold text-pg-navy capitalize"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="mx-auto flex max-w-pg-page flex-col gap-8 md:flex-row">
          <div className="flex flex-1 flex-col gap-5">
            {left.map((item, i) => (
              <FaqItem key={i} item={item} index={i} />
            ))}
          </div>
          <div className="flex flex-1 flex-col gap-5 md:pt-8">
            {right.map((item, i) => (
              <FaqItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      <PartnersCarousel />

      {/* ── CTA / JOIN US ── */}
      <section className="bg-pg-sage px-6 py-14 md:px-10 lg:px-14">
        <div className="mx-auto flex max-w-pg-page flex-col items-center justify-center gap-12 lg:flex-row">
          <motion.div
            className="relative h-[240px] w-full shrink-0 overflow-hidden rounded-pg-xl lg:h-[210px] lg:w-[420px]"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <img src={imgNewsletter} alt="" className="h-full w-full object-cover" />
          </motion.div>

          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <h2 className="max-w-md text-pg-h1 text-pg-navy">Join Us!</h2>
            <p className="max-w-sm text-sm leading-relaxed text-pg-navy">
              Subscribe to our weekly newsletter and be a part of our journey to self discovery and love.
            </p>
            {subscribed ? (
              <p className="text-base font-semibold text-pg-navy">✓ Thanks for subscribing!</p>
            ) : (
              <div className="flex max-w-md items-center gap-2 rounded-pg-xl bg-pg-tint-soft p-2">
                <input
                  className="min-w-0 flex-1 bg-transparent px-4 py-2 text-sm text-pg-navy outline-none placeholder:text-pg-slate"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button onClick={() => email && setSubscribed(true)} className="shrink-0 whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
