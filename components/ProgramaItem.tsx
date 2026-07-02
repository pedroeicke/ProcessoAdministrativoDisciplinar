"use client";

import type { KeyboardEvent } from "react";
import { motion } from "framer-motion";
import type { Modulo } from "@/data/modulos";

const EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function ProgramaItem({
  modulo,
  isOpen,
  onToggle,
}: {
  modulo: Modulo;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const headId = `prog-head-${modulo.num}`;
  const panelId = `prog-panel-${modulo.num}`;
  // Bruna (módulo 1) é a única apresentadora; demais no masculino, como no mock.
  const role = modulo.num === "1" ? "Apresentadora" : "Apresentador";

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <div className={isOpen ? "acc-item open" : "acc-item"}>
      <div
        className="acc-head"
        id={headId}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        onKeyDown={onKeyDown}
      >
        <div className="num gold-text">{modulo.num}</div>
        <div className="ttl">
          <h3>{modulo.titulo}</h3>
          <div className="foco">{modulo.foco}</div>
        </div>
        <div className="right">
          <div className="prof">
            <div className="role">{role}</div>
            <div className="pn serif">{modulo.professor}</div>
          </div>
          <div className="chev" aria-hidden>
            ▾
          </div>
        </div>
      </div>
      <motion.div
        className="acc-body"
        id={panelId}
        role="region"
        aria-labelledby={headId}
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.7, ease: EXPO }}
        style={{ overflow: "hidden" }}
      >
        <div className="acc-body-inner">
          <dl className="dl">
            {modulo.topicos.map((t) => (
              <div className="row" key={t.termo}>
                <dt>{t.termo}</dt>
                <dd>{t.descricao}</dd>
              </div>
            ))}
          </dl>
        </div>
      </motion.div>
    </div>
  );
}
