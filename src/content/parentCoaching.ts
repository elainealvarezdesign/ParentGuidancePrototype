import type { SplitHeroContent } from "@/sections/SplitHero";
import type { BenefitsBandContent } from "@/sections/BenefitsBand";
import type { ProcessStepsContent } from "@/sections/ProcessSteps";
import type { TestimonialsContent } from "@/sections/Testimonials";
import imgHero from "@/imports/ParentCoaching-1/38518ee84636136dc3ed60b783115620c287b3ee.png";

/* Parent Coaching content ("/parent-coaching"). Recipe: docs/system/pages/parent-coaching.md.
 * Sign-up happens on Noble Health (external). */

const SIGN_UP_URL = "https://app.noble.health/auth/parent-guidance/default/get-started?lang=en";

export const coachingHero: SplitHeroContent = {
  eyebrow: "Parent Coaching",
  title: { text: "A better way to navigate your ", highlight: "child's mental health." },
  body: "Work one-on-one with a therapist who coaches _you_ — so you can show up for your child with confidence, clarity, and real tools.",
  actions: [
    { label: "Sign up now!", href: SIGN_UP_URL },
    { label: "How it works", href: "#how-it-works" },
  ],
  image: { src: imgHero, alt: "Parent hugging child" },
  shape: "portrait",
};

export const coachingBenefits: BenefitsBandContent = {
  items: [
    {
      icon: "message",
      title: "24/7 messaging with your coach",
      body: "Message your coach between sessions for check-ins and quick questions.",
    },
    {
      icon: "roadmap",
      title: "Self-guided Roadmaps",
      body: "Strategies built around your specific child, not a generic playbook.",
    },
    {
      icon: "privacy",
      title: "Confidential & safe",
      body: "Everything shared stays private. HIPAA-compliant platform, always.",
    },
    { icon: "calendar", title: "Flexible scheduling", body: "Biweekly one-on-one video calls with your coach" },
  ],
};

export const coachingSteps: ProcessStepsContent = {
  id: "how-it-works",
  eyebrow: "Process",
  title: "Getting started is simple",
  steps: [
    {
      title: "Enroll in the program",
      body: "Browse profiles and select a specialist whose expertise matches your family's needs.",
    },
    {
      title: "Schedule an onboarding call",
      body: "Pick a time that fits your schedule — evenings and weekends available.",
    },
    { title: "Download the app", body: "Secure video sessions from the comfort of your home, no commute required." },
    {
      title: "Connect with your coach and begin Parenting with Purpose",
      body: "Walk away with actionable strategies tailored to your child and your family dynamic.",
    },
  ],
  cta: { label: "Start Now!", href: SIGN_UP_URL },
};

export const coachingTestimonials: TestimonialsContent = {
  eyebrow: "Families we've supported",
  title: "Real families. Real change.",
  items: [
    {
      quote:
        "Within three sessions I finally understood why my son was shutting down. Our coach gave us a language we didn't have before.",
      name: "Mariana T.",
      meta: "Mom of a 9-year-old · Utah",
    },
    {
      quote:
        "I was skeptical about online coaching but it turned out to be the most practical help we've received. Worth every minute.",
      name: "David K.",
      meta: "Dad of two teens · Arizona",
    },
    {
      quote:
        "Dr. Nair helped me see my daughter's anxiety as something we could work with together, not something to fear.",
      name: "Rebecca L.",
      meta: "Parent of a 12-year-old · California",
    },
  ],
};
