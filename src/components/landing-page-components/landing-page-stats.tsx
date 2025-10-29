export function LandingPageStats() {
	const stats = [
		{
			value: "500+",
			label: "Projetos concluídos",
			description: "Entregues com sucesso",
		},
		{
			value: "98%",
			label: "Satisfação",
			description: "Clientes satisfeitos",
		},
		{
			value: "200+",
			label: "Desenvolvedores",
			description: "Verificados e qualificados",
		},
		{
			value: "15%",
			label: "Taxa",
			description: "A menor do mercado",
		},
	];

	return (
		<section className="container relative z-10 mx-auto px-4 py-20 md:py-32">
			<div className="mx-auto max-w-6xl">
				<div className="mb-16 space-y-4 text-center">
					<h2 className="text-balance font-bold text-4xl text-foreground md:text-5xl">
						Números que impressionam
					</h2>
					<p className="mx-auto max-w-2xl text-pretty text-muted-foreground text-xl leading-relaxed">
						Resultados comprovados que demonstram nossa excelência e
						compromisso.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{stats.map((stat, index) => (
						<div
							key={index}
							className="space-y-2 rounded-xl border border-border bg-card p-8 text-center"
						>
							<div className="font-bold text-5xl text-primary md:text-6xl">
								{stat.value}
							</div>
							<div className="font-semibold text-foreground text-lg">
								{stat.label}
							</div>
							<div className="text-muted-foreground text-sm">
								{stat.description}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
