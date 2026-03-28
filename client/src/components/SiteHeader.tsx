import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteNav, getContactHref, getContactAnchorProps, hero, footerContent } from "@/content/v0";
import {
  focusRingCompact,
  landingNavLink,
  primaryCtaHeader,
} from "@/lib/landingStyles";
import { cn } from "@/lib/utils";

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const contactHref = getContactHref();
  const contactAnchorProps = getContactAnchorProps();

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/70 bg-background/90 pt-[env(safe-area-inset-top,0px)] backdrop-blur-md supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] md:h-16 md:pl-[max(2.5rem,env(safe-area-inset-left,0px))] md:pr-[max(2.5rem,env(safe-area-inset-right,0px))]">
        <a
          href="#"
          className={cn(
            "font-display text-lg font-bold tracking-tight text-foreground",
            focusRingCompact
          )}
        >
          {footerContent.brand}
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
          {siteNav.map((item) => (
            <a key={item.href} href={item.href} className={landingNavLink}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href={contactHref} className={primaryCtaHeader} {...contactAnchorProps}>
            {hero.ctaLabel}
          </a>
        </div>

        <button
          type="button"
          className={cn(
            "inline-flex items-center justify-center rounded-sm p-2 text-foreground hover:bg-secondary md:hidden",
            focusRingCompact
          )}
          aria-expanded={mobileOpen}
          aria-controls="menu-mobile"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <X className="size-6" aria-hidden /> : <Menu className="size-6" aria-hidden />}
        </button>
      </div>

      {mobileOpen ? (
        <div
          id="menu-mobile"
          className="border-t border-border bg-background md:hidden max-h-[min(70vh,calc(100dvh-3.5rem-env(safe-area-inset-top,0px)))] overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
        >
          <nav
            className="flex flex-col gap-1 py-4 pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))]"
            aria-label="Navegação principal"
          >
            {siteNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-3 text-base font-medium text-foreground hover:bg-secondary",
                  focusRingCompact
                )}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={contactHref}
              className={cn(primaryCtaHeader, "mt-2 justify-center")}
              {...contactAnchorProps}
              onClick={() => setMobileOpen(false)}
            >
              {hero.ctaLabel}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
