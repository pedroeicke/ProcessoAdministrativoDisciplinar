export type Topico = { termo: string; descricao: string };
export type Modulo = {
  num: string;
  titulo: string;
  foco: string;
  professor: string;
  topicos: Topico[];
};

export const modulos: Modulo[] = [
  {
    num: "1",
    titulo: "Fundamentos, Omissão e TAC",
    foco: "Abertura, dever de agir e soluções rápidas.",
    professor: "Ms. Bruna Kelly",
    topicos: [
      { termo: "Diretrizes da Lei", descricao: "A Lei Complementar n. 491/2010 estabelece normas sobre o procedimento administrativo disciplinar em SC para uniformizar as ações." },
      { termo: "Norte para os Municípios", descricao: "Esta lei serve como um guia seguro para os municípios catarinenses, evitando que gestores fiquem omissos ou errem por falta de regulamentação local." },
      { termo: "Vínculo com o Penal", descricao: "A jurisdição disciplinar não exclui a comum. Se o fato for crime, deve ser comunicado às autoridades. As sanções civis, penais e administrativas são independentes." },
      { termo: "Absolvição Criminal", descricao: "A responsabilidade do servidor só é afastada se a absolvição no crime negar a existência do fato ou a sua autoria." },
      { termo: "Ajustamento de Conduta (TAC)", descricao: "Medida alternativa para faltas leves (repreensão ou suspensão de até 15 dias)." },
      { termo: "Requisitos", descricao: "O servidor não pode estar em estágio probatório, não deve haver dolo ou má-fé e ele não pode ter tido outro benefício similar nos últimos 3 anos." },
    ],
  },
  {
    num: "2",
    titulo: "Investigações e Rito Sumário",
    foco: "O que antecede o processo ou o que é resolvido com agilidade.",
    professor: "Esp. Maicon Antunes",
    topicos: [
      { termo: "Sindicância Investigativa", descricao: "Usada quando o fato ou a autoria não estão claros, servindo como preparação." },
      { termo: "Sindicância Patrimonial", descricao: "Procedimento sigiloso para apurar sinais de riqueza incompatível com os recursos do servidor." },
      { termo: "Procedimento Sumário", descricao: "Rito focado em três casos: acumulação ilegal de cargos, abandono de cargo (mais de 30 dias) e inassiduidade (60 dias intercalados em 12 meses)." },
      { termo: "Prazos", descricao: "Deve ser concluído em até 60 dias. O servidor pode pedir exoneração apenas antes do julgamento." },
      { termo: "Investigação Defensiva", descricao: "Papel do advogado e da comissão (Prov. 188 da OAB/SC)." },
    ],
  },
  {
    num: "3",
    titulo: "Sindicância Acusatória, PAD e Provas",
    foco: "Fase técnica, dinâmica de audiências e produção de provas.",
    professor: "Dr. Noel Baratieri",
    topicos: [
      { termo: "Sindicância Acusatória", descricao: "Rito usado para aplicar penas de suspensão de até 30 dias." },
      { termo: "Instauração do PAD", descricao: "Obrigatória para penas acima de 30 dias de suspensão, demissão ou cassação de aposentadoria. Conduzida por 3 servidores estáveis." },
      { termo: "Afastamento Preventivo", descricao: "Medida cautelar de 60 dias (prorrogáveis) para o servidor não influenciar na apuração, mantendo a remuneração." },
      { termo: "Fase de Instrução", descricao: "Momento de coletar depoimentos, acareações e perícias." },
      { termo: "Dinâmica do Interrogatório", descricao: "O acusado é ouvido após as testemunhas da comissão e antes das de defesa." },
      { termo: "Testemunhas de Defesa", descricao: "O acusado tem 5 dias após o seu interrogatório para apresentar o rol de testemunhas (até 10 no total)." },
      { termo: "Inversão do Ato", descricao: "Possibilidade de pedir que o interrogatório seja o último ato da instrução, garantindo que o acusado fale após conhecer todas as provas." },
      { termo: "Relatório de Instrução", descricao: "Documento que encerra a coleta de provas, resumindo os fatos apurados e a convicção da comissão." },
    ],
  },
  {
    num: "4",
    titulo: "Defesa, Julgamento e Recursos",
    foco: "Encerramento da instrução, garantias do servidor e decisão final.",
    professor: "Esp. Lucas Rodrigues Alves",
    topicos: [
      { termo: "Direito de Defesa", descricao: "Após o relatório de instrução, abre-se o prazo de 15 dias para a defesa técnica." },
      { termo: "Revelia", descricao: "Se o acusado não se defender, a comissão nomeia um defensor para garantir o direito de defesa." },
      { termo: "Relatório Conclusivo", descricao: "Após a defesa, a comissão faz um relatório minucioso sugerindo a inocência ou a punição." },
      { termo: "Julgamento", descricao: "A autoridade tem 20 dias para decidir, podendo agravar ou abrandar a pena proposta, desde que motive a decisão." },
      { termo: "Recursos e Revisão", descricao: "Pedido de Reconsideração (30 dias), Recurso Hierárquico (60 dias) e a Revisão (até 2 anos se surgirem fatos novos)." },
      { termo: "Revisão Judicial", descricao: "Possibilidade de revisão/anulação da pena administrativa via judicial." },
    ],
  },
];
