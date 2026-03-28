import { trustSection } from "@/content/v0";
import { SectionHeader, SectionShell } from "@/components/SectionShell";
import { cardSolid, landingCardBody, landingCardTitle } from "@/lib/landingStyles";
import { cn } from "@/lib/utils";

export default function TrustSection() {
  return (
    <SectionShell id="confianca" aria-labelledby="confianca-titulo" tone="muted">
      <SectionHeader
        titleId="confianca-titulo"
        title={trustSection.title}
        subtitle={trustSection.subtitle}
      />

      <div className="mb-14 grid grid-cols-1 gap-8 md:mb-20 md:grid-cols-3 md:gap-10">
        {trustSection.pillars.map((p) => (
          <div key={p.title} className={cn(cardSolid, "bg-background/80 p-6 md:p-8")}>
            <h3 className={cn(landingCardTitle, "mb-3")}>{p.title}</h3>
            <p className={landingCardBody}>{p.body}</p>
          </div>
        ))}
      </div>

      <div>
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Contextos onde operamos (exemplos)
        </p>
        <div className="flex flex-wrap gap-3">
          {trustSection.logoPlaceholders.map((name) => (
            <span
              key={name}
              className="rounded-md border border-border bg-secondary/50 px-4 py-2 font-mono text-sm text-muted-foreground"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
