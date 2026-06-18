"use client";

import { useState } from "react";
import SectionHead from "@/components/ui/SectionHead";
import Reveal from "@/components/ui/Reveal";
import ProgramaItem from "@/components/ProgramaItem";
import { modulos } from "@/data/modulos";

// Acordeão dos 4 módulos: 1 aberto por vez, primeiro aberto no load.
export default function Programa() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="programa sec-pad" id="programa">
      <div className="wrap">
        <SectionHead eyebrow="Programa">
          Quatro frentes, <span className="it gold-text">um ciclo completo.</span>
        </SectionHead>
        <Reveal className="acc">
          {modulos.map((m, i) => (
            <ProgramaItem
              key={m.num}
              modulo={m}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex((prev) => (prev === i ? -1 : i))}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
