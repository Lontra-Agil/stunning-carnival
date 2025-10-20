# Phase 3: New Public Pages (Continued)

This file continues from `03-PHASE-3-NEW-PUBLIC-PAGES.md`

---

## Task 5: Create Privacy Policy Page

### File: `/src/app/privacy/page.tsx`

**Purpose**: Privacy policy and data protection information.

**Implementation**:

```typescript
import { PublicLayout } from "@/components/layout/public-layout";
import { JsonLdScript } from "@/lib/seo/json-ld-script";
import {
  generateWebPageSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo/json-ld-schemas";
import { generateMetadata as generatePageMetadata } from "@/lib/seo/metadata-config";
import type { Metadata } from "next";

// ============================================================================
// METADATA
// ============================================================================

export const metadata: Metadata = generatePageMetadata({
  title: {
    en: "Privacy Policy - How We Protect Your Data",
    "pt-br": "Política de Privacidade - Como Protegemos Seus Dados",
  },
  description: {
    en: "Learn how Lontra Ágil collects, uses, and protects your personal data. Our commitment to privacy and data protection.",
    "pt-br": "Saiba como a Lontra Ágil coleta, usa e protege seus dados pessoais. Nosso compromisso com privacidade e proteção de dados.",
  },
  path: "/privacy",
  locale: "pt-br",
  noIndex: false, // Index legal pages
});

// Revalidate yearly (legal docs change rarely)
export const revalidate = 31536000; // 365 days

// ============================================================================
// COMPONENT
// ============================================================================

export default function PrivacyPage() {
  const webPageSchema = generateWebPageSchema({
    name: "Política de Privacidade - Lontra Ágil",
    description: "Política de privacidade e proteção de dados da Lontra Ágil",
    url: "https://lontraagil.com/privacy",
    locale: "pt-br",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Início", url: "https://lontraagil.com", position: 1 },
    { name: "Privacidade", url: "https://lontraagil.com/privacy", position: 2 },
  ]);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <JsonLdScript data={webPageSchema} />
      <JsonLdScript data={breadcrumbSchema} />

      <PublicLayout>
        <div className="container mx-auto px-4 py-16">
          <article className="prose prose-lg mx-auto max-w-4xl dark:prose-invert">
            <h1>Política de Privacidade</h1>
            <p className="lead">
              Última atualização: {new Date().toLocaleDateString("pt-BR")}
            </p>

            <Section
              title="1. Introdução"
              content="A Lontra Ágil está comprometida em proteger sua privacidade e seus dados pessoais. Esta Política de Privacidade descreve como coletamos, usamos, compartilhamos e protegemos suas informações quando você usa nossa plataforma."
            />

            <Section
              title="2. Informações que Coletamos"
              content="Coletamos diferentes tipos de informações para fornecer e melhorar nossos serviços:"
            />

            <SubSection
              title="2.1. Informações fornecidas por você"
              items={[
                "Dados de cadastro: nome, email, senha",
                "Informações de perfil: foto, biografia, habilidades, experiência",
                "Informações de contato: telefone, endereço",
                "Informações de pagamento: dados bancários (processados por terceiros)",
              ]}
            />

            <SubSection
              title="2.2. Informações coletadas automaticamente"
              items={[
                "Dados de uso: páginas visitadas, tempo de navegação",
                "Informações do dispositivo: tipo, sistema operacional, navegador",
                "Endereço IP e localização aproximada",
                "Cookies e tecnologias similares",
              ]}
            />

            <Section
              title="3. Como Usamos Suas Informações"
              content="Utilizamos suas informações para:"
            />

            <ul>
              <li>Fornecer, operar e manter nossa plataforma</li>
              <li>Processar transações e pagamentos</li>
              <li>Melhorar, personalizar e expandir nossos serviços</li>
              <li>Comunicar-nos com você sobre atualizações e ofertas</li>
              <li>Detectar e prevenir fraudes e abusos</li>
              <li>Cumprir obrigações legais</li>
            </ul>

            <Section
              title="4. Compartilhamento de Informações"
              content="Podemos compartilhar suas informações nas seguintes situações:"
            />

            <ul>
              <li>
                <strong>Com outros usuários:</strong> Informações de perfil são
                visíveis para outros usuários da plataforma
              </li>
              <li>
                <strong>Com prestadores de serviços:</strong> Processadores de
                pagamento, serviços de hospedagem, análise de dados
              </li>
              <li>
                <strong>Por razões legais:</strong> Quando exigido por lei ou para
                proteger direitos e segurança
              </li>
              <li>
                <strong>Com seu consentimento:</strong> Em outras situações com sua
                permissão explícita
              </li>
            </ul>

            <Section
              title="5. Segurança dos Dados"
              content="Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados:"
            />

            <ul>
              <li>Criptografia de dados em trânsito (HTTPS/TLS)</li>
              <li>Criptografia de dados sensíveis em repouso</li>
              <li>Controles de acesso rigorosos</li>
              <li>Monitoramento de segurança contínuo</li>
              <li>Auditorias de segurança regulares</li>
            </ul>

            <Section
              title="6. Seus Direitos"
              content="De acordo com a LGPD (Lei Geral de Proteção de Dados), você tem os seguintes direitos:"
            />

            <ul>
              <li>Acesso aos seus dados pessoais</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados</li>
              <li>Exclusão de dados pessoais</li>
              <li>Portabilidade dos dados</li>
              <li>Revogação do consentimento</li>
              <li>Informação sobre uso compartilhado de dados</li>
            </ul>

            <p>
              Para exercer seus direitos, entre em contato conosco através do email:{" "}
              <a href="mailto:privacy@lontraagil.com">privacy@lontraagil.com</a>
            </p>

            <Section
              title="7. Cookies"
              content="Utilizamos cookies e tecnologias similares para melhorar sua experiência. Você pode controlar o uso de cookies através das configurações do seu navegador."
            />

            <Section
              title="8. Retenção de Dados"
              content="Mantemos seus dados pessoais apenas pelo tempo necessário para os propósitos descritos nesta política, ou conforme exigido por lei. Após esse período, os dados são deletados ou anonimizados."
            />

            <Section
              title="9. Transferência Internacional de Dados"
              content="Seus dados podem ser transferidos e processados em países diferentes do seu país de residência. Garantimos que tais transferências sejam realizadas com proteções adequadas de acordo com as leis aplicáveis."
            />

            <Section
              title="10. Menores de Idade"
              content="Nossa plataforma não é direcionada a menores de 18 anos. Não coletamos intencionalmente dados de menores. Se você é pai ou responsável e acredita que seu filho forneceu dados pessoais, entre em contato conosco."
            />

            <Section
              title="11. Alterações a Esta Política"
              content="Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre mudanças significativas através da plataforma ou por email. A versão atualizada terá uma nova data de 'Última atualização'."
            />

            <Section
              title="12. Contato"
              content="Para dúvidas sobre esta Política de Privacidade ou sobre o tratamento de seus dados pessoais, entre em contato:"
            />

            <address>
              <strong>Lontra Ágil</strong>
              <br />
              Email:{" "}
              <a href="mailto:privacy@lontraagil.com">privacy@lontraagil.com</a>
              <br />
              Página de Contato: <a href="/contact">/contact</a>
            </address>
          </article>
        </div>
      </PublicLayout>
    </>
  );
}

// ============================================================================
// HELPER COMPONENTS
// ============================================================================

function Section({ title, content }: { title: string; content: string }) {
  return (
    <section>
      <h2>{title}</h2>
      <p>{content}</p>
    </section>
  );
}

function SubSection({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
```

**Key Features**:
- ✅ WebPage schema
- ✅ Breadcrumb schema
- ✅ LGPD compliance structure
- ✅ Semantic HTML with `<article>` and `<section>` tags
- ✅ ISR: Revalidates every 365 days
- ✅ Structured with proper headings for accessibility

**TODO**: Review with legal team before publishing.

---

## Task 6: Create Terms of Service Page

### File: `/src/app/terms/page.tsx`

**Implementation**:

```typescript
import { PublicLayout } from "@/components/layout/public-layout";
import { JsonLdScript } from "@/lib/seo/json-ld-script";
import {
  generateWebPageSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo/json-ld-schemas";
import { generateMetadata as generatePageMetadata } from "@/lib/seo/metadata-config";
import type { Metadata } from "next";

// ============================================================================
// METADATA
// ============================================================================

export const metadata: Metadata = generatePageMetadata({
  title: {
    en: "Terms of Service - Platform Guidelines",
    "pt-br": "Termos de Serviço - Diretrizes da Plataforma",
  },
  description: {
    en: "Read our Terms of Service to understand the rules and guidelines for using Lontra Ágil platform.",
    "pt-br": "Leia nossos Termos de Serviço para entender as regras e diretrizes de uso da plataforma Lontra Ágil.",
  },
  path: "/terms",
  locale: "pt-br",
  noIndex: false,
});

// Revalidate yearly
export const revalidate = 31536000; // 365 days

// ============================================================================
// COMPONENT
// ============================================================================

export default function TermsPage() {
  const webPageSchema = generateWebPageSchema({
    name: "Termos de Serviço - Lontra Ágil",
    description: "Termos de serviço e diretrizes de uso da plataforma Lontra Ágil",
    url: "https://lontraagil.com/terms",
    locale: "pt-br",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Início", url: "https://lontraagil.com", position: 1 },
    { name: "Termos de Serviço", url: "https://lontraagil.com/terms", position: 2 },
  ]);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <JsonLdScript data={webPageSchema} />
      <JsonLdScript data={breadcrumbSchema} />

      <PublicLayout>
        <div className="container mx-auto px-4 py-16">
          <article className="prose prose-lg mx-auto max-w-4xl dark:prose-invert">
            <h1>Termos de Serviço</h1>
            <p className="lead">
              Última atualização: {new Date().toLocaleDateString("pt-BR")}
            </p>

            <Section
              title="1. Aceitação dos Termos"
              content="Ao acessar e usar a plataforma Lontra Ágil, você concorda em cumprir e estar vinculado a estes Termos de Serviço. Se você não concordar com algum destes termos, não utilize nossa plataforma."
            />

            <Section
              title="2. Descrição do Serviço"
              content="A Lontra Ágil é uma plataforma que conecta desenvolvedores de software com contratantes para colaboração em projetos. Facilitamos a comunicação, gestão de projetos e processamento de pagamentos entre as partes."
            />

            <Section title="3. Elegibilidade" content="Para usar nossa plataforma, você deve:" />

            <ul>
              <li>Ter pelo menos 18 anos de idade</li>
              <li>Ter capacidade legal para firmar contratos vinculativos</li>
              <li>Não estar proibido de usar nossos serviços por qualquer lei aplicável</li>
              <li>Fornecer informações precisas e completas durante o cadastro</li>
            </ul>

            <Section title="4. Contas de Usuário" content="" />

            <SubSection
              title="4.1. Cadastro"
              items={[
                "Você é responsável por manter a confidencialidade de sua senha",
                "Você é responsável por todas as atividades em sua conta",
                "Notifique-nos imediatamente sobre qualquer uso não autorizado",
                "Não compartilhe sua conta com terceiros",
              ]}
            />

            <SubSection
              title="4.2. Precisão das Informações"
              items={[
                "Você concorda em fornecer informações verdadeiras e atualizadas",
                "Você concorda em manter suas informações atualizadas",
                "Informações falsas ou enganosas podem resultar em suspensão da conta",
              ]}
            />

            <Section title="5. Responsabilidades dos Usuários" content="" />

            <SubSection
              title="5.1. Desenvolvedores"
              items={[
                "Fornecer serviços de qualidade conforme acordado",
                "Cumprir prazos estabelecidos ou comunicar atrasos",
                "Manter comunicação profissional e respeitosa",
                "Não aceitar trabalhos que não possa executar",
                "Respeitar propriedade intelectual e confidencialidade",
              ]}
            />

            <SubSection
              title="5.2. Contratantes"
              items={[
                "Fornecer requisitos claros e completos do projeto",
                "Realizar pagamentos conforme acordado",
                "Respeitar direitos autorais do desenvolvedor",
                "Comunicar-se de forma profissional",
                "Fornecer feedback construtivo",
              ]}
            />

            <Section title="6. Pagamentos e Taxas" content="" />

            <ul>
              <li>Todos os pagamentos são processados através da plataforma</li>
              <li>Desenvolvedores: Taxa de plataforma de 5%</li>
              <li>Contratantes: Taxa de plataforma de 3%</li>
              <li>Os valores podem ser alterados com aviso prévio de 30 dias</li>
              <li>Reembolsos são processados de acordo com nossa política de disputas</li>
            </ul>

            <Section title="7. Propriedade Intelectual" content="" />

            <SubSection
              title="7.1. Conteúdo da Plataforma"
              items={[
                "Todo conteúdo da plataforma (design, código, textos) é propriedade da Lontra Ágil",
                "É proibido copiar, modificar ou distribuir nosso conteúdo sem autorização",
              ]}
            />

            <SubSection
              title="7.2. Conteúdo do Usuário"
              items={[
                "Você mantém propriedade do conteúdo que criar",
                "Você nos concede licença para usar seu conteúdo na plataforma",
                "Você é responsável por garantir que tem direitos sobre o conteúdo postado",
              ]}
            />

            <SubSection
              title="7.3. Trabalho Desenvolvido"
              items={[
                "Propriedade intelectual do trabalho deve ser acordada entre as partes",
                "Recomendamos estabelecer termos claros antes de iniciar o projeto",
              ]}
            />

            <Section title="8. Conduta Proibida" content="É proibido:" />

            <ul>
              <li>Usar a plataforma para atividades ilegais</li>
              <li>Assediar, intimidar ou ameaçar outros usuários</li>
              <li>Publicar conteúdo ofensivo, difamatório ou inadequado</li>
              <li>Tentar burlar o sistema de pagamentos</li>
              <li>Criar múltiplas contas para manipular o sistema</li>
              <li>Usar bots ou scripts automatizados sem autorização</li>
              <li>Compartilhar informações de login</li>
              <li>Realizar engenharia reversa da plataforma</li>
            </ul>

            <Section
              title="9. Suspensão e Encerramento de Conta"
              content="Reservamo-nos o direito de suspender ou encerrar sua conta se:"
            />

            <ul>
              <li>Você violar estes Termos de Serviço</li>
              <li>Houver atividade suspeita ou fraudulenta</li>
              <li>Você não responder a solicitações de verificação</li>
              <li>Por razões legais ou de segurança</li>
            </ul>

            <Section
              title="10. Isenção de Responsabilidade"
              content="A plataforma é fornecida 'como está'. Não garantimos que o serviço será ininterrupto ou livre de erros. Não somos responsáveis por:"
            />

            <ul>
              <li>Disputas entre desenvolvedores e contratantes</li>
              <li>Qualidade do trabalho executado</li>
              <li>Perda de dados ou lucros</li>
              <li>Problemas técnicos fora do nosso controle</li>
            </ul>

            <Section
              title="11. Limitação de Responsabilidade"
              content="Em nenhuma circunstância seremos responsáveis por danos indiretos, incidentais, especiais, consequentes ou punitivos resultantes do uso ou incapacidade de usar nossa plataforma."
            />

            <Section
              title="12. Resolução de Disputas"
              content="Em caso de disputas entre usuários, oferecemos um sistema de mediação. Para disputas com a Lontra Ágil, você concorda em tentar resolver amigavelmente antes de iniciar procedimentos legais."
            />

            <Section
              title="13. Lei Aplicável"
              content="Estes termos são regidos pelas leis do Brasil. Qualquer disputa será resolvida nos tribunais competentes da jurisdição brasileira."
            />

            <Section
              title="14. Alterações aos Termos"
              content="Podemos modificar estes termos a qualquer momento. Alterações significativas serão notificadas com 30 dias de antecedência. O uso continuado da plataforma após as alterações constitui aceitação dos novos termos."
            />

            <Section
              title="15. Contato"
              content="Para dúvidas sobre estes Termos de Serviço, entre em contato:"
            />

            <address>
              <strong>Lontra Ágil</strong>
              <br />
              Email: <a href="mailto:legal@lontraagil.com">legal@lontraagil.com</a>
              <br />
              Página de Contato: <a href="/contact">/contact</a>
            </address>
          </article>
        </div>
      </PublicLayout>
    </>
  );
}

// ============================================================================
// HELPER COMPONENTS
// ============================================================================

function Section({ title, content }: { title: string; content: string }) {
  return (
    <section>
      <h2>{title}</h2>
      {content && <p>{content}</p>}
    </section>
  );
}

function SubSection({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
```

**Key Features**:
- ✅ WebPage schema
- ✅ Breadcrumb schema
- ✅ Comprehensive terms covering all aspects
- ✅ Semantic HTML
- ✅ ISR: Revalidates every 365 days

**TODO**: Review with legal team before publishing.

---

## Task 7: Update Footer with New Pages

### File: `/src/components/landing-page-components/landing-page-footer.tsx`

Update the existing footer to include links to all new public pages.

**Enhanced implementation**:

```typescript
export function LandingPageFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Platform Section */}
          <div>
            <h3 className="mb-4 font-semibold">Plataforma</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/for-developers" className="hover:text-primary hover:underline">
                  Para Desenvolvedores
                </a>
              </li>
              <li>
                <a href="/for-contractors" className="hover:text-primary hover:underline">
                  Para Contratantes
                </a>
              </li>
              <li>
                <a href="/pricing" className="hover:text-primary hover:underline">
                  Preços
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-primary hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="mb-4 font-semibold">Empresa</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/about" className="hover:text-primary hover:underline">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-primary hover:underline">
                  Contato
                </a>
              </li>
              <li>
                <a href="/help" className="hover:text-primary hover:underline">
                  Ajuda & FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="mb-4 font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/privacy" className="hover:text-primary hover:underline">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-primary hover:underline">
                  Termos de Serviço
                </a>
              </li>
            </ul>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="mb-4 font-semibold">Redes Sociais</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://twitter.com/lontraagil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary hover:underline"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/lontraagil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary hover:underline"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/lontraagil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary hover:underline"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} Lontra Ágil. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
```

---

## Checklist

Before proceeding to Phase 4, ensure:

- [ ] PublicLayout component created
- [ ] About page implemented with AboutPage schema
- [ ] Contact page implemented with ContactPage schema
- [ ] Contact form has backend implementation (tRPC or API route)
- [ ] Pricing page implemented with pricing comparison
- [ ] Help/FAQ page implemented with FAQPage schema
- [ ] Privacy Policy page implemented
- [ ] Terms of Service page implemented
- [ ] Footer updated with links to all new pages
- [ ] All pages have ISR revalidation configured
- [ ] All pages build without errors
- [ ] All schemas validated with validator.schema.org
- [ ] Google Rich Results Test passes for FAQ page
- [ ] Lighthouse SEO score is 100/100 for all pages
- [ ] All legal content reviewed (Privacy & Terms)

---

## Testing

### 1. Build Test
```bash
npm run build
```

Ensure all pages build successfully.

### 2. Visual Test
Visit each page locally:
- http://localhost:3000/about
- http://localhost:3000/contact
- http://localhost:3000/pricing
- http://localhost:3000/help
- http://localhost:3000/privacy
- http://localhost:3000/terms

### 3. Schema Validation
For each page:
1. View page source
2. Copy JSON-LD script content
3. Validate at: https://validator.schema.org/

### 4. FAQ Rich Results
Test help page at: https://search.google.com/test/rich-results

Google should recognize the FAQPage schema and show expandable FAQ previews.

### 5. Accessibility Check
Run Lighthouse accessibility audit for each page. Target: 100/100

---

## Next Steps

Once Phase 3 is complete:
1. Optionally proceed to [Phase 4: Blog System](./04-PHASE-4-BLOG-SYSTEM.md)
2. Or skip to [Phase 5: Landing Variants](./05-PHASE-5-LANDING-VARIANTS.md)
3. Then complete [Phase 6: Sitemaps & Optimization](./06-PHASE-6-SITEMAPS-OPTIMIZATION.md)
