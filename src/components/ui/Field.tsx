import { createContext, forwardRef, useContext, useId, type ComponentPropsWithoutRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { AlertCircle, ChevronDown } from "./icons";

/* Form fields (docs/system/components/field.md).
 * <Field> owns the label, hint and error and wires them to the control it wraps through context, so every
 * control gets `id`, `aria-describedby` and `aria-invalid` without repeating ids by hand:
 *
 *   <Field label="Email" required error={errors.email}>
 *     <TextInput type="email" value={email} onChange={…} />
 *   </Field>
 */

type FieldContextValue = { id: string; describedBy?: string; invalid: boolean; required: boolean };
const FieldContext = createContext<FieldContextValue | null>(null);

/** Props a control reads from the surrounding <Field> (id, described-by, invalid, required). */
function useFieldProps(props: { id?: string; "aria-describedby"?: string; required?: boolean }) {
  const field = useContext(FieldContext);
  if (!field) return props;
  return {
    id: props.id ?? field.id,
    "aria-describedby": cn(field.describedBy, props["aria-describedby"]) || undefined,
    "aria-invalid": field.invalid || undefined,
    required: props.required ?? field.required,
  };
}

export type FieldProps = {
  label: ReactNode;
  children: ReactNode;
  /** Helper text under the label. */
  hint?: ReactNode;
  /** Error message; marks the control invalid and is announced with it. */
  error?: ReactNode;
  required?: boolean;
  /** Hide the label visually (it stays available to screen readers). Use only when the context labels it. */
  hideLabel?: boolean;
  /** Theme for the label and messages: "inverse" on navy/teal surfaces, "on-sage" on sage bands. */
  tone?: "default" | "inverse" | "on-sage";
  id?: string;
  className?: string;
};

export function Field({
  label,
  children,
  hint,
  error,
  required = false,
  hideLabel,
  tone = "default",
  id,
  className,
}: FieldProps) {
  const autoId = useId();
  const controlId = id ?? `field-${autoId}`;
  const hintId = hint ? `${controlId}-hint` : undefined;
  const errorId = error ? `${controlId}-error` : undefined;
  const inverse = tone === "inverse";

  return (
    <FieldContext.Provider
      value={{ id: controlId, describedBy: cn(hintId, errorId) || undefined, invalid: !!error, required }}
    >
      <div className={cn("flex flex-col gap-2", className)}>
        <label
          htmlFor={controlId}
          className={cn("text-sm font-semibold", inverse ? "text-white" : "text-pg-navy", hideLabel && "sr-only")}
        >
          {label}
          {required && (
            <span className={inverse ? "text-pg-sage" : "text-pg-teal-dark"} aria-hidden="true">
              {" "}
              *
            </span>
          )}
        </label>
        {hint && (
          <p id={hintId} className={cn("-mt-1 text-xs", inverse ? "text-white/80" : "text-pg-slate")}>
            {hint}
          </p>
        )}
        {children}
        {error && (
          <p
            id={errorId}
            className={cn(
              "flex items-center gap-1 text-xs font-medium",
              inverse ? "text-white" : tone === "on-sage" ? "text-pg-navy" : "text-pg-error",
            )}
          >
            <AlertCircle size={14} aria-hidden="true" />
            {error}
          </p>
        )}
      </div>
    </FieldContext.Provider>
  );
}

const control =
  "w-full rounded-pg-md border bg-white px-4 text-sm text-pg-navy outline-none transition-colors duration-(--pg-dur-fast) " +
  "placeholder:text-pg-slate focus:border-pg-teal-dark aria-[invalid=true]:border-pg-error disabled:cursor-not-allowed disabled:bg-pg-cream-dark";

export const TextInput = forwardRef<HTMLInputElement, ComponentPropsWithoutRef<"input">>(function TextInput(
  { className, ...props },
  ref,
) {
  const field = useFieldProps(props);
  return <input ref={ref} {...props} {...field} className={cn(control, "min-h-11 border-pg-line py-2", className)} />;
});

export const TextArea = forwardRef<HTMLTextAreaElement, ComponentPropsWithoutRef<"textarea">>(function TextArea(
  { className, rows = 4, ...props },
  ref,
) {
  const field = useFieldProps(props);
  return (
    <textarea
      ref={ref}
      rows={rows}
      {...props}
      {...field}
      className={cn(control, "resize-none border-pg-line py-3", className)}
    />
  );
});

export type SelectProps = Omit<ComponentPropsWithoutRef<"select">, "size"> & {
  /** "field" for forms, "compact" for toolbars (sort menus, filters). */
  size?: "field" | "compact";
};

/** Native select: full keyboard and screen-reader support for free (audit H07). */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { className, size = "field", children, ...props },
  ref,
) {
  const field = useFieldProps(props);
  return (
    <span className={cn("relative inline-flex", size === "field" && "w-full")}>
      <select
        ref={ref}
        {...props}
        {...field}
        className={cn(
          "w-full cursor-pointer appearance-none transition-colors duration-(--pg-dur-fast) outline-none",
          size === "field"
            ? cn(control, "min-h-11 border-pg-line py-2 pr-10")
            : "min-h-9 rounded-pg-md bg-pg-cream-dark py-2 pr-9 pl-4 text-xs font-medium text-pg-slate hover:bg-pg-tint",
          className,
        )}
      >
        {children}
      </select>
      <ChevronDown
        size={size === "field" ? 18 : 14}
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute top-1/2 -translate-y-1/2 text-pg-slate",
          size === "field" ? "right-3" : "right-3",
        )}
      />
    </span>
  );
});
