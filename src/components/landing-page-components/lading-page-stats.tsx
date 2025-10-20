export default function LandingPageStats() {
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
    <section className="relative z-10 container mx-auto px-4 py-20 md:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Números que impressionam
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Resultados comprovados que demonstram nossa excelência e
            compromisso.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-8 text-center space-y-2"
            >
              <div className="text-5xl md:text-6xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-foreground">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
