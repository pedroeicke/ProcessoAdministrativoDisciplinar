// Fonte única da marca e dos contatos.
// Corrigido a partir do brief (que trazia "TNB" por engano): a marca é INB,
// conforme o diretório do projeto e o Instagram @inb_projetos_consultorias.
// Trocar o nome/contatos aqui propaga para header, footer, faixa de realização,
// metadados e seção de contato — um único ponto de edição.

export const site = {
  brand: {
    sigla: "INB",
    sub: "Projetos e Consultorias",
    legal: "INB Projetos e Consultorias",
  },
  curso: {
    titulo: "Curso de Processo Administrativo Disciplinar",
    base: "LCE n. 491/2010",
    uf: "Santa Catarina",
  },
  meta: {
    title:
      "Curso de Processo Administrativo Disciplinar · SC · INB Projetos e Consultorias",
    description:
      "Curso presencial de Processo Administrativo Disciplinar à luz da LCE n. 491/2010. 16 e 17 de setembro de 2026, em Florianópolis, SC. Realização: INB Projetos e Consultorias.",
  },
  // Data, local e investimento confirmados pelo cliente (correções 13/07/2026).
  evento: {
    data: { label: "16 e 17 de setembro de 2026", curto: "16 e 17 set 2026" },
    horario: "08h às 12h e 14h às 18h",
    local: {
      nome: "Square SC",
      sala: "Sala 06",
      endereco: "Rod. José Carlos Daux, 5500, Saco Grande",
      cidade: "Florianópolis, SC",
      cep: "88032-005",
      // Link de mapa por busca de endereço (não depende de place ID).
      mapsHref:
        "https://www.google.com/maps/search/?api=1&query=Square+SC+Rod.+Jos%C3%A9+Carlos+Daux+5500+Saco+Grande+Florian%C3%B3polis+SC",
      // Embed interativo (não exige chave de API).
      mapsEmbed:
        "https://maps.google.com/maps?q=Square+SC%2C+Rod.+Jos%C3%A9+Carlos+Daux%2C+5500%2C+Saco+Grande%2C+Florian%C3%B3polis+-+SC&z=15&output=embed",
    },
  },
  investimento: {
    valor: "R$ 2.000,00",
    obs: "Por participante.",
    pagamento: {
      razaoSocial: "INB Projetos e Consultorias LTDA",
      cnpj: "07.682.209.000.121",
      instrucao:
        "Envio de Nota de Empenho/Ordem de Serviço ou Autorização de Fornecimento, com posterior pagamento na conta bancária abaixo:",
      banco: "Banco SICOOB 756, Agência 3326-0, Conta 7.682-1",
      pix: "07.682.209.000.121",
      obsPrivado:
        "Para o mercado privado, outras opções de pagamento estarão disponíveis: Boleto, Transferência bancária, Depósito ou Pix.",
    },
  },
  contato: {
    whatsapp: {
      label: "+55 48 9195-6165",
      href: "https://wa.me/554891956165",
    },
    email: {
      label: "inbcontratacoespublicas@gmail.com",
      href: "mailto:inbcontratacoespublicas@gmail.com",
    },
    instagram: {
      label: "@inb_projetos_consultorias",
      href: "https://www.instagram.com/inb_projetos_consultorias/",
    },
  },
  // Inscrição leva ao formulário oficial (Google Forms).
  inscricaoHref: "https://forms.gle/eyYcQK3xoR6wnwxYA",
} as const;

// Itens de navegação compartilhados entre Header e Footer.
export const navLinks = [
  { label: "O Curso", href: "#curso" },
  { label: "Programa", href: "#programa" },
  { label: "Professores", href: "#docentes" },
  { label: "Para quem é", href: "#publico" },
  { label: "Data e Local", href: "#local" },
] as const;
