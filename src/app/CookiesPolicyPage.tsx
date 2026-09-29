import { LegalActions, BackToTopButton, downloadTextFile } from "./legal/LegalActions";

const necessaryCookies = [
  {
    name: "elementor",
    provider: "Parent Guidance",
    description:
      "Allows the website owner to update and modify website content in real time.",
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
    description:
      "Checks whether cookies are enabled in the visitor’s browser.",
    duration: "Session",
  },
  {
    name: "cf_bm",
    provider: "Vimeo",
    description:
      "Supports Cloudflare Bot Management and helps distinguish legitimate visitors from automated traffic.",
    duration: "1 hour",
  },
  {
    name: "_cfuvid",
    provider: "Vimeo",
    description:
      "Maintains consistency across user sessions to help optimize and personalize the browsing experience.",
    duration: "Session",
  },
  {
    name: "wpEmojiSettingsSupports",
    provider: "Parent Guidance",
    description:
      "Determines whether the visitor’s browser can display emojis correctly.",
    duration: "Session",
  },
  {
    name: "player",
    provider: "Vimeo",
    description:
      "Stores preferences for video player controls, including volume, stream quality and captions.",
    duration: "1 year",
  },
  {
    name: "ce_successful_csp_check",
    provider: "Parent Guidance",
    description:
      "Verifies that the Crazy Egg tracking script complies with the website’s content security policies.",
    duration: "Session",
  },
];
const functionalCookies = [
  {
    name: "wp_lang",
    provider: "Parent Guidance",
    description: "Stores the user’s language setting.",
    duration: "Session",
  },
  {
    name: "tribe_browser_time_zone",
    provider: "Parent Guidance",
    description:
      "Stores the user’s timezone to display event dates in their local timezone.",
    duration: "Session",
  },
  {
    name: "ce_seen_surveys",
    provider: "Parent Guidance",
    description:
      "Stores the surveys that have already been displayed to the user.",
    duration: "1 year",
  },
  {
    name: "ce_seen_ctas",
    provider: "Parent Guidance",
    description:
      "Stores calls to action that have already been shown to the user.",
    duration: "1 year",
  },
  {
    name: "powerup",
    provider: "Parent Guidance",
    description:
      "Stores interactive mode settings for the Crazy Egg plugin.",
    duration: "1 year",
  },
];
const analyticsCookies = [
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
const performanceCookies = [
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
const DOCUMENT_ID = "cookies-policy-document";

function handleDownload() {
  const body = document.getElementById(DOCUMENT_ID)?.innerText ?? "";
  downloadTextFile("ParentGuidance-Cookies-Policy.txt", `COOKIES POLICY\n\n${body.trim()}\n`);
}

export default function CookiesPolicyPage() {
  return (
    <main className="min-h-screen bg-[#F9F4F1] print:bg-white">
      <section className="px-6 pb-14 pt-28 md:px-10 lg:px-14 print:p-0 print:pb-6">
        <div className="mx-auto max-w-[1100px] print:max-w-none">
          <p className="mb-3 font-['Poppins',sans-serif] text-sm font-semibold uppercase tracking-[0.14em] text-[#406064]">
            Legal
          </p>

          <h1 id="cookies-policy-title" tabIndex={-1} className="focus:outline-none font-['Poppins',sans-serif] text-4xl font-bold text-[#1C3243] md:text-5xl">
            Cookies Policy
          </h1>

          <p className="mt-4 max-w-[680px] font-['Poppins',sans-serif] text-base leading-7 text-[#435766]">
            Learn how Parent Guidance uses cookies and similar technologies to
            improve your experience on our website.
          </p>

          <LegalActions onDownload={handleDownload} />
        </div>
      </section>

  <section className="px-6 pb-20 md:px-10 lg:px-14 print:p-0">
  <div id={DOCUMENT_ID} className="mx-auto max-w-[1100px] rounded-2xl border border-[#dee8e9] bg-white p-7 shadow-[0_8px_24px_rgba(28,50,67,0.06)] md:p-10 print:max-w-none print:rounded-none print:border-0 print:p-0 print:shadow-none">
    <div className="border-b border-[#dee8e9] pb-8">
  <p className="mb-6 font-['Poppins',sans-serif] text-sm font-semibold text-[#59797D]">
    Last updated: November 27, 2024
  </p>

  <h2 className="font-['Poppins',sans-serif] text-2xl font-bold text-[#1C3243]">
    About this policy
  </h2>

  <div className="mt-4 space-y-4 font-['Poppins',sans-serif] text-base leading-7 text-[#435766]">
    <p>
      Parent Guidance uses cookies and similar tracking technologies to
      provide, maintain, secure and improve its website and services.
    </p>

    <p>
      These technologies help us remember preferences, identify technical
      issues, measure website performance and improve the overall user
      experience.
    </p>

    <p>
      For more information about how personal data is handled, please review
      our Privacy Policy.
    </p>
         </div>
      </div>
      <div className="border-b border-[#dee8e9] py-8">
  <h2 className="font-['Poppins',sans-serif] text-2xl font-bold text-[#1C3243]">
    What are Cookies?
  </h2>

  <div className="mt-4 space-y-4 font-['Poppins',sans-serif] text-base leading-7 text-[#435766]">
    <p>
      Cookies are small files placed on your computer, mobile device or other
      device when you visit a website. They can store information such as your
      login details, language preferences and browsing activity.
    </p>

    <p>
      You are not required to accept every cookie to visit our website.
      However, enabling cookies can provide a more personalized experience and
      may be necessary for some services to function properly.
    </p>
  </div>
</div>
<div className="border-b border-[#dee8e9] py-8">
  <h2 className="font-['Poppins',sans-serif] text-2xl font-bold text-[#1C3243]">
    Types of Cookies We Use
  </h2>

  <p className="mt-4 font-['Poppins',sans-serif] text-base leading-7 text-[#435766]">
    We use session and persistent cookies to support essential website
    functions, remember preferences and understand how visitors use our
    services.
  </p>

  <div className="mt-6 grid gap-4 md:grid-cols-3">
    <div className="rounded-xl border border-[#dee8e9] bg-[#F9F4F1] p-5">
      <span className="rounded-full bg-[#DCECED] px-3 py-1 font-['Poppins',sans-serif] text-xs font-semibold text-[#406064]">
        Session
      </span>

      <h3 className="mt-4 font-['Poppins',sans-serif] text-lg font-bold text-[#1C3243]">
        Necessary cookies
      </h3>

      <p className="mt-2 font-['Poppins',sans-serif] text-sm leading-6 text-[#435766]">
        Support essential website features, authentication and account
        security.
      </p>
    </div>
    

    <div className="rounded-xl border border-[#dee8e9] bg-[#F9F4F1] p-5">
      <span className="rounded-full bg-[#DCECED] px-3 py-1 font-['Poppins',sans-serif] text-xs font-semibold text-[#406064]">
        Persistent
      </span>

      <h3 className="mt-4 font-['Poppins',sans-serif] text-lg font-bold text-[#1C3243]">
        Functional cookies
      </h3>

      <p className="mt-2 font-['Poppins',sans-serif] text-sm leading-6 text-[#435766]">
        Remember choices such as login details, language and other
        preferences.
      </p>
    </div>

    <div className="rounded-xl border border-[#dee8e9] bg-[#F9F4F1] p-5">
      <span className="rounded-full bg-[#DCECED] px-3 py-1 font-['Poppins',sans-serif] text-xs font-semibold text-[#406064]">
        Persistent
      </span>

      <h3 className="mt-4 font-['Poppins',sans-serif] text-lg font-bold text-[#1C3243]">
        Analytics cookies
      </h3>

      <p className="mt-2 font-['Poppins',sans-serif] text-sm leading-6 text-[#435766]">
        Help measure website traffic, performance and how visitors interact
        with our services.
      </p>
    </div>
  </div>
</div>
<div className="border-b border-[#dee8e9] py-8">
  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
    <h2 className="font-['Poppins',sans-serif] text-2xl font-bold text-[#1C3243]">
      The Cookies We Use
    </h2>

    <span className="w-fit rounded-full bg-[#DCECED] px-3 py-1 font-['Poppins',sans-serif] text-xs font-semibold text-[#406064]">
      Necessary · {necessaryCookies.length}
    </span>
  </div>

  <div className="mt-6 overflow-hidden rounded-xl border border-[#dee8e9]">
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left">
        <thead className="bg-[#1C3243] text-white">
          <tr>
            <th className="px-5 py-4 font-['Poppins',sans-serif] text-sm font-semibold">
              Cookie
            </th>
            <th className="px-5 py-4 font-['Poppins',sans-serif] text-sm font-semibold">
              Provider
            </th>
            <th className="px-5 py-4 font-['Poppins',sans-serif] text-sm font-semibold">
              Duration
            </th>
          </tr>
        </thead>

        <tbody>
          {necessaryCookies.map((cookie, index) => (
            <tr
              key={cookie.name}
              className={
                index !== necessaryCookies.length - 1
                  ? "border-b border-[#dee8e9]"
                  : ""
              }
            >
              <td className="px-5 py-4">
  <div className="font-mono text-sm font-semibold text-[#1C3243]">
    {cookie.name}
  </div>

  <p className="mt-2 max-w-[520px] font-['Poppins',sans-serif] text-sm font-normal leading-6 text-[#435766]">
    {cookie.description}
  </p>
</td>
              <td className="px-5 py-4 font-['Poppins',sans-serif] text-sm text-[#435766]">
                {cookie.provider}
              </td>
              <td className="px-5 py-4 font-['Poppins',sans-serif] text-sm text-[#435766]">
                {cookie.duration}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>
<div className="border-b border-[#dee8e9] py-8">
  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
    <h3 className="font-['Poppins',sans-serif] text-xl font-bold text-[#1C3243]">
      Functional Cookies
    </h3>

    <span className="w-fit rounded-full bg-[#DCECED] px-3 py-1 font-['Poppins',sans-serif] text-xs font-semibold text-[#406064]">
      Functional · {functionalCookies.length}
    </span>
  </div>

  <div className="mt-6 overflow-hidden rounded-xl border border-[#dee8e9]">
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left">
        <thead className="bg-[#1C3243] text-white">
          <tr>
            <th className="px-5 py-4 font-['Poppins',sans-serif] text-sm font-semibold">
              Cookie
            </th>
            <th className="px-5 py-4 font-['Poppins',sans-serif] text-sm font-semibold">
              Provider
            </th>
            <th className="px-5 py-4 font-['Poppins',sans-serif] text-sm font-semibold">
              Duration
            </th>
          </tr>
        </thead>

        <tbody>
          {functionalCookies.map((cookie, index) => (
            <tr
              key={cookie.name}
              className={
                index !== functionalCookies.length - 1
                  ? "border-b border-[#dee8e9]"
                  : ""
              }
            >
              <td className="px-5 py-4 font-mono text-sm font-semibold text-[#1C3243]">
                {cookie.name}
              </td>
              <td className="px-5 py-4 font-['Poppins',sans-serif] text-sm text-[#435766]">
                {cookie.provider}
              </td>
              <td className="px-5 py-4 font-['Poppins',sans-serif] text-sm text-[#435766]">
                {cookie.duration}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  <div className="border-b border-[#dee8e9] py-8">
  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
    <h3 className="font-['Poppins',sans-serif] text-xl font-bold text-[#1C3243]">
      Analytics Cookies
    </h3>

    <span className="w-fit rounded-full bg-[#DCECED] px-3 py-1 font-['Poppins',sans-serif] text-xs font-semibold text-[#406064]">
      Analytics · {analyticsCookies.length}
    </span>
  </div>

  <div className="mt-6 overflow-hidden rounded-xl border border-[#dee8e9]">
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left">
        <thead className="bg-[#1C3243] text-white">
          <tr>
            <th className="px-5 py-4 font-['Poppins',sans-serif] text-sm font-semibold">
              Cookie
            </th>
            <th className="px-5 py-4 font-['Poppins',sans-serif] text-sm font-semibold">
              Provider
            </th>
            <th className="px-5 py-4 font-['Poppins',sans-serif] text-sm font-semibold">
              Duration
            </th>
          </tr>
        </thead>

        <tbody>
          {analyticsCookies.map((cookie, index) => (
            <tr
              key={cookie.name}
              className={
                index !== analyticsCookies.length - 1
                  ? "border-b border-[#dee8e9]"
                  : ""
              }
            >
              <td className="px-5 py-4 font-mono text-sm font-semibold text-[#1C3243]">
                {cookie.name}
              </td>
              <td className="px-5 py-4 font-['Poppins',sans-serif] text-sm text-[#435766]">
                {cookie.provider}
              </td>
              <td className="px-5 py-4 font-['Poppins',sans-serif] text-sm text-[#435766]">
                {cookie.duration}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>
<div className="py-8">
  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
    <h3 className="font-['Poppins',sans-serif] text-xl font-bold text-[#1C3243]">
      Performance Cookies
    </h3>

    <span className="w-fit rounded-full bg-[#DCECED] px-3 py-1 font-['Poppins',sans-serif] text-xs font-semibold text-[#406064]">
      Performance · {performanceCookies.length}
    </span>
  </div>

  <div className="mt-6 overflow-hidden rounded-xl border border-[#dee8e9]">
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left">
        <thead className="bg-[#1C3243] text-white">
          <tr>
            <th className="px-5 py-4 font-['Poppins',sans-serif] text-sm font-semibold">
              Cookie
            </th>
            <th className="px-5 py-4 font-['Poppins',sans-serif] text-sm font-semibold">
              Provider
            </th>
            <th className="px-5 py-4 font-['Poppins',sans-serif] text-sm font-semibold">
              Duration
            </th>
          </tr>
        </thead>

        <tbody>
          {performanceCookies.map((cookie, index) => (
            <tr
              key={cookie.name}
              className={
                index !== performanceCookies.length - 1
                  ? "border-b border-[#dee8e9]"
                  : ""
              }
            >
              <td className="px-5 py-4 font-mono text-sm font-semibold text-[#1C3243]">
                {cookie.name}
              </td>
              <td className="px-5 py-4 font-['Poppins',sans-serif] text-sm text-[#435766]">
                {cookie.provider}
              </td>
              <td className="px-5 py-4 font-['Poppins',sans-serif] text-sm text-[#435766]">
                {cookie.duration}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>
</div>
<div className="pt-8">
  <h2 className="font-['Poppins',sans-serif] text-2xl font-bold text-[#1C3243]">
    Your Choices Regarding Cookies
  </h2>

  <div className="mt-4 space-y-4 font-['Poppins',sans-serif] text-base leading-7 text-[#435766]">
    <p>
      You can choose whether to accept or decline cookies. Most web
      browsers accept cookies automatically, but you can usually modify
      your browser settings to decline cookies if you prefer.
    </p>

    <p>
      Please note that disabling certain cookies may affect your
      experience on our website and prevent some features from working
      properly.
    </p>
    <p>
  To delete or manage cookies, visit your browser&apos;s help page:
</p>

<div className="grid gap-3 sm:grid-cols-2">
  <a
    href="https://support.google.com/accounts/answer/32050"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-lg border border-[#dee8e9] px-4 py-3 font-semibold text-[#59797D] transition hover:bg-[#F9F4F1]"
  >
    Google Chrome
  </a>

  <a
    href="http://support.microsoft.com/kb/278835"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-lg border border-[#dee8e9] px-4 py-3 font-semibold text-[#59797D] transition hover:bg-[#F9F4F1]"
  >
    Internet Explorer
  </a>

  <a
    href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-lg border border-[#dee8e9] px-4 py-3 font-semibold text-[#59797D] transition hover:bg-[#F9F4F1]"
  >
    Mozilla Firefox
  </a>

  <a
    href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-lg border border-[#dee8e9] px-4 py-3 font-semibold text-[#59797D] transition hover:bg-[#F9F4F1]"
  >
    Apple Safari
  </a>
</div>

<p>
  For other browsers, please visit your browser&apos;s official support
  website.
</p>
<div className="border-t border-[#dee8e9] pt-8">
  <h3 className="font-['Poppins',sans-serif] text-xl font-bold text-[#1C3243]">
    Advertising Opt-Out Options
  </h3>

  <p className="mt-3">
    If you live in the United States, Canada, the European Union or the
    United Kingdom, you can use the following resources to manage
    interest-based advertising preferences:
  </p>

  <div className="mt-4 grid gap-3 sm:grid-cols-2">
    <a
      href="https://optout.aboutads.info/"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-lg border border-[#dee8e9] px-4 py-3 font-semibold text-[#59797D] transition hover:bg-[#F9F4F1]"
    >
      United States
    </a>

    <a
      href="https://youradchoices.ca/en/tools"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-lg border border-[#dee8e9] px-4 py-3 font-semibold text-[#59797D] transition hover:bg-[#F9F4F1]"
    >
      Canada
    </a>

    <a
      href="https://youronlinechoices.eu/"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-lg border border-[#dee8e9] px-4 py-3 font-semibold text-[#59797D] transition hover:bg-[#F9F4F1]"
    >
      European Union
    </a>

    <a
      href="https://www.youronlinechoices.com/uk/"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-lg border border-[#dee8e9] px-4 py-3 font-semibold text-[#59797D] transition hover:bg-[#F9F4F1]"
    >
      United Kingdom
    </a>
  </div>
</div>
<div className="border-t border-[#dee8e9] pt-8">
  <h2 className="font-['Poppins',sans-serif] text-2xl font-bold text-[#1C3243]">
    Contact Us
  </h2>

  <p className="mt-4">
    If you have any questions about this Cookies Policy, you can contact
    us by email.
  </p>

  <a
    href="mailto:privacy@cookcenter.org"
    className="mt-4 inline-flex rounded-lg bg-[#59797D] px-5 py-3 font-semibold text-white transition hover:bg-[#1C3243] focus:outline-none focus:ring-2 focus:ring-[#59797D] focus:ring-offset-2"
  >
    privacy@cookcenter.org
  </a>
</div>
  </div>
</div>
    </div>
    <BackToTopButton focusId="cookies-policy-title" />
  </section>
</main>
  );
}
