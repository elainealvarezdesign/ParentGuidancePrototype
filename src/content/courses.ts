import type { SplitHeroContent } from "@/sections/SplitHero";
import type { PhotoCtaBannerContent } from "@/sections/PhotoCtaBanner";
import imgParentAndChild from "@/imports/CreateLivePrototypeWithTransitions/5adf607043d952ed1bbbfdfe5254ee778ed8a6e8.png";
import imgCta from "@/imports/get-help-hero.png";

/* On-Demand Courses content ("/on-demand-courses"). Recipe: docs/system/pages/on-demand-courses.md.
 * In production the course list comes from the LMS/CMS; keep the `Course` shape. */

export const courseTopics = [
  "All",
  "Anxiety & Depression",
  "Addiction & Recovery",
  "Ask a Therapist",
  "Body Image",
  "Behavior",
  "Bullying",
  "Child & Teen Development",
  "Grief and Loss",
  "Meditation & Mindfulness",
  "Parent Support",
  "Self Help",
  "Suicide Prevention",
  "Technology",
] as const;
export type CourseTopic = Exclude<(typeof courseTopics)[number], "All">;

export type Course = {
  id: number;
  /** Up to ~90 characters. */
  title: string;
  topic: CourseTopic;
  instructor: string;
  /** Card photo, 700px wide. Decorative. */
  image: string;
  lessons: number;
  /** "1h 30m" */
  duration: string;
  /** One sentence, up to ~110 characters. Used by search. */
  description: string;
  isNew?: boolean;
  isFeatured?: boolean;
  /** Detail page slug. Missing for courses without a detail page yet (see detailSlugFor). */
  slug?: string;
};

export const courses: Course[] = [
  {
    id: 22,
    title: "Milestones to Progress: Guiding your child from birth through the early school years",
    topic: "Child & Teen Development",
    instructor: "Dr. Kevin Skinner",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=700&q=80",
    lessons: 20,
    duration: "3h 30m",
    description:
      "A science-informed course for parents navigating the early years — from birth through the first school days.",
    slug: "milestones-to-progress",
  },
  {
    id: 1,
    title: "Connect With Your Child by Parenting with Purpose",
    topic: "Child & Teen Development",
    instructor: "Dr. Kevin Skinner",
    image: "https://images.unsplash.com/photo-1549068294-04a001ee0638?auto=format&fit=crop&w=700&q=80",
    lessons: 8,
    duration: "2h 30m",
    description: "Deepen your bond and navigate your child's world with tools that actually work.",
    isFeatured: true,
  },
  {
    id: 2,
    title: "Anxiety: Ways to Move Forward",
    topic: "Anxiety & Depression",
    instructor: "Dr. Ayanna Abrams",
    image: "https://images.unsplash.com/photo-1769095207794-02ffab1e2376?auto=format&fit=crop&w=700&q=80",
    lessons: 6,
    duration: "1h 30m",
    description: "Practical frameworks to help you and your child manage and reduce anxiety day to day.",
    isNew: true,
  },
  {
    id: 3,
    title: "Calming Your Anxious Mind",
    topic: "Anxiety & Depression",
    instructor: "Dr. Ayanna Abrams",
    image: "https://images.unsplash.com/photo-1758598737831-10c213d88462?auto=format&fit=crop&w=700&q=80",
    lessons: 7,
    duration: "1h 30m",
    description: "Evidence-based grounding and breathing techniques adapted for family life.",
  },
  {
    id: 4,
    title: "Approaching Your Child's Anxiety with Care",
    topic: "Anxiety & Depression",
    instructor: "Dr. Kevin Skinner",
    image: "https://images.unsplash.com/photo-1639760279373-2075f626dc3a?auto=format&fit=crop&w=700&q=80",
    lessons: 7,
    duration: "1h 55m",
    description: "How to respond — not react — when your child is overwhelmed by worry or fear.",
  },
  {
    id: 5,
    title: "Addiction: Causes, Signs and Recovery",
    topic: "Addiction & Recovery",
    instructor: "Dr. James Berry",
    image: "https://images.unsplash.com/photo-1559734840-f9509ee5677f?auto=format&fit=crop&w=700&q=80",
    lessons: 9,
    duration: "2h 45m",
    description: "A compassionate guide to understanding addiction and finding a path forward as a family.",
  },
  {
    id: 6,
    title: "Overcoming Addiction as a Family",
    topic: "Addiction & Recovery",
    instructor: "Dr. Kevin Skinner",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=700&q=80",
    lessons: 6,
    duration: "1h 50m",
    description: "Rebuild trust and create a recovery-supportive home environment.",
    isNew: true,
  },
  {
    id: 7,
    title: "Ask a Therapist: Common Parent Questions",
    topic: "Ask a Therapist",
    instructor: "Dr. James Berry",
    image: "https://images.unsplash.com/photo-1581998392741-67879e0ef04a?auto=format&fit=crop&w=700&q=80",
    lessons: 10,
    duration: "3h 10m",
    description: "Real answers to the questions parents are afraid to ask out loud.",
  },
  {
    id: 8,
    title: "Body Love",
    topic: "Body Image",
    instructor: "Dr. James Berry",
    image: "https://images.unsplash.com/photo-1758874384842-7e79ce77ed1a?auto=format&fit=crop&w=700&q=80",
    lessons: 5,
    duration: "1h 10m",
    description: "Help your child develop a healthy, compassionate relationship with their body.",
    isNew: true,
  },
  {
    id: 9,
    title: "Eating Disorders and Disordered Eating",
    topic: "Body Image",
    instructor: "Dr. Ayanna Abrams",
    image: "https://images.unsplash.com/photo-1758874961000-d8b11690ce22?auto=format&fit=crop&w=700&q=80",
    lessons: 7,
    duration: "2h 05m",
    description: "Recognize warning signs and learn how to talk about food and body image with your child.",
  },
  {
    id: 10,
    title: "4 Questions To Free Yourself From Limiting Thoughts",
    topic: "Behavior",
    instructor: "Dr. Kevin Skinner",
    image: "https://images.unsplash.com/photo-1560328055-e938bb2ed50a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=700",
    lessons: 4,
    duration: "55m",
    description: "A powerful thought-work framework that helps parents break reactive patterns.",
    slug: "free-yourself-from-limiting-thoughts",
  },
  {
    id: 11,
    title: "Supporting Your Child Through Bullying",
    topic: "Bullying",
    instructor: "Dr. Ayanna Abrams",
    image: "https://images.unsplash.com/photo-1605814573621-0513c34a0d58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=700",
    lessons: 6,
    duration: "1h 30m",
    description: "What to say, what to do, and how to help your child rebuild confidence.",
  },
  {
    id: 12,
    title: "Understanding Teen Behavior",
    topic: "Child & Teen Development",
    instructor: "Dr. Ayanna Abrams",
    image: "https://images.unsplash.com/photo-1713946598534-a20fd25a4d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=700",
    lessons: 8,
    duration: "2h 20m",
    description: "Decode the adolescent brain and strengthen your relationship with your teenager.",
  },
  {
    id: 13,
    title: "Breaking the Cycle of Trauma",
    topic: "Grief and Loss",
    instructor: "Dr. Kevin Skinner",
    image: "https://images.unsplash.com/photo-1511297968426-a869b61af3da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=700",
    lessons: 9,
    duration: "2h 50m",
    description: "Trauma-informed parenting strategies that help families heal and move forward.",
  },
  {
    id: 14,
    title: "Grief, Loss and Healing",
    topic: "Grief and Loss",
    instructor: "Dr. James Berry",
    image: "https://images.unsplash.com/photo-1624003652795-a9f73df756fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=700",
    lessons: 6,
    duration: "1h 45m",
    description: "Support your child through loss while also caring for your own grief.",
  },
  {
    id: 15,
    title: "Coping, Healing and Finding Peace Through Mindfulness",
    topic: "Meditation & Mindfulness",
    instructor: "Dr. James Berry",
    image: "https://images.unsplash.com/photo-1709125885142-de8f40230c8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=700",
    lessons: 7,
    duration: "2h 00m",
    description: "Family-centered mindfulness practices that reduce stress and improve connection.",
    isNew: true,
  },
  {
    id: 16,
    title: "Emotional Response & Reflection",
    topic: "Parent Support",
    instructor: "Dr. Kevin Skinner",
    image: "https://images.unsplash.com/photo-1560707856-3af2ff5ea652?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=700",
    lessons: 5,
    duration: "1h 25m",
    description: "Learn to pause before reacting and model emotional intelligence for your children.",
  },
  {
    id: 17,
    title: "Building Resilience in Children",
    topic: "Parent Support",
    instructor: "Dr. Kevin Skinner",
    image: "https://images.unsplash.com/photo-1542948843-bf19f4f535cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=700",
    lessons: 6,
    duration: "1h 35m",
    description: "Raise children who bounce back — and parents who model resilience every day.",
  },
  {
    id: 18,
    title: "Beating The Fear That You're Not Enough",
    topic: "Self Help",
    instructor: "Dr. Ayanna Abrams",
    image: "https://images.unsplash.com/photo-1573495804664-b1c0849525af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=700",
    lessons: 5,
    duration: "1h 15m",
    description: "Silence your inner critic and show up for your family from a place of confidence.",
  },
  {
    id: 19,
    title: "Self-Care for Caregivers",
    topic: "Self Help",
    instructor: "Dr. Kevin Skinner",
    image: "https://images.unsplash.com/photo-1709125885142-de8f40230c8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=700",
    lessons: 4,
    duration: "1h 00m",
    description: "You cannot pour from an empty cup. Sustainable wellbeing starts with you.",
    isNew: true,
  },
  {
    id: 20,
    title: "Suicide Prevention Awareness for Parents",
    topic: "Suicide Prevention",
    instructor: "Dr. James Berry",
    image: "https://images.unsplash.com/photo-1604881991720-f91add269bed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=700",
    lessons: 8,
    duration: "2h 30m",
    description: "Know the warning signs, the right words to say, and how to get your child help.",
  },
  {
    id: 21,
    title: "Technology & Screen Time",
    topic: "Technology",
    instructor: "Dr. Kevin Skinner",
    image: "https://images.unsplash.com/photo-1714976694525-71eb29a7c500?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=700",
    lessons: 6,
    duration: "1h 40m",
    description: "Research-backed strategies for healthy technology habits in your household.",
  },
];

/* Only two courses have detail pages so far. The rest open one of them, alternating the full
 * (Milestones) and short (Free Yourself) templates, so every card leads to example content. */
const DETAIL_TEMPLATES = ["milestones-to-progress", "free-yourself-from-limiting-thoughts"];
export const detailSlugFor = (course: Course) =>
  course.slug ?? DETAIL_TEMPLATES[courses.indexOf(course) % DETAIL_TEMPLATES.length];

export const courseSortOptions = [
  { value: "featured", label: "Featured" },
  { value: "az", label: "A–Z" },
  { value: "newest", label: "Newest" },
] as const;
export type CourseSort = (typeof courseSortOptions)[number]["value"];

export const coursesHero: SplitHeroContent = {
  eyebrow: "On-Demand Courses",
  title: { text: "Expert-led courses to help you ", highlight: "parent with confidence." },
  body: "Learn at your own pace from licensed therapists — practical tools for the real challenges families face every day.",
  actions: [
    { label: "Browse all courses", href: "#courses" },
    { label: "Meet the coaches", to: "/parent-coaching" },
  ],
  image: { src: imgParentAndChild, alt: "Parent and child learning together" },
  shape: "square",
};

export const coursesCta: PhotoCtaBannerContent = {
  title: "Looking for additional help?",
  body: "Our expert coaches work one-on-one with you. **Services may be free through your child's school district.**",
  cta: { label: "Get Started", to: "/parent-coaching" },
  image: { src: imgCta, alt: "" },
};
