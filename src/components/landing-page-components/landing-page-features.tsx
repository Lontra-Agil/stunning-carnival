import { CheckCircle2, Users, FileText, Shield } from "lucide-react";

export default function LandingPageFeatures() {
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
    <section className="relative z-10 container mx-auto px-4 py-20 md:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Por que escolher a Lontra Ágil?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Oferecemos a melhor experiência para transformar sua ideia em um
            produto digital de sucesso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
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
