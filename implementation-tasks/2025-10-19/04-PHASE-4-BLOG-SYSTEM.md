# Phase 4: Blog System (OPTIONAL)

**Duration**: 2-3 days
**Priority**: LOW
**Dependencies**: Phase 1, Phase 3

---

## Overview

This phase implements a complete blog system with MDX support. This is **OPTIONAL** and can be skipped if you don't need a blog initially.

**Features**:
- MDX-based blog posts (Markdown + JSX components)
- Blog listing page with pagination
- Individual blog post pages
- BlogPosting schema for SEO
- Blog sitemap
- Author system
- Categories/tags
- Reading time estimation
- Code syntax highlighting

---

## Architecture Decision

We'll use **MDX** (Markdown + JSX) for blog content because:
- ✅ Write content in Markdown (easy for non-developers)
- ✅ Embed React components when needed
- ✅ Type-safe with TypeScript
- ✅ Git-based content management
- ✅ No database required for blog posts
- ✅ Fast builds with static generation

**Alternative**: Headless CMS (Contentful, Sanity, Strapi) - consider if you need non-technical editors.

---

## File Structure

```
/src/
├── /app/
│   └── /blog/
│       ├── page.tsx                  # Blog listing
│       ├── [slug]/
│       │   └── page.tsx              # Individual blog post
│       └── opengraph-image.tsx       # OG image for blog
├── /content/
│   └── /blog/
│       ├── getting-started.mdx
│       ├── how-to-hire-developers.mdx
│       └── agile-best-practices.mdx
├── /lib/
│   └── /blog/
│       ├── mdx.ts                    # MDX processing utilities
│       ├── get-posts.ts              # Get all posts
│       └── get-post.ts               # Get single post
└── /components/
    └── /blog/
        ├── blog-card.tsx             # Blog post card
        ├── blog-header.tsx           # Post header
        ├── mdx-components.tsx        # Custom MDX components
        └── reading-time.tsx          # Reading time badge
```

---

## Task 1: Install Dependencies

```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react @types/mdx
npm install gray-matter reading-time
npm install rehype-pretty-code rehype-slug rehype-autolink-headings
npm install shiki
```

**Package purposes**:
- `@next/mdx`: Next.js MDX support
- `gray-matter`: Parse frontmatter from MDX files
- `reading-time`: Estimate reading time
- `rehype-pretty-code`: Syntax highlighting
- `rehype-slug`: Add IDs to headings
- `rehype-autolink-headings`: Make headings linkable
- `shiki`: Syntax highlighter (VS Code themes)

---

## Task 2: Configure MDX

### File: `/next.config.js`

```javascript
import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

import "./src/env.js";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  experimental: {
    mdxRs: true, // Use Rust-based MDX compiler (faster)
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          onVisitLine(node) {
            // Prevent empty lines from collapsing
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
  },
});

export default withMDX(nextConfig);
```

---

## Task 3: Create MDX Utilities

### File: `/src/lib/blog/mdx.ts`

```typescript
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

// ============================================================================
// TYPES
// ============================================================================

export interface BlogPost {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
  readingTime: string;
}

export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  author: string;
  authorUrl?: string;
  image: string;
  imageAlt: string;
  category: string;
  tags: string[];
  published: boolean;
}

// ============================================================================
// CONSTANTS
// ============================================================================

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

// ============================================================================
// UTILITIES
// ============================================================================

/**
 * Get all blog posts
 */
export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(BLOG_DIR);

  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const filePath = path.join(BLOG_DIR, file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        frontmatter: data as BlogFrontmatter,
        content,
        readingTime: readingTime(content).text,
      };
    })
    .filter((post) => post.frontmatter.published) // Only published posts
    .sort((a, b) => {
      // Sort by date (newest first)
      return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
    });

  return posts;
}

/**
 * Get a single blog post by slug
 */
export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      frontmatter: data as BlogFrontmatter,
      content,
      readingTime: readingTime(content).text,
    };
  } catch (error) {
    return null;
  }
}

/**
 * Get all unique categories
 */
export function getCategories(): string[] {
  const posts = getAllPosts();
  const categories = posts.map((post) => post.frontmatter.category);
  return Array.from(new Set(categories)).sort();
}

/**
 * Get all unique tags
 */
export function getTags(): string[] {
  const posts = getAllPosts();
  const tags = posts.flatMap((post) => post.frontmatter.tags);
  return Array.from(new Set(tags)).sort();
}

/**
 * Get posts by category
 */
export function getPostsByCategory(category: string): BlogPost[] {
  const posts = getAllPosts();
  return posts.filter((post) => post.frontmatter.category === category);
}

/**
 * Get posts by tag
 */
export function getPostsByTag(tag: string): BlogPost[] {
  const posts = getAllPosts();
  return posts.filter((post) => post.frontmatter.tags.includes(tag));
}
```

---

## Task 4: Create Blog Listing Page

### File: `/src/app/blog/page.tsx`

```typescript
import { getAllPosts } from "@/lib/blog/mdx";
import { BlogCard } from "@/components/blog/blog-card";
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
    en: "Blog - Tips, Guides & Industry Insights",
    "pt-br": "Blog - Dicas, Guias e Insights da Indústria",
  },
  description: {
    en: "Read articles about software development, freelancing, agile methodologies, and more from Lontra Ágil.",
    "pt-br": "Leia artigos sobre desenvolvimento de software, freelancing, metodologias ágeis e muito mais da Lontra Ágil.",
  },
  path: "/blog",
  locale: "pt-br",
});

// Revalidate every 6 hours
export const revalidate = 21600;

// ============================================================================
// COMPONENT
// ============================================================================

export default function BlogPage() {
  const posts = getAllPosts();

  const webPageSchema = generateWebPageSchema({
    name: "Blog - Lontra Ágil",
    description: "Artigos sobre desenvolvimento de software e freelancing",
    url: "https://lontraagil.com/blog",
    locale: "pt-br",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Início", url: "https://lontraagil.com", position: 1 },
    { name: "Blog", url: "https://lontraagil.com/blog", position: 2 },
  ]);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <JsonLdScript data={webPageSchema} />
      <JsonLdScript data={breadcrumbSchema} />

      <PublicLayout>
        <div className="container mx-auto px-4 py-16">
          <header className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold">Blog</h1>
            <p className="text-lg text-muted-foreground">
              Dicas, guias e insights sobre desenvolvimento de software e freelancing
            </p>
          </header>

          {posts.length === 0 ? (
            <div className="text-center text-muted-foreground">
              <p>Nenhum post publicado ainda. Volte em breve!</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </PublicLayout>
    </>
  );
}
```

---

## Task 5: Create Individual Blog Post Page

### File: `/src/app/blog/[slug]/page.tsx`

```typescript
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog/mdx";
import { PublicLayout } from "@/components/layout/public-layout";
import { BlogHeader } from "@/components/blog/blog-header";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/blog/mdx-components";
import { JsonLdScript } from "@/lib/seo/json-ld-script";
import {
  generateBlogPostingSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo/json-ld-schemas";
import type { Metadata } from "next";

// ============================================================================
// TYPES
// ============================================================================

interface BlogPostPageProps {
  params: { slug: string };
}

// ============================================================================
// METADATA
// ============================================================================

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const { frontmatter } = post;

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    openGraph: {
      type: "article",
      title: frontmatter.title,
      description: frontmatter.description,
      images: [frontmatter.image],
      publishedTime: frontmatter.date,
      authors: [frontmatter.author],
    },
    twitter: {
      card: "summary_large_image",
      title: frontmatter.title,
      description: frontmatter.description,
      images: [frontmatter.image],
    },
  };
}

// ============================================================================
// STATIC PARAMS
// ============================================================================

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Revalidate every 6 hours
export const revalidate = 21600;

// ============================================================================
// COMPONENT
// ============================================================================

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const { frontmatter, content, readingTime } = post;

  const blogPostingSchema = generateBlogPostingSchema({
    headline: frontmatter.title,
    description: frontmatter.description,
    datePublished: frontmatter.date,
    dateModified: frontmatter.date,
    authorName: frontmatter.author,
    authorUrl: frontmatter.authorUrl,
    image: frontmatter.image,
    url: `https://lontraagil.com/blog/${params.slug}`,
    locale: "pt-br",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Início", url: "https://lontraagil.com", position: 1 },
    { name: "Blog", url: "https://lontraagil.com/blog", position: 2 },
    {
      name: frontmatter.title,
      url: `https://lontraagil.com/blog/${params.slug}`,
      position: 3,
    },
  ]);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <JsonLdScript data={blogPostingSchema} />
      <JsonLdScript data={breadcrumbSchema} />

      <PublicLayout>
        <article className="container mx-auto max-w-4xl px-4 py-16">
          <BlogHeader frontmatter={frontmatter} readingTime={readingTime} />

          <div className="prose prose-lg dark:prose-invert mx-auto mt-8">
            <MDXRemote source={content} components={mdxComponents} />
          </div>
        </article>
      </PublicLayout>
    </>
  );
}
```

---

## Task 6: Create Blog Components

### File: `/src/components/blog/blog-card.tsx`

```typescript
import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog/mdx";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const { slug, frontmatter, readingTime } = post;

  return (
    <Link href={`/blog/${slug}`} className="group">
      <article className="overflow-hidden rounded-lg border bg-card transition-shadow hover:shadow-lg">
        <div className="relative aspect-video">
          <Image
            src={frontmatter.image}
            alt={frontmatter.imageAlt}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
            <span>{frontmatter.category}</span>
            <span>•</span>
            <span>{readingTime}</span>
          </div>

          <h2 className="mb-2 text-xl font-semibold group-hover:text-primary">
            {frontmatter.title}
          </h2>

          <p className="mb-4 text-muted-foreground">{frontmatter.description}</p>

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{frontmatter.author}</span>
            <time dateTime={frontmatter.date}>
              {new Date(frontmatter.date).toLocaleDateString("pt-BR")}
            </time>
          </div>
        </div>
      </article>
    </Link>
  );
}
```

### File: `/src/components/blog/blog-header.tsx`

```typescript
import Image from "next/image";
import type { BlogFrontmatter } from "@/lib/blog/mdx";

interface BlogHeaderProps {
  frontmatter: BlogFrontmatter;
  readingTime: string;
}

export function BlogHeader({ frontmatter, readingTime }: BlogHeaderProps) {
  return (
    <header>
      <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
        <span>{frontmatter.category}</span>
        <span>•</span>
        <span>{readingTime}</span>
      </div>

      <h1 className="mb-4 text-4xl font-bold">{frontmatter.title}</h1>

      <p className="mb-6 text-xl text-muted-foreground">{frontmatter.description}</p>

      <div className="mb-8 flex items-center justify-between border-y py-4">
        <div>
          <p className="font-medium">{frontmatter.author}</p>
          <time
            dateTime={frontmatter.date}
            className="text-sm text-muted-foreground"
          >
            {new Date(frontmatter.date).toLocaleDateString("pt-BR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>

        <div className="flex gap-2">
          {frontmatter.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-muted px-3 py-1 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="relative mb-8 aspect-video overflow-hidden rounded-lg">
        <Image
          src={frontmatter.image}
          alt={frontmatter.imageAlt}
          fill
          className="object-cover"
          priority
        />
      </div>
    </header>
  );
}
```

### File: `/src/components/blog/mdx-components.tsx`

```typescript
import Image from "next/image";
import Link from "next/link";
import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  // Custom heading with anchor links
  h2: ({ children, id }) => (
    <h2 id={id} className="group relative">
      {children}
      {id && (
        <a
          href={`#${id}`}
          className="ml-2 opacity-0 transition-opacity group-hover:opacity-100"
          aria-label="Link to this section"
        >
          #
        </a>
      )}
    </h2>
  ),

  h3: ({ children, id }) => (
    <h3 id={id} className="group relative">
      {children}
      {id && (
        <a
          href={`#${id}`}
          className="ml-2 opacity-0 transition-opacity group-hover:opacity-100"
          aria-label="Link to this section"
        >
          #
        </a>
      )}
    </h3>
  ),

  // Custom image component
  img: (props) => (
    <Image
      {...(props as any)}
      width={800}
      height={600}
      className="rounded-lg"
      alt={props.alt || ""}
    />
  ),

  // Custom link component
  a: ({ href, children }) => {
    const isExternal = href?.startsWith("http");

    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline hover:no-underline"
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href || "#"} className="text-primary underline hover:no-underline">
        {children}
      </Link>
    );
  },

  // Custom code blocks are handled by rehype-pretty-code
};
```

---

## Task 7: Create Example Blog Post

### File: `/src/content/blog/getting-started.mdx`

```mdx
---
title: "Getting Started with Lontra Ágil: A Complete Guide"
description: "Learn how to get started on Lontra Ágil, whether you're a developer looking for projects or a contractor hiring talent."
date: "2025-01-15"
author: "Lontra Team"
authorUrl: "https://lontraagil.com/about"
image: "/blog/getting-started.jpg"
imageAlt: "Developer working on laptop"
category: "Guides"
tags: ["getting started", "tutorial", "developers", "contractors"]
published: true
---

## Welcome to Lontra Ágil!

This guide will help you get started on our platform, whether you're a **developer** looking for exciting projects or a **contractor** hiring talented developers.

## For Developers

### 1. Create Your Profile

Start by [signing up](/app/auth/developer) as a developer. Make sure to:

- Use a professional email address
- Choose a strong password
- Verify your email

### 2. Complete Your Profile

A complete profile gets **3x more views**. Include:

- Professional photo
- Detailed bio highlighting your expertise
- Skills and technologies you work with
- Portfolio of previous work
- Hourly rate or project pricing

```typescript
// Example: Adding skills to your profile
const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL"
];
```

### 3. Browse Projects

Use our advanced search to find projects that match your skills:

- Filter by technology stack
- Filter by budget range
- Filter by project duration
- Filter by urgency

### 4. Submit Proposals

When you find an interesting project:

1. Read the requirements carefully
2. Write a personalized proposal
3. Explain your approach
4. Provide a timeline estimate
5. Include relevant portfolio pieces

## For Contractors

### 1. Create Your Account

[Sign up](/app/auth/contractor) as a contractor and complete your company profile.

### 2. Post Your First Project

Creating a detailed project description helps attract the right developers:

- Clear project goals
- Required technologies
- Timeline and milestones
- Budget range
- Communication preferences

### 3. Review Proposals

Once proposals start coming in:

- Review developer profiles
- Check portfolios and reviews
- Interview top candidates
- Compare proposals

### 4. Hire and Collaborate

After selecting a developer:

- Set clear milestones
- Use our messaging system
- Track progress
- Release payments upon completion

## Tips for Success

> "Clear communication is the key to successful projects" - Lontra Team

### For Both Developers and Contractors

1. **Be responsive**: Reply to messages within 24 hours
2. **Be professional**: Maintain a courteous tone
3. **Be clear**: Set expectations upfront
4. **Be honest**: Don't overpromise
5. **Be transparent**: Communicate issues early

## Payment and Fees

Our platform charges:

- **Developers**: 5% platform fee
- **Contractors**: 3% platform fee

Payments are securely processed and released upon milestone completion.

## Getting Help

Need assistance? We're here to help:

- [Help Center](/help) - FAQs and guides
- [Contact Us](/contact) - Get in touch with support
- Community Forum - Connect with other users

## Next Steps

Ready to get started?

- [Sign up as a Developer](/app/auth/developer)
- [Sign up as a Contractor](/app/auth/contractor)
- [Explore Pricing](/pricing)

---

Have questions? [Contact our support team](/contact) - we're happy to help!
```

---

## Task 8: Create Blog Sitemap

### File: `/src/app/sitemap/blog/route.ts`

```typescript
import { getAllPosts } from "@/lib/blog/mdx";
import type { MetadataRoute } from "next";

export const revalidate = 21600; // 6 hours

export async function GET() {
  const posts = getAllPosts();

  const sitemap: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://lontraagil.com/blog/${post.slug}`,
    lastModified: new Date(post.frontmatter.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemap
  .map(
    (item) => `  <url>
    <loc>${item.url}</loc>
    <lastmod>${item.lastModified?.toISOString()}</lastmod>
    <changefreq>${item.changeFrequency}</changefreq>
    <priority>${item.priority}</priority>
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

## Checklist

- [ ] MDX dependencies installed
- [ ] next.config.js configured for MDX
- [ ] MDX utilities created (`/src/lib/blog/mdx.ts`)
- [ ] Blog listing page created
- [ ] Individual blog post page created
- [ ] Blog components created (BlogCard, BlogHeader, mdxComponents)
- [ ] At least one example blog post created
- [ ] Blog sitemap route created
- [ ] Code syntax highlighting working
- [ ] Images rendering correctly
- [ ] BlogPosting schema validated
- [ ] Reading time calculation working

---

## Next Steps

Once Phase 4 is complete:
1. Proceed to [Phase 5: Landing Variants](./05-PHASE-5-LANDING-VARIANTS.md)
2. Create more blog content over time
3. Consider adding categories/tags pages
4. Consider adding RSS feed
