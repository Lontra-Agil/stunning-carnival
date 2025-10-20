import { Search, MessageSquare, Code, Rocket } from "lucide-react"

export function LandingPageHowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "1. Conte sua ideia",
      description: "Compartilhe sua visão e objetivos. Nossa equipe analisa e entende suas necessidades específicas.",
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
      description: "Seu projeto é entregue com qualidade, dentro do prazo e pronto para conquistar o mercado.",
    },
  ]

  return (
    <section className="relative z-10 bg-card border-y border-border">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Como funciona</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
              Um processo simples e transparente do início ao fim do seu projeto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="space-y-4">
                  <div className="relative z-10 w-16 h-16 bg-card rounded-xl flex items-center justify-center border-2 border-primary/20">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-border z-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
