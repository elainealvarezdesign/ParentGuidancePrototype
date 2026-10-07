import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/* Merges class names and resolves Tailwind conflicts (later wins). The semantic type scale
 * (text-pg-h1 …) is registered as font sizes so it is not mistaken for a text color. */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ "text-pg": ["display", "h1", "h2", "h3", "h4", "body-lg", "body", "small", "eyebrow"] }],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
