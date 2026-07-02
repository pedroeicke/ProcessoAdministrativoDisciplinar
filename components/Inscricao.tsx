import SectionHead from "@/components/ui/SectionHead";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/data/site";

// Box 2 col: descrição + inclusos | preço + CTA + formas de pagamento.
export default function Inscricao() {
  return (
    <section className="insc sec-pad" id="inscricao">
      <div className="wrap">
        <SectionHead eyebrow="Inscrições">
          Garanta sua <span className="it gold-text">vaga.</span>
        </SectionHead>
        <Reveal className="insc-box">
          <div className="insc-left">
            <h3 className="serif">
              Conduza o PAD com <span className="gold-text">segurança jurídica.</span>
            </h3>
            <p>
              Uma imersão completa no processo administrativo disciplinar catarinense, do
              TAC ao recurso judicial.
            </p>
            <ul className="incl">
              <li>Acesso aos 4 módulos temáticos</li>
              <li>Material de apoio sobre a LCE n. 491/2010 + legislação local</li>
              <li>Certificado de participação</li>
              <li>Interação direta com o corpo docente</li>
            </ul>
          </div>
          <div className="insc-right">
            <div className="k">Investimento</div>
            <div className="price serif gold-text">{site.investimento.valor}</div>
            <div className="obs">{site.investimento.obs}</div>
            <a
              className="btn btn-solid"
              href={site.inscricaoHref}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textAlign: "center" }}
            >
              Quero me inscrever
            </a>
            <div className="pay">
              <span>PIX</span>
              <span>Cartão</span>
              <span>Boleto</span>
              <span>Nota de Empenho</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
