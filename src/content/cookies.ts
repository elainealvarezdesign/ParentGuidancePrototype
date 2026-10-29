/* Cookies Policy ("/cookies-policy"): the policy text (cookiesPage) and the cookie tables. Keep the tables in
 * sync with the cookie banner / consent tool in production. Recipe: docs/system/pages/legal.md. */

export type CookieRow = {
  name: string;
  provider: string;
  /** One sentence: what it does (necessary and functional cookies). */
  description?: string;

  duration: string;
};

export const necessaryCookies: CookieRow[] = [
  {
    name: "elementor",
    provider: "Parent Guidance",
    description: "Allows the website owner to update and modify website content in real time.",
    duration: "Never expires",
  },
  {
    name: "cookieyes-consent",
    provider: "Parent Guidance",
    description:
      "Remembers consent preferences so they remain active during future visits. It does not collect or store personal information.",
    duration: "1 year",
  },
  {
    name: "wordpress_test_cookie",
    provider: "Parent Guidance",
    description: "Checks whether cookies are enabled in the visitor’s browser.",
    duration: "Session",
  },
  {
    name: "cf_bm",
    provider: "Vimeo",
    description: "Supports Cloudflare Bot Management and helps distinguish legitimate visitors from automated traffic.",
    duration: "1 hour",
  },
  {
    name: "_cfuvid",
    provider: "Vimeo",
    description: "Maintains consistency across user sessions to help optimize and personalize the browsing experience.",
    duration: "Session",
  },
  {
    name: "wpEmojiSettingsSupports",
    provider: "Parent Guidance",
    description: "Determines whether the visitor’s browser can display emojis correctly.",
    duration: "Session",
  },
  {
    name: "player",
    provider: "Vimeo",
    description: "Stores preferences for video player controls, including volume, stream quality and captions.",
    duration: "1 year",
  },
  {
    name: "ce_successful_csp_check",
    provider: "Parent Guidance",
    description: "Verifies that the Crazy Egg tracking script complies with the website’s content security policies.",
    duration: "Session",
  },
];
export const functionalCookies: CookieRow[] = [
  {
    name: "wp_lang",
    provider: "Parent Guidance",
    description: "Stores the user’s language setting.",
    duration: "Session",
  },
  {
    name: "tribe_browser_time_zone",
    provider: "Parent Guidance",
    description: "Stores the user’s timezone to display event dates in their local timezone.",
    duration: "Session",
  },
  {
    name: "ce_seen_surveys",
    provider: "Parent Guidance",
    description: "Stores the surveys that have already been displayed to the user.",
    duration: "1 year",
  },
  {
    name: "ce_seen_ctas",
    provider: "Parent Guidance",
    description: "Stores calls to action that have already been shown to the user.",
    duration: "1 year",
  },
  {
    name: "powerup",
    provider: "Parent Guidance",
    description: "Stores interactive mode settings for the Crazy Egg plugin.",
    duration: "1 year",
  },
];
export const analyticsCookies: CookieRow[] = [
  {
    name: "_ga",
    provider: "Parent Guidance",
    duration: "2 years",
  },
  {
    name: "_ga_*",
    provider: "Parent Guidance",
    duration: "2 years",
  },
  {
    name: "vuid",
    provider: "Vimeo",
    duration: "Session",
  },
  {
    name: "_crazyegg",
    provider: "Crazy Egg",
    duration: "5 years",
  },
  {
    name: "ce_virtual_tracker_data",
    provider: "Parent Guidance",
    duration: "Session",
  },
  {
    name: "ce_fvd",
    provider: "Parent Guidance",
    duration: "Session",
  },
];
export const performanceCookies: CookieRow[] = [
  {
    name: "cf_ob_info",
    provider: "Crazy Egg",
    duration: "1 year",
  },
  {
    name: "cf_use_ob",
    provider: "Crazy Egg",
    duration: "1 year",
  },
];

export type CookieGroup = {
  /** Table heading, e.g. "Functional cookies". */
  heading: string;
  /** Short name for the count pill and the table's accessible name, e.g. "Functional". */
  label: string;
  rows: CookieRow[];
};

export type ExternalLink = { label: string; href: string };

export const cookiesPage = {
  header: {
    eyebrow: "Legal",
    title: "Cookies Policy",
    intro: "Learn how Parent Guidance uses cookies and similar technologies to improve your experience on our website.",
  },
  /** Name of the plain-text file saved by "Download". */
  fileName: "ParentGuidance-Cookies-Policy.txt",
  lastUpdated: "Last updated: November 27, 2024",
  about: {
    heading: "About this policy",
    paragraphs: [
      "Parent Guidance uses cookies and similar tracking technologies to provide, maintain, secure and improve its website and services.",
      "These technologies help us remember preferences, identify technical issues, measure website performance and improve the overall user experience.",
      "For more information about how personal data is handled, please review our Privacy Policy.",
    ],
  },
  whatAre: {
    heading: "What are Cookies?",
    paragraphs: [
      "Cookies are small files placed on your computer, mobile device or other device when you visit a website. They can store information such as your login details, language preferences and browsing activity.",
      "You are not required to accept every cookie to visit our website. However, enabling cookies can provide a more personalized experience and may be necessary for some services to function properly.",
    ],
  },
  types: {
    heading: "Types of Cookies We Use",
    intro:
      "We use session and persistent cookies to support essential website functions, remember preferences and understand how visitors use our services.",
    cards: [
      {
        badge: "Session",
        title: "Necessary cookies",
        description: "Support essential website features, authentication and account security.",
      },
      {
        badge: "Persistent",
        title: "Functional cookies",
        description: "Remember choices such as login details, language and other preferences.",
      },
      {
        badge: "Persistent",
        title: "Analytics cookies",
        description: "Help measure website traffic, performance and how visitors interact with our services.",
      },
    ],
  },
  tables: {
    heading: "The Cookies We Use",
    groups: [
      { heading: "Necessary Cookies", label: "Necessary", rows: necessaryCookies },
      { heading: "Functional Cookies", label: "Functional", rows: functionalCookies },
      { heading: "Analytics Cookies", label: "Analytics", rows: analyticsCookies },
      { heading: "Performance Cookies", label: "Performance", rows: performanceCookies },
    ] satisfies CookieGroup[],
  },
  choices: {
    heading: "Your Choices Regarding Cookies",
    paragraphs: [
      "You can choose whether to accept or decline cookies. Most web browsers accept cookies automatically, but you can usually modify your browser settings to decline cookies if you prefer.",
      "Please note that disabling certain cookies may affect your experience on our website and prevent some features from working properly.",
    ],
    browsersIntro: "To delete or manage cookies, visit your browser's help page:",
    browsers: [
      { label: "Google Chrome", href: "https://support.google.com/accounts/answer/32050" },
      { label: "Internet Explorer", href: "http://support.microsoft.com/kb/278835" },
      {
        label: "Mozilla Firefox",
        href: "https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored",
      },
      {
        label: "Apple Safari",
        href: "https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac",
      },
    ] satisfies ExternalLink[],
    otherBrowsers: "For other browsers, please visit your browser's official support website.",
    adOptOut: {
      heading: "Advertising Opt-Out Options",
      intro:
        "If you live in the United States, Canada, the European Union or the United Kingdom, you can use the following resources to manage interest-based advertising preferences:",
      links: [
        { label: "United States", href: "https://optout.aboutads.info/" },
        { label: "Canada", href: "https://youradchoices.ca/en/tools" },
        { label: "European Union", href: "https://youronlinechoices.eu/" },
        { label: "United Kingdom", href: "https://www.youronlinechoices.com/uk/" },
      ] satisfies ExternalLink[],
    },
  },
  contact: {
    heading: "Contact Us",
    body: "If you have any questions about this Cookies Policy, you can contact us by email.",
    email: "privacy@cookcenter.org",
  },
};
