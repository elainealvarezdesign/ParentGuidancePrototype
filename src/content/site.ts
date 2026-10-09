/* Site-wide content: navigation, footer and social links. Edit here; the layout reads it.
 * In production this would come from the CMS (global settings). */

/** Used in every browser tab title: "<page h1> | Parent Guidance". */
export const siteName = "Parent Guidance";

export type NavLink = { label: string; to: string };
export type FooterLink = { label: string; to?: string; href?: string };
export type SocialNetwork = "facebook" | "instagram" | "youtube" | "vimeo" | "linkedin";

export const mainNav: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "Mental Health Series", to: "/mental-health-series" },
  { label: "Parent Coaching", to: "/parent-coaching" },
  { label: "On-Demand Courses", to: "/on-demand-courses" },
  { label: "Ask A Therapist", to: "/ask-a-therapist" },
  { label: "Get Help", to: "/get-help" },
];

/** UI only for now: changes the label, no translations yet (see docs/handoff/05-open-items.md). */
export const languages = ["English", "Spanish", "Arabic", "Chinese", "Vietnamese", "Portuguese"] as const;

export const footerColumns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Our Company",
    links: [
      { label: "Contact Us", to: "/contact-us" },
      { label: "Cookie Policy", to: "/cookies-policy" },
      { label: "Terms of Use", to: "/terms-of-use" },
      { label: "Consent Documents", to: "/consent-documents" },
      { label: "Cook Center for Human Connection", href: "https://cookcenter.org/" },
    ],
  },
  {
    title: "Mental Health Resources",
    links: [
      { label: "Mental Health Series", to: "/mental-health-series" },
      { label: "Parent Coaching", to: "/parent-coaching" },
      { label: "On-Demand Courses", to: "/on-demand-courses" },
      { label: "Ask a Therapist", to: "/ask-a-therapist" },
    ],
  },
];

/** Missing URLs are an open content item; those icons render without a link until filled in. */
export const socialLinks: { network: SocialNetwork; label: string; href?: string }[] = [
  { network: "facebook", label: "Facebook", href: "https://www.facebook.com/parentguidance.org" },
  { network: "instagram", label: "Instagram" },
  { network: "youtube", label: "YouTube" },
  { network: "vimeo", label: "Vimeo", href: "https://vimeo.com/user174574461" },
  { network: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/parent-guidance/home/" },
];

export const copyright = "© 2026 ParentGuidance.org. All rights reserved.";

/** Shown under every form's success message while the forms are simulated (no backend yet). Remove it once the
 * forms send real data (docs/handoff/05-open-items.md). */
export const prototypeNotice = "Prototype preview: this form isn't connected yet, so nothing was sent.";
