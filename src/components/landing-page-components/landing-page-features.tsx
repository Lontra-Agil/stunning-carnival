"use client";

import { Card, CardContent } from "@/components/ui/card"
import { Search, Shield, Zap, BarChart3, GitBranch, Activity } from "lucide-react"

export function LandingPageFeatures() {
  const features = [
    {
      icon: GitBranch,
      title: "Portfólios Verificados",
      description:
        "Visualize o histórico real de trabalho dos desenvolvedores através de projetos e código verificados automaticamente.",
    },
    {
      icon: BarChart3,
      title: "Métricas de Performance",
      description:
        "Avalie desenvolvedores com base em dados reais de produtividade, qualidade de código e cumprimento de prazos.",
    },
    {
      icon: Activity,
      title: "Acompanhamento em Tempo Real",
      description:
        "Monitore o progresso do seu projeto com gráficos e métricas atualizadas automaticamente durante toda a execução.",
    },
    {
      icon: Shield,
      title: "Transparência Total",
      description:
        "Todas as informações são baseadas em dados reais e verificáveis, garantindo confiança em cada contratação.",
    },
    {
      icon: Search,
      title: "Busca Inteligente",
      description:
        "Encontre desenvolvedores com as habilidades exatas que seu projeto precisa, filtrados por experiência comprovada.",
    },
    {
      icon: Zap,
      title: "Conexão Ágil",
      description:
        "Conecte-se rapidamente com profissionais qualificados e inicie seu projeto com segurança e agilidade.",
    },
  ]

  return (
    <section id="recursos" className="relative bg-background py-24 sm:py-32">
      <div className="absolute top-10 left-10 opacity-5 pointer-events-none hidden lg:block">
        <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="75" cy="75" r="40" stroke="#3B0F0F" strokeWidth="3" fill="none" />
          <circle cx="75" cy="75" r="25" stroke="#3B0F0F" strokeWidth="3" fill="none" />
          <line x1="75" y1="35" x2="75" y2="20" stroke="#3B0F0F" strokeWidth="4" />
          <line x1="75" y1="130" x2="75" y2="115" stroke="#3B0F0F" strokeWidth="4" />
          <line x1="35" y1="75" x2="20" y2="75" stroke="#3B0F0F" strokeWidth="4" />
          <line x1="130" y1="75" x2="115" y2="75" stroke="#3B0F0F" strokeWidth="4" />
          <line x1="48" y1="48" x2="37" y2="37" stroke="#3B0F0F" strokeWidth="4" />
          <line x1="102" y1="102" x2="113" y2="113" stroke="#3B0F0F" strokeWidth="4" />
          <line x1="102" y1="48" x2="113" y2="37" stroke="#3B0F0F" strokeWidth="4" />
          <line x1="48" y1="102" x2="37" y2="113" stroke="#3B0F0F" strokeWidth="4" />
        </svg>
      </div>

      <div className="absolute bottom-20 right-10 opacity-5 pointer-events-none hidden lg:block">
        <svg width="140" height="100" viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="5" width="130" height="90" rx="8" stroke="#4D2626" strokeWidth="3" fill="none" />
          <line x1="5" y1="25" x2="135" y2="25" stroke="#4D2626" strokeWidth="2" />
          <path d="M20 45L35 55L20 65" stroke="#4D2626" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="45" y1="60" x2="80" y2="60" stroke="#4D2626" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
            Contratação Baseada em Dados Reais
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-foreground/60 text-pretty">
            Chega de contratar no escuro. Veja o histórico real, métricas de performance e acompanhe tudo em tempo real.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-border/50 bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-5">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/60">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
