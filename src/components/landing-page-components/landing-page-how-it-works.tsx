"use client";

import { Card, CardContent } from "@/components/ui/card";

export function LandingPageHowItWorks() {
	const steps = [
		{
			number: "01",
			title: "Conecte seu Perfil",
			description:
				"Desenvolvedores conectam seus repositórios para criar um portfólio verificado automaticamente. Contratantes criam perfil para buscar talentos.",
		},
		{
			number: "02",
			title: "Explore com Confiança",
			description:
				"Visualize portfólios reais, métricas de performance e histórico de trabalho verificado. Encontre o desenvolvedor ideal baseado em dados concretos.",
		},
		{
			number: "03",
			title: "Inicie o Projeto",
			description:
				"Defina escopo, prazos e valores. Nossa plataforma garante segurança e transparência para ambas as partes.",
		},
		{
			number: "04",
			title: "Acompanhe em Tempo Real",
			description:
				"Monitore o progresso com métricas atualizadas automaticamente. Veja gráficos de produtividade, commits e evolução do projeto.",
		},
	];

	return (
		<section id="como-funciona" className="relative bg-card py-24 sm:py-32">
			<div className="-translate-y-1/2 pointer-events-none absolute top-1/2 left-10 hidden opacity-5 lg:block">
				<svg
					width="120"
					height="200"
					viewBox="0 0 120 200"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
				>
					<circle
						cx="30"
						cy="30"
						r="15"
						stroke="#7E5B5A"
						strokeWidth="3"
						fill="none"
					/>
					<circle
						cx="90"
						cy="100"
						r="15"
						stroke="#7E5B5A"
						strokeWidth="3"
						fill="none"
					/>
					<circle
						cx="30"
						cy="170"
						r="15"
						stroke="#7E5B5A"
						strokeWidth="3"
						fill="none"
					/>
					<line
						x1="40"
						y1="40"
						x2="80"
						y2="90"
						stroke="#7E5B5A"
						strokeWidth="2"
						strokeDasharray="5,5"
					/>
					<line
						x1="80"
						y1="110"
						x2="40"
						y2="160"
						stroke="#7E5B5A"
						strokeWidth="2"
						strokeDasharray="5,5"
					/>
				</svg>
			</div>

			<div className="pointer-events-none absolute top-1/3 right-10 hidden opacity-5 lg:block">
				<svg
					width="100"
					height="120"
					viewBox="0 0 100 120"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
				>
					<rect
						x="10"
						y="10"
						width="80"
						height="100"
						rx="5"
						stroke="#7E5B5A"
						strokeWidth="3"
						fill="none"
					/>
					<path
						d="M25 35L35 45L55 25"
						stroke="#7E5B5A"
						strokeWidth="3"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M25 60L35 70L55 50"
						stroke="#7E5B5A"
						strokeWidth="3"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M25 85L35 95L55 75"
						stroke="#7E5B5A"
						strokeWidth="3"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</div>

			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto mb-16 max-w-2xl text-center">
					<h2 className="text-balance font-bold text-4xl text-foreground tracking-tight sm:text-5xl">
						Como Funciona
					</h2>
					<p className="mt-4 text-pretty text-foreground/60 text-lg leading-relaxed">
						Do portfólio verificado ao acompanhamento em tempo real, tudo
						pensado para máxima transparência.
					</p>
				</div>

				<div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
					{steps.map((step) => (
						<Card
							key={step.number}
							className="border-border/50 bg-background transition-all duration-300 hover:shadow-lg"
						>
							<CardContent className="p-8">
								<div className="mb-4 font-bold text-6xl text-primary/20">
									{step.number}
								</div>
								<h3 className="mb-3 font-bold text-foreground text-xl">
									{step.title}
								</h3>
								<p className="text-foreground/60 text-sm leading-relaxed">
									{step.description}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
