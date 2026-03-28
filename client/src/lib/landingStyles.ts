import { cn } from "@/lib/utils";

/** Foco visível — links e controlos compactos (header, footer, nav). */
export const focusRingCompact =
  "rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

/** Link de navegação desktop (header). */
export const landingNavLink = cn(
  "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
  focusRingCompact
);

/** Foco visível — CTAs grandes (hero, bloco final). */
export const focusRingLarge =
  "rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

/** CTA primário — barra de navegação. */
export const primaryCtaHeader = cn(
  "inline-flex items-center justify-center rounded-sm bg-primary px-4 py-2 text-sm font-bold uppercase tracking-wider text-primary-foreground",
  "transition-opacity hover:opacity-90",
  focusRingCompact
);

/** CTA primário — hero. */
export const primaryCtaHero = cn(
  "inline-flex items-center justify-center rounded-sm bg-primary px-8 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground md:text-base",
  "shadow-lg transition-all duration-200 hover:opacity-90 hover:shadow-xl hover:shadow-primary/50",
  focusRingLarge
);

/** Link secundário do hero (scroll para conteúdo). */
export const landingHeroScrollCue = cn(
  "pointer-events-auto mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white/90 transition-colors hover:text-white md:text-base",
  focusRingLarge
);

/** CTA sobre fundo primary (contraste invertido). Sem scale no hover. */
export const ctaInverseOnPrimary = cn(
  "inline-flex items-center justify-center rounded-sm bg-foreground font-bold uppercase tracking-wider text-background",
  "px-10 py-4 text-lg shadow-2xl transition-all duration-300 hover:bg-foreground/90 hover:shadow-black/50 md:px-14 md:py-5 md:text-xl",
  focusRingLarge
);

/** Card sólido — problema, diferencial, confiança. */
export const cardSolid = cn(
  "rounded-xl border border-border bg-card/80 transition-all duration-300",
  "hover:border-primary/25 hover:shadow-lg hover:shadow-black/40"
);

/** Card glass — arsenal; usa tokens do tema. */
export const cardGlass = cn(
  "rounded-xl border border-border/60 bg-card/25 shadow-[0_8px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl backdrop-saturate-150 transition-all duration-300",
  "ring-1 ring-inset ring-white/5 supports-[backdrop-filter]:bg-card/20",
  "hover:border-primary/35 hover:bg-card/40 hover:shadow-[0_12px_48px_rgba(0,0,0,0.55)] hover:supports-[backdrop-filter]:bg-card/30"
);

/** Título de card / bloco (h3) na landing. */
export const landingCardTitle = "text-lg font-bold text-foreground md:text-xl";

/** Corpo de texto em cards. */
export const landingCardBody = "text-base leading-relaxed text-muted-foreground md:text-lg";
