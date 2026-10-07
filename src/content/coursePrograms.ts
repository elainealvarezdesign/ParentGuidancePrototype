import type { Media, RichText } from "./types";

/* Course programs: the lessons behind "/courses/:courseSlug" and "/courses/:courseSlug/lesson/:lessonId".
 * One lesson template renders every course (docs/system/pages/lesson.md); a course is only data.
 * In production this comes from the LMS. Keep the shapes. */

export type Lesson = {
  /** 1-based, unique in the course; also the URL segment. */
  id: number;
  title: string;
  /** "m:ss" */
  duration: string;
  /** Index into `modules`, for courses split into modules. */
  module?: number;
  /** 1–3 sentences for the Overview tab. */
  description: string;
  /** 3–5 short lines for the Key Takeaways tab. */
  takeaways: string[];
};

export type LessonResource = { label: string; type: "PDF" | "Link" };

export type Instructor = {
  name: string;
  credential: string;
  /** One sentence. */ bio?: string;
  /** Round photo; initials are used without it. */ photo?: string;
};

export type CourseRecommendation = {
  title: string;
  lessons: number;
  duration: string;
  image: string;
  /** Detail page, when it exists. */ slug?: string;
};

export type CourseProgram = {
  slug: string;
  title: string;
  /** Label above the title: course type or topic. */
  label: string;
  /** Cover photo for the overview card, 560×680. */
  cover: Media;
  /** 1–2 sentences under the title. */
  summary: string;
  /** Total length, "3h 30m". */
  totalDuration: string;
  instructors: Instructor[];
  /** "About this course" paragraphs. RichText: **bold** allowed. */
  about: RichText[];
  recommendations: CourseRecommendation[];
  /** Video poster for every lesson (until each lesson has its own). */
  poster: string;
  /** Player progress color: amber for short courses, teal for long programs. */
  accent: "teal" | "amber";
  modules?: { title: string; instructor: string }[];
  lessons: Lesson[];
  resources: LessonResource[];
};

const limitingThoughts: CourseProgram = {
  slug: "free-yourself-from-limiting-thoughts",
  title: "4 Questions To Free Yourself From Limiting Thoughts",
  label: "Self-Guided Course",
  cover: {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=560&h=680&q=80",
    alt: "Child with glasses using laptop",
  },
  summary:
    "Learn how to challenge limiting beliefs and build a more positive mindset. Brett Williams, therapist, author, and happiness researcher teaches practical tools to help you create lasting change.",
  totalDuration: "Approx. 30 min",
  instructors: [
    {
      name: "Brett Williams",
      credential: "LMFT",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=80&h=80&q=80",
    },
  ],
  about: [
    "What is happiness? What negative thoughts are holding you back? How do you change your negative thoughts and perspective? Join Brett Williams, therapist, author, and happiness researcher as he teaches how to achieve change and develop habits that will lead to everyday happiness.",
  ],
  recommendations: [
    {
      title: "Building Emotional Resilience",
      lessons: 5,
      duration: "35 min",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=240&h=160&q=80",
    },
    {
      title: "Managing Stress Together",
      lessons: 6,
      duration: "40 min",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=240&h=160&q=80",
    },
    {
      title: "Growing Gratitude as a Family",
      lessons: 4,
      duration: "25 min",
      image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=240&h=160&q=80",
    },
  ],
  poster: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1280&h=720&q=80",
  accent: "amber",
  lessons: [
    {
      id: 1,
      title: "The 4 Questions",
      duration: "11:19",
      description:
        "Brett Williams introduces the 4 powerful questions that help you identify and challenge limiting thoughts. You'll learn the core framework that guides the entire course and understand why our thought patterns keep us stuck.",
      takeaways: [
        "How limiting beliefs silently shape your behavior",
        "The 4-question framework for examining any thought",
        "Why traditional positive thinking often fails",
        "Your first practical exercise for this week",
      ],
    },
    {
      id: 2,
      title: "What's The Goal?",
      duration: "8:45",
      description:
        "Clarity on what you truly want is the foundation of change. In this lesson you'll define your personal vision and learn how misaligned goals keep limiting beliefs in place.",
      takeaways: [
        "Distinguishing between surface goals and core desires",
        "The role of values in setting meaningful goals",
        "How to write a goal statement that motivates change",
        "Worksheet: My Core Goal exercise",
      ],
    },
    {
      id: 3,
      title: "Negating Negative Thoughts",
      duration: "7:32",
      description:
        "Learn the evidence-based techniques Brett uses with clients to weaken the grip of negative self-talk. You'll practice flipping automatic thoughts in real time.",
      takeaways: [
        "The cognitive reframing method explained simply",
        "Spotting cognitive distortions in your own thinking",
        "3 quick techniques you can use immediately",
        "How to build a personal thought journal",
      ],
    },
    {
      id: 4,
      title: "Strengthening Positive Thoughts",
      duration: "9:54",
      description:
        "Change is only lasting when you actively reinforce new patterns. This final lesson gives you a daily practice and accountability system to embed what you've learned.",
      takeaways: [
        "The neuroscience of habit formation in simple terms",
        "Building a 5-minute daily mindset routine",
        "How to track progress without self-judgment",
        "Celebrating small wins to sustain momentum",
      ],
    },
  ],
  resources: [
    { label: "The 4 Questions Worksheet", type: "PDF" },
    { label: "Cognitive Reframing Guide", type: "PDF" },
    { label: "Recommended Reading List", type: "Link" },
  ],
};

const milestones: CourseProgram = {
  slug: "milestones-to-progress",
  title: "Milestones to Progress: Guiding your child from birth through the early school years",
  label: "Child & Teen Development",
  cover: {
    src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=560&h=680&q=80",
    alt: "Children on stairs",
  },
  summary:
    "A supportive, science-informed course for parents navigating the early years — from birth through the first school days. Explore three expert-led modules covering development, real-life scenarios, and school support.",
  totalDuration: "3h 30m",
  instructors: [
    {
      name: "Dr. Kevin Skinner",
      credential: "Clinical Director, LMFT",
      bio: "Therapist, author, and happiness researcher with over 20 years of clinical experience working with families.",
    },
    {
      name: "Max Dahmen",
      credential: "LCSW, Licensed Clinical Social Worker",
      bio: "Licensed therapist who brings clinical concepts to life through real-world family scenarios and a parent's perspective.",
    },
    {
      name: "Robbie Kinghorn",
      credential: "School Principal & Family Advocate",
      bio: "Longtime school principal who helps families and schools work together to support every child's growth.",
    },
  ],
  about: [
    "**Milestones to Progress** is a supportive, science-informed course for parents navigating the early years — from birth through the first school days.",
    "Led by Dr. Kevin Skinner, this series explores what's happening inside a child's developing brain and body, including attachment, routines, independence, tantrums, emotional regulation, and the wide range of what healthy development can look like at each stage.",
    "Dr. Skinner grounds the course in research while offering reassurance that every child grows at their own pace — and that thoughtful, responsive caregiving makes a powerful difference.",
    "Alongside Dr. Skinner, you'll hear from Max Dahmen, a licensed therapist who brings these concepts to life through real-world family scenarios, and Robbie Kinghorn, a longtime school principal who helps connect home and school support systems.",
    "**The course is broken up in three modules.**",
    "Dr. Kevin Skinner will lead us through The Milestones module, focusing on the therapeutic science of growing minds. Max Dahmen will then guide us through familiar parenting moments — The Moments — sharing real-life scenarios through a clinical lens. Finally, Robbie Kinghorn will drive home an essential truth: your child has a team — and how families and schools can work together to support your child's growth.",
  ],
  recommendations: [
    {
      title: "4 Questions To Free Yourself From Limiting Thoughts",
      lessons: 4,
      duration: "55m",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=240&h=160&q=80",
      slug: "free-yourself-from-limiting-thoughts",
    },
    {
      title: "Building Emotional Resilience",
      lessons: 5,
      duration: "35m",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=240&h=160&q=80",
    },
    {
      title: "Managing Stress Together",
      lessons: 6,
      duration: "40m",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=240&h=160&q=80",
    },
  ],
  poster: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1280&h=720&q=80",
  accent: "teal",
  modules: [
    { title: "The Milestones: The Science of Growing Minds", instructor: "Dr. Kevin Skinner" },
    { title: "The Moments: Real-Life Scenarios – a Clinical Lens", instructor: "Max Dahmen, LCSW" },
    { title: "The Mentors: Supporting Your Child at School", instructor: "Robbie Kinghorn" },
  ],
  lessons: [
    {
      id: 1,
      title: "Introduction to Milestones to Progress",
      module: 0,
      duration: "4:12",
      description:
        "Dr. Kevin Skinner introduces the Milestones to Progress framework — what to expect across the course, the three expert perspectives you'll hear from, and why understanding child development science gives parents the confidence to respond rather than react.",
      takeaways: [
        "Why development science matters for everyday parenting",
        "An overview of the three course modules",
        "How to use this course alongside your child's growth",
        "Setting realistic expectations at each stage",
      ],
    },
    {
      id: 2,
      title: "Building Secure Attachments",
      module: 0,
      duration: "6:45",
      description:
        "Secure attachment is the foundation of every other developmental milestone. Dr. Skinner explains what attachment actually means, how it forms in the first years of life, and the simple daily interactions that strengthen the parent-child bond.",
      takeaways: [
        "What secure vs. insecure attachment looks like",
        "The role of attunement in early bonding",
        "How to repair connection after ruptures",
        "Practical daily habits that build attachment",
      ],
    },
    {
      id: 3,
      title: "Sensory & Motor Development",
      module: 0,
      duration: "5:30",
      description:
        "From tummy time to first steps, sensory and motor development shapes how children explore and understand their world. This lesson covers the milestones parents can watch for — and why some variation is completely normal.",
      takeaways: [
        "Key sensory milestones from birth to age 5",
        "How to support motor development at home",
        "When to talk to your pediatrician",
        "The connection between sensory processing and behavior",
      ],
    },
    {
      id: 4,
      title: "Independence & Responsibility",
      module: 0,
      duration: "7:02",
      description:
        "Teaching independence is one of the most important — and counter-intuitive — jobs of a parent. Dr. Skinner shares a developmental framework for letting children struggle appropriately, build confidence, and develop the internal motivation that lasts a lifetime.",
      takeaways: [
        "Age-appropriate independence at each stage",
        "Why rescuing too quickly backfires",
        "How to scaffold tasks without doing them for your child",
        "Building intrinsic motivation from the start",
      ],
    },
    {
      id: 5,
      title: "Conflict Resolution",
      module: 0,
      duration: "6:18",
      description:
        "Children don't arrive knowing how to handle disagreement. This lesson explores how conflict resolution develops, why sibling conflict is actually a developmental opportunity, and what parents can do to coach rather than referee.",
      takeaways: [
        "How conflict resolution skills develop over time",
        "The difference between problem-solving and peacekeeping",
        "Scripts for coaching children through disagreements",
        "Using family conflict as a learning laboratory",
      ],
    },
    {
      id: 6,
      title: "Emotional Awareness & Regulation",
      module: 0,
      duration: "8:05",
      description:
        "Emotional regulation is a skill built over years — not something children are born with. Dr. Skinner walks through the neuroscience of big emotions, the window of tolerance, and how parents can help children name, feel, and move through difficult feelings.",
      takeaways: [
        "The neuroscience of emotional regulation in plain terms",
        "What co-regulation means and why it works",
        "Building an emotional vocabulary with your child",
        "When to be concerned about emotional dysregulation",
      ],
    },
    {
      id: 7,
      title: "Early Communication Skills",
      module: 0,
      duration: "5:48",
      description:
        "Language development is one of the fastest-moving milestones in early childhood. This lesson covers what typical communication looks like from babbling to full sentences — and how parents can be the best language environment their child has.",
      takeaways: [
        "Communication milestones from birth to age 6",
        "The power of serve-and-return conversation",
        "Reading as a daily communication practice",
        "Signs that warrant a speech evaluation",
      ],
    },
    {
      id: 8,
      title: "Early Socialization",
      module: 0,
      duration: "6:33",
      description:
        "Learning to be with other people is a milestone just like walking. Dr. Skinner explores how social development unfolds in the early years, what parallel play reveals, and how to help shy or anxious children find their footing with peers.",
      takeaways: [
        "Stages of social play from solitary to cooperative",
        "How temperament shapes social comfort",
        "Supporting the shy or slow-to-warm child",
        "What to look for when socialization feels stuck",
      ],
    },
    {
      id: 9,
      title: "Working with Teachers",
      module: 1,
      duration: "5:14",
      description:
        "Max Dahmen explores one of the most common parent challenges — navigating the parent-teacher relationship. Whether feedback is welcome or frustrating, how parents respond shapes their child's relationship with school for years to come.",
      takeaways: [
        "How to have a productive teacher conference",
        "Responding to negative feedback without defensiveness",
        "Being an advocate without being adversarial",
        "Building a team mentality with your child's school",
      ],
    },
    {
      id: 10,
      title: "Defiant Child",
      module: 1,
      duration: "7:22",
      description:
        "Defiance is one of the most exhausting parenting experiences. Max reframes it not as opposition but as a developmental signal — and shares the clinical tools that help parents respond in ways that reduce defiance rather than fuel it.",
      takeaways: [
        "Why defiance is often a bid for autonomy",
        "The difference between defiance and ODD",
        "De-escalation strategies that actually work",
        "How consistency and warmth reduce oppositional behavior",
      ],
    },
    {
      id: 11,
      title: "Toilet Training Regression",
      module: 1,
      duration: "4:55",
      description:
        "Regression is common, normal, and understandably alarming. Max explains why children regress during toilet training, what's happening developmentally, and how parents can respond calmly in ways that move things forward.",
      takeaways: [
        "Common triggers for toilet training regression",
        "Why punishment makes regression worse",
        "A calm, practical response framework",
        "When regression signals something more significant",
      ],
    },
    {
      id: 12,
      title: "Peer-to-Peer Playtime",
      module: 1,
      duration: "6:10",
      description:
        "Playdates and playground dynamics are where social skills get tested in real time. Max shares how to set up peer interactions for success, when to step in and when to let children work it out, and what to watch for as social complexity grows.",
      takeaways: [
        "Age-appropriate expectations for peer play",
        "How to set up a successful playdate",
        "Knowing when and how to intervene",
        "Helping children process social conflict afterward",
      ],
    },
    {
      id: 13,
      title: "Acting Out in Class",
      module: 1,
      duration: "7:38",
      description:
        "When a child is struggling behaviorally at school, the instinct to be embarrassed or defensive can get in the way of actually helping. Max walks through a collaborative approach that puts the child's needs at the center of the solution.",
      takeaways: [
        "Understanding what classroom behavior communicates",
        "How to partner with teachers without over-promising",
        "Creating a behavior support plan that works at home and school",
        "What to do when the school wants an evaluation",
      ],
    },
    {
      id: 14,
      title: "A Development Detour",
      module: 1,
      duration: "8:15",
      description:
        "Not every child follows the expected developmental path — and that's okay. Max shares how families can navigate evaluations, diagnoses, and support services without losing sight of what their child is doing well.",
      takeaways: [
        "How to approach a developmental evaluation",
        "Understanding what diagnoses do and don't tell you",
        "Building a support team around your child",
        "Holding the big picture when the moment feels hard",
      ],
    },
    {
      id: 15,
      title: "Missed Milestones",
      module: 1,
      duration: "6:50",
      description:
        "Milestone charts can be reassuring — or terrifying. Max helps parents put developmental timelines in context, understand when waiting is appropriate versus when to act, and how to advocate effectively for early intervention.",
      takeaways: [
        "How to read milestone charts without spiraling",
        "The difference between a delay and a disorder",
        "Early intervention: what it is and why it matters",
        "Talking to your pediatrician about concerns",
      ],
    },
    {
      id: 16,
      title: "Behaviors Are Communication",
      module: 2,
      duration: "5:40",
      description:
        "Robbie Kinghorn opens this module with a foundational principle: every behavior a child shows is a message. Understanding what children are communicating through their actions changes how parents and schools respond — and opens the door to real support.",
      takeaways: [
        "Decoding what behaviors are communicating",
        "How schools interpret behavior vs. what's really happening",
        "Moving from discipline to understanding",
        "The power of a shared language between home and school",
      ],
    },
    {
      id: 17,
      title: "Big Question – Behaviors are Communication",
      module: 2,
      duration: "4:28",
      description:
        "Robbie answers the most common questions parents have after learning that behaviors are communication — including how to talk to your child about it, what to do when the message isn't clear, and how schools can be better listeners.",
      takeaways: [
        "How to ask 'what are you trying to tell me?' in practice",
        "When behavior communication is unconscious",
        "Making school a safe place for children to express needs",
        "How parents and schools can get on the same page",
      ],
    },
    {
      id: 18,
      title: "Emotional Development",
      module: 2,
      duration: "6:55",
      description:
        "Schools that support emotional development produce better academic outcomes. Robbie explains how families can reinforce the emotional learning happening at school — and how to fill in the gaps when school support is limited.",
      takeaways: [
        "What schools are (and aren't) doing around emotional development",
        "How to complement school SEL programs at home",
        "Building emotional vocabulary across home and school settings",
        "When your child's emotional needs exceed what school provides",
      ],
    },
    {
      id: 19,
      title: "Big Question – Emotional Development",
      module: 2,
      duration: "4:12",
      description:
        "Robbie answers parents' real questions about emotional development in the school context — including how to talk to reluctant teachers, what to do when your child shuts down at school, and how to advocate for a more emotionally supportive environment.",
      takeaways: [
        "Scripts for talking to teachers about emotional needs",
        "What to do when school feels unsafe emotionally",
        "Understanding 504 plans and emotional support accommodations",
        "Building your child's emotional resilience for the school day",
      ],
    },
    {
      id: 20,
      title: "Connections vs. Corrections",
      module: 2,
      duration: "7:30",
      description:
        "Robbie closes the course with its most important message: relationship is the foundation of all learning and growth. A child who feels connected to the adults in their life — at home and at school — is a child who can learn, grow, and thrive.",
      takeaways: [
        "Why connection must come before correction",
        "How to repair after a difficult interaction",
        "Building connection rituals at home and school",
        "Leaving your child with a felt sense of being known and valued",
      ],
    },
  ],
  resources: [
    { label: "Milestone Tracking Worksheet", type: "PDF" },
    { label: "Secure Attachment Daily Practices", type: "PDF" },
    { label: "Recommended Reading: The Whole-Brain Child", type: "Link" },
  ],
};

export const coursePrograms: Record<string, CourseProgram> = {
  [limitingThoughts.slug]: limitingThoughts,
  [milestones.slug]: milestones,
};

export const getProgram = (slug: string | undefined) => (slug ? coursePrograms[slug] : undefined);
