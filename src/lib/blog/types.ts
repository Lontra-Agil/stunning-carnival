export interface BlogPostFrontmatter {
	title: string;
	description: string;
	date: string;
	author: string;
	authorRole?: string;
	authorImage?: string;
	image?: string;
	imageAlt?: string;
	tags?: string[];
	category?: string;
	published?: boolean;
	locale: "pt-br" | "en";
	seoTitle?: string;
	seoDescription?: string;
	keywords?: string[];
	canonicalUrl?: string;
}

export interface BlogPost {
	slug: string;
	frontmatter: BlogPostFrontmatter;
	content: string;
	readingTime: string;
}

export interface BlogPostMeta {
	slug: string;
	frontmatter: BlogPostFrontmatter;
	readingTime: string;
}
