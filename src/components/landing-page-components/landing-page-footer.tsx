"use client";

import Image from "next/image";

export function LandingPageFooter() {
	return (
		<footer className="border-border/50 border-t bg-card py-12">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
					<div className="col-span-2">
						<Image
							src="/logo-complete.svg"
							alt="Lontra Ágil"
							width={140}
							height={50}
							className="mb-4 h-10 w-auto"
						/>
						<p className="max-w-sm text-foreground/60 text-sm leading-relaxed">
							A plataforma que conecta desenvolvedores talentosos com projetos
							desafiadores.
						</p>
					</div>

					<div>
						<h3 className="mb-4 font-semibold text-foreground text-sm">
							Produto
						</h3>
						<ul className="space-y-3">
							<li>
								<a
									href="#recursos"
									className="text-foreground/60 text-sm transition-colors hover:text-foreground"
								>
									Recursos
								</a>
							</li>
							<li>
								<a
									href="/"
									className="text-foreground/60 text-sm transition-colors hover:text-foreground"
								>
									Preços
								</a>
							</li>
							<li>
								<a
									href="/"
									className="text-foreground/60 text-sm transition-colors hover:text-foreground"
								>
									Segurança
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="mb-4 font-semibold text-foreground text-sm">
							Empresa
						</h3>
						<ul className="space-y-3">
							<li>
								<a
									href="/"
									className="text-foreground/60 text-sm transition-colors hover:text-foreground"
								>
									Sobre
								</a>
							</li>
							<li>
								<a
									href="/"
									className="text-foreground/60 text-sm transition-colors hover:text-foreground"
								>
									Blog
								</a>
							</li>
							<li>
								<a
									href="#contato"
									className="text-foreground/60 text-sm transition-colors hover:text-foreground"
								>
									Contato
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-12 border-border/30 border-t pt-8">
					<p className="text-center text-foreground/50 text-sm">
						© 2025 Lontra Ágil. Todos os direitos reservados.
					</p>
				</div>
			</div>
		</footer>
	);
}
