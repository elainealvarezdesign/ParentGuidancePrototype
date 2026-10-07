/* Cookies Policy tables ("/cookies-policy"). Keep in sync with the cookie banner / consent tool in
 * production; the prose of the policy lives in the page. */

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
