#!/usr/bin/env node
/* Keeps the system docs and the code in step:
 *  1. every `docs/system/…` path mentioned in src/ exists;
 *  2. every relative Markdown link inside docs/system/ and the root docs points to an existing file;
 *  3. every component in src/components/{ui,cards,patterns} and every section in src/sections is mentioned
 *     in docs/system (so new building blocks get documented).
 * Run with `pnpm check:docs`. Exits 1 on any problem. */
import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import { join, dirname, relative, basename } from "node:path";

const root = process.cwd();
const problems = [];

function walk(dir, ext, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) walk(p, ext, out);
    else if (ext.some((e) => entry.name.endsWith(e))) out.push(p);
  }
  return out;
}

// 1. docs/system paths referenced from code
for (const file of walk(join(root, "src"), [".ts", ".tsx", ".css"])) {
  const text = readFileSync(file, "utf8");
  for (const m of text.matchAll(/docs\/system\/[A-Za-z0-9/._-]*[A-Za-z0-9/_-]/g)) {
    const target = m[0].replace(/\.$/, "");
    const path = join(root, target);
    if (!existsSync(path)) problems.push(`${relative(root, file)}: references missing ${target}`);
  }
}

// 2. relative links in Markdown
const mdFiles = [...walk(join(root, "docs/system"), [".md"]), ...["DESIGN.md", "AGENTS.md", "CONTRIBUTING.md", "README.md"].map((f) => join(root, f)).filter(existsSync)];
for (const file of mdFiles) {
  const text = readFileSync(file, "utf8");
  for (const m of text.matchAll(/\]\(([^)\s]+)\)/g)) {
    const href = m[1];
    if (/^(https?:|mailto:|#)/.test(href)) continue;
    const target = join(dirname(file), href.split("#")[0]);
    if (!existsSync(target)) problems.push(`${relative(root, file)}: broken link ${href}`);
  }
}

// 3. every building block is documented somewhere in docs/system
const docsText = walk(join(root, "docs/system"), [".md"]).map((f) => readFileSync(f, "utf8")).join("\n");
const blocks = [
  ...["ui", "cards", "patterns", "layout"].flatMap((d) => walk(join(root, "src/components", d), [".tsx"])),
  ...walk(join(root, "src/sections"), [".tsx"]),
].filter((f) => !f.endsWith(".test.tsx") && !f.endsWith(".stories.tsx"));
for (const file of blocks) {
  const name = basename(file, ".tsx");
  if (name === "icons") continue;
  if (!docsText.includes(name)) problems.push(`${relative(root, file)}: "${name}" is not documented in docs/system`);
}

if (problems.length) {
  console.error(`Docs check failed (${problems.length}):\n  ` + problems.join("\n  "));
  process.exit(1);
}
console.log(`Docs OK — ${mdFiles.length} Markdown files, ${blocks.length} components and sections documented.`);
