"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Professor } from "@/data/professores";

const EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function ProfessorCard({ prof }: { prof: Professor }) {
  const [open, setOpen] = useState(false);
  const [imgError, setImgError] = useState(false);
  const curId = `cur-${prof.iniciais}`;

  return (
    <div className={open ? "pcard open" : "pcard"}>
      <div className="top">
        <div className="photo">
          {imgError ? (
            // Fallback monograma dourado enquanto não há foto do professor.
            <div className="fb gold-text">{prof.iniciais}</div>
          ) : (
            <Image
              src={prof.foto}
              alt={prof.nome}
              fill
              sizes="96px"
              style={{ objectFit: "cover" }}
              onError={() => setImgError(true)}
            />
          )}
        </div>
        <div>
          <h4>{prof.nome}</h4>
          <div className="pr">{prof.papel}</div>
        </div>
      </div>
      <p className="tag">{prof.resumo}</p>
      <button
        className="vercur"
        type="button"
        aria-expanded={open}
        aria-controls={curId}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? "Ocultar currículo " : "Ver currículo "}
        <span className="x" aria-hidden>
          +
        </span>
      </button>
      <motion.div
        className="cur"
        id={curId}
        initial={false}
        animate={{ height: open ? "auto" : 0 }}
        transition={{ duration: 0.7, ease: EXPO }}
        style={{ overflow: "hidden" }}
      >
        <div className="cur-in">
          {prof.blocos.map((b) => (
            <div className="blk" key={b.titulo}>
              <div className="bt">{b.titulo}</div>
              <p>{b.texto}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
