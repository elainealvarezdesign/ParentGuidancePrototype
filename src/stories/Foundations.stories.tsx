import type { Meta, StoryObj } from "@storybook/react-vite";
import tokens from "../../tokens/pg.tokens.json";

/* Foundations rendered straight from tokens/pg.tokens.json, so this page always matches the code.
 * Guidance: docs/system/foundations.md. */

type Tok = { $value: string; $description?: string };
const entries = (group: Record<string, unknown>) =>
  Object.entries(group).filter(([k]) => !k.startsWith("$")) as [string, Tok][];

// Literal class names so Tailwind generates them (it does not see dynamically built names).
const typeClass: Record<string, string> = {
  display: "text-pg-display",
  h1: "text-pg-h1",
  h2: "text-pg-h2",
  h3: "text-pg-h3",
  h4: "text-pg-h4",
  "body-lg": "text-pg-body-lg",
  body: "text-pg-body",
  small: "text-pg-small",
  eyebrow: "text-pg-eyebrow",
};
const radiusClass: Record<string, string> = {
  sm: "rounded-pg-sm",
  md: "rounded-pg-md",
  lg: "rounded-pg-lg",
  xl: "rounded-pg-xl",
  "2xl": "rounded-pg-2xl",
};
const shadowClass: Record<string, string> = {
  card: "shadow-pg-card",
  "card-hover": "shadow-pg-card-hover",
  overlay: "shadow-pg-overlay",
};

const meta: Meta = { title: "Foundations/Tokens", parameters: { layout: "padded" } };
export default meta;
type Story = StoryObj;

export const Colors: Story = {
  render: () => (
    <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {entries(tokens.color).map(([name, t]) => (
        <li key={name} className="overflow-hidden rounded-pg-lg border border-pg-line bg-white">
          <div className="h-16" style={{ background: `var(--pg-${name})` }} />
          <div className="p-3">
            <p className="text-sm font-semibold text-pg-navy">{name}</p>
            <p className="text-xs text-pg-slate">
              bg-pg-{name} · {t.$value}
            </p>
            {t.$description && <p className="mt-1 text-xs text-pg-slate">{t.$description}</p>}
          </div>
        </li>
      ))}
    </ul>
  ),
};

type RoleTok = { $value: string; $description?: string; $extensions?: { figma?: string } };

const roleEntries = (group: unknown) =>
  Object.entries(group as Record<string, RoleTok>).filter(([k]) => !k.startsWith("$"));

/** Color roles: what each color is for. Each swatch uses the role's CSS variable (--pg-role-…). */
export const ColorRoles: Story = {
  name: "Color roles",
  render: () => (
    <div className="flex flex-col gap-8">
      {Object.entries(tokens.role)
        .filter(([k]) => !k.startsWith("$"))
        .map(([group, roles]) => (
          <section key={group}>
            <h2 className="text-pg-h4 text-pg-navy">{group}</h2>
            <ul className="mt-3 grid grid-cols-2 gap-4 md:grid-cols-4">
              {roleEntries(roles).map(([name, t]) => (
                <li key={name} className="overflow-hidden rounded-pg-lg border border-pg-line bg-white">
                  <div className="h-12" style={{ background: `var(--pg-role-${group}-${name})` }} />
                  <div className="p-3">
                    <p className="text-sm font-semibold text-pg-navy">
                      {group}-{name}
                    </p>
                    <p className="text-xs text-pg-slate">
                      → {t.$value.replace(/[{}]/g, "")} · Figma {t.$extensions?.figma?.split("/").slice(1).join("/")}
                    </p>
                    {t.$description && <p className="mt-1 text-xs text-pg-slate">{t.$description}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
    </div>
  ),
};

type TextTok = {
  size: number;
  lineHeight: number;
  weight: number;
  md?: { size: number; lineHeight: number };
  $description?: string;
};

export const Typography: Story = {
  render: () => (
    <ul className="flex flex-col gap-6">
      {(Object.entries(tokens.text).filter(([k]) => !k.startsWith("$")) as [string, TextTok][]).map(([name, t]) => (
        <li key={name} className="grid gap-2 border-b border-pg-line pb-4 md:grid-cols-[220px_1fr]">
          <div>
            <p className="text-sm font-semibold text-pg-navy">text-pg-{name}</p>
            <p className="text-xs text-pg-slate">
              {t.size}/{t.lineHeight} · {t.weight}
              {t.md ? ` → md ${t.md.size}/${t.md.lineHeight}` : ""}
            </p>
            <p className="text-xs text-pg-slate">{t.$description}</p>
          </div>
          <p className={`${typeClass[name]} text-pg-navy`}>Find trusted guidance for your family</p>
        </li>
      ))}
    </ul>
  ),
};

export const RadiusAndShadow: Story = {
  name: "Radius & shadow",
  render: () => (
    <div className="flex flex-col gap-8">
      <ul className="flex flex-wrap gap-6">
        {entries(tokens.radius).map(([name, t]) => (
          <li key={name} className="text-center">
            <div className={`${radiusClass[name]} h-20 w-20 border border-pg-line bg-pg-tint`} />
            <p className="mt-2 text-xs text-pg-slate">
              rounded-pg-{name} · {t.$value}
            </p>
          </li>
        ))}
      </ul>
      <ul className="flex flex-wrap gap-8">
        {entries(tokens.shadow).map(([name, t]) => (
          <li key={name} className="text-center">
            <div className={`${shadowClass[name]} h-24 w-40 rounded-pg-xl bg-white`} />
            <p className="mt-3 text-xs text-pg-slate">shadow-pg-{name}</p>
            {t.$description && <p className="text-xs text-pg-slate">{t.$description}</p>}
          </li>
        ))}
      </ul>
    </div>
  ),
};

export const Spacing: Story = {
  render: () => (
    <ul className="flex flex-col gap-2">
      {[1, 2, 3, 4, 5, 6, 8, 10, 12, 14, 16, 20].map((n) => (
        <li key={n} className="flex items-center gap-4">
          <span className="w-16 text-xs text-pg-slate">
            {n} · {n * 4}px
          </span>
          <span className="h-3 rounded-pg-sm bg-pg-teal" style={{ width: n * 4 }} />
        </li>
      ))}
      <li className="mt-4 text-xs text-pg-slate">
        Tailwind 4px scale only; no half steps or arbitrary pixels (pnpm check:design).
      </li>
    </ul>
  ),
};

export const Motion: Story = {
  render: () => (
    <table className="text-left text-sm text-pg-navy">
      <tbody>
        {Object.entries(tokens.motion).map(([name, t]) => (
          <tr key={name} className="border-b border-pg-line">
            <td className="py-2 pr-6 font-semibold">{name}</td>
            <td className="py-2 pr-6">{JSON.stringify((t as { $value: unknown }).$value)}</td>
            <td className="py-2 text-xs text-pg-slate">{(t as Tok).$description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ),
};
