import { Badge } from "@/components/ui/Badge";
import type { CookieGroup } from "@/content/cookies";

/* CookieTable (docs/system/components/legal-document.md). One group of cookies from src/content/cookies.ts:
 * heading with a count pill, then a table (cookie, provider, duration). Rows with a description show it under
 * the cookie name. The table scrolls sideways on small screens; the scroll region is focusable and named. */

export function CookieTable({ group, headingLevel = 3 }: { group: CookieGroup; headingLevel?: 2 | 3 }) {
  const Heading = `h${headingLevel}` as const;
  const { heading, label, rows } = group;

  return (
    <div>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <Heading className="text-pg-h3 text-pg-navy">{heading}</Heading>
        <Badge tone="tint" className="w-fit">
          {label} · {rows.length}
        </Badge>
      </div>

      <div className="mt-6 overflow-hidden rounded-pg-lg border border-pg-line">
        <div className="overflow-x-auto" tabIndex={0} role="region" aria-label={`${label} cookies table`}>
          <table className="w-full border-collapse text-left">
            <thead className="bg-pg-navy text-white">
              <tr>
                <th className="px-5 py-4 text-sm font-semibold">Cookie</th>
                <th className="px-5 py-4 text-sm font-semibold">Provider</th>
                <th className="px-5 py-4 text-sm font-semibold">Duration</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-pg-line">
              {rows.map((cookie) => (
                <tr key={cookie.name}>
                  <td className="px-5 py-4">
                    <div className="font-mono text-sm font-semibold text-pg-navy">{cookie.name}</div>
                    {cookie.description && (
                      <p className="mt-2 max-w-pg-reading text-sm leading-6 text-pg-slate">{cookie.description}</p>
                    )}
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
  );
}
