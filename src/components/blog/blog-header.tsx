import { Badge } from "@/components/ui/badge";
import type { BlogPostFrontmatter } from "@/lib/blog/types";
import { Calendar, Clock, User } from "lucide-react";
import Image from "next/image";

interface BlogHeaderProps {
	frontmatter: BlogPostFrontmatter;
	readingTime: string;
}

export function BlogHeader({ frontmatter, readingTime }: BlogHeaderProps) {
	const locale = frontmatter.locale;

	return (
		<header className="mb-8">
			{frontmatter.category && (
				<Badge variant="secondary" className="mb-4">
					{frontmatter.category}
				</Badge>
			)}

			<h1 className="mb-4 font-bold text-3xl tracking-tight md:text-4xl lg:text-5xl">
				{frontmatter.title}
			</h1>

			<p className="mb-6 text-muted-foreground text-xl">
				{frontmatter.description}
			</p>

			<div className="mb-6 flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
				<div className="flex items-center gap-2">
					{frontmatter.authorImage && (
						<Image
							src={frontmatter.authorImage}
							alt={frontmatter.author}
							width={32}
							height={32}
							className="rounded-full"
						/>
					)}
					<div className="flex flex-col">
						<span className="font-medium text-foreground">
							{frontmatter.author}
						</span>
						{frontmatter.authorRole && (
							<span className="text-xs">{frontmatter.authorRole}</span>
						)}
					</div>
				</div>

				<div className="flex items-center gap-1">
					<Calendar className="h-4 w-4" />
					<time dateTime={frontmatter.date}>
						{new Date(frontmatter.date).toLocaleDateString(
							locale === "pt-br" ? "pt-BR" : "en-US",
							{
								year: "numeric",
								month: "long",
								day: "numeric",
							},
						)}
					</time>
				</div>

				<div className="flex items-center gap-1">
					<Clock className="h-4 w-4" />
					<span>{readingTime}</span>
				</div>
			</div>

			{frontmatter.tags && frontmatter.tags.length > 0 && (
				<div className="mb-6 flex flex-wrap gap-2">
					{frontmatter.tags.map((tag) => (
						<Badge key={tag} variant="outline">
							{tag}
						</Badge>
					))}
				</div>
			)}

			{frontmatter.image && (
				<div className="relative mb-8 aspect-video overflow-hidden rounded-lg">
					<Image
						src={frontmatter.image}
						alt={frontmatter.imageAlt ?? frontmatter.title}
						fill
						className="object-cover"
						priority
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
					/>
				</div>
			)}
		</header>
	);
}
