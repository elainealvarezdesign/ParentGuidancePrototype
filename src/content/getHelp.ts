import type { SplitHeroContent } from "@/sections/SplitHero";
import type { CrisisLineBannerContent } from "@/sections/CrisisLineBanner";
import type { IconCtaBannerContent } from "@/sections/IconCtaBanner";
import type { TrustStripContent } from "@/sections/TrustStrip";
import imgHero from "@/imports/get-help-hero.png";
import logo988 from "@/imports/get-help-logos/988-suicide-crisis-lifeline.png";
import logoCrisisText from "@/imports/get-help-logos/Crisis-Text_line.jpeg";
import logoMentalHealth from "@/imports/get-help-logos/mentalhealth.gov_1.png";
import logoNIH from "@/imports/get-help-logos/NIH-Logo.png";
import logoTrevor from "@/imports/get-help-logos/The_Trevor_Project_logo.svg.webp";
import logoVeterans from "@/imports/get-help-logos/veterans-crisis-line.svg";

/* Get Help content ("/get-help"). Recipe: docs/system/pages/get-help.md.
 * Crisis copy must be reviewed by the clinical team before any change. */

export const getHelpHero: SplitHeroContent = {
  eyebrow: "Get Help",
  title: { text: "Find the right support, right when you need it." },
  body: "Explore trusted crisis lines and mental health resources for you or someone you care about.",
  image: { src: imgHero, alt: "A parent calmly talking on the phone in a comfortable home" },
  shape: "wide",
};

export const crisisLine: CrisisLineBannerContent = {
  logo: { src: logo988, alt: "988 Suicide and Crisis Lifeline" },
  title: "Need Help Now?",
  body: "Free, Confidential Support is Available 24/7",
  number: "988",
  website: "https://988lifeline.org/",
};

export const resourceCategories = [
  "All",
  "Youth & LGBTQ+",
  "Veterans",
  "Suicide prevention",
  "Family support",
  "Information",
] as const;

export type SupportResource = {
  name: string;
  /** Organization logo; shown whole on white. */
  logo: string;
  /** One sentence, up to ~110 characters. */
  description: string;
  category: Exclude<(typeof resourceCategories)[number], "All">;
  /** "Available 24/7" or "Information resource". */
  availability: string;
  /** External site; opens in a new tab. */
  href: string;
  /** Square or tall logos need more padding to look the same size. */
  logoPadding?: "default" | "large";
};

export const resourceDirectory = {
  eyebrow: "Trusted support",
  title: "Browse support resources",
  searchLabel: "Search resources",
};

export const supportResources: SupportResource[] = [
  {
    name: "The Trevor Project",
    logo: logoTrevor,
    description: "Free, confidential crisis support and suicide prevention services for LGBTQ+ young people.",
    category: "Youth & LGBTQ+",
    availability: "Available 24/7",
    href: "https://www.thetrevorproject.org/get-help/",
    logoPadding: "large",
  },
  {
    name: "Veterans Crisis Line",
    logo: logoVeterans,
    description: "Confidential support for Veterans, service members, and the people who care about them.",
    category: "Veterans",
    availability: "Available 24/7",
    href: "https://www.veteranscrisisline.net/",
  },
  {
    name: "National Institute of Mental Health",
    logo: logoNIH,
    description: "Research-based information about mental health conditions, treatment, and suicide prevention.",
    category: "Information",
    availability: "Information resource",
    href: "https://www.nimh.nih.gov/health/topics/suicide-prevention",
  },
  {
    name: "MentalHealth.gov",
    logo: logoMentalHealth,
    description: "Trusted information about mental health, warning signs, myths, facts, and ways to get help.",
    category: "Family support",
    availability: "Information resource",
    href: "https://www.mentalhealth.gov/",
  },
  {
    name: "988 Suicide & Crisis Lifeline",
    logo: logo988,
    description: "Free and confidential emotional support for people in suicidal crisis or emotional distress.",
    category: "Suicide prevention",
    availability: "Available 24/7",
    href: "https://988lifeline.org/",
  },
  {
    name: "Crisis Text Line",
    logo: logoCrisisText,
    description: "Free, confidential text-based crisis support from a trained volunteer Crisis Counselor.",
    category: "Suicide prevention",
    availability: "Available 24/7",
    href: "https://www.crisistextline.org/",
  },
];

export const helpChooser: IconCtaBannerContent = {
  title: "Not sure which resource is right for you?",
  body: "Answer a few simple questions to find the best place to start.",
  // Until a questionnaire exists, the answers to common questions live in the home FAQ.
  cta: { label: "Help me choose", to: "/#faq" },
};

export const getHelpTrust: TrustStripContent = {
  items: [
    { icon: "shield", title: "Trusted national resources", body: "Reliable organizations you can trust." },
    { icon: "lock", title: "Confidential options", body: "Your privacy and safety come first." },
    { icon: "check", title: "Available 24/7", body: "Support whenever you need it." },
  ],
};
