"use client";

import Image from "next/image"

export function LandingPageFooter() {
  return (
    <footer className="bg-card border-t border-border/50 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          <div className="col-span-2">
            <Image src="/logo-complete.svg" alt="Lontra Ágil" width={140} height={50} className="h-10 w-auto mb-4" />
            <p className="text-sm leading-relaxed text-foreground/60 max-w-sm">
              A plataforma que conecta desenvolvedores talentosos com projetos desafiadores.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Produto</h3>
            <ul className="space-y-3">
              <li>
                <a href="#recursos" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                  Recursos
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                  Preços
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                  Segurança
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contato" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/30 pt-8">
          <p className="text-center text-sm text-foreground/50">© 2025 Lontra Ágil. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
