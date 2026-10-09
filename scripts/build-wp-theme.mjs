// Generates, from tokens/pg.tokens.json:
//   docs/wordpress/theme.json    WordPress block theme settings (version 3)
//   docs/wordpress/pg-tokens.css plain CSS (no Tailwind): --pg-* variables, color roles and .text-pg-* classes,
//                                to enqueue in a classic or block theme.
//   node scripts/build-wp-theme.mjs          write the file
//   node scripts/build-wp-theme.mjs --check  fail if the committed file is out of date (part of pnpm check:tokens)
// Guide: docs/handoff/WORDPRESS.md.
import { readFileSync, writeFileSync } from "node:fs";

const root = new URL("..", import.meta.url).pathname;
const OUT = root + "docs/wordpress/theme.json";
const OUT_CSS = root + "docs/wordpress/pg-tokens.css";
const t = JSON.parse(readFileSync(root + "tokens/pg.tokens.json", "utf8"));
const entries = (g) => Object.entries(g).filter(([k]) => !k.startsWith("$"));
const title = (slug) => slug.replace(/(^|-)(\w)/g, (_, d, c) => (d ? " " : "") + c.toUpperCase());
const color = (slug) => `var(--wp--preset--color--${slug})`;
const px = (n) => `${n}px`;

// Tailwind spacing steps used by the code (p-6 = 24px …) → WordPress spacing presets with the same number.
const SPACING = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20];

const role = {};
for (const [group, roles] of entries(t.role)) {
  role[group] = {};
  for (const [name, r] of entries(roles)) role[group][name] = color(r.$value.match(/\{color\.([\w-]+)\}/)[1]);
}

const text = {};
for (const [k, s] of entries(t.text)) {
  text[k] = { lineHeight: px(s.lineHeight), fontWeight: String(s.weight) };
  if (s.md?.lineHeight) text[k].lineHeightDesktop = px(s.md.lineHeight);
  if (s.tracking) text[k].letterSpacing = s.tracking;
}
const fontSize = (k) => `var(--wp--preset--font-size--${k})`;
const heading = (k) => ({
  typography: {
    fontSize: fontSize(k),
    fontWeight: String(t.text[k].weight),
    lineHeight: px(t.text[k].lineHeight),
  },
  color: { text: role.fg.primary },
});

const theme = {
  $schema: "https://schemas.wp.org/trunk/theme.json",
  version: 3,
  title: "Parent Guidance",
  settings: {
    appearanceTools: true,
    color: {
      defaultPalette: false,
      defaultGradients: false,
      custom: false,
      palette: entries(t.color).map(([slug, v]) => ({ slug, color: v.$value, name: title(slug) })),
    },
    typography: {
      defaultFontSizes: false,
      customFontSize: false,
      fluid: true,
      fontFamilies: [{ slug: "poppins", name: "Poppins", fontFamily: t.font.family.$value }],
      fontSizes: entries(t.text).map(([slug, s]) => ({
        slug,
        name: title(slug),
        size: px(s.md?.size ?? s.size),
        fluid: s.md?.size ? { min: px(s.size), max: px(s.md.size) } : false,
      })),
    },
    spacing: {
      defaultSpacingSizes: false,
      customSpacingSize: false,
      units: ["px", "%", "rem"],
      spacingSizes: SPACING.map((n) => ({ slug: String(n), name: `${n * 4}px`, size: px(n * 4) })),
    },
    shadow: {
      defaultPresets: false,
      presets: entries(t.shadow).map(([slug, v]) => ({ slug, name: title(slug), shadow: v.$value })),
    },
    layout: { contentSize: t.container.content.$value, wideSize: t.container.page.$value },
    custom: {
      role,
      radius: Object.fromEntries(entries(t.radius).map(([k, v]) => [k, v.$value])),
      container: Object.fromEntries(entries(t.container).map(([k, v]) => [k, v.$value])),
      text,
      motion: Object.fromEntries(
        entries(t.motion).map(([k, v]) => [
          k,
          Array.isArray(v.$value) ? `cubic-bezier(${v.$value.join(", ")})` : v.$value,
        ]),
      ),
    },
  },
  styles: {
    color: { background: role.bg.page, text: role.fg.primary },
    typography: {
      fontFamily: "var(--wp--preset--font-family--poppins)",
      fontSize: fontSize("body"),
      lineHeight: px(t.text.body.lineHeight),
    },
    spacing: { blockGap: "var(--wp--preset--spacing--6)" },
    elements: {
      h1: heading("h1"),
      h2: heading("h2"),
      h3: heading("h3"),
      h4: heading("h4"),
      link: {
        color: { text: role.fg.brand },
        ":hover": { color: { text: role.fg.primary } },
        ":focus": { outline: { color: role.focus.ring, width: "2px", style: "solid", offset: "2px" } },
      },
      button: {
        color: { background: role.bg.brand, text: role.fg.inverse },
        border: { radius: "var(--wp--custom--radius--md)" },
        typography: { fontSize: fontSize("body"), fontWeight: "600" },
        spacing: {
          padding: {
            top: "var(--wp--preset--spacing--3)",
            bottom: "var(--wp--preset--spacing--3)",
            left: "var(--wp--preset--spacing--5)",
            right: "var(--wp--preset--spacing--5)",
          },
        },
        ":hover": { color: { background: role.bg["brand-hover"] } },
        ":focus": { outline: { color: role.focus.ring, width: "2px", style: "solid", offset: "2px" } },
      },
    },
  },
};

const json = JSON.stringify(theme, null, 2) + "\n";

// Plain CSS: the same variables the React prototype uses (--pg-*), plus the type scale as normal classes.
const vars = [
  ...entries(t.color).map(([k, v]) => `  --pg-${k}: ${v.$value};`),
  ...entries(t.role).flatMap(([group, roles]) =>
    entries(roles).map(
      ([name, r]) => `  --pg-role-${group}-${name}: var(--pg-${r.$value.match(/\{color\.([\w-]+)\}/)[1]});`,
    ),
  ),
  `  --pg-font: ${t.font.family.$value};`,
  ...entries(t.radius).map(([k, v]) => `  --pg-radius-${k}: ${v.$value};`),
  ...entries(t.shadow).map(([k, v]) => `  --pg-shadow-${k}: ${v.$value};`),
  ...entries(t.container).map(([k, v]) => `  --pg-container-${k}: ${v.$value};`),
  ...entries(t.motion).map(
    ([k, v]) => `  --pg-${k}: ${Array.isArray(v.$value) ? `cubic-bezier(${v.$value.join(", ")})` : v.$value};`,
  ),
];
const classes = entries(t.text).map(([k, s]) => {
  const lines = [`  font-size: ${px(s.size)};`, `  line-height: ${px(s.lineHeight)};`, `  font-weight: ${s.weight};`];
  if (s.tracking) lines.push(`  letter-spacing: ${s.tracking};`);
  if (s.uppercase) lines.push("  text-transform: uppercase;");
  let css = `/* ${s.$description} */\n.text-pg-${k} {\n${lines.join("\n")}\n}`;
  if (s.md)
    css += `\n@media (min-width: 768px) {\n  .text-pg-${k} {\n    font-size: ${px(s.md.size)};\n    line-height: ${px(s.md.lineHeight)};\n  }\n}`;
  return css;
});
const css = `/*
 * Parent Guidance — design tokens as plain CSS (for WordPress or any non-Tailwind stack)
 * GENERATED from tokens/pg.tokens.json by scripts/build-wp-theme.mjs. Do not edit by hand.
 * Guide: docs/handoff/WORDPRESS.md
 */

:root {
${vars.join("\n")}
}

${classes.join("\n\n")}
`;

if (process.argv.includes("--check")) {
  const stale = [
    [OUT, json],
    [OUT_CSS, css],
  ].filter(([file, content]) => readFileSync(file, "utf8") !== content);
  if (stale.length) {
    console.error(
      `${stale.map(([f]) => f.replace(root, "")).join(", ")} out of date with tokens/pg.tokens.json. Run \`pnpm tokens\`.`,
    );
    process.exit(1);
  }
  console.log("WordPress theme.json and pg-tokens.css are up to date.");
} else {
  writeFileSync(OUT, json);
  writeFileSync(OUT_CSS, css);
  console.log("Wrote docs/wordpress/theme.json and docs/wordpress/pg-tokens.css");
}
