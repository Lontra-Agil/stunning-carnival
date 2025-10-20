# Quick Start Guide

**Welcome to the Public Pages Infrastructure Implementation!**

This guide will help you get started quickly with implementing the SEO-optimized public pages infrastructure for Lontra Ágil.

---

## Prerequisites

- Node.js 18+ installed
- Project cloned and dependencies installed
- Basic understanding of Next.js App Router
- Git for version control

---

## Step 1: Review the Master Plan

Read the [Master Implementation Plan](./00-MASTER-PLAN.md) to understand:
- Overall architecture
- Implementation phases
- Success criteria
- Timeline

**Time**: 15 minutes

---

## Step 2: Start with Phase 1 (SEO Infrastructure)

This is the **foundation** for everything else.

### What you'll build:
- JSON-LD schema generators
- Metadata configuration helpers
- SEO components
- robots.txt

### How to start:

1. **Read the documentation**:
   - Open [01-PHASE-1-SEO-INFRASTRUCTURE.md](./01-PHASE-1-SEO-INFRASTRUCTURE.md)
   - Follow each task sequentially

2. **Install dependencies**:
   ```bash
   npm install schema-dts
   ```

3. **Create the SEO infrastructure**:
   ```bash
   mkdir -p src/lib/seo
   ```

4. **Implement files** (in this order):
   - `src/lib/seo/json-ld-script.tsx`
   - `src/lib/seo/json-ld-schemas.ts`
   - `src/lib/seo/metadata-config.ts`
   - `src/lib/seo/sitemap-helpers.ts`
   - `src/app/robots.ts`

5. **Test**:
   ```bash
   npm run build
   ```

6. **Verify**:
   - Visit http://localhost:3000/robots.txt
   - Should see robots.txt content

**Time**: 2-3 hours

---

## Step 3: Proceed to Phase 2 (Enhance Existing Pages)

Once Phase 1 is complete, enhance your existing pages.

### What you'll do:
- Update root layout metadata
- Add schemas to landing page
- Add schemas to auth pages

### How to start:

1. **Read the documentation**:
   - Open [02-PHASE-2-ENHANCE-EXISTING-PAGES.md](./02-PHASE-2-ENHANCE-EXISTING-PAGES.md)

2. **Update files** (in this order):
   - `src/app/layout.tsx`
   - `src/app/page.tsx`
   - `src/app/app/auth/developer/page.tsx`
   - `src/app/app/auth/contractor/page.tsx`

3. **Create OG image**:
   - Create `/public/og-image.png` (1200x630px)
   - OR implement dynamic OG image generation

4. **Test**:
   ```bash
   npm run build && npm start
   ```

5. **Verify**:
   - View page source of http://localhost:3000
   - Look for `<script type="application/ld+json">` tags
   - Validate at https://validator.schema.org/

**Time**: 1-2 hours

---

## Step 4: Create New Public Pages (Phase 3)

Build essential public pages.

### What you'll build:
- PublicLayout component
- About page
- Contact page
- Pricing page
- Help/FAQ page
- Privacy Policy
- Terms of Service

### How to start:

1. **Read the documentation**:
   - Open [03-PHASE-3-NEW-PUBLIC-PAGES.md](./03-PHASE-3-NEW-PUBLIC-PAGES.md)

2. **Create layout**:
   ```bash
   mkdir -p src/components/layout
   ```
   - Implement `src/components/layout/public-layout.tsx`
   - Implement `src/components/layout/public-footer.tsx`

3. **Create pages** (one at a time):
   ```bash
   mkdir -p src/app/about
   mkdir -p src/app/contact
   mkdir -p src/app/pricing
   mkdir -p src/app/help
   mkdir -p src/app/privacy
   mkdir -p src/app/terms
   ```

4. **Implement each page**:
   - Follow the examples in the documentation
   - Test each page after creation

5. **Update footer**:
   - Add links to new pages in footer

**Time**: 4-6 hours (spread over 2 days)

---

## Step 5: Optional - Blog System (Phase 4)

**SKIP THIS** if you don't need a blog initially. You can always add it later.

If you want a blog:
1. Read [04-PHASE-4-BLOG-SYSTEM.md](./04-PHASE-4-BLOG-SYSTEM.md)
2. Install MDX dependencies
3. Create blog pages
4. Write sample blog posts

**Time**: 3-4 hours

---

## Step 6: Create Landing Variants (Phase 5)

Create targeted landing pages for developers and contractors.

### What you'll build:
- `/for-developers` page
- `/for-contractors` page

### How to start:

1. **Read the documentation**:
   - Open [05-PHASE-5-LANDING-VARIANTS.md](./05-PHASE-5-LANDING-VARIANTS.md)

2. **Install icon library** (if not already installed):
   ```bash
   npm install lucide-react
   ```

3. **Create pages**:
   ```bash
   mkdir -p src/app/for-developers
   mkdir -p src/app/for-contractors
   ```

4. **Implement**:
   - Follow the examples in the documentation
   - Customize content for your brand

**Time**: 2-3 hours

---

## Step 7: Finalize Sitemaps & Optimization (Phase 6)

Complete the SEO implementation.

### What you'll do:
- Create dynamic sitemaps
- Optimize performance
- Run final audits

### How to start:

1. **Read the documentation**:
   - Open [06-PHASE-6-SITEMAPS-OPTIMIZATION.md](./06-PHASE-6-SITEMAPS-OPTIMIZATION.md)

2. **Create sitemaps**:
   ```bash
   mkdir -p src/app/sitemap.xml
   mkdir -p src/app/sitemap/static
   mkdir -p src/app/sitemap/blog  # If you have a blog
   ```

3. **Add environment variable**:
   - Update `.env.local` with `NEXT_PUBLIC_BASE_URL`

4. **Run audits**:
   - Lighthouse audit
   - Validate schemas
   - Check Core Web Vitals

**Time**: 2-3 hours

---

## Testing Strategy

### After Each Phase:

1. **Build test**:
   ```bash
   npm run build
   ```
   Ensure no errors.

2. **Visual test**:
   ```bash
   npm run dev
   ```
   Visit pages in browser, check layout.

3. **Schema validation**:
   - View page source
   - Copy JSON-LD scripts
   - Validate at https://validator.schema.org/

4. **Lighthouse audit**:
   - Open Chrome DevTools
   - Go to Lighthouse tab
   - Run audit (Performance, SEO, Accessibility)
   - Target: SEO = 100/100

---

## Recommended Order

### Week 1:
- **Day 1**: Phase 1 (SEO Infrastructure)
- **Day 2**: Phase 2 (Enhance Existing Pages)
- **Day 3**: Phase 3 Part 1 (PublicLayout, About, Contact)
- **Day 4**: Phase 3 Part 2 (Pricing, Help)
- **Day 5**: Phase 3 Part 3 (Privacy, Terms)

### Week 2:
- **Day 1**: Phase 5 (Landing Variants)
- **Day 2**: Phase 6 (Sitemaps & Optimization)
- **Day 3**: Testing & QA
- **Day 4**: Deploy to staging
- **Day 5**: Final review & deploy to production

### Optional Week 3:
- **If needed**: Phase 4 (Blog System)

---

## Common Pitfalls to Avoid

### 1. Skipping Phase 1
❌ **Don't start with Phase 2 or 3 without completing Phase 1**

Phase 1 creates the foundation. Without it, you'll have to refactor later.

### 2. Not Testing Schemas
❌ **Don't skip schema validation**

Invalid schemas won't show in rich results. Always validate at validator.schema.org.

### 3. Forgetting ISR Configuration
❌ **Don't forget to add `export const revalidate`**

Without ISR, pages won't be cached properly.

### 4. Hardcoding URLs
❌ **Don't hardcode URLs like "https://lontraagil.com"**

Use the centralized config in `metadata-config.ts` and `json-ld-schemas.ts`.

### 5. Not Updating Production URLs
❌ **Don't forget to update NEXT_PUBLIC_BASE_URL for production**

Before deploying, update environment variables with production domain.

---

## Getting Help

### If you encounter errors:

1. **TypeScript errors**:
   - Check imports are correct
   - Ensure `schema-dts` is installed
   - Run `npm run typecheck`

2. **Build errors**:
   - Check file paths are correct
   - Ensure all required files exist
   - Run `npm run build` to see detailed errors

3. **Schema validation errors**:
   - Copy JSON-LD from page source
   - Paste into validator.schema.org
   - Fix errors shown in validator

4. **Lighthouse SEO not 100**:
   - Check all metadata is present
   - Ensure canonical URLs are set
   - Verify meta descriptions exist
   - Check that images have alt text

---

## Customization Checklist

Before going live, customize these:

### In `src/lib/seo/metadata-config.ts`:
- [ ] Update SITE_METADATA.url to production URL
- [ ] Update SITE_METADATA.twitterHandle
- [ ] Update SITE_METADATA.description (en & pt-br)
- [ ] Update SITE_METADATA.keywords (en & pt-br)

### In `src/lib/seo/json-ld-schemas.ts`:
- [ ] Update SITE_CONFIG.url to production URL
- [ ] Update SITE_CONFIG.email to real email
- [ ] Update SITE_CONFIG.socialMedia URLs

### In content files:
- [ ] Review all placeholder content
- [ ] Update contact information
- [ ] Customize About page with real company info
- [ ] Review Privacy Policy with legal team
- [ ] Review Terms of Service with legal team

### Assets:
- [ ] Create OG image (1200x630px)
- [ ] Create favicon.ico
- [ ] Create apple-touch-icon.png
- [ ] Update site.webmanifest

---

## Post-Implementation

After completing all phases:

### 1. Deploy to Staging
```bash
# Build and test
npm run build
npm start

# If all tests pass, deploy to staging
```

### 2. Run Final Checks
- [ ] All pages load without errors
- [ ] All schemas validate
- [ ] Lighthouse SEO = 100/100
- [ ] Core Web Vitals all green
- [ ] Mobile responsive on all pages
- [ ] All links work

### 3. Deploy to Production
```bash
# Update environment variables
# Deploy to production
```

### 4. Submit Sitemaps
- [ ] Google Search Console: Submit sitemap.xml
- [ ] Bing Webmaster Tools: Submit sitemap.xml

### 5. Monitor
- Week 1: Check for crawl errors daily
- Week 2-4: Monitor search rankings
- Monthly: Review Core Web Vitals

---

## Resources

### Documentation
- [Next.js Metadata](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Schema.org](https://schema.org/)
- [Google Search Central](https://developers.google.com/search)

### Testing Tools
- [Schema Validator](https://validator.schema.org/)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Facebook Debugger](https://developers.facebook.com/tools/debug/)

### Your Documentation
- [Master Plan](./00-MASTER-PLAN.md)
- [Phase 1: SEO Infrastructure](./01-PHASE-1-SEO-INFRASTRUCTURE.md)
- [Phase 2: Enhance Existing Pages](./02-PHASE-2-ENHANCE-EXISTING-PAGES.md)
- [Phase 3: New Public Pages](./03-PHASE-3-NEW-PUBLIC-PAGES.md)
- [Phase 4: Blog System](./04-PHASE-4-BLOG-SYSTEM.md)
- [Phase 5: Landing Variants](./05-PHASE-5-LANDING-VARIANTS.md)
- [Phase 6: Sitemaps & Optimization](./06-PHASE-6-SITEMAPS-OPTIMIZATION.md)

---

## Ready to Begin?

1. Read the [Master Plan](./00-MASTER-PLAN.md)
2. Start with [Phase 1](./01-PHASE-1-SEO-INFRASTRUCTURE.md)
3. Follow the phases sequentially
4. Test after each phase
5. Deploy and monitor

**Good luck! 🚀**

If you follow this guide and the phase documentation, you'll have a fully SEO-optimized public pages infrastructure in about 1-2 weeks.
