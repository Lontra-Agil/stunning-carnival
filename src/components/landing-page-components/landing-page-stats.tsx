"use client";

import { Card } from "@/components/ui/card"

export function LandingPageStats() {
  const stats = [
    { value: "10k+", label: "Desenvolvedores Ativos" },
    { value: "98%", label: "Taxa de Satisfação" },
    { value: "500+", label: "Projetos por Mês" },
    { value: "24h", label: "Tempo de Resposta" },
  ]

  return (
    <section className="bg-card py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="flex flex-col items-center justify-center p-8 border-border/50 bg-background/50 backdrop-blur-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl font-bold text-primary sm:text-5xl">{stat.value}</div>
              <div className="mt-2 text-sm text-center text-foreground/60 leading-relaxed">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
