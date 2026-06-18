import { site } from "@/data/site";
import { modulos } from "@/data/modulos";

// Título em 3 linhas com reveal em máscara (CSS keyframes, stagger 0.35/0.46/0.57s).
// Abaixo: descrição + CTA à esquerda, índice das 4 frentes à direita (≥980px).
export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-glow" aria-hidden />
      <div className="hero-side" aria-hidden>
        LCE n. 491/2010 — Santa Catarina
      </div>
      <div className="wrap hero-inner">
        <span className="eyebrow">
          Presencial · Florianópolis · {site.evento.data.curto}
        </span>
        <h1 className="serif">
          <span className="ln">
            <span>Processo</span>
          </span>
          <span className="ln">
            <span>Administrativo</span>
          </span>
          <span className="ln">
            <span className="it gold-text">Disciplinar</span>
          </span>
        </h1>

        <div className="hero-cols">
          <div className="hero-lead">
            <p className="lead">
              Da abertura ao julgamento — um percurso técnico e completo pelo PAD à luz
              da Lei Complementar n. 491/2010, conduzido por advogados de referência em
              Direito Administrativo de Santa Catarina.
            </p>
            <div className="cta-row">
              <a className="btn btn-solid" href={site.inscricaoHref}>
                Garantir minha vaga
              </a>
              <a className="btn" href="#programa">
                Ver o programa
              </a>
            </div>
          </div>

          <aside className="hero-index" aria-label="As quatro frentes do programa">
            <span className="hero-index-label">O Programa · 04 frentes</span>
            {modulos.map((m) => (
              <a className="hero-index-item" href="#programa" key={m.num}>
                <span className="hix-num">{m.num}</span>
                <span className="hix-ttl">{m.titulo}</span>
              </a>
            ))}
          </aside>
        </div>

        <div className="hero-meta">
          <div className="m">
            <div className="k">Formato</div>
            <div className="v">Presencial</div>
          </div>
          <div className="m">
            <div className="k">Módulos</div>
            <div className="v">04 frentes</div>
          </div>
          <div className="m">
            <div className="k">Corpo docente</div>
            <div className="v">04 advogados</div>
          </div>
          <div className="m">
            <div className="k">Base legal</div>
            <div className="v">LCE 491/2010</div>
          </div>
        </div>
      </div>
    </section>
  );
}
