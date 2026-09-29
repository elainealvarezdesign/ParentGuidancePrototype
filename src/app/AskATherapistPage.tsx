import { useState, useRef } from "react";
import { Link } from "react-router";
import { motion, useInView } from "motion/react";
import { MessageCircle, Send, Search, ChevronLeft, ChevronRight, X, ArrowRight, CheckCircle } from "lucide-react";
import imgFeaturedTherapist from "@/imports/05AskATherapist/7af58431d48866bcf252a78cb8709dda98a31204.jpg";
import imgSidebarTherapist from "@/imports/05AskATherapist/bf73af5e36126dc41ee73d1f5f81e395e37ead59.jpg";
import imgCtaBackground from "@/imports/05AskATherapist/7da52df8b36aa7daa4e656a1f0b1284a37a44402.jpg";

type QACategory = "All" | "Anxiety" | "ADHD" | "Emotions" | "Behavior" | "Family" | "Screen Time";

const CATEGORIES: QACategory[] = ["All", "Anxiety", "ADHD", "Emotions", "Behavior", "Family", "Screen Time"];

const FEATURED = {
  question: "How do I know if my child's constant mood swings are just puberty or depression?",
  therapist: "Dr. Kevin Skinner",
  credential: "Clinical Director, LMFT",
  img: imgFeaturedTherapist,
};

type QAItem = {
  id: number;
  question: string;
  category: QACategory;
  therapist: string;
  img: string;
};

const QA_ITEMS: QAItem[] = [
  {
    id: 1,
    question: "Why is my child suddenly withdrawing from friends and activities he used to love?",
    category: "Behavior",
    therapist: "Dr. Kevin Skinner",
    img: "https://images.unsplash.com/photo-1624272949900-9ae4c56397e8?auto=format&fit=crop&w=420&h=240&q=80",
  },
  {
    id: 2,
    question: "How can I tell if my child is just highly energetic or if they have ADHD?",
    category: "ADHD",
    therapist: "Dr. Kevin Skinner",
    img: "https://images.unsplash.com/photo-1624272864537-8ecc72b67958?auto=format&fit=crop&w=420&h=240&q=80",
  },
  {
    id: 3,
    question: "How important is routine for an 8-year-old boy with ADHD?",
    category: "ADHD",
    therapist: "Dr. Kevin Skinner",
    img: "https://images.unsplash.com/photo-1758687126227-48c2fa04b653?auto=format&fit=crop&w=420&h=240&q=80",
  },
  {
    id: 4,
    question: "How can I better understand and help my child with an eating disorder?",
    category: "Behavior",
    therapist: "Dr. Kevin Skinner",
    img: "https://images.unsplash.com/photo-1775725150401-357f45a657e1?auto=format&fit=crop&w=420&h=240&q=80",
  },
  {
    id: 5,
    question: "How can I help a child regulate their emotions during intense moments of stress?",
    category: "Emotions",
    therapist: "Dr. Kevin Skinner",
    img: "https://images.unsplash.com/photo-1783953186310-ae1244b99407?auto=format&fit=crop&w=420&h=240&q=80",
  },
  {
    id: 6,
    question: "How can I help my 7-year-old son regulate his emotions when he doesn't get his way?",
    category: "Emotions",
    therapist: "Dr. Kevin Skinner",
    img: "https://images.unsplash.com/photo-1753958509897-d13a04d04aaf?auto=format&fit=crop&w=420&h=240&q=80",
  },
  {
    id: 7,
    question: "How do you help children work through justified anger?",
    category: "Emotions",
    therapist: "Dr. Kevin Skinner",
    img: "https://images.unsplash.com/photo-1593183230686-69876b0cb240?auto=format&fit=crop&w=420&h=240&q=80",
  },
  {
    id: 8,
    question: "How can I help reduce adolescence electronic addiction?",
    category: "Screen Time",
    therapist: "Dr. Kevin Skinner",
    img: "https://images.unsplash.com/photo-1591845466152-62ab76b84fd6?auto=format&fit=crop&w=420&h=240&q=80",
  },
  {
    id: 9,
    question: "What are some of the best tools for social emotional regulation for an eight-year-old?",
    category: "Emotions",
    therapist: "Dr. Kevin Skinner",
    img: "https://images.unsplash.com/photo-1601299124348-6a43706a155d?auto=format&fit=crop&w=420&h=240&q=80",
  },
  {
    id: 10,
    question: "What would you recommend for a child who has ADHD and has trouble staying on task at school?",
    category: "ADHD",
    therapist: "Dr. Kevin Skinner",
    img: "https://images.unsplash.com/photo-1779467286601-b57aee8cb966?auto=format&fit=crop&w=420&h=240&q=80",
  },
  {
    id: 11,
    question: "Are there resources for children whose parents are going through a high-conflict divorce with a custody battle?",
    category: "Family",
    therapist: "Dr. Kevin Skinner",
    img: "https://images.unsplash.com/photo-1758598737498-03850be1ad89?auto=format&fit=crop&w=420&h=240&q=80",
  },
  {
    id: 12,
    question: "How do you approach a child who could benefit from therapy but is reluctant to go?",
    category: "Anxiety",
    therapist: "Dr. Kevin Skinner",
    img: "https://images.unsplash.com/photo-1758613171813-00af8a34bb99?auto=format&fit=crop&w=420&h=240&q=80",
  },
  {
    id: 13,
    question: "How can I support my anxious child in feeling safe and confident at school?",
    category: "Anxiety",
    therapist: "Dr. Kevin Skinner",
    img: "https://images.unsplash.com/photo-1624272949900-9ae4c56397e8?auto=format&fit=crop&w=420&h=240&q=80",
  },
  {
    id: 14,
    question: "What is the difference between a tantrum and an emotional meltdown in toddlers?",
    category: "Emotions",
    therapist: "Dr. Kevin Skinner",
    img: "https://images.unsplash.com/photo-1624272864537-8ecc72b67958?auto=format&fit=crop&w=420&h=240&q=80",
  },
  {
    id: 15,
    question: "How much screen time is too much for a 10-year-old, and how do I set healthy limits?",
    category: "Screen Time",
    therapist: "Dr. Kevin Skinner",
    img: "https://images.unsplash.com/photo-1758687126227-48c2fa04b653?auto=format&fit=crop&w=420&h=240&q=80",
  },
];

const PER_PAGE = 9;

/* ── Submit Question Modal ── */
function SubmitModal({ onClose }: { onClose: () => void }) {
  const [question, setQuestion] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (question.trim() && email.trim()) setSubmitted(true);
  }

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="absolute inset-0 bg-[#1c3243]/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        className="relative bg-white rounded-[16px] shadow-2xl w-full max-w-lg overflow-hidden"
        initial={{ opacity: 0, y: 28, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Header stripe */}
        <div className="bg-[#1c3243] px-8 py-5 flex items-center gap-3">
          <div className="w-9 h-9 rounded-[8px] bg-[#90b3b6]/20 flex items-center justify-center shrink-0">
            <MessageCircle size={17} className="text-[#90b3b6]" />
          </div>
          <div>
            <h3 className="font-['Poppins',sans-serif] font-bold text-white text-base leading-tight">Ask a Therapist</h3>
            <p className="font-['Poppins',sans-serif] text-[#90b3b6] text-[11px]">Licensed therapists respond within 48 hours</p>
          </div>
          <button
            onClick={onClose}
            className="ml-auto text-[#90b3b6] hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-8 flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="font-['Poppins',sans-serif] font-semibold text-[#1c3243] text-sm">
                Your Question <span className="text-[#59797d]">*</span>
              </label>
              <textarea
                value={question}
                onChange={e => setQuestion(e.target.value)}
                placeholder="What would you like to ask our therapists about your child's mental health?"
                rows={4}
                required
                className="font-['Poppins',sans-serif] text-sm text-[#1c3243] placeholder:text-[#acbcbe] border border-[#e8ebed] rounded-[8px] px-4 py-3 outline-none focus:border-[#90b3b6] transition-colors resize-none"
              />
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col gap-1.5 flex-1">
                <label className="font-['Poppins',sans-serif] font-semibold text-[#1c3243] text-sm">Your Name</label>
                <input
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Optional"
                  className="font-['Poppins',sans-serif] text-sm text-[#1c3243] placeholder:text-[#acbcbe] border border-[#e8ebed] rounded-[8px] px-4 py-2.5 outline-none focus:border-[#90b3b6] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5 flex-1">
                <label className="font-['Poppins',sans-serif] font-semibold text-[#1c3243] text-sm">
                  Email <span className="text-[#59797d]">*</span>
                </label>
                <input
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  type="email"
                  required
                  className="font-['Poppins',sans-serif] text-sm text-[#1c3243] placeholder:text-[#acbcbe] border border-[#e8ebed] rounded-[8px] px-4 py-2.5 outline-none focus:border-[#90b3b6] transition-colors"
                />
              </div>
            </div>
            <p className="font-['Poppins',sans-serif] text-[#acbcbe] text-[11px] leading-relaxed">
              Your question may be published anonymously to help other parents. Your email is for notification only and will not be shared publicly.
            </p>
            <motion.button
              type="submit"
              className="flex items-center justify-center gap-2 bg-[#59797d] text-white font-['Poppins',sans-serif] font-semibold text-sm py-3 rounded-[8px]"
              whileHover={{ backgroundColor: "#406064" }}
              whileTap={{ scale: 0.97 }}
            >
              <Send size={14} />
              Submit Question
            </motion.button>
          </form>
        ) : (
          <div className="px-8 py-12 flex flex-col items-center text-center gap-4">
            <motion.div
              className="w-16 h-16 rounded-full bg-[#e8f1f1] flex items-center justify-center"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <CheckCircle size={28} className="text-[#59797d]" />
            </motion.div>
            <h3 className="font-['Poppins',sans-serif] font-bold text-[#1c3243] text-xl">Question Submitted!</h3>
            <p className="font-['Poppins',sans-serif] text-[#435766] text-sm leading-relaxed max-w-xs">
              Thank you! Our team will review your question and a licensed therapist will respond within 48 hours.
            </p>
            <motion.button
              onClick={onClose}
              className="mt-2 bg-[#59797d] text-white font-['Poppins',sans-serif] font-semibold text-sm px-8 py-3 rounded-[8px]"
              whileHover={{ backgroundColor: "#406064" }}
              whileTap={{ scale: 0.97 }}
            >
              Done
            </motion.button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

/* ── Q&A Card ── */
function QACard({ item, index }: { item: QAItem; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-[16px] overflow-hidden flex flex-col cursor-pointer group"
      style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.06)" }}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: (index % 9) * 0.06 }}
      whileHover={{ y: -4, boxShadow: "0 14px 36px rgba(34,49,67,0.13)" }}
    >
      {/* Image */}
      <div className="relative overflow-hidden shrink-0" style={{ height: "176px" }}>
        <img
          src={item.img}
          alt=""
          className="w-full h-full object-cover rounded-t-[8px] group-hover:scale-105 transition-transform duration-500"
        />
        {/* Category pill */}
        <div className="absolute top-3 left-3">
          <span className="font-['Poppins',sans-serif] font-semibold text-[10px] text-white bg-[#1c3243]/80 backdrop-blur-sm px-2.5 py-1 rounded-full">
            {item.category}
          </span>
        </div>
        {/* Therapist avatar */}
        <div className="absolute bottom-3 left-3">
          <div className="w-7 h-7 rounded-full bg-[#90b3b6] border-2 border-white flex items-center justify-center shadow-sm">
            <span className="font-['Poppins',sans-serif] font-bold text-white text-[9px]">KS</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <p className="font-['Poppins',sans-serif] font-semibold text-[#1c3243] text-sm leading-[1.5] group-hover:text-[#59797d] transition-colors flex-1">
          {item.question}
        </p>
        <Link to={`/ask-a-therapist/${item.id}`} className="no-underline">
          <motion.div
            className="w-full font-['Poppins',sans-serif] font-semibold text-xs text-white bg-[#59797d] py-2.5 rounded-[8px] flex items-center justify-center gap-1.5"
            whileHover={{ backgroundColor: "#406064" }}
            whileTap={{ scale: 0.97 }}
          >
            View Answer <ArrowRight size={12} />
          </motion.div>
        </Link>
        <p className="font-['Poppins',sans-serif] text-[#acbcbe] text-[10px] text-center">
          Answered by: <span className="text-[#435766] font-medium">{item.therapist}</span>
        </p>
      </div>
    </motion.div>
  );
}

/* ── Page ── */
export default function AskATherapistPage() {
  const [activeCategory, setActiveCategory] = useState<QACategory>("All");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const filtered = QA_ITEMS.filter(item => {
    const matchCat = activeCategory === "All" || item.category === activeCategory;
    const matchSearch = !search || item.question.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  function handleCategoryChange(cat: QACategory) {
    setActiveCategory(cat);
    setPage(1);
  }

  function handleSearch(val: string) {
    setSearch(val);
    setPage(1);
  }

  return (
    <div className="bg-[#f9f4f1] min-h-screen">

      {/* ── HERO ── */}
     {/* — HERO — */}
<section className="bg-[#f9f4f1] overflow-hidden pt-8 md:pt-10">
  <div className="max-w-[1280px] mx-auto px-6 md:px-14 py-12 md:py-16">
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">

      {/* Left content */}
      <motion.div
        className="max-w-[500px]"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Latest badge */}
        <div className="inline-flex items-center gap-2 bg-[#59797d] text-white font-['Poppins',sans-serif] font-semibold text-[10px] uppercase tracking-[0.16em] px-4 py-2 rounded-md mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
          Latest Answer
        </div>

        {/* Question */}
        <h1 className="font-['Poppins',sans-serif] font-bold text-[#1c3243] text-3xl md:text-[40px] leading-[1.08] mb-8">
          {FEATURED.question}
        </h1>

        {/* Therapist */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-9 h-9 rounded-full bg-[#90b3b6] flex items-center justify-center">
            <span className="font-['Poppins',sans-serif] font-semibold text-white text-[11px]">
              KS
            </span>
          </div>

          <div>
            <p className="font-['Poppins',sans-serif] font-semibold text-[#90b3b6] text-sm leading-tight">
              {FEATURED.therapist}
            </p>
            <p className="font-['Poppins',sans-serif] text-[#90b3b6] text-[11px]">
              {FEATURED.credential}
            </p>
          </div>
        </div>

        {/* CTA */}
        <motion.button
          className="inline-flex items-center gap-3 font-['Poppins',sans-serif] font-semibold text-sm text-white bg-[#59797d] px-6 py-3 rounded-md"
          whileHover={{ scale: 1.03, backgroundColor: "#406064" }}
          whileTap={{ scale: 0.97 }}
        >
          View Answer
          <ArrowRight size={14} />
        </motion.button>
      </motion.div>

      {/* Right image */}
      <motion.div
        className="relative w-full max-w-[570px] mx-auto lg:mx-0 lg:ml-auto pb-8 pr-6 md:pb-12 md:pr-10"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.1,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        {/* Decorative rectangle */}
        <div className="absolute right-0 bottom-0 w-[65%] h-[78%] bg-[#90b3b6] rounded-xl" />

        {/* Featured image */}
        <img
          src={FEATURED.img}
          alt=""
          className="relative z-10 w-full aspect-[16/10] object-cover rounded-xl shadow-sm"
        />
      </motion.div>

    </div>
  </div>
</section>
{/* — FILTER BAR — */}
<section
  className="bg-white border-y border-[#ebe8eb] sticky top-14 z-30"
  style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
>
  <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-3 flex items-center gap-4">

    {/* Search */}
    <div className="relative shrink-0 w-64">
      <Search
        size={14}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-[#90b3b6]"
      />

      <input
        value={search}
        onChange={(event) => handleSearch(event.target.value)}
        placeholder="Search questions..."
        className="w-full bg-[#f9f4f1] font-['Poppins',sans-serif] text-sm text-[#1c3243] placeholder:text-[#90b3b6] pl-9 pr-9 py-2.5 rounded-lg outline-none focus:ring-2 focus:ring-[#90b3b6]/30"
      />

      {search && (
        <button
          type="button"
          onClick={() => handleSearch("")}
          aria-label="Clear search"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#90b3b6] hover:text-[#1c3243]"
        >
          <X size={14} />
        </button>
      )}
    </div>

    {/* Category filters */}
    <div className="flex items-center gap-2 overflow-x-auto flex-1 py-0.5">
      {CATEGORIES.map((category) => {
        const selected = activeCategory === category;

        return (
          <button
            key={category}
            type="button"
            onClick={() => handleCategoryChange(category)}
            className={`shrink-0 font-['Poppins',sans-serif] text-xs font-medium px-4 py-2 rounded-full transition-colors ${
              selected
                ? "bg-[#1c3243] text-white"
                : "bg-[#f1eeee] text-[#435766] hover:bg-[#e5e1e1]"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>

    {/* Featured control */}
    <button
      type="button"
      className="shrink-0 inline-flex items-center gap-3 bg-[#f1eeee] text-[#435766] font-['Poppins',sans-serif] text-xs font-medium px-4 py-2.5 rounded-lg"
    >
      <span className="flex flex-col gap-[2px]">
        <span className="block w-3 h-px bg-current" />
        <span className="block w-2 h-px bg-current" />
        <span className="block w-1 h-px bg-current" />
      </span>

      Featured
      <span className="text-base leading-none">⌄</span>
    </button>

  </div>
</section>
      {/* ── MAIN CONTENT ── */}
      <section className="bg-[#f5f5f5] py-14">
        <div className="max-w-[1280px] mx-auto px-14 flex gap-8 items-start">

          {/* LEFT SIDEBAR */}
          <div className="w-[248px] shrink-0 flex flex-col gap-5 sticky top-20">

            {/* Submit card */}
            <motion.div
              className="bg-[#1c3243] rounded-[16px] p-6 flex flex-col gap-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-10 h-10 rounded-[8px] bg-[#90b3b6]/15 flex items-center justify-center">
                <MessageCircle size={18} className="text-[#90b3b6]" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-['Poppins',sans-serif] font-bold text-white text-base leading-snug">
                  Have a question for our therapists?
                </h3>
                <p className="font-['Poppins',sans-serif] text-[#90b3b6] text-xs leading-relaxed">
                  Our therapists answer the difficult questions you have about your child.
                </p>
              </div>
              <motion.button
                onClick={() => setShowModal(true)}
                className="w-full font-['Poppins',sans-serif] font-semibold text-sm text-[#1c3243] bg-[#90b3b6] py-3 rounded-[8px] flex items-center justify-center gap-2"
                whileHover={{ backgroundColor: "#7da3a6" }}
                whileTap={{ scale: 0.97 }}
              >
                <Send size={13} />
                Submit Question
              </motion.button>
            </motion.div>

            {/* Sidebar photo */}
            <motion.div
              className="relative overflow-hidden rounded-[16px]"
              style={{ height: "190px" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <img
                src={imgSidebarTherapist}
                alt=""
                className="w-full h-full object-cover rounded-[8px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c3243]/80 to-transparent rounded-[8px]" />
              <p className="absolute bottom-4 left-4 right-4 font-['Poppins',sans-serif] font-semibold text-white text-xs leading-snug">
                Expert therapists available to answer your questions
              </p>
            </motion.div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="flex-1 min-w-0">

            {/* Section header */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-1 h-5 rounded-full bg-[#90b3b6]" />
                <span className="font-['Poppins',sans-serif] font-semibold text-[#1c3243] text-lg">Browse All</span>
                <div className="bg-[#e8f1f1] rounded-full px-2.5 py-0.5">
                  <span className="font-['Poppins',sans-serif] font-medium text-[#90b3b6] text-[11px]">
                    {filtered.length} questions
                  </span>
                </div>
              </div>
              {/* Search */}
              <div className="relative">
                <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#acbcbe] pointer-events-none" />
                <input
                  value={search}
                  onChange={e => handleSearch(e.target.value)}
                  placeholder="Search questions…"
                  className="font-['Poppins',sans-serif] text-[12px] text-[#1c3243] placeholder:text-[#acbcbe] border border-[#e8ebed] rounded-[8px] pl-8 pr-4 py-2 w-[200px] outline-none focus:border-[#90b3b6] bg-white transition-colors"
                />
              </div>
            </div>

            {/* Category tabs */}
            <div className="flex gap-1.5 flex-wrap mb-7">
              {CATEGORIES.map(cat => (
                <motion.button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className="font-['Poppins',sans-serif] font-medium text-[12px] px-4 py-2 rounded-full whitespace-nowrap transition-colors"
                  style={{
                    background: activeCategory === cat ? "#1c3243" : "#fff",
                    color: activeCategory === cat ? "#fff" : "#435766",
                    boxShadow: activeCategory === cat ? "none" : "0 1px 2px rgba(0,0,0,0.07)",
                  }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {cat}
                </motion.button>
              ))}
            </div>

            {/* Q&A Grid */}
            {paginated.length > 0 ? (
              <div className="grid grid-cols-3 gap-5">
                {paginated.map((item, i) => (
                  <QACard key={item.id} item={item} index={i} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <MessageCircle size={36} className="text-[#acbcbe] mb-3" />
                <p className="font-['Poppins',sans-serif] font-semibold text-[#1c3243] text-sm">No questions found</p>
                <p className="font-['Poppins',sans-serif] text-[#435766] text-xs mt-1.5">Try a different category or search term</p>
                <motion.button
                  onClick={() => { setActiveCategory("All"); setSearch(""); }}
                  className="mt-4 font-['Poppins',sans-serif] font-semibold text-xs text-[#59797d] border border-[#90b3b6] px-4 py-2 rounded-[8px]"
                  whileHover={{ backgroundColor: "#f0f6f6" }}
                >
                  Clear filters
                </motion.button>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-10">
                <motion.button
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="flex items-center gap-1 font-['Poppins',sans-serif] text-sm font-medium text-[#59797d] px-3 py-2 rounded-[8px] border border-[#90b3b6] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  whileHover={page > 1 ? { backgroundColor: "#f0f6f6" } : {}}
                >
                  <ChevronLeft size={14} /> Previous
                </motion.button>

                <div className="flex gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                    <motion.button
                      key={p}
                      onClick={() => setPage(p)}
                      className="w-9 h-9 font-['Poppins',sans-serif] text-sm font-medium rounded-[8px] transition-colors"
                      style={{
                        background: page === p ? "#1c3243" : "transparent",
                        color: page === p ? "#fff" : "#1c3243",
                      }}
                      whileHover={page !== p ? { backgroundColor: "#f0f0f0" } : {}}
                    >
                      {p}
                    </motion.button>
                  ))}
                </div>

                <motion.button
                  onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="flex items-center gap-1 font-['Poppins',sans-serif] text-sm font-medium text-[#59797d] px-3 py-2 rounded-[8px] border border-[#90b3b6] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  whileHover={page < totalPages ? { backgroundColor: "#f0f6f6" } : {}}
                >
                  Next <ChevronRight size={14} />
                </motion.button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-[#90b3b6] px-14 py-14">
        <div className="max-w-[1280px] mx-auto flex items-center gap-12">
          <motion.div
            className="relative overflow-hidden rounded-[16px] shrink-0"
            style={{ width: "420px", height: "210px" }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.35 }}
          >
            <img
              src={imgCtaBackground}
              alt=""
              className="w-full h-full object-cover rounded-[8px]"
            />
            <div className="absolute inset-0 bg-[#1c3243]/20 rounded-[8px]" />
          </motion.div>

          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <h2 className="font-['Poppins',sans-serif] font-bold text-[#1b1139] text-4xl leading-tight max-w-md">
              Looking for additional help?
            </h2>
            <p className="font-['Poppins',sans-serif] text-[#1b1139] text-sm leading-relaxed max-w-sm">
              Our expert coaches will work one-on-one with you as you navigate your child's ups and downs.{" "}
              <strong>These services may be free to you through your child's school district.</strong>
            </p>
            <motion.button
              className="self-start font-['Poppins',sans-serif] font-semibold text-sm text-white bg-[#59797d] px-6 py-3 rounded-[8px] inline-flex items-center gap-2"
              whileHover={{ scale: 1.03, backgroundColor: "#406064" }}
              whileTap={{ scale: 0.97 }}
            >
              Get Started <ArrowRight size={14} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ── MODAL ── */}
      {showModal && <SubmitModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
