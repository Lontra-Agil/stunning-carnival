# Phase 6: Sitemaps & Optimization

**Duration**: 1 day
**Priority**: MEDIUM
**Dependencies**: All previous phases

---

## Overview

This final phase completes the SEO implementation with:
- Dynamic sitemap generation
- Sitemap index
- Performance optimization
- Core Web Vitals improvements
- Final SEO audit

---

## Task 1: Create Sitemap Index

### File: `/src/app/sitemap.xml/route.ts`

```typescript
import type { MetadataRoute } from "next";

export const revalidate = 86400; // 24 hours

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://lontraagil.com";

  const sitemaps = [
    {
      loc: `${baseUrl}/sitemap/static.xml`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/sitemap/blog.xml`,
      lastmod: new Date().toISOString(),
    },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps
  .map(
    (sitemap) => `  <sitemap>
    <loc>${sitemap.loc}</loc>
    <lastmod>${sitemap.lastmod}</lastmod>
  </sitemap>`
  )
  .join("\n")}
</sitemapindex>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
```

---

## Task 2: Create Static Pages Sitemap

### File: `/src/app/sitemap/static/route.ts`

```typescript
import { generateStaticPages, validateSitemapEntries } from "@/lib/seo/sitemap-helpers";

export const revalidate = 86400; // 24 hours

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://lontraagil.com";

  const pages = generateStaticPages(baseUrl);
  const validatedPages = validateSitemapEntries(pages);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${validatedPages
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastModified instanceof Date ? page.lastModified.toISOString() : new Date().toISOString()}</lastmod>
    <changefreq>${page.changeFrequency || "weekly"}</changefreq>
    <priority>${page.priority || 0.5}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
```

---

## Task 3: Add Environment Variable

### File: `.env` or `.env.local`

Add:
```
NEXT_PUBLIC_BASE_URL=https://lontraagil.com
```

For local development:
```
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### Update: `/src/env.js`

Add to client schema:
```typescript
client: {
  NEXT_PUBLIC_BASE_URL: z.string().url().default("http://localhost:3000"),
},

runtimeEnv: {
  NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
},
```

---

## Task 4: Performance Optimization

### A. Image Optimization

Ensure all images use Next.js `<Image>` component with proper sizing:

```typescript
import Image from "next/image";

// ✅ Good - Optimized
<Image
  src="/hero.jpg"
  alt="Hero image"
  width={1200}
  height={630}
  priority // For LCP images (above the fold)
/>

// ❌ Bad - Not optimized
<img src="/hero.jpg" alt="Hero image" />
```

**For public pages**:
- Hero images: Use `priority` prop
- Other images: Use lazy loading (default)
- Provide explicit width/height
- Use modern formats (WebP, AVIF) when possible

### B. Font Optimization

Already optimized with Geist Sans in root layout:

```typescript
import { GeistSans } from "geist/font/sans";

<html className={GeistSans.className}>
```

This uses Next.js font optimization (`font-display: swap`).

### C. JavaScript Bundle Optimization

**Check bundle size**:
```bash
npm run build
```

Look for large bundles in output. If any page exceeds 200KB:

1. **Code split large components**:
```typescript
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("./HeavyComponent"), {
  loading: () => <p>Loading...</p>,
});
```

2. **Lazy load client components**:
```typescript
"use client";

import { lazy, Suspense } from "react";

const Chart = lazy(() => import("./Chart"));

export function Dashboard() {
  return (
    <Suspense fallback={<div>Loading chart...</div>}>
      <Chart />
    </Suspense>
  );
}
```

### D. CSS Optimization

Tailwind CSS is already optimized with purging in production.

Verify in `tailwind.config.ts`:
```typescript
content: [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
],
```

---

## Task 5: Core Web Vitals Optimization

### A. Largest Contentful Paint (LCP)

**Target**: < 2.5 seconds

**Optimizations**:
1. Use `priority` on hero images
2. Preload critical assets
3. Optimize server response time
4. Use CDN for static assets

```typescript
// In page component
<Image
  src="/hero.jpg"
  alt="Hero"
  width={1200}
  height={630}
  priority // Preloads this image
/>
```

### B. First Input Delay (FID) / Interaction to Next Paint (INP)

**Target**: < 100ms (FID), < 200ms (INP)

**Optimizations**:
1. Minimize JavaScript execution
2. Use Server Components (already doing this)
3. Lazy load non-critical JS
4. Avoid long tasks (> 50ms)

### C. Cumulative Layout Shift (CLS)

**Target**: < 0.1

**Optimizations**:
1. Always specify image dimensions
2. Reserve space for dynamic content
3. Avoid inserting content above existing content
4. Use `font-display: swap` (already done with Geist)

```typescript
// ✅ Good - Prevents layout shift
<Image src="/image.jpg" width={800} height={600} alt="..." />

// ❌ Bad - Causes layout shift
<img src="/image.jpg" alt="..." />
```

---

## Task 6: Add Structured Data Testing Script

### File: `/scripts/test-structured-data.js`

```javascript
#!/usr/bin/env node

/**
 * Tests structured data on all public pages
 * Usage: node scripts/test-structured-data.js
 */

const pages = [
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
];

const baseUrl = process.env.BASE_URL || "http://localhost:3000";

async function testPage(path) {
  const url = `${baseUrl}${path}`;
  console.log(`\nTesting: ${url}`);

  try {
    const response = await fetch(url);
    const html = await response.text();

    // Extract JSON-LD scripts
    const jsonLdRegex = /<script type="application\/ld\+json">(.*?)<\/script>/gs;
    const matches = [...html.matchAll(jsonLdRegex)];

    if (matches.length === 0) {
      console.log("  ❌ No JSON-LD found");
      return;
    }

    console.log(`  ✅ Found ${matches.length} JSON-LD script(s)`);

    matches.forEach((match, index) => {
      try {
        const json = JSON.parse(match[1]);
        console.log(`    Schema ${index + 1}: ${json["@type"]}`);
      } catch (error) {
        console.log(`    ❌ Invalid JSON in schema ${index + 1}`);
      }
    });
  } catch (error) {
    console.log(`  ❌ Error fetching page: ${error.message}`);
  }
}

async function testAll() {
  console.log("Testing structured data on public pages...");
  console.log(`Base URL: ${baseUrl}`);

  for (const page of pages) {
    await testPage(page);
  }

  console.log("\n✅ Testing complete!");
  console.log("\nNext steps:");
  console.log("1. Validate schemas at: https://validator.schema.org/");
  console.log("2. Test rich results at: https://search.google.com/test/rich-results");
}

testAll();
```

Make executable:
```bash
chmod +x scripts/test-structured-data.js
```

Add to `package.json`:
```json
"scripts": {
  "test:seo": "node scripts/test-structured-data.js"
}
```

---

## Task 7: Final SEO Audit Checklist

Create a comprehensive checklist for final review.

### File: `/implementation-tasks/SEO-AUDIT-CHECKLIST.md`

```markdown
# SEO Audit Checklist

## Technical SEO

### Metadata
- [ ] All pages have unique `<title>` tags (50-60 characters)
- [ ] All pages have unique meta descriptions (150-160 characters)
- [ ] All pages have relevant keywords
- [ ] All pages have canonical URLs
- [ ] Root layout has proper metadataBase
- [ ] Favicon exists and loads correctly
- [ ] Apple touch icon exists
- [ ] Web manifest exists and is valid

### Structured Data
- [ ] Organization schema on all pages
- [ ] WebSite schema on homepage (with SearchAction)
- [ ] BreadcrumbList schema on all pages
- [ ] AboutPage schema on /about
- [ ] ContactPage schema on /contact
- [ ] FAQPage schema on /help
- [ ] HowTo schema on landing variants
- [ ] BlogPosting schema on blog posts (if applicable)
- [ ] All schemas pass validator.schema.org
- [ ] All schemas pass Google Rich Results Test

### Open Graph
- [ ] All pages have og:title
- [ ] All pages have og:description
- [ ] All pages have og:image (1200x630px)
- [ ] All pages have og:url
- [ ] All pages have og:type
- [ ] OG images load correctly
- [ ] Facebook Sharing Debugger shows correct preview

### Twitter Cards
- [ ] All pages have twitter:card
- [ ] All pages have twitter:title
- [ ] All pages have twitter:description
- [ ] All pages have twitter:image
- [ ] Twitter Card Validator shows correct preview

### Sitemaps
- [ ] robots.txt accessible at /robots.txt
- [ ] robots.txt has correct directives
- [ ] robots.txt points to sitemap
- [ ] Sitemap index accessible at /sitemap.xml
- [ ] Static sitemap accessible at /sitemap/static.xml
- [ ] Blog sitemap accessible at /sitemap/blog.xml (if applicable)
- [ ] All URLs in sitemaps are valid
- [ ] Sitemaps have proper lastmod dates

### Performance
- [ ] Lighthouse Performance score > 90
- [ ] Lighthouse SEO score = 100
- [ ] Lighthouse Accessibility score > 95
- [ ] Lighthouse Best Practices score > 90
- [ ] Core Web Vitals all green
- [ ] LCP < 2.5s
- [ ] FID < 100ms (or INP < 200ms)
- [ ] CLS < 0.1
- [ ] No render-blocking resources
- [ ] Images optimized (WebP/AVIF)
- [ ] Fonts optimized (font-display: swap)

### Mobile
- [ ] All pages are mobile-responsive
- [ ] Touch targets are at least 48x48px
- [ ] Text is readable without zooming
- [ ] Viewport meta tag is set correctly
- [ ] No horizontal scrolling

### Accessibility
- [ ] All images have alt text
- [ ] Proper heading hierarchy (h1 > h2 > h3)
- [ ] Semantic HTML (header, nav, main, footer, article)
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Color contrast meets WCAG AA
- [ ] ARIA labels where appropriate
- [ ] No accessibility errors in Lighthouse

## Content SEO

### Homepage
- [ ] Clear value proposition
- [ ] Relevant keywords in H1
- [ ] CTA buttons present and functional
- [ ] Internal links to key pages

### Public Pages
- [ ] Each page has unique, valuable content
- [ ] Keywords naturally integrated
- [ ] Proper heading structure
- [ ] Internal linking strategy
- [ ] No duplicate content

### URLs
- [ ] Clean, readable URLs
- [ ] Keywords in URLs where appropriate
- [ ] No underscores (use hyphens)
- [ ] Lowercase letters
- [ ] No dynamic parameters for public pages

## Indexing & Crawling

### Google Search Console
- [ ] Property verified
- [ ] Sitemap submitted
- [ ] No crawl errors
- [ ] No manual actions
- [ ] Mobile usability: no issues

### Bing Webmaster Tools
- [ ] Site verified
- [ ] Sitemap submitted

## Security
- [ ] HTTPS enabled (production)
- [ ] SSL certificate valid
- [ ] No mixed content warnings
- [ ] Security headers configured

## Analytics
- [ ] Google Analytics installed (if desired)
- [ ] Google Tag Manager installed (if desired)
- [ ] Conversion tracking set up
- [ ] Core Web Vitals tracking enabled

## Testing
- [ ] All pages load without errors
- [ ] All links work (no 404s)
- [ ] Forms submit correctly
- [ ] CTAs link to correct pages
- [ ] Email links work
- [ ] Social media links work

## Deployment
- [ ] Production domain configured
- [ ] NEXT_PUBLIC_BASE_URL set correctly
- [ ] Environment variables configured
- [ ] Edge functions work (if using Vercel/Netlify)
- [ ] ISR revalidation working

## Post-Launch
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Request indexing for key pages
- [ ] Monitor Core Web Vitals
- [ ] Monitor search rankings
- [ ] Fix any errors in Search Console

---

## Tools Used

- [ ] Google Search Console: https://search.google.com/search-console
- [ ] Google Rich Results Test: https://search.google.com/test/rich-results
- [ ] Schema Markup Validator: https://validator.schema.org/
- [ ] Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
- [ ] Twitter Card Validator: https://cards-dev.twitter.com/validator
- [ ] PageSpeed Insights: https://pagespeed.web.dev/
- [ ] Lighthouse: Chrome DevTools
- [ ] WAVE Accessibility: https://wave.webaim.org/
```

---

## Task 8: Create Performance Monitoring Script

### File: `/scripts/check-performance.js`

```javascript
#!/usr/bin/env node

/**
 * Checks Core Web Vitals for all public pages
 * Requires: npm install lighthouse
 * Usage: node scripts/check-performance.js
 */

const lighthouse = require("lighthouse");
const chromeLauncher = require("chrome-launcher");

const pages = [
  "/",
  "/about",
  "/contact",
  "/pricing",
  "/help",
  "/for-developers",
  "/for-contractors",
];

const baseUrl = process.env.BASE_URL || "http://localhost:3000";

async function runLighthouse(url) {
  const chrome = await chromeLauncher.launch({ chromeFlags: ["--headless"] });
  const options = {
    logLevel: "error",
    output: "json",
    onlyCategories: ["performance", "seo", "accessibility"],
    port: chrome.port,
  };

  const runnerResult = await lighthouse(url, options);
  await chrome.kill();

  return runnerResult.lhr;
}

async function checkPage(path) {
  const url = `${baseUrl}${path}`;
  console.log(`\nChecking: ${url}`);

  try {
    const result = await runLighthouse(url);

    const scores = {
      performance: result.categories.performance.score * 100,
      seo: result.categories.seo.score * 100,
      accessibility: result.categories.accessibility.score * 100,
    };

    console.log(`  Performance: ${scores.performance}/100`);
    console.log(`  SEO: ${scores.seo}/100`);
    console.log(`  Accessibility: ${scores.accessibility}/100`);

    // Core Web Vitals
    const lcp = result.audits["largest-contentful-paint"].numericValue / 1000;
    const fid = result.audits["max-potential-fid"].numericValue;
    const cls = result.audits["cumulative-layout-shift"].numericValue;

    console.log(`  LCP: ${lcp.toFixed(2)}s (target: < 2.5s)`);
    console.log(`  FID: ${fid.toFixed(0)}ms (target: < 100ms)`);
    console.log(`  CLS: ${cls.toFixed(3)} (target: < 0.1)`);

    if (scores.seo < 100) {
      console.log("  ⚠️  SEO score below 100!");
    }

    if (lcp > 2.5 || fid > 100 || cls > 0.1) {
      console.log("  ⚠️  Core Web Vitals need improvement!");
    }
  } catch (error) {
    console.log(`  ❌ Error: ${error.message}`);
  }
}

async function checkAll() {
  console.log("Checking performance for public pages...");
  console.log(`Base URL: ${baseUrl}`);

  for (const page of pages) {
    await checkPage(page);
  }

  console.log("\n✅ Performance check complete!");
}

checkAll();
```

---

## Checklist

Before going live, ensure:

- [ ] Sitemap index created and accessible
- [ ] Static sitemap created and accessible
- [ ] Blog sitemap created (if applicable)
- [ ] Environment variable NEXT_PUBLIC_BASE_URL set
- [ ] All images use Next.js Image component
- [ ] Hero images have `priority` prop
- [ ] Fonts optimized (already using Geist)
- [ ] JavaScript bundles < 200KB per page
- [ ] SEO test script created and run
- [ ] Performance check script created (optional)
- [ ] SEO audit checklist completed
- [ ] Lighthouse scores meet targets:
  - Performance: > 90
  - SEO: 100
  - Accessibility: > 95
- [ ] Core Web Vitals meet targets:
  - LCP: < 2.5s
  - FID/INP: < 100ms/200ms
  - CLS: < 0.1
- [ ] All sitemaps submitted to Google Search Console
- [ ] All sitemaps submitted to Bing Webmaster Tools

---

## Post-Implementation

### Week 1
- Monitor Google Search Console for crawl errors
- Fix any errors reported
- Request indexing for key pages

### Week 2-4
- Monitor search rankings
- Track Core Web Vitals in Search Console
- Analyze user behavior with analytics

### Monthly
- Review Core Web Vitals
- Check for broken links
- Update content as needed
- Add new blog posts (if applicable)

---

## Troubleshooting

### Sitemap not accessible
**Solution**: Ensure route files are at correct paths and returning XML with proper headers.

### Low Lighthouse scores
**Solution**: Run Lighthouse in incognito mode, check for render-blocking resources, optimize images.

### Schemas not validating
**Solution**: Copy JSON-LD from page source, paste into validator.schema.org, fix errors.

### High CLS
**Solution**: Add explicit width/height to all images, reserve space for dynamic content.

---

## Next Steps

**Implementation complete! 🎉**

1. Deploy to production
2. Update NEXT_PUBLIC_BASE_URL to production domain
3. Submit sitemaps to search engines
4. Monitor performance and rankings
5. Iterate based on data

**Optional enhancements**:
- Add blog content regularly
- Implement A/B testing on landing pages
- Add multilingual support beyond en/pt-BR
- Implement advanced analytics
- Create custom 404 page with suggestions
