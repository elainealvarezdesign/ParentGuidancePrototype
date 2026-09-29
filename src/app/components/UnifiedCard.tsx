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
  href?: string;
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
  onClick,
}: UnifiedCardProps) {
  const buttonClasses =
    "w-full min-h-[40px] bg-[#59797D] hover:bg-[#406064] text-white rounded-[8px] px-5 py-2 flex items-center justify-center gap-2 font-['Poppins',sans-serif] text-sm font-semibold transition-colors";

  const buttonContent = (
    <>
      <span>{buttonLabel}</span>
      <span aria-hidden="true">→</span>
    </>
  );

  return (
    <article className="bg-white rounded-[16px] overflow-hidden border border-[#dee8e9] shadow-[0_8px_24px_rgba(28,50,67,0.06)] flex flex-col h-full">
      <div className="relative h-[150px] bg-[#F7F7F7] overflow-hidden">
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
          <span className="absolute top-3 left-3 bg-[#1C3243] text-white rounded-full px-3 py-1 font-['Poppins',sans-serif] text-[10px] font-semibold">
            {badge}
          </span>
        )}

        {avatar && (
          <span className="absolute bottom-3 left-3 w-8 h-8 rounded-full bg-[#90B3B6] border-2 border-white flex items-center justify-center font-['Poppins',sans-serif] text-white text-[10px] font-semibold">
            {avatar}
          </span>
        )}
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-['Poppins',sans-serif] font-bold text-[#1C3243] text-base leading-[1.4] min-h-[44px]">
          {title}
        </h3>

        {description && (
          <p className="font-['Poppins',sans-serif] text-[#435766] text-xs leading-relaxed mt-2">
            {description}
          </p>
        )}

        {metadata && (
          <p className="font-['Poppins',sans-serif] text-[#90B3B6] text-xs mt-2">
            {metadata}
          </p>
        )}

        <div className="mt-auto pt-4">
          {href ? (
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
            <p className="font-['Poppins',sans-serif] text-[#9AA4AC] text-[11px] text-center mt-3">
              {footer}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}