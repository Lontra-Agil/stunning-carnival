import { Code, MessageSquare, Rocket, Search } from "lucide-react";

export function LandingPageHowItWorks() {
	const steps = [
		{
			icon: Search,
			title: "1. Conte sua ideia",
			description:
				"Compartilhe sua visão e objetivos. Nossa equipe analisa e entende suas necessidades específicas.",
		},
		{
			icon: MessageSquare,
			title: "2. Consultoria gratuita",
			description:
				"Agende uma reunião com nossos especialistas em arquitetura de software para planejar a melhor solução.",
		},
		{
			icon: Code,
			title: "3. Desenvolvimento",
			description:
				"Desenvolvedores verificados são alocados no seu projeto. Acompanhe o progresso com relatórios detalhados.",
		},
		{
			icon: Rocket,
			title: "4. Lançamento",
			description:
				"Seu projeto é entregue com qualidade, dentro do prazo e pronto para conquistar o mercado.",
		},
	];

	return (
		<section className="relative z-10 border-border border-y bg-card">
			<div className="container mx-auto px-4 py-20 md:py-32">
				<div className="mx-auto max-w-6xl">
					<div className="mb-16 space-y-4 text-center">
						<h2 className="text-balance font-bold text-4xl text-foreground md:text-5xl">
							Como funciona
						</h2>
						<p className="mx-auto max-w-2xl text-pretty text-muted-foreground text-xl leading-relaxed">
							Um processo simples e transparente do início ao fim do seu
							projeto.
						</p>
					</div>

					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
						{steps.map((step, index) => (
							<div key={index} className="relative">
								<div className="space-y-4">
									<div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-xl border-2 border-primary/20 bg-card">
										<step.icon className="h-8 w-8 text-primary" />
									</div>
									<h3 className="font-bold text-foreground text-xl">
										{step.title}
									</h3>
									<p className="text-muted-foreground leading-relaxed">
										{step.description}
									</p>
								</div>
								{index < steps.length - 1 && (
									<div className="-right-4 absolute top-8 z-0 hidden h-0.5 w-8 bg-border lg:block" />
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
