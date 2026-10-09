#!/usr/bin/env node
/* Validates the Figma variables export (docs/tokens/parent-guidance.tokens.json), audit M07:
 *  - it is the canonical, complete export (EXPECTED tokens; the older 464-token snapshot is retired);
 *  - every alias ({Group.Token}) resolves;
 *  - every color of the code tokens (tokens/pg.tokens.json, the source of truth) exists in Figma;
 *  - every code color role resolves to the same value as the Figma role variable it names.
 * Run with `pnpm check:tokens`. */
import { readFileSync } from "node:fs";

const EXPECTED = 479;
const figma = JSON.parse(readFileSync("docs/tokens/parent-guidance.tokens.json", "utf8"));
const code = JSON.parse(readFileSync("tokens/pg.tokens.json", "utf8"));

const tokens = new Map();
(function walk(node, path) {
  if (node && typeof node === "object") {
    if ("$value" in node) return void tokens.set(path.join("."), node);
    for (const [k, v] of Object.entries(node)) if (!k.startsWith("$")) walk(v, [...path, k]);
  }
})(figma, []);

const problems = [];
if (tokens.size !== EXPECTED) problems.push(`expected ${EXPECTED} tokens in the Figma export, found ${tokens.size}`);

const refs = (v) =>
  typeof v === "string"
    ? [...v.matchAll(/\{([^}]+)\}/g)].map((m) => m[1])
    : typeof v === "object" && v
      ? Object.values(v).flatMap(refs)
      : [];
for (const [name, t] of tokens) {
  for (const r of refs(t.$value)) if (!tokens.has(r)) problems.push(`${name} → unresolved {${r}}`);
  for (const mode of Object.values(t.$extensions?.["figma.modes"] ?? {}))
    for (const r of refs(mode)) if (!tokens.has(r)) problems.push(`${name} (mode) → unresolved {${r}}`);
}

const figmaValues = new Set([...tokens.values()].map((t) => String(t.$value).toLowerCase()));
for (const [name, t] of Object.entries(code.color)) {
  if (name.startsWith("$")) continue;
  if (!figmaValues.has(String(t.$value).toLowerCase()))
    problems.push(`code color ${name} ${t.$value} is missing from the Figma export`);
}

// Color roles: code role → palette color must equal the Figma role variable (aliases followed to a value).
const resolve = (value, depth = 0) => {
  const m = typeof value === "string" && value.match(/^\{([^}]+)\}$/);
  if (!m || depth > 10) return value;
  const t = tokens.get(m[1]);
  return t ? resolve(t.$value, depth + 1) : value;
};
let roleCount = 0;
for (const [group, roles] of Object.entries(code.role ?? {})) {
  if (group.startsWith("$")) continue;
  for (const [name, r] of Object.entries(roles)) {
    if (name.startsWith("$")) continue;
    roleCount++;
    const color = r.$value.match(/^\{color\.([\w-]+)\}$/)?.[1];
    const codeValue = code.color[color]?.$value;
    const figmaPath = r.$extensions?.figma?.replace(/\//g, ".");
    const figmaValue = figmaPath && resolve(`{${figmaPath}}`);
    if (!codeValue) problems.push(`role.${group}.${name}: ${r.$value} is not a code color`);
    else if (!figmaPath || !tokens.has(figmaPath))
      problems.push(`role.${group}.${name}: Figma variable "${r.$extensions?.figma}" not found`);
    else if (String(figmaValue).toLowerCase() !== codeValue.toLowerCase())
      problems.push(`role.${group}.${name}: code ${codeValue} ≠ Figma ${figmaValue} (${r.$extensions.figma})`);
  }
}

if (problems.length) {
  console.error(`Token export check failed (${problems.length}):\n  ` + problems.join("\n  "));
  process.exit(1);
}
console.log(
  `Token export OK — ${tokens.size} Figma tokens, all aliases resolve, all ${Object.keys(code.color).filter((k) => !k.startsWith("$")).length} code colors present, ${roleCount} color roles match Figma.`,
);
