import type { ReactNode } from "react";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

// Cabeçalho de seção: eyebrow + h2 (com trechos .it gold-text passados via children).
export default function SectionHead({
  eyebrow,
  children,
  className,
}: {
  eyebrow: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Reveal className={cn("sec-head", className)}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="serif">{children}</h2>
    </Reveal>
  );
}
