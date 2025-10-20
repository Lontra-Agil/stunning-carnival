# Phase 5: Landing Variants

**Duration**: 1-2 days
**Priority**: MEDIUM
**Dependencies**: Phase 1, Phase 3

---

## Overview

This phase creates targeted landing pages for different user segments:
- `/for-developers` - Developer-focused landing page
- `/for-contractors` - Contractor-focused landing page

Each page will have:
- Segment-specific value propositions
- Custom CTAs
- HowTo schemas for SEO
- Optimized for conversion

---

## Task 1: Create "For Developers" Landing Page

### File: `/src/app/for-developers/page.tsx`

```typescript
import { PublicLayout } from "@/components/layout/public-layout";
import { JsonLdScript } from "@/lib/seo/json-ld-script";
import {
  generateHowToSchema,
  generateBreadcrumbSchema,
  generateWebPageSchema,
} from "@/lib/seo/json-ld-schemas";
import { generateMetadata as generatePageMetadata } from "@/lib/seo/metadata-config";
import type { Metadata } from "next";
import Link from "next/link";
import { Check, Code2, DollarSign, Users, Zap, Shield } from "lucide-react";

// ============================================================================
// METADATA
// ============================================================================

export const metadata: Metadata = generatePageMetadata({
  title: {
    en: "For Developers - Find Your Next Great Project",
    "pt-br": "Para Desenvolvedores - Encontre Seu Próximo Grande Projeto",
  },
  description: {
    en: "Join Lontra Ágil as a developer. Find exciting projects, work with great clients, set your own rates, and grow your freelance career.",
    "pt-br": "Junte-se à Lontra Ágil como desenvolvedor. Encontre projetos emocionantes, trabalhe com ótimos clientes, defina suas próprias taxas e impulsione sua carreira freelance.",
  },
  keywords: {
    en: [
      "freelance developer",
      "remote developer jobs",
      "software development projects",
      "freelance programming",
      "developer marketplace",
    ],
    "pt-br": [
      "desenvolvedor freelance",
      "vagas remotas desenvolvedor",
      "projetos desenvolvimento software",
      "programação freelance",
      "marketplace desenvolvedor",
    ],
  },
  path: "/for-developers",
  locale: "pt-br",
});

// Revalidate every 24 hours
export const revalidate = 86400;

// ============================================================================
// COMPONENT
// ============================================================================

export default function ForDevelopersPage() {
  const howToSchema = generateHowToSchema({
    name: "Como começar como desenvolvedor na Lontra Ágil",
    description: "Guia passo a passo para desenvolvedores iniciarem na plataforma",
    totalTime: "PT10M",
    steps: [
      {
        name: "Crie sua conta",
        text: "Cadastre-se gratuitamente como desenvolvedor na plataforma",
        url: "https://lontraagil.com/app/auth/developer",
      },
      {
        name: "Complete seu perfil",
        text: "Adicione suas habilidades, experiência, portfólio e defina suas taxas",
      },
      {
        name: "Encontre projetos",
        text: "Navegue por projetos disponíveis e encontre os que combinam com você",
      },
      {
        name: "Envie propostas",
        text: "Escreva propostas personalizadas explicando sua abordagem",
      },
      {
        name: "Seja contratado",
        text: "Conecte-se com clientes e comece a trabalhar",
      },
    ],
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Início", url: "https://lontraagil.com", position: 1 },
    { name: "Para Desenvolvedores", url: "https://lontraagil.com/for-developers", position: 2 },
  ]);

  const webPageSchema = generateWebPageSchema({
    name: "Para Desenvolvedores - Lontra Ágil",
    description: "Página dedicada para desenvolvedores na plataforma Lontra Ágil",
    url: "https://lontraagil.com/for-developers",
    locale: "pt-br",
  });

  return (
    <>
      {/* JSON-LD Structured Data */}
      <JsonLdScript data={howToSchema} />
      <JsonLdScript data={breadcrumbSchema} />
      <JsonLdScript data={webPageSchema} />

      <PublicLayout>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center md:py-24">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Encontre Projetos
            <br />
            <span className="text-primary">Incríveis</span> para Trabalhar
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Conecte-se com clientes que valorizam seu trabalho. Defina suas próprias
            taxas. Trabalhe em projetos que você ama.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/app/auth/developer"
              className="rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Cadastre-se Grátis
            </Link>
            <Link
              href="/pricing"
              className="rounded-lg border px-8 py-3 font-semibold transition hover:bg-muted"
            >
              Ver Preços
            </Link>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="border-y bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Por que escolher Lontra Ágil?
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Benefit
                icon={<DollarSign className="h-8 w-8" />}
                title="Você define o preço"
                description="Estabeleça suas próprias taxas horárias ou por projeto. Sem taxas ocultas - você sabe exatamente quanto vai ganhar."
              />
              <Benefit
                icon={<Zap className="h-8 w-8" />}
                title="Pagamentos rápidos"
                description="Receba seus pagamentos de forma rápida e segura assim que completar os marcos do projeto."
              />
              <Benefit
                icon={<Users className="h-8 w-8" />}
                title="Clientes qualificados"
                description="Trabalhe com empresas sérias que valorizam desenvolvedores talentosos."
              />
              <Benefit
                icon={<Code2 className="h-8 w-8" />}
                title="Projetos variados"
                description="De startups a empresas estabelecidas, encontre projetos em diversas tecnologias."
              />
              <Benefit
                icon={<Shield className="h-8 w-8" />}
                title="Proteção de pagamento"
                description="Sistema de escrow garante que você será pago pelo trabalho realizado."
              />
              <Benefit
                icon={<Check className="h-8 w-8" />}
                title="Construa reputação"
                description="Sistema de avaliações ajuda você a construir sua reputação e atrair mais clientes."
              />
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="mb-12 text-center text-3xl font-bold">Como Funciona</h2>
          <div className="grid gap-8 md:grid-cols-5">
            <Step number={1} title="Cadastre-se" description="Crie sua conta grátis" />
            <Step number={2} title="Complete seu perfil" description="Adicione skills e portfólio" />
            <Step number={3} title="Encontre projetos" description="Navegue por oportunidades" />
            <Step number={4} title="Envie propostas" description="Mostre seu diferencial" />
            <Step number={5} title="Seja contratado" description="Comece a trabalhar" />
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/app/auth/developer"
              className="inline-block rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Comece Agora - É Grátis
            </Link>
          </div>
        </section>

        {/* Testimonials (Optional) */}
        <section className="border-y bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">
              O que desenvolvedores dizem
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Testimonial
                quote="Encontrei projetos incríveis e clientes que respeitam meu trabalho. Não poderia estar mais feliz!"
                author="João Silva"
                role="Desenvolvedor Full Stack"
              />
              <Testimonial
                quote="A plataforma é fácil de usar e o processo de pagamento é super transparente."
                author="Maria Santos"
                role="Desenvolvedora Frontend"
              />
              <Testimonial
                quote="Consegui triplicar minha renda freelance em apenas 6 meses na plataforma."
                author="Pedro Costa"
                role="Desenvolvedor Backend"
              />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h2 className="mb-4 text-3xl font-bold">Pronto para começar?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Junte-se a centenas de desenvolvedores que já estão construindo suas carreiras
            na Lontra Ágil.
          </p>
          <Link
            href="/app/auth/developer"
            className="inline-block rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
          >
            Cadastre-se Grátis
          </Link>
        </section>
      </PublicLayout>
    </>
  );
}

// ============================================================================
// HELPER COMPONENTS
// ============================================================================

function Benefit({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

function Step({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
        {number}
      </div>
      <h3 className="mb-2 font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

function Testimonial({
  quote,
  author,
  role,
}: {
  quote: string;
  author: string;
  role: string;
}) {
  return (
    <div className="rounded-lg bg-background p-6 shadow">
      <p className="mb-4 italic">"{quote}"</p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  );
}
```

**Key Features**:
- ✅ Developer-focused messaging
- ✅ HowTo schema for SEO
- ✅ Clear value propositions
- ✅ Social proof (testimonials)
- ✅ Multiple CTAs
- ✅ Responsive design

---

## Task 2: Create "For Contractors" Landing Page

### File: `/src/app/for-contractors/page.tsx`

```typescript
import { PublicLayout } from "@/components/layout/public-layout";
import { JsonLdScript } from "@/lib/seo/json-ld-script";
import {
  generateHowToSchema,
  generateBreadcrumbSchema,
  generateWebPageSchema,
} from "@/lib/seo/json-ld-schemas";
import { generateMetadata as generatePageMetadata } from "@/lib/seo/metadata-config";
import type { Metadata } from "next";
import Link from "next/link";
import { Search, Users, Shield, Clock, Star, TrendingUp } from "lucide-react";

// ============================================================================
// METADATA
// ============================================================================

export const metadata: Metadata = generatePageMetadata({
  title: {
    en: "For Contractors - Hire Top Developers Fast",
    "pt-br": "Para Contratantes - Contrate Desenvolvedores Top Rapidamente",
  },
  description: {
    en: "Find and hire skilled developers for your projects. Access a curated pool of talent, manage projects efficiently, and build amazing software.",
    "pt-br": "Encontre e contrate desenvolvedores qualificados para seus projetos. Acesse um pool curado de talentos, gerencie projetos com eficiência e construa software incrível.",
  },
  keywords: {
    en: [
      "hire developers",
      "freelance developers",
      "software development outsourcing",
      "find programmers",
      "contractor platform",
    ],
    "pt-br": [
      "contratar desenvolvedores",
      "desenvolvedores freelance",
      "terceirização desenvolvimento",
      "encontrar programadores",
      "plataforma contratação",
    ],
  },
  path: "/for-contractors",
  locale: "pt-br",
});

// Revalidate every 24 hours
export const revalidate = 86400;

// ============================================================================
// COMPONENT
// ============================================================================

export default function ForContractorsPage() {
  const howToSchema = generateHowToSchema({
    name: "Como contratar desenvolvedores na Lontra Ágil",
    description: "Guia passo a passo para contratantes encontrarem desenvolvedores",
    totalTime: "PT15M",
    steps: [
      {
        name: "Crie sua conta",
        text: "Cadastre-se gratuitamente como contratante na plataforma",
        url: "https://lontraagil.com/app/auth/contractor",
      },
      {
        name: "Publique seu projeto",
        text: "Descreva seu projeto, requisitos, orçamento e prazos",
      },
      {
        name: "Receba propostas",
        text: "Desenvolvedores qualificados enviarão propostas para seu projeto",
      },
      {
        name: "Avalie candidatos",
        text: "Revise perfis, portfólios e avaliações de desenvolvedores",
      },
      {
        name: "Contrate e colabore",
        text: "Escolha o desenvolvedor ideal e comece a trabalhar",
      },
    ],
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Início", url: "https://lontraagil.com", position: 1 },
    { name: "Para Contratantes", url: "https://lontraagil.com/for-contractors", position: 2 },
  ]);

  const webPageSchema = generateWebPageSchema({
    name: "Para Contratantes - Lontra Ágil",
    description: "Página dedicada para contratantes na plataforma Lontra Ágil",
    url: "https://lontraagil.com/for-contractors",
    locale: "pt-br",
  });

  return (
    <>
      {/* JSON-LD Structured Data */}
      <JsonLdScript data={howToSchema} />
      <JsonLdScript data={breadcrumbSchema} />
      <JsonLdScript data={webPageSchema} />

      <PublicLayout>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center md:py-24">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Contrate Desenvolvedores
            <br />
            <span className="text-primary">Talentosos</span> Rapidamente
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Acesse uma rede de desenvolvedores qualificados. Publique projetos, receba
            propostas e encontre o talento perfeito para suas necessidades.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/app/auth/contractor"
              className="rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Publique Seu Projeto
            </Link>
            <Link
              href="/pricing"
              className="rounded-lg border px-8 py-3 font-semibold transition hover:bg-muted"
            >
              Ver Preços
            </Link>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="border-y bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Por que contratar na Lontra Ágil?
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Benefit
                icon={<Search className="h-8 w-8" />}
                title="Encontre talento facilmente"
                description="Busca avançada por skills, experiência, localização e disponibilidade."
              />
              <Benefit
                icon={<Users className="h-8 w-8" />}
                title="Desenvolvedores verificados"
                description="Todos os desenvolvedores passam por processo de verificação de habilidades."
              />
              <Benefit
                icon={<Shield className="h-8 w-8" />}
                title="Pagamento seguro"
                description="Sistema de escrow protege seu investimento até a entrega do trabalho."
              />
              <Benefit
                icon={<Clock className="h-8 w-8" />}
                title="Contrate em horas"
                description="Publique um projeto e comece a receber propostas em poucas horas."
              />
              <Benefit
                icon={<Star className="h-8 w-8" />}
                title="Qualidade garantida"
                description="Sistema de avaliações ajuda você a escolher os melhores profissionais."
              />
              <Benefit
                icon={<TrendingUp className="h-8 w-8" />}
                title="Escale seu time"
                description="De um desenvolvedor a uma equipe completa, cresça conforme necessário."
              />
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="mb-12 text-center text-3xl font-bold">Como Funciona</h2>
          <div className="grid gap-8 md:grid-cols-5">
            <Step number={1} title="Cadastre-se" description="Crie sua conta grátis" />
            <Step number={2} title="Publique projeto" description="Descreva suas necessidades" />
            <Step number={3} title="Receba propostas" description="Avalie candidatos" />
            <Step number={4} title="Contrate" description="Escolha o desenvolvedor" />
            <Step number={5} title="Colabore" description="Construa seu projeto" />
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/app/auth/contractor"
              className="inline-block rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Publique Seu Primeiro Projeto
            </Link>
          </div>
        </section>

        {/* Use Cases */}
        <section className="border-y bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Perfeito para qualquer necessidade
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <UseCase
                title="Startups"
                description="Construa seu MVP rapidamente com desenvolvedores experientes em tecnologias modernas."
              />
              <UseCase
                title="Empresas"
                description="Aumente seu time temporariamente para grandes projetos ou necessidades específicas."
              />
              <UseCase
                title="Agências"
                description="Encontre especialistas para complementar sua equipe em projetos de clientes."
              />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="mb-12 text-center text-3xl font-bold">
            O que contratantes dizem
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Testimonial
              quote="Encontrei um desenvolvedor excelente em menos de 24 horas. O projeto foi entregue no prazo e com qualidade."
              author="Ana Oliveira"
              role="CEO, Tech Startup"
            />
            <Testimonial
              quote="A plataforma tornou muito fácil gerenciar múltiplos freelancers ao mesmo tempo."
              author="Carlos Mendes"
              role="CTO, E-commerce"
            />
            <Testimonial
              quote="Transparência nos preços e segurança no pagamento. Isso fez toda a diferença para nós."
              author="Juliana Ferreira"
              role="Product Manager"
            />
          </div>
        </section>

        {/* Final CTA */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h2 className="mb-4 text-3xl font-bold">Pronto para começar seu projeto?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Publique seu primeiro projeto hoje e conecte-se com desenvolvedores talentosos.
          </p>
          <Link
            href="/app/auth/contractor"
            className="inline-block rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
          >
            Publicar Projeto Grátis
          </Link>
        </section>
      </PublicLayout>
    </>
  );
}

// ============================================================================
// HELPER COMPONENTS
// ============================================================================

function Benefit({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

function Step({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
        {number}
      </div>
      <h3 className="mb-2 font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

function UseCase({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-lg bg-background p-6 shadow">
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

function Testimonial({
  quote,
  author,
  role,
}: {
  quote: string;
  author: string;
  role: string;
}) {
  return (
    <div className="rounded-lg bg-muted/50 p-6">
      <p className="mb-4 italic">"{quote}"</p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  );
}
```

---

## Task 3: Update Navigation

Update public header to include links to landing variants.

### File: `/src/components/landing-page-components/landing-page-header.tsx`

Add navigation items:

```typescript
<nav>
  <a href="/for-developers">Para Desenvolvedores</a>
  <a href="/for-contractors">Para Contratantes</a>
  <a href="/pricing">Preços</a>
  <a href="/about">Sobre</a>
  <a href="/contact">Contato</a>
</nav>
```

---

## Checklist

- [ ] For Developers page created
- [ ] For Contractors page created
- [ ] HowTo schemas added to both pages
- [ ] Icons imported (lucide-react)
- [ ] Navigation updated with new pages
- [ ] Both pages build without errors
- [ ] Schemas validated with validator.schema.org
- [ ] Google Rich Results Test passes for HowTo schemas
- [ ] Lighthouse SEO score is 100/100
- [ ] CTAs tested and working

---

## Next Steps

Once Phase 5 is complete:
1. Proceed to [Phase 6: Sitemaps & Optimization](./06-PHASE-6-SITEMAPS-OPTIMIZATION.md)
2. Test conversion rates on landing variants
3. Consider A/B testing different messaging
