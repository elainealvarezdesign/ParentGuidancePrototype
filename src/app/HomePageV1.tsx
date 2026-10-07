import { useState } from "react";
import { Link } from "react-router";
import { Button, ButtonLink } from "./components/Button";
import { motion } from "motion/react";
import {
  Search,
  ArrowRight,
  Send,
  ShieldCheck,
  Clock,
} from "./components/icons";
import UnifiedCard from "./components/UnifiedCard";

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
  { question: "What can I expect from a meeting with my coach?", answer: "Each coaching session is personalized to your family's unique needs and goals. Your coach will listen actively, offer evidence-based strategies, and help you develop an action plan that fits your lifestyle.", defaultOpen: false },
  { question: "How often can I message my coach?", answer: "You can message your coach at any time through our platform. Most coaches respond within a few hours during business hours, and within 24 hours at other times.", defaultOpen: false },
  { question: "How often will I meet with my coach?", answer: "Meeting frequency is flexible and based on your needs. Most families start with weekly sessions and adjust from there.", defaultOpen: false },
  { question: "What can I expect from a meeting with my coach?", answer: "Sessions typically include a check-in, goal review, new strategies, and a plan for the week ahead.", defaultOpen: false },
  { question: "How often can I message my coach?", answer: "Messaging is unlimited — reach out whenever something comes up.", defaultOpen: false },
  { question: "How long until we deliver your first blog post?", answer: "Our team reviews your intake information and typically delivers the first resource within 48 hours of enrollment.", defaultOpen: false },
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

function FaqItem({ item, index }: { item: typeof FAQS[0]; index: number }) {
  const [open, setOpen] = useState(item.defaultOpen);
  return (
    <motion.div
      className="bg-white rounded-pg-md shadow-pg-card overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
    >
      <button type="button" aria-expanded={open} onClick={() => setOpen((o) => !o)} className="w-full text-left flex items-center justify-between px-8 py-6">
        <span className="font-bold text-pg-navy text-xl leading-snug opacity-88 flex-1 pr-4">
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.22 }}
          className="flex items-center justify-center w-5 h-5 shrink-0"
        >
          <div className="relative w-5 h-5">
            <div className="absolute top-1/2 left-0 w-full h-[3px] bg-pg-navy rounded-full opacity-80 -translate-y-1/2" />
            <div className="absolute left-1/2 top-0 h-full w-[3px] bg-pg-navy rounded-full opacity-80 -translate-x-1/2" />
          </div>
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        style={{ overflow: "hidden" }}
      >
        <div className="px-8 pb-6 flex flex-col gap-3">
          <div className="w-5 h-[3px] bg-pg-live rounded-full opacity-80" />
          <p className="text-pg-navy text-sm leading-relaxed opacity-70">{item.answer}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function PartnersCarousel() {
  const doubled = [...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS];
  return (
    <section className="bg-pg-cream py-20 overflow-hidden">
      <style>{`
        @keyframes marquee-v1 { 0% { transform: translateX(0); } 100% { transform: translateX(-33.3333%); } }
        .marquee-track-v1 { animation: marquee-v1 30s linear infinite; will-change: transform; }
        .marquee-track-v1:hover { animation-play-state: paused; }
      `}</style>
      <motion.h3
        className="font-semibold text-pg-teal-dark text-2xl text-center mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Our Passionate Partners
      </motion.h3>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, var(--pg-cream), transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, var(--pg-cream), transparent)" }} />
        <div className="flex items-center marquee-track-v1" style={{ width: "max-content" }}>
          {doubled.map((logo, i) => (
            <div key={i} className="flex items-center justify-center flex-shrink-0 px-10">
              <img src={logo.src} alt={logo.alt} style={{ height: logo.height, width: "auto", objectFit: "contain", mixBlendMode: "multiply" }} />
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
    <main className="pt-14 bg-pg-cream min-h-screen overflow-x-clip">
      {/* ── HERO ── */}
      <section className="bg-pg-cream overflow-hidden">
        <div className="max-w-pg-page mx-auto px-6 md:px-10 lg:px-14 py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
            <motion.div
              className="max-w-[540px]"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h1 className="text-pg-display text-pg-navy tracking-[-0.02em] mb-5">
                Discover Resources That Can Help
              </h1>
              <p className="text-pg-slate text-base leading-relaxed mb-8 max-w-[480px]">
                Find trusted guidance, practical tips, and expert resources to help you navigate everyday parenting challenges.
              </p>

              <div className="bg-white rounded-pg-2xl px-5 py-2 flex items-center gap-3 shadow-pg-card max-w-[440px]" style={{ boxShadow: "var(--pg-shadow-card)" }}>
                <Search size={18} className="text-pg-slate shrink-0" />
                <input
                  className="flex-1 text-sm text-pg-navy bg-transparent outline-none placeholder:text-pg-slate"
                  placeholder="Anxiety in Children"
                />
                <Button size="s" className="shrink-0">
                  Search
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="relative w-full max-w-[570px] mx-auto lg:mx-0 lg:ml-auto pb-9 pr-7 md:pb-12 md:pr-10"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="absolute right-0 bottom-0 w-[66%] h-[78%] rounded-pg-xl bg-pg-sage" />
              <img
                src={imgHeroBanner}
                alt="A mother and daughter sharing a joyful moment at home"
                className="relative z-10 w-full aspect-[16/10] object-cover rounded-pg-xl shadow-pg-card"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FILTER BAR ── */}
      <section className="bg-white border-y border-pg-cream-dark sticky top-14 z-30" style={{ boxShadow: "var(--pg-shadow-card)" }}>
        <div className="max-w-pg-page mx-auto px-6 md:px-10 py-3 flex items-center gap-2 overflow-x-auto">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="shrink-0 text-xs font-medium px-4 py-2 rounded-full transition-colors"
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
        <div className="max-w-pg-page mx-auto px-6 md:px-10 lg:px-14">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1 h-5 rounded-full bg-pg-sage" />
            <span className="font-semibold text-pg-navy text-xl">Browse All Resources</span>
            <div className="bg-pg-tint rounded-full px-2 py-0.5">
              <span className="font-medium text-pg-teal-dark text-xs">24 resources</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {RESOURCE_CARDS.map((card, i) => (
              <motion.div
                key={card.title + i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
              >
                <UnifiedCard
                  image={card.image}
                  imageAlt={card.title}
                  badge={card.badge}
                  title={card.title}
                  description={card.description}
                  buttonLabel="Explore"
                  to={EXPLORE_ROUTES[card.badge]}
                />
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-10 mb-12">
            <ButtonLink to="/mental-health-series" variant="secondary">
              View more resources <ArrowRight size={14} />
            </ButtonLink>
          </div>

          {/* Feature cards: quiz CTA + expert therapists */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              className="group relative overflow-hidden rounded-pg-2xl border border-white/10 min-h-[340px] px-8 py-10 flex flex-col items-center justify-center text-center"
              style={{
                background:
                  "radial-gradient(120% 90% at 50% 0%, color-mix(in srgb, var(--pg-sage) 38%, transparent) 0%, color-mix(in srgb, var(--pg-sage) 0%, transparent) 60%), var(--pg-navy)",
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55 }}
            >
              <h3 className="font-medium text-white text-[28px] leading-[1.2]">
                Not sure where to start?
              </h3>
              <p className="font-normal text-white/70 text-base leading-[1.5] mt-3 max-w-[360px]">
                Answer a few quick questions and we'll point you to the right resources.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
                <Button variant="inverse">
                  <Send size={14} />
                  Take the Quiz
                </Button>
                <Button variant="inverse-secondary">
                  Learn more
                </Button>
              </div>
            </motion.div>

            <MotionLink
              to="/ask-a-therapist"
              className="group relative block overflow-hidden rounded-pg-2xl min-h-[340px] no-underline"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              <img
                src={imgMentalHealth}
                alt="A therapist speaking with a young client"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-(--pg-dur-reveal) group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pg-navy via-pg-navy/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between gap-4">
                <div>
                  <h3 className="font-medium text-white text-[28px] leading-[1.2] max-w-[320px]">
                    Expert therapists available to help
                  </h3>
                  <p className="font-normal text-white/75 text-base leading-[1.5] mt-2">
                    Licensed clinicians, ready when you are.
                  </p>
                </div>
                <span className="shrink-0 w-12 h-12 rounded-full bg-white text-pg-navy flex items-center justify-center transition-transform duration-(--pg-dur-base) group-hover:translate-x-1" aria-hidden="true">
                  <ArrowRight size={18} />
                </span>
              </div>
            </MotionLink>
          </div>
        </div>
      </section>

      {/* ── WHY ── */}
      <section className="bg-pg-cream py-20 px-6 md:px-10 lg:px-14 flex flex-col items-center gap-16">
        <motion.div
          className="flex flex-col items-center gap-4 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="font-semibold text-pg-navy text-base uppercase tracking-pg-eyebrow">Why</span>
          <h2 className="text-pg-h1 text-pg-navy tracking-tight">
            Built on real clinical experience
          </h2>
          <p className="text-pg-navy text-xl leading-relaxed">
            We believe every parent deserves access to expert guidance. Our resources are built on real clinical experience and designed with your family in mind.
          </p>
        </motion.div>

        <div className="flex flex-col gap-14 w-full max-w-4xl">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-24 ${f.reverse ? "md:flex-row-reverse" : ""}`}
              initial={{ opacity: 0, x: f.reverse ? 48 : -48 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              <div className="w-full md:w-80 h-60 rounded-pg-md overflow-hidden shrink-0">
                <img src={f.img} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-2 max-w-sm">
                <p className="font-bold text-pg-teal-dark text-2xl leading-relaxed">{f.title}</p>
                <p className="text-pg-navy text-base leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-pg-cream py-16 px-6 md:px-10 lg:px-14">
        <motion.h2
          className="font-bold text-pg-navy text-2xl text-center mb-10 capitalize"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-8 max-w-pg-page mx-auto">
          <div className="flex flex-col gap-5 flex-1">
            {left.map((item, i) => <FaqItem key={i} item={item} index={i} />)}
          </div>
          <div className="flex flex-col gap-5 flex-1 md:pt-8">
            {right.map((item, i) => <FaqItem key={i} item={item} index={i} />)}
          </div>
        </div>
      </section>

      <PartnersCarousel />

      {/* ── CTA / JOIN US ── */}
      <section className="bg-pg-sage px-6 md:px-10 lg:px-14 py-14">
        <div className="max-w-pg-page mx-auto flex flex-col lg:flex-row items-center justify-center gap-12">
          <motion.div
            className="relative overflow-hidden rounded-pg-xl shrink-0 w-full lg:w-[420px] h-[240px] lg:h-[210px]"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <img src={imgNewsletter} alt="" className="w-full h-full object-cover" />
          </motion.div>

          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <h2 className="text-pg-h1 text-pg-navy max-w-md">Join Us!</h2>
            <p className="text-pg-navy text-sm leading-relaxed max-w-sm">
              Subscribe to our weekly newsletter and be a part of our journey to self discovery and love.
            </p>
            {subscribed ? (
              <p className="text-pg-navy font-semibold text-base">✓ Thanks for subscribing!</p>
            ) : (
              <div className="flex items-center gap-2 rounded-pg-xl bg-pg-tint-soft p-2 max-w-md">
                <input
                  className="flex-1 min-w-0 px-4 py-2 bg-transparent text-sm text-pg-navy outline-none placeholder:text-pg-slate"
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
    </main>
  );
}
