// Builds the branded guideline PDFs (docs/guidelines/pdf/ and pdf/es/) from the Markdown sources.
//
// Usage (from a scratch folder with the two dependencies installed):
//   npm i marked@14 playwright-core
//   node build-pdf.mjs <repo root> <Poppins woff2 folder> [chromium executable]
//
// Poppins woff2 files come from @fontsource/poppins (files/poppins-latin-{400,500,600,700}-{normal,italic}.woff2).

import { readFileSync, writeFileSync, mkdtempSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { pathToFileURL } from "node:url";
import { Marked } from "marked";
import { chromium } from "playwright-core";

const [repo, fontDir, chromePath = "/opt/pw-browsers/chromium-1194/chrome-linux/chrome"] = process.argv.slice(2);
const docs = join(repo, "docs/guidelines");

const LANGS = {
  en: {
    dir: docs,
    out: join(docs, "pdf"),
    files: [
      ["README.md", "00-Introduction"],
      ["01-foundations.md", "01-Foundations"],
      ["02-buttons.md", "02-Buttons"],
      ["03-layout.md", "03-Layout"],
      ["04-motion.md", "04-Motion"],
      ["05-quality.md", "05-Quality"],
    ],
    complete: "Parent-Guidance-Design-Guidelines-complete",
    introSubtitle: "Design system of the PG-Live prototype",
    chapterSubtitle: "Design guidelines · Parent Guidance",
    updated: "Updated October 5, 2026",
    footer: "Parent Guidance · Design guidelines",
  },
  es: {
    dir: join(docs, "es"),
    out: join(docs, "pdf/es"),
    files: [
      ["README.md", "00-Introduccion"],
      ["01-fundamentos.md", "01-Fundamentos"],
      ["02-botones.md", "02-Botones"],
      ["03-layout.md", "03-Layout"],
      ["04-movimiento.md", "04-Movimiento"],
      ["05-calidad.md", "05-Calidad"],
    ],
    complete: "Parent-Guidance-Guias-de-diseno-completas",
    introSubtitle: "Sistema de diseño del prototipo PG-Live",
    chapterSubtitle: "Guías de diseño · Parent Guidance",
    updated: "Actualizado el 5 de octubre de 2026",
    footer: "Parent Guidance · Guías de diseño",
  },
};

const font = (weight, style) =>
  `@font-face{font-family:Poppins;font-weight:${weight};font-style:${style};` +
  `src:url(${pathToFileURL(join(fontDir, `poppins-latin-${weight}-${style}.woff2`))}) format("woff2");}`;

const CSS = `
${[400, 500, 600, 700].flatMap((w) => [font(w, "normal"), font(w, "italic")]).join("\n")}
@page { size: A4; margin: 16mm 17mm 18mm 17mm; }
:root { --navy:#1c3243; --slate:#435766; --teal:#59797d; --teal-dark:#406064; --sage:#90b3b6;
        --tint:#eaf1f1; --tint-soft:#f0f6f6; --line:#dee8e9; }
* { box-sizing: border-box; }
body { margin:0; font-family:Poppins, sans-serif; font-size:10.4pt; line-height:1.6; color:var(--slate);
       -webkit-print-color-adjust:exact; print-color-adjust:exact; }
.chapter + .chapter { break-before: page; }
.banner { position:relative; overflow:hidden; background:var(--navy); border-radius:14px;
          padding:34px 34px 30px; margin:0 0 24px; }
.banner::after { content:""; position:absolute; right:-70px; top:28px; width:250px; height:260px;
                 background:#3c5464; border-radius:26px; transform:rotate(18deg); }
.banner > * { position:relative; z-index:1; }
.eyebrow { color:var(--sage); font-size:8pt; font-weight:600; letter-spacing:.22em; margin:0 0 6px; }
.banner h1 { color:#fff; font-size:28pt; line-height:1.15; font-weight:700; margin:0 0 10px; max-width:78%; }
.subtitle { color:#fff; font-size:10.4pt; margin:0; opacity:.92; }
h2 { color:var(--navy); font-size:16.5pt; font-weight:700; line-height:1.25; margin:24px 0 12px;
     padding-left:10px; border-left:4px solid var(--sage); break-after:avoid; }
h3 { color:var(--navy); font-size:12.5pt; font-weight:700; margin:18px 0 8px; break-after:avoid; }
h4 { color:var(--navy); font-size:10pt; font-weight:700; margin:14px 0 6px; break-after:avoid; }
p { margin:0 0 9px; }
strong { color:var(--navy); font-weight:700; }
a { color:inherit; text-decoration:underline; text-underline-offset:2px; }
a:has(> code) { text-decoration:none; }
.hex { white-space:nowrap; }
ul, ol { margin:0 0 10px; padding-left:20px; }
li { margin:0 0 2px; }
li::marker { color:var(--navy); }
code { font-family:"DejaVu Sans Mono", monospace; font-size:8.2pt; color:var(--navy);
       background:var(--tint-soft); border-radius:4px; padding:1px 4px; }
.swatch { display:inline-block; width:8px; height:8px; border-radius:2px; margin-right:4px;
          vertical-align:-0.5px; border:1px solid rgba(28,50,67,.18); }
pre { background:var(--navy); color:#e6eef0; border-radius:10px; padding:12px 16px; margin:4px 0 12px;
      white-space:pre-wrap; break-inside:avoid; }
pre code { background:none; color:inherit; padding:0; font-size:8pt; line-height:1.6; }
blockquote { margin:6px 0 14px; padding:10px 16px; background:var(--tint-soft); border-left:4px solid var(--teal-dark);
             border-radius:0 10px 10px 0; color:var(--navy); break-inside:avoid; }
blockquote p:last-child { margin:0; }
table { width:100%; border-collapse:separate; border-spacing:0; border:1px solid var(--line); border-radius:10px;
        overflow:hidden; margin:4px 0 14px; font-size:8.6pt; line-height:1.5; }
thead th { background:var(--tint); color:var(--navy); font-weight:600; text-align:left; padding:7px 10px; }
td { padding:7px 10px; border-top:1px solid var(--line); vertical-align:top; }
tbody tr:nth-child(even) td { background:#fafcfc; }
tr { break-inside:avoid; }
del { color:#8a99a3; }
`;

const md = new Marked({ gfm: true });

function render(markdown) {
  let html = md.parse(markdown);
  // Color swatch before every inline code that is a hex color
  html = html.replace(/<code>(#[0-9a-fA-F]{6})<\/code>/g, '<code class="hex"><span class="swatch" style="background:$1"></span>$1</code>');
  return html;
}

function chapter(markdown, lang, isIntro) {
  const m = markdown.match(/^# (.+)$/m);
  const title = isIntro ? m[1] : m[1].replace(/^\d+\.\s*/, "");
  const body = markdown.replace(/^# .+\n+/m, "");
  const subtitle = `${isIntro ? lang.introSubtitle : lang.chapterSubtitle} · ${lang.updated}`;
  return `<section class="chapter"><div class="banner"><p class="eyebrow">PARENT GUIDANCE · DESIGN SYSTEM</p>` +
    `<h1>${title}</h1><p class="subtitle">${subtitle}</p></div>${render(body)}</section>`;
}

const footer = (label) =>
  `<div style="width:100%;font-family:Poppins,sans-serif;font-size:6.5pt;color:#435766;padding:0 17mm;` +
  `display:flex;justify-content:space-between;"><span>${label}</span>` +
  `<span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>`;

const browser = await chromium.launch({ executablePath: chromePath });
const page = await browser.newPage();
const work = mkdtempSync(join(tmpdir(), "pg-pdf-"));

async function toPdf(sections, outFile, footerLabel) {
  const htmlFile = join(work, "doc.html");
  writeFileSync(htmlFile, `<!doctype html><html><head><meta charset="utf-8"><style>${CSS}</style></head><body>${sections}</body></html>`);
  await page.goto(pathToFileURL(htmlFile).href);
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({
    path: outFile, format: "A4", printBackground: true, displayHeaderFooter: true,
    headerTemplate: "<span></span>", footerTemplate: footer(footerLabel),
    margin: { top: "16mm", bottom: "18mm", left: "17mm", right: "17mm" },
  });
  console.log("wrote", outFile);
}

for (const lang of Object.values(LANGS)) {
  const all = [];
  for (const [i, [src, name]] of lang.files.entries()) {
    const markdown = readFileSync(join(lang.dir, src), "utf8");
    const section = chapter(markdown, lang, i === 0);
    all.push(section);
    const title = markdown.match(/^# (.+)$/m)[1];
    const label = i === 0 ? lang.footer : `Parent Guidance · ${title.replace(/\.\s*/, " · ")}`;
    await toPdf(section, join(lang.out, `${name}.pdf`), label);
  }
  await toPdf(all.join(""), join(lang.out, `${lang.complete}.pdf`), lang.footer);
}

await browser.close();
