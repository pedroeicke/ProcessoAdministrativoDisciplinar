export type BlocoBio = { titulo: string; texto: string };
export type Professor = {
  nome: string;
  iniciais: string;
  papel: string;
  foto: string;
  resumo: string;
  blocos: BlocoBio[];
};

export const professores: Professor[] = [
  {
    nome: "Dr. Noel Baratieri",
    iniciais: "NB",
    papel: "Professor",
    foto: "/professores/noel.jpg",
    resumo:
      "Doutor e Mestre em Direito do Estado pela Universidade Federal de Santa Catarina (UFSC), o Dr. Noel é especialista em Direito Administrativo pelo CESUSC/SC e graduado em Direito também pela UFSC. Possui uma trajetória marcada pela atuação acadêmica e institucional de alto nível.",
    blocos: [
      { titulo: "Institucional", texto: "É Membro da Comissão Especial de Direito Administrativo do Conselho Federal da OAB e Membro Fundador do Instituto de Direito Administrativo de Santa Catarina (IDASC)." },
      { titulo: "Docência", texto: "Atua como Professor do Curso de Pós-graduação em Direito Administrativo na UNOESC e ministra cursos nas áreas de Licitações, Contratos Administrativos e Parcerias Público-Privadas." },
      { titulo: "Obras", texto: "Autor de livros relevantes como “Serviço Público na Constituição Federal”, “O Método de Negociação de Harvard na Administração Pública consensual” e “Direito Eleitoral Militar”. É também coautor de obras sobre os 25 anos da Lei n. 8.666/93." },
      { titulo: "Áreas de Atuação", texto: "Foco em Licitações e Contratos, Regulação de Serviços Públicos, Responsabilização de agentes públicos e privados, além de Direito Político e Eleitoral." },
    ],
  },
  {
    nome: "Esp. Maicon Antunes",
    iniciais: "MA",
    papel: "Professor",
    foto: "/professores/maicon.jpg",
    resumo:
      "Graduado pelo CESUSC, é especialista em Direito Penal e Processo Penal pelo Complexo Damásio de Jesus e pós-graduando em Regime Próprio de Previdência Social.",
    blocos: [
      { titulo: "Institucional", texto: "Integra diversas frentes na OAB/SC, sendo membro das Comissões de Direito Militar, do Direito do Servidor Público e de Direito Previdenciário (Regime Próprio). É também membro do IDASC." },
      { titulo: "Produção Acadêmica", texto: "Coautor dos livros “Contratações Públicas: reflexões críticas sobre os 25 anos da Lei n. 8.666/93” e “Direito, Políticas Públicas e Sociedade”." },
      { titulo: "Docência", texto: "Professor de cursos de atualização e aperfeiçoamento voltados à área de Servidor Público e de Processo Administrativo Disciplinar." },
      { titulo: "Áreas de Atuação", texto: "Especializado em Direito Penal (comum e militar), Agentes Públicos, Improbidade Administrativa e Previdência Complementar e do Servidor." },
    ],
  },
  {
    nome: "Ms. Bruna Kelly",
    iniciais: "BK",
    papel: "Professora",
    foto: "/professores/bruna.jpg",
    resumo:
      "Mestre em Direito pela Universidade Federal de Santa Catarina (UFSC) e graduada em Direito também pela UFSC.",
    blocos: [
      { titulo: "Institucional", texto: "É membro da Comissão de Direito Militar da OAB/SC, possui histórico de liderança acadêmica como coordenadora do Centro Acadêmico de Direito da UFSC (CAXIF) e experiência prática com atuação na Vara de Direito Militar da Comarca da Capital/SC." },
      { titulo: "Docência", texto: "Professora de cursos de atualização e aperfeiçoamento voltados à área de Servidor Público e de Processo Administrativo Disciplinar." },
      { titulo: "Produção Acadêmica", texto: "Coautora da obra “Direito Administrativo Sancionador Ambiental”." },
      { titulo: "Áreas de Atuação", texto: "Especializada em Direito Administrativo Disciplinar e Agentes Públicos." },
    ],
  },
  {
    nome: "Esp. Lucas Rodrigues Alves",
    iniciais: "LA",
    papel: "Professor",
    foto: "/professores/lucas.jpg",
    resumo:
      "Graduado em Direito pela Universidade Federal de Santa Catarina (UFSC) e especialista em Ciências Criminais pela PUC Minas.",
    blocos: [
      { titulo: "Institucional", texto: "Atua como membro das Comissões de Direito Administrativo e do Servidor Público, Direito Penal e da Advocacia Criminal da OAB/SC, além de integrar a Associação Brasileira dos Advogados Criminalistas (ABRACRIM)." },
      { titulo: "Áreas de Atuação", texto: "Sua prática jurídica é concentrada nas áreas de Direito Penal e defesa de Agentes Públicos." },
      { titulo: "Docência", texto: "Professor de cursos de atualização e aperfeiçoamento voltados à área de Servidor Público e de Processo Administrativo Disciplinar." },
    ],
  },
];
