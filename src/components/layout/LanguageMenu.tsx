import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/cn";
import { languages } from "@/content/site";
import { ChevronDown } from "@/components/ui/icons";
import { DURATION } from "@/lib/motion";

/* Language menu (navbar). A disclosure button + list of buttons: closes on outside click, Escape and
 * selection, and returns focus to the trigger (audit L03). UI only until translations exist. */

export function LanguageMenu({ align = "right" }: { align?: "left" | "right" }) {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState<string>(languages[0]);
  const ref = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={`Language: ${language}`}
        className="group flex min-h-9 items-center gap-1 rounded-pg-sm text-xs font-medium text-pg-sage"
      >
        {language}
        <ChevronDown
          size={14}
          aria-hidden="true"
          className={cn("transition-transform", open ? "rotate-180" : "group-hover:translate-y-0.5")}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            id={menuId}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: DURATION.micro }}
            className={cn(
              "absolute top-10 z-50 min-w-40 overflow-hidden rounded-pg-lg border border-pg-line bg-white py-2 shadow-pg-card-hover",
              align === "right" ? "right-0" : "left-0",
            )}
          >
            {languages
              .filter((l) => l !== language)
              .map((l) => (
                <li key={l}>
                  <button
                    type="button"
                    onClick={() => {
                      setLanguage(l);
                      setOpen(false);
                      triggerRef.current?.focus();
                    }}
                    className="block w-full px-5 py-2 text-left text-sm text-pg-navy transition-colors hover:bg-pg-cream hover:text-pg-teal-dark"
                  >
                    {l}
                  </button>
                </li>
              ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
