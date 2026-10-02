import { Button, ButtonLink } from "./components/Button";
import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "./components/icons";
import UnifiedCard from "./components/UnifiedCard";

import imgMentalHealth from "@/imports/HomePagePgV2/b75247b5542e76cdf5c675041b7a6e465e33ef23.png";
import imgCoaching from "@/imports/HomePagePgV2/debf8187f5722e2bc3e9c2869fc7308cfe71f1fc.png";
import imgOnDemand from "@/imports/HomePagePgV2/2efa62174bfcf85665907842ba36899e44e02fe9.png";
import imgAskTherapist from "@/imports/HomePagePgV2/277938b24e46ee2598e5638b70da775e75a5d182.png";
import imgTrustedByParents from "@/imports/HomePagePgV2/fb9567d2a70815a5c0307df9118cb49c401b72a3.png";
import imgRealSupport from "@/imports/HomePagePgV2/dabd6f5341bd78f44bfe8771b4f0e2a23c9565f1.png";

import imgQBUnited from "@/imports/QB_united-1.png";
import imgHopeSquad from "@/imports/HopeSquad-1.png";
import imgCookCenter from "@/imports/CCHC_Logo-greyscale-1.png";
import imgStaffGuidance from "@/imports/StaffGuidance.png";
import imgElizaChat from "@/imports/elizachat_logo_horizontal.svg";

const imgHeroBanner =
  "https://images.unsplash.com/photo-1560707856-3af2ff5ea652?auto=format&fit=crop&w=1400&h=900&q=80";

type Category = "All" | "Mental Health" | "Coaching" | "Courses" | "Ask a Therapist";
const CATEGORIES: Category[] = ["All", "Mental Health", "Coaching", "Courses", "Ask a Therapist"];

// Colors pulled from the PG Design System (Brand Color tokens): Navy Base, Cyan/Teal Base, Teal Base, Peach Base, Sage 30
const SEARCH_THEMES = [
  { label: "All", bg: "var(--pg-navy)", color: "var(--pg-white)" },
  { label: "Courses", bg: "var(--pg-sage)", color: "var(--pg-navy)" },
  { label: "Lessons", bg: "var(--pg-teal)", color: "var(--pg-white)" },
  { label: "Ask A Therapist", bg: "#e8a497", color: "var(--pg-navy)" },
  { label: "Instant Insights", bg: "var(--pg-mist)", color: "var(--pg-navy)" },
];

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

const WHY_CARDS = [
  {
    title: "Trusted by Parents",
    desc: "Developed by leading mental health professionals with years of clinical practice.",
    tag: "Made for families",
    img: imgTrustedByParents,
    alt: "A mother walking hand in hand with her child",
  },
  {
    title: "Expert Guidance",
    desc: "Access support whenever you need it, day or night, at your own pace.",
    tag: "Day or night",
    img: imgOnDemand,
    alt: "A person using a laptop at home",
  },
  {
    title: "Real Support for You",
    desc: "Get answers when your child needs them most.",
    tag: "Always here",
    img: imgRealSupport,
    alt: "Two people holding hands in support",
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

function FaqRow({ item, index }: { item: typeof FAQS[0]; index: number }) {
  const [open, setOpen] = useState(item.defaultOpen);
  return (
    <motion.div
      className="bg-white rounded-pg-md shadow-pg-card overflow-hidden"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
    >
      <button type="button" aria-expanded={open} onClick={() => setOpen((o) => !o)} className="w-full text-left flex items-center justify-between px-8 py-6">
        <span className="font-bold text-pg-navy text-xl leading-snug opacity-88 flex-1 pr-4">
          {item.question}
        </span>
        <motion.div animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.22 }} className="flex items-center justify-center w-5 h-5 shrink-0">
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
    <section className="bg-white py-20 overflow-hidden border-y border-pg-cream-dark">
      <style>{`
        @keyframes marquee-v2 { 0% { transform: translateX(0); } 100% { transform: translateX(-33.3333%); } }
        .marquee-track-v2 { animation: marquee-v2 30s linear infinite; will-change: transform; }
        .marquee-track-v2:hover { animation-play-state: paused; }
      `}</style>
      <motion.h3
        className="font-semibold text-pg-teal text-2xl text-center mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Our Passionate Partners
      </motion.h3>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, var(--pg-white), transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, var(--pg-white), transparent)" }} />
        <div className="flex items-center marquee-track-v2" style={{ width: "max-content" }}>
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

export default function HomePageV2() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <main className="pt-14 bg-pg-cream min-h-screen">
      {/* ── HERO ── */}
      <section className="overflow-hidden bg-pg-cream">
        <div className="max-w-pg-page mx-auto px-6 md:px-10 lg:px-14 py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
            <motion.div
              className="max-w-[540px]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <p className="text-pg-teal-dark text-xs font-semibold tracking-pg-eyebrow uppercase mb-5">
                For Parents
              </p>
              {/* Heading/H1 - Medium - 2XL: Poppins Medium 48/56 */}
              <h1 className="text-pg-navy font-medium text-[38px] md:text-[50px] leading-[1.08] tracking-normal">
                Discover Resources That Can Help
              </h1>
              {/* Body/Medium - Regular: Poppins Regular 16/1.5 */}
              <p className="font-normal text-pg-slate text-base leading-[1.5] mt-6 max-w-[500px]">
                Find trusted guidance, practical tips, and expert resources to help you navigate everyday parenting challenges.
              </p>
            </motion.div>

            <motion.div
              className="relative w-full max-w-[570px] mx-auto lg:mx-0 lg:ml-auto pb-9 pr-7 md:pb-12 md:pr-10"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
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

      {/* ── QUIZ / SEARCH PANEL ── */}
      <section className="bg-pg-cream px-6 md:px-10 lg:px-14 pb-14">
        <motion.div
          className="max-w-pg-page mx-auto bg-pg-navy rounded-pg-md px-8 md:px-16 py-10 md:py-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-center md:text-left">
            <div>
              {/* Heading/H2 - Medium - XL: Poppins Medium 40/48 */}
              <h2 className="font-medium text-white text-[28px] md:text-[40px] leading-[1.15] md:leading-[48px]">
                Not sure where to start?
              </h2>
              {/* Body/Medium - Regular: Poppins Regular 16/1.5 */}
              <p className="font-normal text-white/85 text-base leading-[1.5] mt-2">
                Search what's on your mind, or answer a few quick questions.
              </p>
            </div>

            <div>
              <div className="w-full bg-white rounded-full shadow-pg-overlay pl-5 pr-1 py-1 flex items-center gap-2 transition-shadow focus-within:shadow-pg-overlay">
                <input
                  className="flex-1 min-w-0 text-[14px] font-medium text-pg-navy bg-transparent outline-none placeholder:text-pg-teal placeholder:font-normal py-1.5"
                  placeholder="Anxiety in Children"
                />
                <Button size="s" className="shrink-0 rounded-full">
                  Search
                  <ArrowRight size={13} />
                </Button>
              </div>

              <p className="text-white/70 text-xs mt-4 mb-2.5">
                Search for specific content related to these themes
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {SEARCH_THEMES.map((theme) => (
                  <button
                    key={theme.label}
                    className="text-xs font-semibold px-4 py-2 rounded-full transition-transform hover:scale-105"
                    style={{ background: theme.bg, color: theme.color }}
                  >
                    {theme.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── RESOURCES (full-width grid, no sidebar) ── */}
      <section className="bg-white px-6 md:px-10 lg:px-14 py-16">
        <div className="max-w-pg-page mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            {/* Heading/H2 - Medium - XL: Poppins Medium 40/48 */}
            <h2 className="font-medium text-pg-navy text-[28px] md:text-[40px] leading-[1.15] md:leading-[48px]">Explore Resources</h2>
            <div className="flex items-center gap-2 overflow-x-auto">
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

          <div className="flex justify-center mt-10">
            <ButtonLink to="/mental-health-series" variant="secondary">
              View more resources <ArrowRight size={14} />
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* ── WHY (3-up cards) ── */}
      <section className="bg-pg-cream py-20 px-6 md:px-10 lg:px-14">
        <motion.div
          className="flex flex-col items-center gap-4 max-w-3xl mx-auto text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="font-semibold text-pg-navy text-base uppercase tracking-pg-eyebrow">Why</span>
          {/* Heading/H2 - Medium - XL: Poppins Medium 40/48 */}
          <h2 className="font-medium text-pg-navy text-[28px] md:text-[40px] leading-[1.15] md:leading-[48px]">
            Built on real clinical experience
          </h2>
          {/* Body/Medium - Regular: Poppins Regular 16/1.5 */}
          <p className="font-normal text-pg-slate text-base leading-[1.5] max-w-2xl">
            We believe every parent deserves access to expert guidance. Our resources are built on real clinical experience and designed with your family in mind.
          </p>
        </motion.div>

        <div className="max-w-pg-page mx-auto grid grid-cols-1 md:grid-cols-[5fr_7fr] md:grid-rows-2 gap-4">
          {WHY_CARDS.map((card, i) => {
            const featured = i === 0;
            const tone = i === 1 ? "var(--pg-sage)" : "#e8a497";
            return featured ? (
              <motion.div
                key={card.title}
                className="group relative overflow-hidden rounded-pg-2xl md:row-span-2 min-h-[420px] p-7 md:p-8 flex flex-col justify-between text-white"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55 }}
              >
                <img
                  src={card.img}
                  alt={card.alt}
                  className="absolute inset-0 w-full h-full object-cover object-[center_30%] transition-transform duration-(--pg-dur-reveal) group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-pg-navy/85 via-pg-navy/10 to-pg-navy/75" />
                <div className="relative">
                  <h3 className="font-medium text-[28px] leading-[1.2]">{card.title}</h3>
                  <p className="font-normal text-base leading-[1.5] mt-3 max-w-[300px] text-white/90">{card.desc}</p>
                </div>
                <div className="relative">
                  <span className="inline-block rounded-full border border-white px-4 py-1.5 text-xs font-medium">{card.tag}</span>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={card.title}
                className="relative overflow-hidden rounded-pg-2xl min-h-[260px] p-7 md:p-8 flex flex-col justify-between text-pg-navy"
                style={{ background: tone }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
              >
                <img
                  src={card.img}
                  alt={card.alt}
                  className="h-40 w-full md:h-auto md:w-[42%] md:absolute md:right-4 md:top-4 md:bottom-4 rounded-pg-xl object-cover mb-5 md:mb-0"
                />
                <div className="relative md:max-w-[52%]">
                  <h3 className="font-medium text-[28px] leading-[1.2]">{card.title}</h3>
                  <p className="font-normal text-base leading-[1.5] mt-3">{card.desc}</p>
                </div>
                <div className="relative mt-6 md:mt-0">
                  <span className="inline-block rounded-full bg-pg-navy text-white px-4 py-1.5 text-xs font-medium">{card.tag}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── FAQ (single column) ── */}
      <section className="bg-pg-cream py-16 px-6 md:px-10 lg:px-14">
        <motion.h2
          className="font-bold text-pg-navy text-2xl text-center mb-10 capitalize"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="flex flex-col gap-5 max-w-[760px] mx-auto">
          {FAQS.map((item, i) => <FaqRow key={i} item={item} index={i} />)}
        </div>
      </section>

      <PartnersCarousel />

      {/* ── CTA (centered card, no image) ── */}
      <section className="bg-pg-cream px-6 md:px-10 lg:px-14 py-16 md:py-20">
        <motion.div
          className="max-w-pg-page mx-auto rounded-pg-2xl md:rounded-pg-2xl border border-white/10 shadow-pg-overlay px-8 md:px-16 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
          style={{
            background:
              "radial-gradient(90% 130% at 100% 0%, color-mix(in srgb, var(--pg-sage) 28%, transparent) 0%, color-mix(in srgb, var(--pg-sage) 0%, transparent) 55%), var(--pg-navy)",
          }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
        >
          <div>
            {/* Heading/H2 - Medium - XL: Poppins Medium 40/48 */}
            <h2 className="font-medium text-white text-[28px] md:text-[40px] leading-[1.15] md:leading-[48px]">Join Us!</h2>
            {/* Body/Medium - Regular: Poppins Regular 16/1.5 */}
            <p className="font-normal text-white/80 text-base leading-[1.5] mt-4 max-w-md">
              Subscribe to our weekly newsletter and be a part of our journey to self discovery and love.
            </p>
          </div>

          <div>
            <p className="font-normal text-white text-sm mb-3">Stay up to date</p>
            {subscribed ? (
              <p className="text-pg-sage font-semibold text-base">✓ Thanks for subscribing!</p>
            ) : (
              <div className="flex items-center gap-2 rounded-pg-xl bg-pg-navy-hover border border-white/10 p-1.5 focus-within:border-pg-sage/60 transition-colors">
                <input
                  type="email"
                  className="flex-1 min-w-0 px-4 py-3 bg-transparent text-sm text-white outline-none placeholder:text-white/60"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button variant="inverse" onClick={() => email && setSubscribed(true)} className="shrink-0 whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            )}
            <p className="font-normal text-white/60 text-xs mt-3">
              By subscribing, you agree to our <a href="/cookies-policy" className="underline hover:text-white transition-colors">Privacy Policy</a>
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
