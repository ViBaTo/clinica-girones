import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "full" | "icon";
}

export function Logo({ className, size = "md", variant = "full" }: LogoProps) {
  const sizes = {
    sm: variant === "full" ? "h-10" : "h-10 w-10",
    md: variant === "full" ? "h-14" : "h-14 w-14",
    lg: variant === "full" ? "h-20" : "h-20 w-20",
  };

  if (variant === "icon") {
    return (
      <svg
        viewBox="0 0 200 400"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(sizes[size], className)}
        aria-label="Clínica Gironés"
      >
        <path
          className="fill-none stroke-current stroke-[6]"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 85,80 C 75,60 90,50 100,65 C 100,45 120,40 130,55 C 135,35 155,30 165,50 C 170,30 195,35 190,65 C 190,75 180,80 170,82"
        />
        <path
          className="fill-none stroke-current stroke-[12]"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 175,85 C 100,75 60,100 60,170 C 60,230 110,240 150,225"
        />
        <path
          className="fill-none stroke-current stroke-[12]"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 140,245 C 80,245 70,300 90,340 C 110,380 170,370 185,330"
        />
        <line
          x1="130"
          y1="310"
          x2="160"
          y2="310"
          className="fill-none stroke-current stroke-[10]"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(sizes[size], "w-auto", className)}
      aria-label="Clínica Gironés"
    >
      <path
        className="fill-none stroke-current stroke-[6]"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 85,80 C 75,60 90,50 100,65 C 100,45 120,40 130,55 C 135,35 155,30 165,50 C 170,30 195,35 190,65 C 190,75 180,80 170,82"
      />
      <path
        className="fill-none stroke-current stroke-[12]"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 175,85 C 100,75 60,100 60,170 C 60,230 110,240 150,225"
      />
      <path
        className="fill-none stroke-current stroke-[12]"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 140,245 C 80,245 70,300 90,340 C 110,380 170,370 185,330"
      />
      <line
        x1="130"
        y1="310"
        x2="160"
        y2="310"
        className="fill-none stroke-current stroke-[10]"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x="160"
        y="190"
        className="fill-current font-bold"
        style={{
          fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Arial Rounded MT Bold', sans-serif",
          fontSize: "70px",
        }}
      >
        línica
      </text>
      <text
        x="170"
        y="325"
        className="fill-current font-bold"
        style={{
          fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Arial Rounded MT Bold', sans-serif",
          fontSize: "70px",
        }}
      >
        ironés
      </text>
    </svg>
  );
}
