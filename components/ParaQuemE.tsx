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
