# INB — Curso de Processo Administrativo Disciplinar (SC)

Landing page do curso presencial de **Processo Administrativo Disciplinar** à luz da
**LCE n. 491/2010 (Santa Catarina)**. Realização: **INB Projetos e Consultorias**.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript 5
- Tailwind CSS v4 (tokens via `@theme` em `app/globals.css`)
- Framer Motion 12 (reveals on-scroll, acordeão e currículos com altura animada)
- Lenis (smooth scroll)
- Fontes: **Fraunces** (display) e **Hanken Grotesk** (corpo) via `next/font/google`

## Rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm run lint
```

## Arquitetura

- `data/` — conteúdo data-driven (módulos, professores, públicos, config do site).
  **O conteúdo do curso é literal**; editar aqui não exige tocar nos componentes.
- `components/` — seções da página + `ui/` (Reveal, SectionHead).
- `app/globals.css` — design system portado do mock de referência (`pad-sc.html`).

## Pendências do cliente (placeholders)

Ver lista no fim deste arquivo — data/cidade/auditório, carga horária, valor e lotes,
link real de inscrição, contatos definitivos, logos de apoio, logo INB oficial e fotos
dos professores (em `public/professores/`, hoje exibindo monograma de fallback).

### Placeholders a confirmar antes de publicar

- [ ] Data, cidade e auditório (Hero meta + seção Data & Local)
- [ ] Carga horária real
- [ ] Valor, lotes e o que inclui (seção Inscrição — hoje `R$ —`)
- [ ] Link real de inscrição (form/checkout)
- [ ] Contatos: WhatsApp, e-mail, Instagram
- [ ] Logos de apoio/realização
- [ ] Logo INB oficial em SVG/PNG transparente (substituir o wordmark tipográfico)
- [ ] Fotos dos professores em `public/professores/`
