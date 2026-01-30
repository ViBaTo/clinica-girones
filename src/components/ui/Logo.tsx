import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, size = "md" }: LogoProps) {
  const sizes = {
    sm: { height: 40, width: 56 },
    md: { height: 56, width: 79 },
    lg: { height: 80, width: 113 },
  };

  const sizeClasses = {
    sm: "h-10",
    md: "h-14",
    lg: "h-20",
  };

  return (
    <Image
      src="/clinica-girones-logo.svg"
      alt="Clínica Gironés"
      width={sizes[size].width}
      height={sizes[size].height}
      className={cn(sizeClasses[size], "w-auto", className)}
      priority
    />
  );
}
