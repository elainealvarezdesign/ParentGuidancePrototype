import type { SplitHeroContent } from "@/sections/SplitHero";
import type { PhotoCtaBannerContent } from "@/sections/PhotoCtaBanner";
import imgFeaturedTherapist from "@/imports/05AskATherapist/7af58431d48866bcf252a78cb8709dda98a31204.jpg";
import imgSidebarTherapist from "@/imports/05AskATherapist/bf73af5e36126dc41ee73d1f5f81e395e37ead59.jpg";
import imgCtaBackground from "@/imports/05AskATherapist/7da52df8b36aa7daa4e656a1f0b1284a37a44402.jpg";

/* Ask a Therapist content: the list page ("/ask-a-therapist") and the answer page
 * ("/ask-a-therapist/:questionId") read from the same data. Recipes: docs/system/pages/ask-a-therapist.md
 * and docs/system/pages/question-detail.md.
 *
 * In production this comes from the CMS. Keep the shapes; swap the arrays for API calls. */

export type Therapist = {
  id: string;
  name: string;
  credential: string;
  /** 1–2 sentences for the "Answered by" card. */
  bio: string;
};

export const therapists: Record<string, Therapist> = {
  "kevin-skinner": {
    id: "kevin-skinner",
    name: "Dr. Kevin Skinner",
    credential: "Clinical Director, LMFT",
    bio: "Dr. Skinner is a Licensed Marriage and Family Therapist, bestselling author, and happiness researcher with over 20 years of clinical experience.",
  },
};

export const questionCategories = ["All", "Anxiety", "ADHD", "Emotions", "Behavior", "Family", "Screen Time"] as const;
export type QuestionCategory = Exclude<(typeof questionCategories)[number], "All">;

export type Question = {
  id: number;
  /** The parent's question, as submitted (lightly edited). Up to ~120 characters. */
  question: string;
  category: QuestionCategory;
  /** Key in `therapists`. */
  answeredBy: string;
  /** Card image, 420×240. Decorative. */
  thumbnail: string;
  /** Video poster, 16:9. */
  poster: string;
  /** Video length, "m:ss". */
  duration: string;
  /** Full text of the video answer. */
  transcript: string;
};

export const questions: Question[] = [
  {
    id: 1,
    question: "Why is my child suddenly withdrawing from friends and activities he used to love?",
    category: "Behavior",
    answeredBy: "kevin-skinner",
    thumbnail: "https://images.unsplash.com/photo-1624272949900-9ae4c56397e8?auto=format&fit=crop&w=420&h=240&q=80",
    poster: "https://images.unsplash.com/photo-1519226135464-df5a9dbcd2a5?auto=format&fit=crop&w=900&h=506&q=80",
    duration: "3:12",
    transcript:
      "Social withdrawal in children is one of the most common concerns parents bring to me. When a child suddenly pulls back from friends and activities they used to love, it's important not to dismiss it as 'just a phase.' There are several possible reasons — depression, anxiety, bullying, or a significant life change like a move or divorce. The first step is creating a safe space for open conversation. Ask open-ended questions without pressure: 'I've noticed you haven't been seeing your friends lately — how are you feeling?' Give them time to respond and resist the urge to immediately problem-solve. If the withdrawal persists for more than two weeks and is accompanied by changes in sleep, appetite, or school performance, I'd strongly encourage speaking with a mental health professional.",
  },
  {
    id: 2,
    question: "How can I tell if my child is just highly energetic or if they have ADHD?",
    category: "ADHD",
    answeredBy: "kevin-skinner",
    thumbnail: "https://images.unsplash.com/photo-1624272864537-8ecc72b67958?auto=format&fit=crop&w=420&h=240&q=80",
    poster: "https://images.unsplash.com/photo-1524503033411-c9566986fc8f?auto=format&fit=crop&w=900&h=506&q=80",
    duration: "4:05",
    transcript:
      "This is one of the most frequently asked questions I receive. The difference between a high-energy child and one with ADHD comes down to impairment. A high-energy child can still focus when motivated, follow instructions in structured settings, and maintain friendships without significant difficulty. A child with ADHD experiences persistent patterns of inattention, hyperactivity, or impulsivity that interfere with functioning in multiple settings — home, school, and social situations. ADHD is diagnosed based on specific criteria that must be present in at least two settings and have lasted more than six months. If you're concerned, I'd recommend starting with a conversation with your child's pediatrician and teacher, and requesting a comprehensive evaluation.",
  },
  {
    id: 3,
    question: "How important is routine for an 8-year-old boy with ADHD?",
    category: "ADHD",
    answeredBy: "kevin-skinner",
    thumbnail: "https://images.unsplash.com/photo-1758687126227-48c2fa04b653?auto=format&fit=crop&w=420&h=240&q=80",
    poster: "https://images.unsplash.com/photo-1637878257903-7f08eab9a7f2?auto=format&fit=crop&w=900&h=506&q=80",
    duration: "2:48",
    transcript:
      "Routine is absolutely foundational for children with ADHD — I'd even say it's one of the most powerful non-medication interventions available. The ADHD brain struggles with working memory and executive function, which makes transitions and unpredictability especially challenging. A consistent daily schedule reduces the cognitive load of deciding what comes next, freeing up mental energy for learning and self-regulation. I recommend visual schedules — simple charts on the refrigerator with pictures or short words for each part of the day. Morning and bedtime routines are the highest priority. Be patient: it takes 4-6 weeks of consistency before a routine becomes automatic for most children with ADHD.",
  },
  {
    id: 4,
    question: "How can I better understand and help my child with an eating disorder?",
    category: "Behavior",
    answeredBy: "kevin-skinner",
    thumbnail: "https://images.unsplash.com/photo-1775725150401-357f45a657e1?auto=format&fit=crop&w=420&h=240&q=80",
    poster: "https://images.unsplash.com/photo-1719870444400-5972ef034a6a?auto=format&fit=crop&w=900&h=506&q=80",
    duration: "5:20",
    transcript:
      "Eating disorders are serious mental health conditions — not choices, not phases, and not about vanity. The most important thing a parent can do is approach the situation with curiosity, not judgment. Avoid commenting on food, weight, or body shape entirely. Instead, focus on your child's emotions and overall wellbeing. Meal times should be kept calm and free of conflict. I always encourage parents to seek professional help early; eating disorders are most treatable in the early stages. Family-Based Treatment, also called the Maudsley approach, has strong evidence for adolescents and actively involves parents in the recovery process. You are not to blame, and you are not powerless.",
  },
  {
    id: 5,
    question: "How can I help a child regulate their emotions during intense moments of stress?",
    category: "Emotions",
    answeredBy: "kevin-skinner",
    thumbnail: "https://images.unsplash.com/photo-1783953186310-ae1244b99407?auto=format&fit=crop&w=420&h=240&q=80",
    poster: "https://images.unsplash.com/photo-1483193722442-5422d99849bc?auto=format&fit=crop&w=900&h=506&q=80",
    duration: "3:45",
    transcript:
      "Emotional regulation is a skill — and like any skill, it can be taught and practiced. During moments of intense stress, the thinking brain goes offline and the survival brain takes over. This is why logic and reasoning don't work in the middle of a meltdown. In the moment, focus on co-regulation: your calm presence helps regulate your child's nervous system. Get down to their level, breathe slowly, keep your voice low and soft. After the storm passes — and it will pass — that's when you can talk about what happened. Long-term, teach your child to recognize their emotional early warning signs and build a personal 'toolkit' of strategies: deep breathing, physical movement, a comfort object, drawing, or music.",
  },
  {
    id: 6,
    question: "How can I help my 7-year-old son regulate his emotions when he doesn't get his way?",
    category: "Emotions",
    answeredBy: "kevin-skinner",
    thumbnail: "https://images.unsplash.com/photo-1753958509897-d13a04d04aaf?auto=format&fit=crop&w=420&h=240&q=80",
    poster: "https://images.unsplash.com/photo-1517545084371-4a575dde2a02?auto=format&fit=crop&w=900&h=506&q=80",
    duration: "3:02",
    transcript:
      "Frustration tolerance is one of the hardest skills for young children to develop — and one of the most important. At 7, your son is still developing the prefrontal cortex connections that help with impulse control. When he doesn't get his way, the goal isn't to stop him from feeling disappointed — disappointment is valid — but to help him express it safely. Name the emotion for him: 'I see you're really frustrated that we can't go to the park today.' Validate before you redirect. Then offer a limited choice to restore some sense of control: 'We can't go today, but we can go tomorrow morning or after school — which would you prefer?' Over time, this teaches him that his emotions are heard, even when the answer is no.",
  },
  {
    id: 7,
    question: "How do you help children work through justified anger?",
    category: "Emotions",
    answeredBy: "kevin-skinner",
    thumbnail: "https://images.unsplash.com/photo-1593183230686-69876b0cb240?auto=format&fit=crop&w=420&h=240&q=80",
    poster: "https://images.unsplash.com/photo-1605814573621-0513c34a0d58?auto=format&fit=crop&w=900&h=506&q=80",
    duration: "2:55",
    transcript:
      "Justified anger deserves to be honored. When a child's anger is a legitimate response to something unfair, dismissing it sends the message that their feelings don't matter. Start by acknowledging the injustice: 'You're right — that wasn't fair, and it makes complete sense that you're angry.' Once they feel heard, you can help them decide what to do with the anger. Anger is energy — it can be expressed physically through running, tearing paper, or hitting a pillow; verbally by writing a letter they may or may not send; or creatively through art. What we're teaching is not to suppress anger, but to channel it constructively. That's a life skill that will serve them well into adulthood.",
  },
  {
    id: 8,
    question: "How can I help reduce adolescence electronic addiction?",
    category: "Screen Time",
    answeredBy: "kevin-skinner",
    thumbnail: "https://images.unsplash.com/photo-1591845466152-62ab76b84fd6?auto=format&fit=crop&w=420&h=240&q=80",
    poster: "https://images.unsplash.com/photo-1703868175568-d5e194332ed4?auto=format&fit=crop&w=900&h=506&q=80",
    duration: "4:18",
    transcript:
      "Screen overuse in teenagers is real and it's neurological — apps are designed by teams of engineers whose sole job is to maximize engagement. Knowing that should remove some of the shame from both you and your teen. The most effective intervention isn't a dramatic confiscation but a collaborative conversation. Sit down together and look at their screen time data — most phones show this in settings. Explore it with curiosity: 'What do you notice? How do you feel after a long stretch on TikTok versus after time outside?' Then work together on a family agreement about times and places devices aren't used: during meals, after 9pm, in bedrooms. Create natural on-ramps off screens by introducing engaging real-world alternatives.",
  },
  {
    id: 9,
    question: "What are some of the best tools for social emotional regulation for an eight-year-old?",
    category: "Emotions",
    answeredBy: "kevin-skinner",
    thumbnail: "https://images.unsplash.com/photo-1601299124348-6a43706a155d?auto=format&fit=crop&w=420&h=240&q=80",
    poster: "https://images.unsplash.com/photo-1593194858961-5f1e560b37ce?auto=format&fit=crop&w=900&h=506&q=80",
    duration: "3:30",
    transcript:
      "At eight, children are in a wonderful developmental window for learning emotional tools because they're old enough to understand concepts but young enough to embrace playful approaches. Some of my favorites: The 'Check-In' habit — every evening at dinner, everyone shares one emotion word from their day. This normalizes emotional vocabulary. The 'Zones of Regulation' system uses color-coded zones to help children identify their emotional state. Deep breathing with a visual anchor — like tracing a hand or using a pinwheel — gives them a go-to tool in moments of overwhelm. Social stories can help children rehearse challenging situations before they happen. And bibliotherapy — reading books where characters navigate emotions — is a surprisingly powerful tool.",
  },
  {
    id: 10,
    question: "What would you recommend for a child who has ADHD and has trouble staying on task at school?",
    category: "ADHD",
    answeredBy: "kevin-skinner",
    thumbnail: "https://images.unsplash.com/photo-1779467286601-b57aee8cb966?auto=format&fit=crop&w=420&h=240&q=80",
    poster: "https://images.unsplash.com/photo-1611708314849-8bb91fe0fa56?auto=format&fit=crop&w=900&h=506&q=80",
    duration: "4:50",
    transcript:
      "Staying on task is one of the core challenges of ADHD, and it's important to understand that this isn't willpower — it's brain wiring. The ADHD brain needs novelty, urgency, and interest to activate. In the classroom, I recommend starting with an IEP or 504 plan to formalize accommodations: preferential seating near the teacher, extended time on tests, regular movement breaks, and chunked assignments. At home, use the Pomodoro technique adapted for kids: 10-15 minutes of focused work, then a 5-minute break with movement. A visual timer is essential. External accountability helps too — a homework buddy, a parent check-in, or a homework club. Celebrate effort over outcome, and communicate closely with the teacher.",
  },
  {
    id: 11,
    question:
      "Are there resources for children whose parents are going through a high-conflict divorce with a custody battle?",
    category: "Family",
    answeredBy: "kevin-skinner",
    thumbnail: "https://images.unsplash.com/photo-1758598737498-03850be1ad89?auto=format&fit=crop&w=420&h=240&q=80",
    poster: "https://images.unsplash.com/photo-1740679954227-a0cd19c042a6?auto=format&fit=crop&w=900&h=506&q=80",
    duration: "5:05",
    transcript:
      "High-conflict divorce is genuinely one of the most damaging environments for a child's development, and the pain you're feeling for your child is completely valid. The most protective factor for children in this situation is having at least one stable, emotionally available parent. That means working hard not to speak negatively about the other parent in front of the child, not using the child as a messenger or confidant, and keeping their routines as consistent as possible across both households. Professionally, I recommend finding a child therapist with specific experience in parental conflict — look for someone trained in play therapy or expressive arts for younger children. The book 'Cooperative Parenting After Divorce' by Susan Boyan is an excellent resource. If co-parenting communication is very difficult, apps like OurFamilyWizard can help reduce conflict.",
  },
  {
    id: 12,
    question: "How do you approach a child who could benefit from therapy but is reluctant to go?",
    category: "Anxiety",
    answeredBy: "kevin-skinner",
    thumbnail: "https://images.unsplash.com/photo-1758613171813-00af8a34bb99?auto=format&fit=crop&w=420&h=240&q=80",
    poster: "https://images.unsplash.com/photo-1714976694867-bc0e012fab70?auto=format&fit=crop&w=900&h=506&q=80",
    duration: "3:38",
    transcript:
      "Resistance to therapy is very common, especially in older children and teenagers. The first thing I'd say is: don't make therapy feel like a punishment or something reserved for 'broken' people. Normalize it: 'A lot of kids talk to someone who's really good at helping with hard feelings — it doesn't mean anything is wrong with you.' Let them have some choice in the process: show them a few therapist profiles and let them pick who they'd prefer to see. Frame the first appointment as 'just a meeting — you don't have to keep going if you don't want to.' Most reluctant kids, once they're in the room with a skilled therapist, become willing participants. If they truly won't go, parent coaching with a therapist can be highly effective — often the child's symptoms improve significantly when parents shift their approach.",
  },
  {
    id: 13,
    question: "How can I support my anxious child in feeling safe and confident at school?",
    category: "Anxiety",
    answeredBy: "kevin-skinner",
    thumbnail: "https://images.unsplash.com/photo-1624272949900-9ae4c56397e8?auto=format&fit=crop&w=420&h=240&q=80",
    poster: "https://images.unsplash.com/photo-1599376672737-bd66af54c8f5?auto=format&fit=crop&w=900&h=506&q=80",
    duration: "4:22",
    transcript:
      "School anxiety is one of the most common presentations I see, and it's treatable. The key principle is gradual exposure — we want to help the anxious child approach the feared situation, not avoid it, because avoidance strengthens anxiety over time. Work with the school to create a support plan: identify a safe person the child can check in with, agree on a code word they can use if they're overwhelmed, and establish a predictable morning drop-off routine. At home, do a brief 'worry time' each evening — a contained 10 minutes where your child can express all their school worries, and then you close the journal together. Validate without reassurance-seeking spirals: 'I hear that you're scared. I know you can handle hard things.' Build confidence through small wins in low-stakes situations.",
  },
  {
    id: 14,
    question: "What is the difference between a tantrum and an emotional meltdown in toddlers?",
    category: "Emotions",
    answeredBy: "kevin-skinner",
    thumbnail: "https://images.unsplash.com/photo-1624272864537-8ecc72b67958?auto=format&fit=crop&w=420&h=240&q=80",
    poster: "https://images.unsplash.com/photo-1625850344758-8c4ff87559ad?auto=format&fit=crop&w=900&h=506&q=80",
    duration: "2:40",
    transcript:
      "This distinction is really important because the two require different responses. A tantrum is goal-directed — your toddler is upset because they want something and they're letting you know it. If you give in, it stops. Tantrums are developmentally normal from about 18 months to 4 years and are best managed by staying calm, not giving in, and offering comfort once they've settled. A meltdown, on the other hand, is a neurological event. The child has become so overwhelmed that they've lost access to their thinking brain. They're not in control, and giving them what they want won't help — they often don't even know what they want anymore. Meltdowns respond to environmental changes: reduce stimulation, provide a calm presence, don't talk much, and wait for the storm to pass. Many children with sensory sensitivities or anxiety experience true meltdowns rather than tantrums.",
  },
  {
    id: 15,
    question: "How much screen time is too much for a 10-year-old, and how do I set healthy limits?",
    category: "Screen Time",
    answeredBy: "kevin-skinner",
    thumbnail: "https://images.unsplash.com/photo-1758687126227-48c2fa04b653?auto=format&fit=crop&w=420&h=240&q=80",
    poster: "https://images.unsplash.com/photo-1690656111993-9e57cf407923?auto=format&fit=crop&w=900&h=506&q=80",
    duration: "3:55",
    transcript:
      "The American Academy of Pediatrics moved away from strict hour-based limits for children over 6 and toward a quality-over-quantity approach — and I think that's wise. For a 10-year-old, what matters most is whether screen time is displacing sleep, physical activity, face-to-face socializing, and homework. If your child is getting adequate sleep, moving their body, maintaining friendships, and keeping up with school, moderate recreational screen time is not a crisis. That said, I recommend creating 'screen-free anchors' in your family's day: the hour before bed, during family meals, and the first 30 minutes after school. Co-view when possible — ask questions, show curiosity about what they're watching. The goal is to raise children who have a healthy relationship with technology, not a fearful one.",
  },
];

export const getQuestion = (id: number) => questions.find((q) => q.id === id);

export const questionSortOptions = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "az", label: "A–Z" },
] as const;
export type QuestionSort = (typeof questionSortOptions)[number]["value"];

export const askHero: SplitHeroContent = {
  eyebrow: "Latest Answer",
  eyebrowStyle: "badge",
  title: { text: "How do I know if my child's constant mood swings are just puberty or depression?" },
  person: { name: therapists["kevin-skinner"].name, role: therapists["kevin-skinner"].credential },
  actions: [{ label: "View Answer", to: "/ask-a-therapist/1" }],
  image: { src: imgFeaturedTherapist, alt: "" },
  shape: "wide",
};

export const askSubmitPrompt = {
  title: "Have a question for our therapists?",
  body: "Our therapists answer the difficult questions you have about your child.",
  buttonLabel: "Submit Question",
  image: { src: imgSidebarTherapist, alt: "" },
  imageCaption: "Expert therapists available to answer your questions",
};

/** Copy for the "Submit a question" dialog, shared by both pages. */
export const submitQuestionCopy = {
  title: "Ask a Therapist",
  description: "Licensed therapists respond within 48 hours",
  privacy:
    "Your question may be published anonymously to help other parents. Your email is for notification only and will not be shared publicly.",
  successTitle: "Question submitted",
  successBody: "Thank you! Our team will review your question and a licensed therapist will respond within 48 hours.",
};

export const askCta: PhotoCtaBannerContent = {
  title: "Looking for additional help?",
  body: "Our expert coaches will work one-on-one with you as you navigate your child's ups and downs. **These services may be free to you through your child's school district.**",
  cta: { label: "Get Started", to: "/parent-coaching" },
  image: { src: imgCtaBackground, alt: "" },
};

export const questionDisclaimer =
  "The use of parentguidance.org and the content on this website does not form a therapist/patient relationship with any clinician or coach.";
