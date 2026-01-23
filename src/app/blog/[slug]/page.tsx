import { BlogHeader } from "@/components/blog";
import { mdxComponents } from "@/components/blog/mdx-components";
import { LandingPageCTA } from "@/components/landing-page-components/landing-page-cta";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { getPostBySlug, getPostSlugs } from "@/lib/blog/mdx";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

interface BlogPostPageProps {
	params: Promise<{
		slug: string;
	}>;
}

export async function generateStaticParams() {
	const ptBrSlugs = getPostSlugs("pt-br");
	const enSlugs = getPostSlugs("en");

	return [...ptBrSlugs, ...enSlugs].map((slug) => ({
		slug,
	}));
}

export async function generateMetadata({
	params,
}: BlogPostPageProps): Promise<Metadata> {
	const { slug } = await params;

	// Try pt-br first, then en
	let post = getPostBySlug(slug, "pt-br");
	if (!post) {
		post = getPostBySlug(slug, "en");
	}

	if (!post) {
		return {
			title: "Post Not Found",
		};
	}

	const { frontmatter } = post;
	const title = frontmatter.seoTitle ?? frontmatter.title;
	const description = frontmatter.seoDescription ?? frontmatter.description;

	return {
		title: `${title} | Lontra Agil Blog`,
		description,
		keywords: frontmatter.keywords,
		authors: [{ name: frontmatter.author }],
		openGraph: {
			title,
			description,
			type: "article",
			publishedTime: frontmatter.date,
			authors: [frontmatter.author],
			locale: frontmatter.locale === "pt-br" ? "pt_BR" : "en_US",
			images: frontmatter.image
				? [
						{
							url: frontmatter.image,
							alt: frontmatter.imageAlt ?? frontmatter.title,
						},
					]
				: undefined,
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: frontmatter.image ? [frontmatter.image] : undefined,
		},
		alternates: {
			canonical: frontmatter.canonicalUrl,
		},
	};
}

function BlogPostJsonLd({
	title,
	description,
	date,
	author,
	image,
	url,
}: {
	title: string;
	description: string;
	date: string;
	author: string;
	image?: string;
	url: string;
}) {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		headline: title,
		description,
		author: {
			"@type": "Person",
			name: author,
		},
		datePublished: date,
		dateModified: date,
		publisher: {
			"@type": "Organization",
			name: "Lontra Agil",
			logo: {
				"@type": "ImageObject",
				url: "https://lontraagil.com/logo.png",
			},
		},
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": url,
		},
		...(image && {
			image: {
				"@type": "ImageObject",
				url: image,
			},
		}),
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
		/>
	);
}

function BreadcrumbJsonLd({ title, slug }: { title: string; slug: string }) {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Home",
				item: "https://lontraagil.com",
			},
			{
				"@type": "ListItem",
				position: 2,
				name: "Blog",
				item: "https://lontraagil.com/blog",
			},
			{
				"@type": "ListItem",
				position: 3,
				name: title,
				item: `https://lontraagil.com/blog/${slug}`,
			},
		],
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
		/>
	);
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
	const { slug } = await params;

	// Try pt-br first, then en
	let post = getPostBySlug(slug, "pt-br");
	if (!post) {
		post = getPostBySlug(slug, "en");
	}

	if (!post) {
		notFound();
	}

	const { frontmatter, content, readingTime } = post;

	return (
		<div className="relative min-h-screen w-full bg-background">
			<BlogPostJsonLd
				title={frontmatter.title}
				description={frontmatter.description}
				date={frontmatter.date}
				author={frontmatter.author}
				image={frontmatter.image}
				url={`https://lontraagil.com/blog/${slug}`}
			/>
			<BreadcrumbJsonLd title={frontmatter.title} slug={slug} />

			<Header />

			<main className="container mx-auto px-4 py-16">
				<article className="mx-auto max-w-3xl">
					<div className="mb-8">
						<Button variant="ghost" asChild>
							<Link href="/blog" className="flex items-center gap-2">
								<ArrowLeft className="h-4 w-4" />
								{frontmatter.locale === "pt-br"
									? "Voltar ao Blog"
									: "Back to Blog"}
							</Link>
						</Button>
					</div>

					<BlogHeader frontmatter={frontmatter} readingTime={readingTime} />

					<div className="prose prose-neutral dark:prose-invert max-w-none">
						<MDXRemote
							source={content}
							components={mdxComponents}
							options={{
								mdxOptions: {
									remarkPlugins: [remarkGfm],
									rehypePlugins: [
										rehypeSlug,
										[
											rehypeAutolinkHeadings,
											{
												behavior: "wrap",
												properties: {
													className: ["anchor"],
												},
											},
										],
										[
											rehypePrettyCode,
											{
												theme: "github-dark",
												keepBackground: true,
											},
										],
									],
								},
							}}
						/>
					</div>
				</article>
			</main>

			<LandingPageCTA />

			<Footer />
		</div>
	);
}
