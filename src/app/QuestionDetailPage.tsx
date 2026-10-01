import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router";
import { Button } from "./components/Button";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronRight, ChevronLeft, Play, Pause, Volume2, Maximize2,
  Settings, Captions, ChevronDown, ChevronUp, MessageCircle, ArrowRight,
  CheckCircle2, AlertCircle,
} from "lucide-react";

type QAItem = {
  id: number;
  question: string;
  category: string;
  therapist: string;
  credential: string;
  img: string;
  duration: string;
  transcript: string;
};

const QA_ITEMS: QAItem[] = [
  {
    id: 1,
    question: "Why is my child suddenly withdrawing from friends and activities he used to love?",
    category: "Behavior",
    therapist: "Dr. Kevin Skinner",
    credential: "Clinical Director, LMFT",
    img: "https://images.unsplash.com/photo-1519226135464-df5a9dbcd2a5?auto=format&fit=crop&w=900&h=506&q=80",
    duration: "3:12",
    transcript: "Social withdrawal in children is one of the most common concerns parents bring to me. When a child suddenly pulls back from friends and activities they used to love, it's important not to dismiss it as 'just a phase.' There are several possible reasons — depression, anxiety, bullying, or a significant life change like a move or divorce. The first step is creating a safe space for open conversation. Ask open-ended questions without pressure: 'I've noticed you haven't been seeing your friends lately — how are you feeling?' Give them time to respond and resist the urge to immediately problem-solve. If the withdrawal persists for more than two weeks and is accompanied by changes in sleep, appetite, or school performance, I'd strongly encourage speaking with a mental health professional.",
  },
  {
    id: 2,
    question: "How can I tell if my child is just highly energetic or if they have ADHD?",
    category: "ADHD",
    therapist: "Dr. Kevin Skinner",
    credential: "Clinical Director, LMFT",
    img: "https://images.unsplash.com/photo-1524503033411-c9566986fc8f?auto=format&fit=crop&w=900&h=506&q=80",
    duration: "4:05",
    transcript: "This is one of the most frequently asked questions I receive. The difference between a high-energy child and one with ADHD comes down to impairment. A high-energy child can still focus when motivated, follow instructions in structured settings, and maintain friendships without significant difficulty. A child with ADHD experiences persistent patterns of inattention, hyperactivity, or impulsivity that interfere with functioning in multiple settings — home, school, and social situations. ADHD is diagnosed based on specific criteria that must be present in at least two settings and have lasted more than six months. If you're concerned, I'd recommend starting with a conversation with your child's pediatrician and teacher, and requesting a comprehensive evaluation.",
  },
  {
    id: 3,
    question: "How important is routine for an 8-year-old boy with ADHD?",
    category: "ADHD",
    therapist: "Dr. Kevin Skinner",
    credential: "Clinical Director, LMFT",
    img: "https://images.unsplash.com/photo-1637878257903-7f08eab9a7f2?auto=format&fit=crop&w=900&h=506&q=80",
    duration: "2:48",
    transcript: "Routine is absolutely foundational for children with ADHD — I'd even say it's one of the most powerful non-medication interventions available. The ADHD brain struggles with working memory and executive function, which makes transitions and unpredictability especially challenging. A consistent daily schedule reduces the cognitive load of deciding what comes next, freeing up mental energy for learning and self-regulation. I recommend visual schedules — simple charts on the refrigerator with pictures or short words for each part of the day. Morning and bedtime routines are the highest priority. Be patient: it takes 4-6 weeks of consistency before a routine becomes automatic for most children with ADHD.",
  },
  {
    id: 4,
    question: "How can I better understand and help my child with an eating disorder?",
    category: "Behavior",
    therapist: "Dr. Kevin Skinner",
    credential: "Clinical Director, LMFT",
    img: "https://images.unsplash.com/photo-1719870444400-5972ef034a6a?auto=format&fit=crop&w=900&h=506&q=80",
    duration: "5:20",
    transcript: "Eating disorders are serious mental health conditions — not choices, not phases, and not about vanity. The most important thing a parent can do is approach the situation with curiosity, not judgment. Avoid commenting on food, weight, or body shape entirely. Instead, focus on your child's emotions and overall wellbeing. Meal times should be kept calm and free of conflict. I always encourage parents to seek professional help early; eating disorders are most treatable in the early stages. Family-Based Treatment, also called the Maudsley approach, has strong evidence for adolescents and actively involves parents in the recovery process. You are not to blame, and you are not powerless.",
  },
  {
    id: 5,
    question: "How can I help a child regulate their emotions during intense moments of stress?",
    category: "Emotions",
    therapist: "Dr. Kevin Skinner",
    credential: "Clinical Director, LMFT",
    img: "https://images.unsplash.com/photo-1483193722442-5422d99849bc?auto=format&fit=crop&w=900&h=506&q=80",
    duration: "3:45",
    transcript: "Emotional regulation is a skill — and like any skill, it can be taught and practiced. During moments of intense stress, the thinking brain goes offline and the survival brain takes over. This is why logic and reasoning don't work in the middle of a meltdown. In the moment, focus on co-regulation: your calm presence helps regulate your child's nervous system. Get down to their level, breathe slowly, keep your voice low and soft. After the storm passes — and it will pass — that's when you can talk about what happened. Long-term, teach your child to recognize their emotional early warning signs and build a personal 'toolkit' of strategies: deep breathing, physical movement, a comfort object, drawing, or music.",
  },
  {
    id: 6,
    question: "How can I help my 7-year-old son regulate his emotions when he doesn't get his way?",
    category: "Emotions",
    therapist: "Dr. Kevin Skinner",
    credential: "Clinical Director, LMFT",
    img: "https://images.unsplash.com/photo-1517545084371-4a575dde2a02?auto=format&fit=crop&w=900&h=506&q=80",
    duration: "3:02",
    transcript: "Frustration tolerance is one of the hardest skills for young children to develop — and one of the most important. At 7, your son is still developing the prefrontal cortex connections that help with impulse control. When he doesn't get his way, the goal isn't to stop him from feeling disappointed — disappointment is valid — but to help him express it safely. Name the emotion for him: 'I see you're really frustrated that we can't go to the park today.' Validate before you redirect. Then offer a limited choice to restore some sense of control: 'We can't go today, but we can go tomorrow morning or after school — which would you prefer?' Over time, this teaches him that his emotions are heard, even when the answer is no.",
  },
  {
    id: 7,
    question: "How do you help children work through justified anger?",
    category: "Emotions",
    therapist: "Dr. Kevin Skinner",
    credential: "Clinical Director, LMFT",
    img: "https://images.unsplash.com/photo-1605814573621-0513c34a0d58?auto=format&fit=crop&w=900&h=506&q=80",
    duration: "2:55",
    transcript: "Justified anger deserves to be honored. When a child's anger is a legitimate response to something unfair, dismissing it sends the message that their feelings don't matter. Start by acknowledging the injustice: 'You're right — that wasn't fair, and it makes complete sense that you're angry.' Once they feel heard, you can help them decide what to do with the anger. Anger is energy — it can be expressed physically through running, tearing paper, or hitting a pillow; verbally by writing a letter they may or may not send; or creatively through art. What we're teaching is not to suppress anger, but to channel it constructively. That's a life skill that will serve them well into adulthood.",
  },
  {
    id: 8,
    question: "How can I help reduce adolescence electronic addiction?",
    category: "Screen Time",
    therapist: "Dr. Kevin Skinner",
    credential: "Clinical Director, LMFT",
    img: "https://images.unsplash.com/photo-1703868175568-d5e194332ed4?auto=format&fit=crop&w=900&h=506&q=80",
    duration: "4:18",
    transcript: "Screen overuse in teenagers is real and it's neurological — apps are designed by teams of engineers whose sole job is to maximize engagement. Knowing that should remove some of the shame from both you and your teen. The most effective intervention isn't a dramatic confiscation but a collaborative conversation. Sit down together and look at their screen time data — most phones show this in settings. Explore it with curiosity: 'What do you notice? How do you feel after a long stretch on TikTok versus after time outside?' Then work together on a family agreement about times and places devices aren't used: during meals, after 9pm, in bedrooms. Create natural on-ramps off screens by introducing engaging real-world alternatives.",
  },
  {
    id: 9,
    question: "What are some of the best tools for social emotional regulation for an eight-year-old?",
    category: "Emotions",
    therapist: "Dr. Kevin Skinner",
    credential: "Clinical Director, LMFT",
    img: "https://images.unsplash.com/photo-1593194858961-5f1e560b37ce?auto=format&fit=crop&w=900&h=506&q=80",
    duration: "3:30",
    transcript: "At eight, children are in a wonderful developmental window for learning emotional tools because they're old enough to understand concepts but young enough to embrace playful approaches. Some of my favorites: The 'Check-In' habit — every evening at dinner, everyone shares one emotion word from their day. This normalizes emotional vocabulary. The 'Zones of Regulation' system uses color-coded zones to help children identify their emotional state. Deep breathing with a visual anchor — like tracing a hand or using a pinwheel — gives them a go-to tool in moments of overwhelm. Social stories can help children rehearse challenging situations before they happen. And bibliotherapy — reading books where characters navigate emotions — is a surprisingly powerful tool.",
  },
  {
    id: 10,
    question: "What would you recommend for a child who has ADHD and has trouble staying on task at school?",
    category: "ADHD",
    therapist: "Dr. Kevin Skinner",
    credential: "Clinical Director, LMFT",
    img: "https://images.unsplash.com/photo-1611708314849-8bb91fe0fa56?auto=format&fit=crop&w=900&h=506&q=80",
    duration: "4:50",
    transcript: "Staying on task is one of the core challenges of ADHD, and it's important to understand that this isn't willpower — it's brain wiring. The ADHD brain needs novelty, urgency, and interest to activate. In the classroom, I recommend starting with an IEP or 504 plan to formalize accommodations: preferential seating near the teacher, extended time on tests, regular movement breaks, and chunked assignments. At home, use the Pomodoro technique adapted for kids: 10-15 minutes of focused work, then a 5-minute break with movement. A visual timer is essential. External accountability helps too — a homework buddy, a parent check-in, or a homework club. Celebrate effort over outcome, and communicate closely with the teacher.",
  },
  {
    id: 11,
    question: "Are there resources for children whose parents are going through a high-conflict divorce?",
    category: "Family",
    therapist: "Dr. Kevin Skinner",
    credential: "Clinical Director, LMFT",
    img: "https://images.unsplash.com/photo-1740679954227-a0cd19c042a6?auto=format&fit=crop&w=900&h=506&q=80",
    duration: "5:05",
    transcript: "High-conflict divorce is genuinely one of the most damaging environments for a child's development, and the pain you're feeling for your child is completely valid. The most protective factor for children in this situation is having at least one stable, emotionally available parent. That means working hard not to speak negatively about the other parent in front of the child, not using the child as a messenger or confidant, and keeping their routines as consistent as possible across both households. Professionally, I recommend finding a child therapist with specific experience in parental conflict — look for someone trained in play therapy or expressive arts for younger children. The book 'Cooperative Parenting After Divorce' by Susan Boyan is an excellent resource. If co-parenting communication is very difficult, apps like OurFamilyWizard can help reduce conflict.",
  },
  {
    id: 12,
    question: "How do you approach a child who could benefit from therapy but is reluctant to go?",
    category: "Anxiety",
    therapist: "Dr. Kevin Skinner",
    credential: "Clinical Director, LMFT",
    img: "https://images.unsplash.com/photo-1714976694867-bc0e012fab70?auto=format&fit=crop&w=900&h=506&q=80",
    duration: "3:38",
    transcript: "Resistance to therapy is very common, especially in older children and teenagers. The first thing I'd say is: don't make therapy feel like a punishment or something reserved for 'broken' people. Normalize it: 'A lot of kids talk to someone who's really good at helping with hard feelings — it doesn't mean anything is wrong with you.' Let them have some choice in the process: show them a few therapist profiles and let them pick who they'd prefer to see. Frame the first appointment as 'just a meeting — you don't have to keep going if you don't want to.' Most reluctant kids, once they're in the room with a skilled therapist, become willing participants. If they truly won't go, parent coaching with a therapist can be highly effective — often the child's symptoms improve significantly when parents shift their approach.",
  },
  {
    id: 13,
    question: "How can I support my anxious child in feeling safe and confident at school?",
    category: "Anxiety",
    therapist: "Dr. Kevin Skinner",
    credential: "Clinical Director, LMFT",
    img: "https://images.unsplash.com/photo-1599376672737-bd66af54c8f5?auto=format&fit=crop&w=900&h=506&q=80",
    duration: "4:22",
    transcript: "School anxiety is one of the most common presentations I see, and it's treatable. The key principle is gradual exposure — we want to help the anxious child approach the feared situation, not avoid it, because avoidance strengthens anxiety over time. Work with the school to create a support plan: identify a safe person the child can check in with, agree on a code word they can use if they're overwhelmed, and establish a predictable morning drop-off routine. At home, do a brief 'worry time' each evening — a contained 10 minutes where your child can express all their school worries, and then you close the journal together. Validate without reassurance-seeking spirals: 'I hear that you're scared. I know you can handle hard things.' Build confidence through small wins in low-stakes situations.",
  },
  {
    id: 14,
    question: "What is the difference between a tantrum and an emotional meltdown in toddlers?",
    category: "Emotions",
    therapist: "Dr. Kevin Skinner",
    credential: "Clinical Director, LMFT",
    img: "https://images.unsplash.com/photo-1625850344758-8c4ff87559ad?auto=format&fit=crop&w=900&h=506&q=80",
    duration: "2:40",
    transcript: "This distinction is really important because the two require different responses. A tantrum is goal-directed — your toddler is upset because they want something and they're letting you know it. If you give in, it stops. Tantrums are developmentally normal from about 18 months to 4 years and are best managed by staying calm, not giving in, and offering comfort once they've settled. A meltdown, on the other hand, is a neurological event. The child has become so overwhelmed that they've lost access to their thinking brain. They're not in control, and giving them what they want won't help — they often don't even know what they want anymore. Meltdowns respond to environmental changes: reduce stimulation, provide a calm presence, don't talk much, and wait for the storm to pass. Many children with sensory sensitivities or anxiety experience true meltdowns rather than tantrums.",
  },
  {
    id: 15,
    question: "How much screen time is too much for a 10-year-old, and how do I set healthy limits?",
    category: "Screen Time",
    therapist: "Dr. Kevin Skinner",
    credential: "Clinical Director, LMFT",
    img: "https://images.unsplash.com/photo-1690656111993-9e57cf407923?auto=format&fit=crop&w=900&h=506&q=80",
    duration: "3:55",
    transcript: "The American Academy of Pediatrics moved away from strict hour-based limits for children over 6 and toward a quality-over-quantity approach — and I think that's wise. For a 10-year-old, what matters most is whether screen time is displacing sleep, physical activity, face-to-face socializing, and homework. If your child is getting adequate sleep, moving their body, maintaining friendships, and keeping up with school, moderate recreational screen time is not a crisis. That said, I recommend creating 'screen-free anchors' in your family's day: the hour before bed, during family meals, and the first 30 minutes after school. Co-view when possible — ask questions, show curiosity about what they're watching. The goal is to raise children who have a healthy relationship with technology, not a fearful one.",
  },
];

const RELATED_COUNT = 3;

export default function QuestionDetailPage() {
  const { questionId } = useParams<{ questionId: string }>();
  const navigate = useNavigate();

  const id = parseInt(questionId ?? "1", 10);
  const question = QA_ITEMS.find((q) => q.id === id) ?? QA_ITEMS[0];
  const prevQ = QA_ITEMS.find((q) => q.id === id - 1);
  const nextQ = QA_ITEMS.find((q) => q.id === id + 1);
  const related = QA_ITEMS.filter((q) => q.id !== id && q.category === question.category).slice(0, RELATED_COUNT);
  const fallbackRelated = QA_ITEMS.filter((q) => q.id !== id).slice(0, RELATED_COUNT);
  const relatedItems = related.length > 0 ? related : fallbackRelated;

  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [transcriptOpen, setTranscriptOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [submitQ, setSubmitQ] = useState("");
  const [submitEmail, setSubmitEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [durationMin, durationSec] = question.duration.split(":").map(Number);
  const totalSecs = durationMin * 60 + durationSec;
  const elapsedSecs = Math.floor((progress / 100) * totalSecs);
  const elapsedStr = `${Math.floor(elapsedSecs / 60)}:${String(elapsedSecs % 60).padStart(2, "0")}`;

  return (
    <div className="bg-pg-cream min-h-screen flex flex-col">

      {/* ── Breadcrumb ── */}
      <div className="bg-pg-tint-soft border-b border-pg-line pt-14 shrink-0">
        <div className="max-w-pg-page mx-auto px-6 h-10 flex items-center gap-2">
          <Link
            to="/ask-a-therapist"
            className="text-xs text-pg-teal-dark hover:text-pg-navy no-underline transition-colors shrink-0"
          >
            ← Back to Questions
          </Link>
          <ChevronRight size={13} className="text-pg-slate shrink-0" />
          <span className="font-semibold text-[11px] uppercase tracking-[1.2px] text-pg-teal-dark bg-pg-tint px-2 py-0.5 rounded-pg-sm shrink-0">
            {question.category}
          </span>
          <ChevronRight size={13} className="text-pg-slate shrink-0" />
          <span className="text-xs font-semibold text-pg-navy truncate">
            {question.question}
          </span>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="flex-1 max-w-pg-page mx-auto w-full px-6 md:px-10 py-8 flex flex-col lg:flex-row gap-6">

        {/* ── Left: video + transcript ── */}
        <div className="flex-1 flex flex-col gap-5 min-w-0">

          {/* Question heading */}
          <div>
            <span className="inline-block font-semibold text-[11px] uppercase tracking-[1.4px] text-pg-teal-dark bg-pg-tint border border-pg-sage/40 px-2.5 py-0.5 rounded-pg-sm mb-2">
              {question.category}
            </span>
            <h1 className="font-bold text-pg-navy text-xl leading-snug">
              {question.question}
            </h1>
            <p className="text-pg-slate text-xs mt-1">— User Submitted</p>
          </div>

          {/* ── Video player ── */}
          <div
            className="relative w-full rounded-pg-lg overflow-hidden bg-pg-navy cursor-pointer select-none"
            style={{ aspectRatio: "16/9" }}
            onClick={() => {
              setPlaying((p) => !p);
              if (!playing) setProgress((p) => Math.min(p + 3, 100));
            }}
          >
            <img
              src={question.img}
              alt="Video thumbnail"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-(--pg-dur-base) ${playing ? "opacity-50" : "opacity-75"}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* Duration badge */}
            <div className="absolute top-3 left-3 bg-black/60 text-white text-xs font-semibold px-2 py-0.5 rounded-pg-sm">
              {question.duration}
            </div>

            {/* Play/pause center */}
            <AnimatePresence mode="wait">
              <motion.div
                key={playing ? "pause" : "play"}
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.15 }}
              >
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                  {playing
                    ? <Pause size={26} fill="white" className="text-white" />
                    : <Play size={26} fill="white" className="text-white ml-1" />}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="absolute bottom-0 left-0 right-0 px-4 pb-3 pt-8 bg-gradient-to-t from-black/80 to-transparent">
              {/* Progress */}
              <div
                className="w-full h-1 bg-white/30 rounded-full mb-3 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  const rect = e.currentTarget.getBoundingClientRect();
                  setProgress(Math.round(((e.clientX - rect.left) / rect.width) * 100));
                }}
              >
                <div className="h-full bg-pg-teal rounded-full relative" style={{ width: `${progress}%` }}>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-pg-teal rounded-full shadow-pg-card" />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button className="text-white/80 hover:text-white transition-colors" onClick={(e) => { e.stopPropagation(); setPlaying((p) => !p); }}>
                    {playing ? <Pause size={15} fill="white" /> : <Play size={15} fill="white" className="ml-0.5" />}
                  </button>
                  <span className="text-white/80 text-xs">
                    {elapsedStr} / {question.duration}
                  </span>
                  <Volume2 size={14} className="text-white/60 hover:text-white cursor-pointer transition-colors" onClick={(e) => e.stopPropagation()} />
                </div>
                <div className="flex items-center gap-3">
                  <Captions size={14} className="text-white/60 hover:text-white cursor-pointer transition-colors" onClick={(e) => e.stopPropagation()} />
                  <Settings size={14} className="text-white/60 hover:text-white cursor-pointer transition-colors" onClick={(e) => e.stopPropagation()} />
                  <Maximize2 size={14} className="text-white/60 hover:text-white cursor-pointer transition-colors" onClick={(e) => e.stopPropagation()} />
                </div>
              </div>
            </div>
          </div>

          {/* ── Transcript ── */}
          <div className="bg-white rounded-pg-xl border border-pg-line overflow-hidden" style={{ boxShadow: "0 8px 24px rgba(28,50,67,0.06)" }}>
            <button
              onClick={() => setTranscriptOpen((o) => !o)}
              className="w-full flex items-center justify-between px-5 py-4 hover:bg-pg-cream transition-colors"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-pg-teal" />
                <span className="font-semibold text-sm text-pg-navy">
                  Read Transcript
                </span>
              </div>
              <motion.div animate={{ rotate: transcriptOpen ? 180 : 0 }} transition={{ duration: 0.22 }}>
                <ChevronDown size={16} className="text-pg-slate" />
              </motion.div>
            </button>

            <AnimatePresence>
              {transcriptOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
                  style={{ overflow: "hidden" }}
                >
                  <div className="px-5 pb-5 border-t border-pg-line pt-4">
                    <p className="text-pg-slate text-sm leading-relaxed">
                      {question.transcript}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── Disclaimer ── */}
          <div className="flex gap-3 bg-pg-warning-soft border border-pg-amber/40 rounded-pg-lg px-4 py-3">
            <AlertCircle size={15} className="text-pg-amber shrink-0 mt-0.5" />
            <p className="text-pg-slate text-xs leading-relaxed">
              <span className="font-semibold text-pg-navy">Important: </span>
              The use of parentguidance.org and the content on this website does not form a therapist/patient relationship with any clinician or coach.
            </p>
          </div>

          {/* ── Previous / Next ── */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            {prevQ ? (
              <Link
                to={`/ask-a-therapist/${prevQ.id}`}
                className="flex-1 min-w-0 no-underline"
              >
                <motion.div
                  className="flex items-center gap-3 bg-white border border-pg-line rounded-pg-lg p-4 hover:border-pg-sage transition-colors group"
                  whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(28,50,67,0.14)" }}
                >
                  <ChevronLeft size={16} className="text-pg-slate group-hover:text-pg-teal transition-colors shrink-0" />
                  <div className="min-w-0">
                    <p className="text-[11px] text-pg-slate uppercase tracking-[1px] mb-0.5">Previous</p>
                    <p className="text-xs font-semibold text-pg-navy truncate">{prevQ.question}</p>
                  </div>
                </motion.div>
              </Link>
            ) : <div className="hidden sm:block flex-1" />}

            {nextQ ? (
              <Link
                to={`/ask-a-therapist/${nextQ.id}`}
                className="flex-1 min-w-0 no-underline"
              >
                <motion.div
                  className="flex items-center gap-3 bg-white border border-pg-line rounded-pg-lg p-4 hover:border-pg-sage transition-colors group text-right"
                  whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(28,50,67,0.14)" }}
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] text-pg-slate uppercase tracking-[1px] mb-0.5">Next</p>
                    <p className="text-xs font-semibold text-pg-navy truncate">{nextQ.question}</p>
                  </div>
                  <ChevronRight size={16} className="text-pg-slate group-hover:text-pg-teal transition-colors shrink-0" />
                </motion.div>
              </Link>
            ) : <div className="hidden sm:block flex-1" />}
          </div>
        </div>

        {/* ── Right sidebar ── */}
        <div className="w-full lg:w-[300px] shrink-0 flex flex-col gap-4">

          {/* Therapist card */}
          <div className="bg-white rounded-pg-xl border border-pg-line p-5 flex flex-col gap-3" style={{ boxShadow: "0 8px 24px rgba(28,50,67,0.06)" }}>
            <p className="font-semibold text-[11px] uppercase tracking-[1.2px] text-pg-slate">Answered by</p>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-pg-sage flex items-center justify-center shrink-0">
                <span className="font-bold text-pg-navy text-sm">KS</span>
              </div>
              <div>
                <p className="font-semibold text-pg-navy text-sm">{question.therapist}</p>
                <p className="text-pg-teal text-xs">{question.credential}</p>
              </div>
            </div>
            <p className="text-pg-slate text-xs leading-relaxed">
              Dr. Skinner is a Licensed Marriage and Family Therapist, bestselling author, and happiness researcher with over 20 years of clinical experience.
            </p>
          </div>

          {/* Submit your question */}
          <div
            className="relative rounded-pg-xl overflow-hidden"
            style={{ boxShadow: "0 8px 24px rgba(28,50,67,0.06)" }}
          >
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=400&h=220&q=80"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pg-navy/90 via-pg-navy/60 to-pg-navy/30" />
            <div className="relative p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <MessageCircle size={14} className="text-pg-sage" />
                <span className="font-semibold text-[11px] uppercase tracking-[1.2px] text-pg-sage">Ask a Therapist</span>
              </div>
              <p className="font-bold text-white text-base leading-snug">
                Have a question of your own?
              </p>
              <p className="text-white/70 text-xs leading-relaxed">
                Submit your parenting question and get a personalized video response from one of our licensed therapists.
              </p>
              <Button variant="inverse" size="s" onClick={() => setShowModal(true)} className="self-start gap-1.5">
                Submit Question
                <ArrowRight size={12} />
              </Button>
            </div>
          </div>

          {/* Related questions */}
          <div className="bg-white rounded-pg-xl border border-pg-line overflow-hidden" style={{ boxShadow: "0 8px 24px rgba(28,50,67,0.06)" }}>
            <div className="px-4 py-3.5 border-b border-pg-line">
              <p className="font-bold text-pg-navy text-sm">Related Questions</p>
            </div>
            <div className="flex flex-col divide-y divide-pg-tint-soft">
              {relatedItems.map((item) => (
                <Link
                  key={item.id}
                  to={`/ask-a-therapist/${item.id}`}
                  className="no-underline block group px-4 py-3.5 hover:bg-pg-cream transition-colors"
                  style={{ color: "inherit" }}
                >
                  <div className="flex items-start gap-2.5">
                    <span className="font-semibold text-[11px] uppercase tracking-[1px] text-pg-teal-dark bg-pg-tint px-1.5 py-0.5 rounded-pg-sm shrink-0 mt-0.5">
                      {item.category}
                    </span>
                    <p className="text-xs text-pg-navy leading-snug group-hover:text-pg-teal transition-colors line-clamp-2">
                      {item.question}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="px-4 py-3 border-t border-pg-line">
              <Link
                to="/ask-a-therapist"
                className="text-xs text-pg-teal hover:text-pg-teal-dark no-underline transition-colors flex items-center gap-1"
              >
                Browse all questions
                <ChevronRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Submit modal ── */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-pg-navy/60 backdrop-blur-sm" onClick={() => setShowModal(false)} />
            <motion.div
              className="relative bg-white rounded-pg-xl shadow-pg-overlay w-full max-w-md overflow-hidden"
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="bg-pg-navy px-6 py-5">
                <div className="flex items-center gap-2 mb-1">
                  <MessageCircle size={14} className="text-pg-sage" />
                  <span className="text-[11px] font-semibold uppercase tracking-[1.2px] text-pg-sage">Ask a Therapist</span>
                </div>
                <h3 className="font-bold text-white text-lg">Submit Your Question</h3>
              </div>

              {submitted ? (
                <div className="p-8 flex flex-col items-center gap-3 text-center">
                  <div className="w-12 h-12 rounded-full bg-pg-tint flex items-center justify-center">
                    <CheckCircle2 size={22} className="text-pg-teal" />
                  </div>
                  <p className="font-bold text-pg-navy text-base">Question received!</p>
                  <p className="text-pg-slate text-sm">We'll have a licensed therapist respond with a video answer. Check your email for updates.</p>
                  <Button onClick={() => { setShowModal(false); setSubmitted(false); setSubmitQ(""); setSubmitEmail(""); }} className="mt-2">
                    Done
                  </Button>
                </div>
              ) : (
                <form className="p-6 flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); if (submitQ.trim() && submitEmail.trim()) setSubmitted(true); }}>
                  <div>
                    <label className="text-xs font-semibold text-pg-navy block mb-1.5">Your Question</label>
                    <textarea
                      rows={4}
                      className="w-full border border-pg-line rounded-pg-md px-3.5 py-2.5 text-sm text-pg-navy placeholder:text-pg-teal outline-none focus:border-pg-teal resize-none transition-colors"
                      placeholder="What's your parenting question?"
                      value={submitQ}
                      onChange={(e) => setSubmitQ(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-pg-navy block mb-1.5">Email</label>
                    <input
                      type="email"
                      className="w-full border border-pg-line rounded-pg-md px-3.5 py-2.5 text-sm text-pg-navy placeholder:text-pg-teal outline-none focus:border-pg-teal transition-colors"
                      placeholder="your@email.com"
                      value={submitEmail}
                      onChange={(e) => setSubmitEmail(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-3 mt-1">
                    <Button variant="secondary" onClick={() => setShowModal(false)} className="flex-1">
                      Cancel
                    </Button>
                    <Button type="submit" className="flex-1">
                      Submit
                    </Button>
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
