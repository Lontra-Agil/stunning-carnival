"use client";

import { Card } from "@/components/ui/card";

export function LandingPageStats() {
	const stats = [
		{ id: "stat-developers", value: "10k+", label: "Desenvolvedores Ativos" },
		{ id: "stat-satisfaction", value: "98%", label: "Taxa de Satisfação" },
		{ id: "stat-projects", value: "500+", label: "Projetos por Mês" },
		{ id: "stat-response-time", value: "24h", label: "Tempo de Resposta" },
	];

	return (
		<section className="bg-card py-20">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
					{stats.map((stat) => (
						<Card
							key={stat.id}
							className="flex flex-col items-center justify-center border-border/50 bg-background/50 p-8 backdrop-blur-sm transition-shadow hover:shadow-md"
						>
							<div className="font-bold text-4xl text-primary sm:text-5xl">
								{stat.value}
							</div>
							<div className="mt-2 text-center text-foreground/60 text-sm leading-relaxed">
								{stat.label}
							</div>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
