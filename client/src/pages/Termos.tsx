import { SitePageShell } from "@/components/SitePageShell";

export default function Termos() {
  return (
    <SitePageShell
      title="Termos de utilização"
      description="Condições de uso deste website e dos conteúdos da V0."
    >
      <section>
        <h2>Aceitação</h2>
        <p>
          Ao aceder e utilizar este website, concorda com estes termos. Se não concordar, deve
          abster-se de utilizar o site.
        </p>
      </section>

      <section>
        <h2>Informação no site</h2>
        <p>
          Procuramos manter a informação atualizada e clara. Contudo, os conteúdos têm carácter geral e
          informativo; não constituem aconselhamento jurídico, fiscal ou técnico vinculativo. Qualquer
          proposta comercial ou escopo de trabalho deve ser acordada por escrito num contrato ou proposta
          formal.
        </p>
      </section>

      <section>
        <h2>Uso aceitável</h2>
        <p>É proibido utilizar o site de forma a:</p>
        <ul>
          <li>Violar lei aplicável ou direitos de terceiros;</li>
          <li>Introduzir malware, fazer engenharia inversa indevida ou sobrecarregar sistemas;</li>
          <li>Extrair dados de forma automatizada sem autorização prévia, salvo permitido por lei.</li>
        </ul>
      </section>

      <section>
        <h2>Propriedade intelectual</h2>
        <p>
          Textos, marcas, logótipos, imagens e restantes conteúdos do site são propriedade da V0 ou de
          licenciantes, salvo indicação em contrário. Não é concedida licença de utilização além da
          navegação pessoal e da partilha de links, sem reprodução comercial não autorizada.
        </p>
      </section>

      <section>
        <h2>Limitação de responsabilidade</h2>
        <p>
          Na medida permitida por lei, a V0 não responde por danos indirectos, lucros cessantes ou
          interrupções decorrentes do uso ou impossibilidade de uso do site. O site é fornecido
          &quot;no estado em que se encontra&quot;, sem garantias implícitas de comercialização ou
          adequação a um fim específico.
        </p>
      </section>

      <section>
        <h2>Ligações externas</h2>
        <p>
          O site pode conter links para sites de terceiros. Não controlamos esses sites e não nos
          responsabilizamos pelos seus conteúdos ou políticas.
        </p>
      </section>

      <section>
        <h2>Alterações aos termos</h2>
        <p>
          Podemos alterar estes termos a qualquer momento. A versão em vigor é a publicada nesta página;
          o uso continuado do site após alterações pode constituir aceitação das mesmas.
        </p>
      </section>

      <section>
        <h2>Lei aplicável</h2>
        <p>
          Para litígios relacionados com estes termos, aplicável a lei portuguesa, salvo normas
          imperativas em contrário. Para consumidores, podem aplicar-se mecanismos de resolução
          alternativa de litígios previstos em lei.
        </p>
      </section>
    </SitePageShell>
  );
}
