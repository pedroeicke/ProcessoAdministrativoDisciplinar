import SectionHead from "@/components/ui/SectionHead";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/data/site";

// Links (WhatsApp/email/insta) + formulário (placeholder de envio).
export default function Contato() {
  return (
    <section className="contato sec-pad" id="contato">
      <div className="wrap">
        <SectionHead eyebrow="Fale Conosco">
          Dúvidas sobre o curso <span className="it gold-text">ou a inscrição?</span>
        </SectionHead>
        <Reveal className="ct-grid">
          <div className="ct-links">
            <a href={site.contato.whatsapp.href}>
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
          <div className="form">
            <input type="text" placeholder="Nome" aria-label="Nome" />
            <input type="email" placeholder="E-mail" aria-label="E-mail" />
            <textarea placeholder="Sua mensagem" aria-label="Sua mensagem" />
            <a
              className="btn btn-solid"
              href="#"
              style={{ textAlign: "center", display: "block" }}
            >
              Enviar mensagem
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
