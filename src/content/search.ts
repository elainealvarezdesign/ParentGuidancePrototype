/* Site search (/search). The index is built from the content that already exists on the site, so search
 * results are always in sync with the pages. In production the CMS (or WordPress search) would provide it. */
import { courses, detailSlugFor } from "./courses";
import { questions } from "./askATherapist";
import { seriesResources, topicHref } from "./mentalHealthSeries";
import { EVENTS } from "./events";
import { supportResources } from "./getHelp";
import type { PageIntroContent } from "@/sections/PageIntro";
import type { SiteSearchContent } from "@/sections/SiteSearch";

export type SearchKind = "Page" | "Course" | "Answer" | "Resource" | "Event" | "Get help";

export type SearchEntry = {
  kind: SearchKind;
  title: string;
  /** One line, plain text. */
  description: string;
  /** In-app route, or an external URL for Get Help organizations. */
  to?: string;
  href?: string;
  /** Extra words that should find this entry (category, topic, synonyms). */
  keywords?: string[];
};

const plain = (text: string) => text.replace(/\*\*|_/g, "");

const pages: SearchEntry[] = [
  {
    kind: "Page",
    title: "Mental Health Series",
    description: "Live sessions, videos and guides from experts, organized by topic.",
    to: "/mental-health-series",
    keywords: ["webinar", "school", "district", "videos"],
  },
  {
    kind: "Page",
    title: "Mental Health Series events",
    description: "Calendar of upcoming live sessions, workshops and Q&As.",
    to: "/mental-health-series/events",
    keywords: ["calendar", "schedule", "live", "register"],
  },
  {
    kind: "Page",
    title: "Parent Coaching",
    description: "One-on-one support from a coach to build lasting habits at home.",
    to: "/parent-coaching",
    keywords: ["coach", "session", "one-on-one", "help"],
  },
  {
    kind: "Page",
    title: "On-Demand Courses",
    description: "Short video courses from licensed therapists, at your own pace.",
    to: "/on-demand-courses",
    keywords: ["course", "class", "video", "learn"],
  },
  {
    kind: "Page",
    title: "Ask a Therapist",
    description: "Video answers from licensed therapists to parents' questions.",
    to: "/ask-a-therapist",
    keywords: ["question", "therapist", "answer"],
  },
  {
    kind: "Page",
    title: "Get Help",
    description: "Crisis lines and trusted organizations, available 24/7.",
    to: "/get-help",
    keywords: ["crisis", "emergency", "988", "hotline", "suicide"],
  },
  {
    kind: "Page",
    title: "Frequently asked questions",
    description: "How the program works, sessions, messaging and cost.",
    to: "/#faq",
    keywords: ["faq", "questions", "program", "cost"],
  },
  {
    kind: "Page",
    title: "Contact Us",
    description: "Send a message to the Parent Guidance team.",
    to: "/contact-us",
    keywords: ["contact", "email", "message", "support"],
  },
];

export const searchIndex: SearchEntry[] = [
  ...pages,
  ...courses.map((c) => ({
    kind: "Course" as const,
    title: c.title,
    description: c.description,
    to: `/courses/${detailSlugFor(c)}`,
    keywords: [c.topic, c.instructor],
  })),
  ...questions.map((q) => ({
    kind: "Answer" as const,
    title: q.question,
    description: `Answered by ${q.answeredBy}`,
    to: `/ask-a-therapist/${q.id}`,
    keywords: [q.category],
  })),
  ...seriesResources.map((r) => ({
    kind: "Resource" as const,
    title: r.title,
    description: plain(r.description),
    to: topicHref(r),
    keywords: [r.category, r.type],
  })),
  ...EVENTS.map((e) => ({
    kind: "Event" as const,
    title: e.title,
    description: e.description,
    to: "/mental-health-series/events",
    keywords: [e.category, e.language ?? ""],
  })),
  ...supportResources.map((r) => ({
    kind: "Get help" as const,
    title: r.name,
    description: r.description,
    href: r.href,
    keywords: [r.category, r.availability],
  })),
];

export const searchPage: { intro: PageIntroContent } & SiteSearchContent = {
  intro: {
    eyebrow: "Search",
    title: "Search Parent Guidance",
    intro: "Find courses, therapist answers, guides and events from across the site.",
  },
  label: "Search the site",
  placeholder: "Anxiety in children",
  buttonLabel: "Search",
  /** Shown before searching and when nothing matches. */
  suggestions: ["Anxiety", "Screen time", "ADHD", "Confidence", "Bullying", "Grief", "Crisis"],
  emptyTitle: "No results",
  emptyBody: "Try a shorter or more general word, or one of these topics:",
};
