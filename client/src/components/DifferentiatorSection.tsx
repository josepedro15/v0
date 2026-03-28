import { Crosshair } from "lucide-react";
import { differentiatorSection } from "@/content/v0";
import { SectionHeader, SectionShell } from "@/components/SectionShell";
import { cardSolid, landingCardTitle } from "@/lib/landingStyles";
import { cn } from "@/lib/utils";

export default function DifferentiatorSection() {
  return (
    <SectionShell id="diferencial" aria-labelledby="diferencial-titulo" tone="band">
      <SectionHeader
        titleId="diferencial-titulo"
        title={differentiatorSection.title}
        subtitle={differentiatorSection.subtitle}
      />

      <ul className="m-0 grid list-none grid-cols-1 gap-6 p-0 md:grid-cols-2 md:gap-8">
        {differentiatorSection.points.map((point) => (
          <li
            key={point.title}
            className={cn(cardSolid, "flex gap-4 bg-background/80 p-6 md:p-8")}
          >
            <div className="shrink-0 text-primary" aria-hidden>
              <Crosshair className="size-8" strokeWidth={1.75} />
            </div>
            <div>
              <h3 className={cn(landingCardTitle, "mb-2")}>{point.title}</h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                {point.body}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
