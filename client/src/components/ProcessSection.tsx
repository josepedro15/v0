import { processSection } from "@/content/v0";
import { SectionHeader, SectionShell } from "@/components/SectionShell";
import { landingCardBody, landingCardTitle } from "@/lib/landingStyles";
import { cn } from "@/lib/utils";

export default function ProcessSection() {
  return (
    <SectionShell id="metodo" aria-labelledby="metodo-titulo" tone="default">
      <SectionHeader
        titleId="metodo-titulo"
        title={processSection.title}
        subtitle={processSection.subtitle}
      />

      <ol className="relative m-0 ml-2 list-none space-y-10 border-l border-primary/40 py-0 pl-0 md:ml-4 md:space-y-14">
        {processSection.steps.map((step, index) => (
          <li key={step.title} className="relative pl-12 md:pl-14">
            <span
              className="absolute left-0 top-1 flex size-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-primary bg-background text-sm font-bold text-primary md:size-10 md:text-base"
              aria-hidden
            >
              {index + 1}
            </span>
            <h3 className={cn(landingCardTitle, "mb-2")}>{step.title}</h3>
            <p className={cn(landingCardBody, "max-w-2xl")}>{step.body}</p>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
