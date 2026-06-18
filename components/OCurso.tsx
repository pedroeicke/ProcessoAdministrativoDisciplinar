import Reveal from "@/components/ui/Reveal";

// Grid 2 col: headline + lawcard | corpo de texto.
export default function OCurso() {
  return (
    <section className="curso sec-pad" id="curso">
      <div className="wrap grid-2">
        <Reveal className="sec-head">
          <span className="eyebrow">O Curso</span>
          <h2 className="serif">
            Um <span className="it gold-text">norte seguro</span> para o gestor público.
          </h2>
          <div className="lawcard">
            <p
              style={{
                margin: 0,
                fontSize: ".98rem",
                color: "var(--bone-dim)",
                lineHeight: 1.7,
              }}
            >
              A LCE n. 491/2010 uniformiza o procedimento administrativo disciplinar em
              Santa Catarina e serve de guia para os municípios catarinenses — evitando
              que gestores fiquem omissos ou errem por falta de regulamentação local.
            </p>
          </div>
        </Reveal>
        <Reveal className="body-copy">
          <p>
            O processo administrativo disciplinar não é burocracia: é o instrumento que
            protege ao mesmo tempo o servidor e a Administração. Conhecê-lo a fundo é o
            que separa a decisão segura da nulidade.
          </p>
          <p>
            Este curso percorre todo o ciclo —{" "}
            <strong>
              fundamentos e dever de agir, investigações e ritos sumários, a fase técnica
              de instrução e provas, até a defesa, o julgamento e os recursos
            </strong>{" "}
            — sempre observando que as sanções civis, penais e administrativas são
            independentes entre si.
          </p>
          <p>
            Quatro frentes, quatro especialistas, um único objetivo: dar ao agente
            público o domínio completo do rito disciplinar catarinense.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
