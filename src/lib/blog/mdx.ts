import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { BlogPost, BlogPostFrontmatter, BlogPostMeta } from "./types";

const BLOG_CONTENT_PATH = path.join(process.cwd(), "src/content/blog");

export function getPostSlugs(locale: "pt-br" | "en" = "pt-br"): string[] {
	const localeDir = path.join(BLOG_CONTENT_PATH, locale);

	if (!fs.existsSync(localeDir)) {
		return [];
	}

	return fs
		.readdirSync(localeDir)
		.filter((file) => file.endsWith(".mdx"))
		.map((file) => file.replace(/\.mdx$/, ""));
}

export function getPostBySlug(
	slug: string,
	locale: "pt-br" | "en" = "pt-br",
): BlogPost | null {
	const filePath = path.join(BLOG_CONTENT_PATH, locale, `${slug}.mdx`);

	if (!fs.existsSync(filePath)) {
		return null;
	}

	const fileContents = fs.readFileSync(filePath, "utf-8");
	const { data, content } = matter(fileContents);

	const frontmatter = data as BlogPostFrontmatter;

	// Skip unpublished posts in production
	if (
		process.env.NODE_ENV === "production" &&
		frontmatter.published === false
	) {
		return null;
	}

	return {
		slug,
		frontmatter: {
			...frontmatter,
			locale,
		},
		content,
		readingTime: readingTime(content).text,
	};
}

export function getAllPosts(locale: "pt-br" | "en" = "pt-br"): BlogPostMeta[] {
	const slugs = getPostSlugs(locale);

	const posts = slugs
		.map((slug) => {
			const post = getPostBySlug(slug, locale);
			if (!post) return null;

			return {
				slug: post.slug,
				frontmatter: post.frontmatter,
				readingTime: post.readingTime,
			};
		})
		.filter((post): post is BlogPostMeta => post !== null)
		.sort((a, b) => {
			const dateA = new Date(a.frontmatter.date);
			const dateB = new Date(b.frontmatter.date);
			return dateB.getTime() - dateA.getTime();
		});

	return posts;
}

export function getAllPostsAllLocales(): BlogPostMeta[] {
	const ptBrPosts = getAllPosts("pt-br");
	const enPosts = getAllPosts("en");

	return [...ptBrPosts, ...enPosts].sort((a, b) => {
		const dateA = new Date(a.frontmatter.date);
		const dateB = new Date(b.frontmatter.date);
		return dateB.getTime() - dateA.getTime();
	});
}

export function getPostsByTag(
	tag: string,
	locale: "pt-br" | "en" = "pt-br",
): BlogPostMeta[] {
	return getAllPosts(locale).filter((post) =>
		post.frontmatter.tags?.includes(tag),
	);
}

export function getPostsByCategory(
	category: string,
	locale: "pt-br" | "en" = "pt-br",
): BlogPostMeta[] {
	return getAllPosts(locale).filter(
		(post) => post.frontmatter.category === category,
	);
}

export function getAllTags(locale: "pt-br" | "en" = "pt-br"): string[] {
	const posts = getAllPosts(locale);
	const tags = new Set<string>();

	for (const post of posts) {
		if (post.frontmatter.tags) {
			for (const tag of post.frontmatter.tags) {
				tags.add(tag);
			}
		}
	}

	return Array.from(tags).sort();
}

export function getAllCategories(locale: "pt-br" | "en" = "pt-br"): string[] {
	const posts = getAllPosts(locale);
	const categories = new Set<string>();

	for (const post of posts) {
		if (post.frontmatter.category) {
			categories.add(post.frontmatter.category);
		}
	}

	return Array.from(categories).sort();
}
