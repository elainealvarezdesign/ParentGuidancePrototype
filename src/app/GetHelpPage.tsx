import { useMemo, useState } from "react";
import { Button, ButtonAnchor } from "./components/Button";
import { motion } from "motion/react";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Globe2,
  LockKeyhole,
  MessageCircle,
  Phone,
  Search,
  ShieldCheck,
  Signpost,
  X,
} from "./components/icons";
import getHelpHero from "@/imports/get-help-hero.png";
import logo988 from "@/imports/get-help-logos/988-suicide-crisis-lifeline.png";
import logoCrisisText from "@/imports/get-help-logos/Crisis-Text_line.jpeg";
import logoMentalHealth from "@/imports/get-help-logos/mentalhealth.gov_1.png";
import logoNIH from "@/imports/get-help-logos/NIH-Logo.png";
import logoTrevor from "@/imports/get-help-logos/The_Trevor_Project_logo.svg.webp";
import logoVeterans from "@/imports/get-help-logos/veterans-crisis-line.webp";
import UnifiedCard from "./components/UnifiedCard";
type ResourceCategory =
  | "All"
  | "Youth & LGBTQ+"
  | "Veterans"
  | "Suicide prevention"
  | "Family support"
  | "Information";

type Resource = {
  name: string;
  logo: string;
  description: string;
  category: Exclude<ResourceCategory, "All">;
  availability: string;
  href: string;
};

const CATEGORIES: ResourceCategory[] = [
  "All",
  "Youth & LGBTQ+",
  "Veterans",
  "Suicide prevention",
  "Family support",
  "Information",
];

const RESOURCES: Resource[] = [
  {
    name: "The Trevor Project",
    logo: logoTrevor,
    description:
      "Free, confidential crisis support and suicide prevention services for LGBTQ+ young people.",
    category: "Youth & LGBTQ+",
    availability: "Available 24/7",
    href: "https://www.thetrevorproject.org/get-help/",
  
  },
  {
    name: "Veterans Crisis Line",
    logo: logoVeterans,
    description:
      "Confidential support for Veterans, service members, and the people who care about them.",
    category: "Veterans",
    availability: "Available 24/7",
    href: "https://www.veteranscrisisline.net/",
  },
  {
    name: "National Institute of Mental Health",
    logo: logoNIH,
    description:
      "Research-based information about mental health conditions, treatment, and suicide prevention.",
    category: "Information",
    availability: "Information resource",
    href: "https://www.nimh.nih.gov/health/topics/suicide-prevention",
  },
  {
    name: "MentalHealth.gov",
    logo: logoMentalHealth,
    description:
      "Trusted information about mental health, warning signs, myths, facts, and ways to get help.",
    category: "Family support",
    availability: "Information resource",
    href: "https://www.mentalhealth.gov/",
  },
  {
    name: "988 Suicide & Crisis Lifeline",
    logo: logo988,
    description:
      "Free and confidential emotional support for people in suicidal crisis or emotional distress.",
    category: "Suicide prevention",
    availability: "Available 24/7",
    href: "https://988lifeline.org/",
  },
  {
    name: "Crisis Text Line",
    logo: logoCrisisText,
    description:
      "Free, confidential text-based crisis support from a trained volunteer Crisis Counselor.",
    category: "Suicide prevention",
    availability: "Available 24/7",
    href: "https://www.crisistextline.org/",
  },
];

function ResourceCard({
  resource,
  index,
}: {
  resource: Resource;
  index: number;
}) {
  return (
    <motion.div
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      className="h-full"
    >
      <UnifiedCard
        image={resource.logo}
        imageAlt={`${resource.name} logo`}
        imageFit="contain"
        imageSize={
          resource.name === "The Trevor Project" ||
          resource.name === "Veterans Crisis Line"
            ? "small"
            : "default"
        }
        badge={resource.category}
        title={resource.name}
        description={resource.description}
        metadata={resource.availability}
        buttonLabel="Get help"
        href={resource.href}
      />
    </motion.div>
  );
}
export default function GetHelpPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<ResourceCategory>("All");

  const filteredResources = useMemo(() => {
    const query = search.trim().toLowerCase();
    return RESOURCES.filter((resource) => {
      const matchesCategory =
        activeCategory === "All" || resource.category === activeCategory;
      const matchesSearch =
        !query ||
        resource.name.toLowerCase().includes(query) ||
        resource.description.toLowerCase().includes(query) ||
        resource.category.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <main className="pt-14 bg-pg-cream min-h-screen">
      {/* Hero */}
      <section className="overflow-hidden bg-pg-cream">
        <div className="max-w-pg-page mx-auto px-6 md:px-10 lg:px-14 py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
            <motion.div
              className="max-w-[540px]"
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <p className="text-pg-teal-dark text-xs font-semibold tracking-[0.16em] uppercase mb-5">
                Get Help
              </p>
              <h1 className="text-pg-navy font-bold text-[28px] md:text-[40px] leading-[1.15]">
                Find the right support, right when you need it.
              </h1>
              <p className="text-pg-slate text-base leading-relaxed mt-6 max-w-[500px]">
                Explore trusted crisis lines and mental health resources for you or someone you care about.
              </p>
              <div className="mt-7 flex items-start gap-3 rounded-pg-lg bg-white/70 border border-pg-cream-dark px-4 py-4 max-w-[500px]">
                <AlertCircle className="text-pg-navy shrink-0 mt-0.5" size={21} />
                <p className="text-pg-navy text-sm leading-relaxed">
                  If you or someone you know is in immediate danger, <strong>call 911.</strong>
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative w-full max-w-[570px] mx-auto lg:mx-0 lg:ml-auto pb-9 pr-7 md:pb-12 md:pr-10"
              initial={false}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              <div className="absolute right-0 bottom-0 w-[66%] h-[78%] rounded-pg-xl bg-pg-sage" />
              <img
                src={getHelpHero}
                alt="A parent calmly talking on the phone in a comfortable home"
                className="relative z-10 w-full aspect-[16/10] object-cover rounded-pg-xl shadow-pg-card"
              />
            </motion.div>
          </div>
        </div>
      </section>

     {/* Priority support */}
<section className="bg-pg-cream px-8 md:px-14 lg:px-14 pb-14">
  <motion.div
  className="max-w-pg-page mx-auto bg-pg-navy rounded-pg-md px-8 md:px-16 py-10 md:py-12"
    initial={false}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
  >
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
      <img
        src={logo988}
        alt="988 Suicide and Crisis Lifeline"
        className="w-[128px] h-[128px] md:w-[144px] md:h-[144px] object-contain shrink-0"
      />

      <div className="text-center md:text-left">
        <h2 className="font-bold text-white text-[28px] md:text-[40px] leading-tight">
          Need Help Now?
        </h2>

        <p className="text-white/85 text-base mt-2">
          Free, Confidential Support is Available 24/7
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-3 mt-5">
          <ButtonAnchor href="tel:988" variant="inverse" size="l">
            <Phone size={16} aria-hidden="true" />
            Call 988
          </ButtonAnchor>

          <ButtonAnchor href="sms:988" variant="inverse" size="l">
            <MessageCircle size={16} aria-hidden="true" />
            Text 988
          </ButtonAnchor>

          <ButtonAnchor href="https://988lifeline.org/" target="_blank" rel="noopener noreferrer" variant="inverse-secondary" size="l">
            <Globe2 size={16} aria-hidden="true" />
            Visit Website
            <span className="sr-only"> (opens in a new tab)</span>
          </ButtonAnchor>
        </div>
      </div>
    </div>
  </motion.div>
</section>

      <section className="bg-pg-tint-soft px-6 md:px-10 lg:px-14 py-16">
        <div className="max-w-pg-page mx-auto">
          <div className="text-center max-w-pg-reading mx-auto">
            <p className="text-pg-teal-dark text-xs font-semibold tracking-[0.14em] uppercase">
              Trusted support
            </p>
            <h2 className="font-bold text-pg-navy text-[28px] md:text-[40px] mt-3">
              Browse support resources
            </h2>
          </div>

          <div className="mt-8 max-w-[900px] mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-pg-teal" size={18} />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search resources..."
                className="w-full bg-white border border-pg-line rounded-pg-lg pl-12 pr-12 py-4 text-pg-navy text-sm outline-none focus:ring-2 focus:ring-pg-sage/40"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-pg-teal hover:text-pg-navy"
                  aria-label="Clear search"
                >
                  <X size={18} />
                </button>
              )}
            </div>
          </div>

          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((category) => {
              const active = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-4 py-2 text-xs font-medium transition-colors ${
                    active
                      ? "bg-pg-navy text-white"
                      : "bg-white border border-pg-line text-pg-slate hover:bg-pg-tint"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-9 max-w-pg-content mx-auto">
              {filteredResources.map((resource, index) => (
                <ResourceCard key={resource.name} resource={resource} index={index} />
              ))}
            </div>
          ) : (
            <div className="mt-10 bg-white rounded-pg-xl border border-pg-cream-dark p-10 text-center">
              <p className="font-semibold text-pg-navy">
                No resources match your search.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
                className="mt-4 text-pg-teal text-sm font-semibold"
              >
                Clear filters
              </button>
            </div>
          )}

          <motion.div
            className="mt-12 rounded-pg-xl bg-pg-sage px-7 md:px-12 py-9 flex flex-col md:flex-row items-center gap-8 max-w-pg-content mx-auto"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <div className="w-24 h-24 rounded-full bg-white/70 flex items-center justify-center shrink-0">
              <Signpost size={46} className="text-pg-teal-dark" aria-hidden="true" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-bold text-pg-navy text-2xl">
Not sure which resource  {" "}
<span className="whitespace-nowrap">is right for you?</span>              </h2>
              <p className="text-pg-navy text-sm md:text-base mt-2">
                Answer a few simple questions to find the best place to start.
              </p>
            </div>
            <Button variant="inverse" className="shrink-0">
              Help me choose <ArrowRight size={17} />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-white border-y border-pg-cream-dark px-6 md:px-10 lg:px-14 py-8">
        <div className="max-w-pg-content mx-auto grid grid-cols-1 md:grid-cols-3 gap-7">
          {[
            {
              icon: ShieldCheck,
              title: "Trusted national resources",
              copy: "Reliable organizations you can trust.",
            },
            {
              icon: LockKeyhole,
              title: "Confidential options",
              copy: "Your privacy and safety come first.",
            },
            {
              icon: CheckCircle2,
              title: "Available 24/7",
              copy: "Support whenever you need it.",
            },
          ].map(({ icon: Icon, title, copy }) => (
            <div key={title} className="flex items-center gap-4 md:justify-center">
              <Icon size={34} className="text-pg-teal shrink-0" />
              <div>
                <p className="text-pg-navy text-sm font-semibold">
                  {title}
                </p>
                <p className="text-pg-slate text-xs mt-1">
                  {copy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
