export type Publico = { num: string; titulo: string; texto: string };

export const publico: Publico[] = [
  { num: "I", titulo: "Gestores Municipais", texto: "Prefeitos, secretários e dirigentes que precisam agir sem incorrer em omissão." },
  { num: "II", titulo: "Comissões de PAD", texto: "Servidores designados para sindicâncias e processos disciplinares." },
  { num: "III", titulo: "Procuradorias e Jurídico", texto: "Advogados públicos e assessores que sustentam a legalidade das decisões." },
  { num: "IV", titulo: "Servidores e Defesa", texto: "Quem precisa conhecer suas garantias e o devido processo legal." },
];

export type Porque = { num: string; titulo: string; texto: string };

export const porque: Porque[] = [
  { num: "1", titulo: "Instaurar", texto: "Saber quando e como abrir cada rito (TAC, sindicância, sumário ou PAD), sem omissão nem excesso." },
  { num: "2", titulo: "Apurar", texto: "Dominar a fase de instrução, as provas, os prazos e a dinâmica das audiências com segurança técnica." },
  { num: "3", titulo: "Decidir", texto: "Julgar com motivação, dosando a pena e respeitando o contraditório e a ampla defesa." },
  { num: "4", titulo: "Proteger", texto: "Resguardar o servidor e a Administração contra nulidades, responsabilização e retrabalho." },
];
