// Exports the design-system assets as plain SVG files for WordPress (or any stack), from the React sources:
//   docs/wordpress/icons/<name>.svg   every icon in src/components/ui/icons.tsx (Material Icons, Outlined)
//   docs/wordpress/logos/*.svg        the Parent Guidance logo (color and light versions)
// Run with `pnpm wp:assets` after adding an icon or changing the logo. Guide: docs/handoff/WORDPRESS.md.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const root = new URL("..", import.meta.url).pathname;
const out = (p) => root + "docs/wordpress/" + p;
mkdirSync(out("icons"), { recursive: true });
mkdirSync(out("logos"), { recursive: true });

// Icons: read the MUI path data each icon wraps.
const src = readFileSync(root + "src/components/ui/icons.tsx", "utf8");
const imports = Object.fromEntries(
  [...src.matchAll(/import (\w+) from "@mui\/icons-material\/(\w+)"/g)].map((m) => [m[1], m[2]]),
);
let icons = 0;
for (const [, name, comp] of src.matchAll(/export const (\w+) = icon\((\w+)/g)) {
  const js = readFileSync(root + `node_modules/@mui/icons-material/esm/${imports[comp]}.js`, "utf8");
  const shapes = [...js.matchAll(/_jsx\("(path|circle)", \{([^}]*)\}/g)].map(
    ([, tag, attrs]) =>
      `<${tag} ${[...attrs.matchAll(/(\w+): "([^"]*)"/g)].map(([, k, v]) => `${k}="${v}"`).join(" ")}/>`,
  );
  const file = name.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
  writeFileSync(
    out(`icons/${file}.svg`),
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${shapes.join("")}</svg>\n`,
  );
  icons++;
}

// Logo: same paths and colors as src/components/brand/Logo.tsx.
const logoSrc = readFileSync(root + "src/components/brand/Logo.tsx", "utf8");
const pathsSrc = readFileSync(root + "src/components/brand/logo-paths.ts", "utf8");
const P = Object.fromEntries([...pathsSrc.matchAll(/(\w+):\s*"([^"]+)"/g)].map((m) => [m[1], m[2]]));
const tokens = JSON.parse(readFileSync(root + "tokens/pg.tokens.json", "utf8"));
const [light, color] = logoSrc.split("export function LogoColor");
const logo = (part, viewBox, fallback) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" role="img" aria-label="Parent Guidance">${[
    ...part.matchAll(/svgPaths\.(\w+)\}\s*(?:fill="(#\w+)"|className="fill-pg-cream")/g),
  ]
    .map(([, id, fill]) => `<path d="${P[id]}" fill="${fill ?? fallback}"/>`)
    .join("")}</svg>\n`;
writeFileSync(out("logos/parent-guidance-color.svg"), logo(color, "0 0 117.188 28.4089"));
writeFileSync(out("logos/parent-guidance-light.svg"), logo(light, "0 0 105 24", tokens.color.cream.$value));

console.log(`Exported ${icons} icons and 2 logos to docs/wordpress/`);
