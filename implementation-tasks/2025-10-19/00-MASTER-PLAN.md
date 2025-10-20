# Master Implementation Plan: Public Pages Infrastructure

## Project Overview

**Goal**: Implement a comprehensive public pages infrastructure with minimal JavaScript, strong SEO, and bilingual support (en/pt-BR).

**Reference**: Based on the savoir-link project architecture, adapted for Lontra Ágil.

---

## Architecture Principles

### 1. Minimal JavaScript
- All public pages are Server Components by default
- Client Components only for interactive elements (forms, accordions, mobile menus)
- Zero JavaScript for static content rendering

### 2. SEO-First Approach
- Comprehensive metadata on every page
- JSON-LD structured data for rich results
- Open Graph and Twitter Cards for social sharing
- Canonical URLs to prevent duplicate content
- Dynamic sitemaps with proper caching

### 3. Performance Optimization
- Incremental Static Regeneration (ISR) for optimal caching
- Server-side rendering ensures search engines see full content
- Core Web Vitals optimization (LCP, FID, CLS)

### 4. Internationalization
- Bilingual metadata (en/pt-BR)
- Locale-aware schema generation
- hreflang tags for multilingual SEO

---

## Implementation Phases

### Phase 1: SEO Infrastructure (CRITICAL)
**Duration**: 1-2 days
**Priority**: HIGH
**Dependencies**: None

Create the foundational SEO utilities and components:
- JSON-LD schema generators
- Metadata helpers
- SEO components
- Sitemap infrastructure

**Deliverables**:
- `/src/lib/seo/json-ld-script.tsx`
- `/src/lib/seo/json-ld-schemas.ts`
- `/src/lib/seo/metadata-config.ts`
- `/src/lib/seo/sitemap-helpers.ts`
- `/src/app/robots.ts`

[📄 Detailed Documentation](./01-PHASE-1-SEO-INFRASTRUCTURE.md)

---

### Phase 2: Enhance Existing Pages
**Duration**: 1 day
**Priority**: HIGH
**Dependencies**: Phase 1

Enhance existing pages with comprehensive metadata:
- Update root layout with global metadata
- Enhance landing page with JSON-LD schemas
- Add metadata to auth pages

**Deliverables**:
- Enhanced `/src/app/layout.tsx`
- Enhanced `/src/app/page.tsx`
- Enhanced `/src/app/app/auth/developer/page.tsx`
- Enhanced `/src/app/app/auth/contractor/page.tsx`

[📄 Detailed Documentation](./02-PHASE-2-ENHANCE-EXISTING-PAGES.md)

---

### Phase 3: New Public Pages
**Duration**: 2-3 days
**Priority**: MEDIUM
**Dependencies**: Phase 1, Phase 2

Create essential public pages:
- About page
- Contact page
- Pricing page
- Help/FAQ page
- Privacy Policy
- Terms of Service

**Deliverables**:
- `/src/app/about/page.tsx`
- `/src/app/contact/page.tsx`
- `/src/app/pricing/page.tsx`
- `/src/app/help/page.tsx`
- `/src/app/privacy/page.tsx`
- `/src/app/terms/page.tsx`
- `/src/components/layout/public-layout.tsx`
- `/src/components/layout/public-footer.tsx`

[📄 Detailed Documentation](./03-PHASE-3-NEW-PUBLIC-PAGES.md)

---

### Phase 4: Blog System (OPTIONAL)
**Duration**: 2-3 days
**Priority**: LOW
**Dependencies**: Phase 1, Phase 3

Create a blog system with MDX support:
- Blog listing page
- Individual blog post pages
- BlogPosting schema
- Blog sitemap

**Deliverables**:
- `/src/app/blog/page.tsx`
- `/src/app/blog/[slug]/page.tsx`
- `/src/content/blog/*.mdx`
- `/src/app/sitemap/blog/route.ts`

[📄 Detailed Documentation](./04-PHASE-4-BLOG-SYSTEM.md)

---

### Phase 5: Landing Variants
**Duration**: 1-2 days
**Priority**: MEDIUM
**Dependencies**: Phase 1, Phase 3

Create targeted landing pages:
- For Developers landing page
- For Contractors landing page
- HowTo schemas for both

**Deliverables**:
- `/src/app/for-developers/page.tsx`
- `/src/app/for-contractors/page.tsx`

[📄 Detailed Documentation](./05-PHASE-5-LANDING-VARIANTS.md)

---

### Phase 6: Sitemaps & Optimization
**Duration**: 1 day
**Priority**: MEDIUM
**Dependencies**: All previous phases

Finalize SEO with sitemaps and optimization:
- Dynamic sitemap generation
- Image sitemaps
- Performance audit
- Core Web Vitals optimization

**Deliverables**:
- `/src/app/sitemap.xml/route.ts`
- `/src/app/sitemap/static/route.ts`
- Performance optimization report

[📄 Detailed Documentation](./06-PHASE-6-SITEMAPS-OPTIMIZATION.md)

---

## Timeline Overview

### Week 1
- **Days 1-2**: Phase 1 (SEO Infrastructure)
- **Day 3**: Phase 2 (Enhance Existing Pages)
- **Days 4-5**: Phase 3 Part 1 (About, Contact, Pricing)

### Week 2
- **Days 1-2**: Phase 3 Part 2 (Help, Privacy, Terms)
- **Day 3**: Phase 5 (Landing Variants)
- **Day 4**: Phase 6 (Sitemaps & Optimization)
- **Day 5**: Testing, QA, Documentation

### Optional (Week 3)
- Phase 4 (Blog System) if needed

---

## Success Criteria

### Technical Requirements
- ✅ All public pages are Server Components (except interactive elements)
- ✅ JavaScript bundle < 100KB for public pages
- ✅ All pages have comprehensive metadata
- ✅ JSON-LD schemas on all appropriate pages
- ✅ Open Graph and Twitter Cards on all pages
- ✅ Canonical URLs on all pages
- ✅ Dynamic sitemaps with proper caching
- ✅ robots.txt with proper directives

### SEO Requirements
- ✅ Google Rich Results Test passes for all schemas
- ✅ Google Search Console shows no metadata errors
- ✅ Social sharing previews work on Facebook, Twitter, LinkedIn
- ✅ All pages indexed by Google within 1 week

### Performance Requirements
- ✅ Lighthouse SEO score: 100/100
- ✅ Lighthouse Performance score: > 90/100
- ✅ Core Web Vitals: All green
- ✅ First Contentful Paint (FCP): < 1.5s
- ✅ Largest Contentful Paint (LCP): < 2.5s
- ✅ Cumulative Layout Shift (CLS): < 0.1

### Accessibility Requirements
- ✅ Lighthouse Accessibility score: 100/100
- ✅ WCAG 2.1 Level AA compliance
- ✅ Proper semantic HTML
- ✅ Keyboard navigation support

---

## Tools & Resources

### Testing Tools
- **Google Rich Results Test**: https://search.google.com/test/rich-results
- **Google Search Console**: https://search.google.com/search-console
- **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **Lighthouse**: Chrome DevTools
- **Schema Markup Validator**: https://validator.schema.org/

### Documentation
- **Next.js Metadata**: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
- **Schema.org**: https://schema.org/
- **Open Graph Protocol**: https://ogp.me/
- **Google Search Central**: https://developers.google.com/search

---

## Next Steps

1. **Read Phase 1 documentation**: [01-PHASE-1-SEO-INFRASTRUCTURE.md](./01-PHASE-1-SEO-INFRASTRUCTURE.md)
2. **Set up development environment**: Ensure all dependencies are installed
3. **Create feature branch**: `git checkout -b feat/public-pages-infrastructure`
4. **Start with Phase 1**: Follow the detailed implementation guide

---

## Questions & Support

If you have questions during implementation:
1. Check the phase-specific documentation
2. Review the savoir-link reference implementation
3. Test changes incrementally with Google Rich Results Test
4. Commit frequently with descriptive messages

---

## Maintenance

After implementation:
- Monitor Google Search Console for errors
- Review Core Web Vitals monthly
- Update metadata as business needs change
- Keep JSON-LD schemas current with Schema.org updates
- Test social sharing previews quarterly
