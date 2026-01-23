import Image from "next/image";

export function Footer() {
	return (
		<footer className="border-border border-t bg-card">
			<div className="container mx-auto px-4 py-12">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-4">
					<div className="space-y-4">
						<Image
							src="/logo-complete.svg"
							alt="Lontra Agil"
							width={140}
							height={40}
							className="h-10 w-auto"
						/>
						<p className="text-muted-foreground text-sm leading-relaxed">
							Conectando desenvolvedores talentosos com projetos inovadores.
						</p>
					</div>

					<div>
						<h3 className="mb-4 font-semibold text-foreground">Produto</h3>
						<ul className="space-y-2 text-muted-foreground text-sm">
							<li>
								<a
									href="/#features"
									className="transition-colors hover:text-foreground"
								>
									Recursos
								</a>
							</li>
							<li>
								<a
									href="/#how-it-works"
									className="transition-colors hover:text-foreground"
								>
									Como Funciona
								</a>
							</li>
							<li>
								<a
									href="/#stats"
									className="transition-colors hover:text-foreground"
								>
									Estatisticas
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="mb-4 font-semibold text-foreground">Empresa</h3>
						<ul className="space-y-2 text-muted-foreground text-sm">
							<li>
								<a
									href="/about"
									className="transition-colors hover:text-foreground"
								>
									Sobre
								</a>
							</li>
							<li>
								<a
									href="/contact"
									className="transition-colors hover:text-foreground"
								>
									Contato
								</a>
							</li>
							<li>
								<a
									href="/careers"
									className="transition-colors hover:text-foreground"
								>
									Carreiras
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="mb-4 font-semibold text-foreground">Legal</h3>
						<ul className="space-y-2 text-muted-foreground text-sm">
							<li>
								<a
									href="/privacy"
									className="transition-colors hover:text-foreground"
								>
									Privacidade
								</a>
							</li>
							<li>
								<a
									href="/terms"
									className="transition-colors hover:text-foreground"
								>
									Termos
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-8 border-border border-t pt-8 text-center text-muted-foreground text-sm">
					<p>&copy; 2025 Lontra Agil. Todos os direitos reservados.</p>
				</div>
			</div>
		</footer>
	);
}
