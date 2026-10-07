import { Button, ButtonLink } from "@/components/ui/Button";
import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "@/components/ui/icons";
import { Link } from "react-router";
import UnifiedCard from "@/components/cards/UnifiedCard";
import { SearchField } from "@/components/ui/SearchField";
import { Field, TextInput } from "@/components/ui/Field";
import { FaqSection } from "@/sections/FaqSection";
import { PartnersStrip } from "@/sections/PartnersStrip";
import { homeFaq, homePartners } from "@/content/home";

/* Home V2 ("/home-v2"): an EXPLORATION kept for comparison while the final home is chosen. It is not
 * linked from the navigation. Shared parts come from the system; delete this page once a home is picked. */

import imgMentalHealth from "@/imports/HomePagePgV2/b75247b5542e76cdf5c675041b7a6e465e33ef23.png";
import imgCoaching from "@/imports/HomePagePgV2/debf8187f5722e2bc3e9c2869fc7308cfe71f1fc.png";
import imgOnDemand from "@/imports/HomePagePgV2/2efa62174bfcf85665907842ba36899e44e02fe9.png";
import imgAskTherapist from "@/imports/HomePagePgV2/277938b24e46ee2598e5638b70da775e75a5d182.png";
import imgTrustedByParents from "@/imports/HomePagePgV2/fb9567d2a70815a5c0307df9118cb49c401b72a3.png";
import imgRealSupport from "@/imports/HomePagePgV2/dabd6f5341bd78f44bfe8771b4f0e2a23c9565f1.png";

const imgHeroBanner =
  "https://images.unsplash.com/photo-1560707856-3af2ff5ea652?auto=format&fit=crop&w=1400&h=900&q=80";

type Category = "All" | "Mental Health" | "Coaching" | "Courses" | "Ask a Therapist";
const CATEGORIES: Category[] = ["All", "Mental Health", "Coaching", "Courses", "Ask a Therapist"];

// Colors pulled from the PG Design System (Brand Color tokens): Navy Base, Sage Base, Teal Base, Peach Base, Sage 30
const SEARCH_THEMES = [
  { label: "All", bg: "var(--pg-navy)", color: "var(--pg-white)" },
  { label: "Courses", bg: "var(--pg-sage)", color: "var(--pg-navy)" },
  { label: "Lessons", bg: "var(--pg-teal-dark)", color: "var(--pg-white)" },
  { label: "Ask A Therapist", bg: "var(--pg-peach)", color: "var(--pg-navy)" },
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

const EXPLORE_ROUTES: Record<string, string> = {
  "Mental Health": "/mental-health-series/building-your-childs-confidence",
  Coaching: "/parent-coaching",
  Courses: "/courses/milestones-to-progress",
  "Ask a Therapist": "/ask-a-therapist/1",
};

export default function HomePageV2() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");

  function subscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) return setError("Enter a valid email address.");
    setError("");
    setSubscribed(true);
  }

  return (
    <div className="mt-14 bg-pg-cream">
      {/* ── HERO ── */}
      <section className="overflow-hidden bg-pg-cream">
        <div className="mx-auto max-w-pg-page px-6 py-14 md:px-10 md:py-20 lg:px-14">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              className="max-w-[540px]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <p className="mb-5 text-xs font-semibold tracking-pg-eyebrow text-pg-teal-dark uppercase">For Parents</p>
              {/* Heading/H1 - Medium - 2XL: Poppins Medium 48/56 */}
              <h1 className="text-pg-display font-medium text-pg-navy">Discover Resources That Can Help</h1>
              {/* Body/Medium - Regular: Poppins Regular 16/1.5 */}
              <p className="mt-6 max-w-[500px] text-base leading-[1.5] font-normal text-pg-slate">
                Find trusted guidance, practical tips, and expert resources to help you navigate everyday parenting
                challenges.
              </p>
            </motion.div>

            <motion.div
              className="relative mx-auto w-full max-w-[570px] pr-7 pb-9 md:pr-10 md:pb-12 lg:mx-0 lg:ml-auto"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
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

      {/* ── QUIZ / SEARCH PANEL ── */}
      <section className="bg-pg-cream px-6 pb-14 md:px-10 lg:px-14">
        <motion.div
          className="mx-auto max-w-pg-page rounded-pg-md bg-pg-navy px-8 py-10 md:px-16 md:py-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
        >
          <div className="grid grid-cols-1 items-center gap-10 text-center md:grid-cols-2 md:text-left">
            <div>
              {/* Heading/H2 - Medium - XL: Poppins Medium 40/48 */}
              <h2 className="text-pg-h1 font-medium text-white">Not sure where to start?</h2>
              {/* Body/Medium - Regular: Poppins Regular 16/1.5 */}
              <p className="mt-2 text-base leading-[1.5] font-normal text-white/85">
                Search what's on your mind, or answer a few quick questions.
              </p>
            </div>

            <div>
              <SearchField
                variant="hero"
                label="Search resources"
                placeholder="Anxiety in Children"
                value={query}
                onValueChange={setQuery}
                action={
                  <Button size="s" className="shrink-0">
                    Search
                    <ArrowRight size={14} aria-hidden="true" />
                  </Button>
                }
              />

              <p className="mt-4 mb-2 text-xs text-white/70">Search for specific content related to these themes</p>
              <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                {SEARCH_THEMES.map((theme) => (
                  <button
                    key={theme.label}
                    type="button"
                    className="rounded-full px-4 py-2 text-xs font-semibold transition-transform hover:scale-105"
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
      <section className="bg-white px-6 py-16 md:px-10 lg:px-14">
        <div className="mx-auto max-w-pg-page">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Heading/H2 - Medium - XL: Poppins Medium 40/48 */}
            <h2 className="text-pg-h1 font-medium text-pg-navy">Explore Resources</h2>
            <div className="flex items-center gap-2 overflow-x-auto">
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

          <div className="mt-10 flex justify-center">
            <ButtonLink to="/mental-health-series" variant="secondary">
              View more resources <ArrowRight size={14} />
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* ── WHY (3-up cards) ── */}
      <section className="bg-pg-cream px-6 py-20 md:px-10 lg:px-14">
        <motion.div
          className="mx-auto mb-14 flex max-w-3xl flex-col items-center gap-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="text-base font-semibold tracking-pg-eyebrow text-pg-navy uppercase">Why</span>
          {/* Heading/H2 - Medium - XL: Poppins Medium 40/48 */}
          <h2 className="text-pg-h1 font-medium text-pg-navy">Built on real clinical experience</h2>
          {/* Body/Medium - Regular: Poppins Regular 16/1.5 */}
          <p className="max-w-2xl text-base leading-[1.5] font-normal text-pg-slate">
            We believe every parent deserves access to expert guidance. Our resources are built on real clinical
            experience and designed with your family in mind.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-pg-page grid-cols-1 gap-4 md:grid-cols-[5fr_7fr] md:grid-rows-2">
          {WHY_CARDS.map((card, i) => {
            const featured = i === 0;
            const tone = i === 1 ? "var(--pg-sage)" : "var(--pg-peach)";
            return featured ? (
              <motion.div
                key={card.title}
                className="group relative flex min-h-[420px] flex-col justify-between overflow-hidden rounded-pg-2xl p-7 text-white md:row-span-2 md:p-8"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55 }}
              >
                <img
                  src={card.img}
                  alt={card.alt}
                  className="absolute inset-0 h-full w-full object-cover object-[center_30%] transition-transform duration-(--pg-dur-reveal) group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-pg-navy/85 via-pg-navy/10 to-pg-navy/75" />
                <div className="relative">
                  <h3 className="text-[28px] leading-[1.2] font-medium">{card.title}</h3>
                  <p className="mt-3 max-w-[300px] text-base leading-[1.5] font-normal text-white/90">{card.desc}</p>
                </div>
                <div className="relative">
                  <span className="inline-block rounded-full border border-white px-4 py-2 text-xs font-medium">
                    {card.tag}
                  </span>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={card.title}
                className="relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-pg-2xl p-7 text-pg-navy md:p-8"
                style={{ background: tone }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
              >
                <img
                  src={card.img}
                  alt={card.alt}
                  className="mb-5 h-40 w-full rounded-pg-xl object-cover md:absolute md:top-4 md:right-4 md:bottom-4 md:mb-0 md:h-auto md:w-[42%]"
                />
                <div className="relative md:max-w-[52%]">
                  <h3 className="text-[28px] leading-[1.2] font-medium">{card.title}</h3>
                  <p className="mt-3 text-base leading-[1.5] font-normal">{card.desc}</p>
                </div>
                <div className="relative mt-6 md:mt-0">
                  <span className="inline-block rounded-full bg-pg-navy px-4 py-2 text-xs font-medium text-white">
                    {card.tag}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <FaqSection content={homeFaq} />
      <PartnersStrip content={homePartners} />

      {/* ── CTA (centered card, no image) ── */}
      <section className="bg-pg-cream px-6 py-16 md:px-10 md:py-20 lg:px-14">
        <motion.div
          className="mx-auto grid max-w-pg-page grid-cols-1 items-center gap-10 rounded-pg-2xl border border-white/10 px-8 py-12 shadow-pg-overlay md:grid-cols-2 md:gap-16 md:rounded-pg-2xl md:px-16 md:py-16"
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
            <h2 className="text-pg-h1 font-medium text-white">Join Us!</h2>
            {/* Body/Medium - Regular: Poppins Regular 16/1.5 */}
            <p className="mt-4 max-w-md text-base leading-[1.5] font-normal text-white/80">
              Subscribe to our weekly newsletter and be a part of our journey to self discovery and love.
            </p>
          </div>

          <div>
            <p className="mb-3 text-sm font-normal text-white">Stay up to date</p>
            {subscribed ? (
              <p className="text-base font-semibold text-pg-sage" role="status">
                ✓ Thanks for subscribing!
              </p>
            ) : (
              <form onSubmit={subscribe} noValidate>
                <Field label="Email address" hideLabel tone="inverse" error={error}>
                  <div className="flex items-center gap-2 rounded-pg-xl border border-white/10 bg-pg-navy-hover p-2 transition-colors focus-within:border-pg-sage/60">
                    <TextInput
                      type="email"
                      autoComplete="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="min-h-0 border-0 bg-transparent text-white placeholder:text-white/60"
                    />
                    <Button type="submit" variant="inverse" className="shrink-0 whitespace-nowrap">
                      Subscribe
                    </Button>
                  </div>
                </Field>
              </form>
            )}
            <p className="mt-3 text-xs font-normal text-white/60">
              By subscribing, you agree to our{" "}
              <Link to="/consent-documents" className="underline transition-colors hover:text-white">
                Privacy Policy
              </Link>
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
