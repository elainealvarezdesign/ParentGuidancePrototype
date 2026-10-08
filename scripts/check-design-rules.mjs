// Fails when app code breaks the design-system rules in DESIGN.md:
// raw hex colors, Tailwind grays, half-step spacing, arbitrary px spacing, arbitrary font sizes and line
// heights, and raw motion values (cubic-bezier arrays, durations) instead of the tokens in src/lib/motion.ts.
// Run with `pnpm check:design`. Allowed exceptions are listed in ALLOW below.
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const SCAN = ["src/app", "src/components", "src/sections", "src/pages", "src/content"];
const RULES = [
  { id: "raw-hex", re: /#[0-9a-fA-F]{6}\b/g, msg: "raw hex color — use a pg-* token" },
  {
    id: "tailwind-gray",
    re: /\b(?:text|bg|border|ring|fill|stroke)-(?:gray|slate|zinc|neutral|stone)-\d{2,3}\b/g,
    msg: "Tailwind gray — use a pg-* token",
  },
  {
    id: "half-step",
    re: /(?<![\w-])-?(?:gap|gap-x|gap-y|p|px|py|pt|pb|pl|pr|m|mx|my|mt|mb|ml|mr|space-x|space-y)-(?:1|2|3)\.5(?![\w.])/g,
    msg: "half-step spacing — use the 4px scale",
  },
  {
    id: "arbitrary-type",
    re: /(?<![\w-])(?:text-\[\d+(?:\.\d+)?(?:px|rem)\]|leading-\[[^\]]+\])/g,
    msg: "arbitrary font size or line height — use a text-pg-* type utility",
  },
  { id: "raw-ease", re: /\bease:\s*\[/g, msg: "raw cubic-bezier — use EASE_OUT / EASE_IN_OUT from @/lib/motion" },
  { id: "raw-duration", re: /\bduration:\s*\d/g, msg: "raw duration — use DURATION.* from @/lib/motion" },
  {
    id: "arbitrary-spacing",
    re: /(?<![\w-])-?(?:gap|gap-x|gap-y|p|px|py|pt|pb|pl|pr|m|mx|my|mt|mb|ml|mr|space-x|space-y)-\[\d+(?:\.\d+)?px\]/g,
    msg: "arbitrary px spacing — use the 4px scale",
  },
];
// file → rule ids or literal matches that are allowed (structural offsets, brand artwork)
const ALLOW = {
  "src/components/brand/Logo.tsx": ["raw-hex"],
  "src/app/MentalHealthEventsPage.tsx": ["pt-[42px]"],
  "src/components/ui/Avatar.tsx": ["text-[10px]"], // xs initials are below the type scale
};
const BASELINE = JSON.parse(readFileSync(join(ROOT, "scripts/design-rules-baseline.json"), "utf8"));

const files = [];
const walk = (d) => {
  let entries;
  try {
    entries = readdirSync(d);
  } catch {
    return;
  }
  for (const e of entries) {
    const p = join(d, e);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.(tsx?|css)$/.test(p)) files.push(p);
  }
};
SCAN.forEach((d) => walk(join(ROOT, d)));

const counts = {};
const findings = [];
for (const f of files) {
  const rel = relative(ROOT, f);
  const lines = readFileSync(f, "utf8").split("\n");
  lines.forEach((line, i) => {
    if (/design-rules-ignore/.test(line)) return;
    for (const r of RULES) {
      for (const m of line.matchAll(r.re)) {
        if ((ALLOW[rel] || []).includes(m[0]) || (ALLOW[rel] || []).includes(r.id)) continue;
        const key = `${rel}:${r.id}`;
        counts[key] = (counts[key] || 0) + 1;
        findings.push(`${rel}:${i + 1}  ${m[0]}  (${r.msg})`);
      }
    }
  });
}

// The baseline records known debt per file; CI fails if any file gets worse or a new file has findings.
const regressions = Object.entries(counts).filter(([k, n]) => n > (BASELINE[k] || 0));
const total = findings.length;
if (process.argv.includes("--update-baseline")) {
  const { writeFileSync } = await import("node:fs");
  writeFileSync(join(ROOT, "scripts/design-rules-baseline.json"), JSON.stringify(counts, null, 2) + "\n");
  console.log(`Baseline updated: ${total} known findings.`);
  process.exit(0);
}
if (process.argv.includes("--list")) findings.forEach((f) => console.log(f));
if (regressions.length) {
  console.error("Design-rule regressions (more findings than the baseline):");
  for (const [k, n] of regressions) console.error(`  ${k}: ${n} (baseline ${BASELINE[k] || 0})`);
  console.error("Run `pnpm check:design --list` to see each line.");
  process.exit(1);
}
console.log(`Design rules OK — ${total} known findings in the baseline, no regressions.`);
