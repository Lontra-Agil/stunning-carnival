# Phase 1: SEO Infrastructure

**Duration**: 1-2 days
**Priority**: HIGH
**Dependencies**: None

---

## Overview

This phase creates the foundational SEO infrastructure that all other phases depend on. We'll build reusable utilities for:
- JSON-LD schema generation
- Metadata configuration
- SEO components
- Sitemap helpers
- Robots.txt configuration

---

## File Structure

```
/src/lib/seo/
├── json-ld-script.tsx           # Component to inject JSON-LD
├── json-ld-schemas.ts           # Schema.org generators
├── metadata-config.ts           # Centralized metadata
└── sitemap-helpers.ts           # Sitemap utilities

/src/app/
└── robots.ts                    # robots.txt configuration
```

---

## Task 1: Create JSON-LD Script Component

### File: `/src/lib/seo/json-ld-script.tsx`

**Purpose**: A reusable component that safely injects JSON-LD structured data into the page `<head>`.

**Implementation**:

```typescript
import type { Thing, WithContext } from "schema-dts";

interface JsonLdScriptProps {
  data: WithContext<Thing> | WithContext<Thing>[];
}

/**
 * Component to inject JSON-LD structured data into the page.
 *
 * @example
 * <JsonLdScript data={organizationSchema} />
 */
export function JsonLdScript({ data }: JsonLdScriptProps) {
  const jsonLd = Array.isArray(data) ? data : [data];

  return (
    <>
      {jsonLd.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema, null, 2),
          }}
        />
      ))}
    </>
  );
}
```

**Dependencies to install**:
```bash
npm install schema-dts
```

**Usage example**:
```typescript
import { JsonLdScript } from "@/lib/seo/json-ld-script";
import { generateOrganizationSchema } from "@/lib/seo/json-ld-schemas";

export default function AboutPage() {
  const orgSchema = generateOrganizationSchema();

  return (
    <>
      <JsonLdScript data={orgSchema} />
      {/* Page content */}
    </>
  );
}
```

---

## Task 2: Create JSON-LD Schema Generators

### File: `/src/lib/seo/json-ld-schemas.ts`

**Purpose**: Centralized schema generators for all Schema.org types used in the application.

**Implementation**:

```typescript
import type {
  AboutPage,
  BreadcrumbList,
  ContactPage,
  FAQPage,
  HowTo,
  LocalBusiness,
  Organization,
  WebPage,
  WebSite,
  BlogPosting,
  WithContext,
} from "schema-dts";

// ============================================================================
// SITE-WIDE CONFIGURATION
// ============================================================================

const SITE_CONFIG = {
  name: "Lontra Ágil",
  url: "https://lontraagil.com", // TODO: Update with production URL
  logo: "https://lontraagil.com/lontra-icon.svg",
  description: {
    en: "Platform connecting developers and contractors for agile project collaboration",
    "pt-br": "Plataforma que conecta desenvolvedores e contratantes para colaboração ágil em projetos",
  },
  email: "contact@lontraagil.com", // TODO: Update with real email
  socialMedia: {
    twitter: "https://twitter.com/lontraagil", // TODO: Update
    linkedin: "https://linkedin.com/company/lontraagil", // TODO: Update
    github: "https://github.com/lontraagil", // TODO: Update
  },
};

// ============================================================================
// ORGANIZATION SCHEMA
// ============================================================================

/**
 * Generates Organization schema for brand information.
 * Use this on all pages to establish brand identity.
 *
 * @param locale - Language locale (en or pt-br)
 */
export function generateOrganizationSchema(
  locale: "en" | "pt-br" = "pt-br"
): WithContext<Organization> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: {
      "@type": "ImageObject",
      url: SITE_CONFIG.logo,
      width: "512",
      height: "512",
    },
    description: SITE_CONFIG.description[locale],
    email: SITE_CONFIG.email,
    sameAs: [
      SITE_CONFIG.socialMedia.twitter,
      SITE_CONFIG.socialMedia.linkedin,
      SITE_CONFIG.socialMedia.github,
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "BR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: SITE_CONFIG.email,
    },
  };
}

// ============================================================================
// WEBSITE SCHEMA
// ============================================================================

/**
 * Generates WebSite schema with search action.
 * Use this on the homepage to enable sitelinks search box.
 */
export function generateWebSiteSchema(): WithContext<WebSite> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_CONFIG.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

// ============================================================================
// BREADCRUMB SCHEMA
// ============================================================================

interface BreadcrumbItem {
  name: string;
  url: string;
  position: number;
}

/**
 * Generates BreadcrumbList schema for navigation hierarchy.
 * Use this on all pages to show page hierarchy in search results.
 *
 * @example
 * const breadcrumbs = [
 *   { name: "Home", url: "https://lontraagil.com", position: 1 },
 *   { name: "About", url: "https://lontraagil.com/about", position: 2 }
 * ];
 */
export function generateBreadcrumbSchema(
  items: BreadcrumbItem[]
): WithContext<BreadcrumbList> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item) => ({
      "@type": "ListItem",
      position: item.position,
      name: item.name,
      item: item.url,
    })),
  };
}

// ============================================================================
// ABOUT PAGE SCHEMA
// ============================================================================

/**
 * Generates AboutPage schema.
 * Use this on the About page.
 */
export function generateAboutPageSchema(
  locale: "en" | "pt-br" = "pt-br"
): WithContext<AboutPage> {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: locale === "en" ? "About Lontra Ágil" : "Sobre Lontra Ágil",
    description: SITE_CONFIG.description[locale],
    url: `${SITE_CONFIG.url}/${locale}/about`,
    mainEntity: generateOrganizationSchema(locale),
  };
}

// ============================================================================
// CONTACT PAGE SCHEMA
// ============================================================================

/**
 * Generates ContactPage schema.
 * Use this on the Contact page.
 */
export function generateContactPageSchema(
  locale: "en" | "pt-br" = "pt-br"
): WithContext<ContactPage> {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: locale === "en" ? "Contact Us" : "Entre em Contato",
    description:
      locale === "en"
        ? "Get in touch with Lontra Ágil team"
        : "Entre em contato com a equipe Lontra Ágil",
    url: `${SITE_CONFIG.url}/${locale}/contact`,
  };
}

// ============================================================================
// FAQ PAGE SCHEMA
// ============================================================================

interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Generates FAQPage schema with questions and answers.
 * Use this on FAQ/Help pages to enable rich results.
 *
 * @example
 * const faqs = [
 *   { question: "What is Lontra Ágil?", answer: "..." },
 *   { question: "How does it work?", answer: "..." }
 * ];
 */
export function generateFAQPageSchema(
  faqs: FAQItem[],
  locale: "en" | "pt-br" = "pt-br"
): WithContext<FAQPage> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    name: locale === "en" ? "Frequently Asked Questions" : "Perguntas Frequentes",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// ============================================================================
// HOW-TO SCHEMA
// ============================================================================

interface HowToStep {
  name: string;
  text: string;
  url?: string;
  image?: string;
}

/**
 * Generates HowTo schema for step-by-step guides.
 * Use this on landing pages explaining processes.
 *
 * @example
 * const steps = [
 *   { name: "Sign Up", text: "Create your account", url: "/signup" },
 *   { name: "Create Project", text: "Post your project", url: "/projects/new" },
 *   { name: "Hire", text: "Find the perfect developer" }
 * ];
 */
export function generateHowToSchema(params: {
  name: string;
  description: string;
  steps: HowToStep[];
  totalTime?: string;
}): WithContext<HowTo> {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: params.name,
    description: params.description,
    totalTime: params.totalTime || "PT30M",
    step: params.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      url: step.url,
      image: step.image,
    })),
  };
}

// ============================================================================
// BLOG POSTING SCHEMA
// ============================================================================

/**
 * Generates BlogPosting schema for blog articles.
 * Use this on individual blog post pages.
 */
export function generateBlogPostingSchema(params: {
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  authorUrl?: string;
  image: string;
  url: string;
  locale: "en" | "pt-br";
}): WithContext<BlogPosting> {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: params.headline,
    description: params.description,
    image: params.image,
    datePublished: params.datePublished,
    dateModified: params.dateModified,
    author: {
      "@type": "Person",
      name: params.authorName,
      url: params.authorUrl,
    },
    publisher: generateOrganizationSchema(params.locale),
    url: params.url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": params.url,
    },
  };
}

// ============================================================================
// WEB PAGE SCHEMA (GENERIC)
// ============================================================================

/**
 * Generates generic WebPage schema.
 * Use this on pages that don't have a more specific schema type.
 */
export function generateWebPageSchema(params: {
  name: string;
  description: string;
  url: string;
  locale: "en" | "pt-br";
}): WithContext<WebPage> {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: params.name,
    description: params.description,
    url: params.url,
    inLanguage: params.locale === "en" ? "en-US" : "pt-BR",
    publisher: generateOrganizationSchema(params.locale),
  };
}

// ============================================================================
// LOCAL BUSINESS SCHEMA (For user profiles if needed)
// ============================================================================

/**
 * Generates LocalBusiness schema.
 * Use this for contractor/developer profiles if they have business info.
 */
export function generateLocalBusinessSchema(params: {
  name: string;
  description: string;
  url: string;
  image?: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry: string;
  };
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}): WithContext<LocalBusiness> {
  const schema: WithContext<LocalBusiness> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: params.name,
    description: params.description,
    url: params.url,
  };

  if (params.image) {
    schema.image = params.image;
  }

  if (params.address) {
    schema.address = {
      "@type": "PostalAddress",
      ...params.address,
    };
  }

  if (params.aggregateRating) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: params.aggregateRating.ratingValue.toString(),
      reviewCount: params.aggregateRating.reviewCount.toString(),
    };
  }

  return schema;
}
```

**Key Features**:
- ✅ Type-safe with `schema-dts`
- ✅ Bilingual support (en/pt-br)
- ✅ Centralized site configuration
- ✅ Reusable across all pages
- ✅ Follows Schema.org standards

---

## Task 3: Create Metadata Configuration

### File: `/src/lib/seo/metadata-config.ts`

**Purpose**: Centralized metadata definitions and helper functions for generating page metadata.

**Implementation**:

```typescript
import type { Metadata } from "next";

// ============================================================================
// SITE-WIDE CONFIGURATION
// ============================================================================

export const SITE_METADATA = {
  name: "Lontra Ágil",
  url: "https://lontraagil.com", // TODO: Update with production URL
  logo: "/lontra-icon.svg",
  ogImage: "/og-image.png", // TODO: Create OG image (1200x630px)
  twitterHandle: "@lontraagil", // TODO: Update with real handle
  defaultLocale: "pt-br" as const,
  supportedLocales: ["en", "pt-br"] as const,

  title: {
    en: "Lontra Ágil - Connect with Top Developers and Contractors",
    "pt-br": "Lontra Ágil - Conecte-se com Desenvolvedores e Contratantes",
  },

  description: {
    en: "Platform connecting developers and contractors for agile project collaboration. Find talent, post projects, and build amazing software together.",
    "pt-br": "Plataforma que conecta desenvolvedores e contratantes para colaboração ágil em projetos. Encontre talentos, publique projetos e construa software incrível juntos.",
  },

  keywords: {
    en: [
      "developers",
      "contractors",
      "freelance",
      "agile development",
      "project collaboration",
      "software development",
      "remote work",
      "tech talent",
    ],
    "pt-br": [
      "desenvolvedores",
      "contratantes",
      "freelancer",
      "desenvolvimento ágil",
      "colaboração em projetos",
      "desenvolvimento de software",
      "trabalho remoto",
      "talentos tech",
    ],
  },
};

// ============================================================================
// METADATA HELPERS
// ============================================================================

/**
 * Generates base metadata for a page with bilingual support.
 *
 * @example
 * export const metadata = generateMetadata({
 *   title: { en: "About Us", "pt-br": "Sobre Nós" },
 *   description: { en: "Learn about...", "pt-br": "Saiba mais sobre..." },
 *   path: "/about",
 *   locale: "pt-br",
 * });
 */
export function generateMetadata(params: {
  title: { en: string; "pt-br": string };
  description: { en: string; "pt-br": string };
  keywords?: { en: string[]; "pt-br": string[] };
  path: string;
  locale?: "en" | "pt-br";
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const locale = params.locale || SITE_METADATA.defaultLocale;
  const url = `${SITE_METADATA.url}${params.path}`;
  const image = params.image || SITE_METADATA.ogImage;

  return {
    title: params.title[locale],
    description: params.description[locale],
    keywords: params.keywords
      ? params.keywords[locale]
      : SITE_METADATA.keywords[locale],

    alternates: {
      canonical: url,
      languages: {
        en: `${SITE_METADATA.url}/en${params.path}`,
        "pt-BR": `${SITE_METADATA.url}/pt-br${params.path}`,
      },
    },

    openGraph: {
      type: "website",
      locale: locale === "en" ? "en_US" : "pt_BR",
      url,
      title: params.title[locale],
      description: params.description[locale],
      siteName: SITE_METADATA.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: params.title[locale],
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      site: SITE_METADATA.twitterHandle,
      creator: SITE_METADATA.twitterHandle,
      title: params.title[locale],
      description: params.description[locale],
      images: [image],
    },

    robots: {
      index: !params.noIndex,
      follow: !params.noIndex,
      googleBot: {
        index: !params.noIndex,
        follow: !params.noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

/**
 * Generates root layout metadata.
 * Use this in /src/app/layout.tsx
 */
export function generateRootMetadata(locale: "en" | "pt-br" = "pt-br"): Metadata {
  return {
    metadataBase: new URL(SITE_METADATA.url),

    title: {
      default: SITE_METADATA.title[locale],
      template: `%s | ${SITE_METADATA.name}`,
    },

    description: SITE_METADATA.description[locale],
    keywords: SITE_METADATA.keywords[locale],

    applicationName: SITE_METADATA.name,

    icons: {
      icon: [
        { url: "/lontra-icon.svg", type: "image/svg+xml" },
        { url: "/favicon.ico", sizes: "any" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    },

    manifest: "/site.webmanifest",

    openGraph: {
      type: "website",
      locale: locale === "en" ? "en_US" : "pt_BR",
      url: SITE_METADATA.url,
      siteName: SITE_METADATA.name,
      title: SITE_METADATA.title[locale],
      description: SITE_METADATA.description[locale],
      images: [
        {
          url: SITE_METADATA.ogImage,
          width: 1200,
          height: 630,
          alt: SITE_METADATA.name,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      site: SITE_METADATA.twitterHandle,
      creator: SITE_METADATA.twitterHandle,
      title: SITE_METADATA.title[locale],
      description: SITE_METADATA.description[locale],
      images: [SITE_METADATA.ogImage],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    verification: {
      google: "YOUR_GOOGLE_VERIFICATION_CODE", // TODO: Add after setting up Google Search Console
      // yandex: "YOUR_YANDEX_CODE",
      // bing: "YOUR_BING_CODE",
    },
  };
}
```

---

## Task 4: Create Sitemap Helpers

### File: `/src/lib/seo/sitemap-helpers.ts`

**Purpose**: Utility functions for generating sitemaps.

**Implementation**:

```typescript
import type { MetadataRoute } from "next";

/**
 * Generates a sitemap entry with proper defaults.
 */
export function createSitemapEntry(params: {
  url: string;
  lastModified?: Date | string;
  changeFrequency?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
}): MetadataRoute.Sitemap[number] {
  return {
    url: params.url,
    lastModified: params.lastModified || new Date(),
    changeFrequency: params.changeFrequency || "weekly",
    priority: params.priority || 0.5,
  };
}

/**
 * Generates static pages for sitemap.
 */
export function generateStaticPages(baseUrl: string): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "", priority: 1.0, changeFrequency: "daily" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/pricing", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/help", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/privacy", priority: 0.5, changeFrequency: "yearly" as const },
    { path: "/terms", priority: 0.5, changeFrequency: "yearly" as const },
    { path: "/for-developers", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/for-contractors", priority: 0.9, changeFrequency: "monthly" as const },
  ];

  return staticRoutes.map((route) =>
    createSitemapEntry({
      url: `${baseUrl}${route.path}`,
      priority: route.priority,
      changeFrequency: route.changeFrequency,
    })
  );
}

/**
 * Validates sitemap entries to ensure they meet requirements.
 */
export function validateSitemapEntries(
  entries: MetadataRoute.Sitemap
): MetadataRoute.Sitemap {
  return entries.filter((entry) => {
    // Ensure URL is valid
    if (!entry.url || !entry.url.startsWith("http")) {
      console.warn(`Invalid sitemap URL: ${entry.url}`);
      return false;
    }

    // Ensure priority is within valid range
    if (entry.priority !== undefined && (entry.priority < 0 || entry.priority > 1)) {
      console.warn(`Invalid priority for ${entry.url}: ${entry.priority}`);
      return false;
    }

    return true;
  });
}
```

---

## Task 5: Create robots.txt Configuration

### File: `/src/app/robots.ts`

**Purpose**: Configure which pages search engines can crawl.

**Implementation**:

```typescript
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://lontraagil.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/about",
          "/contact",
          "/pricing",
          "/help",
          "/privacy",
          "/terms",
          "/for-developers",
          "/for-contractors",
          "/blog",
        ],
        disallow: [
          "/app/dashboard/*",
          "/app/settings/*",
          "/api/*",
          "/app/auth/*",
          "/app/sso/*",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: ["/"],
        disallow: ["/app/*", "/api/*"],
        crawlDelay: 1,
      },
      {
        userAgent: "Bingbot",
        allow: ["/"],
        disallow: ["/app/*", "/api/*"],
        crawlDelay: 1,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
```

---

## Task 6: Install Dependencies

**Install required packages**:

```bash
npm install schema-dts
npm install --save-dev @types/node
```

**Verify TypeScript configuration** includes:
```json
{
  "compilerOptions": {
    "resolveJsonModule": true,
    "esModuleInterop": true
  }
}
```

---

## Testing & Validation

### 1. Test JSON-LD Schemas
```typescript
// Create a test file: /src/lib/seo/__tests__/json-ld-schemas.test.ts
import { generateOrganizationSchema } from "../json-ld-schemas";

const schema = generateOrganizationSchema("en");
console.log(JSON.stringify(schema, null, 2));
```

Validate output at: https://validator.schema.org/

### 2. Test Metadata Generation
```typescript
import { generateMetadata } from "@/lib/seo/metadata-config";

const metadata = generateMetadata({
  title: { en: "Test Page", "pt-br": "Página de Teste" },
  description: { en: "Test description", "pt-br": "Descrição de teste" },
  path: "/test",
  locale: "pt-br",
});

console.log(metadata);
```

### 3. Test robots.txt
After implementing, visit:
```
http://localhost:3000/robots.txt
```

Verify it returns proper rules.

---

## Checklist

Before proceeding to Phase 2, ensure:

- [ ] `/src/lib/seo/` directory created
- [ ] `json-ld-script.tsx` implemented
- [ ] `json-ld-schemas.ts` implemented with all schema types
- [ ] `metadata-config.ts` implemented
- [ ] `sitemap-helpers.ts` implemented
- [ ] `/src/app/robots.ts` implemented
- [ ] `schema-dts` package installed
- [ ] All TypeScript types are correct
- [ ] Schemas validated at validator.schema.org
- [ ] robots.txt accessible at /robots.txt
- [ ] Updated SITE_CONFIG with real URLs and emails

---

## Common Issues & Solutions

### Issue: TypeScript errors with schema-dts
**Solution**: Ensure you're using `WithContext<Type>` for all schema types:
```typescript
import type { Organization, WithContext } from "schema-dts";

const schema: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  // ...
};
```

### Issue: robots.txt not working
**Solution**: Ensure the file is at `/src/app/robots.ts` (not `robots.txt`). Next.js will automatically generate the route.

### Issue: Sitemap helpers not typed correctly
**Solution**: Import from `next`:
```typescript
import type { MetadataRoute } from "next";
```

---

## Next Steps

Once Phase 1 is complete:
1. Proceed to [Phase 2: Enhance Existing Pages](./02-PHASE-2-ENHANCE-EXISTING-PAGES.md)
2. Start using the SEO infrastructure in your existing pages
3. Test schemas with Google Rich Results Test
