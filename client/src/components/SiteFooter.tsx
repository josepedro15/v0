import { footerContent } from "@/content/v0";
import { focusRingCompact } from "@/lib/landingStyles";
import { cn } from "@/lib/utils";
import { Link } from "wouter";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50 px-4 py-12 md:px-10 md:py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-md">
          <p className="font-display text-xl font-bold text-foreground">{footerContent.brand}</p>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{footerContent.tagline}</p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:gap-12">
          <nav aria-label="Links do rodapé" className="flex flex-col gap-2">
            {footerContent.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                  focusRingCompact
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              className={cn(
                "text-sm font-medium text-primary transition-opacity hover:opacity-90",
                focusRingCompact
              )}
            >
              {footerContent.contactLabel}
            </Link>
          </nav>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-border pt-8">
        <p className="text-center text-xs text-muted-foreground md:text-left">
          © {year} {footerContent.brand}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
