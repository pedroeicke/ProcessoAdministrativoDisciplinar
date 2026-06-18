import Image from "next/image";
import { site } from "@/data/site";

// Logo oficial INB (monograma + "Projetos e Consultorias"), recortado do
// Logo.png original. Dimensões intrínsecas do PNG aparado: 709 x 561.
// A altura de exibição é controlada por CSS (width: auto mantém a proporção).
const LOGO_W = 709;
const LOGO_H = 561;

export default function BrandLogo({
  height,
  className,
  priority = false,
}: {
  height: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/brand/logo-inb.png"
      alt={site.brand.legal}
      width={LOGO_W}
      height={LOGO_H}
      priority={priority}
      className={className}
      sizes="200px"
      style={{ height, width: "auto" }}
    />
  );
}
