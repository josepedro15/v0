import { ctaFinal, getContactHref, getContactAnchorProps } from "@/content/v0";
import { SectionShell } from "@/components/SectionShell";
import { ctaInverseOnPrimary } from "@/lib/landingStyles";
import { cn } from "@/lib/utils";

export default function CTAFinalSection() {
  const contactHref = getContactHref();
  const contactAnchorProps = getContactAnchorProps();

  return (
    <SectionShell
      id="contato"
      aria-labelledby="cta-final-titulo"
      spacing="compact"
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-xl border border-white/20 px-6 py-10 text-primary-foreground sm:px-10 sm:py-12 md:p-16 lg:p-20",
          "bg-primary/35 shadow-[0_8px_48px_rgba(0,0,0,0.45)] backdrop-blur-xl backdrop-saturate-150",
          "ring-1 ring-inset ring-white/10 supports-[backdrop-filter]:bg-primary/25",
          "transition-[box-shadow,background-color] duration-300 hover:border-white/25 hover:bg-primary/40 hover:shadow-[0_12px_56px_rgba(0,0,0,0.5)] hover:supports-[backdrop-filter]:bg-primary/32"
        )}
      >
        <div
          className="absolute -right-24 -top-24 size-96 rounded-full bg-red-400/20 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute -bottom-24 -left-24 size-96 rounded-full bg-red-950/30 blur-3xl"
          aria-hidden
        />

        <div className="relative z-10 flex flex-col items-center text-center">
          <h2
            id="cta-final-titulo"
            className="mb-8 text-4xl font-bold leading-tight text-primary-foreground md:mb-12 md:text-5xl xl:text-6xl"
          >
            {ctaFinal.title}
          </h2>

          <a href={contactHref} className={ctaInverseOnPrimary} {...contactAnchorProps}>
            {ctaFinal.buttonLabel}
          </a>

          <p className="mt-8 max-w-2xl text-base font-medium text-primary-foreground/80 md:mt-10 md:text-lg">
            {ctaFinal.subtext}
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
