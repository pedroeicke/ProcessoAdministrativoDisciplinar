import SectionHead from "@/components/ui/SectionHead";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/data/site";

// Info + placeholder de mapa (dados a confirmar com o cliente).
export default function DataLocal() {
  return (
    <section className="local sec-pad" id="local">
      <div className="wrap">
        <SectionHead eyebrow="Data & Local">
          Onde e quando <span className="it gold-text">acontece.</span>
        </SectionHead>
        <Reveal className="local-grid">
          <div className="local-info">
            <div className="row">
              <div className="ic serif" aria-hidden>
                ◷
              </div>
              <div>
                <h5>{site.evento.data.label}</h5>
                <p>Dois dias de imersão presencial em Direito Administrativo.</p>
              </div>
            </div>
            <div className="row">
              <div className="ic serif" aria-hidden>
                ⌖
              </div>
              <div>
                <h5>{site.evento.local.nome}</h5>
                <p>
                  {site.evento.local.endereco}
                  <br />
                  {site.evento.local.cidade} · CEP {site.evento.local.cep}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="ic serif" aria-hidden>
                ✎
              </div>
              <div>
                <h5>Carga horária</h5>
                <p>
                  Conteúdo distribuído em 4 módulos temáticos, com certificado de
                  participação.
                </p>
              </div>
            </div>
          </div>
          <div className="map-ph">
            <iframe
              className="map-frame"
              src={site.evento.local.mapsEmbed}
              title={`Mapa — ${site.evento.local.nome}, ${site.evento.local.cidade}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a
              className="map-link"
              href={site.evento.local.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              ver no Google Maps →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
