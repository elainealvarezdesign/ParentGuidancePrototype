import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import type { Title } from "@/content/types";
import { Button } from "@/components/ui/Button";
import { Field, Select } from "@/components/ui/Field";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import { DURATION, EASE_OUT } from "@/lib/motion";

/* SchoolGate (docs/system/sections/school-gate.md). Full-height first step of a page that depends on where the
 * family lives: a form with two linked selects (state, then district) and Continue on the left, layered
 * artwork on a sage block on the right. Clears the fixed navbar. Calls onSubmit(state, district). */

export type SchoolGateContent = {
  eyebrow: string;
  title: Title;
  /** Line under the title with one link, e.g. "Don't see your state? Get in touch." */
  help: { text: string; linkLabel: string; to: string };
  /** Layered artwork: base and frame are decorative, the photo carries the alt text. */
  images: { base: string; frame: string; photo: { src: string; alt: string } };
  state: { label: string; placeholder: string };
  district: { label: string; placeholder: string };
  submitLabel: string;
};

export type SchoolGateProps = {
  content: SchoolGateContent;
  states: readonly string[];
  /** Districts per state; states without an entry use `defaultDistricts`. */
  districtsByState: Record<string, string[]>;
  defaultDistricts: string[];
  onSubmit: (state: string, district: string) => void;
};

export function SchoolGate({ content, states, districtsByState, defaultDistricts, onSubmit }: SchoolGateProps) {
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const districts = state ? (districtsByState[state] ?? defaultDistricts) : [];
  const { eyebrow, title, help, images } = content;

  return (
    <section className="mt-14 flex min-h-[calc(100vh-56px)] flex-col overflow-hidden lg:flex-row">
      <div className="relative z-10 flex w-full flex-col justify-center px-6 pt-10 pb-10 md:px-10 lg:w-[52%] lg:px-20 lg:py-20">
        <motion.form
          className="flex max-w-md flex-col gap-8"
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: DURATION.reveal, ease: EASE_OUT }}
          onSubmit={(e) => {
            e.preventDefault();
            if (state && district) onSubmit(state, district);
          }}
        >
          <Eyebrow size="large" tone="teal" className="text-sm">
            {eyebrow}
          </Eyebrow>
          <h1 className="text-pg-h1 text-pg-navy">
            {title.text}
            <em className="text-pg-teal-dark italic">{title.highlight}</em>
            {title.after}
          </h1>
          <p className="text-base text-pg-slate">
            {help.text}{" "}
            <Link to={help.to} className="text-pg-teal-dark underline hover:text-pg-navy">
              {help.linkLabel}
            </Link>
          </p>
          <div className="flex flex-col gap-4">
            <Field label={content.state.label} hideLabel>
              <Select
                value={state}
                onChange={(e) => {
                  setState(e.target.value);
                  setDistrict("");
                }}
                className={cn(
                  "min-h-14 rounded-pg-xl border-0 px-5 shadow-pg-card",
                  state ? "bg-pg-teal-dark text-white" : "bg-pg-sage text-pg-navy",
                )}
              >
                <option value="" disabled>
                  {content.state.placeholder}
                </option>
                {states.map((s) => (
                  <option key={s} value={s} className="bg-pg-cream text-pg-navy">
                    {s}
                  </option>
                ))}
              </Select>
            </Field>
            <Field label={content.district.label} hideLabel>
              <Select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                disabled={!state}
                className="min-h-14 rounded-pg-xl px-5 shadow-pg-card disabled:opacity-60"
              >
                <option value="" disabled>
                  {content.district.placeholder}
                </option>
                {districts.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </Select>
            </Field>
            <Button type="submit" size="l" disabled={!state || !district}>
              {content.submitLabel}
            </Button>
          </div>
        </motion.form>
      </div>
      <div className="relative flex min-h-85 w-full items-center justify-center overflow-hidden sm:min-h-105 lg:min-h-0 lg:w-[48%]">
        <div
          className="absolute -right-20 -bottom-20 h-[85%] w-[110%] rounded-tl-pg-2xl bg-pg-sage"
          aria-hidden="true"
        />
        <motion.div
          className="relative z-10 h-[72%] w-3/4 overflow-hidden rounded-pg-2xl shadow-pg-overlay max-lg:my-10 max-lg:aspect-[4/3] max-lg:h-auto"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: DURATION.reveal, delay: 0.15, ease: EASE_OUT }}
        >
          <img src={images.base} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <img src={images.frame} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <img src={images.photo.src} alt={images.photo.alt} className="relative h-full w-full object-cover" />
        </motion.div>
      </div>
    </section>
  );
}
