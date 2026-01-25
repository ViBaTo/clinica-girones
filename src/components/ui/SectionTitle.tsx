import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  description,
  align = "center",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {subtitle && (
        <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-neutral-600 text-lg max-w-2xl leading-relaxed",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
