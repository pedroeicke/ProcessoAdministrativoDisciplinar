import SectionHead from "@/components/ui/SectionHead";
import Reveal from "@/components/ui/Reveal";
import { porque } from "@/data/publico";

// 4 verbos (Instaurar/Apurar/Decidir/Proteger) em grid 1px-gap.
export default function PorQueParticipar() {
  return (
    <section className="porque sec-pad">
      <div className="wrap">
        <SectionHead eyebrow="Por que participar">
          O que você leva <span className="it gold-text">para a sua administração.</span>
        </SectionHead>
        <Reveal className="verbs">
          {porque.map((v) => (
            <div className="verb" key={v.num}>
              <span className="n serif">{v.num}</span>
              <h3>{v.titulo}</h3>
              <p>{v.texto}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
