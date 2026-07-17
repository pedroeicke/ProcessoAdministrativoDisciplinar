import SectionHead from "@/components/ui/SectionHead";
import Reveal from "@/components/ui/Reveal";
import { publico } from "@/data/publico";

// 4 públicos (I–IV) — reaproveita o grid de verbos.
export default function ParaQuemE() {
  return (
    <section className="porque sec-pad" id="publico">
      <div className="wrap">
        <SectionHead eyebrow="Para quem é">
          Feito para quem <span className="it gold-text">decide e responde.</span>
        </SectionHead>
        <Reveal className="publico-intro">
          <p>
            Este curso foi desenvolvido para servidores públicos que atuam diretamente
            em comissões de PAD e sindicâncias (preliminares ou acusatórias) em
            Municípios e Autarquias do Estado de Santa Catarina. Nosso objetivo é dar a
            segurança jurídica para que você conduza os atos processuais minimizando os
            riscos de nulidades sob a égide da LCE n. 491/2010 e das legislações locais
            do Município.
          </p>
          <p>
            Do outro lado, a formação é indispensável para advogados, consultores e
            assessores jurídicos que buscam agregar seus conhecimentos nesta área.
          </p>
          <p>
            Seja você um membro de comissão que busca aplicar a lei com precisão ou um
            defensor que exige a estrita legalidade, este é um curso para se
            especializar na legislação catarinense ou local com aqueles que atuam
            diretamente no assunto.
          </p>
        </Reveal>
        <Reveal className="verbs">
          {publico.map((p) => (
            <div className="verb" key={p.num}>
              <span className="n serif">{p.num}</span>
              <h3 style={{ fontSize: "1.25rem" }}>{p.titulo}</h3>
              <p>{p.texto}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
