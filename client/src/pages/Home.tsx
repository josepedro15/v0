import HeroFuturistic from "@/components/ui/hero-futuristic";
import SiteHeader from "@/components/SiteHeader";
import ProblemSection from "@/components/ProblemSection";
import DifferentiatorSection from "@/components/DifferentiatorSection";
import ArsenalSection from "@/components/ArsenalSection";
import ProcessSection from "@/components/ProcessSection";
import TrustSection from "@/components/TrustSection";
import FAQSection from "@/components/FAQSection";
import CTAFinalSection from "@/components/CTAFinalSection";
import SiteFooter from "@/components/SiteFooter";

/**
 * Landing V0 — Assessoria de Engenharia de Vendas B2B
 * Estética: Tech-Brutalism Noir
 */
export default function Home() {
  return (
    <>
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-sm focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground focus:shadow-lg focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-primary-foreground"
      >
        Saltar para o conteúdo
      </a>
      <SiteHeader />
      <main id="conteudo-principal" className="w-full min-h-svh bg-transparent" tabIndex={-1}>
        <HeroFuturistic />
        <div className="relative z-10">
          <ProblemSection />
          <DifferentiatorSection />
          <ArsenalSection />
          <ProcessSection />
          <TrustSection />
          <FAQSection />
          <CTAFinalSection />
          <SiteFooter />
        </div>
      </main>
    </>
  );
}
