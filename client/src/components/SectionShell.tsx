import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const toneClass = {
  /** Fundo semitransparente para o canvas 3D fixo aparecer por trás. */
  default: "bg-background/78 backdrop-blur-md supports-[backdrop-filter]:bg-background/65",
  muted: "bg-card/25 backdrop-blur-md supports-[backdrop-filter]:bg-card/18",
  band: "border-y border-border bg-card/22 backdrop-blur-md supports-[backdrop-filter]:bg-card/15",
} as const;

const spacingClass = {
  default: "py-16 md:py-28 lg:py-32",
  compact: "py-12 md:py-16",
} as const;

export type SectionTone = keyof typeof toneClass;
export type SectionSpacing = keyof typeof spacingClass;
export type SectionContainerMax = "7xl" | "3xl";

type SectionShellProps = {
  id?: string;
  "aria-labelledby"?: string;
  tone?: SectionTone;
  spacing?: SectionSpacing;
  containerMax?: SectionContainerMax;
  className?: string;
  children: ReactNode;
};

export function SectionShell({
  id,
  "aria-labelledby": ariaLabelledBy,
  tone = "default",
  spacing = "default",
  containerMax = "7xl",
  className,
  children,
}: SectionShellProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn(
        "w-full scroll-mt-[calc(6rem+env(safe-area-inset-top,0px))] px-4 md:scroll-mt-[calc(7rem+env(safe-area-inset-top,0px))] md:px-10",
        spacingClass[spacing],
        toneClass[tone],
        className
      )}
    >
      <div
        className={cn(
          "mx-auto",
          containerMax === "3xl" ? "max-w-3xl" : "max-w-7xl"
        )}
      >
        {children}
      </div>
    </section>
  );
}

type SectionHeaderProps = {
  titleId: string;
  title: ReactNode;
  subtitle?: ReactNode;
  /** Largura máxima só do subtítulo (ex.: tagline mais estreita no Arsenal). */
  subtitleMaxWidth?: "2xl" | "3xl";
  className?: string;
};

export function SectionHeader({
  titleId,
  title,
  subtitle,
  subtitleMaxWidth = "3xl",
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-10 text-center md:mb-16", className)}>
      <h2
        id={titleId}
        className="mx-auto mb-4 max-w-5xl text-balance text-3xl font-bold leading-tight text-foreground md:mb-6 md:text-5xl xl:text-6xl"
      >
        {title}
      </h2>
      {subtitle != null ? (
        <p
          className={cn(
            "mx-auto text-balance text-lg font-medium text-muted-foreground md:text-xl",
            subtitleMaxWidth === "2xl" ? "max-w-2xl" : "max-w-3xl"
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
