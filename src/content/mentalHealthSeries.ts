import type { RichText } from "./types";
import imgGateBase from "@/imports/HomePagePgV2/ece298d0ec2c16f10310d45724b276a6035cb503.png";
import imgGateFrame from "@/imports/HomePagePgV2/fb9567d2a70815a5c0307df9118cb49c401b72a3.png";
import imgGatePhoto from "@/imports/HomePagePgV2/40e0ae4f954f871b7087c4354f1c8d0bf5926225.png";

/* Mental Health Series content ("/mental-health-series"). Recipe: docs/system/pages/mental-health-series.md.
 * The page first asks for the school's state and district (the series is offered through districts), then
 * shows the welcome video, the resource library, the calendar and upcoming events (events: ./events.ts). */

export const usStates = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

/** Districts per state. States without a list use `defaultDistricts` (prototype placeholder). */
export const districtsByState: Record<string, string[]> = {
  Utah: [
    "Alpine School District",
    "Canyons School District",
    "Davis School District",
    "Granite School District",
    "Jordan School District",
    "Murray City School District",
    "Nebo School District",
    "Provo City School District",
    "Salt Lake City School District",
    "Weber School District",
  ],
  California: [
    "Los Angeles Unified",
    "San Diego Unified",
    "San Francisco Unified",
    "Oakland Unified",
    "Fresno Unified",
    "Sacramento City Unified",
  ],
  "New York": [
    "New York City DOE",
    "Buffalo City Schools",
    "Rochester City Schools",
    "Yonkers City Schools",
    "Syracuse City Schools",
  ],
  Texas: ["Houston ISD", "Dallas ISD", "Austin ISD", "Fort Worth ISD", "San Antonio ISD"],
};

export const defaultDistricts = [
  "Central School District",
  "North School District",
  "South School District",
  "East School District",
  "West School District",
];

export const seriesGate = {
  eyebrow: "Mental Health Series",
  title: { text: "What ", highlight: "state", after: " does your child attend school in?" },
  help: { text: "Don't see your state?", linkLabel: "Get in touch with our team.", to: "/contact-us" },
  /** Layered artwork: base and frame are decorative, the photo carries the alt text. */
  images: { base: imgGateBase, frame: imgGateFrame, photo: { src: imgGatePhoto, alt: "Parent and child" } },
};

export const seriesWelcome = {
  title: { text: "Welcome to the ", highlight: "Mental Health Series" },
  searchLabel: "Search resources and events",
  /** "Welcome to the Mental Health Series" video on Vimeo. */
  vimeoId: "1037509342",
  videoTitle: "Welcome to the Mental Health Series (video)",
};

export const resourceTypes = ["Video", "Article", "Guide", "Worksheet", "Tool"] as const;
export type ResourceType = (typeof resourceTypes)[number];

export const libraryCategories = [
  "All",
  "Anxiety",
  "Depression",
  "Parenting",
  "Teen Health",
  "Self-Care",
  "Crisis",
] as const;
export type LibraryCategory = Exclude<(typeof libraryCategories)[number], "All">;

export type SeriesResource = {
  title: string;
  /** One line, up to ~70 characters. */
  description: RichText;
  type: ResourceType;
  category: LibraryCategory;
  /** "8 min", "5 min read", "6-part series", "Printable". */
  duration: string;
  isNew?: boolean;
  /** Topic page slug. Missing → opens the sample topic (only one topic page exists so far). */
  slug?: string;
};

/** Only "Building Your Child's Confidence" has a topic page so far; the other resources open it as sample content. */
export const SAMPLE_TOPIC_SLUG = "building-your-childs-confidence";
export const topicHref = (r: SeriesResource) => `/mental-health-series/${r.slug ?? SAMPLE_TOPIC_SLUG}`;

export const seriesResources: SeriesResource[] = [
  {
    title: "ABC's of Substance Use & Vaping",
    description: "Recognize and address risk and health impact in teens",
    type: "Video",
    category: "Parenting",
    duration: "8 min",
  },
  {
    title: "Body Positivity: Nurturing Self-Image",
    description: "Promote body positivity with strategies for self-acceptance",
    type: "Article",
    category: "Anxiety",
    duration: "5 min read",
  },
  {
    title: "Building Your Child's Confidence",
    description: "Foster a healthy identity in your child with professional insights",
    type: "Video",
    category: "Self-Care",
    duration: "6-part series",
    isNew: true,
    slug: "building-your-childs-confidence",
  },
  {
    title: "Bullying - Stop the Cycle",
    description: "Identify and address bullying with expert tips and strategies",
    type: "Guide",
    category: "Depression",
    duration: "7 min read",
  },
  {
    title: "Compassionate Parenting & Self-Compassion",
    description: "Practical tools for reducing day-to-day stress as a family.",
    type: "Worksheet",
    category: "Parenting",
    duration: "Printable",
  },
  {
    title: "De-escalating Cycles of Conflicts",
    description: "Resolve conflicts using internal Family Systems",
    type: "Article",
    category: "Anxiety",
    duration: "6 min read",
  },
  {
    title: "Depression: You're Not Alone",
    description: "Understand the complexity, symptoms and early intervention",
    type: "Guide",
    category: "Parenting",
    duration: "10 min read",
  },
  {
    title: "Effects of Screen Time & Children's Mental Health",
    description: "Explore the impact on kids' mental health and set limits",
    type: "Article",
    category: "Parenting",
    duration: "8 min read",
  },
  {
    title: "Emotional Regulation - Part 1: Recognizing What's Wrong",
    description: "Guide your child in mastering emotional regulation and balance",
    type: "Video",
    category: "Teen Health",
    duration: "12 min",
    isNew: true,
  },
];
