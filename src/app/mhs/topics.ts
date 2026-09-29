import imgInstantInsights from "@/imports/mhs/family-playing.jpg";
import imgDeepDive from "@/imports/ParentCoaching-1/f73b6da28c9de1bc7946276ba9584e3cd46f8aec.png";
import imgMakeFriends from "@/imports/mhs/kids-building-together.jpg";
import imgConfidentPeers from "@/imports/mhs/grandmother-grandchildren.jpg";
import imgSelfIdentity from "@/imports/mhs/boy-building.jpg";
import imgParentingPurpose from "@/imports/mhs/parents-playing-baby.jpg";

/* Content model for a Mental Health Series topic page (/mental-health-series/:slug). */

export type TopicVideo = {
  kind: "Instant Insights" | "Deep Dive";
  title: string;
  description: string;
  duration: string;
  image: string;
  imagePosition?: string;
};

export type TopicSession = {
  month: string;
  day: string;
  weekday: string;
  title: string;
  time: string;
  language: "English" | "Español";
};

export type TopicTip = { label: string; text: string };

export type TopicResource = {
  type: "Article" | "Ask a Therapist" | "Lesson" | "On-Demand Course";
  title: string;
  description: string;
  image: string;
  to: string;
};

export type Topic = {
  slug: string;
  title: string;
  /** Word of the title shown in italics */
  emphasis: string;
  category: string;
  intro: string;
  reminder: string;
  expert: { name: string; role: string; initials: string };
  videos: TopicVideo[];
  sessions: TopicSession[];
  takeaways: { title: string; text: string }[];
  actions: { title: string; tips: TopicTip[] }[];
  resources: TopicResource[];
};

export const TOPICS: Topic[] = [
  {
    slug: "building-your-childs-confidence",
    title: "Building Your Child's Confidence",
    emphasis: "Confidence",
    category: "Self-Care",
    intro:
      "In this session, we'll focus on the importance of fostering a healthy identity in children and draw on the extensive experience of Dr. Skinner, who emphasizes the significance of adult behavior and interaction with children. By incorporating key insights, parents and caregivers can create a supportive and nurturing environment that fosters a healthy identity in children.",
    reminder:
      "Remember, the most important thing is to be there for your child, offering love, support, and guidance as they navigate the world and discover who they are.",
    expert: { name: "Dr. Kevin Skinner", role: "Clinical Director, LMFT", initials: "KS" },
    videos: [
      {
        kind: "Instant Insights",
        title: "Instant Insights",
        description: "A short overview of the key ideas — a good place to start.",
        duration: "4:48",
        image: imgInstantInsights,
      },
      {
        kind: "Deep Dive",
        title: "Deep Dive with Dr. Skinner",
        description: "The full session on building a healthy, confident identity.",
        duration: "30:20",
        image: imgDeepDive,
        imagePosition: "center 20%",
      },
    ],
    sessions: [
      { month: "Nov", day: "16", weekday: "Mon", title: "Session 1 – Building Your Child's Confidence", time: "6:00 pm – 7:00 pm CST", language: "English" },
      { month: "Nov", day: "16", weekday: "Mon", title: "Session 2 – Building Your Child's Confidence", time: "8:00 pm – 9:00 pm CST", language: "English" },
      { month: "Feb", day: "25", weekday: "Thu", title: "Sesión 1 – Cómo Fortalecer la Confianza de Su Hijo", time: "6:00 pm – 7:00 pm CST", language: "Español" },
    ],
    takeaways: [
      { title: "Encourage Open Identity Formation", text: "Help children question negative self-beliefs and keep an open mind about their identity. Challenge self-imposed labels and encourage positive self-reflection." },
      { title: "Be Mindful of Labels", text: "Avoid limiting labels like \"troublemaker.\" Use positive and well-rounded labels that highlight strengths and support a healthy self-image." },
      { title: "Change Habits and Patterns", text: "Show children that habits are changeable. Emphasize that identity is flexible and can be shaped by their environment and interactions." },
      { title: "Attune to Your Child", text: "Build trust by being present and listening actively. Keep communication lines open and be attentive to both verbal and non-verbal cues." },
      { title: "Promote Resiliency", text: "Teach children they are enough despite challenges. Support them through difficulties and help them regulate their emotions to build resilience." },
      { title: "Foster Creativity Through Play", text: "Encourage imaginative play and social interaction. Engage in activities that promote creativity, coordination, and human connection with your child." },
      { title: "Develop a Growth Mindset", text: "Focus on effort rather than talent. Teach children that abilities grow through hard work and persistence, and they can overcome challenges." },
      { title: "Create Continuous Opportunities for Connection", text: "Facilitate safe social interactions. Ensure your child feels connected, heard, and valued through empathy and shared activities." },
      { title: "Model and Teach Positive Interactions", text: "Support emotional and social growth by modeling empathy, encouraging play, and building resilience to reinforce a positive self-image." },
    ],
    actions: [
      {
        title: "Foster a Growth Mindset",
        tips: [
          { label: "Encourage effort and resilience", text: "Teach your child that effort and persistence are more important than inherent talent. Encourage them to tackle challenging tasks and praise their efforts rather than just their achievements. Remind them, \"I can do hard things,\" and share stories of times when you or others have succeeded through perseverance." },
          { label: "Model growth-oriented language", text: "Use language that promotes growth. When your child faces a difficult task, say things like, \"What did you learn from this experience?\" or \"How would you approach this differently next time?\"" },
        ],
      },
      {
        title: "Create Playful and Creative Opportunities",
        tips: [
          { label: "Engage in play", text: "Dedicate time to play with your children. This can involve imaginative play, playing sports, or participating in creative activities like drawing or building. These interactions help children develop social skills, hand-eye coordination, and stimulate their imagination." },
          { label: "Integrate play into daily activities", text: "Incorporate playful elements into routine tasks. For example, turn tidying up into a game by setting a timer and seeing who can pick up the most items. This not only makes chores more enjoyable but also strengthens your bond with your child." },
        ],
      },
      {
        title: "Develop Emotional Resilience",
        tips: [
          { label: "Acknowledge and honor emotions", text: "Encourage your child to express their feelings and validate their emotions. Ask them, \"What are you feeling right now?\" and listen attentively. Teach them that it's okay to feel sad, angry, or frustrated and that these feelings are part of the human experience." },
          { label: "Guide emotional regulation", text: "Help your child learn to manage their emotions by discussing different ways to cope with stress and setbacks. Share techniques like deep breathing, journaling, or talking about their feelings with a trusted adult." },
        ],
      },
    ],
    resources: [
      { type: "Article", title: "Teaching Your Child How to Make Friends", description: "Whether a large group or close-knit few, having a circle of friends matters.", image: imgMakeFriends, to: "/mental-health-series" },
      { type: "Ask a Therapist", title: "How to Help Your Child Be More Confident with Peers", description: "Dr. Kevin Skinner suggests a strategy for children struggling with peers.", image: imgConfidentPeers, to: "/ask-a-therapist" },
      { type: "Lesson", title: "Dr. Skinner | Helping Your Child Create a Confident Self-Identity", description: "A focused lesson from the On-Demand library.", image: imgSelfIdentity, to: "/on-demand-courses" },
      { type: "On-Demand Course", title: "Connect With Your Child by Parenting with Purpose", description: "Based on the research and clinical work of Dr. Kevin Skinner.", image: imgParentingPurpose, to: "/on-demand-courses" },
    ],
  },
];

export function getTopic(slug: string | undefined) {
  return TOPICS.find((t) => t.slug === slug);
}

/** Plain-text version of a topic, used by the Download button. */
export function topicPlainText(topic: Topic) {
  const lines = [topic.title.toUpperCase(), `${topic.expert.name}, ${topic.expert.role}`, "", topic.intro, "", topic.reminder, "", "KEY TAKEAWAYS", ""];
  topic.takeaways.forEach((t, i) => lines.push(`${i + 1}. ${t.title}`, `   ${t.text}`, ""));
  lines.push("THINGS YOU CAN DO", "");
  topic.actions.forEach((a, i) => {
    lines.push(`${i + 1}. ${a.title}`);
    a.tips.forEach((tip) => lines.push(`   - ${tip.label}: ${tip.text}`));
    lines.push("");
  });
  return lines.join("\n");
}
