import { useState } from "react";
import { Link } from "react-router";
import { Button, ButtonLink } from "@/components/ui/Button";
import { motion } from "motion/react";
import { ArrowRight, Send } from "@/components/ui/icons";
import UnifiedCard from "@/components/cards/UnifiedCard";
import { SearchField } from "@/components/ui/SearchField";
import { FilterChips } from "@/components/ui/FilterChips";
import { FaqSection } from "@/sections/FaqSection";
import { PartnersStrip } from "@/sections/PartnersStrip";
import { NewsletterSection } from "@/sections/NewsletterSection";
import { homeFaq, homeNewsletter, homePartners } from "@/content/home";

/* Home V1 ("/home-v1"): an EXPLORATION kept for comparison while the final home is chosen. It is not
 * linked from the navigation. Shared parts come from the system; delete this page once a home is picked. */

import imgMentalHealth from "@/imports/HomePagePgV2/b75247b5542e76cdf5c675041b7a6e465e33ef23.png";
import imgCoaching from "@/imports/HomePagePgV2/debf8187f5722e2bc3e9c2869fc7308cfe71f1fc.png";
import imgOnDemand from "@/imports/HomePagePgV2/2efa62174bfcf85665907842ba36899e44e02fe9.png";
import imgAskTherapist from "@/imports/HomePagePgV2/277938b24e46ee2598e5638b70da775e75a5d182.png";
import imgTrustedByParents from "@/imports/HomePagePgV2/fb9567d2a70815a5c0307df9118cb49c401b72a3.png";
import imgRealSupport from "@/imports/HomePagePgV2/dabd6f5341bd78f44bfe8771b4f0e2a23c9565f1.png";
import { DURATION, EASE_OUT } from "@/lib/motion";

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

const EXPLORE_ROUTES: Record<string, string> = {
  "Mental Health": "/mental-health-series/building-your-childs-confidence",
  Coaching: "/parent-coaching",
  Courses: "/courses/milestones-to-progress",
  "Ask a Therapist": "/ask-a-therapist/1",
};

export default function HomePageV1() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [query, setQuery] = useState("");

  return (
    <div className="mt-14 bg-pg-cream">
      {/* ── HERO ── */}
      <section className="overflow-hidden bg-pg-cream">
        <div className="mx-auto max-w-pg-page px-6 py-14 md:px-10 md:py-20 lg:px-14">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              className="max-w-[540px]"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DURATION.reveal, ease: EASE_OUT }}
            >
              <h1 className="mb-5 text-pg-display tracking-[-0.02em] text-pg-navy">Discover Resources That Can Help</h1>
              <p className="mb-8 max-w-[480px] text-base leading-relaxed text-pg-slate">
                Find trusted guidance, practical tips, and expert resources to help you navigate everyday parenting
                challenges.
              </p>

              <SearchField
                variant="hero"
                label="Search resources"
                placeholder="Anxiety in Children"
                value={query}
                onValueChange={setQuery}
                className="max-w-[440px]"
                action={
                  <Button size="s" className="shrink-0">
                    Search
                  </Button>
                }
              />
            </motion.div>

            <motion.div
              className="relative mx-auto w-full max-w-[570px] pr-7 pb-9 md:pr-10 md:pb-12 lg:mx-0 lg:ml-auto"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: DURATION.reveal, delay: 0.1, ease: EASE_OUT }}
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
        <div className="mx-auto max-w-pg-page px-6 py-3 md:px-10">
          <FilterChips
            label="Filter resources"
            options={CATEGORIES}
            value={activeCategory}
            onChange={setActiveCategory}
          />
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
                transition={{ duration: DURATION.reveal, delay: i * 0.08 }}
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
              transition={{ duration: DURATION.reveal }}
            >
              <h3 className="text-pg-h2 font-medium text-white">Not sure where to start?</h3>
              <p className="mt-3 max-w-[360px] text-pg-body-lg text-white/70">
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
              transition={{ duration: DURATION.reveal, delay: 0.1 }}
            >
              <img
                src={imgMentalHealth}
                alt="A therapist speaking with a young client"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-(--pg-dur-reveal) group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pg-navy via-pg-navy/40 to-transparent" />
              <div className="absolute right-0 bottom-0 left-0 flex items-end justify-between gap-4 p-8">
                <div>
                  <h3 className="max-w-[320px] text-pg-h2 font-medium text-white">
                    Expert therapists available to help
                  </h3>
                  <p className="mt-2 text-pg-body-lg text-white/75">Licensed clinicians, ready when you are.</p>
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
          transition={{ duration: DURATION.reveal }}
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
              transition={{ duration: DURATION.reveal, delay: i * 0.1 }}
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

      <FaqSection content={homeFaq} />
      <PartnersStrip content={homePartners} />
      <NewsletterSection content={homeNewsletter} />
    </div>
  );
}
