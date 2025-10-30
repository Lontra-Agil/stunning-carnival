import { CheckCircle2, FileText, Shield, Users } from "lucide-react";

export function LandingPageFeatures() {
	const features = [
		{
			icon: CheckCircle2,
			title: "Menor Taxa do Mercado",
			description:
				"Apenas 15% de taxa sobre o projeto. Economize mais e invista no que realmente importa: seu negócio.",
		},
		{
			icon: Users,
			title: "Desenvolvedores Verificados",
			description:
				"Todos os desenvolvedores passam por rigorosa verificação de portfólio e habilidades técnicas antes de serem alocados.",
		},
		{
			icon: FileText,
			title: "Relatórios Detalhados",
			description:
				"Acompanhe o progresso do seu projeto em tempo real com relatórios completos e transparentes sobre cada etapa.",
		},
		{
			icon: Shield,
			title: "Consultoria Gratuita",
			description:
				"Reuniões sem custo com especialistas em arquitetura de software para planejar e estruturar seu projeto corretamente.",
		},
	];

	return (
		<section className="container relative z-10 mx-auto px-4 py-20 md:py-32">
			<div className="mx-auto max-w-6xl">
				<div className="mb-16 space-y-4 text-center">
					<h2 className="text-balance font-bold text-4xl text-foreground md:text-5xl">
						Por que escolher a Lontra Ágil?
					</h2>
					<p className="mx-auto max-w-2xl text-pretty text-muted-foreground text-xl leading-relaxed">
						Oferecemos a melhor experiência para transformar sua ideia em um
						produto digital de sucesso.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
					{features.map((feature) => (
						<div
							key={feature.title}
							className="hover:-translate-y-1 rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50"
						>
							<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
								<feature.icon className="h-6 w-6 text-primary" />
							</div>
							<h3 className="mb-4 font-bold text-2xl text-foreground">
								{feature.title}
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
