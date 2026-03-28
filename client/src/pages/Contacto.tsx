import { SitePageShell } from "@/components/SitePageShell";
import { getContactHref, getContactAnchorProps } from "@/content/v0";
import { primaryCtaHero } from "@/lib/landingStyles";
import { cn } from "@/lib/utils";
import { Link } from "wouter";

export default function Contacto() {
  const contactHref = getContactHref();
  const contactAnchorProps = getContactAnchorProps();
  const isMailto = contactHref.startsWith("mailto:");
  const isWhatsApp = contactHref.includes("wa.me") || contactHref.includes("whatsapp.com");

  return (
    <SitePageShell
      title="Contacto"
      description="Fale connosco para diagnóstico, esclarecimentos ou parcerias B2B."
    >
      <p>
        A forma mais directa de chegar à equipa V0 é através do link abaixo. Por omissão abrimos o
        WhatsApp; podes alterar o destino com a variável de ambiente{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">VITE_V0_CONTACT_URL</code>{" "}
        (ex.: mailto, calendário ou outro link).
      </p>

      <div className="pt-4">
        <a href={contactHref} className={cn(primaryCtaHero, "inline-flex")} {...contactAnchorProps}>
          {isMailto ? "Enviar e-mail" : isWhatsApp ? "Abrir WhatsApp" : "Abrir contacto"}
        </a>
      </div>

      <p className="text-xs text-muted-foreground">
        Resposta típica em dias úteis. Para assuntos urgentes, indique-o na mensagem.
      </p>

      <section>
        <h2>Outras páginas</h2>
        <p>
          <Link href="/" className="font-medium text-primary underline-offset-4 hover:underline">
            Voltar à página inicial
          </Link>
        </p>
      </section>
    </SitePageShell>
  );
}
