import SectionHead from "@/components/ui/SectionHead";
import Reveal from "@/components/ui/Reveal";
import ProfessorCard from "@/components/ProfessorCard";
import { professores } from "@/data/professores";

// Grid 2 col de cards de professores.
export default function CorpoDocente() {
  return (
    <section className="docentes sec-pad" id="docentes">
      <div className="wrap">
        <SectionHead eyebrow="Corpo Docente">
          Quem conduz <span className="it gold-text">a sala.</span>
        </SectionHead>
        <Reveal className="prof-grid">
          {professores.map((p) => (
            <ProfessorCard key={p.iniciais} prof={p} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
