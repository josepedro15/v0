import { Bot, Database, Target, Code } from "lucide-react";
import { arsenalSection } from "@/content/v0";
import { SectionHeader, SectionShell } from "@/components/SectionShell";
import { cardGlass, landingCardBody, landingCardTitle } from "@/lib/landingStyles";
import { cn } from "@/lib/utils";

const iconByKey = {
  ia: Bot,
  erp: Database,
  ads: Target,
  dev: Code,
} as const;

export default function ArsenalSection() {
  return (
    <SectionShell id="arsenal" aria-labelledby="arsenal-titulo" tone="default">
      <SectionHeader
        titleId="arsenal-titulo"
        title={arsenalSection.title}
        subtitle={arsenalSection.tagline}
        subtitleMaxWidth="2xl"
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:auto-rows-fr md:gap-8 md:min-h-[min(70vh,40rem)]">
        {arsenalSection.services.map((service) => {
          const Icon = iconByKey[service.key];
          return (
            <div
              key={service.key}
              className="group relative flex h-full min-h-[19rem] md:min-h-0"
            >
              <div
                className={cn(
                  cardGlass,
                  "flex h-full w-full flex-col p-6 md:p-8 lg:p-10"
                )}
              >
                <div className="mb-5 shrink-0 md:mb-6">
                  <Icon
                    className="size-10 text-primary transition-transform duration-300 group-hover:scale-110 md:size-12"
                    aria-hidden
                  />
                </div>
                <h3 className={cn(landingCardTitle, "mb-3 shrink-0 md:mb-4")}>
                  {service.title}
                </h3>
                <p
                  className={cn(
                    landingCardBody,
                    "min-h-0 flex-1 text-pretty"
                  )}
                >
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}
