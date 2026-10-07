import type { Cta, Media, Title } from "./types";
import imgSeries from "@/imports/HomePagePgV2/b75247b5542e76cdf5c675041b7a6e465e33ef23.png";
import imgCoaching from "@/imports/HomePagePgV2/debf8187f5722e2bc3e9c2869fc7308cfe71f1fc.png";
import imgCourses from "@/imports/HomePagePgV2/2efa62174bfcf85665907842ba36899e44e02fe9.png";
import imgTherapist from "@/imports/HomePagePgV2/277938b24e46ee2598e5638b70da775e75a5d182.png";
import imgFeatureBase from "@/imports/HomePagePgV2/ece298d0ec2c16f10310d45724b276a6035cb503.png";
import imgTrusted from "@/imports/HomePagePgV2/fb9567d2a70815a5c0307df9118cb49c401b72a3.png";
import imgExpert from "@/imports/HomePagePgV2/40e0ae4f954f871b7087c4354f1c8d0bf5926225.png";
import imgSupport from "@/imports/HomePagePgV2/dabd6f5341bd78f44bfe8771b4f0e2a23c9565f1.png";
import imgNewsletterBase from "@/imports/HomePagePgV2/0400e3bb3f86c98e80e3ad89c6a42fc531e57c9c.png";
import imgNewsletter from "@/imports/HomePagePgV2/bd9781c81c132f9b40ead46dd75d71ac773882a9.png";
import imgStaffGuidance from "@/imports/StaffGuidance.png";
import imgElizaChat from "@/imports/elizachat_logo_horizontal.svg";
import imgQBUnited from "@/imports/QB_united-1.png";
import imgHopeSquad from "@/imports/HopeSquad-1.png";
import imgCookCenter from "@/imports/CCHC_Logo-greyscale-1.png";
import type { HomeHeroContent } from "@/sections/HomeHero";
import type { ResourceTilesContent } from "@/sections/ResourceTiles";
import type { FeatureRowsContent } from "@/sections/FeatureRows";
import type { FaqContent } from "@/sections/FaqSection";
import type { PartnersContent } from "@/sections/PartnersStrip";
import type { NewsletterContent } from "@/sections/NewsletterSection";

/* Home page content (route "/"). The page is: HomeHero → ResourceTiles → FeatureRows → FaqSection →
 * PartnersStrip → NewsletterSection. See docs/system/pages/home.md. */

const title = (text: string, highlight?: string, after?: string): Title => ({ text, highlight, after });
const decorative = (src: string): Media => ({ src, alt: "" });

export const homeHero: HomeHeroContent = {
  title: title("Discover ", "Resources", " That Can Help"),
  intro:
    "Find trusted guidance, practical tips, and expert resources to help you navigate everyday parenting challenges.",
  search: { label: "Search resources", placeholder: "Anxiety in Children", buttonLabel: "Search" },
};

export const homeResources: ResourceTilesContent = {
  tiles: [
    {
      title: "Mental Health\nSeries",
      description: "Dive into a wealth of knowledge tailored for parents",
      image: decorative(imgSeries),
      dim: true,
      to: "/mental-health-series",
    },
    {
      title: "Coaching for\nLasting changes",
      description: "Dive into a wealth of knowledge tailored for parents",
      image: decorative(imgCoaching),
      to: "/parent-coaching",
    },
    {
      title: "On-demand\nCourses",
      description: "Dive into a wealth of knowledge tailored for parents",
      image: decorative(imgCourses),
      dim: true,
      to: "/on-demand-courses",
    },
    {
      title: "Ask a\nTherapist",
      description: "Get answers to your questions from licensed therapists",
      image: decorative(imgTherapist),
      to: "/ask-a-therapist",
    },
  ],
  more: { label: "view more", to: "/mental-health-series" } satisfies Cta,
};

export const homeWhy: FeatureRowsContent = {
  eyebrow: "Why",
  title: "Built on real clinical experience",
  intro:
    "We believe every parent deserves access to expert guidance. Our resources are built on real clinical experience and designed with your family in mind.",
  imageBase: decorative(imgFeatureBase),
  rows: [
    {
      title: "Trusted by Parents",
      description: "Developed by leading mental health professionals with years of clinical practice",
      image: decorative(imgTrusted),
    },
    {
      title: "Expert Guidance",
      description: "Access support whenever you need it, day or night, at your own pace",
      image: decorative(imgExpert),
    },
    {
      title: "Real Support for You",
      description: "Get answers when your child needs them most",
      image: decorative(imgSupport),
    },
  ],
};

export const homeFaq: FaqContent = {
  title: "Frequently Asked Questions",
  items: [
    {
      question: "How long is this program?",
      answer:
        "Mental health support doesn't have a timeline and neither does our program. While the initial Parenting with Purpose roadmap is expected to take around 4 weeks to complete, we offer ongoing support as long as you need it.",
      defaultOpen: true,
    },
    {
      question: "What can I expect from a meeting with my coach?",
      answer:
        "Each coaching session is personalized to your family's unique needs and goals. Your coach will listen actively, offer evidence-based strategies, and help you develop an action plan that fits your lifestyle.",
    },
    {
      question: "How often can I message my coach?",
      answer:
        "You can message your coach at any time through our platform. Most coaches respond within a few hours during business hours, and within 24 hours at other times.",
    },
    {
      question: "How often will I meet with my coach?",
      answer:
        "Meeting frequency is flexible and based on your needs. Most families start with weekly sessions and adjust from there.",
    },
    {
      question: "What happens in a typical session?",
      answer: "Sessions typically include a check-in, goal review, new strategies, and a plan for the week ahead.",
    },
    { question: "Is messaging limited?", answer: "Messaging is unlimited — reach out whenever something comes up." },
    {
      question: "How long until we deliver your first blog post?",
      answer:
        "Our team reviews your intake information and typically delivers the first resource within 48 hours of enrollment.",
    },
  ],
};

export const homePartners: PartnersContent = {
  title: "Our passionate partners",
  logos: [
    { src: imgQBUnited, alt: "QB United", height: 44 },
    { src: imgHopeSquad, alt: "Hope Squad", height: 44 },
    { src: imgCookCenter, alt: "Cook Center for Human Connection", height: 48 },
    { src: imgStaffGuidance, alt: "Staff Guidance", height: 44 },
    { src: imgElizaChat, alt: "Eliza Chat", height: 40 },
  ],
};

export const homeNewsletter: NewsletterContent = {
  title: "Join Us!",
  body: "Subscribe to our weekly newsletter and be a part of our journey to self discovery and love.",
  image: decorative(imgNewsletter),
  imageBase: decorative(imgNewsletterBase),
  successMessage: "Thanks for subscribing!",
};
