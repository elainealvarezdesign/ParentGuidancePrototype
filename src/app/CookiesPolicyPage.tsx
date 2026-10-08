import { DocumentHeader } from "@/sections/DocumentHeader";
import { analyticsCookies, functionalCookies, necessaryCookies, performanceCookies } from "@/content/cookies";
import { ButtonAnchor, buttonClass } from "@/components/ui/Button";
import { LegalActions, BackToTopButton, downloadTextFile } from "@/components/patterns/DocumentActions";

const DOCUMENT_ID = "cookies-policy-document";

function handleDownload() {
  const body = document.getElementById(DOCUMENT_ID)?.innerText ?? "";
  downloadTextFile("ParentGuidance-Cookies-Policy.txt", `COOKIES POLICY\n\n${body.trim()}\n`);
}

export default function CookiesPolicyPage() {
  return (
    <div className="min-h-screen bg-pg-cream print:bg-white">
      <DocumentHeader
        content={{
          eyebrow: "Legal",
          title: "Cookies Policy",
          intro:
            "Learn how Parent Guidance uses cookies and similar technologies to improve your experience on our website.",
        }}
        titleId="cookies-policy-title"
        printable
      >
        <LegalActions onDownload={handleDownload} />
      </DocumentHeader>

      <section className="px-6 pb-20 md:px-10 lg:px-14 print:p-0">
        <div
          id={DOCUMENT_ID}
          className="mx-auto max-w-pg-content rounded-pg-xl border border-pg-line bg-white p-7 shadow-pg-card md:p-10 print:max-w-none print:rounded-none print:border-0 print:p-0 print:shadow-none"
        >
          <div className="border-b border-pg-line pb-8">
            <p className="mb-6 text-sm font-semibold text-pg-teal-dark">Last updated: November 27, 2024</p>

            <h2 className="text-pg-h2 text-pg-navy">About this policy</h2>

            <div className="mt-4 space-y-4 text-base leading-7 text-pg-slate">
              <p>
                Parent Guidance uses cookies and similar tracking technologies to provide, maintain, secure and improve
                its website and services.
              </p>

              <p>
                These technologies help us remember preferences, identify technical issues, measure website performance
                and improve the overall user experience.
              </p>

              <p>For more information about how personal data is handled, please review our Privacy Policy.</p>
            </div>
          </div>
          <div className="border-b border-pg-line py-8">
            <h2 className="text-pg-h2 text-pg-navy">What are Cookies?</h2>

            <div className="mt-4 space-y-4 text-base leading-7 text-pg-slate">
              <p>
                Cookies are small files placed on your computer, mobile device or other device when you visit a website.
                They can store information such as your login details, language preferences and browsing activity.
              </p>

              <p>
                You are not required to accept every cookie to visit our website. However, enabling cookies can provide
                a more personalized experience and may be necessary for some services to function properly.
              </p>
            </div>
          </div>
          <div className="border-b border-pg-line py-8">
            <h2 className="text-pg-h2 text-pg-navy">Types of Cookies We Use</h2>

            <p className="mt-4 text-base leading-7 text-pg-slate">
              We use session and persistent cookies to support essential website functions, remember preferences and
              understand how visitors use our services.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-pg-lg border border-pg-line bg-pg-cream p-5">
                <span className="rounded-full bg-pg-tint px-3 py-1 text-xs font-semibold text-pg-teal-dark">
                  Session
                </span>

                <h3 className="mt-4 text-pg-h3 text-pg-navy">Necessary cookies</h3>

                <p className="mt-2 text-sm leading-6 text-pg-slate">
                  Support essential website features, authentication and account security.
                </p>
              </div>

              <div className="rounded-pg-lg border border-pg-line bg-pg-cream p-5">
                <span className="rounded-full bg-pg-tint px-3 py-1 text-xs font-semibold text-pg-teal-dark">
                  Persistent
                </span>

                <h3 className="mt-4 text-pg-h3 text-pg-navy">Functional cookies</h3>

                <p className="mt-2 text-sm leading-6 text-pg-slate">
                  Remember choices such as login details, language and other preferences.
                </p>
              </div>

              <div className="rounded-pg-lg border border-pg-line bg-pg-cream p-5">
                <span className="rounded-full bg-pg-tint px-3 py-1 text-xs font-semibold text-pg-teal-dark">
                  Persistent
                </span>

                <h3 className="mt-4 text-pg-h3 text-pg-navy">Analytics cookies</h3>

                <p className="mt-2 text-sm leading-6 text-pg-slate">
                  Help measure website traffic, performance and how visitors interact with our services.
                </p>
              </div>
            </div>
          </div>
          <div className="border-b border-pg-line py-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-pg-h2 text-pg-navy">The Cookies We Use</h2>

              <span className="w-fit rounded-full bg-pg-tint px-3 py-1 text-xs font-semibold text-pg-teal-dark">
                Necessary · {necessaryCookies.length}
              </span>
            </div>

            <div className="mt-6 overflow-hidden rounded-pg-lg border border-pg-line">
              <div className="overflow-x-auto" tabIndex={0} role="region" aria-label="Necessary cookies table">
                <table className="w-full border-collapse text-left">
                  <thead className="bg-pg-navy text-white">
                    <tr>
                      <th className="px-5 py-4 text-sm font-semibold">Cookie</th>
                      <th className="px-5 py-4 text-sm font-semibold">Provider</th>
                      <th className="px-5 py-4 text-sm font-semibold">Duration</th>
                    </tr>
                  </thead>

                  <tbody>
                    {necessaryCookies.map((cookie, index) => (
                      <tr
                        key={cookie.name}
                        className={index !== necessaryCookies.length - 1 ? "border-b border-pg-line" : ""}
                      >
                        <td className="px-5 py-4">
                          <div className="font-mono text-sm font-semibold text-pg-navy">{cookie.name}</div>

                          <p className="mt-2 max-w-[520px] text-sm leading-6 font-normal text-pg-slate">
                            {cookie.description}
                          </p>
                        </td>
                        <td className="px-5 py-4 text-sm text-pg-slate">{cookie.provider}</td>
                        <td className="px-5 py-4 text-sm text-pg-slate">{cookie.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="border-b border-pg-line py-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-pg-h3 text-pg-navy">Functional Cookies</h3>

              <span className="w-fit rounded-full bg-pg-tint px-3 py-1 text-xs font-semibold text-pg-teal-dark">
                Functional · {functionalCookies.length}
              </span>
            </div>

            <div className="mt-6 overflow-hidden rounded-pg-lg border border-pg-line">
              <div className="overflow-x-auto" tabIndex={0} role="region" aria-label="Functional cookies table">
                <table className="w-full border-collapse text-left">
                  <thead className="bg-pg-navy text-white">
                    <tr>
                      <th className="px-5 py-4 text-sm font-semibold">Cookie</th>
                      <th className="px-5 py-4 text-sm font-semibold">Provider</th>
                      <th className="px-5 py-4 text-sm font-semibold">Duration</th>
                    </tr>
                  </thead>

                  <tbody>
                    {functionalCookies.map((cookie, index) => (
                      <tr
                        key={cookie.name}
                        className={index !== functionalCookies.length - 1 ? "border-b border-pg-line" : ""}
                      >
                        <td className="px-5 py-4 font-mono text-sm font-semibold text-pg-navy">{cookie.name}</td>
                        <td className="px-5 py-4 text-sm text-pg-slate">{cookie.provider}</td>
                        <td className="px-5 py-4 text-sm text-pg-slate">{cookie.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="border-b border-pg-line py-8">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-pg-h3 text-pg-navy">Analytics Cookies</h3>

                <span className="w-fit rounded-full bg-pg-tint px-3 py-1 text-xs font-semibold text-pg-teal-dark">
                  Analytics · {analyticsCookies.length}
                </span>
              </div>

              <div className="mt-6 overflow-hidden rounded-pg-lg border border-pg-line">
                <div className="overflow-x-auto" tabIndex={0} role="region" aria-label="Analytics cookies table">
                  <table className="w-full border-collapse text-left">
                    <thead className="bg-pg-navy text-white">
                      <tr>
                        <th className="px-5 py-4 text-sm font-semibold">Cookie</th>
                        <th className="px-5 py-4 text-sm font-semibold">Provider</th>
                        <th className="px-5 py-4 text-sm font-semibold">Duration</th>
                      </tr>
                    </thead>

                    <tbody>
                      {analyticsCookies.map((cookie, index) => (
                        <tr
                          key={cookie.name}
                          className={index !== analyticsCookies.length - 1 ? "border-b border-pg-line" : ""}
                        >
                          <td className="px-5 py-4 font-mono text-sm font-semibold text-pg-navy">{cookie.name}</td>
                          <td className="px-5 py-4 text-sm text-pg-slate">{cookie.provider}</td>
                          <td className="px-5 py-4 text-sm text-pg-slate">{cookie.duration}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="py-8">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-pg-h3 text-pg-navy">Performance Cookies</h3>

                <span className="w-fit rounded-full bg-pg-tint px-3 py-1 text-xs font-semibold text-pg-teal-dark">
                  Performance · {performanceCookies.length}
                </span>
              </div>

              <div className="mt-6 overflow-hidden rounded-pg-lg border border-pg-line">
                <div className="overflow-x-auto" tabIndex={0} role="region" aria-label="Performance cookies table">
                  <table className="w-full border-collapse text-left">
                    <thead className="bg-pg-navy text-white">
                      <tr>
                        <th className="px-5 py-4 text-sm font-semibold">Cookie</th>
                        <th className="px-5 py-4 text-sm font-semibold">Provider</th>
                        <th className="px-5 py-4 text-sm font-semibold">Duration</th>
                      </tr>
                    </thead>

                    <tbody>
                      {performanceCookies.map((cookie, index) => (
                        <tr
                          key={cookie.name}
                          className={index !== performanceCookies.length - 1 ? "border-b border-pg-line" : ""}
                        >
                          <td className="px-5 py-4 font-mono text-sm font-semibold text-pg-navy">{cookie.name}</td>
                          <td className="px-5 py-4 text-sm text-pg-slate">{cookie.provider}</td>
                          <td className="px-5 py-4 text-sm text-pg-slate">{cookie.duration}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8">
            <h2 className="text-pg-h2 text-pg-navy">Your Choices Regarding Cookies</h2>

            <div className="mt-4 space-y-4 text-base leading-7 text-pg-slate">
              <p>
                You can choose whether to accept or decline cookies. Most web browsers accept cookies automatically, but
                you can usually modify your browser settings to decline cookies if you prefer.
              </p>

              <p>
                Please note that disabling certain cookies may affect your experience on our website and prevent some
                features from working properly.
              </p>
              <p>To delete or manage cookies, visit your browser&apos;s help page:</p>

              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href="https://support.google.com/accounts/answer/32050"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClass({ variant: "secondary", className: "justify-start" })}
                >
                  Google Chrome
                </a>

                <a
                  href="http://support.microsoft.com/kb/278835"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClass({ variant: "secondary", className: "justify-start" })}
                >
                  Internet Explorer
                </a>

                <a
                  href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClass({ variant: "secondary", className: "justify-start" })}
                >
                  Mozilla Firefox
                </a>

                <a
                  href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClass({ variant: "secondary", className: "justify-start" })}
                >
                  Apple Safari
                </a>
              </div>

              <p>For other browsers, please visit your browser&apos;s official support website.</p>
              <div className="border-t border-pg-line pt-8">
                <h3 className="text-pg-h3 text-pg-navy">Advertising Opt-Out Options</h3>

                <p className="mt-3">
                  If you live in the United States, Canada, the European Union or the United Kingdom, you can use the
                  following resources to manage interest-based advertising preferences:
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <a
                    href="https://optout.aboutads.info/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClass({ variant: "secondary", className: "justify-start" })}
                  >
                    United States
                  </a>

                  <a
                    href="https://youradchoices.ca/en/tools"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClass({ variant: "secondary", className: "justify-start" })}
                  >
                    Canada
                  </a>

                  <a
                    href="https://youronlinechoices.eu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClass({ variant: "secondary", className: "justify-start" })}
                  >
                    European Union
                  </a>

                  <a
                    href="https://www.youronlinechoices.com/uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClass({ variant: "secondary", className: "justify-start" })}
                  >
                    United Kingdom
                  </a>
                </div>
              </div>
              <div className="border-t border-pg-line pt-8">
                <h2 className="text-pg-h2 text-pg-navy">Contact Us</h2>

                <p className="mt-4">
                  If you have any questions about this Cookies Policy, you can contact us by email.
                </p>

                <ButtonAnchor href="mailto:privacy@cookcenter.org" className="mt-4">
                  privacy@cookcenter.org
                </ButtonAnchor>
              </div>
            </div>
          </div>
        </div>
        <BackToTopButton focusId="cookies-policy-title" />
      </section>
    </div>
  );
}
