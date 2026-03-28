import type { ReactNode } from "react";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { cn } from "@/lib/utils";

type SitePageShellProps = {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function SitePageShell({ title, description, children, className }: SitePageShellProps) {
  return (
    <>
      <a
        href="#conteudo-pagina"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-sm focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground focus:shadow-lg focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-primary-foreground"
      >
        Saltar para o conteúdo
      </a>
      <SiteHeader />
      <main
        id="conteudo-pagina"
        className="min-h-svh w-full bg-background pt-20 md:pt-24"
        tabIndex={-1}
      >
        <div className={cn("mx-auto max-w-3xl px-4 py-12 md:px-10 md:py-16", className)}>
          <header className="mb-10 border-b border-border pb-8">
            <h1 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {title}
            </h1>
            {description ? (
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed md:text-base">
                {description}
              </p>
            ) : null}
          </header>
          <div className="space-y-6 text-sm leading-relaxed text-muted-foreground md:text-base [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:font-display [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-foreground [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mt-1">
            {children}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
