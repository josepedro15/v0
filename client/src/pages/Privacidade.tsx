import { SitePageShell } from "@/components/SitePageShell";
import { Link } from "wouter";

export default function Privacidade() {
  return (
    <SitePageShell
      title="Política de privacidade"
      description="Como tratamos dados pessoais no âmbito do site e dos contactos com a V0."
    >
      <section>
        <h2>Responsável pelo tratamento</h2>
        <p>
          A entidade indicada como V0 no site (doravante &quot;V0&quot;) é responsável pelo tratamento
          dos dados pessoais recolhidos através deste website e dos canais de contacto associados,
          nos termos do Regulamento Geral sobre a Proteção de Dados (RGPD) e legislação nacional
          complementar.
        </p>
      </section>

      <section>
        <h2>Dados que podemos recolher</h2>
        <p>Consoante a sua interação connosco, podemos tratar, entre outros:</p>
        <ul>
          <li>Dados de identificação e contacto (nome, e-mail, telefone, empresa) que nos envie;</li>
          <li>Dados técnicos gerados pela navegação (endereço IP, tipo de browser, páginas visitadas),
            quando utilizados para segurança ou estatísticas agregadas;</li>
          <li>Conteúdo das mensagens que nos endereçar por e-mail ou formulários.</li>
        </ul>
      </section>

      <section>
        <h2>Finalidades e bases legais</h2>
        <p>Tratamos dados pessoais para:</p>
        <ul>
          <li>Responder a pedidos de informação ou agendamento — execução de medidas pré-contratuais ou
            interesse legítimo, consoante o caso;</li>
          <li>Gerir a relação contratual, se existir — execução de contrato;</li>
          <li>Cumprir obrigações legais (ex.: faturação, contabilidade);</li>
          <li>Proteger sistemas e prevenir abuso — interesse legítimo em segurança da informação.</li>
        </ul>
      </section>

      <section>
        <h2>Conservação</h2>
        <p>
          Conservamos os dados apenas pelo tempo necessário às finalidades indicadas ou às exigências
          legais. Os prazos concretos dependem do tipo de dado e da finalidade (ex.: contactos comerciais
          vs. obrigações fiscais).
        </p>
      </section>

      <section>
        <h2>Destinatários e transferências</h2>
        <p>
          Podemos recorrer a prestadores de serviços (alojamento, e-mail, ferramentas de análise)
          que tratem dados em nosso nome, mediante contrato de subtratamento adequado. Se houver
          transferências para fora do EEE, aplicam-se garantias previstas no RGPD.
        </p>
      </section>

      <section>
        <h2>Os seus direitos</h2>
        <p>
          Nos termos legais, pode solicitar acesso, retificação, apagamento, limitação do tratamento,
          portabilidade e oposição, bem como retirar consentimentos quando o tratamento se baseie neles.
          Tem também o direito de apresentar reclamação à autoridade de controlo competente (em Portugal,
          a CNPD).
        </p>
      </section>

      <section>
        <h2>Contacto em matéria de privacidade</h2>
        <p>
          Para questões relacionadas com esta política ou com os seus dados pessoais, contacte-nos
          através dos meios indicados na página{" "}
          <Link href="/contacto" className="font-medium text-primary underline-offset-4 hover:underline">
            Contacto
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Alterações</h2>
        <p>
          Podemos atualizar esta política periodicamente. A data da última revisão pode ser indicada
          no rodapé ou no topo desta página quando implementado.
        </p>
      </section>
    </SitePageShell>
  );
}
