import BrandLogo from "@/components/ui/BrandLogo";
import { site, navLinks } from "@/data/site";

// Marca INB + navegação + contato.
export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <BrandLogo height={66} />
            <p>
              Capacitação e consultoria em Direito Público para municípios e
              instituições de Santa Catarina.
            </p>
          </div>
          <div className="foot-col">
            <h6>Navegação</h6>
            {navLinks.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>
          <div className="foot-col">
            <h6>Contato</h6>
            <a href={site.contato.email.href}>{site.contato.email.label}</a>
            <a href={site.contato.whatsapp.href}>WhatsApp</a>
            <a href={site.contato.instagram.href} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="#inscricao">Inscrição</a>
          </div>
        </div>
        <div className="foot-bot">
          <span>
            © {ano} {site.brand.legal}. Todos os direitos reservados.
          </span>
          <span>Curso de Processo Administrativo Disciplinar, LCE n. 491/2010, SC</span>
        </div>
      </div>
    </footer>
  );
}
