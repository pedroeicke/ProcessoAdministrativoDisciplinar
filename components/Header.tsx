"use client";

import { useEffect, useState } from "react";
import BrandLogo from "@/components/ui/BrandLogo";
import { site, navLinks } from "@/data/site";

// Nav fixa: ganha fundo sólido + blur ao passar de 40px de scroll.
export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={scrolled ? "scrolled" : undefined}>
      <nav>
        <a className="brand" href="#top" aria-label={site.brand.legal}>
          <BrandLogo height={48} priority />
        </a>
        <div className="navlinks">
          {navLinks.map((l) => (
            <a key={l.href} className="lnk" href={l.href}>
              {l.label}
            </a>
          ))}
          <a
            className="btn"
            href={site.inscricaoHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Inscreva-se
          </a>
        </div>
      </nav>
    </header>
  );
}
