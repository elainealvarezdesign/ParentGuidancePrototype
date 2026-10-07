import { cn } from "@/lib/cn";

/* Avatar (docs/system/components/avatar.md). Initials on a sage circle; decorative by default because the
 * person's name is always written next to it. Sizes match Figma Semantic: Sizing → Avatar. */

const sizes = {
  xs: "h-7 w-7 text-[10px]",
  s: "h-8 w-8 text-xs",
  m: "h-9 w-9 text-xs",
  l: "h-12 w-12 text-sm",
  xl: "h-16 w-16 text-base",
} as const; // design-rules-ignore

export type AvatarProps = {
  /** Full name; initials are derived from it. */
  name: string;
  size?: keyof typeof sizes;
  /** Photo URL; initials are shown when missing. */
  photo?: string;
  /** White ring, for avatars placed on photos. */
  ring?: boolean;
  className?: string;
};

export const initials = (name: string) =>
  name
    .replace(/^(Dr|Mr|Mrs|Ms)\.?\s+/i, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join("");

export function Avatar({ name, size = "m", photo, ring, className }: AvatarProps) {
  if (photo)
    return (
      <img
        src={photo}
        alt=""
        className={cn(
          "shrink-0 rounded-full object-cover",
          sizes[size],
          ring && "border-2 border-white shadow-pg-card",
          className,
        )}
      />
    );
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-grid shrink-0 place-items-center rounded-full bg-pg-sage font-bold text-pg-navy",
        sizes[size],
        ring && "border-2 border-white shadow-pg-card",
        className,
      )}
    >
      {initials(name)}
    </span>
  );
}

/** Avatar + name + credential, the "Instructor Line" pattern. */
export function PersonLine({
  name,
  role,
  size = "m",
  tone = "default",
}: {
  name: string;
  role?: string;
  size?: AvatarProps["size"];
  tone?: "default" | "inverse";
}) {
  return (
    <span className="flex items-center gap-3">
      <Avatar name={name} size={size} />
      <span className="flex flex-col">
        <span className={cn("text-sm font-semibold", tone === "inverse" ? "text-white" : "text-pg-teal-dark")}>
          {name}
        </span>
        {role && (
          <span className={cn("text-xs", tone === "inverse" ? "text-white/80" : "text-pg-teal-dark")}>{role}</span>
        )}
      </span>
    </span>
  );
}
