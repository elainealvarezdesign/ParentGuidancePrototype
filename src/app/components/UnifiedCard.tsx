import { Link } from "react-router";
import { buttonClass } from "./Button";

type UnifiedCardProps = {
  image: string;
  imageAlt: string;
  imageFit?: "cover" | "contain";
  imageSize?: "default" | "small";
  
  badge?: string;
  avatar?: string;
  title: string;
  description?: string;
  metadata?: string;
  footer?: string;
  buttonLabel: string;
  /** External link, opens in a new tab */
  href?: string;
  /** In-app route */
  to?: string;
  onClick?: () => void;
};

export default function UnifiedCard({
  image,
  imageAlt,
  imageFit = "cover",
  imageSize = "default",
  badge,
  avatar,
  title,
  description,
  metadata,
  footer,
  buttonLabel,
  href,
  to,
  onClick,
}: UnifiedCardProps) {
  const buttonClasses = buttonClass({ className: "w-full" });

  const buttonContent = (
    <>
      <span>{buttonLabel}</span>
      <span aria-hidden="true">→</span>
    </>
  );

  return (
    <article className="bg-white rounded-pg-xl overflow-hidden border border-pg-line shadow-pg-card flex flex-col h-full">
      <div className={`relative h-[150px] overflow-hidden ${imageFit === "contain" ? "bg-white" : "bg-pg-tint-soft"}`}>
        <img
          src={image}
          alt={imageAlt}
          className={`w-full h-full ${
            imageFit === "contain"
              ? `object-contain ${imageSize === "small" ? "p-10" : "p-8"}`
              : "object-cover"
          }`}
        />

        {badge && (
          <span className="absolute top-3 left-3 bg-pg-navy text-white rounded-full px-3 py-1 text-xs font-semibold">
            {badge}
          </span>
        )}

        {avatar && (
          <span className="absolute bottom-3 left-3 w-8 h-8 rounded-full bg-pg-sage border-2 border-white flex items-center justify-center text-pg-navy text-xs font-semibold">
            {avatar}
          </span>
        )}
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-pg-navy text-base leading-[1.4] min-h-[44px]">
          {title}
        </h3>

        {description && (
          <p className="text-pg-slate text-xs leading-relaxed mt-2">
            {description}
          </p>
        )}

        {metadata && (
          <p className="text-pg-teal-dark text-xs mt-2">
            {metadata}
          </p>
        )}

        <div className="mt-auto pt-4">
          {to ? (
            <Link to={to} className={buttonClasses}>
              {buttonContent}
            </Link>
          ) : href ? (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className={buttonClasses}
            >
              {buttonContent}
            </a>
          ) : (
            <button
              type="button"
              onClick={onClick}
              className={buttonClasses}
            >
              {buttonContent}
            </button>
          )}

          {footer && (
            <p className="text-pg-slate text-xs text-center mt-3">
              {footer}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}