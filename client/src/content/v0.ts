/**
 * Copy e URLs da landing V0 — única fonte (tom: força-tarefa B2B, técnico, sem hype vazio).
 * URLs: definir em .env (ver .env.example).
 */

export const siteMeta = {
  title: "V0 — Engenharia de receita",
  description:
    "Substituímos o caos do WhatsApp por matemática: agentes autônomos a qualificar, ERP integrado — uma operação única em que o vendedor só fecha o negócio.",
  ogType: "website" as const,
};

export function getSiteUrl(): string {
  const raw = import.meta.env.VITE_SITE_URL?.trim();
  return raw?.replace(/\/$/, "") ?? "";
}

/** Número WhatsApp dos CTAs (E.164 sem +). Sobrescrever com VITE_V0_CONTACT_URL se precisares. */
const DEFAULT_WHATSAPP_PHONE = "5531994959512";
const DEFAULT_WHATSAPP_TEXT = "Olá! Quero agendar um diagnóstico — V0.";

const defaultWhatsAppHref = `https://wa.me/${DEFAULT_WHATSAPP_PHONE}?text=${encodeURIComponent(DEFAULT_WHATSAPP_TEXT)}`;

export function getContactHref(): string {
  const raw = import.meta.env.VITE_V0_CONTACT_URL?.trim();
  return raw || defaultWhatsAppHref;
}

/** Para <a>: abrir URLs externas (WhatsApp, Calendly, etc.) em novo separador. */
export function getContactAnchorProps(): { target?: "_blank"; rel?: string } {
  const href = getContactHref();
  if (href.startsWith("mailto:") || href.startsWith("#")) return {};
  return { target: "_blank", rel: "noopener noreferrer" };
}

/** Navegação principal (âncoras na mesma página). */
export const siteNav = [
  { href: "#problema", label: "Problema" },
  { href: "#diferencial", label: "Porquê V0" },
  { href: "#arsenal", label: "Serviços" },
  { href: "#metodo", label: "Método" },
  { href: "#confianca", label: "Confiança" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contacto" },
] as const;

export const hero = {
  kicker: "V0 — engenharia de receita",
  titleLine: "Escala brutal não depende de esforço humano",
  subtitle:
    "Substituímos o caos do WhatsApp por matemática. Agentes autônomos qualificando e sistemas ERP integrados, numa operação única onde o seu vendedor apenas fecha o negócio.",
  ctaLabel: "Agendar diagnóstico",
  /** CTA secundário com scroll suave para a secção Problema */
  scrollCue: "Ver diagnóstico",
};

export const problemSection = {
  title:
    "Sua operação sangra dinheiro enquanto seus vendedores fazem trabalho braçal.",
  subtitle:
    "O mercado mudou. Se a sua empresa ainda depende de esforço humano para prospectar, você está perdendo a guerra para quem já automatizou. O custo por lead sobe e o SLA de resposta mata conversão antes do CRM.",
  problems: [
    {
      title: "Leads Frios",
      description:
        "O tráfego chega, mas não converte — falta qualificação e follow-up no ritmo do cliente.",
    },
    {
      title: "Processos Manuais",
      description:
        "Vendedores presos a copiar dados entre planilhas e CRM: erros, atrasos e zero previsibilidade.",
    },
    {
      title: "Atendimento Lento",
      description:
        "O cliente pergunta às 22h e só tem resposta às 09h — nesse intervalo, o concorrente já respondeu.",
    },
  ] as const,
};

export const arsenalSection = {
  title: "A Engenharia de Vendas da V0.",
  tagline: "Quatro frentes. Um só time.",
  services: [
    {
      key: "ia",
      title: "Agentes de IA Autônomos",
      description:
        "Qualificação e agendamento 24/7 no WhatsApp (e outros canais) — responde no tempo que o lead espera, sem fila humana.",
    },
    {
      key: "erp",
      title: "Integrações & ERP",
      description:
        "E-commerce, CRM e sistemas legados a falar a mesma língua: menos retrabalho, dados consistentes para decisão.",
    },
    {
      key: "ads",
      title: "Tráfego Pago de Elite",
      description:
        "Volume com critério: campanhas, criativos e atribuição para saber o que fecha negócio — não só o que gera clique.",
    },
    {
      key: "dev",
      title: "Desenvolvimento de Alta Conversão",
      description:
        "Landing pages e fluxos sob medida para testar mensagem e derrubar objeção, com métricas claras por etapa.",
    },
  ] as const,
};

export const ctaFinal = {
  title: "Coloque a operação no mesmo ritmo do mercado.",
  buttonLabel: "FALAR COM UM ENGENHEIRO DE VENDAS",
  subtext:
    "Conversa de diagnóstico (~15 min), sem compromisso — para mapear gargalos e próximo passo tático.",
};

export const differentiatorSection = {
  title: "Não somos mais uma agência de conteúdo.",
  subtitle:
    "Somos força-tarefa: código, dados, mídia e IA aplicados ao funil — com entregáveis que o CRM e o financeiro conseguem medir.",
  points: [
    {
      title: "Engenharia, não só estratégia em slide",
      body: "Integrações, automações e páginas que suportam testes reais de mensagem e oferta.",
    },
    {
      title: "Stack e operações faladas na mesma reunião",
      body: "Da escolha de ferramentas ao handoff para a equipa interna — sem caixa negra.",
    },
    {
      title: "Velocidade de sprint comercial",
      body: "Diagnóstico curto, hipóteses claras e entregas incrementais — não roadmaps de seis meses sem execução.",
    },
    {
      title: "Foco em pipeline e conversão",
      body: "Tráfego e criativo servem ao que acontece depois do clique: resposta, qualificação e fecho.",
    },
  ] as const,
};

export const processSection = {
  title: "Como trabalhamos",
  subtitle: "Um fluxo direto, da primeira chamada à operação no terreno.",
  steps: [
    {
      title: "Diagnóstico tático",
      body: "Mapeamos gargalos no funil, stack e ritmo da equipa — em conversa objetiva, sem auditoria infinita.",
    },
    {
      title: "Plano e priorização",
      body: "Definimos o que atacar primeiro (IA, integração, landing, mídia) com critério de impacto e esforço.",
    },
    {
      title: "Sprint de implementação",
      body: "Construímos, ligamos sistemas e colocamos fluxos no ar — com testes e métricas acordadas.",
    },
    {
      title: "Operação e refinamento",
      body: "Acompanhamos números, ajustamos criativos e automações e transferimos o que faz sentido para a tua equipa.",
    },
  ] as const,
};

export const trustSection = {
  title: "Operamos como extensão da tua equipa comercial.",
  subtitle:
    "Sem promessas mágicas — combinamos canais, dados e execução técnica para reduzir fricção entre marketing, vendas e operações.",
  pillars: [
    {
      title: "Transparência no que medimos",
      body: "Indicadores alinhados ao negócio: custo por oportunidade, tempo de resposta, taxas por etapa — não vanity metrics.",
    },
    {
      title: "Respeito pelo teu contexto",
      body: "Legados, LGPD e processos internos entram no desenho desde o primeiro dia.",
    },
    {
      title: "Entrega acumulável",
      body: "O que construímos fica documentado e reutilizável — não dependes de nós para sempre para manter o básico.",
    },
  ] as const,
  logoPlaceholders: [
    "Sector SaaS B2B",
    "Indústria & distribuição",
    "Serviços profissionais",
    "E-commerce + equipa comercial",
  ] as const,
};

export const faqSection = {
  title: "Perguntas frequentes",
  subtitle: "Objeções comuns antes de avançar para um diagnóstico.",
  items: [
    {
      question: "Quanto tempo demora a ver impacto?",
      answer:
        "Depende do ponto de partida e do escopo. Em muitos casos, integrações pontuais e automação de resposta já aliviam gargalos em semanas; projetos maiores (stack completo, várias frentes) estendem-se conforme complexidade — sempre com marcos definidos.",
    },
    {
      question: "Trabalham com o nosso CRM / ERP atual?",
      answer:
        "Sim, sempre que houver API ou exportação estável. Preferimos não forçar troca de ferramenta se o teu stack já serve — o foco é ligar o que tens e fechar buracos de dados.",
    },
    {
      question: "Como tratam dados pessoais e LGPD?",
      answer:
        "Mapeamos fluxos de dados, bases legais e retenção em conjunto contigo. Agentes de IA e formulários são configurados com regras explícitas de consentimento e opt-out, alinhadas à tua política interna.",
    },
    {
      question: "Precisamos de equipa interna técnica?",
      answer:
        "Não é obrigatório. Entregamos o que for preciso para a equipa comercial e de operações usar no dia a dia; documentação e handoff fazem parte do pacote quando o projeto o exige.",
    },
    {
      question: "Fazem só tráfego pago ou só desenvolvimento?",
      answer:
        "Fazemos ambos quando faz sentido para o objetivo. O diferencial da V0 é encaixar mídia, dev e automação no mesmo plano — para o investimento em lead não morrer depois do clique.",
    },
    {
      question: "Como começamos?",
      answer:
        "Agenda uma conversa de diagnóstico (~15 min), sem compromisso. A partir daí propomos próximos passos claros — ou indicamos se não formos o encaixe certo.",
    },
  ] as const,
};

export const footerContent = {
  brand: "V0",
  tagline: "Engenharia de vendas B2B — IA, integrações, tráfego e desenvolvimento.",
  links: [
    { label: "Privacidade", href: "/privacidade" },
    { label: "Termos", href: "/termos" },
  ] as const,
  contactLabel: "Contacto",
};
