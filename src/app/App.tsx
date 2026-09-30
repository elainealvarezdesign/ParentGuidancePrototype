import { useState, useEffect, useRef } from "react";
import { RouterProvider, createBrowserRouter, Outlet, Link, useLocation } from "react-router";
import MentalHealthSeriesPage from "./MentalHealthSeriesPage";
import ParentCoachingPage from "./ParentCoachingPage";
import OnDemandCoursesPage from "./OnDemandCoursesPage";
import AskATherapistPage from "./AskATherapistPage";
import GetHelpPage from "./GetHelpPage";
import CourseDetailPage from "./CourseDetailPage";
import LessonPage from "./LessonPage";
import QuestionDetailPage from "./QuestionDetailPage";
import MilestonesToProgressPage from "./MilestonesToProgressPage";
import MilestonesLessonPage from "./MilestonesLessonPage";
import { motion, useInView, AnimatePresence, MotionConfig } from "motion/react";
import { Menu, X } from "lucide-react";
import svgPaths from "@/imports/HomePagePgV2/svg-2e7k4ll6gf.ts";
import imgStaffGuidance from "@/imports/StaffGuidance.png";
import imgElizaChat from "@/imports/elizachat_logo_horizontal.svg";
import imgQBUnited from "@/imports/QB_united-1.png";
import imgHopeSquad from "@/imports/HopeSquad-1.png";
import imgCookCenter from "@/imports/CCHC_Logo-greyscale-1.png";
import imgRectangle75 from "@/imports/HomePagePgV2/b75247b5542e76cdf5c675041b7a6e465e33ef23.png";
import imgRectangle76 from "@/imports/HomePagePgV2/debf8187f5722e2bc3e9c2869fc7308cfe71f1fc.png";
import imgRectangle77 from "@/imports/HomePagePgV2/2efa62174bfcf85665907842ba36899e44e02fe9.png";
import imgRectangle78 from "@/imports/HomePagePgV2/277938b24e46ee2598e5638b70da775e75a5d182.png";
import imgRectangle327 from "@/imports/HomePagePgV2/0400e3bb3f86c98e80e3ad89c6a42fc531e57c9c.png";
import imgRectangle328 from "@/imports/HomePagePgV2/bd9781c81c132f9b40ead46dd75d71ac773882a9.png";
import imgImage5 from "@/imports/HomePagePgV2/1138b3a262907e92d450eba80453cde440ebaa2a.png";
import imgImage6 from "@/imports/HomePagePgV2/9442d656bc4ddba2d2248ba316dce480f313b27a.png";
import imgRectangle79 from "@/imports/HomePagePgV2/ece298d0ec2c16f10310d45724b276a6035cb503.png";
import imgRectangle80 from "@/imports/HomePagePgV2/fb9567d2a70815a5c0307df9118cb49c401b72a3.png";
import imgRectangle81 from "@/imports/HomePagePgV2/40e0ae4f954f871b7087c4354f1c8d0bf5926225.png";
import imgRectangle82 from "@/imports/HomePagePgV2/dabd6f5341bd78f44bfe8771b4f0e2a23c9565f1.png";
import CookiesPolicyPage from "./CookiesPolicyPage";
import TermsOfUsePage from "./TermsOfUsePage";
import ConsentDocumentsPage from "./ConsentDocumentsPage";
import ContactUsPage from "./ContactUsPage";
import HomePageV1 from "./HomePageV1";
import HomePageV2 from "./HomePageV2";
import MentalHealthTopicPage from "./MentalHealthTopicPage";
import MentalHealthEventsPage from "./MentalHealthEventsPage";

/* ── animation helpers ── */
function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
}

function SlideIn({ children, from = "left", delay = 0, className = "" }: { children: React.ReactNode; from?: "left" | "right"; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: from === "left" ? -48 : 48 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

/* ── Logo SVG ── */
function Logo() {
  return (
    <div className="h-6 relative w-[105px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 105 24">
        <g clipPath="url(#clip0_logo)">
          <path d={svgPaths.p37d85f80} fill="#90B4B6" />
          <path d={svgPaths.p336c2a30} fill="#f9f4f1" />
          <path d={svgPaths.p32c63380} fill="#f9f4f1" />
          <path d={svgPaths.p1e05f500} fill="#f9f4f1" />
          <path d={svgPaths.p847a600} fill="#f9f4f1" />
          <path d={svgPaths.p168e6c00} fill="#f9f4f1" />
          <path d={svgPaths.p2b3a1d00} fill="#f9f4f1" />
          <path d={svgPaths.p3fa63800} fill="#f9f4f1" />
          <path d={svgPaths.pf80fc40} fill="#f9f4f1" />
          <path d={svgPaths.p6808200} fill="#f9f4f1" />
          <path d={svgPaths.p2166ae80} fill="#f9f4f1" />
          <path d={svgPaths.p29ca9340} fill="#f9f4f1" />
          <path d={svgPaths.p49f4100} fill="#f9f4f1" />
          <path d={svgPaths.p97f3000} fill="#f9f4f1" />
          <path d={svgPaths.p32da5e00} fill="#f9f4f1" />
          <path d={svgPaths.p38b34680} fill="#f9f4f1" />
          <path d={svgPaths.p2bca3000} fill="#f9f4f1" />
          <path d={svgPaths.p26a7d100} fill="#f9f4f1" />
          <path d={svgPaths.p161a88c0} fill="#f9f4f1" />
          <path d={svgPaths.p38cd2100} fill="#f9f4f1" />
        </g>
        <defs>
          <clipPath id="clip0_logo">
            <rect fill="white" height="24" width="105" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

/* ── Language dropdown ── */
const LANGUAGES = ["English", "Spanish", "Arabic", "Chinese", "Vietnamese", "Portuguese"];

function LanguageDropdown() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("English");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 cursor-pointer group relative"
        aria-expanded={open}
      >
        <span className="font-['Poppins',sans-serif] text-[#97b4b5] text-xs font-medium">{language}</span>
        <svg
          className={`w-3.5 h-3.5 text-[#97b4b5] transition-transform ${open ? "rotate-180" : "group-hover:translate-y-0.5"}`}
          fill="none"
          viewBox="0 0 24 24"
        >
          <path clipRule="evenodd" d={svgPaths.pee47f00} fill="#97b4b5" fillRule="evenodd" />
        </svg>
        {open && <span className="absolute -bottom-[18px] left-0 right-0 h-0.5 bg-[#90b3b6] rounded-full" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-[32px] z-50 min-w-[160px] overflow-hidden rounded-[12px] border border-[#dee8e9] bg-white py-2 shadow-[0_8px_24px_rgba(28,50,67,0.14)]"
          >
            {LANGUAGES.filter((l) => l !== language).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => {
                  setLanguage(l);
                  setOpen(false);
                }}
                className="block w-full px-5 py-2.5 text-left font-['Poppins',sans-serif] text-sm text-[#1c3243] transition-colors hover:bg-[#f9f4f1] hover:text-[#59797d]"
              >
                {l}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Navbar ── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);
  const location = useLocation();
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Mobile menu: close on navigation, close with Escape, move focus into the menu when it opens
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);
  useEffect(() => {
    if (!menuOpen) return;
    firstMenuLinkRef.current?.focus();
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const links: { label: string; to: string }[] = [
    { label: "Home",                 to: "/" },
    { label: "Mental Health Series", to: "/mental-health-series" },
    { label: "Parent Coaching",      to: "/parent-coaching" },
    { label: "On-Demand Courses",    to: "/on-demand-courses" },
    { label: "Ask A Therapist",      to: "/ask-a-therapist" },
    { label: "Get Help",             to: "/get-help" },
  ];

  function isActive(to: string) {
    if (to === "/") return location.pathname === "/";
    return location.pathname.startsWith(to);
  }

  function getLinkColor(l: { label: string; to: string }) {
    if (isActive(l.to)) return "#90b3b6";
    return "white";
  }

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-10 h-14 bg-[#1c3243] print:hidden"
      animate={{ boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.18)" : "none" }}
      transition={{ duration: 0.3 }}
    >
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
        <Logo />
      </motion.div>
      <motion.div
        className="hidden lg:flex items-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {links.map((l) => {
          const baseColor = getLinkColor(l);
          const hoverColor = "#90b3b6";
          return (
            <Link
              key={l.label}
              to={l.to}
              className="font-['Poppins',sans-serif] text-xs font-medium whitespace-nowrap transition-colors duration-200 relative"
              style={{ color: baseColor }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = hoverColor; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = baseColor; }}
            >
              {l.label}
              {/* Active underline indicator */}
              {isActive(l.to) && (
                <span className="absolute -bottom-[18px] left-0 right-0 h-0.5 bg-[#90b3b6] rounded-full" />
              )}
            </Link>
          );
        })}
        <LanguageDropdown />
      </motion.div>

      {/* Mobile menu button (below 1024px) */}
      <button
        ref={menuButtonRef}
        type="button"
        className="lg:hidden flex items-center justify-center w-11 h-11 -mr-2 rounded-lg text-white hover:bg-white/10 transition-colors"
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen((v) => !v)}
      >
        {menuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
      </button>

      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Dimmed page behind the menu; tap to close */}
            <motion.div
              className="lg:hidden fixed inset-0 top-14 bg-[#1c3243]/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              id="mobile-menu"
              className="lg:hidden absolute top-14 left-0 right-0 bg-[#1c3243] border-t border-white/10 px-6 pt-2 pb-6 shadow-[0_24px_60px_rgba(28,50,67,0.28)] max-h-[calc(100dvh-56px)] overflow-y-auto"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <ul className="flex flex-col">
                {links.map((l, i) => {
                  const active = isActive(l.to);
                  return (
                    <li key={l.label} className="border-b border-white/10 last:border-b-0">
                      <Link
                        ref={i === 0 ? firstMenuLinkRef : undefined}
                        to={l.to}
                        aria-current={active ? "page" : undefined}
                        className={`flex items-center gap-3 min-h-12 py-3 font-['Poppins',sans-serif] text-base font-medium transition-colors ${
                          active ? "text-[#90b3b6]" : "text-white hover:text-[#90b3b6]"
                        }`}
                      >
                        <span className={`w-1 h-5 rounded-full ${active ? "bg-[#90b3b6]" : "bg-transparent"}`} aria-hidden="true" />
                        {l.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="font-['Poppins',sans-serif] text-xs font-semibold uppercase tracking-[1.2px] text-[#90b3b6]">Language</span>
                <LanguageDropdown />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

/* ── Hero ── */
function Hero() {
  const [focused, setFocused] = useState(false);
  return (
    <section className="pt-[72px] bg-[#f9f4f1] min-h-[400px] flex flex-col items-center text-center px-6 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-14"
      >
        <h1 className="font-['Poppins',sans-serif] font-black text-[#59797d] text-3xl md:text-4xl leading-tight md:leading-relaxed md:whitespace-nowrap">
          {"Discover "}
          <em className="font-['Poppins',sans-serif] italic font-black">Resources</em>
          {" That Can Help"}
        </h1>
      </motion.div>
      <motion.p
        className="font-['Poppins',sans-serif] text-[#1c3243] text-lg md:text-xl text-center leading-relaxed mt-4 max-w-2xl"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        Find trusted guidance, practical tips, and expert resources{" "}
        <br className="hidden md:block" />
        to help you navigate everyday parenting challenges.
      </motion.p>

      {/* Search bar */}
      <motion.div
        className="mt-10 w-full max-w-3xl"
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.65 }}
      >
        <div
          className="bg-white rounded-3xl pl-5 pr-2 md:px-6 py-2 md:py-3 flex items-center gap-3 shadow-sm"
          style={{
            boxShadow: focused
              ? "0 0 0 2px #90b3b6, 0 4px 24px rgba(144,179,182,0.18)"
              : "0 2px 16px rgba(0,0,0,0.07)",
            transition: "box-shadow 0.25s ease",
          }}
        >
          <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" viewBox="0 0 20 20">
            <path d={svgPaths.pb1c300} stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M18 18L16.5 16.5" stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
          <input
            className="flex-1 min-w-0 font-['Poppins',sans-serif] text-sm text-gray-700 bg-transparent outline-none placeholder:text-[#59797d]"
            placeholder="Anxiety in Children"
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
          <motion.button
            className="bg-[#90b3b6] text-gray-800 font-['Poppins',sans-serif] font-medium text-sm px-5 py-1.5 rounded-lg"
            whileHover={{ scale: 1.04, backgroundColor: "#7da3a6" }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
          >
            Search
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}

/* ── Resource cards ── */
const resourceCards = [
  {
    img: imgRectangle75,
    overlay: true,
    title: "Mental Health\nSeries",
    desc: "Dive into a wealth of knowledge tailored for parents",
    color: "#172c3a",
  },
  {
    img: imgRectangle76,
    overlay: false,
    title: "Coaching for\nLasting changes",
    desc: "Dive into a wealth of knowledge tailored for parents",
    color: "#1c3243",
  },
  {
    img: imgRectangle77,
    overlay: true,
    title: "On-demand\nCourses",
    desc: "Dive into a wealth of knowledge tailored for parents",
    color: "#1c3243",
  },
  {
    img: imgRectangle78,
    overlay: false,
    title: "Mental Health\nSeries",
    desc: "Dive into a wealth of knowledge tailored for parents",
    color: "#1c3243",
  },
];

function ResourceCard({ card, index }: { card: typeof resourceCards[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className="bg-[#90b3b6] rounded-t-2xl w-full lg:w-44 flex-shrink-0 overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(0,0,0,0.18)" }}
    >
      <div className="h-32 relative overflow-hidden rounded-t-lg">
        <img src={card.img} alt="" className="w-full h-full object-cover rounded-t-lg" />
        {card.overlay && <div className="absolute inset-0 bg-black/20 rounded-t-lg" />}
        <motion.div
          className="absolute inset-0 bg-[#90b3b6]/20"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      </div>
      <div className="px-4 pt-3 pb-4 flex flex-col gap-2">
        <p
          className="font-['Poppins',sans-serif] font-black text-[18px] leading-tight whitespace-pre-line"
          style={{ color: card.color }}
        >
          {card.title}
        </p>
        <p className="font-['Poppins',sans-serif] text-xs leading-normal" style={{ color: card.color }}>
          {card.desc}
        </p>
        <p className="font-['Poppins',sans-serif] font-medium text-xs text-[#1c3243] underline">Learn More</p>
      </div>
    </motion.div>
  );
}

function ResourceSection() {
  return (
    <section className="bg-[#f9f4f1] px-6 md:px-10 lg:px-14 pb-16">
      <div className="flex flex-col w-full max-w-md lg:max-w-none lg:w-fit mx-auto">
        <div className="grid grid-cols-2 gap-4 lg:flex lg:gap-5">
          {resourceCards.map((card, i) => (
            <ResourceCard key={i} card={card} index={i} />
          ))}
        </div>
        <FadeIn className="flex justify-end mt-3">
          <a href="#" className="font-['Poppins',sans-serif] text-sm text-[#406064] underline hover:text-[#59797d] transition-colors">
            view more
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

/* ── Why section ── */
const features = [
  {
    img: imgRectangle80,
    title: "Trusted by Parents",
    desc: "Developed by leading mental health professionals with years of clinical practice",
    reverse: false,
  },
  {
    img: imgRectangle81,
    title: "Expert Guidance",
    desc: "Access support whenever you need it, day or night, at your own pace",
    reverse: true,
  },
  {
    img: imgRectangle82,
    title: "Real Support for You",
    desc: "Get answers when your child needs them most",
    reverse: false,
  },
];

function FeatureRow({ feat, index }: { feat: typeof features[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={`flex flex-col md:flex-row items-center gap-8 md:gap-24 ${feat.reverse ? "md:flex-row-reverse" : ""}`}
      initial={{ opacity: 0, x: feat.reverse ? 48 : -48 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.div
        className="w-full max-w-80 md:w-80 h-60 rounded-[8px] overflow-hidden flex-shrink-0 relative"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.35 }}
      >
        <img src={imgRectangle79} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <img src={feat.img} alt="" className="absolute inset-0 w-full h-full object-cover" />
      </motion.div>
      <div className="flex flex-col gap-2 max-w-sm">
        <p className="font-['Poppins',sans-serif] font-black text-[#59797d] text-2xl md:text-3xl leading-relaxed">{feat.title}</p>
        <p className="font-['Poppins',sans-serif] text-[#1c3243] text-base md:text-lg leading-relaxed">{feat.desc}</p>
      </div>
    </motion.div>
  );
}

function WhySection() {
  return (
    <section className="bg-[#f9f4f1] py-14 md:py-20 px-6 md:px-10 lg:px-14 flex flex-col items-center gap-12 md:gap-20">
      <FadeUp className="flex flex-col items-center gap-4 max-w-3xl text-center">
        <span className="font-['Poppins',sans-serif] font-semibold text-[#2c3e50] text-base uppercase tracking-wider">Why</span>
        <h2 className="font-['Poppins',sans-serif] font-bold text-[#2c3e50] text-3xl md:text-4xl leading-tight tracking-tight">
          Built on real clinical experience
        </h2>
        <p className="font-['Poppins',sans-serif] text-[#2c3e50] text-lg md:text-xl leading-relaxed">
          We believe every parent deserves access to expert guidance. Our resources are built on real clinical experience
          and designed with your family in mind.
        </p>
      </FadeUp>
      <div className="flex flex-col gap-10 w-full max-w-4xl">
        {features.map((f, i) => (
          <FeatureRow key={i} feat={f} index={i} />
        ))}
      </div>
    </section>
  );
}

/* ── FAQ ── */
const faqs = [
  {
    question: "How long is this program?",
    answer:
      "Mental health support doesn't have a timeline and neither does our program. While the initial Parenting with Purpose roadmap is expected to take around 4 weeks to complete, we offer ongoing support as long as you need it.",
    defaultOpen: true,
  },
  { question: "What can I expect from a meeting with my coach?", answer: "Each coaching session is personalized to your family's unique needs and goals. Your coach will listen actively, offer evidence-based strategies, and help you develop an action plan that fits your lifestyle.", defaultOpen: false },
  { question: "How often can I message my coach?", answer: "You can message your coach at any time through our platform. Most coaches respond within a few hours during business hours, and within 24 hours at other times.", defaultOpen: false },
  { question: "How often will I meet with my coach?", answer: "Meeting frequency is flexible and based on your needs. Most families start with weekly sessions and adjust from there.", defaultOpen: false },
  { question: "What can I expect from a meeting with my coach?", answer: "Sessions typically include a check-in, goal review, new strategies, and a plan for the week ahead.", defaultOpen: false },
  { question: "How often can I message my coach?", answer: "Messaging is unlimited — reach out whenever something comes up.", defaultOpen: false },
  { question: "How long until we deliver your first blog post?", answer: "Our team reviews your intake information and typically delivers the first resource within 48 hours of enrollment.", defaultOpen: false },
];

function FaqItem({ item, index }: { item: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(item.defaultOpen);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-lg shadow-[0px_16px_32px_-12px_rgba(149,149,149,0.25)] overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      whileHover={{ boxShadow: "0px 20px 40px -12px rgba(149,149,149,0.35)" }}
      onClick={() => setOpen((o) => !o)}
    >
      <div className="flex items-center justify-between px-5 md:px-8 py-5 md:py-6">
        <span className="font-['Poppins',sans-serif] font-bold text-[#1b1139] text-lg leading-snug opacity-88 flex-1 pr-4">
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.22 }}
          className="flex items-center justify-center w-5 h-5 shrink-0"
        >
          <div className="relative w-5 h-5">
            <div className="absolute top-1/2 left-0 w-full h-[3px] bg-[#1b1139] rounded-full opacity-80 -translate-y-1/2" />
            <div className="absolute left-1/2 top-0 h-full w-[3px] bg-[#1b1139] rounded-full opacity-80 -translate-x-1/2" />
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ overflow: "hidden" }}
      >
        <div className="px-5 md:px-8 pb-6 flex flex-col gap-3">
          <div className="w-5 h-[3px] bg-[#52bd95] rounded-full opacity-80" />
          <p className="font-['Poppins',sans-serif] text-[#363049] text-sm leading-relaxed opacity-70">
            {item.answer}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function FaqSection() {
  const left = faqs.slice(0, Math.ceil(faqs.length / 2));
  const right = faqs.slice(Math.ceil(faqs.length / 2));
  return (
    <section className="bg-[#f9f4f1] py-16 px-6 md:px-10 lg:px-14">
      <FadeUp className="text-center mb-10">
        <h2 className="font-['Poppins',sans-serif] font-bold text-[#1c3243] text-2xl capitalize">
          Frequently Ask Questions
        </h2>
      </FadeUp>
      <div className="flex flex-col md:flex-row gap-5 md:gap-8 max-w-[1280px] mx-auto">
        <div className="flex flex-col gap-5 flex-1">
          {left.map((item, i) => (
            <FaqItem key={i} item={item} index={i} />
          ))}
        </div>
        <div className="flex flex-col gap-5 flex-1 md:pt-8">
          {right.map((item, i) => (
            <FaqItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Newsletter ── */
/* ── Partners Carousel ── */
const partnerLogos = [
  { src: imgQBUnited,      alt: "QB United",          height: 44 },
  { src: imgHopeSquad,     alt: "Hope Squad",          height: 44 },
  { src: imgCookCenter,    alt: "Cook Center for Human Connection", height: 48 },
  { src: imgStaffGuidance, alt: "Staff Guidance", height: 44 },
{ src: imgElizaChat, alt: "Eliza Chat", height: 40 },
];

function PartnersCarousel() {
  const doubled = [...partnerLogos, ...partnerLogos, ...partnerLogos];

  return (
    <section className="bg-[#f9f4f1] py-24 overflow-hidden">
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
        .marquee-track {
          animation: marquee 30s linear infinite;
          will-change: transform;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <FadeUp className="text-center mb-10">
        <h3 className="font-['Poppins',sans-serif] font-semibold text-[#59797d] text-2xl">
          Our passionate partners
        </h3>
      </FadeUp>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #f9f4f1, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #f9f4f1, transparent)" }} />

        <div className="flex items-center marquee-track" style={{ width: "max-content" }}>
          {doubled.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center flex-shrink-0 px-10"
              style={{ isolation: "auto" }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                style={{ height: logo.height, width: "auto", objectFit: "contain", mixBlendMode: "multiply" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  return (
    <section className="bg-[#90b3b6] py-16 px-6 md:px-10 lg:px-14 flex justify-center">
      <FadeUp className="flex flex-col md:flex-row gap-8 items-center max-w-[1280px] w-full">
        <motion.div
          className="w-full md:w-[480px] h-56 rounded-2xl overflow-hidden relative md:flex-shrink-0"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.35 }}
        >
          <img src={imgRectangle327} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <img src={imgRectangle328} alt="" className="absolute inset-0 w-full h-full object-cover" />
        </motion.div>
        <div className="flex flex-col gap-5">
          <h2 className="font-['Poppins',sans-serif] font-bold text-[#1b1139] text-4xl md:text-5xl leading-tight">Join Us!</h2>
          <p className="font-['Poppins',sans-serif] text-[#1b1139] text-sm leading-relaxed max-w-sm">
            Subscribe to our weekly newsletter and be a part of our journey to self discovery and love.
          </p>
          {subscribed ? (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-['Poppins',sans-serif] text-[#1b1139] font-semibold text-base"
            >
              ✓ Thanks for subscribing!
            </motion.p>
          ) : (
            <div className="flex border border-[#f4f6f9] rounded-2xl overflow-hidden bg-[#f9f9f9] max-w-md">
              <input
                className="flex-1 min-w-0 px-5 py-3.5 bg-transparent font-['Poppins',sans-serif] text-sm text-gray-700 outline-none placeholder:text-[#737373]"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <motion.button
                className="bg-[#59797d] text-white font-['Poppins',sans-serif] text-sm px-5 md:px-7 py-3.5 whitespace-nowrap"
                whileHover={{ backgroundColor: "#4a6b6f" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => email && setSubscribed(true)}
              >
                Subscribe
              </motion.button>
            </div>
          )}
        </div>
      </FadeUp>
    </section>
  );
}

/* ── Footer logo ── */
function FooterLogo() {
  return (
    <div className="h-[28px] relative w-[117px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 117.188 28.4089">
        <g>
          <path d={svgPaths.p23de9500} fill="#A1BFB9" />
          <path d={svgPaths.p2d0057f0} fill="#58595B" />
          <path d={svgPaths.p53a0dc0} fill="#58595B" />
          <path d={svgPaths.p1db09d00} fill="#58595B" />
          <path d={svgPaths.p30f51e80} fill="#58595B" />
          <path d={svgPaths.p12d56200} fill="#58595B" />
          <path d={svgPaths.p163dd400} fill="#58595B" />
          <path d={svgPaths.p2daeb230} fill="#58595B" />
          <path d={svgPaths.p26c12980} fill="#58595B" />
          <path d={svgPaths.pb673200} fill="#58595B" />
          <path d={svgPaths.p19cdd800} fill="#58595B" />
          <path d={svgPaths.pbf01600} fill="#58595B" />
          <path d={svgPaths.p310e1000} fill="#58595B" />
          <path d={svgPaths.p321a3a00} fill="#58595B" />
          <path d={svgPaths.p3b105f00} fill="#8A9695" />
          <path d={svgPaths.p29bbe980} fill="#58595B" />
          <path d={svgPaths.p11bd1ec0} fill="#58595B" />
          <path d={svgPaths.p33948680} fill="#58595B" />
          <path d={svgPaths.p108a7c00} fill="#58595B" />
          <path d={svgPaths.pbb23600} fill="#58595B" />
        </g>
      </svg>
    </div>
  );
}

const FOOTER_LINK_HREFS: Record<string, string> = {
  "Contact Us": "/contact-us",
  "Cookie Policy": "/cookies-policy",
  "Terms of Use": "/terms-of-use",
  "Consent Documents": "/consent-documents",
  "Cook Center for Human Connection": "https://cookcenter.org/",
  "Mental Health Series": "/mental-health-series",
  "Parent Coaching": "/parent-coaching",
  "On-Demand Courses": "/on-demand-courses",
  "Ask a Therapist": "/ask-a-therapist",
};

const FOOTER_EXTERNAL_LINKS = new Set(["Cook Center for Human Connection"]);

function Footer() {
  const companyLinks = ["Contact Us", "Cookie Policy", "Terms of Use", "Consent Documents", "Cook Center for Human Connection"];
  const resourceLinks = ["Mental Health Series", "Parent Coaching", "On-Demand Courses", "Ask a Therapist"];

  return (
    <footer className="bg-[#f9f4f1] px-6 md:px-10 lg:px-14 py-8 print:hidden">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row gap-10 md:gap-20 items-start mb-10">
        <div className="flex flex-col gap-6 md:gap-40 w-full md:w-[467px] md:shrink-0">
          <FooterLogo />
          <div className="flex gap-3 items-center">
            <img src={imgImage5} alt="Google Play" className="h-6 object-contain" />
            <img src={imgImage6} alt="App Store" className="h-6 object-contain" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row flex-1 gap-8 sm:gap-16 md:justify-center">
          <div className="flex flex-col gap-3">
            <p className="font-['Poppins',sans-serif] font-semibold text-[#58595b] text-sm">Our Company</p>
            {companyLinks.map((l) => (
             <a
                key={l}
                href={FOOTER_LINK_HREFS[l] ?? "#"}
                target={FOOTER_EXTERNAL_LINKS.has(l) ? "_blank" : undefined}
                rel={FOOTER_EXTERNAL_LINKS.has(l) ? "noopener noreferrer" : undefined}
                className="font-['Poppins',sans-serif] text-[#58595b] text-xs leading-relaxed hover:text-[#59797d]"
              >
                {l}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-['Poppins',sans-serif] font-semibold text-[#58595b] text-sm">Mental Health Resources</p>
            {resourceLinks.map((l) => (
              <a
                key={l}
                href={FOOTER_LINK_HREFS[l] ?? "#"}
                className="font-['Poppins',sans-serif] text-[#58595b] text-xs leading-relaxed hover:text-[#59797d] transition-colors py-1"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#a1bfb9] h-[1px] mb-6 opacity-60" />
      <div className="flex flex-col-reverse items-start gap-4 sm:flex-row sm:items-center sm:justify-between max-w-[1280px] mx-auto">
        <div className="flex gap-3">
          {/* Social icons */}
          {[
            { d: svgPaths.p327f8b00, vb: "0 0 17.9509 17.9509" },
          ].map((_, i) => (
            <motion.div key={i} whileHover={{ scale: 1.15, y: -2 }} className="w-5 h-5 cursor-pointer">
              <svg fill="none" viewBox="0 0 17.9509 17.9509" className="w-full h-full">
                <path d={svgPaths.p327f8b00} fill="#1c3243" />
              </svg>
            </motion.div>
          ))}
          <motion.div whileHover={{ scale: 1.15, y: -2 }} className="w-5 h-5 cursor-pointer">
            <svg fill="none" viewBox="0 0 16.1558 16.1558" className="w-full h-full">
              <path clipRule="evenodd" d={svgPaths.p35d8fa00} fill="#1c3243" fillRule="evenodd" />
              <path d={svgPaths.p3238c200} fill="#1c3243" />
              <path clipRule="evenodd" d={svgPaths.p20c8c700} fill="#1c3243" fillRule="evenodd" />
            </svg>
          </motion.div>
          <motion.div whileHover={{ scale: 1.15, y: -2 }} className="w-5 h-5 cursor-pointer">
            <svg fill="none" viewBox="0 0 17.9509 12.5817" className="w-full h-full">
              <path clipRule="evenodd" d={svgPaths.p3c318700} fill="#1c3243" fillRule="evenodd" />
            </svg>
          </motion.div>
          <motion.div whileHover={{ scale: 1.15, y: -2 }} className="w-5 h-5 cursor-pointer">
            <svg fill="none" viewBox="0 0 16.1558 16.1558" className="w-full h-full">
              <path d={svgPaths.p397a0780} fill="#1c3243" />
            </svg>
          </motion.div>
        </div>
        <p className="font-['Poppins',sans-serif] text-[#1c3243] text-sm leading-relaxed sm:whitespace-nowrap">
          © 2026 ParentGuidance.org. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

/* ── Home page ── */
function HomePage() {
  return (
    <div className="bg-[#f9f4f1] min-h-screen">
      <Hero />
      <ResourceSection />
      <WhySection />
      <FaqSection />
      <PartnersCarousel />
      <NewsletterSection />
    </div>
  );
}

/* ── Shared layout ── */

function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "home-v1", Component: HomePageV1 },
      { path: "home-v2", Component: HomePageV2 },
      { path: "mental-health-series", Component: MentalHealthSeriesPage },
      { path: "mental-health-series/events", Component: MentalHealthEventsPage },
      { path: "mental-health-series/:slug", Component: MentalHealthTopicPage },
      { path: "parent-coaching", Component: ParentCoachingPage },
      { path: "on-demand-courses", Component: OnDemandCoursesPage },
      { path: "ask-a-therapist", Component: AskATherapistPage },
      { path: "get-help", Component: GetHelpPage },
      { path: "cookies-policy", Component: CookiesPolicyPage },
      { path: "terms-of-use", Component: TermsOfUsePage },
      { path: "consent-documents", Component: ConsentDocumentsPage },
      { path: "contact-us", Component: ContactUsPage },
      { path: "courses/free-yourself-from-limiting-thoughts", Component: CourseDetailPage },
      { path: "courses/free-yourself-from-limiting-thoughts/lesson/:lessonId", Component: LessonPage },
      { path: "ask-a-therapist/:questionId", Component: QuestionDetailPage },
      { path: "courses/milestones-to-progress", Component: MilestonesToProgressPage },
      { path: "courses/milestones-to-progress/lesson/:lessonId", Component: MilestonesLessonPage },
    ],
  },
]);

export default function App() {
  // reducedMotion="user": si el sistema pide reducir movimiento, motion desactiva
  // desplazamientos y escalas (las transiciones de opacidad se mantienen).
  return (
    <MotionConfig reducedMotion="user">
      <RouterProvider router={router} />
    </MotionConfig>
  );
}
