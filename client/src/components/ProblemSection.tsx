import { AlertCircle, TrendingDown, Clock } from "lucide-react";
import { problemSection } from "@/content/v0";
import { SectionHeader, SectionShell } from "@/components/SectionShell";
import { cardSolid, landingCardBody, landingCardTitle } from "@/lib/landingStyles";
import { cn } from "@/lib/utils";

const icons = [TrendingDown, AlertCircle, Clock] as const;

export default function ProblemSection() {
  return (
    <SectionShell id="problema" aria-labelledby="problema-titulo" tone="default">
      <SectionHeader
        titleId="problema-titulo"
        title={problemSection.title}
        subtitle={problemSection.subtitle}
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
        {problemSection.problems.map((problem, index) => {
          const Icon = icons[index];
          return (
            <div key={problem.title} className={cn(cardSolid, "group p-6 md:p-8")}>
              <div className="flex flex-row items-start gap-4">
                <div className="shrink-0 rounded-lg bg-secondary p-3 transition-colors duration-300 group-hover:bg-muted">
                  <Icon className="size-7 text-muted-foreground transition-colors duration-300 group-hover:text-foreground md:size-8" />
                </div>
                <div className="min-w-0 flex-1 pt-0.5">
                  <h3 className={cn(landingCardTitle, "mb-2 md:mb-3")}>
                    {problem.title}
                  </h3>
                  <p className={landingCardBody}>{problem.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}
