"use client";

import type { FormEvent } from "react";
import SectionHead from "@/components/ui/SectionHead";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/data/site";

// Links (WhatsApp/email/insta) + formulário que envia via WhatsApp:
// monta a mensagem com os campos e abre o wa.me do curso (site estático,
// sem backend — a mensagem chega direto no WhatsApp da INB).
export default function Contato() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const nome = String(fd.get("nome") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const mensagem = String(fd.get("mensagem") ?? "").trim();

    const texto = `Olá! Sou ${nome}${email ? ` (${email})` : ""}.\n\n${mensagem}`;
    window.open(
      `${site.contato.whatsapp.href}?text=${encodeURIComponent(texto)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <section className="contato sec-pad" id="contato">
      <div className="wrap">
        <SectionHead eyebrow="Fale Conosco">
          Dúvidas sobre o curso <span className="it gold-text">ou a inscrição?</span>
        </SectionHead>
        <Reveal className="ct-grid">
          <div className="ct-links">
            <a href={site.contato.whatsapp.href} target="_blank" rel="noopener noreferrer">
              <span className="k">WhatsApp</span> {site.contato.whatsapp.label}
            </a>
            <a href={site.contato.email.href}>
              <span className="k">E-mail</span> {site.contato.email.label}
            </a>
            <a
              href={site.contato.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="k">Instagram</span> {site.contato.instagram.label}
            </a>
          </div>
          <form className="form" onSubmit={onSubmit}>
            <input type="text" name="nome" placeholder="Nome" aria-label="Nome" required />
            <input type="email" name="email" placeholder="E-mail" aria-label="E-mail" />
            <textarea
              name="mensagem"
              placeholder="Sua mensagem"
              aria-label="Sua mensagem"
              required
            />
            <button
              className="btn btn-solid"
              type="submit"
              style={{ width: "100%", textAlign: "center" }}
            >
              Enviar pelo WhatsApp
            </button>
            <p className="form-hint">
              Ao enviar, você será direcionado ao WhatsApp da {site.brand.sigla} com a
              mensagem pronta.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
