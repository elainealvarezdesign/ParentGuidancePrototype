// Generates src/styles/tokens.css from tokens/pg.tokens.json (the source of truth for code).
//   pnpm tokens          write the CSS
//   pnpm tokens --check  fail if the committed CSS is out of date (used in CI)
import { readFileSync, writeFileSync } from "node:fs";

const root = new URL("..", import.meta.url).pathname;
const SRC = root + "tokens/pg.tokens.json";
const OUT = root + "src/styles/tokens.css";
const t = JSON.parse(readFileSync(SRC, "utf8"));
const entries = (group) => Object.entries(group).filter(([k]) => !k.startsWith("$"));
const px = (n) => `${n}px`;

const root_ = [];
const theme = [];
const utilities = [];

for (const [k, v] of entries(t.color)) {
  root_.push(`  --pg-${k}: ${v.$value};`);
  if (k !== "white") theme.push(`  --color-pg-${k}: var(--pg-${k});`);
}
// Color roles: --pg-role-<group>-<name> → the palette variable it aliases; Tailwind: bg-role-bg-page…
const alias = (v) => v.match(/^\{color\.([\w-]+)\}$/)?.[1];
for (const [group, roles] of entries(t.role)) {
  for (const [name, r] of entries(roles)) {
    const color = alias(r.$value);
    if (!color || !t.color[color]) throw new Error(`role.${group}.${name}: ${r.$value} is not a {color.*} alias`);
    root_.push(`  --pg-role-${group}-${name}: var(--pg-${color});`);
    theme.push(`  --color-role-${group}-${name}: var(--pg-role-${group}-${name});`);
  }
}
root_.push(`  --pg-font: ${t.font.family.$value};`);
for (const [k, v] of entries(t.shadow)) {
  root_.push(`  --pg-shadow-${k}: ${v.$value};`);
  theme.push(`  --shadow-pg-${k}: var(--pg-shadow-${k});`);
}
for (const [k, v] of entries(t.motion)) {
  const val = Array.isArray(v.$value) ? `cubic-bezier(${v.$value.join(", ")})` : v.$value;
  root_.push(`  --pg-${k}: ${val};`);
  if (k.startsWith("ease")) theme.push(`  --ease-pg-${k.slice(5)}: var(--pg-${k});`);
}
theme.push("  --font-sans: var(--pg-font);");
for (const [k, v] of entries(t.tracking)) theme.push(`  --tracking-pg-${k}: ${v.$value};`);
for (const [k, v] of entries(t.radius)) theme.push(`  --radius-pg-${k}: ${v.$value};`);
for (const [k, v] of entries(t.container)) theme.push(`  --container-pg-${k}: ${v.$value};`);

for (const [k, s] of entries(t.text)) {
  const lines = [`  font-size: ${px(s.size)};`, `  line-height: ${px(s.lineHeight)};`, `  font-weight: ${s.weight};`];
  if (s.tracking) lines.push(`  letter-spacing: ${s.tracking};`);
  if (s.uppercase) lines.push("  text-transform: uppercase;");
  if (s.md) {
    lines.push("  @media (width >= 48rem) {");
    if (s.md.size) lines.push(`    font-size: ${px(s.md.size)};`);
    if (s.md.lineHeight) lines.push(`    line-height: ${px(s.md.lineHeight)};`);
    lines.push("  }");
  }
  utilities.push(`/* ${s.$description} */\n@utility text-pg-${k} {\n${lines.join("\n")}\n}`);
}

const css = `/*
 * Parent Guidance — design tokens
 * GENERATED from tokens/pg.tokens.json by scripts/build-tokens.mjs. Do not edit by hand: change the JSON
 * and run \`pnpm tokens\`. Usage rules live in docs/system/foundations.md.
 */

:root {
${root_.join("\n")}

  /* Base theme aliases read by src/styles/theme.css (element defaults). */
  --background: var(--pg-cream);
  --foreground: var(--pg-navy);
  --card: var(--pg-white);
  --card-foreground: var(--pg-navy);
  --popover: var(--pg-white);
  --popover-foreground: var(--pg-navy);
  --primary: var(--pg-teal);
  --primary-foreground: var(--pg-white);
  --secondary: var(--pg-tint);
  --secondary-foreground: var(--pg-navy);
  --muted: var(--pg-tint);
  --muted-foreground: var(--pg-slate);
  --accent: var(--pg-tint-soft);
  --accent-foreground: var(--pg-navy);
  --destructive: var(--pg-error);
  --destructive-foreground: var(--pg-white);
  --border: var(--pg-line);
  --input-background: var(--pg-white);
  --ring: var(--pg-teal-dark);
}

/* Tailwind v4 theme: bg-pg-navy, text-pg-slate, bg-role-bg-page, text-role-fg-primary, rounded-pg-md, shadow-pg-card, max-w-pg-content, ease-pg-out… */
@theme inline {
${theme.join("\n")}
}

/* Semantic type scale: text-pg-display, text-pg-h1 … text-pg-eyebrow */
${utilities.join("\n\n")}

body {
  font-family: var(--pg-font);
}
`;

if (process.argv.includes("--check")) {
  if (readFileSync(OUT, "utf8") !== css) {
    console.error("src/styles/tokens.css is out of date with tokens/pg.tokens.json. Run `pnpm tokens`.");
    process.exit(1);
  }
  console.log("tokens.css is up to date.");
} else {
  writeFileSync(OUT, css);
  console.log("Wrote src/styles/tokens.css");
}
